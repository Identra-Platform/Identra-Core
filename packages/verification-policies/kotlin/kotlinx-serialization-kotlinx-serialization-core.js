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
  var protoOf = kotlin_kotlin.$_$.be;
  var initMetadataForInterface = kotlin_kotlin.$_$.bd;
  var VOID = kotlin_kotlin.$_$.j;
  var asList = kotlin_kotlin.$_$.h7;
  var objectCreate = kotlin_kotlin.$_$.ae;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.y5;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var emptyList = kotlin_kotlin.$_$.k8;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.r;
  var lazy = kotlin_kotlin.$_$.ik;
  var toString = kotlin_kotlin.$_$.fe;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var KProperty1 = kotlin_kotlin.$_$.we;
  var getPropertyCallableRef = kotlin_kotlin.$_$.uc;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var zip = kotlin_kotlin.$_$.ib;
  var toMap = kotlin_kotlin.$_$.ab;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var mapCapacity = kotlin_kotlin.$_$.s9;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var KtMap = kotlin_kotlin.$_$.w6;
  var isInterface = kotlin_kotlin.$_$.md;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.d2;
  var captureStack = kotlin_kotlin.$_$.jc;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.f2;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.h2;
  var IllegalArgumentException = kotlin_kotlin.$_$.aj;
  var listOf = kotlin_kotlin.$_$.q9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var KClass = kotlin_kotlin.$_$.se;
  var Triple = kotlin_kotlin.$_$.mj;
  var getKClass = kotlin_kotlin.$_$.g;
  var Pair = kotlin_kotlin.$_$.hj;
  var Entry = kotlin_kotlin.$_$.u6;
  var KtMutableMap = kotlin_kotlin.$_$.z6;
  var LinkedHashMap = kotlin_kotlin.$_$.r6;
  var HashMap = kotlin_kotlin.$_$.p6;
  var KtSet = kotlin_kotlin.$_$.d7;
  var KtMutableSet = kotlin_kotlin.$_$.a7;
  var LinkedHashSet = kotlin_kotlin.$_$.s6;
  var HashSet = kotlin_kotlin.$_$.q6;
  var Collection = kotlin_kotlin.$_$.o6;
  var KtList = kotlin_kotlin.$_$.t6;
  var KtMutableList = kotlin_kotlin.$_$.x6;
  var ArrayList = kotlin_kotlin.$_$.n6;
  var copyToArray = kotlin_kotlin.$_$.f8;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.b4;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.y3;
  var Result = kotlin_kotlin.$_$.ij;
  var ensureNotNull = kotlin_kotlin.$_$.ck;
  var equals = kotlin_kotlin.$_$.rc;
  var getStringHashCode = kotlin_kotlin.$_$.vc;
  var isBlank = kotlin_kotlin.$_$.hg;
  var toList = kotlin_kotlin.$_$.wa;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.c1;
  var toHashSet = kotlin_kotlin.$_$.sa;
  var toBooleanArray = kotlin_kotlin.$_$.qa;
  var withIndex = kotlin_kotlin.$_$.hb;
  var to = kotlin_kotlin.$_$.rk;
  var lazy_0 = kotlin_kotlin.$_$.jk;
  var contentEquals = kotlin_kotlin.$_$.q7;
  var until = kotlin_kotlin.$_$.re;
  var joinToString = kotlin_kotlin.$_$.e9;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  var Long = kotlin_kotlin.$_$.cj;
  var Char = kotlin_kotlin.$_$.si;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.i3;
  var Duration = kotlin_kotlin.$_$.li;
  var Companion_getInstance = kotlin_kotlin.$_$.b6;
  var Uuid = kotlin_kotlin.$_$.oi;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.d6;
  var toIntOrNull = kotlin_kotlin.$_$.uh;
  var hashCode = kotlin_kotlin.$_$.wc;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.x;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.g1;
  var isArray = kotlin_kotlin.$_$.ed;
  var arrayIterator = kotlin_kotlin.$_$.hc;
  var step = kotlin_kotlin.$_$.qe;
  var getValue = kotlin_kotlin.$_$.y8;
  var longArray = kotlin_kotlin.$_$.td;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var get_lastIndex = kotlin_kotlin.$_$.h9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.ak;
  var getOrNull = kotlin_kotlin.$_$.w8;
  var indexOf = kotlin_kotlin.$_$.a9;
  var contentToString = kotlin_kotlin.$_$.u7;
  var Enum = kotlin_kotlin.$_$.xi;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.b1;
  var toString_0 = kotlin_kotlin.$_$.pk;
  var KTypeParameter = kotlin_kotlin.$_$.xe;
  var contentHashCode = kotlin_kotlin.$_$.t7;
  var booleanArray = kotlin_kotlin.$_$.ic;
  var emptyMap = kotlin_kotlin.$_$.l8;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.e6;
  var isCharArray = kotlin_kotlin.$_$.hd;
  var charArray = kotlin_kotlin.$_$.lc;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.u5;
  var isDoubleArray = kotlin_kotlin.$_$.jd;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.v5;
  var isFloatArray = kotlin_kotlin.$_$.kd;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.f6;
  var isLongArray = kotlin_kotlin.$_$.nd;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.j6;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.e5;
  var ULongArray = kotlin_kotlin.$_$.rj;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.a5;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.x4;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.c5;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.y4;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.w5;
  var isIntArray = kotlin_kotlin.$_$.ld;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.i6;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.v4;
  var UIntArray = kotlin_kotlin.$_$.pj;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.r4;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.l4;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.t4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.n4;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.x5;
  var isShortArray = kotlin_kotlin.$_$.pd;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.k6;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.n5;
  var UShortArray = kotlin_kotlin.$_$.tj;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.j5;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.g5;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.l5;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.h5;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.t5;
  var isByteArray = kotlin_kotlin.$_$.gd;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.h6;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.j4;
  var UByteArray = kotlin_kotlin.$_$.nj;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.g4;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.c4;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.h4;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.d4;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.s5;
  var isBooleanArray = kotlin_kotlin.$_$.fd;
  var coerceAtLeast = kotlin_kotlin.$_$.me;
  var copyOf = kotlin_kotlin.$_$.z7;
  var copyOf_0 = kotlin_kotlin.$_$.b8;
  var copyOf_1 = kotlin_kotlin.$_$.c8;
  var copyOf_2 = kotlin_kotlin.$_$.x7;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.f5;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.b5;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.d5;
  var copyOf_3 = kotlin_kotlin.$_$.e8;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.w4;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.s4;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.u4;
  var copyOf_4 = kotlin_kotlin.$_$.w7;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.o5;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.k5;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.m5;
  var copyOf_5 = kotlin_kotlin.$_$.a8;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.k4;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.f4;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.i4;
  var copyOf_6 = kotlin_kotlin.$_$.y7;
  var Unit = kotlin_kotlin.$_$.vj;
  var trimIndent = kotlin_kotlin.$_$.hi;
  var charSequenceLength = kotlin_kotlin.$_$.nc;
  var last = kotlin_kotlin.$_$.k9;
  var lastOrNull = kotlin_kotlin.$_$.j9;
  var get_lastIndex_0 = kotlin_kotlin.$_$.i9;
  var ULong = kotlin_kotlin.$_$.sj;
  var UInt = kotlin_kotlin.$_$.qj;
  var UShort = kotlin_kotlin.$_$.uj;
  var UByte = kotlin_kotlin.$_$.oj;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.kk;
  var asSequence = kotlin_kotlin.$_$.i7;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.a6;
  var mapOf = kotlin_kotlin.$_$.u9;
  var get_js = kotlin_kotlin.$_$.rd;
  var findAssociatedObject = kotlin_kotlin.$_$.e;
  var get_indices = kotlin_kotlin.$_$.c9;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var get_indices_0 = kotlin_kotlin.$_$.b9;
  var Companion_instance = kotlin_kotlin.$_$.g6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.v3;
  var createFailure = kotlin_kotlin.$_$.bk;
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
    return deserializer.w20(this);
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
    return $super === VOID ? this.t24(descriptor, index, deserializer, previousValue) : $super.t24.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.h24(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.v20(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.u20().h22();
    if (isNullabilitySupported) {
      return this.z25(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.c25();
    } else {
      this.c26();
      this.z25(serializer, value);
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
    return this.h2m(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
    $this.y20_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, objectCreate(protoOf(PolymorphicSerializer)));
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.i21('type', serializer_2(StringCompanionObject_instance).u20());
      $this$buildSerialDescriptor.i21('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.x20_1.hc() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.c21_1 = this$0.y20_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.x20_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.x20_1 = baseClass;
    this.y20_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.z20_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).j21 = function () {
    return this.x20_1;
  };
  protoOf(PolymorphicSerializer).u20 = function () {
    var tmp0 = this.z20_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.b1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.x20_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.m21(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.j21());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.l21(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.j21());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.u20();
    }, null);
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.o21_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, objectCreate(protoOf(SealedClassSerializer)));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = this$0.r21_1.z().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.component1' call
        var name = element.a1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element.b1();
        $this$buildSerialDescriptor.i21(name, serializer.u20());
      }
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.i21('type', serializer_2(StringCompanionObject_instance).u20());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.n21_1.hc() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0));
      $this$buildSerialDescriptor.i21('value', elementDescriptor);
      $this$buildSerialDescriptor.c21_1 = this$0.o21_1;
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
    this.s21_1 = $this;
  }
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).t21 = function () {
    return this.s21_1.p();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).u21 = function (element) {
    return element.b1().u20().v21();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).w21 = function (element) {
    return this.u21((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.n21_1 = baseClass;
    this.o21_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.p21_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.n21_1.hc() + ' should be marked @Serializable');
    }
    this.q21_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    // Inline function 'kotlin.collections.groupingBy' call
    var this_0 = this.q21_1.z();
    // Inline function 'kotlin.collections.aggregate' call
    var tmp0 = new SealedClassSerializer$$inlined$groupingBy$1(this_0);
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.collections.aggregateTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tmp0.t21();
    while (_iterator__ex2g4s.q()) {
      var e = _iterator__ex2g4s.r();
      var key = tmp0.w21(e);
      var accumulator = destination.m2(key);
      accumulator == null && !destination.k2(key);
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var message = "Multiple sealed subclasses of '" + toString(this.n21_1) + "' have the same serial name '" + key + "':" + (" '" + toString(accumulator.a1()) + "', '" + toString(e.a1()) + "'");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      destination.p2(key, e);
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = destination.z().p();
    while (_iterator__ex2g4s_0.q()) {
      var element = _iterator__ex2g4s_0.r();
      var tmp_2 = element.a1();
      var tmp$ret$8 = element.b1().b1();
      destination_0.p2(tmp_2, tmp$ret$8);
    }
    tmp_1.r21_1 = destination_0;
  }
  protoOf(SealedClassSerializer).j21 = function () {
    return this.n21_1;
  };
  protoOf(SealedClassSerializer).u20 = function () {
    var tmp0 = this.p21_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return tmp0.b1();
  };
  protoOf(SealedClassSerializer).l21 = function (decoder, klassName) {
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.r21_1;
    var tmp0_elvis_lhs = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).m2(klassName);
    return tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).l21.call(this, decoder, klassName) : tmp0_elvis_lhs;
  };
  protoOf(SealedClassSerializer).m21 = function (encoder, value) {
    var tmp0_elvis_lhs = this.q21_1.m2(getKClassFromExpression(value));
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).m21.call(this, encoder, value) : tmp0_elvis_lhs;
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
      return receiver.u20();
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
    this.b22_1 = missingFields;
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
    var isNullable = type.yc();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.xc();
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
      if (isInterface_0(rootClass) && !(_this__u8e3s4.d22(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.c22()) {
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
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.d22(rootClass) : tmp0_elvis_lhs;
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
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.e22(rootClass, serializers) : tmp3_elvis_lhs;
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
      return $typeArguments.u(0).wc();
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().f22(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().f22(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().g22(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().g22(clazz, types);
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
      return $types.u(0).wc();
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
      return $types.u(0).wc();
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
    if (_this__u8e3s4.u20().h22()) {
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
    this.i22_1 = original;
    this.j22_1 = kClass;
    this.k22_1 = this.i22_1.v21() + '<' + this.j22_1.hc() + '>';
  }
  protoOf(ContextDescriptor).v21 = function () {
    return this.k22_1;
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
    return equals(this.i22_1, another.i22_1) && another.j22_1.equals(this.j22_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.j22_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.k22_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.j22_1) + ', original: ' + toString(this.i22_1) + ')';
  };
  protoOf(ContextDescriptor).l22 = function () {
    return this.i22_1.l22();
  };
  protoOf(ContextDescriptor).h22 = function () {
    return this.i22_1.h22();
  };
  protoOf(ContextDescriptor).m22 = function () {
    return this.i22_1.m22();
  };
  protoOf(ContextDescriptor).n22 = function () {
    return this.i22_1.n22();
  };
  protoOf(ContextDescriptor).o22 = function () {
    return this.i22_1.o22();
  };
  protoOf(ContextDescriptor).p22 = function (index) {
    return this.i22_1.p22(index);
  };
  protoOf(ContextDescriptor).q22 = function (name) {
    return this.i22_1.q22(name);
  };
  protoOf(ContextDescriptor).r22 = function (index) {
    return this.i22_1.r22(index);
  };
  protoOf(ContextDescriptor).s22 = function (index) {
    return this.i22_1.s22(index);
  };
  protoOf(ContextDescriptor).t22 = function (index) {
    return this.i22_1.t22(index);
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.d22(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.u20();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.j22_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.u22_1);
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
    this.y22_1 = $this_elementDescriptors;
    this.x22_1 = $this_elementDescriptors.n22();
  }
  protoOf(elementDescriptors$1).q = function () {
    return this.x22_1 > 0;
  };
  protoOf(elementDescriptors$1).r = function () {
    var tmp = this.y22_1.n22();
    var _unary__edvuaz = this.x22_1;
    this.x22_1 = _unary__edvuaz - 1 | 0;
    return this.y22_1.s22(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.z22_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).p = function () {
    return new elementDescriptors$1(this.z22_1);
  };
  function elementNames$1($this_elementNames) {
    this.b23_1 = $this_elementNames;
    this.a23_1 = $this_elementNames.n22();
  }
  protoOf(elementNames$1).q = function () {
    return this.a23_1 > 0;
  };
  protoOf(elementNames$1).r = function () {
    var tmp = this.b23_1.n22();
    var _unary__edvuaz = this.a23_1;
    this.a23_1 = _unary__edvuaz - 1 | 0;
    return this.b23_1.p22(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.c23_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).p = function () {
    return new elementNames$1(this.c23_1);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.d21_1.s(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.a21_1 = serialName;
    this.b21_1 = false;
    this.c21_1 = emptyList();
    this.d21_1 = ArrayList_init_$Create$_0();
    this.e21_1 = HashSet_init_$Create$();
    this.f21_1 = ArrayList_init_$Create$_0();
    this.g21_1 = ArrayList_init_$Create$_0();
    this.h21_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).d23 = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.e21_1.n(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.a21_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.d21_1.n(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.f21_1.n(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.g21_1.n(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.h21_1.n(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).i21 = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.d23(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.d23.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.p23_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.b1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.o23_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.p22(it) + ': ' + this$0.s22(it).v21();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.e23_1 = serialName;
    this.f23_1 = kind;
    this.g23_1 = elementsCount;
    this.h23_1 = builder.c21_1;
    this.i23_1 = toHashSet(builder.d21_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.d21_1;
    tmp.j23_1 = copyToArray(this_0);
    this.k23_1 = compactArray(builder.f21_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.g21_1;
    tmp_0.l23_1 = copyToArray(this_1);
    this.m23_1 = toBooleanArray(builder.h21_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.j23_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$2 = to(item.xh_1, item.wh_1);
      destination.n(tmp$ret$2);
    }
    tmp_1.n23_1 = toMap(destination);
    this.o23_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.p23_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).v21 = function () {
    return this.e23_1;
  };
  protoOf(SerialDescriptorImpl).l22 = function () {
    return this.f23_1;
  };
  protoOf(SerialDescriptorImpl).n22 = function () {
    return this.g23_1;
  };
  protoOf(SerialDescriptorImpl).o22 = function () {
    return this.h23_1;
  };
  protoOf(SerialDescriptorImpl).q23 = function () {
    return this.i23_1;
  };
  protoOf(SerialDescriptorImpl).p22 = function (index) {
    return getChecked(this.j23_1, index);
  };
  protoOf(SerialDescriptorImpl).q22 = function (name) {
    var tmp0_elvis_lhs = this.n23_1.m2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).r22 = function (index) {
    return getChecked(this.l23_1, index);
  };
  protoOf(SerialDescriptorImpl).s22 = function (index) {
    return getChecked(this.k23_1, index);
  };
  protoOf(SerialDescriptorImpl).t22 = function (index) {
    return getChecked_0(this.m23_1, index);
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
      if (!(this.v21() === other.v21())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.o23_1, other.o23_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.n22() === other.n22())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.n22();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.s22(index).v21() === other.s22(index).v21())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.s22(index).l22(), other.s22(index).l22())) {
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
    var tmp = until(0, this.g23_1);
    var tmp_0 = this.e23_1 + '(';
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.d21_1.s(), toList(typeParameters), sdBuilder);
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
    return ensureNotNull(getKClassFromExpression(this).hc());
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
  protoOf(AbstractDecoder).r23 = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).s23 = function () {
    return true;
  };
  protoOf(AbstractDecoder).t23 = function () {
    return null;
  };
  protoOf(AbstractDecoder).u23 = function () {
    var tmp = this.r23();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).v23 = function () {
    var tmp = this.r23();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).w23 = function () {
    var tmp = this.r23();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).x23 = function () {
    var tmp = this.r23();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).y23 = function () {
    var tmp = this.r23();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).z23 = function () {
    var tmp = this.r23();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).a24 = function () {
    var tmp = this.r23();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).b24 = function () {
    var tmp = this.r23();
    return tmp instanceof Char ? tmp.p1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).c24 = function () {
    var tmp = this.r23();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).d24 = function (enumDescriptor) {
    var tmp = this.r23();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).e24 = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).f24 = function (deserializer, previousValue) {
    return this.g24(deserializer);
  };
  protoOf(AbstractDecoder).h24 = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).i24 = function (descriptor) {
  };
  protoOf(AbstractDecoder).j24 = function (descriptor, index) {
    return this.u23();
  };
  protoOf(AbstractDecoder).k24 = function (descriptor, index) {
    return this.v23();
  };
  protoOf(AbstractDecoder).l24 = function (descriptor, index) {
    return this.w23();
  };
  protoOf(AbstractDecoder).m24 = function (descriptor, index) {
    return this.x23();
  };
  protoOf(AbstractDecoder).n24 = function (descriptor, index) {
    return this.y23();
  };
  protoOf(AbstractDecoder).o24 = function (descriptor, index) {
    return this.z23();
  };
  protoOf(AbstractDecoder).p24 = function (descriptor, index) {
    return this.a24();
  };
  protoOf(AbstractDecoder).q24 = function (descriptor, index) {
    return this.b24();
  };
  protoOf(AbstractDecoder).r24 = function (descriptor, index) {
    return this.c24();
  };
  protoOf(AbstractDecoder).s24 = function (descriptor, index) {
    return this.e24(descriptor.s22(index));
  };
  protoOf(AbstractDecoder).t24 = function (descriptor, index, deserializer, previousValue) {
    return this.f24(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).v24 = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.u20().h22();
    var tmp;
    if (isNullabilitySupported || this.s23()) {
      tmp = this.f24(deserializer, previousValue);
    } else {
      tmp = this.t23();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).h24 = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).i24 = function (descriptor) {
  };
  protoOf(AbstractEncoder).a25 = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).b25 = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).c25 = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).d25 = function (value) {
    return this.b25(value);
  };
  protoOf(AbstractEncoder).e25 = function (value) {
    return this.b25(value);
  };
  protoOf(AbstractEncoder).f25 = function (value) {
    return this.b25(value);
  };
  protoOf(AbstractEncoder).g25 = function (value) {
    return this.b25(value);
  };
  protoOf(AbstractEncoder).h25 = function (value) {
    return this.b25(value);
  };
  protoOf(AbstractEncoder).i25 = function (value) {
    return this.b25(value);
  };
  protoOf(AbstractEncoder).j25 = function (value) {
    return this.b25(value);
  };
  protoOf(AbstractEncoder).k25 = function (value) {
    return this.b25(new Char(value));
  };
  protoOf(AbstractEncoder).l25 = function (value) {
    return this.b25(value);
  };
  protoOf(AbstractEncoder).m25 = function (enumDescriptor, index) {
    return this.b25(index);
  };
  protoOf(AbstractEncoder).n25 = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).o25 = function (descriptor, index, value) {
    if (this.a25(descriptor, index)) {
      this.d25(value);
    }
  };
  protoOf(AbstractEncoder).p25 = function (descriptor, index, value) {
    if (this.a25(descriptor, index)) {
      this.e25(value);
    }
  };
  protoOf(AbstractEncoder).q25 = function (descriptor, index, value) {
    if (this.a25(descriptor, index)) {
      this.f25(value);
    }
  };
  protoOf(AbstractEncoder).r25 = function (descriptor, index, value) {
    if (this.a25(descriptor, index)) {
      this.g25(value);
    }
  };
  protoOf(AbstractEncoder).s25 = function (descriptor, index, value) {
    if (this.a25(descriptor, index)) {
      this.h25(value);
    }
  };
  protoOf(AbstractEncoder).t25 = function (descriptor, index, value) {
    if (this.a25(descriptor, index)) {
      this.i25(value);
    }
  };
  protoOf(AbstractEncoder).u25 = function (descriptor, index, value) {
    if (this.a25(descriptor, index)) {
      this.j25(value);
    }
  };
  protoOf(AbstractEncoder).v25 = function (descriptor, index, value) {
    if (this.a25(descriptor, index)) {
      this.k25(value);
    }
  };
  protoOf(AbstractEncoder).w25 = function (descriptor, index, value) {
    if (this.a25(descriptor, index)) {
      this.l25(value);
    }
  };
  protoOf(AbstractEncoder).x25 = function (descriptor, index) {
    return this.a25(descriptor, index) ? this.n25(descriptor.s22(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).y25 = function (descriptor, index, serializer, value) {
    if (this.a25(descriptor, index)) {
      this.z25(serializer, value);
    }
  };
  protoOf(AbstractEncoder).a26 = function (descriptor, index, serializer, value) {
    if (this.a25(descriptor, index)) {
      this.b26(serializer, value);
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
    var klassName = compositeDecoder.r24($this.u20(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.u24($this.u20(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).k21 = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.u20();
    var composite = encoder.h24(descriptor);
    composite.w25(this.u20(), 0, actualSerializer.u20().v21());
    var tmp = this.u20();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.y25(tmp, 1, tmp$ret$0, value);
    composite.i24(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).v20 = function (encoder, value) {
    return this.k21(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).w20 = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.u20();
    var composite = decoder.h24(descriptor);
    var tmp$ret$0;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.x24()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.y24(this.u20());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.r24(this.u20(), index);
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
            value = composite.u24(this.u20(), index, serializer);
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
    composite.i24(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).l21 = function (decoder, klassName) {
    return decoder.w24().f26(this.j21(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).m21 = function (encoder, value) {
    return encoder.w24().g26(this.j21(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.hc();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.hc() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.hc() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.h26_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).u20 = function () {
    return this.h26_1;
  };
  protoOf(NothingSerializer_0).i26 = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).v20 = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.i26(encoder, tmp);
  };
  protoOf(NothingSerializer_0).w20 = function (decoder) {
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
    this.j26_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).u20 = function () {
    return this.j26_1;
  };
  protoOf(DurationSerializer).k26 = function (encoder, value) {
    encoder.l25(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).v20 = function (encoder, value) {
    return this.k26(encoder, value instanceof Duration ? value.gg_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).l26 = function (decoder) {
    return Companion_getInstance().xo(decoder.c24());
  };
  protoOf(DurationSerializer).w20 = function (decoder) {
    return new Duration(this.l26(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.m26_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).u20 = function () {
    return this.m26_1;
  };
  protoOf(UuidSerializer).n26 = function (encoder, value) {
    encoder.l25(value.toString());
  };
  protoOf(UuidSerializer).v20 = function (encoder, value) {
    return this.n26(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).w20 = function (decoder) {
    return Companion_getInstance_0().aq(decoder.c24());
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
  protoOf(ArrayListClassDesc).v21 = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).v21 = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).v21 = function () {
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
  protoOf(ArrayClassDesc).v21 = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.q26_1 = elementDescriptor;
    this.r26_1 = 1;
  }
  protoOf(ListLikeDescriptor).l22 = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).n22 = function () {
    return this.r26_1;
  };
  protoOf(ListLikeDescriptor).p22 = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).q22 = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).t22 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.v21() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).r22 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.v21() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).s22 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.v21() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.q26_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.q26_1, other.q26_1) && this.v21() === other.v21())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.q26_1), 31) + getStringHashCode(this.v21()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.v21() + '(' + toString(this.q26_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.w26_1 = serialName;
    this.x26_1 = keyDescriptor;
    this.y26_1 = valueDescriptor;
    this.z26_1 = 2;
  }
  protoOf(MapLikeDescriptor).v21 = function () {
    return this.w26_1;
  };
  protoOf(MapLikeDescriptor).l22 = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).n22 = function () {
    return this.z26_1;
  };
  protoOf(MapLikeDescriptor).p22 = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).q22 = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).t22 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.v21() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).r22 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.v21() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).s22 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.v21() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.x26_1;
        break;
      case 1:
        tmp = this.y26_1;
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
    if (!(this.v21() === other.v21()))
      return false;
    if (!equals(this.x26_1, other.x26_1))
      return false;
    if (!equals(this.y26_1, other.y26_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.v21());
    result = imul(31, result) + hashCode(this.x26_1) | 0;
    result = imul(31, result) + hashCode(this.y26_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.v21() + '(' + toString(this.x26_1) + ', ' + toString(this.y26_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.e27_1 = primitive.v21() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).v21 = function () {
    return this.e27_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.g27_1 = new ArrayListClassDesc(element.u20());
  }
  protoOf(ArrayListSerializer).u20 = function () {
    return this.g27_1;
  };
  protoOf(ArrayListSerializer).h27 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).i27 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(ArrayListSerializer).j27 = function (_this__u8e3s4) {
    return this.i27(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).k27 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).l27 = function (_this__u8e3s4) {
    return this.k27(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).m27 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).n27 = function (_this__u8e3s4) {
    return this.m27((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).o27 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.i6(size);
  };
  protoOf(ArrayListSerializer).p27 = function (_this__u8e3s4, size) {
    return this.o27(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).q27 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.i2(index, element);
  };
  protoOf(ArrayListSerializer).r27 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.q27(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.c28_1 = new HashSetClassDesc(eSerializer.u20());
  }
  protoOf(HashSetSerializer).u20 = function () {
    return this.c28_1;
  };
  protoOf(HashSetSerializer).h27 = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).d28 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(HashSetSerializer).j27 = function (_this__u8e3s4) {
    return this.d28(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).e28 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).l27 = function (_this__u8e3s4) {
    return this.e28(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).f28 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).n27 = function (_this__u8e3s4) {
    return this.f28((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).g28 = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).p27 = function (_this__u8e3s4, size) {
    return this.g28(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).h28 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.n(element);
  };
  protoOf(HashSetSerializer).r27 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.h28(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.j28_1 = new LinkedHashSetClassDesc(eSerializer.u20());
  }
  protoOf(LinkedHashSetSerializer).u20 = function () {
    return this.j28_1;
  };
  protoOf(LinkedHashSetSerializer).h27 = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).k28 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(LinkedHashSetSerializer).j27 = function (_this__u8e3s4) {
    return this.k28(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).l28 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).l27 = function (_this__u8e3s4) {
    return this.l28(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).f28 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).n27 = function (_this__u8e3s4) {
    return this.f28((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).m28 = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).p27 = function (_this__u8e3s4, size) {
    return this.m28(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).n28 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.n(element);
  };
  protoOf(LinkedHashSetSerializer).r27 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.n28(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.q28_1 = new HashMapClassDesc(kSerializer.u20(), vSerializer.u20());
  }
  protoOf(HashMapSerializer).u20 = function () {
    return this.q28_1;
  };
  protoOf(HashMapSerializer).r28 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(HashMapSerializer).s28 = function (_this__u8e3s4) {
    return this.r28((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).t28 = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.z().p();
  };
  protoOf(HashMapSerializer).u28 = function (_this__u8e3s4) {
    return this.t28((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).h27 = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).v28 = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.s(), 2);
  };
  protoOf(HashMapSerializer).j27 = function (_this__u8e3s4) {
    return this.v28(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).w28 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).l27 = function (_this__u8e3s4) {
    return this.w28(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).x28 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).n27 = function (_this__u8e3s4) {
    return this.x28((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).y28 = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).p27 = function (_this__u8e3s4, size) {
    return this.y28(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.f29_1 = new LinkedHashMapClassDesc(kSerializer.u20(), vSerializer.u20());
  }
  protoOf(LinkedHashMapSerializer).u20 = function () {
    return this.f29_1;
  };
  protoOf(LinkedHashMapSerializer).r28 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(LinkedHashMapSerializer).s28 = function (_this__u8e3s4) {
    return this.r28((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).t28 = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.z().p();
  };
  protoOf(LinkedHashMapSerializer).u28 = function (_this__u8e3s4) {
    return this.t28((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).h27 = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).g29 = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.s(), 2);
  };
  protoOf(LinkedHashMapSerializer).j27 = function (_this__u8e3s4) {
    return this.g29(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).h29 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).l27 = function (_this__u8e3s4) {
    return this.h29(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).x28 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).n27 = function (_this__u8e3s4) {
    return this.x28((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).i29 = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).p27 = function (_this__u8e3s4, size) {
    return this.i29(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.k29_1 = kClass;
    this.l29_1 = new ArrayClassDesc(eSerializer.u20());
  }
  protoOf(ReferenceArraySerializer).u20 = function () {
    return this.l29_1;
  };
  protoOf(ReferenceArraySerializer).m29 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).s28 = function (_this__u8e3s4) {
    return this.m29((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).n29 = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).u28 = function (_this__u8e3s4) {
    return this.n29((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).h27 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).o29 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(ReferenceArraySerializer).j27 = function (_this__u8e3s4) {
    return this.o29(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).p29 = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.k29_1);
  };
  protoOf(ReferenceArraySerializer).l27 = function (_this__u8e3s4) {
    return this.p29(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).q29 = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).n27 = function (_this__u8e3s4) {
    return this.q29((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).r29 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.i6(size);
  };
  protoOf(ReferenceArraySerializer).p27 = function (_this__u8e3s4, size) {
    return this.r29(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).s29 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.i2(index, element);
  };
  protoOf(ReferenceArraySerializer).r27 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.s29(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).t27 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(CollectionSerializer).s28 = function (_this__u8e3s4) {
    return this.t27((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).u27 = function (_this__u8e3s4) {
    return _this__u8e3s4.p();
  };
  protoOf(CollectionSerializer).u28 = function (_this__u8e3s4) {
    return this.u27((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.z28_1 = keySerializer;
    this.a29_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).b29 = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.h1_1;
    var last = progression.i1_1;
    var step_0 = progression.j1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.c29(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).x27 = function (decoder, builder, startIndex, size) {
    return this.b29(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).c29 = function (decoder, index, builder, checkIndex) {
    var key = decoder.u24(this.u20(), index, this.z28_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.y24(this.u20());
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
    if (builder.k2(key)) {
      var tmp_2 = this.a29_1.u20().l22();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.t24(this.u20(), vIndex, this.a29_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.u24(this.u20(), vIndex, this.a29_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.p2(key, value);
  };
  protoOf(MapLikeSerializer).y27 = function (decoder, index, builder, checkIndex) {
    return this.c29(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).w27 = function (encoder, value) {
    var size = this.s28(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.u20();
    var composite = encoder.d26(descriptor, size);
    var iterator = this.u28(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var k = element.a1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.b1();
      var tmp = this.u20();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.y25(tmp, _unary__edvuaz, this.z28_1, k);
      var tmp_0 = this.u20();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.y25(tmp_0, _unary__edvuaz_0, this.a29_1, v);
    }
    composite.i24(descriptor);
  };
  protoOf(MapLikeSerializer).v20 = function (encoder, value) {
    return this.w27(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.v27_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).w27 = function (encoder, value) {
    var size = this.s28(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.u20();
    var composite = encoder.d26(descriptor, size);
    var iterator = this.u28(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.y25(this.u20(), index, this.v27_1, iterator.r());
      }
       while (inductionVariable < size);
    composite.i24(descriptor);
  };
  protoOf(CollectionLikeSerializer).v20 = function (encoder, value) {
    return this.w27(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).x27 = function (decoder, builder, startIndex, size) {
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
        this.y27(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).y27 = function (decoder, index, builder, checkIndex) {
    this.r27(builder, index, decoder.u24(this.u20(), index, this.v27_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.z24($this.u20());
    $this.p27(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).a28 = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.n27(previous);
    var builder = tmp1_elvis_lhs == null ? this.h27() : tmp1_elvis_lhs;
    var startIndex = this.j27(builder);
    var compositeDecoder = decoder.h24(this.u20());
    if (compositeDecoder.x24()) {
      this.x27(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.y24(this.u20());
        if (index === -1)
          break $l$loop;
        this.z27(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.i24(this.u20());
    return this.l27(builder);
  };
  protoOf(AbstractCollectionSerializer).w20 = function (decoder) {
    return this.a28(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).z27 = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.y27(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.y27.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.u29_1 = new PrimitiveArrayDescriptor(primitiveSerializer.u20());
  }
  protoOf(PrimitiveArraySerializer).u20 = function () {
    return this.u29_1;
  };
  protoOf(PrimitiveArraySerializer).v29 = function (_this__u8e3s4) {
    return _this__u8e3s4.w29();
  };
  protoOf(PrimitiveArraySerializer).j27 = function (_this__u8e3s4) {
    return this.v29(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).x29 = function (_this__u8e3s4) {
    return _this__u8e3s4.y29();
  };
  protoOf(PrimitiveArraySerializer).l27 = function (_this__u8e3s4) {
    return this.x29(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).z29 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.a2a(size);
  };
  protoOf(PrimitiveArraySerializer).p27 = function (_this__u8e3s4, size) {
    return this.z29(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).b2a = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).u28 = function (_this__u8e3s4) {
    return this.b2a((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).c2a = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).r27 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.c2a(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).h27 = function () {
    return this.n27(this.d2a());
  };
  protoOf(PrimitiveArraySerializer).g2a = function (encoder, value) {
    var size = this.s28(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.u29_1;
    var composite = encoder.d26(descriptor, size);
    this.f2a(composite, value, size);
    composite.i24(descriptor);
  };
  protoOf(PrimitiveArraySerializer).v20 = function (encoder, value) {
    return this.g2a(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).w27 = function (encoder, value) {
    return this.g2a(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).w20 = function (decoder) {
    return this.a28(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).h2a = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.w29() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.a2a(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.a2a.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.i2a_1 = longArray(0);
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
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).l3(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.m2a_1[slot] = $this.m2a_1[slot].p3((new Long(1, 0)).l3(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.m2a_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.m2a_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.j3());
          slotMarks = slotMarks.p3((new Long(1, 0)).l3(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.k2a_1($this.j2a_1, index)) {
            $this.m2a_1[slot] = slotMarks;
            return index;
          }
        }
        $this.m2a_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.j2a_1 = descriptor;
    this.k2a_1 = readIfAbsent;
    var elementsCount = this.j2a_1.n22();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).l3(elementsCount);
      }
      tmp.l2a_1 = tmp_0;
      this.m2a_1 = Companion_getInstance_7().i2a_1;
    } else {
      this.l2a_1 = new Long(0, 0);
      this.m2a_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).n2a = function (index) {
    if (index < 64) {
      this.l2a_1 = this.l2a_1.p3((new Long(1, 0)).l3(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).o2a = function () {
    var elementsCount = this.j2a_1.n22();
    while (!this.l2a_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.l2a_1.j3());
      this.l2a_1 = this.l2a_1.p3((new Long(1, 0)).l3(index));
      if (this.k2a_1(this.j2a_1, index)) {
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
  function createAnnotatedEnumSerializer(serialName, values, names, entryAnnotations, classAnnotations) {
    var descriptor = new EnumDescriptor(serialName, values.length);
    if (classAnnotations == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var inductionVariable = 0;
      var last = classAnnotations.length;
      while (inductionVariable < last) {
        var element = classAnnotations[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        descriptor.b2b(element);
      }
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var inductionVariable_0 = 0;
    var last_0 = values.length;
    while (inductionVariable_0 < last_0) {
      var item = values[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var tmp0_elvis_lhs = getOrNull(names, _unary__edvuaz);
      var elementName = tmp0_elvis_lhs == null ? item.s2_1 : tmp0_elvis_lhs;
      descriptor.c2b(elementName);
      var tmp1_safe_receiver = getOrNull(entryAnnotations, _unary__edvuaz);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable_1 = 0;
        var last_1 = tmp1_safe_receiver.length;
        while (inductionVariable_1 < last_1) {
          var element_0 = tmp1_safe_receiver[inductionVariable_1];
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          descriptor.d2b(element_0);
        }
      }
    }
    return EnumSerializer_init_$Create$(serialName, values, descriptor);
  }
  function EnumSerializer_init_$Init$(serialName, values, descriptor, $this) {
    EnumSerializer.call($this, serialName, values);
    $this.f2b_1 = descriptor;
    return $this;
  }
  function EnumSerializer_init_$Create$(serialName, values, descriptor) {
    return EnumSerializer_init_$Init$(serialName, values, descriptor, objectCreate(protoOf(EnumSerializer)));
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.e2b_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.e2b_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.c2b(element.s2_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.f2b_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer(serialName, values) {
    this.e2b_1 = values;
    this.f2b_1 = null;
    var tmp = this;
    tmp.g2b_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).u20 = function () {
    var tmp0 = this.g2b_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_1();
    return tmp0.b1();
  };
  protoOf(EnumSerializer).h2b = function (encoder, value) {
    var index = indexOf(this.e2b_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.u20().v21() + ', ' + ('must be one of ' + contentToString(this.e2b_1)));
    }
    encoder.m25(this.u20(), index);
  };
  protoOf(EnumSerializer).v20 = function (encoder, value) {
    return this.h2b(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).w20 = function (decoder) {
    var index = decoder.d24(this.u20());
    if (!(0 <= index ? index <= (this.e2b_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.u20().v21() + ' enum values, ' + ('values size is ' + this.e2b_1.length));
    }
    return this.e2b_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.u20().v21() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.v2b_1;
    // Inline function 'kotlin.getValue' call
    elementDescriptors$factory();
    return tmp0.b1();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.p22(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.u2b_1 = ENUM_getInstance();
    var tmp = this;
    tmp.v2b_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).l22 = function () {
    return this.u2b_1;
  };
  protoOf(EnumDescriptor).s22 = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.l22() === ENUM_getInstance()))
      return false;
    if (!(this.v21() === other.v21()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.v21() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.v21());
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
      return receiver.u20();
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
    this.k2c_1 = true;
  }
  protoOf(InlineClassDescriptor).m22 = function () {
    return this.k2c_1;
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
      if (!(this.v21() === other.v21())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.k2c_1 && contentEquals(this.w2b(), other.w2b()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.n22() === other.n22())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.n22();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.s22(index).v21() === other.s22(index).v21())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.s22(index).l22(), other.s22(index).l22())) {
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
    this.l2c_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).m2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.l2c_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).u20 = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).v20 = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).w20 = function (decoder) {
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
    this.o2c_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).w24 = function () {
    return this.o2c_1;
  };
  protoOf(NoOpEncoder).b25 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).c25 = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).d25 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).e25 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).f25 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).g25 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).h25 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).i25 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).j25 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).k25 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).l25 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).m25 = function (enumDescriptor, index) {
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
    this.p2c_1 = OBJECT_getInstance();
    this.q2c_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).l22 = function () {
    return this.p2c_1;
  };
  protoOf(NothingSerialDescriptor).v21 = function () {
    return this.q2c_1;
  };
  protoOf(NothingSerialDescriptor).n22 = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).p22 = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).q22 = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).t22 = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).s22 = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).r22 = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.q2c_1) + imul(31, this.p2c_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.r2c_1 = serializer;
    this.s2c_1 = new SerialDescriptorForNullable(this.r2c_1.u20());
  }
  protoOf(NullableSerializer).u20 = function () {
    return this.s2c_1;
  };
  protoOf(NullableSerializer).t2c = function (encoder, value) {
    if (!(value == null)) {
      encoder.c26();
      encoder.z25(this.r2c_1, value);
    } else {
      encoder.c25();
    }
  };
  protoOf(NullableSerializer).v20 = function (encoder, value) {
    return this.t2c(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).w20 = function (decoder) {
    return decoder.s23() ? decoder.g24(this.r2c_1) : decoder.t23();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.r2c_1, other.r2c_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.r2c_1);
  };
  function SerialDescriptorForNullable(original) {
    this.u22_1 = original;
    this.v22_1 = this.u22_1.v21() + '?';
    this.w22_1 = cachedSerialNames(this.u22_1);
  }
  protoOf(SerialDescriptorForNullable).v21 = function () {
    return this.v22_1;
  };
  protoOf(SerialDescriptorForNullable).q23 = function () {
    return this.w22_1;
  };
  protoOf(SerialDescriptorForNullable).h22 = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.u22_1, other.u22_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.u22_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.u22_1), 31);
  };
  protoOf(SerialDescriptorForNullable).l22 = function () {
    return this.u22_1.l22();
  };
  protoOf(SerialDescriptorForNullable).m22 = function () {
    return this.u22_1.m22();
  };
  protoOf(SerialDescriptorForNullable).n22 = function () {
    return this.u22_1.n22();
  };
  protoOf(SerialDescriptorForNullable).o22 = function () {
    return this.u22_1.o22();
  };
  protoOf(SerialDescriptorForNullable).p22 = function (index) {
    return this.u22_1.p22(index);
  };
  protoOf(SerialDescriptorForNullable).q22 = function (name) {
    return this.u22_1.q22(name);
  };
  protoOf(SerialDescriptorForNullable).r22 = function (index) {
    return this.u22_1.r22(index);
  };
  protoOf(SerialDescriptorForNullable).s22 = function (index) {
    return this.u22_1.s22(index);
  };
  protoOf(SerialDescriptorForNullable).t22 = function (index) {
    return this.u22_1.t22(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.c21_1 = this$0.v2c_1;
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
    this.u2c_1 = objectInstance;
    this.v2c_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.w2c_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).u20 = function () {
    var tmp0 = this.w2c_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_2();
    return tmp0.b1();
  };
  protoOf(ObjectSerializer).k21 = function (encoder, value) {
    encoder.h24(this.u20()).i24(this.u20());
  };
  protoOf(ObjectSerializer).v20 = function (encoder, value) {
    return this.k21(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).w20 = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.u20();
    var composite = decoder.h24(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      if (composite.x24()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.y24(this.u20());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.i24(descriptor);
    return this.u2c_1;
  };
  function descriptor$factory_2() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.u20();
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
      return _this__u8e3s4.q23();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.n22());
    var inductionVariable = 0;
    var last = _this__u8e3s4.n22();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.p22(i);
        result.n(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.wc();
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
    var tmp0 = _this__u8e3s4.en_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.en_1);
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
    var tmp0_elvis_lhs = _this__u8e3s4.hc();
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
          var element = descriptor.p22(i);
          missingFields.n(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.v21());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.v21());
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
      var tmp0_safe_receiver = element.v21();
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
      var tmp0_safe_receiver_0 = element_0.l22();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.y2a_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.b1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.a2b_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory_0();
    return tmp0.b1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.t2a_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.t2a_1[i];
        indices.p2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.q2a_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m2c();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.q2a_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n2c();
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
          var tmp$ret$0 = item.u20();
          destination.n(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.w2b());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.p22(i) + ': ' + this$0.s22(i).v21();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.p2a_1 = serialName;
    this.q2a_1 = generatedSerializer;
    this.r2a_1 = elementsCount;
    this.s2a_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.r2a_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.t2a_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.r2a_1;
    tmp_3.u2a_1 = Array(size);
    this.v2a_1 = null;
    this.w2a_1 = booleanArray(this.r2a_1);
    this.x2a_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.y2a_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.z2a_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.a2b_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).v21 = function () {
    return this.p2a_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).n22 = function () {
    return this.r2a_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).l22 = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).o22 = function () {
    var tmp0_elvis_lhs = this.v2a_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).q23 = function () {
    return this.x2a_1.n2();
  };
  protoOf(PluginGeneratedSerialDescriptor).w2b = function () {
    var tmp0 = this.z2a_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.b1();
  };
  protoOf(PluginGeneratedSerialDescriptor).x2b = function (name, isOptional) {
    this.s2a_1 = this.s2a_1 + 1 | 0;
    this.t2a_1[this.s2a_1] = name;
    this.w2a_1[this.s2a_1] = isOptional;
    this.u2a_1[this.s2a_1] = null;
    if (this.s2a_1 === (this.r2a_1 - 1 | 0)) {
      this.x2a_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).c2b = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.x2b(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.x2b.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).d2b = function (annotation) {
    // Inline function 'kotlin.let' call
    var it = this.u2a_1[this.s2a_1];
    var tmp;
    if (it == null) {
      var result = ArrayList_init_$Create$(1);
      this.u2a_1[this.s2a_1] = result;
      tmp = result;
    } else {
      tmp = it;
    }
    var list = tmp;
    list.n(annotation);
  };
  protoOf(PluginGeneratedSerialDescriptor).b2b = function (a) {
    if (this.v2a_1 == null) {
      this.v2a_1 = ArrayList_init_$Create$(1);
    }
    ensureNotNull(this.v2a_1).n(a);
  };
  protoOf(PluginGeneratedSerialDescriptor).s22 = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).u20();
  };
  protoOf(PluginGeneratedSerialDescriptor).t22 = function (index) {
    return getChecked_0(this.w2a_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).r22 = function (index) {
    var tmp0_elvis_lhs = getChecked(this.u2a_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).p22 = function (index) {
    return getChecked(this.t2a_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).q22 = function (name) {
    var tmp0_elvis_lhs = this.x2a_1.m2(name);
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
      if (!(this.v21() === other.v21())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.w2b(), other.w2b())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.n22() === other.n22())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.n22();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.s22(index).v21() === other.s22(index).v21())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.s22(index).l22(), other.s22(index).l22())) {
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
    var tmp = until(0, this.r2a_1);
    var tmp_0 = this.v21() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.w2b();
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
  protoOf(CharArraySerializer_0).a2d = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).s28 = function (_this__u8e3s4) {
    return this.a2d((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).b2d = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).n27 = function (_this__u8e3s4) {
    return this.b2d((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).d2a = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).c2d = function (decoder, index, builder, checkIndex) {
    builder.f2d(decoder.q24(this.u29_1, index));
  };
  protoOf(CharArraySerializer_0).y27 = function (decoder, index, builder, checkIndex) {
    return this.c2d(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).e2a = function (decoder, index, builder, checkIndex) {
    return this.c2d(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).g2d = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.v25(this.u29_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).f2a = function (encoder, content, size) {
    return this.g2d(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(DoubleArraySerializer_0).j2d = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).s28 = function (_this__u8e3s4) {
    return this.j2d((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).k2d = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).n27 = function (_this__u8e3s4) {
    return this.k2d((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).d2a = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).l2d = function (decoder, index, builder, checkIndex) {
    builder.o2d(decoder.p24(this.u29_1, index));
  };
  protoOf(DoubleArraySerializer_0).y27 = function (decoder, index, builder, checkIndex) {
    return this.l2d(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).e2a = function (decoder, index, builder, checkIndex) {
    return this.l2d(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).p2d = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.u25(this.u29_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).f2a = function (encoder, content, size) {
    return this.p2d(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(FloatArraySerializer_0).s2d = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).s28 = function (_this__u8e3s4) {
    return this.s2d((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).t2d = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).n27 = function (_this__u8e3s4) {
    return this.t2d((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).d2a = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).u2d = function (decoder, index, builder, checkIndex) {
    builder.x2d(decoder.o24(this.u29_1, index));
  };
  protoOf(FloatArraySerializer_0).y27 = function (decoder, index, builder, checkIndex) {
    return this.u2d(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).e2a = function (decoder, index, builder, checkIndex) {
    return this.u2d(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).y2d = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.t25(this.u29_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).f2a = function (encoder, content, size) {
    return this.y2d(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(LongArraySerializer_0).b2e = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).s28 = function (_this__u8e3s4) {
    return this.b2e((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).c2e = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).n27 = function (_this__u8e3s4) {
    return this.c2e((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).d2a = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).d2e = function (decoder, index, builder, checkIndex) {
    builder.g2e(decoder.n24(this.u29_1, index));
  };
  protoOf(LongArraySerializer_0).y27 = function (decoder, index, builder, checkIndex) {
    return this.d2e(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).e2a = function (decoder, index, builder, checkIndex) {
    return this.d2e(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).h2e = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.s25(this.u29_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).f2a = function (encoder, content, size) {
    return this.h2e(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(ULongArraySerializer_0).k2e = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).s28 = function (_this__u8e3s4) {
    return this.k2e(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.nr_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).l2e = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).n27 = function (_this__u8e3s4) {
    return this.l2e(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.nr_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).m2e = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).d2a = function () {
    return new ULongArray(this.m2e());
  };
  protoOf(ULongArraySerializer_0).n2e = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.s24(this.u29_1, index).y23();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.q2e(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).y27 = function (decoder, index, builder, checkIndex) {
    return this.n2e(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).e2a = function (decoder, index, builder, checkIndex) {
    return this.n2e(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).r2e = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.x25(this.u29_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.h25(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).f2a = function (encoder, content, size) {
    return this.r2e(encoder, content instanceof ULongArray ? content.nr_1 : THROW_CCE(), size);
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
  protoOf(IntArraySerializer_0).u2e = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).s28 = function (_this__u8e3s4) {
    return this.u2e((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).v2e = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).n27 = function (_this__u8e3s4) {
    return this.v2e((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).d2a = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).w2e = function (decoder, index, builder, checkIndex) {
    builder.z2e(decoder.m24(this.u29_1, index));
  };
  protoOf(IntArraySerializer_0).y27 = function (decoder, index, builder, checkIndex) {
    return this.w2e(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).e2a = function (decoder, index, builder, checkIndex) {
    return this.w2e(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).a2f = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.r25(this.u29_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).f2a = function (encoder, content, size) {
    return this.a2f(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UIntArraySerializer_0).d2f = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).s28 = function (_this__u8e3s4) {
    return this.d2f(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.br_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).e2f = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).n27 = function (_this__u8e3s4) {
    return this.e2f(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.br_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).f2f = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).d2a = function () {
    return new UIntArray(this.f2f());
  };
  protoOf(UIntArraySerializer_0).g2f = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.s24(this.u29_1, index).x23();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.j2f(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).y27 = function (decoder, index, builder, checkIndex) {
    return this.g2f(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).e2a = function (decoder, index, builder, checkIndex) {
    return this.g2f(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).k2f = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.x25(this.u29_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.g25(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).f2a = function (encoder, content, size) {
    return this.k2f(encoder, content instanceof UIntArray ? content.br_1 : THROW_CCE(), size);
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
  protoOf(ShortArraySerializer_0).n2f = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).s28 = function (_this__u8e3s4) {
    return this.n2f((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).o2f = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).n27 = function (_this__u8e3s4) {
    return this.o2f((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).d2a = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).p2f = function (decoder, index, builder, checkIndex) {
    builder.s2f(decoder.l24(this.u29_1, index));
  };
  protoOf(ShortArraySerializer_0).y27 = function (decoder, index, builder, checkIndex) {
    return this.p2f(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).e2a = function (decoder, index, builder, checkIndex) {
    return this.p2f(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).t2f = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.q25(this.u29_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).f2a = function (encoder, content, size) {
    return this.t2f(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UShortArraySerializer_0).w2f = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).s28 = function (_this__u8e3s4) {
    return this.w2f(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.zr_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).x2f = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).n27 = function (_this__u8e3s4) {
    return this.x2f(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.zr_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).y2f = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).d2a = function () {
    return new UShortArray(this.y2f());
  };
  protoOf(UShortArraySerializer_0).z2f = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.s24(this.u29_1, index).w23();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.c2g(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).y27 = function (decoder, index, builder, checkIndex) {
    return this.z2f(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).e2a = function (decoder, index, builder, checkIndex) {
    return this.z2f(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).d2g = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.x25(this.u29_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.f25(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).f2a = function (encoder, content, size) {
    return this.d2g(encoder, content instanceof UShortArray ? content.zr_1 : THROW_CCE(), size);
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
  protoOf(ByteArraySerializer_0).g2g = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).s28 = function (_this__u8e3s4) {
    return this.g2g((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).h2g = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).n27 = function (_this__u8e3s4) {
    return this.h2g((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).d2a = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).i2g = function (decoder, index, builder, checkIndex) {
    builder.l2g(decoder.k24(this.u29_1, index));
  };
  protoOf(ByteArraySerializer_0).y27 = function (decoder, index, builder, checkIndex) {
    return this.i2g(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).e2a = function (decoder, index, builder, checkIndex) {
    return this.i2g(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).m2g = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.p25(this.u29_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).f2a = function (encoder, content, size) {
    return this.m2g(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UByteArraySerializer_0).p2g = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).s28 = function (_this__u8e3s4) {
    return this.p2g(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.pq_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).q2g = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).n27 = function (_this__u8e3s4) {
    return this.q2g(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.pq_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).r2g = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).d2a = function () {
    return new UByteArray(this.r2g());
  };
  protoOf(UByteArraySerializer_0).s2g = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.s24(this.u29_1, index).v23();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.v2g(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).y27 = function (decoder, index, builder, checkIndex) {
    return this.s2g(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).e2a = function (decoder, index, builder, checkIndex) {
    return this.s2g(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).w2g = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.x25(this.u29_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.e25(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).f2a = function (encoder, content, size) {
    return this.w2g(encoder, content instanceof UByteArray ? content.pq_1 : THROW_CCE(), size);
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
  protoOf(BooleanArraySerializer_0).z2g = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).s28 = function (_this__u8e3s4) {
    return this.z2g((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).a2h = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).n27 = function (_this__u8e3s4) {
    return this.a2h((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).d2a = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).b2h = function (decoder, index, builder, checkIndex) {
    builder.e2h(decoder.j24(this.u29_1, index));
  };
  protoOf(BooleanArraySerializer_0).y27 = function (decoder, index, builder, checkIndex) {
    return this.b2h(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).e2a = function (decoder, index, builder, checkIndex) {
    return this.b2h(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).f2h = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.o25(this.u29_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).f2a = function (encoder, content, size) {
    return this.f2h(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d2d_1 = bufferWithData;
    this.e2d_1 = bufferWithData.length;
    this.a2a(10);
  }
  protoOf(CharArrayBuilder).w29 = function () {
    return this.e2d_1;
  };
  protoOf(CharArrayBuilder).a2a = function (requiredCapacity) {
    if (this.d2d_1.length < requiredCapacity)
      this.d2d_1 = copyOf(this.d2d_1, coerceAtLeast(requiredCapacity, imul(this.d2d_1.length, 2)));
  };
  protoOf(CharArrayBuilder).f2d = function (c) {
    this.h2a();
    var tmp = this.d2d_1;
    var _unary__edvuaz = this.e2d_1;
    this.e2d_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).y29 = function () {
    return copyOf(this.d2d_1, this.e2d_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.m2d_1 = bufferWithData;
    this.n2d_1 = bufferWithData.length;
    this.a2a(10);
  }
  protoOf(DoubleArrayBuilder).w29 = function () {
    return this.n2d_1;
  };
  protoOf(DoubleArrayBuilder).a2a = function (requiredCapacity) {
    if (this.m2d_1.length < requiredCapacity)
      this.m2d_1 = copyOf_0(this.m2d_1, coerceAtLeast(requiredCapacity, imul(this.m2d_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).o2d = function (c) {
    this.h2a();
    var tmp = this.m2d_1;
    var _unary__edvuaz = this.n2d_1;
    this.n2d_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).y29 = function () {
    return copyOf_0(this.m2d_1, this.n2d_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.v2d_1 = bufferWithData;
    this.w2d_1 = bufferWithData.length;
    this.a2a(10);
  }
  protoOf(FloatArrayBuilder).w29 = function () {
    return this.w2d_1;
  };
  protoOf(FloatArrayBuilder).a2a = function (requiredCapacity) {
    if (this.v2d_1.length < requiredCapacity)
      this.v2d_1 = copyOf_1(this.v2d_1, coerceAtLeast(requiredCapacity, imul(this.v2d_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).x2d = function (c) {
    this.h2a();
    var tmp = this.v2d_1;
    var _unary__edvuaz = this.w2d_1;
    this.w2d_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).y29 = function () {
    return copyOf_1(this.v2d_1, this.w2d_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.e2e_1 = bufferWithData;
    this.f2e_1 = bufferWithData.length;
    this.a2a(10);
  }
  protoOf(LongArrayBuilder).w29 = function () {
    return this.f2e_1;
  };
  protoOf(LongArrayBuilder).a2a = function (requiredCapacity) {
    if (this.e2e_1.length < requiredCapacity)
      this.e2e_1 = copyOf_2(this.e2e_1, coerceAtLeast(requiredCapacity, imul(this.e2e_1.length, 2)));
  };
  protoOf(LongArrayBuilder).g2e = function (c) {
    this.h2a();
    var tmp = this.e2e_1;
    var _unary__edvuaz = this.f2e_1;
    this.f2e_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).y29 = function () {
    return copyOf_2(this.e2e_1, this.f2e_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.o2e_1 = bufferWithData;
    this.p2e_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.a2a(10);
  }
  protoOf(ULongArrayBuilder).w29 = function () {
    return this.p2e_1;
  };
  protoOf(ULongArrayBuilder).a2a = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.o2e_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.o2e_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.o2e_1), 2));
      tmp.o2e_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).q2e = function (c) {
    this.h2a();
    var tmp = this.o2e_1;
    var _unary__edvuaz = this.p2e_1;
    this.p2e_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).g2h = function () {
    var tmp0 = this.o2e_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.p2e_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).y29 = function () {
    return new ULongArray(this.g2h());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.x2e_1 = bufferWithData;
    this.y2e_1 = bufferWithData.length;
    this.a2a(10);
  }
  protoOf(IntArrayBuilder).w29 = function () {
    return this.y2e_1;
  };
  protoOf(IntArrayBuilder).a2a = function (requiredCapacity) {
    if (this.x2e_1.length < requiredCapacity)
      this.x2e_1 = copyOf_3(this.x2e_1, coerceAtLeast(requiredCapacity, imul(this.x2e_1.length, 2)));
  };
  protoOf(IntArrayBuilder).z2e = function (c) {
    this.h2a();
    var tmp = this.x2e_1;
    var _unary__edvuaz = this.y2e_1;
    this.y2e_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).y29 = function () {
    return copyOf_3(this.x2e_1, this.y2e_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.h2f_1 = bufferWithData;
    this.i2f_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.a2a(10);
  }
  protoOf(UIntArrayBuilder).w29 = function () {
    return this.i2f_1;
  };
  protoOf(UIntArrayBuilder).a2a = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.h2f_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.h2f_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.h2f_1), 2));
      tmp.h2f_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).j2f = function (c) {
    this.h2a();
    var tmp = this.h2f_1;
    var _unary__edvuaz = this.i2f_1;
    this.i2f_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).h2h = function () {
    var tmp0 = this.h2f_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.i2f_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).y29 = function () {
    return new UIntArray(this.h2h());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.q2f_1 = bufferWithData;
    this.r2f_1 = bufferWithData.length;
    this.a2a(10);
  }
  protoOf(ShortArrayBuilder).w29 = function () {
    return this.r2f_1;
  };
  protoOf(ShortArrayBuilder).a2a = function (requiredCapacity) {
    if (this.q2f_1.length < requiredCapacity)
      this.q2f_1 = copyOf_4(this.q2f_1, coerceAtLeast(requiredCapacity, imul(this.q2f_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).s2f = function (c) {
    this.h2a();
    var tmp = this.q2f_1;
    var _unary__edvuaz = this.r2f_1;
    this.r2f_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).y29 = function () {
    return copyOf_4(this.q2f_1, this.r2f_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a2g_1 = bufferWithData;
    this.b2g_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.a2a(10);
  }
  protoOf(UShortArrayBuilder).w29 = function () {
    return this.b2g_1;
  };
  protoOf(UShortArrayBuilder).a2a = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.a2g_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.a2g_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.a2g_1), 2));
      tmp.a2g_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).c2g = function (c) {
    this.h2a();
    var tmp = this.a2g_1;
    var _unary__edvuaz = this.b2g_1;
    this.b2g_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).i2h = function () {
    var tmp0 = this.a2g_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.b2g_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).y29 = function () {
    return new UShortArray(this.i2h());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.j2g_1 = bufferWithData;
    this.k2g_1 = bufferWithData.length;
    this.a2a(10);
  }
  protoOf(ByteArrayBuilder).w29 = function () {
    return this.k2g_1;
  };
  protoOf(ByteArrayBuilder).a2a = function (requiredCapacity) {
    if (this.j2g_1.length < requiredCapacity)
      this.j2g_1 = copyOf_5(this.j2g_1, coerceAtLeast(requiredCapacity, imul(this.j2g_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).l2g = function (c) {
    this.h2a();
    var tmp = this.j2g_1;
    var _unary__edvuaz = this.k2g_1;
    this.k2g_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).y29 = function () {
    return copyOf_5(this.j2g_1, this.k2g_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.t2g_1 = bufferWithData;
    this.u2g_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.a2a(10);
  }
  protoOf(UByteArrayBuilder).w29 = function () {
    return this.u2g_1;
  };
  protoOf(UByteArrayBuilder).a2a = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.t2g_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.t2g_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.t2g_1), 2));
      tmp.t2g_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).v2g = function (c) {
    this.h2a();
    var tmp = this.t2g_1;
    var _unary__edvuaz = this.u2g_1;
    this.u2g_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).j2h = function () {
    var tmp0 = this.t2g_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.u2g_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).y29 = function () {
    return new UByteArray(this.j2h());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c2h_1 = bufferWithData;
    this.d2h_1 = bufferWithData.length;
    this.a2a(10);
  }
  protoOf(BooleanArrayBuilder).w29 = function () {
    return this.d2h_1;
  };
  protoOf(BooleanArrayBuilder).a2a = function (requiredCapacity) {
    if (this.c2h_1.length < requiredCapacity)
      this.c2h_1 = copyOf_6(this.c2h_1, coerceAtLeast(requiredCapacity, imul(this.c2h_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).e2h = function (c) {
    this.h2a();
    var tmp = this.c2h_1;
    var _unary__edvuaz = this.d2h_1;
    this.d2h_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).y29 = function () {
    return copyOf_6(this.c2h_1, this.d2h_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().m2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.k2h_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).u20 = function () {
    return this.k2h_1;
  };
  protoOf(StringSerializer).l2h = function (encoder, value) {
    return encoder.l25(value);
  };
  protoOf(StringSerializer).v20 = function (encoder, value) {
    return this.l2h(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).w20 = function (decoder) {
    return decoder.c24();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.m2h_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).u20 = function () {
    return this.m2h_1;
  };
  protoOf(CharSerializer).n2h = function (encoder, value) {
    return encoder.k25(value);
  };
  protoOf(CharSerializer).v20 = function (encoder, value) {
    return this.n2h(encoder, value instanceof Char ? value.p1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).o2h = function (decoder) {
    return decoder.b24();
  };
  protoOf(CharSerializer).w20 = function (decoder) {
    return new Char(this.o2h(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.p2h_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).u20 = function () {
    return this.p2h_1;
  };
  protoOf(DoubleSerializer).q2h = function (encoder, value) {
    return encoder.j25(value);
  };
  protoOf(DoubleSerializer).v20 = function (encoder, value) {
    return this.q2h(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).w20 = function (decoder) {
    return decoder.a24();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.r2h_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).u20 = function () {
    return this.r2h_1;
  };
  protoOf(FloatSerializer).s2h = function (encoder, value) {
    return encoder.i25(value);
  };
  protoOf(FloatSerializer).v20 = function (encoder, value) {
    return this.s2h(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).w20 = function (decoder) {
    return decoder.z23();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.t2h_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).u20 = function () {
    return this.t2h_1;
  };
  protoOf(LongSerializer).u2h = function (encoder, value) {
    return encoder.h25(value);
  };
  protoOf(LongSerializer).v20 = function (encoder, value) {
    return this.u2h(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).w20 = function (decoder) {
    return decoder.y23();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.v2h_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).u20 = function () {
    return this.v2h_1;
  };
  protoOf(IntSerializer).w2h = function (encoder, value) {
    return encoder.g25(value);
  };
  protoOf(IntSerializer).v20 = function (encoder, value) {
    return this.w2h(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).w20 = function (decoder) {
    return decoder.x23();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.x2h_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).u20 = function () {
    return this.x2h_1;
  };
  protoOf(ShortSerializer).y2h = function (encoder, value) {
    return encoder.f25(value);
  };
  protoOf(ShortSerializer).v20 = function (encoder, value) {
    return this.y2h(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).w20 = function (decoder) {
    return decoder.w23();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.z2h_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).u20 = function () {
    return this.z2h_1;
  };
  protoOf(ByteSerializer).a2i = function (encoder, value) {
    return encoder.e25(value);
  };
  protoOf(ByteSerializer).v20 = function (encoder, value) {
    return this.a2i(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).w20 = function (decoder) {
    return decoder.v23();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.b2i_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).u20 = function () {
    return this.b2i_1;
  };
  protoOf(BooleanSerializer).c2i = function (encoder, value) {
    return encoder.d25(value);
  };
  protoOf(BooleanSerializer).v20 = function (encoder, value) {
    return this.c2i(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).w20 = function (decoder) {
    return decoder.u23();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.d2i_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).u20 = function () {
    return this.d2i_1.u20();
  };
  protoOf(UnitSerializer).e2i = function (encoder, value) {
    this.d2i_1.k21(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).v20 = function (encoder, value) {
    return this.e2i(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).f2i = function (decoder) {
    this.d2i_1.w20(decoder);
  };
  protoOf(UnitSerializer).w20 = function (decoder) {
    this.f2i(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.g2i_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.g2i_1 = serialName;
    this.h2i_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).v21 = function () {
    return this.g2i_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).l22 = function () {
    return this.h2i_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).n22 = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).p22 = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).q22 = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).t22 = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).s22 = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).r22 = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.g2i_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.g2i_1 === other.g2i_1 && equals(this.h2i_1, other.h2i_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.g2i_1) + imul(31, this.h2i_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().o2();
    var _iterator__ex2g4s = values.p();
    while (_iterator__ex2g4s.q()) {
      var primitive = _iterator__ex2g4s.r();
      var primitiveName = primitive.u20().v21();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).hc() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
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
  protoOf(NamedValueEncoder).j2i = function (_this__u8e3s4, index) {
    return this.l2i(this.k2i(_this__u8e3s4, index));
  };
  protoOf(NamedValueEncoder).l2i = function (nestedName) {
    var tmp0_elvis_lhs = this.n2i();
    return this.o2i(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueEncoder).k2i = function (descriptor, index) {
    return descriptor.p22(index);
  };
  protoOf(NamedValueEncoder).o2i = function (parentName, childName) {
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
  protoOf(NamedValueDecoder).j2i = function (_this__u8e3s4, index) {
    return this.l2i(this.k2i(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).l2i = function (nestedName) {
    var tmp0_elvis_lhs = this.n2i();
    return this.o2i(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).k2i = function (descriptor, index) {
    return descriptor.p22(index);
  };
  protoOf(NamedValueDecoder).o2i = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).l2j = function () {
    return this.j2j_1.h() ? '$' : joinToString(this.j2j_1, '.', '$.');
  };
  function encodeElement($this, desc, index) {
    var tag = $this.j2i(desc, index);
    $this.f2j(tag);
    return true;
  }
  function TaggedEncoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.m2i_1 = ArrayList_init_$Create$_0();
  }
  protoOf(TaggedEncoder).w24 = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedEncoder).p2i = function (tag, value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(TaggedEncoder).q2i = function (tag) {
  };
  protoOf(TaggedEncoder).r2i = function (tag) {
    throw SerializationException_init_$Create$_0('null is not supported');
  };
  protoOf(TaggedEncoder).s2i = function (tag, value) {
    return this.p2i(tag, value);
  };
  protoOf(TaggedEncoder).t2i = function (tag, value) {
    return this.p2i(tag, value);
  };
  protoOf(TaggedEncoder).u2i = function (tag, value) {
    return this.p2i(tag, value);
  };
  protoOf(TaggedEncoder).v2i = function (tag, value) {
    return this.p2i(tag, value);
  };
  protoOf(TaggedEncoder).w2i = function (tag, value) {
    return this.p2i(tag, value);
  };
  protoOf(TaggedEncoder).x2i = function (tag, value) {
    return this.p2i(tag, value);
  };
  protoOf(TaggedEncoder).y2i = function (tag, value) {
    return this.p2i(tag, value);
  };
  protoOf(TaggedEncoder).z2i = function (tag, value) {
    return this.p2i(tag, new Char(value));
  };
  protoOf(TaggedEncoder).a2j = function (tag, value) {
    return this.p2i(tag, value);
  };
  protoOf(TaggedEncoder).b2j = function (tag, enumDescriptor, ordinal) {
    return this.p2i(tag, ordinal);
  };
  protoOf(TaggedEncoder).c2j = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.f2j(tag);
    return this;
  };
  protoOf(TaggedEncoder).n25 = function (descriptor) {
    return this.c2j(this.g2j(), descriptor);
  };
  protoOf(TaggedEncoder).c26 = function () {
    return this.q2i(this.e2j());
  };
  protoOf(TaggedEncoder).c25 = function () {
    return this.r2i(this.g2j());
  };
  protoOf(TaggedEncoder).d25 = function (value) {
    return this.y2i(this.g2j(), value);
  };
  protoOf(TaggedEncoder).e25 = function (value) {
    return this.t2i(this.g2j(), value);
  };
  protoOf(TaggedEncoder).f25 = function (value) {
    return this.u2i(this.g2j(), value);
  };
  protoOf(TaggedEncoder).g25 = function (value) {
    return this.s2i(this.g2j(), value);
  };
  protoOf(TaggedEncoder).h25 = function (value) {
    return this.v2i(this.g2j(), value);
  };
  protoOf(TaggedEncoder).i25 = function (value) {
    return this.w2i(this.g2j(), value);
  };
  protoOf(TaggedEncoder).j25 = function (value) {
    return this.x2i(this.g2j(), value);
  };
  protoOf(TaggedEncoder).k25 = function (value) {
    return this.z2i(this.g2j(), value);
  };
  protoOf(TaggedEncoder).l25 = function (value) {
    return this.a2j(this.g2j(), value);
  };
  protoOf(TaggedEncoder).m25 = function (enumDescriptor, index) {
    return this.b2j(this.g2j(), enumDescriptor, index);
  };
  protoOf(TaggedEncoder).h24 = function (descriptor) {
    return this;
  };
  protoOf(TaggedEncoder).i24 = function (descriptor) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.m2i_1.h()) {
      this.g2j();
    }
    this.d2j(descriptor);
  };
  protoOf(TaggedEncoder).d2j = function (descriptor) {
  };
  protoOf(TaggedEncoder).o25 = function (descriptor, index, value) {
    return this.y2i(this.j2i(descriptor, index), value);
  };
  protoOf(TaggedEncoder).p25 = function (descriptor, index, value) {
    return this.t2i(this.j2i(descriptor, index), value);
  };
  protoOf(TaggedEncoder).q25 = function (descriptor, index, value) {
    return this.u2i(this.j2i(descriptor, index), value);
  };
  protoOf(TaggedEncoder).r25 = function (descriptor, index, value) {
    return this.s2i(this.j2i(descriptor, index), value);
  };
  protoOf(TaggedEncoder).s25 = function (descriptor, index, value) {
    return this.v2i(this.j2i(descriptor, index), value);
  };
  protoOf(TaggedEncoder).t25 = function (descriptor, index, value) {
    return this.w2i(this.j2i(descriptor, index), value);
  };
  protoOf(TaggedEncoder).u25 = function (descriptor, index, value) {
    return this.x2i(this.j2i(descriptor, index), value);
  };
  protoOf(TaggedEncoder).v25 = function (descriptor, index, value) {
    return this.z2i(this.j2i(descriptor, index), value);
  };
  protoOf(TaggedEncoder).w25 = function (descriptor, index, value) {
    return this.a2j(this.j2i(descriptor, index), value);
  };
  protoOf(TaggedEncoder).x25 = function (descriptor, index) {
    return this.c2j(this.j2i(descriptor, index), descriptor.s22(index));
  };
  protoOf(TaggedEncoder).y25 = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.z25(serializer, value);
    }
  };
  protoOf(TaggedEncoder).a26 = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.b26(serializer, value);
    }
  };
  protoOf(TaggedEncoder).e2j = function () {
    return last(this.m2i_1);
  };
  protoOf(TaggedEncoder).n2i = function () {
    return lastOrNull(this.m2i_1);
  };
  protoOf(TaggedEncoder).f2j = function (name) {
    this.m2i_1.n(name);
  };
  protoOf(TaggedEncoder).g2j = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.m2i_1.h()) {
      tmp = this.m2i_1.j2(get_lastIndex_0(this.m2i_1));
    } else {
      throw SerializationException_init_$Create$_0('No tag in stack for requested element');
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.f2j(tag);
    var r = block();
    if (!$this.k2j_1) {
      $this.g2j();
    }
    $this.k2j_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.f24($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.u20().h22();
      var tmp;
      if (isNullabilitySupported || tmp0.s23()) {
        tmp = this$0.f24($deserializer, $previousValue);
      } else {
        tmp = tmp0.t23();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.j2j_1 = ArrayList_init_$Create$_0();
    this.k2j_1 = false;
  }
  protoOf(TaggedDecoder).w24 = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).m2j = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).n2j = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).o2j = function (tag) {
    var tmp = this.m2j(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).p2j = function (tag) {
    var tmp = this.m2j(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).q2j = function (tag) {
    var tmp = this.m2j(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).r2j = function (tag) {
    var tmp = this.m2j(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).s2j = function (tag) {
    var tmp = this.m2j(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t2j = function (tag) {
    var tmp = this.m2j(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u2j = function (tag) {
    var tmp = this.m2j(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).v2j = function (tag) {
    var tmp = this.m2j(tag);
    return tmp instanceof Char ? tmp.p1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).w2j = function (tag) {
    var tmp = this.m2j(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x2j = function (tag, enumDescriptor) {
    var tmp = this.m2j(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).y2j = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.f2j(tag);
    return this;
  };
  protoOf(TaggedDecoder).f24 = function (deserializer, previousValue) {
    return this.g24(deserializer);
  };
  protoOf(TaggedDecoder).e24 = function (descriptor) {
    return this.y2j(this.g2j(), descriptor);
  };
  protoOf(TaggedDecoder).s23 = function () {
    var tmp0_elvis_lhs = this.n2i();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.n2j(currentTag);
  };
  protoOf(TaggedDecoder).t23 = function () {
    return null;
  };
  protoOf(TaggedDecoder).u23 = function () {
    return this.o2j(this.g2j());
  };
  protoOf(TaggedDecoder).v23 = function () {
    return this.p2j(this.g2j());
  };
  protoOf(TaggedDecoder).w23 = function () {
    return this.q2j(this.g2j());
  };
  protoOf(TaggedDecoder).x23 = function () {
    return this.r2j(this.g2j());
  };
  protoOf(TaggedDecoder).y23 = function () {
    return this.s2j(this.g2j());
  };
  protoOf(TaggedDecoder).z23 = function () {
    return this.t2j(this.g2j());
  };
  protoOf(TaggedDecoder).a24 = function () {
    return this.u2j(this.g2j());
  };
  protoOf(TaggedDecoder).b24 = function () {
    return this.v2j(this.g2j());
  };
  protoOf(TaggedDecoder).c24 = function () {
    return this.w2j(this.g2j());
  };
  protoOf(TaggedDecoder).d24 = function (enumDescriptor) {
    return this.x2j(this.g2j(), enumDescriptor);
  };
  protoOf(TaggedDecoder).h24 = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).i24 = function (descriptor) {
  };
  protoOf(TaggedDecoder).j24 = function (descriptor, index) {
    return this.o2j(this.j2i(descriptor, index));
  };
  protoOf(TaggedDecoder).k24 = function (descriptor, index) {
    return this.p2j(this.j2i(descriptor, index));
  };
  protoOf(TaggedDecoder).l24 = function (descriptor, index) {
    return this.q2j(this.j2i(descriptor, index));
  };
  protoOf(TaggedDecoder).m24 = function (descriptor, index) {
    return this.r2j(this.j2i(descriptor, index));
  };
  protoOf(TaggedDecoder).n24 = function (descriptor, index) {
    return this.s2j(this.j2i(descriptor, index));
  };
  protoOf(TaggedDecoder).o24 = function (descriptor, index) {
    return this.t2j(this.j2i(descriptor, index));
  };
  protoOf(TaggedDecoder).p24 = function (descriptor, index) {
    return this.u2j(this.j2i(descriptor, index));
  };
  protoOf(TaggedDecoder).q24 = function (descriptor, index) {
    return this.v2j(this.j2i(descriptor, index));
  };
  protoOf(TaggedDecoder).r24 = function (descriptor, index) {
    return this.w2j(this.j2i(descriptor, index));
  };
  protoOf(TaggedDecoder).s24 = function (descriptor, index) {
    return this.y2j(this.j2i(descriptor, index), descriptor.s22(index));
  };
  protoOf(TaggedDecoder).t24 = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.j2i(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).v24 = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.j2i(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).n2i = function () {
    return lastOrNull(this.j2j_1);
  };
  protoOf(TaggedDecoder).f2j = function (name) {
    this.j2j_1.n(name);
  };
  protoOf(TaggedDecoder).g2j = function () {
    var r = this.j2j_1.j2(get_lastIndex_0(this.j2j_1));
    this.k2j_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.z2j_1 = key;
    this.a2k_1 = value;
  }
  protoOf(MapEntry).a1 = function () {
    return this.z2j_1;
  };
  protoOf(MapEntry).b1 = function () {
    return this.a2k_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.z2j_1) + ', value=' + toString_0(this.a2k_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.z2j_1 == null ? 0 : hashCode(this.z2j_1);
    result = imul(result, 31) + (this.a2k_1 == null ? 0 : hashCode(this.a2k_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.z2j_1, tmp0_other_with_cast.z2j_1))
      return false;
    if (!equals(this.a2k_1, tmp0_other_with_cast.a2k_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.i21('key', $keySerializer.u20());
      $this$buildSerialDescriptor.i21('value', $valueSerializer.u20());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.d2k_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).u20 = function () {
    return this.d2k_1;
  };
  protoOf(MapEntrySerializer_0).e2k = function (_this__u8e3s4) {
    return _this__u8e3s4.a1();
  };
  protoOf(MapEntrySerializer_0).f2k = function (_this__u8e3s4) {
    return this.e2k((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).g2k = function (_this__u8e3s4) {
    return _this__u8e3s4.b1();
  };
  protoOf(MapEntrySerializer_0).h2k = function (_this__u8e3s4) {
    return this.g2k((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).i2k = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.i21('first', $keySerializer.u20());
      $this$buildClassSerialDescriptor.i21('second', $valueSerializer.u20());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.o2k_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).u20 = function () {
    return this.o2k_1;
  };
  protoOf(PairSerializer_0).p2k = function (_this__u8e3s4) {
    return _this__u8e3s4.bc_1;
  };
  protoOf(PairSerializer_0).f2k = function (_this__u8e3s4) {
    return this.p2k(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).q2k = function (_this__u8e3s4) {
    return _this__u8e3s4.cc_1;
  };
  protoOf(PairSerializer_0).h2k = function (_this__u8e3s4) {
    return this.q2k(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).i2k = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.u24($this.u2k_1, 0, $this.r2k_1);
    var b = composite.u24($this.u2k_1, 1, $this.s2k_1);
    var c = composite.u24($this.u2k_1, 2, $this.t2k_1);
    composite.i24($this.u2k_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.y24($this.u2k_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.u24($this.u2k_1, 0, $this.r2k_1);
          break;
        case 1:
          b = composite.u24($this.u2k_1, 1, $this.s2k_1);
          break;
        case 2:
          c = composite.u24($this.u2k_1, 2, $this.t2k_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.i24($this.u2k_1);
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
      $this$buildClassSerialDescriptor.i21('first', this$0.r2k_1.u20());
      $this$buildClassSerialDescriptor.i21('second', this$0.s2k_1.u20());
      $this$buildClassSerialDescriptor.i21('third', this$0.t2k_1.u20());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.r2k_1 = aSerializer;
    this.s2k_1 = bSerializer;
    this.t2k_1 = cSerializer;
    var tmp = this;
    tmp.u2k_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).u20 = function () {
    return this.u2k_1;
  };
  protoOf(TripleSerializer_0).v2k = function (encoder, value) {
    var structuredEncoder = encoder.h24(this.u2k_1);
    structuredEncoder.y25(this.u2k_1, 0, this.r2k_1, value.vp_1);
    structuredEncoder.y25(this.u2k_1, 1, this.s2k_1, value.wp_1);
    structuredEncoder.y25(this.u2k_1, 2, this.t2k_1, value.xp_1);
    structuredEncoder.i24(this.u2k_1);
  };
  protoOf(TripleSerializer_0).v20 = function (encoder, value) {
    return this.v2k(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).w20 = function (decoder) {
    var composite = decoder.h24(this.u2k_1);
    if (composite.x24()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.j2k_1 = keySerializer;
    this.k2k_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).l2k = function (encoder, value) {
    var structuredEncoder = encoder.h24(this.u20());
    structuredEncoder.y25(this.u20(), 0, this.j2k_1, this.f2k(value));
    structuredEncoder.y25(this.u20(), 1, this.k2k_1, this.h2k(value));
    structuredEncoder.i24(this.u20());
  };
  protoOf(KeyValueSerializer).v20 = function (encoder, value) {
    return this.l2k(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).w20 = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.u20();
    var composite = decoder.h24(descriptor);
    var tmp$ret$0;
    $l$block: {
      if (composite.x24()) {
        var key = composite.u24(this.u20(), 0, this.j2k_1);
        var value = composite.u24(this.u20(), 1, this.k2k_1);
        tmp$ret$0 = this.i2k(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.y24(this.u20());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.u24(this.u20(), 0, this.j2k_1);
            break;
          case 1:
            value_0 = composite.u24(this.u20(), 1, this.k2k_1);
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
      tmp$ret$0 = this.i2k(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.i24(descriptor);
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
    this.w2k_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_2()));
  }
  protoOf(ULongSerializer).u20 = function () {
    return this.w2k_1;
  };
  protoOf(ULongSerializer).x2k = function (encoder, value) {
    var tmp = encoder.n25(this.w2k_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.h25(tmp$ret$0);
  };
  protoOf(ULongSerializer).v20 = function (encoder, value) {
    return this.x2k(encoder, value instanceof ULong ? value.ir_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).y2k = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.e24(this.w2k_1).y23();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).w20 = function (decoder) {
    return new ULong(this.y2k(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.z2k_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_8(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).u20 = function () {
    return this.z2k_1;
  };
  protoOf(UIntSerializer).a2l = function (encoder, value) {
    var tmp = encoder.n25(this.z2k_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.g25(tmp$ret$0);
  };
  protoOf(UIntSerializer).v20 = function (encoder, value) {
    return this.a2l(encoder, value instanceof UInt ? value.wq_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).b2l = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.e24(this.z2k_1).x23();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).w20 = function (decoder) {
    return new UInt(this.b2l(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.c2l_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_10(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).u20 = function () {
    return this.c2l_1;
  };
  protoOf(UShortSerializer).d2l = function (encoder, value) {
    var tmp = encoder.n25(this.c2l_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.f25(tmp$ret$0);
  };
  protoOf(UShortSerializer).v20 = function (encoder, value) {
    return this.d2l(encoder, value instanceof UShort ? value.ur_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).e2l = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.e24(this.c2l_1).w23();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).w20 = function (decoder) {
    return new UShort(this.e2l(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.f2l_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_12(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).u20 = function () {
    return this.f2l_1;
  };
  protoOf(UByteSerializer).g2l = function (encoder, value) {
    var tmp = encoder.n25(this.f2l_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.e25(tmp$ret$0);
  };
  protoOf(UByteSerializer).v20 = function (encoder, value) {
    return this.g2l(encoder, value instanceof UByte ? value.kq_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).h2l = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.e24(this.f2l_1).v23();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).w20 = function (decoder) {
    return new UByte(this.h2l(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function PolymorphicModuleBuilder(baseClass, baseSerializer) {
    baseSerializer = baseSerializer === VOID ? null : baseSerializer;
    this.i2l_1 = baseClass;
    this.j2l_1 = baseSerializer;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.k2l_1 = ArrayList_init_$Create$_0();
    this.l2l_1 = null;
    this.m2l_1 = null;
  }
  protoOf(PolymorphicModuleBuilder).n2l = function (subclass, serializer) {
    this.k2l_1.n(to(subclass, serializer));
  };
  protoOf(PolymorphicModuleBuilder).o2l = function (builder) {
    if (!(this.j2l_1 == null)) {
      builder.v2l(this.i2l_1, this.i2l_1, this.j2l_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.k2l_1.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var kclass = element.dc();
      var serializer = element.ec();
      var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var tmp$ret$0 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
      builder.v2l(this.i2l_1, tmp, tmp$ret$0);
    }
    var defaultSerializer = this.l2l_1;
    if (!(defaultSerializer == null)) {
      builder.w2l(this.i2l_1, defaultSerializer, false);
    }
    var defaultDeserializer = this.m2l_1;
    if (!(defaultDeserializer == null)) {
      builder.x2l(this.i2l_1, defaultDeserializer, false);
    }
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).d22 = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.e22(kClass, typeArgumentsSerializers) : $super.e22.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.z2l_1 = class2ContextualFactory;
    this.a2m_1 = polyBase2Serializers;
    this.b2m_1 = polyBase2DefaultSerializerProvider;
    this.c2m_1 = polyBase2NamedSerializers;
    this.d2m_1 = polyBase2DefaultDeserializerProvider;
    this.e2m_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).c22 = function () {
    return this.e2m_1;
  };
  protoOf(SerialModuleImpl).g26 = function (baseClass, value) {
    if (!baseClass.ic(value))
      return null;
    var tmp0_safe_receiver = this.a2m_1.m2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.b2m_1.m2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).f26 = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.c2m_1.m2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).m2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.d2m_1.m2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).e22 = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.z2l_1.m2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f2m(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).y2l = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.z2l_1.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.a1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.b1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.i2m_1;
        collector.j2m(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.h2m(kclass, serial.g2m_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.a2m_1.z().p();
    while (_iterator__ex2g4s_0.q()) {
      var element_0 = _iterator__ex2g4s_0.r();
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.a1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.b1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.z().p();
      while (_iterator__ex2g4s_1.q()) {
        var element_1 = _iterator__ex2g4s_1.r();
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.a1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.b1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$11 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.k2m(tmp_1, tmp_2, tmp$ret$11);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.b2m_1.z().p();
    while (_iterator__ex2g4s_2.q()) {
      var element_2 = _iterator__ex2g4s_2.r();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.a1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.b1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.l2m(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.d2m_1.z().p();
    while (_iterator__ex2g4s_3.q()) {
      var element_3 = _iterator__ex2g4s_3.r();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.a1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.b1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.m2m(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.i2m_1 = serializer;
  }
  protoOf(Argless).f2m = function (typeArgumentsSerializers) {
    return this.i2m_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.i2m_1, this.i2m_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.i2m_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.g2m_1 = provider;
  }
  protoOf(WithTypeArguments).f2m = function (typeArgumentsSerializers) {
    return this.g2m_1(typeArgumentsSerializers);
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
    tmp.p2l_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.q2l_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.r2l_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.s2l_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.t2l_1 = HashMap_init_$Create$();
    this.u2l_1 = false;
  }
  protoOf(SerializersModuleBuilder).j2m = function (kClass, serializer) {
    return this.n2m(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).h2m = function (kClass, provider) {
    return this.n2m(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).k2m = function (baseClass, actualClass, actualSerializer) {
    this.v2l(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).l2m = function (baseClass, defaultSerializerProvider) {
    this.w2l(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).m2m = function (baseClass, defaultDeserializerProvider) {
    this.x2l(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).o2m = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.p2l_1.m2(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.p2l_1.p2(forClass, provider);
    if (isInterface_0(forClass))
      this.u2l_1 = true;
  };
  protoOf(SerializersModuleBuilder).n2m = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.o2m(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.o2m.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).w2l = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.r2l_1.m2(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString_0(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.r2l_1.p2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).x2l = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.t2l_1.m2(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString_0(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.t2l_1.p2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).p2m = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.u20().v21();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.q2l_1;
    var value = this_0.m2(baseClass);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer = HashMap_init_$Create$();
      this_0.p2(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var baseClassSerializers = tmp;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.s2l_1;
    var value_0 = this_1.m2(baseClass);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer_0 = HashMap_init_$Create$();
      this_1.p2(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    var names = tmp_0;
    var previousSerializer = baseClassSerializers.m2(concreteClass);
    if (!(previousSerializer == null) && !equals(previousSerializer, concreteSerializer)) {
      if (allowOverwrite)
        names.q2(previousSerializer.u20().v21());
      else
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
    }
    var previousByName = names.m2(name);
    if (!(previousByName == null) && !equals(previousByName, concreteSerializer)) {
      // Inline function 'kotlin.sequences.find' call
      var tmp0 = asSequence(baseClassSerializers);
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.sequences.firstOrNull' call
        var _iterator__ex2g4s = tmp0.p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
          if (element.b1() === previousByName) {
            tmp$ret$7 = element;
            break $l$block;
          }
        }
        tmp$ret$7 = null;
      }
      var tmp0_safe_receiver = tmp$ret$7;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        var message = 'Name ' + name + ' is registered in the module but no Kotlin class is associated with it.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var previousClass = tmp_1;
      if (allowOverwrite)
        baseClassSerializers.q2(previousClass);
      else
        throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers in a scope of '" + toString(baseClass) + "' " + ("have the same serial name '" + name + "': " + toString(concreteSerializer) + " for '" + toString(concreteClass) + "' and " + toString_0(previousByName) + " for '" + toString(previousClass) + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.p2(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.p2(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).v2l = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.p2m(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.p2m.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).y29 = function () {
    return new SerialModuleImpl(this.p2l_1, this.q2l_1, this.r2l_1, this.s2l_1, this.t2l_1, this.u2l_1);
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
    this.q2m_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.q2m_1.equals(tmp0_other_with_cast.q2m_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.q2m_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.q2m_1) + ')';
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
    return mapOf([to(PrimitiveClasses_getInstance().nd(), serializer_2(StringCompanionObject_instance)), to(getKClass(Char), serializer_3(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().qd(), CharArraySerializer()), to(PrimitiveClasses_getInstance().ld(), serializer_4(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().wd(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().kd(), serializer_5(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().vd(), FloatArraySerializer()), to(getKClass(Long), serializer_6(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().ud(), LongArraySerializer()), to(getKClass(ULong), serializer_7(Companion_getInstance_3())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().jd(), serializer_8(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().td(), IntArraySerializer()), to(getKClass(UInt), serializer_9(Companion_getInstance_4())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().id(), serializer_10(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().sd(), ShortArraySerializer()), to(getKClass(UShort), serializer_11(Companion_getInstance_5())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().hd(), serializer_12(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().rd(), ByteArraySerializer()), to(getKClass(UByte), serializer_13(Companion_getInstance_6())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().gd(), serializer_14(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().pd(), BooleanArraySerializer()), to(getKClass(Unit), serializer_15(Unit_instance)), to(PrimitiveClasses_getInstance().fd(), NothingSerializer()), to(getKClass(Duration), serializer_16(Companion_getInstance())), to(getKClass(Uuid), serializer_17(Companion_getInstance_0()))]);
  }
  function get_isInterface(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().fd())
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
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().fd()) {
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
    return rootClass.equals(PrimitiveClasses_getInstance().md());
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
          var tmp_1 = assocObject.x2c(args.slice());
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
    this.r2m_1 = $factory;
  }
  protoOf(createCache$1).f22 = function (key) {
    return this.r2m_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.s2m_1 = $factory;
  }
  protoOf(createParametrizedCache$1).g22 = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.s2m_1(key, types);
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
  protoOf(SerialDescriptorImpl).h22 = get_isNullable;
  protoOf(SerialDescriptorImpl).m22 = get_isInline;
  protoOf(AbstractDecoder).u24 = decodeSerializableElement$default;
  protoOf(AbstractDecoder).g24 = decodeSerializableValue;
  protoOf(AbstractDecoder).x24 = decodeSequentially;
  protoOf(AbstractDecoder).z24 = decodeCollectionSize;
  protoOf(AbstractEncoder).c26 = encodeNotNullMark;
  protoOf(AbstractEncoder).d26 = beginCollection;
  protoOf(AbstractEncoder).z25 = encodeSerializableValue;
  protoOf(AbstractEncoder).b26 = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).e26 = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).h22 = get_isNullable;
  protoOf(ListLikeDescriptor).m22 = get_isInline;
  protoOf(ListLikeDescriptor).o22 = get_annotations;
  protoOf(MapLikeDescriptor).h22 = get_isNullable;
  protoOf(MapLikeDescriptor).m22 = get_isInline;
  protoOf(MapLikeDescriptor).o22 = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).h22 = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).m22 = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).n2c = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).h22 = get_isNullable;
  protoOf(NothingSerialDescriptor).m22 = get_isInline;
  protoOf(NothingSerialDescriptor).o22 = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).h22 = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).m22 = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).o22 = get_annotations;
  protoOf(TaggedEncoder).d26 = beginCollection;
  protoOf(TaggedEncoder).z25 = encodeSerializableValue;
  protoOf(TaggedEncoder).b26 = encodeNullableSerializableValue;
  protoOf(TaggedEncoder).e26 = shouldEncodeElementDefault;
  protoOf(TaggedDecoder).u24 = decodeSerializableElement$default;
  protoOf(TaggedDecoder).g24 = decodeSerializableValue;
  protoOf(TaggedDecoder).x24 = decodeSequentially;
  protoOf(TaggedDecoder).z24 = decodeCollectionSize;
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
  _.$_$.o = BooleanSerializer_getInstance;
  _.$_$.p = ByteArraySerializer_getInstance;
  _.$_$.q = DurationSerializer_getInstance;
  _.$_$.r = IntSerializer_getInstance;
  _.$_$.s = LongSerializer_getInstance;
  _.$_$.t = StringSerializer_getInstance;
  _.$_$.u = ListSerializer;
  _.$_$.v = MapSerializer;
  _.$_$.w = SetSerializer;
  _.$_$.x = get_nullable;
  _.$_$.y = serializer_2;
  _.$_$.z = serializer_11;
  _.$_$.a1 = serializer_9;
  _.$_$.b1 = serializer_13;
  _.$_$.c1 = serializer_7;
  _.$_$.d1 = PolymorphicKind;
  _.$_$.e1 = PrimitiveKind;
  _.$_$.f1 = PrimitiveSerialDescriptor;
  _.$_$.g1 = get_annotations;
  _.$_$.h1 = get_isInline;
  _.$_$.i1 = get_isNullable;
  _.$_$.j1 = SerialDescriptor;
  _.$_$.k1 = ENUM;
  _.$_$.l1 = buildClassSerialDescriptor;
  _.$_$.m1 = buildSerialDescriptor;
  _.$_$.n1 = getContextualDescriptor;
  _.$_$.o1 = AbstractDecoder;
  _.$_$.p1 = AbstractEncoder;
  _.$_$.q1 = CompositeDecoder;
  _.$_$.r1 = CompositeEncoder;
  _.$_$.s1 = Decoder;
  _.$_$.t1 = Encoder;
  _.$_$.u1 = AbstractPolymorphicSerializer;
  _.$_$.v1 = ArrayListSerializer;
  _.$_$.w1 = ElementMarker;
  _.$_$.x1 = typeParametersSerializers;
  _.$_$.y1 = GeneratedSerializer;
  _.$_$.z1 = InlinePrimitiveDescriptor;
  _.$_$.a2 = LinkedHashMapSerializer;
  _.$_$.b2 = LinkedHashSetSerializer;
  _.$_$.c2 = NamedValueDecoder;
  _.$_$.d2 = NamedValueEncoder;
  _.$_$.e2 = PluginGeneratedSerialDescriptor;
  _.$_$.f2 = SerializerFactory;
  _.$_$.g2 = createAnnotatedEnumSerializer;
  _.$_$.h2 = createSimpleEnumSerializer;
  _.$_$.i2 = jsonCachedSerialNames;
  _.$_$.j2 = throwMissingFieldException;
  _.$_$.k2 = EmptySerializersModule_0;
  _.$_$.l2 = PolymorphicModuleBuilder;
  _.$_$.m2 = SerializersModuleBuilder;
  _.$_$.n2 = contextual;
  _.$_$.o2 = SerializersModuleCollector;
  _.$_$.p2 = BinaryFormat;
  _.$_$.q2 = DeserializationStrategy;
  _.$_$.r2 = KSerializer;
  _.$_$.s2 = MissingFieldException;
  _.$_$.t2 = SealedClassSerializer;
  _.$_$.u2 = SerializationException;
  _.$_$.v2 = SerializationStrategy;
  _.$_$.w2 = StringFormat;
  _.$_$.x2 = findPolymorphicSerializer_0;
  _.$_$.y2 = findPolymorphicSerializer;
  _.$_$.z2 = serializerOrNull_0;
  _.$_$.a3 = serializerOrNull;
  _.$_$.b3 = serializer_0;
  _.$_$.c3 = serializer_1;
  _.$_$.d3 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
