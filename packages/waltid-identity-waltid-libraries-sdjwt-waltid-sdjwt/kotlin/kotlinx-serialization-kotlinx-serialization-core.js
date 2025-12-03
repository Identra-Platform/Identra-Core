(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.a8;
  var initMetadataForInterface = kotlin_kotlin.$_$.i7;
  var VOID = kotlin_kotlin.$_$.c;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.a1;
  var objectCreate = kotlin_kotlin.$_$.z7;
  var captureStack = kotlin_kotlin.$_$.t6;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.b1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.d1;
  var IllegalArgumentException = kotlin_kotlin.$_$.ea;
  var initMetadataForClass = kotlin_kotlin.$_$.f7;
  var toString = kotlin_kotlin.$_$.d8;
  var THROW_CCE = kotlin_kotlin.$_$.ia;
  var isInterface = kotlin_kotlin.$_$.r7;
  var emptyList = kotlin_kotlin.$_$.r4;
  var isBlank = kotlin_kotlin.$_$.z8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var Unit_instance = kotlin_kotlin.$_$.r3;
  var equals = kotlin_kotlin.$_$.a7;
  var toList = kotlin_kotlin.$_$.t5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.m;
  var toHashSet = kotlin_kotlin.$_$.r5;
  var copyToArray = kotlin_kotlin.$_$.q4;
  var toBooleanArray = kotlin_kotlin.$_$.q5;
  var withIndex = kotlin_kotlin.$_$.x5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var to = kotlin_kotlin.$_$.ib;
  var toMap = kotlin_kotlin.$_$.u5;
  var lazy = kotlin_kotlin.$_$.cb;
  var contentEquals = kotlin_kotlin.$_$.d4;
  var until = kotlin_kotlin.$_$.k8;
  var joinToString = kotlin_kotlin.$_$.y4;
  var KProperty1 = kotlin_kotlin.$_$.m8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.c7;
  var initMetadataForObject = kotlin_kotlin.$_$.k7;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.xa;
  var getStringHashCode = kotlin_kotlin.$_$.d7;
  var Long = kotlin_kotlin.$_$.fa;
  var Char = kotlin_kotlin.$_$.y9;
  var Companion_getInstance = kotlin_kotlin.$_$.i3;
  var Duration = kotlin_kotlin.$_$.w9;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.j3;
  var toIntOrNull = kotlin_kotlin.$_$.n9;
  var hashCode = kotlin_kotlin.$_$.e7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var ArrayList = kotlin_kotlin.$_$.s3;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.i;
  var KtList = kotlin_kotlin.$_$.v3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var LinkedHashMap = kotlin_kotlin.$_$.u3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var KtMap = kotlin_kotlin.$_$.x3;
  var step = kotlin_kotlin.$_$.j8;
  var KtMutableMap = kotlin_kotlin.$_$.y3;
  var getValue = kotlin_kotlin.$_$.v4;
  var longArray = kotlin_kotlin.$_$.u7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.g7;
  var get_lastIndex = kotlin_kotlin.$_$.a5;
  var countTrailingZeroBits = kotlin_kotlin.$_$.va;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.e;
  var lazy_0 = kotlin_kotlin.$_$.bb;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var contentHashCode = kotlin_kotlin.$_$.g4;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var booleanArray = kotlin_kotlin.$_$.s6;
  var emptyMap = kotlin_kotlin.$_$.s4;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.k3;
  var isCharArray = kotlin_kotlin.$_$.n7;
  var charArray = kotlin_kotlin.$_$.v6;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.c3;
  var isDoubleArray = kotlin_kotlin.$_$.o7;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.d3;
  var isFloatArray = kotlin_kotlin.$_$.p7;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.l3;
  var isLongArray = kotlin_kotlin.$_$.s7;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.p3;
  var ULongArray = kotlin_kotlin.$_$.oa;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.l2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.j2;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.e3;
  var isIntArray = kotlin_kotlin.$_$.q7;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.o3;
  var UIntArray = kotlin_kotlin.$_$.ma;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.e2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.c2;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.f3;
  var isShortArray = kotlin_kotlin.$_$.t7;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.q3;
  var UShortArray = kotlin_kotlin.$_$.qa;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.s2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.q2;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.b3;
  var isByteArray = kotlin_kotlin.$_$.m7;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.n3;
  var UByteArray = kotlin_kotlin.$_$.ka;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.y1;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.v1;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.a3;
  var isBooleanArray = kotlin_kotlin.$_$.l7;
  var coerceAtLeast = kotlin_kotlin.$_$.g8;
  var copyOf = kotlin_kotlin.$_$.k4;
  var copyOf_0 = kotlin_kotlin.$_$.m4;
  var copyOf_1 = kotlin_kotlin.$_$.n4;
  var copyOf_2 = kotlin_kotlin.$_$.i4;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.o2;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.p2;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.m2;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.n2;
  var copyOf_3 = kotlin_kotlin.$_$.p4;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.h2;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.i2;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.f2;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.g2;
  var copyOf_4 = kotlin_kotlin.$_$.h4;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.v2;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.w2;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.t2;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.u2;
  var copyOf_5 = kotlin_kotlin.$_$.l4;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.a2;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.b2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.x1;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.z1;
  var copyOf_6 = kotlin_kotlin.$_$.j4;
  var trimIndent = kotlin_kotlin.$_$.u9;
  var charSequenceLength = kotlin_kotlin.$_$.x6;
  var lastOrNull = kotlin_kotlin.$_$.c5;
  var get_lastIndex_0 = kotlin_kotlin.$_$.b5;
  var ULong = kotlin_kotlin.$_$.pa;
  var UInt = kotlin_kotlin.$_$.na;
  var UShort = kotlin_kotlin.$_$.ra;
  var UByte = kotlin_kotlin.$_$.la;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.h3;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.g3;
  var getKClass = kotlin_kotlin.$_$.b;
  var Unit = kotlin_kotlin.$_$.sa;
  var Uuid = kotlin_kotlin.$_$.x9;
  var mapOf = kotlin_kotlin.$_$.h5;
  var get_indices = kotlin_kotlin.$_$.x4;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var get_indices_0 = kotlin_kotlin.$_$.w4;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [DeserializationStrategy]);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(elementNames$$inlined$Iterable$1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.fm(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.dp(descriptor, index, deserializer, previousValue) : $super.dp.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(EnumSerializer, 'EnumSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(EnumDescriptor, 'EnumDescriptor', VOID, PluginGeneratedSerialDescriptor);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(DoubleArrayBuilder, 'DoubleArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(FloatArrayBuilder, 'FloatArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(LongArrayBuilder, 'LongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ULongArrayBuilder, 'ULongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(IntArrayBuilder, 'IntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UIntArrayBuilder, 'UIntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ShortArrayBuilder, 'ShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UShortArrayBuilder, 'UShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UByteArrayBuilder, 'UByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(BooleanArrayBuilder, 'BooleanArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  //endregion
  function KSerializer() {
  }
  function DeserializationStrategy() {
  }
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.gm(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.hm());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.i() === 1 ? "Field '" + missingFields.k(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.im_1 = missingFields;
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.em().jm()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_0(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ContextDescriptor() {
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.km(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.em();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.om_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.lm_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementNames$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementDescriptors$1($this_elementDescriptors) {
    this.an_1 = $this_elementDescriptors;
    this.zm_1 = $this_elementDescriptors.sm();
  }
  protoOf(elementDescriptors$1).g = function () {
    return this.zm_1 > 0;
  };
  protoOf(elementDescriptors$1).h = function () {
    var tmp = this.an_1.sm();
    var _unary__edvuaz = this.zm_1;
    this.zm_1 = _unary__edvuaz - 1 | 0;
    return this.an_1.xm(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.bn_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).f = function () {
    return new elementDescriptors$1(this.bn_1);
  };
  function elementNames$1($this_elementNames) {
    this.dn_1 = $this_elementNames;
    this.cn_1 = $this_elementNames.sm();
  }
  protoOf(elementNames$1).g = function () {
    return this.cn_1 > 0;
  };
  protoOf(elementNames$1).h = function () {
    var tmp = this.dn_1.sm();
    var _unary__edvuaz = this.cn_1;
    this.cn_1 = _unary__edvuaz - 1 | 0;
    return this.dn_1.um(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.en_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).f = function () {
    return new elementNames$1(this.en_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.in_1.i(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.fn_1 = serialName;
    this.gn_1 = false;
    this.hn_1 = emptyList();
    this.in_1 = ArrayList_init_$Create$();
    this.jn_1 = HashSet_init_$Create$();
    this.kn_1 = ArrayList_init_$Create$();
    this.ln_1 = ArrayList_init_$Create$();
    this.mn_1 = ArrayList_init_$Create$();
  }
  protoOf(ClassSerialDescriptorBuilder).nn = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.jn_1.d(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.fn_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.in_1.d(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.kn_1.d(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.ln_1.d(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.mn_1.d(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).on = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.nn(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.nn.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.ao_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.r1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.zn_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.um(it) + ': ' + this$0.xm(it).pm();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.pn_1 = serialName;
    this.qn_1 = kind;
    this.rn_1 = elementsCount;
    this.sn_1 = builder.hn_1;
    this.tn_1 = toHashSet(builder.in_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.in_1;
    tmp.un_1 = copyToArray(this_0);
    this.vn_1 = compactArray(builder.kn_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.ln_1;
    tmp_0.wn_1 = copyToArray(this_1);
    this.xn_1 = toBooleanArray(builder.mn_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.un_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.f();
    while (_iterator__ex2g4s.g()) {
      var item = _iterator__ex2g4s.h();
      var tmp$ret$2 = to(item.ce_1, item.be_1);
      destination.d(tmp$ret$2);
    }
    tmp_1.yn_1 = toMap(destination);
    this.zn_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.ao_1 = lazy(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).pm = function () {
    return this.pn_1;
  };
  protoOf(SerialDescriptorImpl).qm = function () {
    return this.qn_1;
  };
  protoOf(SerialDescriptorImpl).sm = function () {
    return this.rn_1;
  };
  protoOf(SerialDescriptorImpl).tm = function () {
    return this.sn_1;
  };
  protoOf(SerialDescriptorImpl).bo = function () {
    return this.tn_1;
  };
  protoOf(SerialDescriptorImpl).um = function (index) {
    return getChecked(this.un_1, index);
  };
  protoOf(SerialDescriptorImpl).vm = function (name) {
    var tmp0_elvis_lhs = this.yn_1.u1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).wm = function (index) {
    return getChecked(this.wn_1, index);
  };
  protoOf(SerialDescriptorImpl).xm = function (index) {
    return getChecked(this.vn_1, index);
  };
  protoOf(SerialDescriptorImpl).ym = function (index) {
    return getChecked_0(this.xn_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.pm() === other.pm())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.zn_1, other.zn_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.sm() === other.sm())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.sm();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.xm(index).pm() === other.xm(index).pm())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.xm(index).qm(), other.xm(index).qm())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.rn_1);
    var tmp_0 = this.pn_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).ha());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).co = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).do = function () {
    return true;
  };
  protoOf(AbstractDecoder).eo = function () {
    return null;
  };
  protoOf(AbstractDecoder).fo = function () {
    var tmp = this.co();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).go = function () {
    var tmp = this.co();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ho = function () {
    var tmp = this.co();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).io = function () {
    var tmp = this.co();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).jo = function () {
    var tmp = this.co();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ko = function () {
    var tmp = this.co();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).lo = function () {
    var tmp = this.co();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).mo = function () {
    var tmp = this.co();
    return tmp instanceof Char ? tmp.b1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).no = function () {
    var tmp = this.co();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).oo = function (enumDescriptor) {
    var tmp = this.co();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).po = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).qo = function (deserializer, previousValue) {
    return this.ro(deserializer);
  };
  protoOf(AbstractDecoder).so = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).to = function (descriptor) {
  };
  protoOf(AbstractDecoder).uo = function (descriptor, index) {
    return this.fo();
  };
  protoOf(AbstractDecoder).vo = function (descriptor, index) {
    return this.go();
  };
  protoOf(AbstractDecoder).wo = function (descriptor, index) {
    return this.ho();
  };
  protoOf(AbstractDecoder).xo = function (descriptor, index) {
    return this.io();
  };
  protoOf(AbstractDecoder).yo = function (descriptor, index) {
    return this.jo();
  };
  protoOf(AbstractDecoder).zo = function (descriptor, index) {
    return this.ko();
  };
  protoOf(AbstractDecoder).ap = function (descriptor, index) {
    return this.lo();
  };
  protoOf(AbstractDecoder).bp = function (descriptor, index) {
    return this.mo();
  };
  protoOf(AbstractDecoder).cp = function (descriptor, index) {
    return this.po(descriptor.xm(index));
  };
  protoOf(AbstractDecoder).dp = function (descriptor, index, deserializer, previousValue) {
    return this.qo(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).fp = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.em().jm();
    var tmp;
    if (isNullabilitySupported || this.do()) {
      tmp = this.qo(deserializer, previousValue);
    } else {
      tmp = this.eo();
    }
    return tmp;
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).gm = function (decoder, klassName) {
    return decoder.gp().kp(this.hm(), klassName);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.ha() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.ha() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.lp_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).em = function () {
    return this.lp_1;
  };
  protoOf(NothingSerializer_0).fm = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.mp_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).em = function () {
    return this.mp_1;
  };
  protoOf(DurationSerializer).np = function (decoder) {
    return Companion_getInstance().sj(decoder.no());
  };
  protoOf(DurationSerializer).fm = function (decoder) {
    return new Duration(this.np(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.op_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).em = function () {
    return this.op_1;
  };
  protoOf(UuidSerializer).fm = function (decoder) {
    return Companion_getInstance_0().hk(decoder.no());
  };
  var UuidSerializer_instance;
  function UuidSerializer_getInstance() {
    if (UuidSerializer_instance == null)
      new UuidSerializer();
    return UuidSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).pm = function () {
    return 'kotlin.collections.ArrayList';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.rp_1 = elementDescriptor;
    this.sp_1 = 1;
  }
  protoOf(ListLikeDescriptor).qm = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).sm = function () {
    return this.sp_1;
  };
  protoOf(ListLikeDescriptor).um = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).vm = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).ym = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.pm() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).wm = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.pm() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).xm = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.pm() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.rp_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.rp_1, other.rp_1) && this.pm() === other.pm())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.rp_1), 31) + getStringHashCode(this.pm()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.pm() + '(' + toString(this.rp_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.tp_1 = serialName;
    this.up_1 = keyDescriptor;
    this.vp_1 = valueDescriptor;
    this.wp_1 = 2;
  }
  protoOf(MapLikeDescriptor).pm = function () {
    return this.tp_1;
  };
  protoOf(MapLikeDescriptor).qm = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).sm = function () {
    return this.wp_1;
  };
  protoOf(MapLikeDescriptor).um = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).vm = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).ym = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.pm() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).wm = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.pm() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).xm = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.pm() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.up_1;
        break;
      case 1:
        tmp = this.vp_1;
        break;
      default:
        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.pm() === other.pm()))
      return false;
    if (!equals(this.up_1, other.up_1))
      return false;
    if (!equals(this.vp_1, other.vp_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.pm());
    result = imul(31, result) + hashCode(this.up_1) | 0;
    result = imul(31, result) + hashCode(this.vp_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.pm() + '(' + toString(this.up_1) + ', ' + toString(this.vp_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.zp_1 = primitive.pm() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).pm = function () {
    return this.zp_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.bq_1 = new ArrayListClassDesc(element.em());
  }
  protoOf(ArrayListSerializer).em = function () {
    return this.bq_1;
  };
  protoOf(ArrayListSerializer).cq = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  };
  protoOf(ArrayListSerializer).dq = function (_this__u8e3s4) {
    return _this__u8e3s4.i();
  };
  protoOf(ArrayListSerializer).eq = function (_this__u8e3s4) {
    return this.dq(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).fq = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).gq = function (_this__u8e3s4) {
    return this.fq(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).hq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).iq = function (_this__u8e3s4) {
    return this.hq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).jq = function (_this__u8e3s4, size) {
    return _this__u8e3s4.x4(size);
  };
  protoOf(ArrayListSerializer).kq = function (_this__u8e3s4, size) {
    return this.jq(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).lq = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.f4(index, element);
  };
  protoOf(ArrayListSerializer).mq = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.lq(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.uq_1 = new LinkedHashMapClassDesc(kSerializer.em(), vSerializer.em());
  }
  protoOf(LinkedHashMapSerializer).em = function () {
    return this.uq_1;
  };
  protoOf(LinkedHashMapSerializer).cq = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).vq = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.i(), 2);
  };
  protoOf(LinkedHashMapSerializer).eq = function (_this__u8e3s4) {
    return this.vq(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).wq = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).gq = function (_this__u8e3s4) {
    return this.wq(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).xq = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).iq = function (_this__u8e3s4) {
    return this.xq((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).yq = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).kq = function (_this__u8e3s4, size) {
    return this.yq(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.zq_1 = keySerializer;
    this.ar_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).br = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.r_1;
    var last = progression.s_1;
    var step_0 = progression.t_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.cr(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).oq = function (decoder, builder, startIndex, size) {
    return this.br(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).cr = function (decoder, index, builder, checkIndex) {
    var key = decoder.ep(this.em(), index, this.zq_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.ip(this.em());
      // Inline function 'kotlin.require' call
      if (!(this_0 === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.s1(key)) {
      var tmp_2 = this.ar_1.em().qm();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.dp(this.em(), vIndex, this.ar_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.ep(this.em(), vIndex, this.ar_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.y1(key, value);
  };
  protoOf(MapLikeSerializer).pq = function (decoder, index, builder, checkIndex) {
    return this.cr(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.nq_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).oq = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.pq(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).pq = function (decoder, index, builder, checkIndex) {
    this.mq(builder, index, decoder.ep(this.em(), index, this.nq_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.jp($this.em());
    $this.kq(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).rq = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.iq(previous);
    var builder = tmp1_elvis_lhs == null ? this.cq() : tmp1_elvis_lhs;
    var startIndex = this.eq(builder);
    var compositeDecoder = decoder.so(this.em());
    if (compositeDecoder.hp()) {
      this.oq(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.ip(this.em());
        if (index === -1)
          break $l$loop;
        this.qq(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.to(this.em());
    return this.gq(builder);
  };
  protoOf(AbstractCollectionSerializer).fm = function (decoder) {
    return this.rq(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).qq = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.pq(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.pq.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.er_1 = new PrimitiveArrayDescriptor(primitiveSerializer.em());
  }
  protoOf(PrimitiveArraySerializer).em = function () {
    return this.er_1;
  };
  protoOf(PrimitiveArraySerializer).fr = function (_this__u8e3s4) {
    return _this__u8e3s4.gr();
  };
  protoOf(PrimitiveArraySerializer).eq = function (_this__u8e3s4) {
    return this.fr(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).hr = function (_this__u8e3s4) {
    return _this__u8e3s4.ir();
  };
  protoOf(PrimitiveArraySerializer).gq = function (_this__u8e3s4) {
    return this.hr(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).jr = function (_this__u8e3s4, size) {
    return _this__u8e3s4.kr(size);
  };
  protoOf(PrimitiveArraySerializer).kq = function (_this__u8e3s4, size) {
    return this.jr(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).lr = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).mq = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.lr(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).cq = function () {
    return this.iq(this.mr());
  };
  protoOf(PrimitiveArraySerializer).fm = function (decoder) {
    return this.rq(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).or = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.gr() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.kr(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.kr.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance = this;
    this.pr_1 = longArray(0);
  }
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).r2(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.tr_1[slot] = $this.tr_1[slot].v2((new Long(1, 0)).r2(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.tr_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.tr_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.q2());
          slotMarks = slotMarks.v2((new Long(1, 0)).r2(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.rr_1($this.qr_1, index)) {
            $this.tr_1[slot] = slotMarks;
            return index;
          }
        }
        $this.tr_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.qr_1 = descriptor;
    this.rr_1 = readIfAbsent;
    var elementsCount = this.qr_1.sm();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).r2(elementsCount);
      }
      tmp.sr_1 = tmp_0;
      this.tr_1 = Companion_getInstance_7().pr_1;
    } else {
      this.sr_1 = new Long(0, 0);
      this.tr_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).ur = function (index) {
    if (index < 64) {
      this.sr_1 = this.sr_1.v2((new Long(1, 0)).r2(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).vr = function () {
    var elementsCount = this.qr_1.sm();
    while (!this.sr_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.sr_1.q2());
      this.sr_1 = this.sr_1.v2((new Long(1, 0)).r2(index));
      if (this.rr_1(this.qr_1, index)) {
        return index;
      }
    }
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.wr_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.wr_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.ls(element.b2_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.xr_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer(serialName, values) {
    this.wr_1 = values;
    this.xr_1 = null;
    var tmp = this;
    tmp.yr_1 = lazy(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).em = function () {
    var tmp0 = this.yr_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.r1();
  };
  protoOf(EnumSerializer).fm = function (decoder) {
    var index = decoder.oo(this.em());
    if (!(0 <= index ? index <= (this.wr_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.em().pm() + ' enum values, ' + ('values size is ' + this.wr_1.length));
    }
    return this.wr_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.em().pm() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.zs_1;
    // Inline function 'kotlin.getValue' call
    elementDescriptors$factory();
    return tmp0.r1();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.um(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.ys_1 = ENUM_getInstance();
    var tmp = this;
    tmp.zs_1 = lazy(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).qm = function () {
    return this.ys_1;
  };
  protoOf(EnumDescriptor).xm = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.qm() === ENUM_getInstance()))
      return false;
    if (!(this.pm() === other.pm()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.pm() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.pm());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = get_elementNames(this).f();
    while (_iterator__ex2g4s.g()) {
      var element = _iterator__ex2g4s.h();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.em();
    }, null);
  }
  function elementDescriptors$factory() {
    return getPropertyCallableRef('elementDescriptors', 1, KProperty1, function (receiver) {
      return _get_elementDescriptors__y23q9p(receiver);
    }, null);
  }
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.ot_1 = true;
  }
  protoOf(InlineClassDescriptor).rm = function () {
    return this.ot_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.pm() === other.pm())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.ot_1 && contentEquals(this.at(), other.at()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.sm() === other.sm())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.sm();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.xm(index).pm() === other.xm(index).pm())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.xm(index).qm(), other.xm(index).qm())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.pt_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).qt = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.pt_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).em = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).fm = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.st_1 = OBJECT_getInstance();
    this.tt_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).qm = function () {
    return this.st_1;
  };
  protoOf(NothingSerialDescriptor).pm = function () {
    return this.tt_1;
  };
  protoOf(NothingSerialDescriptor).sm = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).um = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).vm = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).ym = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).xm = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).wm = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.tt_1) + imul(31, this.st_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.ut_1 = serializer;
    this.vt_1 = new SerialDescriptorForNullable(this.ut_1.em());
  }
  protoOf(NullableSerializer).em = function () {
    return this.vt_1;
  };
  protoOf(NullableSerializer).fm = function (decoder) {
    return decoder.do() ? decoder.ro(this.ut_1) : decoder.eo();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.ut_1, other.ut_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.ut_1);
  };
  function SerialDescriptorForNullable(original) {
    this.lm_1 = original;
    this.mm_1 = this.lm_1.pm() + '?';
    this.nm_1 = cachedSerialNames(this.lm_1);
  }
  protoOf(SerialDescriptorForNullable).pm = function () {
    return this.mm_1;
  };
  protoOf(SerialDescriptorForNullable).bo = function () {
    return this.nm_1;
  };
  protoOf(SerialDescriptorForNullable).jm = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.lm_1, other.lm_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.lm_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.lm_1), 31);
  };
  protoOf(SerialDescriptorForNullable).qm = function () {
    return this.lm_1.qm();
  };
  protoOf(SerialDescriptorForNullable).rm = function () {
    return this.lm_1.rm();
  };
  protoOf(SerialDescriptorForNullable).sm = function () {
    return this.lm_1.sm();
  };
  protoOf(SerialDescriptorForNullable).tm = function () {
    return this.lm_1.tm();
  };
  protoOf(SerialDescriptorForNullable).um = function (index) {
    return this.lm_1.um(index);
  };
  protoOf(SerialDescriptorForNullable).vm = function (name) {
    return this.lm_1.vm(name);
  };
  protoOf(SerialDescriptorForNullable).wm = function (index) {
    return this.lm_1.wm(index);
  };
  protoOf(SerialDescriptorForNullable).xm = function (index) {
    return this.lm_1.xm(index);
  };
  protoOf(SerialDescriptorForNullable).ym = function (index) {
    return this.lm_1.ym(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.hn_1 = this$0.xt_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.wt_1 = objectInstance;
    this.xt_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.yt_1 = lazy_0(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).em = function () {
    var tmp0 = this.yt_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return tmp0.r1();
  };
  protoOf(ObjectSerializer).fm = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.em();
    var composite = decoder.so(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      if (composite.hp()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.ip(this.em());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.to(descriptor);
    return this.wt_1;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.em();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.bo();
    var result = HashSet_init_$Create$_0(_this__u8e3s4.sm());
    var inductionVariable = 0;
    var last = _this__u8e3s4.sm();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.um(i);
        result.d(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.j())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.um(i);
          missingFields.d(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.pm());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.pm());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.f();
    while (_iterator__ex2g4s.g()) {
      var element = _iterator__ex2g4s.h();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.pm();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.f();
    while (_iterator__ex2g4s_0.g()) {
      var element_0 = _iterator__ex2g4s_0.h();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.qm();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.is_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.r1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.ks_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory_0();
    return tmp0.r1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.ds_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.ds_1[i];
        indices.y1(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.as_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qt();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.as_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.rt();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0 = item.em();
          destination.d(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.at());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.um(i) + ': ' + this$0.xm(i).pm();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.zr_1 = serialName;
    this.as_1 = generatedSerializer;
    this.bs_1 = elementsCount;
    this.cs_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.bs_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.ds_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.bs_1;
    tmp_3.es_1 = Array(size);
    this.fs_1 = null;
    this.gs_1 = booleanArray(this.bs_1);
    this.hs_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.is_1 = lazy_0(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.js_1 = lazy_0(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.ks_1 = lazy_0(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).pm = function () {
    return this.zr_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).sm = function () {
    return this.bs_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).qm = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).tm = function () {
    var tmp0_elvis_lhs = this.fs_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).bo = function () {
    return this.hs_1.v1();
  };
  protoOf(PluginGeneratedSerialDescriptor).at = function () {
    var tmp0 = this.js_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.r1();
  };
  protoOf(PluginGeneratedSerialDescriptor).bt = function (name, isOptional) {
    this.cs_1 = this.cs_1 + 1 | 0;
    this.ds_1[this.cs_1] = name;
    this.gs_1[this.cs_1] = isOptional;
    this.es_1[this.cs_1] = null;
    if (this.cs_1 === (this.bs_1 - 1 | 0)) {
      this.hs_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).ls = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.bt(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.bt.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).xm = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).em();
  };
  protoOf(PluginGeneratedSerialDescriptor).ym = function (index) {
    return getChecked_0(this.gs_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).wm = function (index) {
    var tmp0_elvis_lhs = getChecked(this.es_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).um = function (index) {
    return getChecked(this.ds_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).vm = function (name) {
    var tmp0_elvis_lhs = this.hs_1.u1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.pm() === other.pm())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.at(), other.at())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.sm() === other.sm())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.sm();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.xm(index).pm() === other.xm(index).pm())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.xm(index).qm(), other.xm(index).qm())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.bs_1);
    var tmp_0 = this.pm() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.at();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_0(Companion_getInstance_1()));
  }
  protoOf(CharArraySerializer_0).bu = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).iq = function (_this__u8e3s4) {
    return this.bu((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).mr = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).cu = function (decoder, index, builder, checkIndex) {
    builder.fu(decoder.bp(this.er_1, index));
  };
  protoOf(CharArraySerializer_0).pq = function (decoder, index, builder, checkIndex) {
    return this.cu(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).nr = function (decoder, index, builder, checkIndex) {
    return this.cu(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).iu = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).iq = function (_this__u8e3s4) {
    return this.iu((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).mr = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).ju = function (decoder, index, builder, checkIndex) {
    builder.mu(decoder.ap(this.er_1, index));
  };
  protoOf(DoubleArraySerializer_0).pq = function (decoder, index, builder, checkIndex) {
    return this.ju(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).nr = function (decoder, index, builder, checkIndex) {
    return this.ju(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).pu = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).iq = function (_this__u8e3s4) {
    return this.pu((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).mr = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).qu = function (decoder, index, builder, checkIndex) {
    builder.tu(decoder.zo(this.er_1, index));
  };
  protoOf(FloatArraySerializer_0).pq = function (decoder, index, builder, checkIndex) {
    return this.qu(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).nr = function (decoder, index, builder, checkIndex) {
    return this.qu(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_2()));
  }
  protoOf(LongArraySerializer_0).wu = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).iq = function (_this__u8e3s4) {
    return this.wu((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).mr = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).xu = function (decoder, index, builder, checkIndex) {
    builder.av(decoder.yo(this.er_1, index));
  };
  protoOf(LongArraySerializer_0).pq = function (decoder, index, builder, checkIndex) {
    return this.xu(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).nr = function (decoder, index, builder, checkIndex) {
    return this.xu(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_3()));
  }
  protoOf(ULongArraySerializer_0).dv = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).iq = function (_this__u8e3s4) {
    return this.dv(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.pl_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).ev = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).mr = function () {
    return new ULongArray(this.ev());
  };
  protoOf(ULongArraySerializer_0).fv = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.cp(this.er_1, index).jo();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.iv(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).pq = function (decoder, index, builder, checkIndex) {
    return this.fv(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).nr = function (decoder, index, builder, checkIndex) {
    return this.fv(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).lv = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).iq = function (_this__u8e3s4) {
    return this.lv((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).mr = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).mv = function (decoder, index, builder, checkIndex) {
    builder.pv(decoder.xo(this.er_1, index));
  };
  protoOf(IntArraySerializer_0).pq = function (decoder, index, builder, checkIndex) {
    return this.mv(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).nr = function (decoder, index, builder, checkIndex) {
    return this.mv(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_4()));
  }
  protoOf(UIntArraySerializer_0).sv = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).iq = function (_this__u8e3s4) {
    return this.sv(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.fl_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).tv = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).mr = function () {
    return new UIntArray(this.tv());
  };
  protoOf(UIntArraySerializer_0).uv = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.cp(this.er_1, index).io();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.xv(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).pq = function (decoder, index, builder, checkIndex) {
    return this.uv(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).nr = function (decoder, index, builder, checkIndex) {
    return this.uv(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).aw = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).iq = function (_this__u8e3s4) {
    return this.aw((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).mr = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).bw = function (decoder, index, builder, checkIndex) {
    builder.ew(decoder.wo(this.er_1, index));
  };
  protoOf(ShortArraySerializer_0).pq = function (decoder, index, builder, checkIndex) {
    return this.bw(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).nr = function (decoder, index, builder, checkIndex) {
    return this.bw(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(Companion_getInstance_5()));
  }
  protoOf(UShortArraySerializer_0).hw = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).iq = function (_this__u8e3s4) {
    return this.hw(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.zl_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).iw = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).mr = function () {
    return new UShortArray(this.iw());
  };
  protoOf(UShortArraySerializer_0).jw = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.cp(this.er_1, index).ho();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.mw(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).pq = function (decoder, index, builder, checkIndex) {
    return this.jw(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).nr = function (decoder, index, builder, checkIndex) {
    return this.jw(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).pw = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).iq = function (_this__u8e3s4) {
    return this.pw((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).mr = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).qw = function (decoder, index, builder, checkIndex) {
    builder.tw(decoder.vo(this.er_1, index));
  };
  protoOf(ByteArraySerializer_0).pq = function (decoder, index, builder, checkIndex) {
    return this.qw(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).nr = function (decoder, index, builder, checkIndex) {
    return this.qw(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(Companion_getInstance_6()));
  }
  protoOf(UByteArraySerializer_0).ww = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).iq = function (_this__u8e3s4) {
    return this.ww(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.vk_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).xw = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).mr = function () {
    return new UByteArray(this.xw());
  };
  protoOf(UByteArraySerializer_0).yw = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.cp(this.er_1, index).go();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.bx(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).pq = function (decoder, index, builder, checkIndex) {
    return this.yw(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).nr = function (decoder, index, builder, checkIndex) {
    return this.yw(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).ex = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).iq = function (_this__u8e3s4) {
    return this.ex((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).mr = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).fx = function (decoder, index, builder, checkIndex) {
    builder.ix(decoder.uo(this.er_1, index));
  };
  protoOf(BooleanArraySerializer_0).pq = function (decoder, index, builder, checkIndex) {
    return this.fx(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).nr = function (decoder, index, builder, checkIndex) {
    return this.fx(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.du_1 = bufferWithData;
    this.eu_1 = bufferWithData.length;
    this.kr(10);
  }
  protoOf(CharArrayBuilder).gr = function () {
    return this.eu_1;
  };
  protoOf(CharArrayBuilder).kr = function (requiredCapacity) {
    if (this.du_1.length < requiredCapacity)
      this.du_1 = copyOf(this.du_1, coerceAtLeast(requiredCapacity, imul(this.du_1.length, 2)));
  };
  protoOf(CharArrayBuilder).fu = function (c) {
    this.or();
    var tmp = this.du_1;
    var _unary__edvuaz = this.eu_1;
    this.eu_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).ir = function () {
    return copyOf(this.du_1, this.eu_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ku_1 = bufferWithData;
    this.lu_1 = bufferWithData.length;
    this.kr(10);
  }
  protoOf(DoubleArrayBuilder).gr = function () {
    return this.lu_1;
  };
  protoOf(DoubleArrayBuilder).kr = function (requiredCapacity) {
    if (this.ku_1.length < requiredCapacity)
      this.ku_1 = copyOf_0(this.ku_1, coerceAtLeast(requiredCapacity, imul(this.ku_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).mu = function (c) {
    this.or();
    var tmp = this.ku_1;
    var _unary__edvuaz = this.lu_1;
    this.lu_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).ir = function () {
    return copyOf_0(this.ku_1, this.lu_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ru_1 = bufferWithData;
    this.su_1 = bufferWithData.length;
    this.kr(10);
  }
  protoOf(FloatArrayBuilder).gr = function () {
    return this.su_1;
  };
  protoOf(FloatArrayBuilder).kr = function (requiredCapacity) {
    if (this.ru_1.length < requiredCapacity)
      this.ru_1 = copyOf_1(this.ru_1, coerceAtLeast(requiredCapacity, imul(this.ru_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).tu = function (c) {
    this.or();
    var tmp = this.ru_1;
    var _unary__edvuaz = this.su_1;
    this.su_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).ir = function () {
    return copyOf_1(this.ru_1, this.su_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.yu_1 = bufferWithData;
    this.zu_1 = bufferWithData.length;
    this.kr(10);
  }
  protoOf(LongArrayBuilder).gr = function () {
    return this.zu_1;
  };
  protoOf(LongArrayBuilder).kr = function (requiredCapacity) {
    if (this.yu_1.length < requiredCapacity)
      this.yu_1 = copyOf_2(this.yu_1, coerceAtLeast(requiredCapacity, imul(this.yu_1.length, 2)));
  };
  protoOf(LongArrayBuilder).av = function (c) {
    this.or();
    var tmp = this.yu_1;
    var _unary__edvuaz = this.zu_1;
    this.zu_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).ir = function () {
    return copyOf_2(this.yu_1, this.zu_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.gv_1 = bufferWithData;
    this.hv_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.kr(10);
  }
  protoOf(ULongArrayBuilder).gr = function () {
    return this.hv_1;
  };
  protoOf(ULongArrayBuilder).kr = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.gv_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.gv_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.gv_1), 2));
      tmp.gv_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).iv = function (c) {
    this.or();
    var tmp = this.gv_1;
    var _unary__edvuaz = this.hv_1;
    this.hv_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).jx = function () {
    var tmp0 = this.gv_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.hv_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).ir = function () {
    return new ULongArray(this.jx());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.nv_1 = bufferWithData;
    this.ov_1 = bufferWithData.length;
    this.kr(10);
  }
  protoOf(IntArrayBuilder).gr = function () {
    return this.ov_1;
  };
  protoOf(IntArrayBuilder).kr = function (requiredCapacity) {
    if (this.nv_1.length < requiredCapacity)
      this.nv_1 = copyOf_3(this.nv_1, coerceAtLeast(requiredCapacity, imul(this.nv_1.length, 2)));
  };
  protoOf(IntArrayBuilder).pv = function (c) {
    this.or();
    var tmp = this.nv_1;
    var _unary__edvuaz = this.ov_1;
    this.ov_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).ir = function () {
    return copyOf_3(this.nv_1, this.ov_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.vv_1 = bufferWithData;
    this.wv_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.kr(10);
  }
  protoOf(UIntArrayBuilder).gr = function () {
    return this.wv_1;
  };
  protoOf(UIntArrayBuilder).kr = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.vv_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.vv_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.vv_1), 2));
      tmp.vv_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).xv = function (c) {
    this.or();
    var tmp = this.vv_1;
    var _unary__edvuaz = this.wv_1;
    this.wv_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).kx = function () {
    var tmp0 = this.vv_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.wv_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).ir = function () {
    return new UIntArray(this.kx());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.cw_1 = bufferWithData;
    this.dw_1 = bufferWithData.length;
    this.kr(10);
  }
  protoOf(ShortArrayBuilder).gr = function () {
    return this.dw_1;
  };
  protoOf(ShortArrayBuilder).kr = function (requiredCapacity) {
    if (this.cw_1.length < requiredCapacity)
      this.cw_1 = copyOf_4(this.cw_1, coerceAtLeast(requiredCapacity, imul(this.cw_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).ew = function (c) {
    this.or();
    var tmp = this.cw_1;
    var _unary__edvuaz = this.dw_1;
    this.dw_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).ir = function () {
    return copyOf_4(this.cw_1, this.dw_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.kw_1 = bufferWithData;
    this.lw_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.kr(10);
  }
  protoOf(UShortArrayBuilder).gr = function () {
    return this.lw_1;
  };
  protoOf(UShortArrayBuilder).kr = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.kw_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.kw_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.kw_1), 2));
      tmp.kw_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).mw = function (c) {
    this.or();
    var tmp = this.kw_1;
    var _unary__edvuaz = this.lw_1;
    this.lw_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).lx = function () {
    var tmp0 = this.kw_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.lw_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).ir = function () {
    return new UShortArray(this.lx());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.rw_1 = bufferWithData;
    this.sw_1 = bufferWithData.length;
    this.kr(10);
  }
  protoOf(ByteArrayBuilder).gr = function () {
    return this.sw_1;
  };
  protoOf(ByteArrayBuilder).kr = function (requiredCapacity) {
    if (this.rw_1.length < requiredCapacity)
      this.rw_1 = copyOf_5(this.rw_1, coerceAtLeast(requiredCapacity, imul(this.rw_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).tw = function (c) {
    this.or();
    var tmp = this.rw_1;
    var _unary__edvuaz = this.sw_1;
    this.sw_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).ir = function () {
    return copyOf_5(this.rw_1, this.sw_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.zw_1 = bufferWithData;
    this.ax_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.kr(10);
  }
  protoOf(UByteArrayBuilder).gr = function () {
    return this.ax_1;
  };
  protoOf(UByteArrayBuilder).kr = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.zw_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.zw_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.zw_1), 2));
      tmp.zw_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).bx = function (c) {
    this.or();
    var tmp = this.zw_1;
    var _unary__edvuaz = this.ax_1;
    this.ax_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).mx = function () {
    var tmp0 = this.zw_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.ax_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).ir = function () {
    return new UByteArray(this.mx());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.gx_1 = bufferWithData;
    this.hx_1 = bufferWithData.length;
    this.kr(10);
  }
  protoOf(BooleanArrayBuilder).gr = function () {
    return this.hx_1;
  };
  protoOf(BooleanArrayBuilder).kr = function (requiredCapacity) {
    if (this.gx_1.length < requiredCapacity)
      this.gx_1 = copyOf_6(this.gx_1, coerceAtLeast(requiredCapacity, imul(this.gx_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).ix = function (c) {
    this.or();
    var tmp = this.gx_1;
    var _unary__edvuaz = this.hx_1;
    this.hx_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).ir = function () {
    return copyOf_6(this.gx_1, this.hx_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.nx_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).em = function () {
    return this.nx_1;
  };
  protoOf(StringSerializer).fm = function (decoder) {
    return decoder.no();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.ox_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).em = function () {
    return this.ox_1;
  };
  protoOf(CharSerializer).px = function (decoder) {
    return decoder.mo();
  };
  protoOf(CharSerializer).fm = function (decoder) {
    return new Char(this.px(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.qx_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).em = function () {
    return this.qx_1;
  };
  protoOf(DoubleSerializer).fm = function (decoder) {
    return decoder.lo();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.rx_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).em = function () {
    return this.rx_1;
  };
  protoOf(FloatSerializer).fm = function (decoder) {
    return decoder.ko();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.sx_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).em = function () {
    return this.sx_1;
  };
  protoOf(LongSerializer).fm = function (decoder) {
    return decoder.jo();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.tx_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).em = function () {
    return this.tx_1;
  };
  protoOf(IntSerializer).fm = function (decoder) {
    return decoder.io();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.ux_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).em = function () {
    return this.ux_1;
  };
  protoOf(ShortSerializer).fm = function (decoder) {
    return decoder.ho();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.vx_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).em = function () {
    return this.vx_1;
  };
  protoOf(ByteSerializer).fm = function (decoder) {
    return decoder.go();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.wx_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).em = function () {
    return this.wx_1;
  };
  protoOf(BooleanSerializer).fm = function (decoder) {
    return decoder.fo();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.xx_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).em = function () {
    return this.xx_1.em();
  };
  protoOf(UnitSerializer).yx = function (decoder) {
    this.xx_1.fm(decoder);
  };
  protoOf(UnitSerializer).fm = function (decoder) {
    this.yx(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.zx_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.zx_1 = serialName;
    this.ay_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).pm = function () {
    return this.zx_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).qm = function () {
    return this.ay_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).sm = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).um = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).vm = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).ym = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).xm = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).wm = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.zx_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.zx_1 === other.zx_1 && equals(this.ay_1, other.ay_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.zx_1) + imul(31, this.ay_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().w1();
    var _iterator__ex2g4s = values.f();
    while (_iterator__ex2g4s.g()) {
      var primitive = _iterator__ex2g4s.h();
      var primitiveName = primitive.em().pm();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).ha() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = initBuiltins();
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).dy = function (_this__u8e3s4, index) {
    return this.fy(this.ey(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).fy = function (nestedName) {
    var tmp0_elvis_lhs = this.iy();
    return this.jy(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).ey = function (descriptor, index) {
    return descriptor.um(index);
  };
  protoOf(NamedValueDecoder).jy = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).ky = function () {
    return this.gy_1.j() ? '$' : joinToString(this.gy_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.yy(tag);
    var r = block();
    if (!$this.hy_1) {
      $this.zy();
    }
    $this.hy_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.qo($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.em().jm();
      var tmp;
      if (isNullabilitySupported || tmp0.do()) {
        tmp = this$0.qo($deserializer, $previousValue);
      } else {
        tmp = tmp0.eo();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.gy_1 = ArrayList_init_$Create$();
    this.hy_1 = false;
  }
  protoOf(TaggedDecoder).gp = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).ly = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).my = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).ny = function (tag) {
    var tmp = this.ly(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).oy = function (tag) {
    var tmp = this.ly(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).py = function (tag) {
    var tmp = this.ly(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).qy = function (tag) {
    var tmp = this.ly(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ry = function (tag) {
    var tmp = this.ly(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).sy = function (tag) {
    var tmp = this.ly(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ty = function (tag) {
    var tmp = this.ly(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).uy = function (tag) {
    var tmp = this.ly(tag);
    return tmp instanceof Char ? tmp.b1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).vy = function (tag) {
    var tmp = this.ly(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).wy = function (tag, enumDescriptor) {
    var tmp = this.ly(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).xy = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.yy(tag);
    return this;
  };
  protoOf(TaggedDecoder).qo = function (deserializer, previousValue) {
    return this.ro(deserializer);
  };
  protoOf(TaggedDecoder).po = function (descriptor) {
    return this.xy(this.zy(), descriptor);
  };
  protoOf(TaggedDecoder).do = function () {
    var tmp0_elvis_lhs = this.iy();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.my(currentTag);
  };
  protoOf(TaggedDecoder).eo = function () {
    return null;
  };
  protoOf(TaggedDecoder).fo = function () {
    return this.ny(this.zy());
  };
  protoOf(TaggedDecoder).go = function () {
    return this.oy(this.zy());
  };
  protoOf(TaggedDecoder).ho = function () {
    return this.py(this.zy());
  };
  protoOf(TaggedDecoder).io = function () {
    return this.qy(this.zy());
  };
  protoOf(TaggedDecoder).jo = function () {
    return this.ry(this.zy());
  };
  protoOf(TaggedDecoder).ko = function () {
    return this.sy(this.zy());
  };
  protoOf(TaggedDecoder).lo = function () {
    return this.ty(this.zy());
  };
  protoOf(TaggedDecoder).mo = function () {
    return this.uy(this.zy());
  };
  protoOf(TaggedDecoder).no = function () {
    return this.vy(this.zy());
  };
  protoOf(TaggedDecoder).oo = function (enumDescriptor) {
    return this.wy(this.zy(), enumDescriptor);
  };
  protoOf(TaggedDecoder).so = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).to = function (descriptor) {
  };
  protoOf(TaggedDecoder).uo = function (descriptor, index) {
    return this.ny(this.dy(descriptor, index));
  };
  protoOf(TaggedDecoder).vo = function (descriptor, index) {
    return this.oy(this.dy(descriptor, index));
  };
  protoOf(TaggedDecoder).wo = function (descriptor, index) {
    return this.py(this.dy(descriptor, index));
  };
  protoOf(TaggedDecoder).xo = function (descriptor, index) {
    return this.qy(this.dy(descriptor, index));
  };
  protoOf(TaggedDecoder).yo = function (descriptor, index) {
    return this.ry(this.dy(descriptor, index));
  };
  protoOf(TaggedDecoder).zo = function (descriptor, index) {
    return this.sy(this.dy(descriptor, index));
  };
  protoOf(TaggedDecoder).ap = function (descriptor, index) {
    return this.ty(this.dy(descriptor, index));
  };
  protoOf(TaggedDecoder).bp = function (descriptor, index) {
    return this.uy(this.dy(descriptor, index));
  };
  protoOf(TaggedDecoder).cp = function (descriptor, index) {
    return this.xy(this.dy(descriptor, index), descriptor.xm(index));
  };
  protoOf(TaggedDecoder).dp = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.dy(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).fp = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.dy(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).iy = function () {
    return lastOrNull(this.gy_1);
  };
  protoOf(TaggedDecoder).yy = function (name) {
    this.gy_1.d(name);
  };
  protoOf(TaggedDecoder).zy = function () {
    var r = this.gy_1.e4(get_lastIndex_0(this.gy_1));
    this.hy_1 = true;
    return r;
  };
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.az_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_3(Companion_getInstance_2()));
  }
  protoOf(ULongSerializer).em = function () {
    return this.az_1;
  };
  protoOf(ULongSerializer).bz = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.po(this.az_1).jo();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).fm = function (decoder) {
    return new ULong(this.bz(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.cz_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_5(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).em = function () {
    return this.cz_1;
  };
  protoOf(UIntSerializer).dz = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.po(this.cz_1).io();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).fm = function (decoder) {
    return new UInt(this.dz(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.ez_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_7(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).em = function () {
    return this.ez_1;
  };
  protoOf(UShortSerializer).fz = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.po(this.ez_1).ho();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).fm = function (decoder) {
    return new UShort(this.fz(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.gz_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_9(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).em = function () {
    return this.gz_1;
  };
  protoOf(UByteSerializer).hz = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.po(this.gz_1).go();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).fm = function (decoder) {
    return new UByte(this.hz(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).km = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.iz(kClass, typeArgumentsSerializers) : $super.iz.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.jz_1 = class2ContextualFactory;
    this.kz_1 = polyBase2Serializers;
    this.lz_1 = polyBase2DefaultSerializerProvider;
    this.mz_1 = polyBase2NamedSerializers;
    this.nz_1 = polyBase2DefaultDeserializerProvider;
    this.oz_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).kp = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.mz_1.u1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).u1(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.nz_1.u1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).iz = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.jz_1.u1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pz(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializableWith() {
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().bb(), serializer(StringCompanionObject_instance)), to(getKClass(Char), serializer_0(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().eb(), CharArraySerializer()), to(PrimitiveClasses_getInstance().za(), serializer_1(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().kb(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().ya(), serializer_2(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().jb(), FloatArraySerializer()), to(getKClass(Long), serializer_3(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().ib(), LongArraySerializer()), to(getKClass(ULong), serializer_4(Companion_getInstance_3())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().xa(), serializer_5(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().hb(), IntArraySerializer()), to(getKClass(UInt), serializer_6(Companion_getInstance_4())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().wa(), serializer_7(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().gb(), ShortArraySerializer()), to(getKClass(UShort), serializer_8(Companion_getInstance_5())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().va(), serializer_9(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().fb(), ByteArraySerializer()), to(getKClass(UByte), serializer_10(Companion_getInstance_6())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().ua(), serializer_11(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().db(), BooleanArraySerializer()), to(getKClass(Unit), serializer_12(Unit_instance)), to(PrimitiveClasses_getInstance().ta(), NothingSerializer()), to(getKClass(Duration), serializer_13(Companion_getInstance())), to(getKClass(Uuid), serializer_14(Companion_getInstance_0()))]);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).jm = get_isNullable;
  protoOf(SerialDescriptorImpl).rm = get_isInline;
  protoOf(AbstractDecoder).ep = decodeSerializableElement$default;
  protoOf(AbstractDecoder).ro = decodeSerializableValue;
  protoOf(AbstractDecoder).hp = decodeSequentially;
  protoOf(AbstractDecoder).jp = decodeCollectionSize;
  protoOf(ListLikeDescriptor).jm = get_isNullable;
  protoOf(ListLikeDescriptor).rm = get_isInline;
  protoOf(ListLikeDescriptor).tm = get_annotations;
  protoOf(MapLikeDescriptor).jm = get_isNullable;
  protoOf(MapLikeDescriptor).rm = get_isInline;
  protoOf(MapLikeDescriptor).tm = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).jm = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).rm = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).rt = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).jm = get_isNullable;
  protoOf(NothingSerialDescriptor).rm = get_isInline;
  protoOf(NothingSerialDescriptor).tm = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).jm = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).rm = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).tm = get_annotations;
  protoOf(TaggedDecoder).ep = decodeSerializableElement$default;
  protoOf(TaggedDecoder).ro = decodeSerializableValue;
  protoOf(TaggedDecoder).hp = decodeSequentially;
  protoOf(TaggedDecoder).jp = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SerializationException_init_$Init$_0;
  _.$_$.b = SerializationException_init_$Create$_0;
  _.$_$.c = UnknownFieldException_init_$Create$;
  _.$_$.d = SEALED_getInstance;
  _.$_$.e = STRING_getInstance;
  _.$_$.f = CONTEXTUAL_getInstance;
  _.$_$.g = ENUM_getInstance;
  _.$_$.h = CLASS_getInstance;
  _.$_$.i = LIST_getInstance;
  _.$_$.j = MAP_getInstance;
  _.$_$.k = BooleanSerializer_getInstance;
  _.$_$.l = IntSerializer_getInstance;
  _.$_$.m = StringSerializer_getInstance;
  _.$_$.n = ListSerializer;
  _.$_$.o = MapSerializer;
  _.$_$.p = get_nullable;
  _.$_$.q = serializer;
  _.$_$.r = serializer_8;
  _.$_$.s = serializer_6;
  _.$_$.t = serializer_10;
  _.$_$.u = serializer_4;
  _.$_$.v = PolymorphicKind;
  _.$_$.w = PrimitiveKind;
  _.$_$.x = PrimitiveSerialDescriptor;
  _.$_$.y = get_annotations;
  _.$_$.z = get_isInline;
  _.$_$.a1 = get_isNullable;
  _.$_$.b1 = SerialDescriptor;
  _.$_$.c1 = buildSerialDescriptor;
  _.$_$.d1 = getContextualDescriptor;
  _.$_$.e1 = AbstractDecoder;
  _.$_$.f1 = CompositeDecoder;
  _.$_$.g1 = Decoder;
  _.$_$.h1 = AbstractPolymorphicSerializer;
  _.$_$.i1 = ElementMarker;
  _.$_$.j1 = typeParametersSerializers;
  _.$_$.k1 = GeneratedSerializer;
  _.$_$.l1 = InlinePrimitiveDescriptor;
  _.$_$.m1 = LinkedHashMapSerializer;
  _.$_$.n1 = NamedValueDecoder;
  _.$_$.o1 = PluginGeneratedSerialDescriptor;
  _.$_$.p1 = createSimpleEnumSerializer;
  _.$_$.q1 = jsonCachedSerialNames;
  _.$_$.r1 = throwMissingFieldException;
  _.$_$.s1 = EmptySerializersModule_0;
  _.$_$.t1 = DeserializationStrategy;
  _.$_$.u1 = KSerializer;
  _.$_$.v1 = MissingFieldException;
  _.$_$.w1 = SerializationException;
  _.$_$.x1 = findPolymorphicSerializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
