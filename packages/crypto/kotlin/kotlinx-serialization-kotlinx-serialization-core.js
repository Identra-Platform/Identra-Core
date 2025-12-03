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
  var protoOf = kotlin_kotlin.$_$.pc;
  var initMetadataForInterface = kotlin_kotlin.$_$.pb;
  var VOID = kotlin_kotlin.$_$.j;
  var asList = kotlin_kotlin.$_$.m6;
  var objectCreate = kotlin_kotlin.$_$.oc;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.i5;
  var Unit_instance = kotlin_kotlin.$_$.v5;
  var emptyList = kotlin_kotlin.$_$.l7;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.o;
  var lazy = kotlin_kotlin.$_$.rh;
  var toString = kotlin_kotlin.$_$.tc;
  var initMetadataForClass = kotlin_kotlin.$_$.lb;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var KProperty1 = kotlin_kotlin.$_$.gd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ib;
  var THROW_CCE = kotlin_kotlin.$_$.tg;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var zip = kotlin_kotlin.$_$.w9;
  var toMap = kotlin_kotlin.$_$.p9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var mapCapacity = kotlin_kotlin.$_$.l8;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var KtMap = kotlin_kotlin.$_$.f6;
  var isInterface = kotlin_kotlin.$_$.ac;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.x1;
  var captureStack = kotlin_kotlin.$_$.xa;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.z1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.b2;
  var IllegalArgumentException = kotlin_kotlin.$_$.lg;
  var listOf = kotlin_kotlin.$_$.j8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var KClass = kotlin_kotlin.$_$.cd;
  var Triple = kotlin_kotlin.$_$.vg;
  var getKClass = kotlin_kotlin.$_$.g;
  var Pair = kotlin_kotlin.$_$.qg;
  var Entry = kotlin_kotlin.$_$.d6;
  var KtMutableMap = kotlin_kotlin.$_$.h6;
  var LinkedHashMap = kotlin_kotlin.$_$.a6;
  var HashMap = kotlin_kotlin.$_$.y5;
  var KtSet = kotlin_kotlin.$_$.j6;
  var KtMutableSet = kotlin_kotlin.$_$.i6;
  var LinkedHashSet = kotlin_kotlin.$_$.b6;
  var HashSet = kotlin_kotlin.$_$.z5;
  var Collection = kotlin_kotlin.$_$.x5;
  var KtList = kotlin_kotlin.$_$.c6;
  var KtMutableList = kotlin_kotlin.$_$.g6;
  var ArrayList = kotlin_kotlin.$_$.w5;
  var copyToArray = kotlin_kotlin.$_$.h7;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.m3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.k3;
  var Result = kotlin_kotlin.$_$.rg;
  var ensureNotNull = kotlin_kotlin.$_$.lh;
  var equals = kotlin_kotlin.$_$.fb;
  var getStringHashCode = kotlin_kotlin.$_$.jb;
  var isBlank = kotlin_kotlin.$_$.be;
  var toList = kotlin_kotlin.$_$.m9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var toHashSet = kotlin_kotlin.$_$.i9;
  var toBooleanArray = kotlin_kotlin.$_$.g9;
  var withIndex = kotlin_kotlin.$_$.v9;
  var to = kotlin_kotlin.$_$.ai;
  var lazy_0 = kotlin_kotlin.$_$.sh;
  var contentEquals = kotlin_kotlin.$_$.s6;
  var until = kotlin_kotlin.$_$.bd;
  var joinToString = kotlin_kotlin.$_$.c8;
  var initMetadataForObject = kotlin_kotlin.$_$.rb;
  var Long = kotlin_kotlin.$_$.ng;
  var Char = kotlin_kotlin.$_$.dg;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.z2;
  var Duration = kotlin_kotlin.$_$.xf;
  var Companion_getInstance = kotlin_kotlin.$_$.l5;
  var Uuid = kotlin_kotlin.$_$.zf;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.n5;
  var toIntOrNull = kotlin_kotlin.$_$.if;
  var hashCode = kotlin_kotlin.$_$.kb;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.t;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.d1;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.c1;
  var isArray = kotlin_kotlin.$_$.sb;
  var arrayIterator = kotlin_kotlin.$_$.va;
  var step = kotlin_kotlin.$_$.ad;
  var getValue = kotlin_kotlin.$_$.x7;
  var longArray = kotlin_kotlin.$_$.hc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.mb;
  var get_lastIndex = kotlin_kotlin.$_$.e8;
  var countTrailingZeroBits = kotlin_kotlin.$_$.jh;
  var indexOf = kotlin_kotlin.$_$.y7;
  var contentToString = kotlin_kotlin.$_$.w6;
  var Enum = kotlin_kotlin.$_$.ig;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.x;
  var toString_0 = kotlin_kotlin.$_$.yh;
  var KTypeParameter = kotlin_kotlin.$_$.hd;
  var contentHashCode = kotlin_kotlin.$_$.v6;
  var booleanArray = kotlin_kotlin.$_$.wa;
  var emptyMap = kotlin_kotlin.$_$.m7;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.o5;
  var isCharArray = kotlin_kotlin.$_$.vb;
  var charArray = kotlin_kotlin.$_$.za;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.e5;
  var isDoubleArray = kotlin_kotlin.$_$.xb;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.f5;
  var isFloatArray = kotlin_kotlin.$_$.yb;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.p5;
  var isLongArray = kotlin_kotlin.$_$.bc;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.t5;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.o4;
  var ULongArray = kotlin_kotlin.$_$.ah;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.k4;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.h4;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.m4;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.i4;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.g5;
  var isIntArray = kotlin_kotlin.$_$.zb;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.s5;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.f4;
  var UIntArray = kotlin_kotlin.$_$.yg;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.b4;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.w3;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.d4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.y3;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.h5;
  var isShortArray = kotlin_kotlin.$_$.dc;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.u5;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.x4;
  var UShortArray = kotlin_kotlin.$_$.ch;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.t4;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.q4;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.v4;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.r4;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.d5;
  var isByteArray = kotlin_kotlin.$_$.ub;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.r5;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.u3;
  var UByteArray = kotlin_kotlin.$_$.wg;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.r3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.n3;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.s3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.o3;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.c5;
  var isBooleanArray = kotlin_kotlin.$_$.tb;
  var coerceAtLeast = kotlin_kotlin.$_$.xc;
  var copyOf = kotlin_kotlin.$_$.b7;
  var copyOf_0 = kotlin_kotlin.$_$.d7;
  var copyOf_1 = kotlin_kotlin.$_$.e7;
  var copyOf_2 = kotlin_kotlin.$_$.z6;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.p4;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.l4;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.n4;
  var copyOf_3 = kotlin_kotlin.$_$.g7;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.g4;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.c4;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.e4;
  var copyOf_4 = kotlin_kotlin.$_$.y6;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.y4;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.u4;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.w4;
  var copyOf_5 = kotlin_kotlin.$_$.c7;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.v3;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.q3;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.t3;
  var copyOf_6 = kotlin_kotlin.$_$.a7;
  var Unit = kotlin_kotlin.$_$.eh;
  var trimIndent = kotlin_kotlin.$_$.uf;
  var charSequenceLength = kotlin_kotlin.$_$.bb;
  var last = kotlin_kotlin.$_$.h8;
  var lastOrNull = kotlin_kotlin.$_$.g8;
  var get_lastIndex_0 = kotlin_kotlin.$_$.f8;
  var ULong = kotlin_kotlin.$_$.bh;
  var UInt = kotlin_kotlin.$_$.zg;
  var UShort = kotlin_kotlin.$_$.dh;
  var UByte = kotlin_kotlin.$_$.xg;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.th;
  var asSequence = kotlin_kotlin.$_$.n6;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.k5;
  var mapOf = kotlin_kotlin.$_$.n8;
  var get_js = kotlin_kotlin.$_$.fc;
  var findAssociatedObject = kotlin_kotlin.$_$.e;
  var get_indices = kotlin_kotlin.$_$.a8;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var get_indices_0 = kotlin_kotlin.$_$.z7;
  var Companion_instance = kotlin_kotlin.$_$.q5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.i3;
  var createFailure = kotlin_kotlin.$_$.kh;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SerializationStrategy, 'SerializationStrategy');
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [SerializationStrategy, DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SealedClassSerializer$$inlined$groupingBy$1);
  initMetadataForClass(SealedClassSerializer, 'SealedClassSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForInterface(StringFormat, 'StringFormat');
  initMetadataForInterface(BinaryFormat, 'BinaryFormat');
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
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
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
    return deserializer.w1x(this);
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
    return $super === VOID ? this.t21(descriptor, index, deserializer, previousValue) : $super.t21.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.h21(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.v1x(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.u1x().h1z();
    if (isNullabilitySupported) {
      return this.z22(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.c22();
    } else {
      this.c23();
      this.z22(serializer, value);
    }
  }
  initMetadataForInterface(Encoder, 'Encoder');
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  initMetadataForInterface(CompositeEncoder, 'CompositeEncoder');
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(HashSetClassDesc, 'HashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(HashMapClassDesc, 'HashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(HashSetSerializer, 'HashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(LinkedHashSetSerializer, 'LinkedHashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(HashMapSerializer, 'HashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(ReferenceArraySerializer, 'ReferenceArraySerializer', VOID, CollectionLikeSerializer);
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
  initMetadataForObject(NoOpEncoder, 'NoOpEncoder', VOID, AbstractEncoder);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(SerializerFactory, 'SerializerFactory');
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
  initMetadataForClass(TaggedEncoder, 'TaggedEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForClass(NamedValueEncoder, 'NamedValueEncoder', VOID, TaggedEncoder);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(KeyValueSerializer, 'KeyValueSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(MapEntrySerializer_0, 'MapEntrySerializer', VOID, KeyValueSerializer);
  initMetadataForClass(PairSerializer_0, 'PairSerializer', VOID, KeyValueSerializer);
  initMetadataForClass(TripleSerializer_0, 'TripleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicModuleBuilder, 'PolymorphicModuleBuilder');
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.g2j(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializersModuleBuilder, 'SerializersModuleBuilder', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForClass(SerializerAlreadyRegisteredException, 'SerializerAlreadyRegisteredException', VOID, IllegalArgumentException);
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  initMetadataForClass(createCache$1);
  initMetadataForClass(createParametrizedCache$1);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, $this) {
    PolymorphicSerializer.call($this, baseClass);
    $this.y1x_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, objectCreate(protoOf(PolymorphicSerializer)));
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.i1y('type', serializer_2(StringCompanionObject_instance).u1x());
      $this$buildSerialDescriptor.i1y('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.x1x_1.fc() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.c1y_1 = this$0.y1x_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.x1x_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.x1x_1 = baseClass;
    this.y1x_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.z1x_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).j1y = function () {
    return this.x1x_1;
  };
  protoOf(PolymorphicSerializer).u1x = function () {
    var tmp0 = this.z1x_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.z();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.x1x_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.m1y(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.j1y());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.l1y(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.j1y());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.u1x();
    }, null);
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.o1y_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, objectCreate(protoOf(SealedClassSerializer)));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = this$0.r1y_1.x().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.component1' call
        var name = element.y();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element.z();
        $this$buildSerialDescriptor.i1y(name, serializer.u1x());
      }
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.i1y('type', serializer_2(StringCompanionObject_instance).u1x());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.n1y_1.fc() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0));
      $this$buildSerialDescriptor.i1y('value', elementDescriptor);
      $this$buildSerialDescriptor.c1y_1 = this$0.o1y_1;
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function SealedClassSerializer$$inlined$groupingBy$1($this) {
    this.s1y_1 = $this;
  }
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).t1y = function () {
    return this.s1y_1.p();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).u1y = function (element) {
    return element.z().u1x().v1y();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).w1y = function (element) {
    return this.u1y((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.n1y_1 = baseClass;
    this.o1y_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.p1y_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.n1y_1.fc() + ' should be marked @Serializable');
    }
    this.q1y_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    // Inline function 'kotlin.collections.groupingBy' call
    var this_0 = this.q1y_1.x();
    // Inline function 'kotlin.collections.aggregate' call
    var tmp0 = new SealedClassSerializer$$inlined$groupingBy$1(this_0);
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.collections.aggregateTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tmp0.t1y();
    while (_iterator__ex2g4s.q()) {
      var e = _iterator__ex2g4s.r();
      var key = tmp0.w1y(e);
      var accumulator = destination.k2(key);
      accumulator == null && !destination.i2(key);
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var message = "Multiple sealed subclasses of '" + toString(this.n1y_1) + "' have the same serial name '" + key + "':" + (" '" + toString(accumulator.y()) + "', '" + toString(e.y()) + "'");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      destination.n2(key, e);
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = destination.x().p();
    while (_iterator__ex2g4s_0.q()) {
      var element = _iterator__ex2g4s_0.r();
      var tmp_2 = element.y();
      var tmp$ret$8 = element.z().z();
      destination_0.n2(tmp_2, tmp$ret$8);
    }
    tmp_1.r1y_1 = destination_0;
  }
  protoOf(SealedClassSerializer).j1y = function () {
    return this.n1y_1;
  };
  protoOf(SealedClassSerializer).u1x = function () {
    var tmp0 = this.p1y_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return tmp0.z();
  };
  protoOf(SealedClassSerializer).l1y = function (decoder, klassName) {
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.r1y_1;
    var tmp0_elvis_lhs = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).k2(klassName);
    return tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).l1y.call(this, decoder, klassName) : tmp0_elvis_lhs;
  };
  protoOf(SealedClassSerializer).m1y = function (encoder, value) {
    var tmp0_elvis_lhs = this.q1y_1.k2(getKClassFromExpression(value));
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).m1y.call(this, encoder, value) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, SerializationStrategy) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.u1x();
    }, null);
  }
  function StringFormat() {
  }
  function BinaryFormat() {
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
    MissingFieldException.call($this, missingFields, missingFields.s() === 1 ? "Field '" + missingFields.u(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException_init_$Init$_0(missingField, serialName, $this) {
    MissingFieldException.call($this, listOf(missingField), "Field '" + missingField + "' is required for type with serial name '" + serialName + "', but it was missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$_0(missingField, serialName) {
    var tmp = MissingFieldException_init_$Init$_0(missingField, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$_0);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.b1z_1 = missingFields;
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
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s = typeArguments.p();
      while (_iterator__ex2g4s.q()) {
        var item = _iterator__ex2g4s.r();
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.n(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s_0 = typeArguments.p();
      while (_iterator__ex2g4s_0.q()) {
        var item_0 = _iterator__ex2g4s_0.r();
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$3 = tmp_0;
        destination_0.n(tmp$ret$3);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (_this__u8e3s4.equals(getKClass(Collection)) || _this__u8e3s4.equals(getKClass(KtList)) || (_this__u8e3s4.equals(getKClass(KtMutableList)) || _this__u8e3s4.equals(getKClass(ArrayList)))) {
      tmp = new ArrayListSerializer(serializers.u(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.u(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.u(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.u(0), serializers.u(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.u(0), serializers.u(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.u(0), serializers.u(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.u(0), serializers.u(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.u(0), serializers.u(1), serializers.u(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.u(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.wc();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.vc();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = typeOrThrow(item);
      destination.n(tmp$ret$0);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.h()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.d1z(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.c1z()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        var tmp_2;
        if (_Result___get_isFailure__impl__jpiriv(this_1)) {
          tmp_2 = null;
        } else {
          var tmp_3 = _Result___get_value__impl__bjfvqg(this_1);
          tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        }
        tmp_1 = tmp_2;
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_4;
    if (typeArguments.h()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.d1z(rootClass) : tmp0_elvis_lhs;
      var tmp_5;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp1_elvis_lhs;
      }
      tmp_4 = tmp_5;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_6;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var serializers = tmp_6;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.e1z(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_7;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_7 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_7 = tmp4_elvis_lhs;
      }
      tmp_4 = tmp_7;
    }
    var contextualSerializer = tmp_4;
    var tmp_8;
    if (contextualSerializer == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_8 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_8;
    return tmp6_safe_receiver == null ? null : nullable(tmp6_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializer_0(type) {
    return serializer(EmptySerializersModule_0(), type);
  }
  function serializer_1(_this__u8e3s4) {
    var tmp0_elvis_lhs = serializerOrNull(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      serializerNotRegistered(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.u(0).uc();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().f1z(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().f1z(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().g1z(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().g1z(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_nullable(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_0 = isInterface(tmp2_safe_receiver, KSerializer) ? tmp2_safe_receiver : THROW_CCE();
    }
    return tmp_0;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.u(0).uc();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.u(0).uc();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.u1x().h1z()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_2(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_16(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_17(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.i1z_1 = original;
    this.j1z_1 = kClass;
    this.k1z_1 = this.i1z_1.v1y() + '<' + this.j1z_1.fc() + '>';
  }
  protoOf(ContextDescriptor).v1y = function () {
    return this.k1z_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.i1z_1, another.i1z_1) && another.j1z_1.equals(this.j1z_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.j1z_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.k1z_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.j1z_1) + ', original: ' + toString(this.i1z_1) + ')';
  };
  protoOf(ContextDescriptor).l1z = function () {
    return this.i1z_1.l1z();
  };
  protoOf(ContextDescriptor).h1z = function () {
    return this.i1z_1.h1z();
  };
  protoOf(ContextDescriptor).m1z = function () {
    return this.i1z_1.m1z();
  };
  protoOf(ContextDescriptor).n1z = function () {
    return this.i1z_1.n1z();
  };
  protoOf(ContextDescriptor).o1z = function () {
    return this.i1z_1.o1z();
  };
  protoOf(ContextDescriptor).p1z = function (index) {
    return this.i1z_1.p1z(index);
  };
  protoOf(ContextDescriptor).q1z = function (name) {
    return this.i1z_1.q1z(name);
  };
  protoOf(ContextDescriptor).r1z = function (index) {
    return this.i1z_1.r1z(index);
  };
  protoOf(ContextDescriptor).s1z = function (index) {
    return this.i1z_1.s1z(index);
  };
  protoOf(ContextDescriptor).t1z = function (index) {
    return this.i1z_1.t1z(index);
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.d1z(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.u1x();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.j1z_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.u1z_1);
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
    this.y1z_1 = $this_elementDescriptors;
    this.x1z_1 = $this_elementDescriptors.n1z();
  }
  protoOf(elementDescriptors$1).q = function () {
    return this.x1z_1 > 0;
  };
  protoOf(elementDescriptors$1).r = function () {
    var tmp = this.y1z_1.n1z();
    var _unary__edvuaz = this.x1z_1;
    this.x1z_1 = _unary__edvuaz - 1 | 0;
    return this.y1z_1.s1z(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.z1z_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).p = function () {
    return new elementDescriptors$1(this.z1z_1);
  };
  function elementNames$1($this_elementNames) {
    this.b20_1 = $this_elementNames;
    this.a20_1 = $this_elementNames.n1z();
  }
  protoOf(elementNames$1).q = function () {
    return this.a20_1 > 0;
  };
  protoOf(elementNames$1).r = function () {
    var tmp = this.b20_1.n1z();
    var _unary__edvuaz = this.a20_1;
    this.a20_1 = _unary__edvuaz - 1 | 0;
    return this.b20_1.p1z(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.c20_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).p = function () {
    return new elementNames$1(this.c20_1);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.d1y_1.s(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.a1y_1 = serialName;
    this.b1y_1 = false;
    this.c1y_1 = emptyList();
    this.d1y_1 = ArrayList_init_$Create$_0();
    this.e1y_1 = HashSet_init_$Create$();
    this.f1y_1 = ArrayList_init_$Create$_0();
    this.g1y_1 = ArrayList_init_$Create$_0();
    this.h1y_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).d20 = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.e1y_1.n(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.a1y_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.d1y_1.n(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.f1y_1.n(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.g1y_1.n(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.h1y_1.n(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).i1y = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.d20(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.d20.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.p20_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.z();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.o20_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.p1z(it) + ': ' + this$0.s1z(it).v1y();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.e20_1 = serialName;
    this.f20_1 = kind;
    this.g20_1 = elementsCount;
    this.h20_1 = builder.c1y_1;
    this.i20_1 = toHashSet(builder.d1y_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.d1y_1;
    tmp.j20_1 = copyToArray(this_0);
    this.k20_1 = compactArray(builder.f1y_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.g1y_1;
    tmp_0.l20_1 = copyToArray(this_1);
    this.m20_1 = toBooleanArray(builder.h1y_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.j20_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$2 = to(item.sh_1, item.rh_1);
      destination.n(tmp$ret$2);
    }
    tmp_1.n20_1 = toMap(destination);
    this.o20_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.p20_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).v1y = function () {
    return this.e20_1;
  };
  protoOf(SerialDescriptorImpl).l1z = function () {
    return this.f20_1;
  };
  protoOf(SerialDescriptorImpl).n1z = function () {
    return this.g20_1;
  };
  protoOf(SerialDescriptorImpl).o1z = function () {
    return this.h20_1;
  };
  protoOf(SerialDescriptorImpl).q20 = function () {
    return this.i20_1;
  };
  protoOf(SerialDescriptorImpl).p1z = function (index) {
    return getChecked(this.j20_1, index);
  };
  protoOf(SerialDescriptorImpl).q1z = function (name) {
    var tmp0_elvis_lhs = this.n20_1.k2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).r1z = function (index) {
    return getChecked(this.l20_1, index);
  };
  protoOf(SerialDescriptorImpl).s1z = function (index) {
    return getChecked(this.k20_1, index);
  };
  protoOf(SerialDescriptorImpl).t1z = function (index) {
    return getChecked_0(this.m20_1, index);
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
      if (!(this.v1y() === other.v1y())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.o20_1, other.o20_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.n1z() === other.n1z())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.n1z();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.s1z(index).v1y() === other.s1z(index).v1y())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.s1z(index).l1z(), other.s1z(index).l1z())) {
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
    var tmp = until(0, this.g20_1);
    var tmp_0 = this.e20_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.d1y_1.s(), toList(typeParameters), sdBuilder);
  }
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
  function buildClassSerialDescriptor$lambda(_this__u8e3s4) {
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
    return ensureNotNull(getKClassFromExpression(this).fc());
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
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
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
  protoOf(AbstractDecoder).r20 = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).s20 = function () {
    return true;
  };
  protoOf(AbstractDecoder).t20 = function () {
    return null;
  };
  protoOf(AbstractDecoder).u20 = function () {
    var tmp = this.r20();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).v20 = function () {
    var tmp = this.r20();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).w20 = function () {
    var tmp = this.r20();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).x20 = function () {
    var tmp = this.r20();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).y20 = function () {
    var tmp = this.r20();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).z20 = function () {
    var tmp = this.r20();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).a21 = function () {
    var tmp = this.r20();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).b21 = function () {
    var tmp = this.r20();
    return tmp instanceof Char ? tmp.l1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).c21 = function () {
    var tmp = this.r20();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).d21 = function (enumDescriptor) {
    var tmp = this.r20();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).e21 = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).f21 = function (deserializer, previousValue) {
    return this.g21(deserializer);
  };
  protoOf(AbstractDecoder).h21 = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).i21 = function (descriptor) {
  };
  protoOf(AbstractDecoder).j21 = function (descriptor, index) {
    return this.u20();
  };
  protoOf(AbstractDecoder).k21 = function (descriptor, index) {
    return this.v20();
  };
  protoOf(AbstractDecoder).l21 = function (descriptor, index) {
    return this.w20();
  };
  protoOf(AbstractDecoder).m21 = function (descriptor, index) {
    return this.x20();
  };
  protoOf(AbstractDecoder).n21 = function (descriptor, index) {
    return this.y20();
  };
  protoOf(AbstractDecoder).o21 = function (descriptor, index) {
    return this.z20();
  };
  protoOf(AbstractDecoder).p21 = function (descriptor, index) {
    return this.a21();
  };
  protoOf(AbstractDecoder).q21 = function (descriptor, index) {
    return this.b21();
  };
  protoOf(AbstractDecoder).r21 = function (descriptor, index) {
    return this.c21();
  };
  protoOf(AbstractDecoder).s21 = function (descriptor, index) {
    return this.e21(descriptor.s1z(index));
  };
  protoOf(AbstractDecoder).t21 = function (descriptor, index, deserializer, previousValue) {
    return this.f21(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).v21 = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.u1x().h1z();
    var tmp;
    if (isNullabilitySupported || this.s20()) {
      tmp = this.f21(deserializer, previousValue);
    } else {
      tmp = this.t20();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).h21 = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).i21 = function (descriptor) {
  };
  protoOf(AbstractEncoder).a22 = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).b22 = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).c22 = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).d22 = function (value) {
    return this.b22(value);
  };
  protoOf(AbstractEncoder).e22 = function (value) {
    return this.b22(value);
  };
  protoOf(AbstractEncoder).f22 = function (value) {
    return this.b22(value);
  };
  protoOf(AbstractEncoder).g22 = function (value) {
    return this.b22(value);
  };
  protoOf(AbstractEncoder).h22 = function (value) {
    return this.b22(value);
  };
  protoOf(AbstractEncoder).i22 = function (value) {
    return this.b22(value);
  };
  protoOf(AbstractEncoder).j22 = function (value) {
    return this.b22(value);
  };
  protoOf(AbstractEncoder).k22 = function (value) {
    return this.b22(new Char(value));
  };
  protoOf(AbstractEncoder).l22 = function (value) {
    return this.b22(value);
  };
  protoOf(AbstractEncoder).m22 = function (enumDescriptor, index) {
    return this.b22(index);
  };
  protoOf(AbstractEncoder).n22 = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).o22 = function (descriptor, index, value) {
    if (this.a22(descriptor, index)) {
      this.d22(value);
    }
  };
  protoOf(AbstractEncoder).p22 = function (descriptor, index, value) {
    if (this.a22(descriptor, index)) {
      this.e22(value);
    }
  };
  protoOf(AbstractEncoder).q22 = function (descriptor, index, value) {
    if (this.a22(descriptor, index)) {
      this.f22(value);
    }
  };
  protoOf(AbstractEncoder).r22 = function (descriptor, index, value) {
    if (this.a22(descriptor, index)) {
      this.g22(value);
    }
  };
  protoOf(AbstractEncoder).s22 = function (descriptor, index, value) {
    if (this.a22(descriptor, index)) {
      this.h22(value);
    }
  };
  protoOf(AbstractEncoder).t22 = function (descriptor, index, value) {
    if (this.a22(descriptor, index)) {
      this.i22(value);
    }
  };
  protoOf(AbstractEncoder).u22 = function (descriptor, index, value) {
    if (this.a22(descriptor, index)) {
      this.j22(value);
    }
  };
  protoOf(AbstractEncoder).v22 = function (descriptor, index, value) {
    if (this.a22(descriptor, index)) {
      this.k22(value);
    }
  };
  protoOf(AbstractEncoder).w22 = function (descriptor, index, value) {
    if (this.a22(descriptor, index)) {
      this.l22(value);
    }
  };
  protoOf(AbstractEncoder).x22 = function (descriptor, index) {
    return this.a22(descriptor, index) ? this.n22(descriptor.s1z(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).y22 = function (descriptor, index, serializer, value) {
    if (this.a22(descriptor, index)) {
      this.z22(serializer, value);
    }
  };
  protoOf(AbstractEncoder).a23 = function (descriptor, index, serializer, value) {
    if (this.a22(descriptor, index)) {
      this.b23(serializer, value);
    }
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.r21($this.u1x(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.u21($this.u1x(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).k1y = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.u1x();
    var composite = encoder.h21(descriptor);
    composite.w22(this.u1x(), 0, actualSerializer.u1x().v1y());
    var tmp = this.u1x();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.y22(tmp, 1, tmp$ret$0, value);
    composite.i21(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).v1x = function (encoder, value) {
    return this.k1y(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).w1x = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.u1x();
    var composite = decoder.h21(descriptor);
    var tmp$ret$0;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.x21()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.y21(this.u1x());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.r21(this.u1x(), index);
            break;
          case 1:
            var tmp0 = klassName;
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              if (tmp0 == null) {
                var message = 'Cannot read polymorphic value before its type token';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = tmp0;
                break $l$block_0;
              }
            }

            klassName = tmp$ret$2;
            var serializer = findPolymorphicSerializer_0(this, composite, klassName);
            value = composite.u21(this.u1x(), index, serializer);
            break;
          default:
            var tmp0_elvis_lhs = klassName;
            throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var tmp1 = value;
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp1 == null) {
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp1;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.i21(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).l1y = function (decoder, klassName) {
    return decoder.w21().f23(this.j1y(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).m1y = function (encoder, value) {
    return encoder.w21().g23(this.j1y(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.fc();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.fc() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.fc() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.h23_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).u1x = function () {
    return this.h23_1;
  };
  protoOf(NothingSerializer_0).i23 = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).v1x = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.i23(encoder, tmp);
  };
  protoOf(NothingSerializer_0).w1x = function (decoder) {
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
    this.j23_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).u1x = function () {
    return this.j23_1;
  };
  protoOf(DurationSerializer).k23 = function (encoder, value) {
    encoder.l22(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).v1x = function (encoder, value) {
    return this.k23(encoder, value instanceof Duration ? value.bg_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).l23 = function (decoder) {
    return Companion_getInstance().yn(decoder.c21());
  };
  protoOf(DurationSerializer).w1x = function (decoder) {
    return new Duration(this.l23(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.m23_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).u1x = function () {
    return this.m23_1;
  };
  protoOf(UuidSerializer).n23 = function (encoder, value) {
    encoder.l22(value.toString());
  };
  protoOf(UuidSerializer).v1x = function (encoder, value) {
    return this.n23(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).w1x = function (decoder) {
    return Companion_getInstance_0().ap(decoder.c21());
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
  protoOf(ArrayListClassDesc).v1y = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).v1y = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).v1y = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).v1y = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.q23_1 = elementDescriptor;
    this.r23_1 = 1;
  }
  protoOf(ListLikeDescriptor).l1z = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).n1z = function () {
    return this.r23_1;
  };
  protoOf(ListLikeDescriptor).p1z = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).q1z = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).t1z = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.v1y() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).r1z = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.v1y() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).s1z = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.v1y() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.q23_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.q23_1, other.q23_1) && this.v1y() === other.v1y())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.q23_1), 31) + getStringHashCode(this.v1y()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.v1y() + '(' + toString(this.q23_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.w23_1 = serialName;
    this.x23_1 = keyDescriptor;
    this.y23_1 = valueDescriptor;
    this.z23_1 = 2;
  }
  protoOf(MapLikeDescriptor).v1y = function () {
    return this.w23_1;
  };
  protoOf(MapLikeDescriptor).l1z = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).n1z = function () {
    return this.z23_1;
  };
  protoOf(MapLikeDescriptor).p1z = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).q1z = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).t1z = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.v1y() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).r1z = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.v1y() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).s1z = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.v1y() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.x23_1;
        break;
      case 1:
        tmp = this.y23_1;
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
    if (!(this.v1y() === other.v1y()))
      return false;
    if (!equals(this.x23_1, other.x23_1))
      return false;
    if (!equals(this.y23_1, other.y23_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.v1y());
    result = imul(31, result) + hashCode(this.x23_1) | 0;
    result = imul(31, result) + hashCode(this.y23_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.v1y() + '(' + toString(this.x23_1) + ', ' + toString(this.y23_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.e24_1 = primitive.v1y() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).v1y = function () {
    return this.e24_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.g24_1 = new ArrayListClassDesc(element.u1x());
  }
  protoOf(ArrayListSerializer).u1x = function () {
    return this.g24_1;
  };
  protoOf(ArrayListSerializer).h24 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).i24 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(ArrayListSerializer).j24 = function (_this__u8e3s4) {
    return this.i24(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).k24 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).l24 = function (_this__u8e3s4) {
    return this.k24(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).m24 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).n24 = function (_this__u8e3s4) {
    return this.m24((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).o24 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.z5(size);
  };
  protoOf(ArrayListSerializer).p24 = function (_this__u8e3s4, size) {
    return this.o24(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).q24 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.g2(index, element);
  };
  protoOf(ArrayListSerializer).r24 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.q24(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.c25_1 = new HashSetClassDesc(eSerializer.u1x());
  }
  protoOf(HashSetSerializer).u1x = function () {
    return this.c25_1;
  };
  protoOf(HashSetSerializer).h24 = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).d25 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(HashSetSerializer).j24 = function (_this__u8e3s4) {
    return this.d25(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).e25 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).l24 = function (_this__u8e3s4) {
    return this.e25(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).f25 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).n24 = function (_this__u8e3s4) {
    return this.f25((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).g25 = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).p24 = function (_this__u8e3s4, size) {
    return this.g25(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).h25 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.n(element);
  };
  protoOf(HashSetSerializer).r24 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.h25(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.j25_1 = new LinkedHashSetClassDesc(eSerializer.u1x());
  }
  protoOf(LinkedHashSetSerializer).u1x = function () {
    return this.j25_1;
  };
  protoOf(LinkedHashSetSerializer).h24 = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).k25 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(LinkedHashSetSerializer).j24 = function (_this__u8e3s4) {
    return this.k25(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).l25 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).l24 = function (_this__u8e3s4) {
    return this.l25(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).f25 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).n24 = function (_this__u8e3s4) {
    return this.f25((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).m25 = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).p24 = function (_this__u8e3s4, size) {
    return this.m25(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).n25 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.n(element);
  };
  protoOf(LinkedHashSetSerializer).r24 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.n25(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.q25_1 = new HashMapClassDesc(kSerializer.u1x(), vSerializer.u1x());
  }
  protoOf(HashMapSerializer).u1x = function () {
    return this.q25_1;
  };
  protoOf(HashMapSerializer).r25 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(HashMapSerializer).s25 = function (_this__u8e3s4) {
    return this.r25((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).t25 = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.x().p();
  };
  protoOf(HashMapSerializer).u25 = function (_this__u8e3s4) {
    return this.t25((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).h24 = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).v25 = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.s(), 2);
  };
  protoOf(HashMapSerializer).j24 = function (_this__u8e3s4) {
    return this.v25(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).w25 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).l24 = function (_this__u8e3s4) {
    return this.w25(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).x25 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).n24 = function (_this__u8e3s4) {
    return this.x25((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).y25 = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).p24 = function (_this__u8e3s4, size) {
    return this.y25(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.f26_1 = new LinkedHashMapClassDesc(kSerializer.u1x(), vSerializer.u1x());
  }
  protoOf(LinkedHashMapSerializer).u1x = function () {
    return this.f26_1;
  };
  protoOf(LinkedHashMapSerializer).r25 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(LinkedHashMapSerializer).s25 = function (_this__u8e3s4) {
    return this.r25((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).t25 = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.x().p();
  };
  protoOf(LinkedHashMapSerializer).u25 = function (_this__u8e3s4) {
    return this.t25((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).h24 = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).g26 = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.s(), 2);
  };
  protoOf(LinkedHashMapSerializer).j24 = function (_this__u8e3s4) {
    return this.g26(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).h26 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).l24 = function (_this__u8e3s4) {
    return this.h26(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).x25 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).n24 = function (_this__u8e3s4) {
    return this.x25((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).i26 = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).p24 = function (_this__u8e3s4, size) {
    return this.i26(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.k26_1 = kClass;
    this.l26_1 = new ArrayClassDesc(eSerializer.u1x());
  }
  protoOf(ReferenceArraySerializer).u1x = function () {
    return this.l26_1;
  };
  protoOf(ReferenceArraySerializer).m26 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).s25 = function (_this__u8e3s4) {
    return this.m26((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).n26 = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).u25 = function (_this__u8e3s4) {
    return this.n26((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).h24 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).o26 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(ReferenceArraySerializer).j24 = function (_this__u8e3s4) {
    return this.o26(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).p26 = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.k26_1);
  };
  protoOf(ReferenceArraySerializer).l24 = function (_this__u8e3s4) {
    return this.p26(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).q26 = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).n24 = function (_this__u8e3s4) {
    return this.q26((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).r26 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.z5(size);
  };
  protoOf(ReferenceArraySerializer).p24 = function (_this__u8e3s4, size) {
    return this.r26(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).s26 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.g2(index, element);
  };
  protoOf(ReferenceArraySerializer).r24 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.s26(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).t24 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(CollectionSerializer).s25 = function (_this__u8e3s4) {
    return this.t24((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).u24 = function (_this__u8e3s4) {
    return _this__u8e3s4.p();
  };
  protoOf(CollectionSerializer).u25 = function (_this__u8e3s4) {
    return this.u24((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.z25_1 = keySerializer;
    this.a26_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).b26 = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.f1_1;
    var last = progression.g1_1;
    var step_0 = progression.h1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.c26(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).x24 = function (decoder, builder, startIndex, size) {
    return this.b26(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).c26 = function (decoder, index, builder, checkIndex) {
    var key = decoder.u21(this.u1x(), index, this.z25_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.y21(this.u1x());
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
    if (builder.i2(key)) {
      var tmp_2 = this.a26_1.u1x().l1z();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.t21(this.u1x(), vIndex, this.a26_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.u21(this.u1x(), vIndex, this.a26_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.n2(key, value);
  };
  protoOf(MapLikeSerializer).y24 = function (decoder, index, builder, checkIndex) {
    return this.c26(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).w24 = function (encoder, value) {
    var size = this.s25(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.u1x();
    var composite = encoder.d23(descriptor, size);
    var iterator = this.u25(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var k = element.y();
      // Inline function 'kotlin.collections.component2' call
      var v = element.z();
      var tmp = this.u1x();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.y22(tmp, _unary__edvuaz, this.z25_1, k);
      var tmp_0 = this.u1x();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.y22(tmp_0, _unary__edvuaz_0, this.a26_1, v);
    }
    composite.i21(descriptor);
  };
  protoOf(MapLikeSerializer).v1x = function (encoder, value) {
    return this.w24(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.v24_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).w24 = function (encoder, value) {
    var size = this.s25(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.u1x();
    var composite = encoder.d23(descriptor, size);
    var iterator = this.u25(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.y22(this.u1x(), index, this.v24_1, iterator.r());
      }
       while (inductionVariable < size);
    composite.i21(descriptor);
  };
  protoOf(CollectionLikeSerializer).v1x = function (encoder, value) {
    return this.w24(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).x24 = function (decoder, builder, startIndex, size) {
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
        this.y24(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).y24 = function (decoder, index, builder, checkIndex) {
    this.r24(builder, index, decoder.u21(this.u1x(), index, this.v24_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.z21($this.u1x());
    $this.p24(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).a25 = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.n24(previous);
    var builder = tmp1_elvis_lhs == null ? this.h24() : tmp1_elvis_lhs;
    var startIndex = this.j24(builder);
    var compositeDecoder = decoder.h21(this.u1x());
    if (compositeDecoder.x21()) {
      this.x24(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.y21(this.u1x());
        if (index === -1)
          break $l$loop;
        this.z24(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.i21(this.u1x());
    return this.l24(builder);
  };
  protoOf(AbstractCollectionSerializer).w1x = function (decoder) {
    return this.a25(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).z24 = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.y24(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.y24.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.u26_1 = new PrimitiveArrayDescriptor(primitiveSerializer.u1x());
  }
  protoOf(PrimitiveArraySerializer).u1x = function () {
    return this.u26_1;
  };
  protoOf(PrimitiveArraySerializer).v26 = function (_this__u8e3s4) {
    return _this__u8e3s4.w26();
  };
  protoOf(PrimitiveArraySerializer).j24 = function (_this__u8e3s4) {
    return this.v26(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).x26 = function (_this__u8e3s4) {
    return _this__u8e3s4.y26();
  };
  protoOf(PrimitiveArraySerializer).l24 = function (_this__u8e3s4) {
    return this.x26(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).z26 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.a27(size);
  };
  protoOf(PrimitiveArraySerializer).p24 = function (_this__u8e3s4, size) {
    return this.z26(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).b27 = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).u25 = function (_this__u8e3s4) {
    return this.b27((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).c27 = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).r24 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.c27(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).h24 = function () {
    return this.n24(this.d27());
  };
  protoOf(PrimitiveArraySerializer).g27 = function (encoder, value) {
    var size = this.s25(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.u26_1;
    var composite = encoder.d23(descriptor, size);
    this.f27(composite, value, size);
    composite.i21(descriptor);
  };
  protoOf(PrimitiveArraySerializer).v1x = function (encoder, value) {
    return this.g27(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).w24 = function (encoder, value) {
    return this.g27(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).w1x = function (decoder) {
    return this.a25(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).h27 = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.w26() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.a27(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.a27.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.i27_1 = longArray(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_7() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).j3(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.m27_1[slot] = $this.m27_1[slot].n3((new Long(1, 0)).j3(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.m27_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.m27_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.h3());
          slotMarks = slotMarks.n3((new Long(1, 0)).j3(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.k27_1($this.j27_1, index)) {
            $this.m27_1[slot] = slotMarks;
            return index;
          }
        }
        $this.m27_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.j27_1 = descriptor;
    this.k27_1 = readIfAbsent;
    var elementsCount = this.j27_1.n1z();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).j3(elementsCount);
      }
      tmp.l27_1 = tmp_0;
      this.m27_1 = Companion_getInstance_7().i27_1;
    } else {
      this.l27_1 = new Long(0, 0);
      this.m27_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).n27 = function (index) {
    if (index < 64) {
      this.l27_1 = this.l27_1.n3((new Long(1, 0)).j3(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).o27 = function () {
    var elementsCount = this.j27_1.n1z();
    while (!this.l27_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.l27_1.h3());
      this.l27_1 = this.l27_1.n3((new Long(1, 0)).j3(index));
      if (this.k27_1(this.j27_1, index)) {
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
    var d = new EnumDescriptor(serialName, $this.p27_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.p27_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.e28(element.q2_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.q27_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer(serialName, values) {
    this.p27_1 = values;
    this.q27_1 = null;
    var tmp = this;
    tmp.r27_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).u1x = function () {
    var tmp0 = this.r27_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_1();
    return tmp0.z();
  };
  protoOf(EnumSerializer).f28 = function (encoder, value) {
    var index = indexOf(this.p27_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.u1x().v1y() + ', ' + ('must be one of ' + contentToString(this.p27_1)));
    }
    encoder.m22(this.u1x(), index);
  };
  protoOf(EnumSerializer).v1x = function (encoder, value) {
    return this.f28(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).w1x = function (decoder) {
    var index = decoder.d21(this.u1x());
    if (!(0 <= index ? index <= (this.p27_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.u1x().v1y() + ' enum values, ' + ('values size is ' + this.p27_1.length));
    }
    return this.p27_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.u1x().v1y() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.t28_1;
    // Inline function 'kotlin.getValue' call
    elementDescriptors$factory();
    return tmp0.z();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.p1z(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.s28_1 = ENUM_getInstance();
    var tmp = this;
    tmp.t28_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).l1z = function () {
    return this.s28_1;
  };
  protoOf(EnumDescriptor).s1z = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.l1z() === ENUM_getInstance()))
      return false;
    if (!(this.v1y() === other.v1y()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.v1y() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.v1y());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = get_elementNames(this).p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
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
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.u1x();
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
    this.j29_1 = true;
  }
  protoOf(InlineClassDescriptor).m1z = function () {
    return this.j29_1;
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
      if (!(this.v1y() === other.v1y())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.j29_1 && contentEquals(this.u28(), other.u28()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.n1z() === other.n1z())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.n1z();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.s1z(index).v1y() === other.s1z(index).v1y())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.s1z(index).l1z(), other.s1z(index).l1z())) {
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
    this.k29_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).l29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.k29_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).u1x = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).v1x = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).w1x = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.n29_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).w21 = function () {
    return this.n29_1;
  };
  protoOf(NoOpEncoder).b22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).c22 = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).d22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).e22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).f22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).g22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).h22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).i22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).j22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).k22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).l22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).m22 = function (enumDescriptor, index) {
    return Unit_instance;
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.o29_1 = OBJECT_getInstance();
    this.p29_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).l1z = function () {
    return this.o29_1;
  };
  protoOf(NothingSerialDescriptor).v1y = function () {
    return this.p29_1;
  };
  protoOf(NothingSerialDescriptor).n1z = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).p1z = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).q1z = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).t1z = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).s1z = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).r1z = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.p29_1) + imul(31, this.o29_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.q29_1 = serializer;
    this.r29_1 = new SerialDescriptorForNullable(this.q29_1.u1x());
  }
  protoOf(NullableSerializer).u1x = function () {
    return this.r29_1;
  };
  protoOf(NullableSerializer).s29 = function (encoder, value) {
    if (!(value == null)) {
      encoder.c23();
      encoder.z22(this.q29_1, value);
    } else {
      encoder.c22();
    }
  };
  protoOf(NullableSerializer).v1x = function (encoder, value) {
    return this.s29(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).w1x = function (decoder) {
    return decoder.s20() ? decoder.g21(this.q29_1) : decoder.t20();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.q29_1, other.q29_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.q29_1);
  };
  function SerialDescriptorForNullable(original) {
    this.u1z_1 = original;
    this.v1z_1 = this.u1z_1.v1y() + '?';
    this.w1z_1 = cachedSerialNames(this.u1z_1);
  }
  protoOf(SerialDescriptorForNullable).v1y = function () {
    return this.v1z_1;
  };
  protoOf(SerialDescriptorForNullable).q20 = function () {
    return this.w1z_1;
  };
  protoOf(SerialDescriptorForNullable).h1z = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.u1z_1, other.u1z_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.u1z_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.u1z_1), 31);
  };
  protoOf(SerialDescriptorForNullable).l1z = function () {
    return this.u1z_1.l1z();
  };
  protoOf(SerialDescriptorForNullable).m1z = function () {
    return this.u1z_1.m1z();
  };
  protoOf(SerialDescriptorForNullable).n1z = function () {
    return this.u1z_1.n1z();
  };
  protoOf(SerialDescriptorForNullable).o1z = function () {
    return this.u1z_1.o1z();
  };
  protoOf(SerialDescriptorForNullable).p1z = function (index) {
    return this.u1z_1.p1z(index);
  };
  protoOf(SerialDescriptorForNullable).q1z = function (name) {
    return this.u1z_1.q1z(name);
  };
  protoOf(SerialDescriptorForNullable).r1z = function (index) {
    return this.u1z_1.r1z(index);
  };
  protoOf(SerialDescriptorForNullable).s1z = function (index) {
    return this.u1z_1.s1z(index);
  };
  protoOf(SerialDescriptorForNullable).t1z = function (index) {
    return this.u1z_1.t1z(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.c1y_1 = this$0.u29_1;
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
    this.t29_1 = objectInstance;
    this.u29_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.v29_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).u1x = function () {
    var tmp0 = this.v29_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_2();
    return tmp0.z();
  };
  protoOf(ObjectSerializer).k1y = function (encoder, value) {
    encoder.h21(this.u1x()).i21(this.u1x());
  };
  protoOf(ObjectSerializer).v1x = function (encoder, value) {
    return this.k1y(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).w1x = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.u1x();
    var composite = decoder.h21(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      if (composite.x21()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.y21(this.u1x());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.i21(descriptor);
    return this.t29_1;
  };
  function descriptor$factory_2() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.u1x();
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
      return _this__u8e3s4.q20();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.n1z());
    var inductionVariable = 0;
    var last = _this__u8e3s4.n1z();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.p1z(i);
        result.n(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.uc();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + toString(t) + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + toString(t) + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + toString(t) + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + toString_0(t));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0 = _this__u8e3s4.gm_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.gm_1);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.fc();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.h())) {
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
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  function serializerNotRegistered(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4));
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
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.p1z(i);
          missingFields.n(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.v1y());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.v1y());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.v1y();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.p();
    while (_iterator__ex2g4s_0.q()) {
      var element_0 = _iterator__ex2g4s_0.r();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.l1z();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.b28_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.z();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.d28_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory_0();
    return tmp0.z();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.w27_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.w27_1[i];
        indices.n2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.t27_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l29();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.t27_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m29();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0 = item.u1x();
          destination.n(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.u28());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.p1z(i) + ': ' + this$0.s1z(i).v1y();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.s27_1 = serialName;
    this.t27_1 = generatedSerializer;
    this.u27_1 = elementsCount;
    this.v27_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.u27_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.w27_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.u27_1;
    tmp_3.x27_1 = Array(size);
    this.y27_1 = null;
    this.z27_1 = booleanArray(this.u27_1);
    this.a28_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.b28_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.c28_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.d28_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).v1y = function () {
    return this.s27_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).n1z = function () {
    return this.u27_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).l1z = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).o1z = function () {
    var tmp0_elvis_lhs = this.y27_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).q20 = function () {
    return this.a28_1.l2();
  };
  protoOf(PluginGeneratedSerialDescriptor).u28 = function () {
    var tmp0 = this.c28_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.z();
  };
  protoOf(PluginGeneratedSerialDescriptor).v28 = function (name, isOptional) {
    this.v27_1 = this.v27_1 + 1 | 0;
    this.w27_1[this.v27_1] = name;
    this.z27_1[this.v27_1] = isOptional;
    this.x27_1[this.v27_1] = null;
    if (this.v27_1 === (this.u27_1 - 1 | 0)) {
      this.a28_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).e28 = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.v28(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.v28.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).w28 = function (a) {
    if (this.y27_1 == null) {
      this.y27_1 = ArrayList_init_$Create$(1);
    }
    ensureNotNull(this.y27_1).n(a);
  };
  protoOf(PluginGeneratedSerialDescriptor).s1z = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).u1x();
  };
  protoOf(PluginGeneratedSerialDescriptor).t1z = function (index) {
    return getChecked_0(this.z27_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).r1z = function (index) {
    var tmp0_elvis_lhs = getChecked(this.x27_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).p1z = function (index) {
    return getChecked(this.w27_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).q1z = function (name) {
    var tmp0_elvis_lhs = this.a28_1.k2(name);
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
      if (!(this.v1y() === other.v1y())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.u28(), other.u28())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.n1z() === other.n1z())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.n1z();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.s1z(index).v1y() === other.s1z(index).v1y())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.s1z(index).l1z(), other.s1z(index).l1z())) {
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
    var tmp = until(0, this.u27_1);
    var tmp_0 = this.v1y() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.u28();
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
  function SerializerFactory() {
  }
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
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_1()));
  }
  protoOf(CharArraySerializer_0).z29 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).s25 = function (_this__u8e3s4) {
    return this.z29((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).a2a = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).n24 = function (_this__u8e3s4) {
    return this.a2a((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).d27 = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).b2a = function (decoder, index, builder, checkIndex) {
    builder.e2a(decoder.q21(this.u26_1, index));
  };
  protoOf(CharArraySerializer_0).y24 = function (decoder, index, builder, checkIndex) {
    return this.b2a(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).e27 = function (decoder, index, builder, checkIndex) {
    return this.b2a(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).f2a = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.v22(this.u26_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).f27 = function (encoder, content, size) {
    return this.f2a(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).i2a = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).s25 = function (_this__u8e3s4) {
    return this.i2a((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).j2a = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).n24 = function (_this__u8e3s4) {
    return this.j2a((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).d27 = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).k2a = function (decoder, index, builder, checkIndex) {
    builder.n2a(decoder.p21(this.u26_1, index));
  };
  protoOf(DoubleArraySerializer_0).y24 = function (decoder, index, builder, checkIndex) {
    return this.k2a(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).e27 = function (decoder, index, builder, checkIndex) {
    return this.k2a(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).o2a = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.u22(this.u26_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).f27 = function (encoder, content, size) {
    return this.o2a(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).r2a = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).s25 = function (_this__u8e3s4) {
    return this.r2a((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).s2a = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).n24 = function (_this__u8e3s4) {
    return this.s2a((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).d27 = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).t2a = function (decoder, index, builder, checkIndex) {
    builder.w2a(decoder.o21(this.u26_1, index));
  };
  protoOf(FloatArraySerializer_0).y24 = function (decoder, index, builder, checkIndex) {
    return this.t2a(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).e27 = function (decoder, index, builder, checkIndex) {
    return this.t2a(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).x2a = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.t22(this.u26_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).f27 = function (encoder, content, size) {
    return this.x2a(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_2()));
  }
  protoOf(LongArraySerializer_0).a2b = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).s25 = function (_this__u8e3s4) {
    return this.a2b((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).b2b = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).n24 = function (_this__u8e3s4) {
    return this.b2b((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).d27 = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).c2b = function (decoder, index, builder, checkIndex) {
    builder.f2b(decoder.n21(this.u26_1, index));
  };
  protoOf(LongArraySerializer_0).y24 = function (decoder, index, builder, checkIndex) {
    return this.c2b(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).e27 = function (decoder, index, builder, checkIndex) {
    return this.c2b(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).g2b = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.s22(this.u26_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).f27 = function (encoder, content, size) {
    return this.g2b(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(Companion_getInstance_3()));
  }
  protoOf(ULongArraySerializer_0).j2b = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).s25 = function (_this__u8e3s4) {
    return this.j2b(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.kq_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).k2b = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).n24 = function (_this__u8e3s4) {
    return this.k2b(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.kq_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).l2b = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).d27 = function () {
    return new ULongArray(this.l2b());
  };
  protoOf(ULongArraySerializer_0).m2b = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.s21(this.u26_1, index).y20();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.p2b(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).y24 = function (decoder, index, builder, checkIndex) {
    return this.m2b(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).e27 = function (decoder, index, builder, checkIndex) {
    return this.m2b(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).q2b = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.x22(this.u26_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.h22(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).f27 = function (encoder, content, size) {
    return this.q2b(encoder, content instanceof ULongArray ? content.kq_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).t2b = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).s25 = function (_this__u8e3s4) {
    return this.t2b((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).u2b = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).n24 = function (_this__u8e3s4) {
    return this.u2b((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).d27 = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).v2b = function (decoder, index, builder, checkIndex) {
    builder.y2b(decoder.m21(this.u26_1, index));
  };
  protoOf(IntArraySerializer_0).y24 = function (decoder, index, builder, checkIndex) {
    return this.v2b(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).e27 = function (decoder, index, builder, checkIndex) {
    return this.v2b(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).z2b = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.r22(this.u26_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).f27 = function (encoder, content, size) {
    return this.z2b(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_4()));
  }
  protoOf(UIntArraySerializer_0).c2c = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).s25 = function (_this__u8e3s4) {
    return this.c2c(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.zp_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).d2c = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).n24 = function (_this__u8e3s4) {
    return this.d2c(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.zp_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).e2c = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).d27 = function () {
    return new UIntArray(this.e2c());
  };
  protoOf(UIntArraySerializer_0).f2c = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.s21(this.u26_1, index).x20();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.i2c(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).y24 = function (decoder, index, builder, checkIndex) {
    return this.f2c(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).e27 = function (decoder, index, builder, checkIndex) {
    return this.f2c(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).j2c = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.x22(this.u26_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.g22(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).f27 = function (encoder, content, size) {
    return this.j2c(encoder, content instanceof UIntArray ? content.zp_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).m2c = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).s25 = function (_this__u8e3s4) {
    return this.m2c((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).n2c = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).n24 = function (_this__u8e3s4) {
    return this.n2c((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).d27 = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).o2c = function (decoder, index, builder, checkIndex) {
    builder.r2c(decoder.l21(this.u26_1, index));
  };
  protoOf(ShortArraySerializer_0).y24 = function (decoder, index, builder, checkIndex) {
    return this.o2c(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).e27 = function (decoder, index, builder, checkIndex) {
    return this.o2c(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).s2c = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.q22(this.u26_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).f27 = function (encoder, content, size) {
    return this.s2c(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(Companion_getInstance_5()));
  }
  protoOf(UShortArraySerializer_0).v2c = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).s25 = function (_this__u8e3s4) {
    return this.v2c(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.vq_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).w2c = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).n24 = function (_this__u8e3s4) {
    return this.w2c(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.vq_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).x2c = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).d27 = function () {
    return new UShortArray(this.x2c());
  };
  protoOf(UShortArraySerializer_0).y2c = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.s21(this.u26_1, index).w20();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.b2d(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).y24 = function (decoder, index, builder, checkIndex) {
    return this.y2c(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).e27 = function (decoder, index, builder, checkIndex) {
    return this.y2c(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).c2d = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.x22(this.u26_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.f22(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).f27 = function (encoder, content, size) {
    return this.c2d(encoder, content instanceof UShortArray ? content.vq_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).f2d = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).s25 = function (_this__u8e3s4) {
    return this.f2d((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).g2d = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).n24 = function (_this__u8e3s4) {
    return this.g2d((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).d27 = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).h2d = function (decoder, index, builder, checkIndex) {
    builder.k2d(decoder.k21(this.u26_1, index));
  };
  protoOf(ByteArraySerializer_0).y24 = function (decoder, index, builder, checkIndex) {
    return this.h2d(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).e27 = function (decoder, index, builder, checkIndex) {
    return this.h2d(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).l2d = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.p22(this.u26_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).f27 = function (encoder, content, size) {
    return this.l2d(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_13(Companion_getInstance_6()));
  }
  protoOf(UByteArraySerializer_0).o2d = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).s25 = function (_this__u8e3s4) {
    return this.o2d(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.op_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).p2d = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).n24 = function (_this__u8e3s4) {
    return this.p2d(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.op_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).q2d = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).d27 = function () {
    return new UByteArray(this.q2d());
  };
  protoOf(UByteArraySerializer_0).r2d = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.s21(this.u26_1, index).v20();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.u2d(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).y24 = function (decoder, index, builder, checkIndex) {
    return this.r2d(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).e27 = function (decoder, index, builder, checkIndex) {
    return this.r2d(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).v2d = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.x22(this.u26_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.e22(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).f27 = function (encoder, content, size) {
    return this.v2d(encoder, content instanceof UByteArray ? content.op_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_14(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).y2d = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).s25 = function (_this__u8e3s4) {
    return this.y2d((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).z2d = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).n24 = function (_this__u8e3s4) {
    return this.z2d((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).d27 = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).a2e = function (decoder, index, builder, checkIndex) {
    builder.d2e(decoder.j21(this.u26_1, index));
  };
  protoOf(BooleanArraySerializer_0).y24 = function (decoder, index, builder, checkIndex) {
    return this.a2e(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).e27 = function (decoder, index, builder, checkIndex) {
    return this.a2e(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).e2e = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.o22(this.u26_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).f27 = function (encoder, content, size) {
    return this.e2e(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c2a_1 = bufferWithData;
    this.d2a_1 = bufferWithData.length;
    this.a27(10);
  }
  protoOf(CharArrayBuilder).w26 = function () {
    return this.d2a_1;
  };
  protoOf(CharArrayBuilder).a27 = function (requiredCapacity) {
    if (this.c2a_1.length < requiredCapacity)
      this.c2a_1 = copyOf(this.c2a_1, coerceAtLeast(requiredCapacity, imul(this.c2a_1.length, 2)));
  };
  protoOf(CharArrayBuilder).e2a = function (c) {
    this.h27();
    var tmp = this.c2a_1;
    var _unary__edvuaz = this.d2a_1;
    this.d2a_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).y26 = function () {
    return copyOf(this.c2a_1, this.d2a_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.l2a_1 = bufferWithData;
    this.m2a_1 = bufferWithData.length;
    this.a27(10);
  }
  protoOf(DoubleArrayBuilder).w26 = function () {
    return this.m2a_1;
  };
  protoOf(DoubleArrayBuilder).a27 = function (requiredCapacity) {
    if (this.l2a_1.length < requiredCapacity)
      this.l2a_1 = copyOf_0(this.l2a_1, coerceAtLeast(requiredCapacity, imul(this.l2a_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).n2a = function (c) {
    this.h27();
    var tmp = this.l2a_1;
    var _unary__edvuaz = this.m2a_1;
    this.m2a_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).y26 = function () {
    return copyOf_0(this.l2a_1, this.m2a_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.u2a_1 = bufferWithData;
    this.v2a_1 = bufferWithData.length;
    this.a27(10);
  }
  protoOf(FloatArrayBuilder).w26 = function () {
    return this.v2a_1;
  };
  protoOf(FloatArrayBuilder).a27 = function (requiredCapacity) {
    if (this.u2a_1.length < requiredCapacity)
      this.u2a_1 = copyOf_1(this.u2a_1, coerceAtLeast(requiredCapacity, imul(this.u2a_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).w2a = function (c) {
    this.h27();
    var tmp = this.u2a_1;
    var _unary__edvuaz = this.v2a_1;
    this.v2a_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).y26 = function () {
    return copyOf_1(this.u2a_1, this.v2a_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d2b_1 = bufferWithData;
    this.e2b_1 = bufferWithData.length;
    this.a27(10);
  }
  protoOf(LongArrayBuilder).w26 = function () {
    return this.e2b_1;
  };
  protoOf(LongArrayBuilder).a27 = function (requiredCapacity) {
    if (this.d2b_1.length < requiredCapacity)
      this.d2b_1 = copyOf_2(this.d2b_1, coerceAtLeast(requiredCapacity, imul(this.d2b_1.length, 2)));
  };
  protoOf(LongArrayBuilder).f2b = function (c) {
    this.h27();
    var tmp = this.d2b_1;
    var _unary__edvuaz = this.e2b_1;
    this.e2b_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).y26 = function () {
    return copyOf_2(this.d2b_1, this.e2b_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.n2b_1 = bufferWithData;
    this.o2b_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.a27(10);
  }
  protoOf(ULongArrayBuilder).w26 = function () {
    return this.o2b_1;
  };
  protoOf(ULongArrayBuilder).a27 = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.n2b_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.n2b_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.n2b_1), 2));
      tmp.n2b_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).p2b = function (c) {
    this.h27();
    var tmp = this.n2b_1;
    var _unary__edvuaz = this.o2b_1;
    this.o2b_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).f2e = function () {
    var tmp0 = this.n2b_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.o2b_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).y26 = function () {
    return new ULongArray(this.f2e());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.w2b_1 = bufferWithData;
    this.x2b_1 = bufferWithData.length;
    this.a27(10);
  }
  protoOf(IntArrayBuilder).w26 = function () {
    return this.x2b_1;
  };
  protoOf(IntArrayBuilder).a27 = function (requiredCapacity) {
    if (this.w2b_1.length < requiredCapacity)
      this.w2b_1 = copyOf_3(this.w2b_1, coerceAtLeast(requiredCapacity, imul(this.w2b_1.length, 2)));
  };
  protoOf(IntArrayBuilder).y2b = function (c) {
    this.h27();
    var tmp = this.w2b_1;
    var _unary__edvuaz = this.x2b_1;
    this.x2b_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).y26 = function () {
    return copyOf_3(this.w2b_1, this.x2b_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.g2c_1 = bufferWithData;
    this.h2c_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.a27(10);
  }
  protoOf(UIntArrayBuilder).w26 = function () {
    return this.h2c_1;
  };
  protoOf(UIntArrayBuilder).a27 = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.g2c_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.g2c_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.g2c_1), 2));
      tmp.g2c_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).i2c = function (c) {
    this.h27();
    var tmp = this.g2c_1;
    var _unary__edvuaz = this.h2c_1;
    this.h2c_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).g2e = function () {
    var tmp0 = this.g2c_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.h2c_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).y26 = function () {
    return new UIntArray(this.g2e());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.p2c_1 = bufferWithData;
    this.q2c_1 = bufferWithData.length;
    this.a27(10);
  }
  protoOf(ShortArrayBuilder).w26 = function () {
    return this.q2c_1;
  };
  protoOf(ShortArrayBuilder).a27 = function (requiredCapacity) {
    if (this.p2c_1.length < requiredCapacity)
      this.p2c_1 = copyOf_4(this.p2c_1, coerceAtLeast(requiredCapacity, imul(this.p2c_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).r2c = function (c) {
    this.h27();
    var tmp = this.p2c_1;
    var _unary__edvuaz = this.q2c_1;
    this.q2c_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).y26 = function () {
    return copyOf_4(this.p2c_1, this.q2c_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.z2c_1 = bufferWithData;
    this.a2d_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.a27(10);
  }
  protoOf(UShortArrayBuilder).w26 = function () {
    return this.a2d_1;
  };
  protoOf(UShortArrayBuilder).a27 = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.z2c_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.z2c_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.z2c_1), 2));
      tmp.z2c_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).b2d = function (c) {
    this.h27();
    var tmp = this.z2c_1;
    var _unary__edvuaz = this.a2d_1;
    this.a2d_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).h2e = function () {
    var tmp0 = this.z2c_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.a2d_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).y26 = function () {
    return new UShortArray(this.h2e());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.i2d_1 = bufferWithData;
    this.j2d_1 = bufferWithData.length;
    this.a27(10);
  }
  protoOf(ByteArrayBuilder).w26 = function () {
    return this.j2d_1;
  };
  protoOf(ByteArrayBuilder).a27 = function (requiredCapacity) {
    if (this.i2d_1.length < requiredCapacity)
      this.i2d_1 = copyOf_5(this.i2d_1, coerceAtLeast(requiredCapacity, imul(this.i2d_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).k2d = function (c) {
    this.h27();
    var tmp = this.i2d_1;
    var _unary__edvuaz = this.j2d_1;
    this.j2d_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).y26 = function () {
    return copyOf_5(this.i2d_1, this.j2d_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.s2d_1 = bufferWithData;
    this.t2d_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.a27(10);
  }
  protoOf(UByteArrayBuilder).w26 = function () {
    return this.t2d_1;
  };
  protoOf(UByteArrayBuilder).a27 = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.s2d_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.s2d_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.s2d_1), 2));
      tmp.s2d_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).u2d = function (c) {
    this.h27();
    var tmp = this.s2d_1;
    var _unary__edvuaz = this.t2d_1;
    this.t2d_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).i2e = function () {
    var tmp0 = this.s2d_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.t2d_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).y26 = function () {
    return new UByteArray(this.i2e());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.b2e_1 = bufferWithData;
    this.c2e_1 = bufferWithData.length;
    this.a27(10);
  }
  protoOf(BooleanArrayBuilder).w26 = function () {
    return this.c2e_1;
  };
  protoOf(BooleanArrayBuilder).a27 = function (requiredCapacity) {
    if (this.b2e_1.length < requiredCapacity)
      this.b2e_1 = copyOf_6(this.b2e_1, coerceAtLeast(requiredCapacity, imul(this.b2e_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).d2e = function (c) {
    this.h27();
    var tmp = this.b2e_1;
    var _unary__edvuaz = this.c2e_1;
    this.c2e_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).y26 = function () {
    return copyOf_6(this.b2e_1, this.c2e_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().k2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.j2e_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).u1x = function () {
    return this.j2e_1;
  };
  protoOf(StringSerializer).k2e = function (encoder, value) {
    return encoder.l22(value);
  };
  protoOf(StringSerializer).v1x = function (encoder, value) {
    return this.k2e(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).w1x = function (decoder) {
    return decoder.c21();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.l2e_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).u1x = function () {
    return this.l2e_1;
  };
  protoOf(CharSerializer).m2e = function (encoder, value) {
    return encoder.k22(value);
  };
  protoOf(CharSerializer).v1x = function (encoder, value) {
    return this.m2e(encoder, value instanceof Char ? value.l1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).n2e = function (decoder) {
    return decoder.b21();
  };
  protoOf(CharSerializer).w1x = function (decoder) {
    return new Char(this.n2e(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.o2e_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).u1x = function () {
    return this.o2e_1;
  };
  protoOf(DoubleSerializer).p2e = function (encoder, value) {
    return encoder.j22(value);
  };
  protoOf(DoubleSerializer).v1x = function (encoder, value) {
    return this.p2e(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).w1x = function (decoder) {
    return decoder.a21();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.q2e_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).u1x = function () {
    return this.q2e_1;
  };
  protoOf(FloatSerializer).r2e = function (encoder, value) {
    return encoder.i22(value);
  };
  protoOf(FloatSerializer).v1x = function (encoder, value) {
    return this.r2e(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).w1x = function (decoder) {
    return decoder.z20();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.s2e_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).u1x = function () {
    return this.s2e_1;
  };
  protoOf(LongSerializer).t2e = function (encoder, value) {
    return encoder.h22(value);
  };
  protoOf(LongSerializer).v1x = function (encoder, value) {
    return this.t2e(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).w1x = function (decoder) {
    return decoder.y20();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.u2e_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).u1x = function () {
    return this.u2e_1;
  };
  protoOf(IntSerializer).v2e = function (encoder, value) {
    return encoder.g22(value);
  };
  protoOf(IntSerializer).v1x = function (encoder, value) {
    return this.v2e(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).w1x = function (decoder) {
    return decoder.x20();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.w2e_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).u1x = function () {
    return this.w2e_1;
  };
  protoOf(ShortSerializer).x2e = function (encoder, value) {
    return encoder.f22(value);
  };
  protoOf(ShortSerializer).v1x = function (encoder, value) {
    return this.x2e(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).w1x = function (decoder) {
    return decoder.w20();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.y2e_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).u1x = function () {
    return this.y2e_1;
  };
  protoOf(ByteSerializer).z2e = function (encoder, value) {
    return encoder.e22(value);
  };
  protoOf(ByteSerializer).v1x = function (encoder, value) {
    return this.z2e(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).w1x = function (decoder) {
    return decoder.v20();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.a2f_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).u1x = function () {
    return this.a2f_1;
  };
  protoOf(BooleanSerializer).b2f = function (encoder, value) {
    return encoder.d22(value);
  };
  protoOf(BooleanSerializer).v1x = function (encoder, value) {
    return this.b2f(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).w1x = function (decoder) {
    return decoder.u20();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.c2f_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).u1x = function () {
    return this.c2f_1.u1x();
  };
  protoOf(UnitSerializer).d2f = function (encoder, value) {
    this.c2f_1.k1y(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).v1x = function (encoder, value) {
    return this.d2f(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).e2f = function (decoder) {
    this.c2f_1.w1x(decoder);
  };
  protoOf(UnitSerializer).w1x = function (decoder) {
    this.e2f(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.f2f_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.f2f_1 = serialName;
    this.g2f_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).v1y = function () {
    return this.f2f_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).l1z = function () {
    return this.g2f_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).n1z = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).p1z = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).q1z = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).t1z = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).s1z = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).r1z = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.f2f_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.f2f_1 === other.f2f_1 && equals(this.g2f_1, other.g2f_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.f2f_1) + imul(31, this.g2f_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().m2();
    var _iterator__ex2g4s = values.p();
    while (_iterator__ex2g4s.q()) {
      var primitive = _iterator__ex2g4s.r();
      var primitiveName = primitive.u1x().v1y();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).fc() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
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
  function NamedValueEncoder() {
    TaggedEncoder.call(this);
  }
  protoOf(NamedValueEncoder).i2f = function (_this__u8e3s4, index) {
    return this.k2f(this.j2f(_this__u8e3s4, index));
  };
  protoOf(NamedValueEncoder).k2f = function (nestedName) {
    var tmp0_elvis_lhs = this.m2f();
    return this.n2f(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueEncoder).j2f = function (descriptor, index) {
    return descriptor.p1z(index);
  };
  protoOf(NamedValueEncoder).n2f = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).i2f = function (_this__u8e3s4, index) {
    return this.k2f(this.j2f(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).k2f = function (nestedName) {
    var tmp0_elvis_lhs = this.m2f();
    return this.n2f(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).j2f = function (descriptor, index) {
    return descriptor.p1z(index);
  };
  protoOf(NamedValueDecoder).n2f = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).k2g = function () {
    return this.i2g_1.h() ? '$' : joinToString(this.i2g_1, '.', '$.');
  };
  function encodeElement($this, desc, index) {
    var tag = $this.i2f(desc, index);
    $this.e2g(tag);
    return true;
  }
  function TaggedEncoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.l2f_1 = ArrayList_init_$Create$_0();
  }
  protoOf(TaggedEncoder).w21 = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedEncoder).o2f = function (tag, value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(TaggedEncoder).p2f = function (tag) {
  };
  protoOf(TaggedEncoder).q2f = function (tag) {
    throw SerializationException_init_$Create$_0('null is not supported');
  };
  protoOf(TaggedEncoder).r2f = function (tag, value) {
    return this.o2f(tag, value);
  };
  protoOf(TaggedEncoder).s2f = function (tag, value) {
    return this.o2f(tag, value);
  };
  protoOf(TaggedEncoder).t2f = function (tag, value) {
    return this.o2f(tag, value);
  };
  protoOf(TaggedEncoder).u2f = function (tag, value) {
    return this.o2f(tag, value);
  };
  protoOf(TaggedEncoder).v2f = function (tag, value) {
    return this.o2f(tag, value);
  };
  protoOf(TaggedEncoder).w2f = function (tag, value) {
    return this.o2f(tag, value);
  };
  protoOf(TaggedEncoder).x2f = function (tag, value) {
    return this.o2f(tag, value);
  };
  protoOf(TaggedEncoder).y2f = function (tag, value) {
    return this.o2f(tag, new Char(value));
  };
  protoOf(TaggedEncoder).z2f = function (tag, value) {
    return this.o2f(tag, value);
  };
  protoOf(TaggedEncoder).a2g = function (tag, enumDescriptor, ordinal) {
    return this.o2f(tag, ordinal);
  };
  protoOf(TaggedEncoder).b2g = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.e2g(tag);
    return this;
  };
  protoOf(TaggedEncoder).n22 = function (descriptor) {
    return this.b2g(this.f2g(), descriptor);
  };
  protoOf(TaggedEncoder).c23 = function () {
    return this.p2f(this.d2g());
  };
  protoOf(TaggedEncoder).c22 = function () {
    return this.q2f(this.f2g());
  };
  protoOf(TaggedEncoder).d22 = function (value) {
    return this.x2f(this.f2g(), value);
  };
  protoOf(TaggedEncoder).e22 = function (value) {
    return this.s2f(this.f2g(), value);
  };
  protoOf(TaggedEncoder).f22 = function (value) {
    return this.t2f(this.f2g(), value);
  };
  protoOf(TaggedEncoder).g22 = function (value) {
    return this.r2f(this.f2g(), value);
  };
  protoOf(TaggedEncoder).h22 = function (value) {
    return this.u2f(this.f2g(), value);
  };
  protoOf(TaggedEncoder).i22 = function (value) {
    return this.v2f(this.f2g(), value);
  };
  protoOf(TaggedEncoder).j22 = function (value) {
    return this.w2f(this.f2g(), value);
  };
  protoOf(TaggedEncoder).k22 = function (value) {
    return this.y2f(this.f2g(), value);
  };
  protoOf(TaggedEncoder).l22 = function (value) {
    return this.z2f(this.f2g(), value);
  };
  protoOf(TaggedEncoder).m22 = function (enumDescriptor, index) {
    return this.a2g(this.f2g(), enumDescriptor, index);
  };
  protoOf(TaggedEncoder).h21 = function (descriptor) {
    return this;
  };
  protoOf(TaggedEncoder).i21 = function (descriptor) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.l2f_1.h()) {
      this.f2g();
    }
    this.c2g(descriptor);
  };
  protoOf(TaggedEncoder).c2g = function (descriptor) {
  };
  protoOf(TaggedEncoder).o22 = function (descriptor, index, value) {
    return this.x2f(this.i2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).p22 = function (descriptor, index, value) {
    return this.s2f(this.i2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).q22 = function (descriptor, index, value) {
    return this.t2f(this.i2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).r22 = function (descriptor, index, value) {
    return this.r2f(this.i2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).s22 = function (descriptor, index, value) {
    return this.u2f(this.i2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).t22 = function (descriptor, index, value) {
    return this.v2f(this.i2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).u22 = function (descriptor, index, value) {
    return this.w2f(this.i2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).v22 = function (descriptor, index, value) {
    return this.y2f(this.i2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).w22 = function (descriptor, index, value) {
    return this.z2f(this.i2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).x22 = function (descriptor, index) {
    return this.b2g(this.i2f(descriptor, index), descriptor.s1z(index));
  };
  protoOf(TaggedEncoder).y22 = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.z22(serializer, value);
    }
  };
  protoOf(TaggedEncoder).a23 = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.b23(serializer, value);
    }
  };
  protoOf(TaggedEncoder).d2g = function () {
    return last(this.l2f_1);
  };
  protoOf(TaggedEncoder).m2f = function () {
    return lastOrNull(this.l2f_1);
  };
  protoOf(TaggedEncoder).e2g = function (name) {
    this.l2f_1.n(name);
  };
  protoOf(TaggedEncoder).f2g = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.l2f_1.h()) {
      tmp = this.l2f_1.h2(get_lastIndex_0(this.l2f_1));
    } else {
      throw SerializationException_init_$Create$_0('No tag in stack for requested element');
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.e2g(tag);
    var r = block();
    if (!$this.j2g_1) {
      $this.f2g();
    }
    $this.j2g_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.f21($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.u1x().h1z();
      var tmp;
      if (isNullabilitySupported || tmp0.s20()) {
        tmp = this$0.f21($deserializer, $previousValue);
      } else {
        tmp = tmp0.t20();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.i2g_1 = ArrayList_init_$Create$_0();
    this.j2g_1 = false;
  }
  protoOf(TaggedDecoder).w21 = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).l2g = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).m2g = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).n2g = function (tag) {
    var tmp = this.l2g(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).o2g = function (tag) {
    var tmp = this.l2g(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).p2g = function (tag) {
    var tmp = this.l2g(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).q2g = function (tag) {
    var tmp = this.l2g(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).r2g = function (tag) {
    var tmp = this.l2g(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).s2g = function (tag) {
    var tmp = this.l2g(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t2g = function (tag) {
    var tmp = this.l2g(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u2g = function (tag) {
    var tmp = this.l2g(tag);
    return tmp instanceof Char ? tmp.l1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).v2g = function (tag) {
    var tmp = this.l2g(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).w2g = function (tag, enumDescriptor) {
    var tmp = this.l2g(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x2g = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.e2g(tag);
    return this;
  };
  protoOf(TaggedDecoder).f21 = function (deserializer, previousValue) {
    return this.g21(deserializer);
  };
  protoOf(TaggedDecoder).e21 = function (descriptor) {
    return this.x2g(this.f2g(), descriptor);
  };
  protoOf(TaggedDecoder).s20 = function () {
    var tmp0_elvis_lhs = this.m2f();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.m2g(currentTag);
  };
  protoOf(TaggedDecoder).t20 = function () {
    return null;
  };
  protoOf(TaggedDecoder).u20 = function () {
    return this.n2g(this.f2g());
  };
  protoOf(TaggedDecoder).v20 = function () {
    return this.o2g(this.f2g());
  };
  protoOf(TaggedDecoder).w20 = function () {
    return this.p2g(this.f2g());
  };
  protoOf(TaggedDecoder).x20 = function () {
    return this.q2g(this.f2g());
  };
  protoOf(TaggedDecoder).y20 = function () {
    return this.r2g(this.f2g());
  };
  protoOf(TaggedDecoder).z20 = function () {
    return this.s2g(this.f2g());
  };
  protoOf(TaggedDecoder).a21 = function () {
    return this.t2g(this.f2g());
  };
  protoOf(TaggedDecoder).b21 = function () {
    return this.u2g(this.f2g());
  };
  protoOf(TaggedDecoder).c21 = function () {
    return this.v2g(this.f2g());
  };
  protoOf(TaggedDecoder).d21 = function (enumDescriptor) {
    return this.w2g(this.f2g(), enumDescriptor);
  };
  protoOf(TaggedDecoder).h21 = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).i21 = function (descriptor) {
  };
  protoOf(TaggedDecoder).j21 = function (descriptor, index) {
    return this.n2g(this.i2f(descriptor, index));
  };
  protoOf(TaggedDecoder).k21 = function (descriptor, index) {
    return this.o2g(this.i2f(descriptor, index));
  };
  protoOf(TaggedDecoder).l21 = function (descriptor, index) {
    return this.p2g(this.i2f(descriptor, index));
  };
  protoOf(TaggedDecoder).m21 = function (descriptor, index) {
    return this.q2g(this.i2f(descriptor, index));
  };
  protoOf(TaggedDecoder).n21 = function (descriptor, index) {
    return this.r2g(this.i2f(descriptor, index));
  };
  protoOf(TaggedDecoder).o21 = function (descriptor, index) {
    return this.s2g(this.i2f(descriptor, index));
  };
  protoOf(TaggedDecoder).p21 = function (descriptor, index) {
    return this.t2g(this.i2f(descriptor, index));
  };
  protoOf(TaggedDecoder).q21 = function (descriptor, index) {
    return this.u2g(this.i2f(descriptor, index));
  };
  protoOf(TaggedDecoder).r21 = function (descriptor, index) {
    return this.v2g(this.i2f(descriptor, index));
  };
  protoOf(TaggedDecoder).s21 = function (descriptor, index) {
    return this.x2g(this.i2f(descriptor, index), descriptor.s1z(index));
  };
  protoOf(TaggedDecoder).t21 = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.i2f(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).v21 = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.i2f(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).m2f = function () {
    return lastOrNull(this.i2g_1);
  };
  protoOf(TaggedDecoder).e2g = function (name) {
    this.i2g_1.n(name);
  };
  protoOf(TaggedDecoder).f2g = function () {
    var r = this.i2g_1.h2(get_lastIndex_0(this.i2g_1));
    this.j2g_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.y2g_1 = key;
    this.z2g_1 = value;
  }
  protoOf(MapEntry).y = function () {
    return this.y2g_1;
  };
  protoOf(MapEntry).z = function () {
    return this.z2g_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.y2g_1) + ', value=' + toString_0(this.z2g_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.y2g_1 == null ? 0 : hashCode(this.y2g_1);
    result = imul(result, 31) + (this.z2g_1 == null ? 0 : hashCode(this.z2g_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.y2g_1, tmp0_other_with_cast.y2g_1))
      return false;
    if (!equals(this.z2g_1, tmp0_other_with_cast.z2g_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.i1y('key', $keySerializer.u1x());
      $this$buildSerialDescriptor.i1y('value', $valueSerializer.u1x());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.c2h_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).u1x = function () {
    return this.c2h_1;
  };
  protoOf(MapEntrySerializer_0).d2h = function (_this__u8e3s4) {
    return _this__u8e3s4.y();
  };
  protoOf(MapEntrySerializer_0).e2h = function (_this__u8e3s4) {
    return this.d2h((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).f2h = function (_this__u8e3s4) {
    return _this__u8e3s4.z();
  };
  protoOf(MapEntrySerializer_0).g2h = function (_this__u8e3s4) {
    return this.f2h((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).h2h = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.i1y('first', $keySerializer.u1x());
      $this$buildClassSerialDescriptor.i1y('second', $valueSerializer.u1x());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.n2h_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).u1x = function () {
    return this.n2h_1;
  };
  protoOf(PairSerializer_0).o2h = function (_this__u8e3s4) {
    return _this__u8e3s4.zb_1;
  };
  protoOf(PairSerializer_0).e2h = function (_this__u8e3s4) {
    return this.o2h(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).p2h = function (_this__u8e3s4) {
    return _this__u8e3s4.ac_1;
  };
  protoOf(PairSerializer_0).g2h = function (_this__u8e3s4) {
    return this.p2h(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).h2h = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.u21($this.t2h_1, 0, $this.q2h_1);
    var b = composite.u21($this.t2h_1, 1, $this.r2h_1);
    var c = composite.u21($this.t2h_1, 2, $this.s2h_1);
    composite.i21($this.t2h_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.y21($this.t2h_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.u21($this.t2h_1, 0, $this.q2h_1);
          break;
        case 1:
          b = composite.u21($this.t2h_1, 1, $this.r2h_1);
          break;
        case 2:
          c = composite.u21($this.t2h_1, 2, $this.s2h_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.i21($this.t2h_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : !(b == null)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : !(c == null)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.i1y('first', this$0.q2h_1.u1x());
      $this$buildClassSerialDescriptor.i1y('second', this$0.r2h_1.u1x());
      $this$buildClassSerialDescriptor.i1y('third', this$0.s2h_1.u1x());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.q2h_1 = aSerializer;
    this.r2h_1 = bSerializer;
    this.s2h_1 = cSerializer;
    var tmp = this;
    tmp.t2h_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).u1x = function () {
    return this.t2h_1;
  };
  protoOf(TripleSerializer_0).u2h = function (encoder, value) {
    var structuredEncoder = encoder.h21(this.t2h_1);
    structuredEncoder.y22(this.t2h_1, 0, this.q2h_1, value.wo_1);
    structuredEncoder.y22(this.t2h_1, 1, this.r2h_1, value.xo_1);
    structuredEncoder.y22(this.t2h_1, 2, this.s2h_1, value.yo_1);
    structuredEncoder.i21(this.t2h_1);
  };
  protoOf(TripleSerializer_0).v1x = function (encoder, value) {
    return this.u2h(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).w1x = function (decoder) {
    var composite = decoder.h21(this.t2h_1);
    if (composite.x21()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.i2h_1 = keySerializer;
    this.j2h_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).k2h = function (encoder, value) {
    var structuredEncoder = encoder.h21(this.u1x());
    structuredEncoder.y22(this.u1x(), 0, this.i2h_1, this.e2h(value));
    structuredEncoder.y22(this.u1x(), 1, this.j2h_1, this.g2h(value));
    structuredEncoder.i21(this.u1x());
  };
  protoOf(KeyValueSerializer).v1x = function (encoder, value) {
    return this.k2h(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).w1x = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.u1x();
    var composite = decoder.h21(descriptor);
    var tmp$ret$0;
    $l$block: {
      if (composite.x21()) {
        var key = composite.u21(this.u1x(), 0, this.i2h_1);
        var value = composite.u21(this.u1x(), 1, this.j2h_1);
        tmp$ret$0 = this.h2h(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.y21(this.u1x());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.u21(this.u1x(), 0, this.i2h_1);
            break;
          case 1:
            value_0 = composite.u21(this.u1x(), 1, this.j2h_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      var tmp = (key_0 == null ? true : !(key_0 == null)) ? key_0 : THROW_CCE();
      tmp$ret$0 = this.h2h(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.i21(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.v2h_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_2()));
  }
  protoOf(ULongSerializer).u1x = function () {
    return this.v2h_1;
  };
  protoOf(ULongSerializer).w2h = function (encoder, value) {
    var tmp = encoder.n22(this.v2h_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.h22(tmp$ret$0);
  };
  protoOf(ULongSerializer).v1x = function (encoder, value) {
    return this.w2h(encoder, value instanceof ULong ? value.fq_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).x2h = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.e21(this.v2h_1).y20();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).w1x = function (decoder) {
    return new ULong(this.x2h(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.y2h_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_8(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).u1x = function () {
    return this.y2h_1;
  };
  protoOf(UIntSerializer).z2h = function (encoder, value) {
    var tmp = encoder.n22(this.y2h_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.g22(tmp$ret$0);
  };
  protoOf(UIntSerializer).v1x = function (encoder, value) {
    return this.z2h(encoder, value instanceof UInt ? value.up_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).a2i = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.e21(this.y2h_1).x20();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).w1x = function (decoder) {
    return new UInt(this.a2i(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.b2i_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_10(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).u1x = function () {
    return this.b2i_1;
  };
  protoOf(UShortSerializer).c2i = function (encoder, value) {
    var tmp = encoder.n22(this.b2i_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.f22(tmp$ret$0);
  };
  protoOf(UShortSerializer).v1x = function (encoder, value) {
    return this.c2i(encoder, value instanceof UShort ? value.qq_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).d2i = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.e21(this.b2i_1).w20();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).w1x = function (decoder) {
    return new UShort(this.d2i(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.e2i_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_12(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).u1x = function () {
    return this.e2i_1;
  };
  protoOf(UByteSerializer).f2i = function (encoder, value) {
    var tmp = encoder.n22(this.e2i_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.e22(tmp$ret$0);
  };
  protoOf(UByteSerializer).v1x = function (encoder, value) {
    return this.f2i(encoder, value instanceof UByte ? value.jp_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).g2i = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.e21(this.e2i_1).v20();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).w1x = function (decoder) {
    return new UByte(this.g2i(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function PolymorphicModuleBuilder(baseClass, baseSerializer) {
    baseSerializer = baseSerializer === VOID ? null : baseSerializer;
    this.h2i_1 = baseClass;
    this.i2i_1 = baseSerializer;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.j2i_1 = ArrayList_init_$Create$_0();
    this.k2i_1 = null;
    this.l2i_1 = null;
  }
  protoOf(PolymorphicModuleBuilder).m2i = function (subclass, serializer) {
    this.j2i_1.n(to(subclass, serializer));
  };
  protoOf(PolymorphicModuleBuilder).n2i = function (builder) {
    if (!(this.i2i_1 == null)) {
      builder.u2i(this.h2i_1, this.h2i_1, this.i2i_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.j2i_1.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var kclass = element.bc();
      var serializer = element.cc();
      var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var tmp$ret$0 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
      builder.u2i(this.h2i_1, tmp, tmp$ret$0);
    }
    var defaultSerializer = this.k2i_1;
    if (!(defaultSerializer == null)) {
      builder.v2i(this.h2i_1, defaultSerializer, false);
    }
    var defaultDeserializer = this.l2i_1;
    if (!(defaultDeserializer == null)) {
      builder.w2i(this.h2i_1, defaultDeserializer, false);
    }
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).d1z = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.e1z(kClass, typeArgumentsSerializers) : $super.e1z.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.y2i_1 = class2ContextualFactory;
    this.z2i_1 = polyBase2Serializers;
    this.a2j_1 = polyBase2DefaultSerializerProvider;
    this.b2j_1 = polyBase2NamedSerializers;
    this.c2j_1 = polyBase2DefaultDeserializerProvider;
    this.d2j_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).c1z = function () {
    return this.d2j_1;
  };
  protoOf(SerialModuleImpl).g23 = function (baseClass, value) {
    if (!baseClass.gc(value))
      return null;
    var tmp0_safe_receiver = this.z2i_1.k2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.a2j_1.k2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).f23 = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.b2j_1.k2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).k2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.c2j_1.k2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).e1z = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.y2i_1.k2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e2j(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).x2i = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.y2i_1.x().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.y();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.z();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.h2j_1;
        collector.i2j(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.g2j(kclass, serial.f2j_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.z2i_1.x().p();
    while (_iterator__ex2g4s_0.q()) {
      var element_0 = _iterator__ex2g4s_0.r();
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.y();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.z();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.x().p();
      while (_iterator__ex2g4s_1.q()) {
        var element_1 = _iterator__ex2g4s_1.r();
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.y();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.z();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$11 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.j2j(tmp_1, tmp_2, tmp$ret$11);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.a2j_1.x().p();
    while (_iterator__ex2g4s_2.q()) {
      var element_2 = _iterator__ex2g4s_2.r();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.y();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.z();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.k2j(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.c2j_1.x().p();
    while (_iterator__ex2g4s_3.q()) {
      var element_3 = _iterator__ex2g4s_3.r();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.y();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.z();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.l2j(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.h2j_1 = serializer;
  }
  protoOf(Argless).e2j = function (typeArgumentsSerializers) {
    return this.h2j_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.h2j_1, this.h2j_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.h2j_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.f2j_1 = provider;
  }
  protoOf(WithTypeArguments).e2j = function (typeArgumentsSerializers) {
    return this.f2j_1(typeArgumentsSerializers);
  };
  function ContextualProvider() {
  }
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
  function SerializersModuleBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.o2i_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.p2i_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.q2i_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.r2i_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.s2i_1 = HashMap_init_$Create$();
    this.t2i_1 = false;
  }
  protoOf(SerializersModuleBuilder).i2j = function (kClass, serializer) {
    return this.m2j(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).g2j = function (kClass, provider) {
    return this.m2j(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).j2j = function (baseClass, actualClass, actualSerializer) {
    this.u2i(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).k2j = function (baseClass, defaultSerializerProvider) {
    this.v2i(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).l2j = function (baseClass, defaultDeserializerProvider) {
    this.w2i(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).n2j = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.o2i_1.k2(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.o2i_1.n2(forClass, provider);
    if (isInterface_0(forClass))
      this.t2i_1 = true;
  };
  protoOf(SerializersModuleBuilder).m2j = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.n2j(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.n2j.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).v2i = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.q2i_1.k2(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString_0(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.q2i_1.n2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).w2i = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.s2i_1.k2(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString_0(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.s2i_1.n2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).o2j = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.u1x().v1y();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.p2i_1;
    var value = this_0.k2(baseClass);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer = HashMap_init_$Create$();
      this_0.n2(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var baseClassSerializers = tmp;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.r2i_1;
    var value_0 = this_1.k2(baseClass);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer_0 = HashMap_init_$Create$();
      this_1.n2(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    var names = tmp_0;
    var previousSerializer = baseClassSerializers.k2(concreteClass);
    if (!(previousSerializer == null) && !equals(previousSerializer, concreteSerializer)) {
      if (allowOverwrite)
        names.o2(previousSerializer.u1x().v1y());
      else
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
    }
    var previousByName = names.k2(name);
    if (!(previousByName == null) && !equals(previousByName, concreteSerializer)) {
      // Inline function 'kotlin.sequences.find' call
      var tmp0 = asSequence(baseClassSerializers);
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.sequences.firstOrNull' call
        var _iterator__ex2g4s = tmp0.p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
          if (element.z() === previousByName) {
            tmp$ret$7 = element;
            break $l$block;
          }
        }
        tmp$ret$7 = null;
      }
      var tmp0_safe_receiver = tmp$ret$7;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        var message = 'Name ' + name + ' is registered in the module but no Kotlin class is associated with it.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var previousClass = tmp_1;
      if (allowOverwrite)
        baseClassSerializers.o2(previousClass);
      else
        throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers in a scope of '" + toString(baseClass) + "' " + ("have the same serial name '" + name + "': " + toString(concreteSerializer) + " for '" + toString(concreteClass) + "' and " + toString_0(previousByName) + " for '" + toString(previousClass) + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.n2(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.n2(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).u2i = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.o2j(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.o2j.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).y26 = function () {
    return new SerialModuleImpl(this.o2i_1, this.p2i_1, this.q2i_1, this.r2i_1, this.s2i_1, this.t2i_1);
  };
  function SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, $this) {
    SerializerAlreadyRegisteredException.call($this, 'Serializer for ' + toString(concreteClass) + ' already registered in the scope of ' + toString(baseClass));
    return $this;
  }
  function SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass) {
    var tmp = SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, objectCreate(protoOf(SerializerAlreadyRegisteredException)));
    captureStack(tmp, SerializerAlreadyRegisteredException_init_$Create$);
    return tmp;
  }
  function SerializerAlreadyRegisteredException(msg) {
    IllegalArgumentException_init_$Init$_0(msg, this);
    captureStack(this, SerializerAlreadyRegisteredException);
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.p2j_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.p2j_1.equals(tmp0_other_with_cast.p2j_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.p2j_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.p2j_1) + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function isInterface_0(_this__u8e3s4) {
    return get_isInterface(_this__u8e3s4);
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().ld(), serializer_2(StringCompanionObject_instance)), to(getKClass(Char), serializer_3(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().od(), CharArraySerializer()), to(PrimitiveClasses_getInstance().jd(), serializer_4(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().ud(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().id(), serializer_5(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().td(), FloatArraySerializer()), to(getKClass(Long), serializer_6(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().sd(), LongArraySerializer()), to(getKClass(ULong), serializer_7(Companion_getInstance_3())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().hd(), serializer_8(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().rd(), IntArraySerializer()), to(getKClass(UInt), serializer_9(Companion_getInstance_4())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().gd(), serializer_10(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().qd(), ShortArraySerializer()), to(getKClass(UShort), serializer_11(Companion_getInstance_5())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().fd(), serializer_12(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().pd(), ByteArraySerializer()), to(getKClass(UByte), serializer_13(Companion_getInstance_6())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().ed(), serializer_14(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().nd(), BooleanArraySerializer()), to(getKClass(Unit), serializer_15(Unit_instance)), to(PrimitiveClasses_getInstance().dd(), NothingSerializer()), to(getKClass(Duration), serializer_16(Companion_getInstance())), to(getKClass(Uuid), serializer_17(Companion_getInstance_0()))]);
  }
  function get_isInterface(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().dd())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().dd()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().kd());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = isInterface(assocObject, KSerializer) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.w29(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          tmp_0 = null;
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
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
  function createCache$1($factory) {
    this.q2j_1 = $factory;
  }
  protoOf(createCache$1).f1z = function (key) {
    return this.q2j_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.r2j_1 = $factory;
  }
  protoOf(createParametrizedCache$1).g1z = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.r2j_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).h1z = get_isNullable;
  protoOf(SerialDescriptorImpl).m1z = get_isInline;
  protoOf(AbstractDecoder).u21 = decodeSerializableElement$default;
  protoOf(AbstractDecoder).g21 = decodeSerializableValue;
  protoOf(AbstractDecoder).x21 = decodeSequentially;
  protoOf(AbstractDecoder).z21 = decodeCollectionSize;
  protoOf(AbstractEncoder).c23 = encodeNotNullMark;
  protoOf(AbstractEncoder).d23 = beginCollection;
  protoOf(AbstractEncoder).z22 = encodeSerializableValue;
  protoOf(AbstractEncoder).b23 = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).e23 = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).h1z = get_isNullable;
  protoOf(ListLikeDescriptor).m1z = get_isInline;
  protoOf(ListLikeDescriptor).o1z = get_annotations;
  protoOf(MapLikeDescriptor).h1z = get_isNullable;
  protoOf(MapLikeDescriptor).m1z = get_isInline;
  protoOf(MapLikeDescriptor).o1z = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).h1z = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).m1z = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).m29 = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).h1z = get_isNullable;
  protoOf(NothingSerialDescriptor).m1z = get_isInline;
  protoOf(NothingSerialDescriptor).o1z = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).h1z = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).m1z = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).o1z = get_annotations;
  protoOf(TaggedEncoder).d23 = beginCollection;
  protoOf(TaggedEncoder).z22 = encodeSerializableValue;
  protoOf(TaggedEncoder).b23 = encodeNullableSerializableValue;
  protoOf(TaggedEncoder).e23 = shouldEncodeElementDefault;
  protoOf(TaggedDecoder).u21 = decodeSerializableElement$default;
  protoOf(TaggedDecoder).g21 = decodeSerializableValue;
  protoOf(TaggedDecoder).x21 = decodeSequentially;
  protoOf(TaggedDecoder).z21 = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MissingFieldException_init_$Create$_0;
  _.$_$.b = PolymorphicSerializer_init_$Create$;
  _.$_$.c = SealedClassSerializer_init_$Create$;
  _.$_$.d = SerializationException_init_$Init$_0;
  _.$_$.e = SerializationException_init_$Create$_0;
  _.$_$.f = UnknownFieldException_init_$Create$;
  _.$_$.g = SEALED_getInstance;
  _.$_$.h = STRING_getInstance;
  _.$_$.i = CONTEXTUAL_getInstance;
  _.$_$.j = ENUM_getInstance;
  _.$_$.k = CLASS_getInstance;
  _.$_$.l = LIST_getInstance;
  _.$_$.m = MAP_getInstance;
  _.$_$.n = OBJECT_getInstance;
  _.$_$.o = ByteArraySerializer_getInstance;
  _.$_$.p = IntSerializer_getInstance;
  _.$_$.q = LongSerializer_getInstance;
  _.$_$.r = StringSerializer_getInstance;
  _.$_$.s = ListSerializer;
  _.$_$.t = MapSerializer;
  _.$_$.u = SetSerializer;
  _.$_$.v = get_nullable;
  _.$_$.w = serializer_2;
  _.$_$.x = serializer_11;
  _.$_$.y = serializer_9;
  _.$_$.z = serializer_13;
  _.$_$.a1 = serializer_7;
  _.$_$.b1 = PolymorphicKind;
  _.$_$.c1 = PrimitiveKind;
  _.$_$.d1 = PrimitiveSerialDescriptor;
  _.$_$.e1 = get_annotations;
  _.$_$.f1 = get_isInline;
  _.$_$.g1 = get_isNullable;
  _.$_$.h1 = SerialDescriptor;
  _.$_$.i1 = ENUM;
  _.$_$.j1 = buildClassSerialDescriptor;
  _.$_$.k1 = buildSerialDescriptor;
  _.$_$.l1 = getContextualDescriptor;
  _.$_$.m1 = AbstractDecoder;
  _.$_$.n1 = AbstractEncoder;
  _.$_$.o1 = CompositeDecoder;
  _.$_$.p1 = CompositeEncoder;
  _.$_$.q1 = Decoder;
  _.$_$.r1 = Encoder;
  _.$_$.s1 = AbstractPolymorphicSerializer;
  _.$_$.t1 = ArrayListSerializer;
  _.$_$.u1 = ElementMarker;
  _.$_$.v1 = typeParametersSerializers;
  _.$_$.w1 = GeneratedSerializer;
  _.$_$.x1 = InlinePrimitiveDescriptor;
  _.$_$.y1 = NamedValueDecoder;
  _.$_$.z1 = NamedValueEncoder;
  _.$_$.a2 = PluginGeneratedSerialDescriptor;
  _.$_$.b2 = SerializerFactory;
  _.$_$.c2 = createSimpleEnumSerializer;
  _.$_$.d2 = jsonCachedSerialNames;
  _.$_$.e2 = throwMissingFieldException;
  _.$_$.f2 = EmptySerializersModule_0;
  _.$_$.g2 = PolymorphicModuleBuilder;
  _.$_$.h2 = SerializersModuleBuilder;
  _.$_$.i2 = contextual;
  _.$_$.j2 = SerializersModuleCollector;
  _.$_$.k2 = BinaryFormat;
  _.$_$.l2 = DeserializationStrategy;
  _.$_$.m2 = KSerializer;
  _.$_$.n2 = MissingFieldException;
  _.$_$.o2 = SealedClassSerializer;
  _.$_$.p2 = SerializationException;
  _.$_$.q2 = SerializationStrategy;
  _.$_$.r2 = StringFormat;
  _.$_$.s2 = findPolymorphicSerializer_0;
  _.$_$.t2 = findPolymorphicSerializer;
  _.$_$.u2 = serializerOrNull_0;
  _.$_$.v2 = serializer_0;
  _.$_$.w2 = serializer_1;
  _.$_$.x2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
