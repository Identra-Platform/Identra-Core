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
  var protoOf = kotlin_kotlin.$_$.gd;
  var initMetadataForInterface = kotlin_kotlin.$_$.gc;
  var VOID = kotlin_kotlin.$_$.j;
  var asList = kotlin_kotlin.$_$.u6;
  var objectCreate = kotlin_kotlin.$_$.fd;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.n5;
  var Unit_instance = kotlin_kotlin.$_$.a6;
  var emptyList = kotlin_kotlin.$_$.v7;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.p;
  var lazy = kotlin_kotlin.$_$.yi;
  var toString = kotlin_kotlin.$_$.kd;
  var initMetadataForClass = kotlin_kotlin.$_$.cc;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var KProperty1 = kotlin_kotlin.$_$.zd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.zb;
  var THROW_CCE = kotlin_kotlin.$_$.ai;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var zip = kotlin_kotlin.$_$.na;
  var toMap = kotlin_kotlin.$_$.fa;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var mapCapacity = kotlin_kotlin.$_$.y8;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var KtMap = kotlin_kotlin.$_$.k6;
  var isInterface = kotlin_kotlin.$_$.rc;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.y1;
  var captureStack = kotlin_kotlin.$_$.ob;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.a2;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.c2;
  var IllegalArgumentException = kotlin_kotlin.$_$.rh;
  var listOf = kotlin_kotlin.$_$.w8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.a7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var KClass = kotlin_kotlin.$_$.vd;
  var Triple = kotlin_kotlin.$_$.ci;
  var getKClass = kotlin_kotlin.$_$.g;
  var Pair = kotlin_kotlin.$_$.xh;
  var Entry = kotlin_kotlin.$_$.i6;
  var KtMutableMap = kotlin_kotlin.$_$.n6;
  var LinkedHashMap = kotlin_kotlin.$_$.f6;
  var HashMap = kotlin_kotlin.$_$.d6;
  var KtSet = kotlin_kotlin.$_$.q6;
  var KtMutableSet = kotlin_kotlin.$_$.o6;
  var LinkedHashSet = kotlin_kotlin.$_$.g6;
  var HashSet = kotlin_kotlin.$_$.e6;
  var Collection = kotlin_kotlin.$_$.c6;
  var KtList = kotlin_kotlin.$_$.h6;
  var KtMutableList = kotlin_kotlin.$_$.l6;
  var ArrayList = kotlin_kotlin.$_$.b6;
  var copyToArray = kotlin_kotlin.$_$.q7;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.q3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.n3;
  var Result = kotlin_kotlin.$_$.yh;
  var ensureNotNull = kotlin_kotlin.$_$.si;
  var equals = kotlin_kotlin.$_$.wb;
  var getStringHashCode = kotlin_kotlin.$_$.ac;
  var isBlank = kotlin_kotlin.$_$.cf;
  var toList = kotlin_kotlin.$_$.ba;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var toHashSet = kotlin_kotlin.$_$.x9;
  var toBooleanArray = kotlin_kotlin.$_$.v9;
  var withIndex = kotlin_kotlin.$_$.ma;
  var to = kotlin_kotlin.$_$.hj;
  var lazy_0 = kotlin_kotlin.$_$.zi;
  var contentEquals = kotlin_kotlin.$_$.b7;
  var until = kotlin_kotlin.$_$.ud;
  var joinToString = kotlin_kotlin.$_$.o8;
  var initMetadataForObject = kotlin_kotlin.$_$.ic;
  var Long = kotlin_kotlin.$_$.th;
  var Char = kotlin_kotlin.$_$.jh;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.a3;
  var Duration = kotlin_kotlin.$_$.dh;
  var Companion_getInstance = kotlin_kotlin.$_$.q5;
  var Uuid = kotlin_kotlin.$_$.fh;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.s5;
  var toIntOrNull = kotlin_kotlin.$_$.mg;
  var hashCode = kotlin_kotlin.$_$.bc;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.u;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.e1;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.x;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.d1;
  var isArray = kotlin_kotlin.$_$.jc;
  var arrayIterator = kotlin_kotlin.$_$.mb;
  var step = kotlin_kotlin.$_$.td;
  var getValue = kotlin_kotlin.$_$.j8;
  var longArray = kotlin_kotlin.$_$.yc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.dc;
  var get_lastIndex = kotlin_kotlin.$_$.r8;
  var countTrailingZeroBits = kotlin_kotlin.$_$.qi;
  var getOrNull = kotlin_kotlin.$_$.h8;
  var indexOf = kotlin_kotlin.$_$.k8;
  var contentToString = kotlin_kotlin.$_$.f7;
  var Enum = kotlin_kotlin.$_$.oh;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.y;
  var toString_0 = kotlin_kotlin.$_$.fj;
  var KTypeParameter = kotlin_kotlin.$_$.ae;
  var contentHashCode = kotlin_kotlin.$_$.e7;
  var booleanArray = kotlin_kotlin.$_$.nb;
  var emptyMap = kotlin_kotlin.$_$.w7;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.t5;
  var isCharArray = kotlin_kotlin.$_$.mc;
  var charArray = kotlin_kotlin.$_$.qb;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.j5;
  var isDoubleArray = kotlin_kotlin.$_$.oc;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.k5;
  var isFloatArray = kotlin_kotlin.$_$.pc;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.u5;
  var isLongArray = kotlin_kotlin.$_$.sc;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.y5;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.t4;
  var ULongArray = kotlin_kotlin.$_$.hi;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.p4;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.m4;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.r4;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.n4;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.l5;
  var isIntArray = kotlin_kotlin.$_$.qc;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.x5;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.k4;
  var UIntArray = kotlin_kotlin.$_$.fi;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.g4;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.a4;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.i4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.c4;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.m5;
  var isShortArray = kotlin_kotlin.$_$.uc;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.z5;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.c5;
  var UShortArray = kotlin_kotlin.$_$.ji;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.y4;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.v4;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.a5;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.w4;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.i5;
  var isByteArray = kotlin_kotlin.$_$.lc;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.w5;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.y3;
  var UByteArray = kotlin_kotlin.$_$.di;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.v3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.r3;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.w3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.s3;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.h5;
  var isBooleanArray = kotlin_kotlin.$_$.kc;
  var coerceAtLeast = kotlin_kotlin.$_$.pd;
  var copyOf = kotlin_kotlin.$_$.k7;
  var copyOf_0 = kotlin_kotlin.$_$.m7;
  var copyOf_1 = kotlin_kotlin.$_$.n7;
  var copyOf_2 = kotlin_kotlin.$_$.i7;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.u4;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.q4;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.s4;
  var copyOf_3 = kotlin_kotlin.$_$.p7;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.l4;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.h4;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.j4;
  var copyOf_4 = kotlin_kotlin.$_$.h7;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.d5;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.z4;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.b5;
  var copyOf_5 = kotlin_kotlin.$_$.l7;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.z3;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.u3;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.x3;
  var copyOf_6 = kotlin_kotlin.$_$.j7;
  var Unit = kotlin_kotlin.$_$.li;
  var trimIndent = kotlin_kotlin.$_$.zg;
  var charSequenceLength = kotlin_kotlin.$_$.sb;
  var last = kotlin_kotlin.$_$.u8;
  var lastOrNull = kotlin_kotlin.$_$.t8;
  var get_lastIndex_0 = kotlin_kotlin.$_$.s8;
  var ULong = kotlin_kotlin.$_$.ii;
  var UInt = kotlin_kotlin.$_$.gi;
  var UShort = kotlin_kotlin.$_$.ki;
  var UByte = kotlin_kotlin.$_$.ei;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.aj;
  var asSequence = kotlin_kotlin.$_$.v6;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.p5;
  var mapOf = kotlin_kotlin.$_$.a9;
  var get_js = kotlin_kotlin.$_$.wc;
  var findAssociatedObject = kotlin_kotlin.$_$.e;
  var get_indices = kotlin_kotlin.$_$.m8;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.j2;
  var get_indices_0 = kotlin_kotlin.$_$.l8;
  var Companion_instance = kotlin_kotlin.$_$.v5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l3;
  var createFailure = kotlin_kotlin.$_$.ri;
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
    return deserializer.v1y(this);
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
    return $super === VOID ? this.s22(descriptor, index, deserializer, previousValue) : $super.s22.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.g22(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.u1y(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.t1y().g20();
    if (isNullabilitySupported) {
      return this.y23(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.b23();
    } else {
      this.b24();
      this.y23(serializer, value);
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
    return this.g2k(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
    $this.x1y_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, objectCreate(protoOf(PolymorphicSerializer)));
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.h1z('type', serializer_2(StringCompanionObject_instance).t1y());
      $this$buildSerialDescriptor.h1z('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.w1y_1.gc() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.b1z_1 = this$0.x1y_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.w1y_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.w1y_1 = baseClass;
    this.x1y_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.y1y_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).i1z = function () {
    return this.w1y_1;
  };
  protoOf(PolymorphicSerializer).t1y = function () {
    var tmp0 = this.y1y_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.z();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.w1y_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.l1z(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.i1z());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.k1z(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.i1z());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.t1y();
    }, null);
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.n1z_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, objectCreate(protoOf(SealedClassSerializer)));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = this$0.q1z_1.x().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.component1' call
        var name = element.y();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element.z();
        $this$buildSerialDescriptor.h1z(name, serializer.t1y());
      }
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.h1z('type', serializer_2(StringCompanionObject_instance).t1y());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.m1z_1.gc() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0));
      $this$buildSerialDescriptor.h1z('value', elementDescriptor);
      $this$buildSerialDescriptor.b1z_1 = this$0.n1z_1;
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
    this.r1z_1 = $this;
  }
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).s1z = function () {
    return this.r1z_1.p();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).t1z = function (element) {
    return element.z().t1y().u1z();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).v1z = function (element) {
    return this.t1z((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.m1z_1 = baseClass;
    this.n1z_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.o1z_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.m1z_1.gc() + ' should be marked @Serializable');
    }
    this.p1z_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    // Inline function 'kotlin.collections.groupingBy' call
    var this_0 = this.p1z_1.x();
    // Inline function 'kotlin.collections.aggregate' call
    var tmp0 = new SealedClassSerializer$$inlined$groupingBy$1(this_0);
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.collections.aggregateTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tmp0.s1z();
    while (_iterator__ex2g4s.q()) {
      var e = _iterator__ex2g4s.r();
      var key = tmp0.v1z(e);
      var accumulator = destination.k2(key);
      accumulator == null && !destination.i2(key);
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var message = "Multiple sealed subclasses of '" + toString(this.m1z_1) + "' have the same serial name '" + key + "':" + (" '" + toString(accumulator.y()) + "', '" + toString(e.y()) + "'");
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
    tmp_1.q1z_1 = destination_0;
  }
  protoOf(SealedClassSerializer).i1z = function () {
    return this.m1z_1;
  };
  protoOf(SealedClassSerializer).t1y = function () {
    var tmp0 = this.o1z_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return tmp0.z();
  };
  protoOf(SealedClassSerializer).k1z = function (decoder, klassName) {
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.q1z_1;
    var tmp0_elvis_lhs = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).k2(klassName);
    return tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).k1z.call(this, decoder, klassName) : tmp0_elvis_lhs;
  };
  protoOf(SealedClassSerializer).l1z = function (encoder, value) {
    var tmp0_elvis_lhs = this.p1z_1.k2(getKClassFromExpression(value));
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).l1z.call(this, encoder, value) : tmp0_elvis_lhs;
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
      return receiver.t1y();
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
    this.a20_1 = missingFields;
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
    var isNullable = type.xc();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.wc();
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
      if (isInterface_0(rootClass) && !(_this__u8e3s4.c20(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.b20()) {
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
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.c20(rootClass) : tmp0_elvis_lhs;
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
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.d20(rootClass, serializers) : tmp3_elvis_lhs;
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
      return $typeArguments.u(0).vc();
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().e20(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().e20(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().f20(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().f20(clazz, types);
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
      return $types.u(0).vc();
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
      return $types.u(0).vc();
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
    if (_this__u8e3s4.t1y().g20()) {
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
    this.h20_1 = original;
    this.i20_1 = kClass;
    this.j20_1 = this.h20_1.u1z() + '<' + this.i20_1.gc() + '>';
  }
  protoOf(ContextDescriptor).u1z = function () {
    return this.j20_1;
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
    return equals(this.h20_1, another.h20_1) && another.i20_1.equals(this.i20_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.i20_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.j20_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.i20_1) + ', original: ' + toString(this.h20_1) + ')';
  };
  protoOf(ContextDescriptor).k20 = function () {
    return this.h20_1.k20();
  };
  protoOf(ContextDescriptor).g20 = function () {
    return this.h20_1.g20();
  };
  protoOf(ContextDescriptor).l20 = function () {
    return this.h20_1.l20();
  };
  protoOf(ContextDescriptor).m20 = function () {
    return this.h20_1.m20();
  };
  protoOf(ContextDescriptor).n20 = function () {
    return this.h20_1.n20();
  };
  protoOf(ContextDescriptor).o20 = function (index) {
    return this.h20_1.o20(index);
  };
  protoOf(ContextDescriptor).p20 = function (name) {
    return this.h20_1.p20(name);
  };
  protoOf(ContextDescriptor).q20 = function (index) {
    return this.h20_1.q20(index);
  };
  protoOf(ContextDescriptor).r20 = function (index) {
    return this.h20_1.r20(index);
  };
  protoOf(ContextDescriptor).s20 = function (index) {
    return this.h20_1.s20(index);
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.c20(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.t1y();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.i20_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.t20_1);
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
    this.x20_1 = $this_elementDescriptors;
    this.w20_1 = $this_elementDescriptors.m20();
  }
  protoOf(elementDescriptors$1).q = function () {
    return this.w20_1 > 0;
  };
  protoOf(elementDescriptors$1).r = function () {
    var tmp = this.x20_1.m20();
    var _unary__edvuaz = this.w20_1;
    this.w20_1 = _unary__edvuaz - 1 | 0;
    return this.x20_1.r20(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.y20_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).p = function () {
    return new elementDescriptors$1(this.y20_1);
  };
  function elementNames$1($this_elementNames) {
    this.a21_1 = $this_elementNames;
    this.z20_1 = $this_elementNames.m20();
  }
  protoOf(elementNames$1).q = function () {
    return this.z20_1 > 0;
  };
  protoOf(elementNames$1).r = function () {
    var tmp = this.a21_1.m20();
    var _unary__edvuaz = this.z20_1;
    this.z20_1 = _unary__edvuaz - 1 | 0;
    return this.a21_1.o20(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.b21_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).p = function () {
    return new elementNames$1(this.b21_1);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.c1z_1.s(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.z1y_1 = serialName;
    this.a1z_1 = false;
    this.b1z_1 = emptyList();
    this.c1z_1 = ArrayList_init_$Create$_0();
    this.d1z_1 = HashSet_init_$Create$();
    this.e1z_1 = ArrayList_init_$Create$_0();
    this.f1z_1 = ArrayList_init_$Create$_0();
    this.g1z_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).c21 = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.d1z_1.n(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.z1y_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.c1z_1.n(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.e1z_1.n(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.f1z_1.n(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.g1z_1.n(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).h1z = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.c21(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.c21.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.o21_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.z();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.n21_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.o20(it) + ': ' + this$0.r20(it).u1z();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.d21_1 = serialName;
    this.e21_1 = kind;
    this.f21_1 = elementsCount;
    this.g21_1 = builder.b1z_1;
    this.h21_1 = toHashSet(builder.c1z_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.c1z_1;
    tmp.i21_1 = copyToArray(this_0);
    this.j21_1 = compactArray(builder.e1z_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.f1z_1;
    tmp_0.k21_1 = copyToArray(this_1);
    this.l21_1 = toBooleanArray(builder.g1z_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.i21_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$2 = to(item.wh_1, item.vh_1);
      destination.n(tmp$ret$2);
    }
    tmp_1.m21_1 = toMap(destination);
    this.n21_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.o21_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).u1z = function () {
    return this.d21_1;
  };
  protoOf(SerialDescriptorImpl).k20 = function () {
    return this.e21_1;
  };
  protoOf(SerialDescriptorImpl).m20 = function () {
    return this.f21_1;
  };
  protoOf(SerialDescriptorImpl).n20 = function () {
    return this.g21_1;
  };
  protoOf(SerialDescriptorImpl).p21 = function () {
    return this.h21_1;
  };
  protoOf(SerialDescriptorImpl).o20 = function (index) {
    return getChecked(this.i21_1, index);
  };
  protoOf(SerialDescriptorImpl).p20 = function (name) {
    var tmp0_elvis_lhs = this.m21_1.k2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).q20 = function (index) {
    return getChecked(this.k21_1, index);
  };
  protoOf(SerialDescriptorImpl).r20 = function (index) {
    return getChecked(this.j21_1, index);
  };
  protoOf(SerialDescriptorImpl).s20 = function (index) {
    return getChecked_0(this.l21_1, index);
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
      if (!(this.u1z() === other.u1z())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.n21_1, other.n21_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.m20() === other.m20())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.m20();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.r20(index).u1z() === other.r20(index).u1z())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.r20(index).k20(), other.r20(index).k20())) {
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
    var tmp = until(0, this.f21_1);
    var tmp_0 = this.d21_1 + '(';
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.c1z_1.s(), toList(typeParameters), sdBuilder);
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
    return ensureNotNull(getKClassFromExpression(this).gc());
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
  protoOf(AbstractDecoder).q21 = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).r21 = function () {
    return true;
  };
  protoOf(AbstractDecoder).s21 = function () {
    return null;
  };
  protoOf(AbstractDecoder).t21 = function () {
    var tmp = this.q21();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).u21 = function () {
    var tmp = this.q21();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).v21 = function () {
    var tmp = this.q21();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).w21 = function () {
    var tmp = this.q21();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).x21 = function () {
    var tmp = this.q21();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).y21 = function () {
    var tmp = this.q21();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).z21 = function () {
    var tmp = this.q21();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).a22 = function () {
    var tmp = this.q21();
    return tmp instanceof Char ? tmp.l1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).b22 = function () {
    var tmp = this.q21();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).c22 = function (enumDescriptor) {
    var tmp = this.q21();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).d22 = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).e22 = function (deserializer, previousValue) {
    return this.f22(deserializer);
  };
  protoOf(AbstractDecoder).g22 = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).h22 = function (descriptor) {
  };
  protoOf(AbstractDecoder).i22 = function (descriptor, index) {
    return this.t21();
  };
  protoOf(AbstractDecoder).j22 = function (descriptor, index) {
    return this.u21();
  };
  protoOf(AbstractDecoder).k22 = function (descriptor, index) {
    return this.v21();
  };
  protoOf(AbstractDecoder).l22 = function (descriptor, index) {
    return this.w21();
  };
  protoOf(AbstractDecoder).m22 = function (descriptor, index) {
    return this.x21();
  };
  protoOf(AbstractDecoder).n22 = function (descriptor, index) {
    return this.y21();
  };
  protoOf(AbstractDecoder).o22 = function (descriptor, index) {
    return this.z21();
  };
  protoOf(AbstractDecoder).p22 = function (descriptor, index) {
    return this.a22();
  };
  protoOf(AbstractDecoder).q22 = function (descriptor, index) {
    return this.b22();
  };
  protoOf(AbstractDecoder).r22 = function (descriptor, index) {
    return this.d22(descriptor.r20(index));
  };
  protoOf(AbstractDecoder).s22 = function (descriptor, index, deserializer, previousValue) {
    return this.e22(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).u22 = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.t1y().g20();
    var tmp;
    if (isNullabilitySupported || this.r21()) {
      tmp = this.e22(deserializer, previousValue);
    } else {
      tmp = this.s21();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).g22 = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).h22 = function (descriptor) {
  };
  protoOf(AbstractEncoder).z22 = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).a23 = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).b23 = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).c23 = function (value) {
    return this.a23(value);
  };
  protoOf(AbstractEncoder).d23 = function (value) {
    return this.a23(value);
  };
  protoOf(AbstractEncoder).e23 = function (value) {
    return this.a23(value);
  };
  protoOf(AbstractEncoder).f23 = function (value) {
    return this.a23(value);
  };
  protoOf(AbstractEncoder).g23 = function (value) {
    return this.a23(value);
  };
  protoOf(AbstractEncoder).h23 = function (value) {
    return this.a23(value);
  };
  protoOf(AbstractEncoder).i23 = function (value) {
    return this.a23(value);
  };
  protoOf(AbstractEncoder).j23 = function (value) {
    return this.a23(new Char(value));
  };
  protoOf(AbstractEncoder).k23 = function (value) {
    return this.a23(value);
  };
  protoOf(AbstractEncoder).l23 = function (enumDescriptor, index) {
    return this.a23(index);
  };
  protoOf(AbstractEncoder).m23 = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).n23 = function (descriptor, index, value) {
    if (this.z22(descriptor, index)) {
      this.c23(value);
    }
  };
  protoOf(AbstractEncoder).o23 = function (descriptor, index, value) {
    if (this.z22(descriptor, index)) {
      this.d23(value);
    }
  };
  protoOf(AbstractEncoder).p23 = function (descriptor, index, value) {
    if (this.z22(descriptor, index)) {
      this.e23(value);
    }
  };
  protoOf(AbstractEncoder).q23 = function (descriptor, index, value) {
    if (this.z22(descriptor, index)) {
      this.f23(value);
    }
  };
  protoOf(AbstractEncoder).r23 = function (descriptor, index, value) {
    if (this.z22(descriptor, index)) {
      this.g23(value);
    }
  };
  protoOf(AbstractEncoder).s23 = function (descriptor, index, value) {
    if (this.z22(descriptor, index)) {
      this.h23(value);
    }
  };
  protoOf(AbstractEncoder).t23 = function (descriptor, index, value) {
    if (this.z22(descriptor, index)) {
      this.i23(value);
    }
  };
  protoOf(AbstractEncoder).u23 = function (descriptor, index, value) {
    if (this.z22(descriptor, index)) {
      this.j23(value);
    }
  };
  protoOf(AbstractEncoder).v23 = function (descriptor, index, value) {
    if (this.z22(descriptor, index)) {
      this.k23(value);
    }
  };
  protoOf(AbstractEncoder).w23 = function (descriptor, index) {
    return this.z22(descriptor, index) ? this.m23(descriptor.r20(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).x23 = function (descriptor, index, serializer, value) {
    if (this.z22(descriptor, index)) {
      this.y23(serializer, value);
    }
  };
  protoOf(AbstractEncoder).z23 = function (descriptor, index, serializer, value) {
    if (this.z22(descriptor, index)) {
      this.a24(serializer, value);
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
    var klassName = compositeDecoder.q22($this.t1y(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.t22($this.t1y(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).j1z = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.t1y();
    var composite = encoder.g22(descriptor);
    composite.v23(this.t1y(), 0, actualSerializer.t1y().u1z());
    var tmp = this.t1y();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.x23(tmp, 1, tmp$ret$0, value);
    composite.h22(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).u1y = function (encoder, value) {
    return this.j1z(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).v1y = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.t1y();
    var composite = decoder.g22(descriptor);
    var tmp$ret$0;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.w22()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.x22(this.t1y());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.q22(this.t1y(), index);
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
            value = composite.t22(this.t1y(), index, serializer);
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
    composite.h22(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).k1z = function (decoder, klassName) {
    return decoder.v22().e24(this.i1z(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).l1z = function (encoder, value) {
    return encoder.v22().f24(this.i1z(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.gc();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.gc() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.gc() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.g24_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).t1y = function () {
    return this.g24_1;
  };
  protoOf(NothingSerializer_0).h24 = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).u1y = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.h24(encoder, tmp);
  };
  protoOf(NothingSerializer_0).v1y = function (decoder) {
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
    this.i24_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).t1y = function () {
    return this.i24_1;
  };
  protoOf(DurationSerializer).j24 = function (encoder, value) {
    encoder.k23(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).u1y = function (encoder, value) {
    return this.j24(encoder, value instanceof Duration ? value.fg_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).k24 = function (decoder) {
    return Companion_getInstance().po(decoder.b22());
  };
  protoOf(DurationSerializer).v1y = function (decoder) {
    return new Duration(this.k24(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.l24_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).t1y = function () {
    return this.l24_1;
  };
  protoOf(UuidSerializer).m24 = function (encoder, value) {
    encoder.k23(value.toString());
  };
  protoOf(UuidSerializer).u1y = function (encoder, value) {
    return this.m24(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).v1y = function (decoder) {
    return Companion_getInstance_0().sp(decoder.b22());
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
  protoOf(ArrayListClassDesc).u1z = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).u1z = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).u1z = function () {
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
  protoOf(ArrayClassDesc).u1z = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.p24_1 = elementDescriptor;
    this.q24_1 = 1;
  }
  protoOf(ListLikeDescriptor).k20 = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).m20 = function () {
    return this.q24_1;
  };
  protoOf(ListLikeDescriptor).o20 = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).p20 = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).s20 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.u1z() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).q20 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.u1z() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).r20 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.u1z() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.p24_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.p24_1, other.p24_1) && this.u1z() === other.u1z())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.p24_1), 31) + getStringHashCode(this.u1z()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.u1z() + '(' + toString(this.p24_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.v24_1 = serialName;
    this.w24_1 = keyDescriptor;
    this.x24_1 = valueDescriptor;
    this.y24_1 = 2;
  }
  protoOf(MapLikeDescriptor).u1z = function () {
    return this.v24_1;
  };
  protoOf(MapLikeDescriptor).k20 = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).m20 = function () {
    return this.y24_1;
  };
  protoOf(MapLikeDescriptor).o20 = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).p20 = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).s20 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.u1z() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).q20 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.u1z() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).r20 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.u1z() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.w24_1;
        break;
      case 1:
        tmp = this.x24_1;
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
    if (!(this.u1z() === other.u1z()))
      return false;
    if (!equals(this.w24_1, other.w24_1))
      return false;
    if (!equals(this.x24_1, other.x24_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.u1z());
    result = imul(31, result) + hashCode(this.w24_1) | 0;
    result = imul(31, result) + hashCode(this.x24_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.u1z() + '(' + toString(this.w24_1) + ', ' + toString(this.x24_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.d25_1 = primitive.u1z() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).u1z = function () {
    return this.d25_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.f25_1 = new ArrayListClassDesc(element.t1y());
  }
  protoOf(ArrayListSerializer).t1y = function () {
    return this.f25_1;
  };
  protoOf(ArrayListSerializer).g25 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).h25 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(ArrayListSerializer).i25 = function (_this__u8e3s4) {
    return this.h25(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).j25 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).k25 = function (_this__u8e3s4) {
    return this.j25(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).l25 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).m25 = function (_this__u8e3s4) {
    return this.l25((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).n25 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.g6(size);
  };
  protoOf(ArrayListSerializer).o25 = function (_this__u8e3s4, size) {
    return this.n25(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).p25 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.g2(index, element);
  };
  protoOf(ArrayListSerializer).q25 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.p25(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.b26_1 = new HashSetClassDesc(eSerializer.t1y());
  }
  protoOf(HashSetSerializer).t1y = function () {
    return this.b26_1;
  };
  protoOf(HashSetSerializer).g25 = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).c26 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(HashSetSerializer).i25 = function (_this__u8e3s4) {
    return this.c26(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).d26 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).k25 = function (_this__u8e3s4) {
    return this.d26(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).e26 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).m25 = function (_this__u8e3s4) {
    return this.e26((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).f26 = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).o25 = function (_this__u8e3s4, size) {
    return this.f26(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).g26 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.n(element);
  };
  protoOf(HashSetSerializer).q25 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.g26(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.i26_1 = new LinkedHashSetClassDesc(eSerializer.t1y());
  }
  protoOf(LinkedHashSetSerializer).t1y = function () {
    return this.i26_1;
  };
  protoOf(LinkedHashSetSerializer).g25 = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).j26 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(LinkedHashSetSerializer).i25 = function (_this__u8e3s4) {
    return this.j26(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).k26 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).k25 = function (_this__u8e3s4) {
    return this.k26(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).e26 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).m25 = function (_this__u8e3s4) {
    return this.e26((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).l26 = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).o25 = function (_this__u8e3s4, size) {
    return this.l26(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).m26 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.n(element);
  };
  protoOf(LinkedHashSetSerializer).q25 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.m26(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.p26_1 = new HashMapClassDesc(kSerializer.t1y(), vSerializer.t1y());
  }
  protoOf(HashMapSerializer).t1y = function () {
    return this.p26_1;
  };
  protoOf(HashMapSerializer).q26 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(HashMapSerializer).r26 = function (_this__u8e3s4) {
    return this.q26((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).s26 = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.x().p();
  };
  protoOf(HashMapSerializer).t26 = function (_this__u8e3s4) {
    return this.s26((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).g25 = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).u26 = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.s(), 2);
  };
  protoOf(HashMapSerializer).i25 = function (_this__u8e3s4) {
    return this.u26(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).v26 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).k25 = function (_this__u8e3s4) {
    return this.v26(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).w26 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).m25 = function (_this__u8e3s4) {
    return this.w26((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).x26 = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).o25 = function (_this__u8e3s4, size) {
    return this.x26(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.e27_1 = new LinkedHashMapClassDesc(kSerializer.t1y(), vSerializer.t1y());
  }
  protoOf(LinkedHashMapSerializer).t1y = function () {
    return this.e27_1;
  };
  protoOf(LinkedHashMapSerializer).q26 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(LinkedHashMapSerializer).r26 = function (_this__u8e3s4) {
    return this.q26((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).s26 = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.x().p();
  };
  protoOf(LinkedHashMapSerializer).t26 = function (_this__u8e3s4) {
    return this.s26((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).g25 = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).f27 = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.s(), 2);
  };
  protoOf(LinkedHashMapSerializer).i25 = function (_this__u8e3s4) {
    return this.f27(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).g27 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).k25 = function (_this__u8e3s4) {
    return this.g27(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).w26 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).m25 = function (_this__u8e3s4) {
    return this.w26((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).h27 = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).o25 = function (_this__u8e3s4, size) {
    return this.h27(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.j27_1 = kClass;
    this.k27_1 = new ArrayClassDesc(eSerializer.t1y());
  }
  protoOf(ReferenceArraySerializer).t1y = function () {
    return this.k27_1;
  };
  protoOf(ReferenceArraySerializer).l27 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).r26 = function (_this__u8e3s4) {
    return this.l27((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).m27 = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).t26 = function (_this__u8e3s4) {
    return this.m27((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).g25 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).n27 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(ReferenceArraySerializer).i25 = function (_this__u8e3s4) {
    return this.n27(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).o27 = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.j27_1);
  };
  protoOf(ReferenceArraySerializer).k25 = function (_this__u8e3s4) {
    return this.o27(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).p27 = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).m25 = function (_this__u8e3s4) {
    return this.p27((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).q27 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.g6(size);
  };
  protoOf(ReferenceArraySerializer).o25 = function (_this__u8e3s4, size) {
    return this.q27(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).r27 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.g2(index, element);
  };
  protoOf(ReferenceArraySerializer).q25 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.r27(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).s25 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(CollectionSerializer).r26 = function (_this__u8e3s4) {
    return this.s25((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).t25 = function (_this__u8e3s4) {
    return _this__u8e3s4.p();
  };
  protoOf(CollectionSerializer).t26 = function (_this__u8e3s4) {
    return this.t25((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.y26_1 = keySerializer;
    this.z26_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).a27 = function (decoder, builder, startIndex, size) {
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
        this.b27(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).w25 = function (decoder, builder, startIndex, size) {
    return this.a27(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).b27 = function (decoder, index, builder, checkIndex) {
    var key = decoder.t22(this.t1y(), index, this.y26_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.x22(this.t1y());
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
      var tmp_2 = this.z26_1.t1y().k20();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.s22(this.t1y(), vIndex, this.z26_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.t22(this.t1y(), vIndex, this.z26_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.n2(key, value);
  };
  protoOf(MapLikeSerializer).x25 = function (decoder, index, builder, checkIndex) {
    return this.b27(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).v25 = function (encoder, value) {
    var size = this.r26(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.t1y();
    var composite = encoder.c24(descriptor, size);
    var iterator = this.t26(value);
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
      var tmp = this.t1y();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.x23(tmp, _unary__edvuaz, this.y26_1, k);
      var tmp_0 = this.t1y();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.x23(tmp_0, _unary__edvuaz_0, this.z26_1, v);
    }
    composite.h22(descriptor);
  };
  protoOf(MapLikeSerializer).u1y = function (encoder, value) {
    return this.v25(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.u25_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).v25 = function (encoder, value) {
    var size = this.r26(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.t1y();
    var composite = encoder.c24(descriptor, size);
    var iterator = this.t26(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.x23(this.t1y(), index, this.u25_1, iterator.r());
      }
       while (inductionVariable < size);
    composite.h22(descriptor);
  };
  protoOf(CollectionLikeSerializer).u1y = function (encoder, value) {
    return this.v25(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).w25 = function (decoder, builder, startIndex, size) {
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
        this.x25(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).x25 = function (decoder, index, builder, checkIndex) {
    this.q25(builder, index, decoder.t22(this.t1y(), index, this.u25_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.y22($this.t1y());
    $this.o25(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).z25 = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.m25(previous);
    var builder = tmp1_elvis_lhs == null ? this.g25() : tmp1_elvis_lhs;
    var startIndex = this.i25(builder);
    var compositeDecoder = decoder.g22(this.t1y());
    if (compositeDecoder.w22()) {
      this.w25(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.x22(this.t1y());
        if (index === -1)
          break $l$loop;
        this.y25(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.h22(this.t1y());
    return this.k25(builder);
  };
  protoOf(AbstractCollectionSerializer).v1y = function (decoder) {
    return this.z25(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).y25 = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.x25(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.x25.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.t27_1 = new PrimitiveArrayDescriptor(primitiveSerializer.t1y());
  }
  protoOf(PrimitiveArraySerializer).t1y = function () {
    return this.t27_1;
  };
  protoOf(PrimitiveArraySerializer).u27 = function (_this__u8e3s4) {
    return _this__u8e3s4.v27();
  };
  protoOf(PrimitiveArraySerializer).i25 = function (_this__u8e3s4) {
    return this.u27(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).w27 = function (_this__u8e3s4) {
    return _this__u8e3s4.x27();
  };
  protoOf(PrimitiveArraySerializer).k25 = function (_this__u8e3s4) {
    return this.w27(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).y27 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.z27(size);
  };
  protoOf(PrimitiveArraySerializer).o25 = function (_this__u8e3s4, size) {
    return this.y27(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).a28 = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).t26 = function (_this__u8e3s4) {
    return this.a28((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).b28 = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).q25 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.b28(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).g25 = function () {
    return this.m25(this.c28());
  };
  protoOf(PrimitiveArraySerializer).f28 = function (encoder, value) {
    var size = this.r26(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.t27_1;
    var composite = encoder.c24(descriptor, size);
    this.e28(composite, value, size);
    composite.h22(descriptor);
  };
  protoOf(PrimitiveArraySerializer).u1y = function (encoder, value) {
    return this.f28(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).v25 = function (encoder, value) {
    return this.f28(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).v1y = function (decoder) {
    return this.z25(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).g28 = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.v27() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.z27(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.z27.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.h28_1 = longArray(0);
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
    $this.l28_1[slot] = $this.l28_1[slot].n3((new Long(1, 0)).j3(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.l28_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.l28_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.h3());
          slotMarks = slotMarks.n3((new Long(1, 0)).j3(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.j28_1($this.i28_1, index)) {
            $this.l28_1[slot] = slotMarks;
            return index;
          }
        }
        $this.l28_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.i28_1 = descriptor;
    this.j28_1 = readIfAbsent;
    var elementsCount = this.i28_1.m20();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).j3(elementsCount);
      }
      tmp.k28_1 = tmp_0;
      this.l28_1 = Companion_getInstance_7().h28_1;
    } else {
      this.k28_1 = new Long(0, 0);
      this.l28_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).m28 = function (index) {
    if (index < 64) {
      this.k28_1 = this.k28_1.n3((new Long(1, 0)).j3(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).n28 = function () {
    var elementsCount = this.i28_1.m20();
    while (!this.k28_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.k28_1.h3());
      this.k28_1 = this.k28_1.n3((new Long(1, 0)).j3(index));
      if (this.j28_1(this.i28_1, index)) {
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
        descriptor.a29(element);
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
      var elementName = tmp0_elvis_lhs == null ? item.q2_1 : tmp0_elvis_lhs;
      descriptor.b29(elementName);
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
          descriptor.c29(element_0);
        }
      }
    }
    return EnumSerializer_init_$Create$(serialName, values, descriptor);
  }
  function EnumSerializer_init_$Init$(serialName, values, descriptor, $this) {
    EnumSerializer.call($this, serialName, values);
    $this.e29_1 = descriptor;
    return $this;
  }
  function EnumSerializer_init_$Create$(serialName, values, descriptor) {
    return EnumSerializer_init_$Init$(serialName, values, descriptor, objectCreate(protoOf(EnumSerializer)));
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.d29_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.d29_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.b29(element.q2_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.e29_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer(serialName, values) {
    this.d29_1 = values;
    this.e29_1 = null;
    var tmp = this;
    tmp.f29_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).t1y = function () {
    var tmp0 = this.f29_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_1();
    return tmp0.z();
  };
  protoOf(EnumSerializer).g29 = function (encoder, value) {
    var index = indexOf(this.d29_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.t1y().u1z() + ', ' + ('must be one of ' + contentToString(this.d29_1)));
    }
    encoder.l23(this.t1y(), index);
  };
  protoOf(EnumSerializer).u1y = function (encoder, value) {
    return this.g29(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).v1y = function (decoder) {
    var index = decoder.c22(this.t1y());
    if (!(0 <= index ? index <= (this.d29_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.t1y().u1z() + ' enum values, ' + ('values size is ' + this.d29_1.length));
    }
    return this.d29_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.t1y().u1z() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.u29_1;
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
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.o20(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.t29_1 = ENUM_getInstance();
    var tmp = this;
    tmp.u29_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).k20 = function () {
    return this.t29_1;
  };
  protoOf(EnumDescriptor).r20 = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.k20() === ENUM_getInstance()))
      return false;
    if (!(this.u1z() === other.u1z()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.u1z() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.u1z());
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
      return receiver.t1y();
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
    this.j2a_1 = true;
  }
  protoOf(InlineClassDescriptor).l20 = function () {
    return this.j2a_1;
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
      if (!(this.u1z() === other.u1z())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.j2a_1 && contentEquals(this.v29(), other.v29()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.m20() === other.m20())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.m20();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.r20(index).u1z() === other.r20(index).u1z())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.r20(index).k20(), other.r20(index).k20())) {
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
    this.k2a_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).l2a = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.k2a_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).t1y = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).u1y = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).v1y = function (decoder) {
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
    this.n2a_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).v22 = function () {
    return this.n2a_1;
  };
  protoOf(NoOpEncoder).a23 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).b23 = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).c23 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).d23 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).e23 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).f23 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).g23 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).h23 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).i23 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).j23 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).k23 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).l23 = function (enumDescriptor, index) {
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
    this.o2a_1 = OBJECT_getInstance();
    this.p2a_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).k20 = function () {
    return this.o2a_1;
  };
  protoOf(NothingSerialDescriptor).u1z = function () {
    return this.p2a_1;
  };
  protoOf(NothingSerialDescriptor).m20 = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).o20 = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).p20 = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).s20 = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).r20 = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).q20 = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.p2a_1) + imul(31, this.o2a_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.q2a_1 = serializer;
    this.r2a_1 = new SerialDescriptorForNullable(this.q2a_1.t1y());
  }
  protoOf(NullableSerializer).t1y = function () {
    return this.r2a_1;
  };
  protoOf(NullableSerializer).s2a = function (encoder, value) {
    if (!(value == null)) {
      encoder.b24();
      encoder.y23(this.q2a_1, value);
    } else {
      encoder.b23();
    }
  };
  protoOf(NullableSerializer).u1y = function (encoder, value) {
    return this.s2a(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).v1y = function (decoder) {
    return decoder.r21() ? decoder.f22(this.q2a_1) : decoder.s21();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.q2a_1, other.q2a_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.q2a_1);
  };
  function SerialDescriptorForNullable(original) {
    this.t20_1 = original;
    this.u20_1 = this.t20_1.u1z() + '?';
    this.v20_1 = cachedSerialNames(this.t20_1);
  }
  protoOf(SerialDescriptorForNullable).u1z = function () {
    return this.u20_1;
  };
  protoOf(SerialDescriptorForNullable).p21 = function () {
    return this.v20_1;
  };
  protoOf(SerialDescriptorForNullable).g20 = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.t20_1, other.t20_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.t20_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.t20_1), 31);
  };
  protoOf(SerialDescriptorForNullable).k20 = function () {
    return this.t20_1.k20();
  };
  protoOf(SerialDescriptorForNullable).l20 = function () {
    return this.t20_1.l20();
  };
  protoOf(SerialDescriptorForNullable).m20 = function () {
    return this.t20_1.m20();
  };
  protoOf(SerialDescriptorForNullable).n20 = function () {
    return this.t20_1.n20();
  };
  protoOf(SerialDescriptorForNullable).o20 = function (index) {
    return this.t20_1.o20(index);
  };
  protoOf(SerialDescriptorForNullable).p20 = function (name) {
    return this.t20_1.p20(name);
  };
  protoOf(SerialDescriptorForNullable).q20 = function (index) {
    return this.t20_1.q20(index);
  };
  protoOf(SerialDescriptorForNullable).r20 = function (index) {
    return this.t20_1.r20(index);
  };
  protoOf(SerialDescriptorForNullable).s20 = function (index) {
    return this.t20_1.s20(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.b1z_1 = this$0.u2a_1;
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
    this.t2a_1 = objectInstance;
    this.u2a_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.v2a_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).t1y = function () {
    var tmp0 = this.v2a_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_2();
    return tmp0.z();
  };
  protoOf(ObjectSerializer).j1z = function (encoder, value) {
    encoder.g22(this.t1y()).h22(this.t1y());
  };
  protoOf(ObjectSerializer).u1y = function (encoder, value) {
    return this.j1z(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).v1y = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.t1y();
    var composite = decoder.g22(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      if (composite.w22()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.x22(this.t1y());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.h22(descriptor);
    return this.t2a_1;
  };
  function descriptor$factory_2() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.t1y();
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
      return _this__u8e3s4.p21();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.m20());
    var inductionVariable = 0;
    var last = _this__u8e3s4.m20();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.o20(i);
        result.n(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.vc();
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
    var tmp0 = _this__u8e3s4.wm_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.wm_1);
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
    var tmp0_elvis_lhs = _this__u8e3s4.gc();
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
          var element = descriptor.o20(i);
          missingFields.n(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.u1z());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.u1z());
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
      var tmp0_safe_receiver = element.u1z();
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
      var tmp0_safe_receiver_0 = element_0.k20();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.x28_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.z();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.z28_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory_0();
    return tmp0.z();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.s28_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.s28_1[i];
        indices.n2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.p28_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l2a();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.p28_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m2a();
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
          var tmp$ret$0 = item.t1y();
          destination.n(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.v29());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.o20(i) + ': ' + this$0.r20(i).u1z();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.o28_1 = serialName;
    this.p28_1 = generatedSerializer;
    this.q28_1 = elementsCount;
    this.r28_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.q28_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.s28_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.q28_1;
    tmp_3.t28_1 = Array(size);
    this.u28_1 = null;
    this.v28_1 = booleanArray(this.q28_1);
    this.w28_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.x28_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.y28_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.z28_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).u1z = function () {
    return this.o28_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).m20 = function () {
    return this.q28_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).k20 = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).n20 = function () {
    var tmp0_elvis_lhs = this.u28_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).p21 = function () {
    return this.w28_1.l2();
  };
  protoOf(PluginGeneratedSerialDescriptor).v29 = function () {
    var tmp0 = this.y28_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.z();
  };
  protoOf(PluginGeneratedSerialDescriptor).w29 = function (name, isOptional) {
    this.r28_1 = this.r28_1 + 1 | 0;
    this.s28_1[this.r28_1] = name;
    this.v28_1[this.r28_1] = isOptional;
    this.t28_1[this.r28_1] = null;
    if (this.r28_1 === (this.q28_1 - 1 | 0)) {
      this.w28_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).b29 = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.w29(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.w29.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).c29 = function (annotation) {
    // Inline function 'kotlin.let' call
    var it = this.t28_1[this.r28_1];
    var tmp;
    if (it == null) {
      var result = ArrayList_init_$Create$(1);
      this.t28_1[this.r28_1] = result;
      tmp = result;
    } else {
      tmp = it;
    }
    var list = tmp;
    list.n(annotation);
  };
  protoOf(PluginGeneratedSerialDescriptor).a29 = function (a) {
    if (this.u28_1 == null) {
      this.u28_1 = ArrayList_init_$Create$(1);
    }
    ensureNotNull(this.u28_1).n(a);
  };
  protoOf(PluginGeneratedSerialDescriptor).r20 = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).t1y();
  };
  protoOf(PluginGeneratedSerialDescriptor).s20 = function (index) {
    return getChecked_0(this.v28_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).q20 = function (index) {
    var tmp0_elvis_lhs = getChecked(this.t28_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).o20 = function (index) {
    return getChecked(this.s28_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).p20 = function (name) {
    var tmp0_elvis_lhs = this.w28_1.k2(name);
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
      if (!(this.u1z() === other.u1z())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.v29(), other.v29())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.m20() === other.m20())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.m20();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.r20(index).u1z() === other.r20(index).u1z())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.r20(index).k20(), other.r20(index).k20())) {
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
    var tmp = until(0, this.q28_1);
    var tmp_0 = this.u1z() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.v29();
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
  protoOf(CharArraySerializer_0).z2a = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).r26 = function (_this__u8e3s4) {
    return this.z2a((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).a2b = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).m25 = function (_this__u8e3s4) {
    return this.a2b((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).c28 = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).b2b = function (decoder, index, builder, checkIndex) {
    builder.e2b(decoder.p22(this.t27_1, index));
  };
  protoOf(CharArraySerializer_0).x25 = function (decoder, index, builder, checkIndex) {
    return this.b2b(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).d28 = function (decoder, index, builder, checkIndex) {
    return this.b2b(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).f2b = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.u23(this.t27_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).e28 = function (encoder, content, size) {
    return this.f2b(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(DoubleArraySerializer_0).i2b = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).r26 = function (_this__u8e3s4) {
    return this.i2b((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).j2b = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).m25 = function (_this__u8e3s4) {
    return this.j2b((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).c28 = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).k2b = function (decoder, index, builder, checkIndex) {
    builder.n2b(decoder.o22(this.t27_1, index));
  };
  protoOf(DoubleArraySerializer_0).x25 = function (decoder, index, builder, checkIndex) {
    return this.k2b(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).d28 = function (decoder, index, builder, checkIndex) {
    return this.k2b(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).o2b = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.t23(this.t27_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).e28 = function (encoder, content, size) {
    return this.o2b(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(FloatArraySerializer_0).r2b = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).r26 = function (_this__u8e3s4) {
    return this.r2b((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).s2b = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).m25 = function (_this__u8e3s4) {
    return this.s2b((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).c28 = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).t2b = function (decoder, index, builder, checkIndex) {
    builder.w2b(decoder.n22(this.t27_1, index));
  };
  protoOf(FloatArraySerializer_0).x25 = function (decoder, index, builder, checkIndex) {
    return this.t2b(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).d28 = function (decoder, index, builder, checkIndex) {
    return this.t2b(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).x2b = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.s23(this.t27_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).e28 = function (encoder, content, size) {
    return this.x2b(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(LongArraySerializer_0).a2c = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).r26 = function (_this__u8e3s4) {
    return this.a2c((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).b2c = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).m25 = function (_this__u8e3s4) {
    return this.b2c((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).c28 = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).c2c = function (decoder, index, builder, checkIndex) {
    builder.f2c(decoder.m22(this.t27_1, index));
  };
  protoOf(LongArraySerializer_0).x25 = function (decoder, index, builder, checkIndex) {
    return this.c2c(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).d28 = function (decoder, index, builder, checkIndex) {
    return this.c2c(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).g2c = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.r23(this.t27_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).e28 = function (encoder, content, size) {
    return this.g2c(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(ULongArraySerializer_0).j2c = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).r26 = function (_this__u8e3s4) {
    return this.j2c(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.dr_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).k2c = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).m25 = function (_this__u8e3s4) {
    return this.k2c(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.dr_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).l2c = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).c28 = function () {
    return new ULongArray(this.l2c());
  };
  protoOf(ULongArraySerializer_0).m2c = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.r22(this.t27_1, index).x21();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.p2c(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).x25 = function (decoder, index, builder, checkIndex) {
    return this.m2c(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).d28 = function (decoder, index, builder, checkIndex) {
    return this.m2c(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).q2c = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.w23(this.t27_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.g23(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).e28 = function (encoder, content, size) {
    return this.q2c(encoder, content instanceof ULongArray ? content.dr_1 : THROW_CCE(), size);
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
  protoOf(IntArraySerializer_0).t2c = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).r26 = function (_this__u8e3s4) {
    return this.t2c((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).u2c = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).m25 = function (_this__u8e3s4) {
    return this.u2c((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).c28 = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).v2c = function (decoder, index, builder, checkIndex) {
    builder.y2c(decoder.l22(this.t27_1, index));
  };
  protoOf(IntArraySerializer_0).x25 = function (decoder, index, builder, checkIndex) {
    return this.v2c(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).d28 = function (decoder, index, builder, checkIndex) {
    return this.v2c(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).z2c = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.q23(this.t27_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).e28 = function (encoder, content, size) {
    return this.z2c(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UIntArraySerializer_0).c2d = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).r26 = function (_this__u8e3s4) {
    return this.c2d(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.sq_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).d2d = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).m25 = function (_this__u8e3s4) {
    return this.d2d(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.sq_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).e2d = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).c28 = function () {
    return new UIntArray(this.e2d());
  };
  protoOf(UIntArraySerializer_0).f2d = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.r22(this.t27_1, index).w21();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.i2d(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).x25 = function (decoder, index, builder, checkIndex) {
    return this.f2d(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).d28 = function (decoder, index, builder, checkIndex) {
    return this.f2d(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).j2d = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.w23(this.t27_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.f23(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).e28 = function (encoder, content, size) {
    return this.j2d(encoder, content instanceof UIntArray ? content.sq_1 : THROW_CCE(), size);
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
  protoOf(ShortArraySerializer_0).m2d = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).r26 = function (_this__u8e3s4) {
    return this.m2d((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).n2d = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).m25 = function (_this__u8e3s4) {
    return this.n2d((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).c28 = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).o2d = function (decoder, index, builder, checkIndex) {
    builder.r2d(decoder.k22(this.t27_1, index));
  };
  protoOf(ShortArraySerializer_0).x25 = function (decoder, index, builder, checkIndex) {
    return this.o2d(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).d28 = function (decoder, index, builder, checkIndex) {
    return this.o2d(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).s2d = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.p23(this.t27_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).e28 = function (encoder, content, size) {
    return this.s2d(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UShortArraySerializer_0).v2d = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).r26 = function (_this__u8e3s4) {
    return this.v2d(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.or_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).w2d = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).m25 = function (_this__u8e3s4) {
    return this.w2d(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.or_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).x2d = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).c28 = function () {
    return new UShortArray(this.x2d());
  };
  protoOf(UShortArraySerializer_0).y2d = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.r22(this.t27_1, index).v21();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.b2e(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).x25 = function (decoder, index, builder, checkIndex) {
    return this.y2d(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).d28 = function (decoder, index, builder, checkIndex) {
    return this.y2d(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).c2e = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.w23(this.t27_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.e23(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).e28 = function (encoder, content, size) {
    return this.c2e(encoder, content instanceof UShortArray ? content.or_1 : THROW_CCE(), size);
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
  protoOf(ByteArraySerializer_0).f2e = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).r26 = function (_this__u8e3s4) {
    return this.f2e((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).g2e = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).m25 = function (_this__u8e3s4) {
    return this.g2e((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).c28 = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).h2e = function (decoder, index, builder, checkIndex) {
    builder.k2e(decoder.j22(this.t27_1, index));
  };
  protoOf(ByteArraySerializer_0).x25 = function (decoder, index, builder, checkIndex) {
    return this.h2e(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).d28 = function (decoder, index, builder, checkIndex) {
    return this.h2e(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).l2e = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.o23(this.t27_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).e28 = function (encoder, content, size) {
    return this.l2e(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UByteArraySerializer_0).o2e = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).r26 = function (_this__u8e3s4) {
    return this.o2e(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.hq_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).p2e = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).m25 = function (_this__u8e3s4) {
    return this.p2e(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.hq_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).q2e = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).c28 = function () {
    return new UByteArray(this.q2e());
  };
  protoOf(UByteArraySerializer_0).r2e = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.r22(this.t27_1, index).u21();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.u2e(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).x25 = function (decoder, index, builder, checkIndex) {
    return this.r2e(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).d28 = function (decoder, index, builder, checkIndex) {
    return this.r2e(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).v2e = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.w23(this.t27_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.d23(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).e28 = function (encoder, content, size) {
    return this.v2e(encoder, content instanceof UByteArray ? content.hq_1 : THROW_CCE(), size);
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
  protoOf(BooleanArraySerializer_0).y2e = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).r26 = function (_this__u8e3s4) {
    return this.y2e((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).z2e = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).m25 = function (_this__u8e3s4) {
    return this.z2e((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).c28 = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).a2f = function (decoder, index, builder, checkIndex) {
    builder.d2f(decoder.i22(this.t27_1, index));
  };
  protoOf(BooleanArraySerializer_0).x25 = function (decoder, index, builder, checkIndex) {
    return this.a2f(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).d28 = function (decoder, index, builder, checkIndex) {
    return this.a2f(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).e2f = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.n23(this.t27_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).e28 = function (encoder, content, size) {
    return this.e2f(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c2b_1 = bufferWithData;
    this.d2b_1 = bufferWithData.length;
    this.z27(10);
  }
  protoOf(CharArrayBuilder).v27 = function () {
    return this.d2b_1;
  };
  protoOf(CharArrayBuilder).z27 = function (requiredCapacity) {
    if (this.c2b_1.length < requiredCapacity)
      this.c2b_1 = copyOf(this.c2b_1, coerceAtLeast(requiredCapacity, imul(this.c2b_1.length, 2)));
  };
  protoOf(CharArrayBuilder).e2b = function (c) {
    this.g28();
    var tmp = this.c2b_1;
    var _unary__edvuaz = this.d2b_1;
    this.d2b_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).x27 = function () {
    return copyOf(this.c2b_1, this.d2b_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.l2b_1 = bufferWithData;
    this.m2b_1 = bufferWithData.length;
    this.z27(10);
  }
  protoOf(DoubleArrayBuilder).v27 = function () {
    return this.m2b_1;
  };
  protoOf(DoubleArrayBuilder).z27 = function (requiredCapacity) {
    if (this.l2b_1.length < requiredCapacity)
      this.l2b_1 = copyOf_0(this.l2b_1, coerceAtLeast(requiredCapacity, imul(this.l2b_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).n2b = function (c) {
    this.g28();
    var tmp = this.l2b_1;
    var _unary__edvuaz = this.m2b_1;
    this.m2b_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).x27 = function () {
    return copyOf_0(this.l2b_1, this.m2b_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.u2b_1 = bufferWithData;
    this.v2b_1 = bufferWithData.length;
    this.z27(10);
  }
  protoOf(FloatArrayBuilder).v27 = function () {
    return this.v2b_1;
  };
  protoOf(FloatArrayBuilder).z27 = function (requiredCapacity) {
    if (this.u2b_1.length < requiredCapacity)
      this.u2b_1 = copyOf_1(this.u2b_1, coerceAtLeast(requiredCapacity, imul(this.u2b_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).w2b = function (c) {
    this.g28();
    var tmp = this.u2b_1;
    var _unary__edvuaz = this.v2b_1;
    this.v2b_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).x27 = function () {
    return copyOf_1(this.u2b_1, this.v2b_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.d2c_1 = bufferWithData;
    this.e2c_1 = bufferWithData.length;
    this.z27(10);
  }
  protoOf(LongArrayBuilder).v27 = function () {
    return this.e2c_1;
  };
  protoOf(LongArrayBuilder).z27 = function (requiredCapacity) {
    if (this.d2c_1.length < requiredCapacity)
      this.d2c_1 = copyOf_2(this.d2c_1, coerceAtLeast(requiredCapacity, imul(this.d2c_1.length, 2)));
  };
  protoOf(LongArrayBuilder).f2c = function (c) {
    this.g28();
    var tmp = this.d2c_1;
    var _unary__edvuaz = this.e2c_1;
    this.e2c_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).x27 = function () {
    return copyOf_2(this.d2c_1, this.e2c_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.n2c_1 = bufferWithData;
    this.o2c_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.z27(10);
  }
  protoOf(ULongArrayBuilder).v27 = function () {
    return this.o2c_1;
  };
  protoOf(ULongArrayBuilder).z27 = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.n2c_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.n2c_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.n2c_1), 2));
      tmp.n2c_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).p2c = function (c) {
    this.g28();
    var tmp = this.n2c_1;
    var _unary__edvuaz = this.o2c_1;
    this.o2c_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).f2f = function () {
    var tmp0 = this.n2c_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.o2c_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).x27 = function () {
    return new ULongArray(this.f2f());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.w2c_1 = bufferWithData;
    this.x2c_1 = bufferWithData.length;
    this.z27(10);
  }
  protoOf(IntArrayBuilder).v27 = function () {
    return this.x2c_1;
  };
  protoOf(IntArrayBuilder).z27 = function (requiredCapacity) {
    if (this.w2c_1.length < requiredCapacity)
      this.w2c_1 = copyOf_3(this.w2c_1, coerceAtLeast(requiredCapacity, imul(this.w2c_1.length, 2)));
  };
  protoOf(IntArrayBuilder).y2c = function (c) {
    this.g28();
    var tmp = this.w2c_1;
    var _unary__edvuaz = this.x2c_1;
    this.x2c_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).x27 = function () {
    return copyOf_3(this.w2c_1, this.x2c_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.g2d_1 = bufferWithData;
    this.h2d_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.z27(10);
  }
  protoOf(UIntArrayBuilder).v27 = function () {
    return this.h2d_1;
  };
  protoOf(UIntArrayBuilder).z27 = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.g2d_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.g2d_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.g2d_1), 2));
      tmp.g2d_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).i2d = function (c) {
    this.g28();
    var tmp = this.g2d_1;
    var _unary__edvuaz = this.h2d_1;
    this.h2d_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).g2f = function () {
    var tmp0 = this.g2d_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.h2d_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).x27 = function () {
    return new UIntArray(this.g2f());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.p2d_1 = bufferWithData;
    this.q2d_1 = bufferWithData.length;
    this.z27(10);
  }
  protoOf(ShortArrayBuilder).v27 = function () {
    return this.q2d_1;
  };
  protoOf(ShortArrayBuilder).z27 = function (requiredCapacity) {
    if (this.p2d_1.length < requiredCapacity)
      this.p2d_1 = copyOf_4(this.p2d_1, coerceAtLeast(requiredCapacity, imul(this.p2d_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).r2d = function (c) {
    this.g28();
    var tmp = this.p2d_1;
    var _unary__edvuaz = this.q2d_1;
    this.q2d_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).x27 = function () {
    return copyOf_4(this.p2d_1, this.q2d_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.z2d_1 = bufferWithData;
    this.a2e_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.z27(10);
  }
  protoOf(UShortArrayBuilder).v27 = function () {
    return this.a2e_1;
  };
  protoOf(UShortArrayBuilder).z27 = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.z2d_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.z2d_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.z2d_1), 2));
      tmp.z2d_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).b2e = function (c) {
    this.g28();
    var tmp = this.z2d_1;
    var _unary__edvuaz = this.a2e_1;
    this.a2e_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).h2f = function () {
    var tmp0 = this.z2d_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.a2e_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).x27 = function () {
    return new UShortArray(this.h2f());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.i2e_1 = bufferWithData;
    this.j2e_1 = bufferWithData.length;
    this.z27(10);
  }
  protoOf(ByteArrayBuilder).v27 = function () {
    return this.j2e_1;
  };
  protoOf(ByteArrayBuilder).z27 = function (requiredCapacity) {
    if (this.i2e_1.length < requiredCapacity)
      this.i2e_1 = copyOf_5(this.i2e_1, coerceAtLeast(requiredCapacity, imul(this.i2e_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).k2e = function (c) {
    this.g28();
    var tmp = this.i2e_1;
    var _unary__edvuaz = this.j2e_1;
    this.j2e_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).x27 = function () {
    return copyOf_5(this.i2e_1, this.j2e_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.s2e_1 = bufferWithData;
    this.t2e_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.z27(10);
  }
  protoOf(UByteArrayBuilder).v27 = function () {
    return this.t2e_1;
  };
  protoOf(UByteArrayBuilder).z27 = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.s2e_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.s2e_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.s2e_1), 2));
      tmp.s2e_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).u2e = function (c) {
    this.g28();
    var tmp = this.s2e_1;
    var _unary__edvuaz = this.t2e_1;
    this.t2e_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).i2f = function () {
    var tmp0 = this.s2e_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.t2e_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).x27 = function () {
    return new UByteArray(this.i2f());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.b2f_1 = bufferWithData;
    this.c2f_1 = bufferWithData.length;
    this.z27(10);
  }
  protoOf(BooleanArrayBuilder).v27 = function () {
    return this.c2f_1;
  };
  protoOf(BooleanArrayBuilder).z27 = function (requiredCapacity) {
    if (this.b2f_1.length < requiredCapacity)
      this.b2f_1 = copyOf_6(this.b2f_1, coerceAtLeast(requiredCapacity, imul(this.b2f_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).d2f = function (c) {
    this.g28();
    var tmp = this.b2f_1;
    var _unary__edvuaz = this.c2f_1;
    this.c2f_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).x27 = function () {
    return copyOf_6(this.b2f_1, this.c2f_1);
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
    this.j2f_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).t1y = function () {
    return this.j2f_1;
  };
  protoOf(StringSerializer).k2f = function (encoder, value) {
    return encoder.k23(value);
  };
  protoOf(StringSerializer).u1y = function (encoder, value) {
    return this.k2f(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).v1y = function (decoder) {
    return decoder.b22();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.l2f_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).t1y = function () {
    return this.l2f_1;
  };
  protoOf(CharSerializer).m2f = function (encoder, value) {
    return encoder.j23(value);
  };
  protoOf(CharSerializer).u1y = function (encoder, value) {
    return this.m2f(encoder, value instanceof Char ? value.l1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).n2f = function (decoder) {
    return decoder.a22();
  };
  protoOf(CharSerializer).v1y = function (decoder) {
    return new Char(this.n2f(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.o2f_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).t1y = function () {
    return this.o2f_1;
  };
  protoOf(DoubleSerializer).p2f = function (encoder, value) {
    return encoder.i23(value);
  };
  protoOf(DoubleSerializer).u1y = function (encoder, value) {
    return this.p2f(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).v1y = function (decoder) {
    return decoder.z21();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.q2f_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).t1y = function () {
    return this.q2f_1;
  };
  protoOf(FloatSerializer).r2f = function (encoder, value) {
    return encoder.h23(value);
  };
  protoOf(FloatSerializer).u1y = function (encoder, value) {
    return this.r2f(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).v1y = function (decoder) {
    return decoder.y21();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.s2f_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).t1y = function () {
    return this.s2f_1;
  };
  protoOf(LongSerializer).t2f = function (encoder, value) {
    return encoder.g23(value);
  };
  protoOf(LongSerializer).u1y = function (encoder, value) {
    return this.t2f(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).v1y = function (decoder) {
    return decoder.x21();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.u2f_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).t1y = function () {
    return this.u2f_1;
  };
  protoOf(IntSerializer).v2f = function (encoder, value) {
    return encoder.f23(value);
  };
  protoOf(IntSerializer).u1y = function (encoder, value) {
    return this.v2f(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).v1y = function (decoder) {
    return decoder.w21();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.w2f_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).t1y = function () {
    return this.w2f_1;
  };
  protoOf(ShortSerializer).x2f = function (encoder, value) {
    return encoder.e23(value);
  };
  protoOf(ShortSerializer).u1y = function (encoder, value) {
    return this.x2f(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).v1y = function (decoder) {
    return decoder.v21();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.y2f_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).t1y = function () {
    return this.y2f_1;
  };
  protoOf(ByteSerializer).z2f = function (encoder, value) {
    return encoder.d23(value);
  };
  protoOf(ByteSerializer).u1y = function (encoder, value) {
    return this.z2f(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).v1y = function (decoder) {
    return decoder.u21();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.a2g_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).t1y = function () {
    return this.a2g_1;
  };
  protoOf(BooleanSerializer).b2g = function (encoder, value) {
    return encoder.c23(value);
  };
  protoOf(BooleanSerializer).u1y = function (encoder, value) {
    return this.b2g(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).v1y = function (decoder) {
    return decoder.t21();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.c2g_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).t1y = function () {
    return this.c2g_1.t1y();
  };
  protoOf(UnitSerializer).d2g = function (encoder, value) {
    this.c2g_1.j1z(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).u1y = function (encoder, value) {
    return this.d2g(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).e2g = function (decoder) {
    this.c2g_1.v1y(decoder);
  };
  protoOf(UnitSerializer).v1y = function (decoder) {
    this.e2g(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.f2g_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.f2g_1 = serialName;
    this.g2g_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).u1z = function () {
    return this.f2g_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).k20 = function () {
    return this.g2g_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).m20 = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).o20 = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).p20 = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).s20 = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).r20 = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).q20 = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.f2g_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.f2g_1 === other.f2g_1 && equals(this.g2g_1, other.g2g_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.f2g_1) + imul(31, this.g2g_1.hashCode()) | 0;
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
      var primitiveName = primitive.t1y().u1z();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).gc() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
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
  protoOf(NamedValueEncoder).i2g = function (_this__u8e3s4, index) {
    return this.k2g(this.j2g(_this__u8e3s4, index));
  };
  protoOf(NamedValueEncoder).k2g = function (nestedName) {
    var tmp0_elvis_lhs = this.m2g();
    return this.n2g(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueEncoder).j2g = function (descriptor, index) {
    return descriptor.o20(index);
  };
  protoOf(NamedValueEncoder).n2g = function (parentName, childName) {
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
  protoOf(NamedValueDecoder).i2g = function (_this__u8e3s4, index) {
    return this.k2g(this.j2g(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).k2g = function (nestedName) {
    var tmp0_elvis_lhs = this.m2g();
    return this.n2g(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).j2g = function (descriptor, index) {
    return descriptor.o20(index);
  };
  protoOf(NamedValueDecoder).n2g = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).k2h = function () {
    return this.i2h_1.h() ? '$' : joinToString(this.i2h_1, '.', '$.');
  };
  function encodeElement($this, desc, index) {
    var tag = $this.i2g(desc, index);
    $this.e2h(tag);
    return true;
  }
  function TaggedEncoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.l2g_1 = ArrayList_init_$Create$_0();
  }
  protoOf(TaggedEncoder).v22 = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedEncoder).o2g = function (tag, value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(TaggedEncoder).p2g = function (tag) {
  };
  protoOf(TaggedEncoder).q2g = function (tag) {
    throw SerializationException_init_$Create$_0('null is not supported');
  };
  protoOf(TaggedEncoder).r2g = function (tag, value) {
    return this.o2g(tag, value);
  };
  protoOf(TaggedEncoder).s2g = function (tag, value) {
    return this.o2g(tag, value);
  };
  protoOf(TaggedEncoder).t2g = function (tag, value) {
    return this.o2g(tag, value);
  };
  protoOf(TaggedEncoder).u2g = function (tag, value) {
    return this.o2g(tag, value);
  };
  protoOf(TaggedEncoder).v2g = function (tag, value) {
    return this.o2g(tag, value);
  };
  protoOf(TaggedEncoder).w2g = function (tag, value) {
    return this.o2g(tag, value);
  };
  protoOf(TaggedEncoder).x2g = function (tag, value) {
    return this.o2g(tag, value);
  };
  protoOf(TaggedEncoder).y2g = function (tag, value) {
    return this.o2g(tag, new Char(value));
  };
  protoOf(TaggedEncoder).z2g = function (tag, value) {
    return this.o2g(tag, value);
  };
  protoOf(TaggedEncoder).a2h = function (tag, enumDescriptor, ordinal) {
    return this.o2g(tag, ordinal);
  };
  protoOf(TaggedEncoder).b2h = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.e2h(tag);
    return this;
  };
  protoOf(TaggedEncoder).m23 = function (descriptor) {
    return this.b2h(this.f2h(), descriptor);
  };
  protoOf(TaggedEncoder).b24 = function () {
    return this.p2g(this.d2h());
  };
  protoOf(TaggedEncoder).b23 = function () {
    return this.q2g(this.f2h());
  };
  protoOf(TaggedEncoder).c23 = function (value) {
    return this.x2g(this.f2h(), value);
  };
  protoOf(TaggedEncoder).d23 = function (value) {
    return this.s2g(this.f2h(), value);
  };
  protoOf(TaggedEncoder).e23 = function (value) {
    return this.t2g(this.f2h(), value);
  };
  protoOf(TaggedEncoder).f23 = function (value) {
    return this.r2g(this.f2h(), value);
  };
  protoOf(TaggedEncoder).g23 = function (value) {
    return this.u2g(this.f2h(), value);
  };
  protoOf(TaggedEncoder).h23 = function (value) {
    return this.v2g(this.f2h(), value);
  };
  protoOf(TaggedEncoder).i23 = function (value) {
    return this.w2g(this.f2h(), value);
  };
  protoOf(TaggedEncoder).j23 = function (value) {
    return this.y2g(this.f2h(), value);
  };
  protoOf(TaggedEncoder).k23 = function (value) {
    return this.z2g(this.f2h(), value);
  };
  protoOf(TaggedEncoder).l23 = function (enumDescriptor, index) {
    return this.a2h(this.f2h(), enumDescriptor, index);
  };
  protoOf(TaggedEncoder).g22 = function (descriptor) {
    return this;
  };
  protoOf(TaggedEncoder).h22 = function (descriptor) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.l2g_1.h()) {
      this.f2h();
    }
    this.c2h(descriptor);
  };
  protoOf(TaggedEncoder).c2h = function (descriptor) {
  };
  protoOf(TaggedEncoder).n23 = function (descriptor, index, value) {
    return this.x2g(this.i2g(descriptor, index), value);
  };
  protoOf(TaggedEncoder).o23 = function (descriptor, index, value) {
    return this.s2g(this.i2g(descriptor, index), value);
  };
  protoOf(TaggedEncoder).p23 = function (descriptor, index, value) {
    return this.t2g(this.i2g(descriptor, index), value);
  };
  protoOf(TaggedEncoder).q23 = function (descriptor, index, value) {
    return this.r2g(this.i2g(descriptor, index), value);
  };
  protoOf(TaggedEncoder).r23 = function (descriptor, index, value) {
    return this.u2g(this.i2g(descriptor, index), value);
  };
  protoOf(TaggedEncoder).s23 = function (descriptor, index, value) {
    return this.v2g(this.i2g(descriptor, index), value);
  };
  protoOf(TaggedEncoder).t23 = function (descriptor, index, value) {
    return this.w2g(this.i2g(descriptor, index), value);
  };
  protoOf(TaggedEncoder).u23 = function (descriptor, index, value) {
    return this.y2g(this.i2g(descriptor, index), value);
  };
  protoOf(TaggedEncoder).v23 = function (descriptor, index, value) {
    return this.z2g(this.i2g(descriptor, index), value);
  };
  protoOf(TaggedEncoder).w23 = function (descriptor, index) {
    return this.b2h(this.i2g(descriptor, index), descriptor.r20(index));
  };
  protoOf(TaggedEncoder).x23 = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.y23(serializer, value);
    }
  };
  protoOf(TaggedEncoder).z23 = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.a24(serializer, value);
    }
  };
  protoOf(TaggedEncoder).d2h = function () {
    return last(this.l2g_1);
  };
  protoOf(TaggedEncoder).m2g = function () {
    return lastOrNull(this.l2g_1);
  };
  protoOf(TaggedEncoder).e2h = function (name) {
    this.l2g_1.n(name);
  };
  protoOf(TaggedEncoder).f2h = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.l2g_1.h()) {
      tmp = this.l2g_1.h2(get_lastIndex_0(this.l2g_1));
    } else {
      throw SerializationException_init_$Create$_0('No tag in stack for requested element');
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.e2h(tag);
    var r = block();
    if (!$this.j2h_1) {
      $this.f2h();
    }
    $this.j2h_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.e22($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.t1y().g20();
      var tmp;
      if (isNullabilitySupported || tmp0.r21()) {
        tmp = this$0.e22($deserializer, $previousValue);
      } else {
        tmp = tmp0.s21();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.i2h_1 = ArrayList_init_$Create$_0();
    this.j2h_1 = false;
  }
  protoOf(TaggedDecoder).v22 = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).l2h = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).m2h = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).n2h = function (tag) {
    var tmp = this.l2h(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).o2h = function (tag) {
    var tmp = this.l2h(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).p2h = function (tag) {
    var tmp = this.l2h(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).q2h = function (tag) {
    var tmp = this.l2h(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).r2h = function (tag) {
    var tmp = this.l2h(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).s2h = function (tag) {
    var tmp = this.l2h(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).t2h = function (tag) {
    var tmp = this.l2h(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).u2h = function (tag) {
    var tmp = this.l2h(tag);
    return tmp instanceof Char ? tmp.l1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).v2h = function (tag) {
    var tmp = this.l2h(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).w2h = function (tag, enumDescriptor) {
    var tmp = this.l2h(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x2h = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.e2h(tag);
    return this;
  };
  protoOf(TaggedDecoder).e22 = function (deserializer, previousValue) {
    return this.f22(deserializer);
  };
  protoOf(TaggedDecoder).d22 = function (descriptor) {
    return this.x2h(this.f2h(), descriptor);
  };
  protoOf(TaggedDecoder).r21 = function () {
    var tmp0_elvis_lhs = this.m2g();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.m2h(currentTag);
  };
  protoOf(TaggedDecoder).s21 = function () {
    return null;
  };
  protoOf(TaggedDecoder).t21 = function () {
    return this.n2h(this.f2h());
  };
  protoOf(TaggedDecoder).u21 = function () {
    return this.o2h(this.f2h());
  };
  protoOf(TaggedDecoder).v21 = function () {
    return this.p2h(this.f2h());
  };
  protoOf(TaggedDecoder).w21 = function () {
    return this.q2h(this.f2h());
  };
  protoOf(TaggedDecoder).x21 = function () {
    return this.r2h(this.f2h());
  };
  protoOf(TaggedDecoder).y21 = function () {
    return this.s2h(this.f2h());
  };
  protoOf(TaggedDecoder).z21 = function () {
    return this.t2h(this.f2h());
  };
  protoOf(TaggedDecoder).a22 = function () {
    return this.u2h(this.f2h());
  };
  protoOf(TaggedDecoder).b22 = function () {
    return this.v2h(this.f2h());
  };
  protoOf(TaggedDecoder).c22 = function (enumDescriptor) {
    return this.w2h(this.f2h(), enumDescriptor);
  };
  protoOf(TaggedDecoder).g22 = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).h22 = function (descriptor) {
  };
  protoOf(TaggedDecoder).i22 = function (descriptor, index) {
    return this.n2h(this.i2g(descriptor, index));
  };
  protoOf(TaggedDecoder).j22 = function (descriptor, index) {
    return this.o2h(this.i2g(descriptor, index));
  };
  protoOf(TaggedDecoder).k22 = function (descriptor, index) {
    return this.p2h(this.i2g(descriptor, index));
  };
  protoOf(TaggedDecoder).l22 = function (descriptor, index) {
    return this.q2h(this.i2g(descriptor, index));
  };
  protoOf(TaggedDecoder).m22 = function (descriptor, index) {
    return this.r2h(this.i2g(descriptor, index));
  };
  protoOf(TaggedDecoder).n22 = function (descriptor, index) {
    return this.s2h(this.i2g(descriptor, index));
  };
  protoOf(TaggedDecoder).o22 = function (descriptor, index) {
    return this.t2h(this.i2g(descriptor, index));
  };
  protoOf(TaggedDecoder).p22 = function (descriptor, index) {
    return this.u2h(this.i2g(descriptor, index));
  };
  protoOf(TaggedDecoder).q22 = function (descriptor, index) {
    return this.v2h(this.i2g(descriptor, index));
  };
  protoOf(TaggedDecoder).r22 = function (descriptor, index) {
    return this.x2h(this.i2g(descriptor, index), descriptor.r20(index));
  };
  protoOf(TaggedDecoder).s22 = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.i2g(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).u22 = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.i2g(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).m2g = function () {
    return lastOrNull(this.i2h_1);
  };
  protoOf(TaggedDecoder).e2h = function (name) {
    this.i2h_1.n(name);
  };
  protoOf(TaggedDecoder).f2h = function () {
    var r = this.i2h_1.h2(get_lastIndex_0(this.i2h_1));
    this.j2h_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.y2h_1 = key;
    this.z2h_1 = value;
  }
  protoOf(MapEntry).y = function () {
    return this.y2h_1;
  };
  protoOf(MapEntry).z = function () {
    return this.z2h_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.y2h_1) + ', value=' + toString_0(this.z2h_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.y2h_1 == null ? 0 : hashCode(this.y2h_1);
    result = imul(result, 31) + (this.z2h_1 == null ? 0 : hashCode(this.z2h_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.y2h_1, tmp0_other_with_cast.y2h_1))
      return false;
    if (!equals(this.z2h_1, tmp0_other_with_cast.z2h_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.h1z('key', $keySerializer.t1y());
      $this$buildSerialDescriptor.h1z('value', $valueSerializer.t1y());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.c2i_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).t1y = function () {
    return this.c2i_1;
  };
  protoOf(MapEntrySerializer_0).d2i = function (_this__u8e3s4) {
    return _this__u8e3s4.y();
  };
  protoOf(MapEntrySerializer_0).e2i = function (_this__u8e3s4) {
    return this.d2i((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).f2i = function (_this__u8e3s4) {
    return _this__u8e3s4.z();
  };
  protoOf(MapEntrySerializer_0).g2i = function (_this__u8e3s4) {
    return this.f2i((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).h2i = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.h1z('first', $keySerializer.t1y());
      $this$buildClassSerialDescriptor.h1z('second', $valueSerializer.t1y());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.n2i_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).t1y = function () {
    return this.n2i_1;
  };
  protoOf(PairSerializer_0).o2i = function (_this__u8e3s4) {
    return _this__u8e3s4.ac_1;
  };
  protoOf(PairSerializer_0).e2i = function (_this__u8e3s4) {
    return this.o2i(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).p2i = function (_this__u8e3s4) {
    return _this__u8e3s4.bc_1;
  };
  protoOf(PairSerializer_0).g2i = function (_this__u8e3s4) {
    return this.p2i(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).h2i = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.t22($this.t2i_1, 0, $this.q2i_1);
    var b = composite.t22($this.t2i_1, 1, $this.r2i_1);
    var c = composite.t22($this.t2i_1, 2, $this.s2i_1);
    composite.h22($this.t2i_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.x22($this.t2i_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.t22($this.t2i_1, 0, $this.q2i_1);
          break;
        case 1:
          b = composite.t22($this.t2i_1, 1, $this.r2i_1);
          break;
        case 2:
          c = composite.t22($this.t2i_1, 2, $this.s2i_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.h22($this.t2i_1);
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
      $this$buildClassSerialDescriptor.h1z('first', this$0.q2i_1.t1y());
      $this$buildClassSerialDescriptor.h1z('second', this$0.r2i_1.t1y());
      $this$buildClassSerialDescriptor.h1z('third', this$0.s2i_1.t1y());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.q2i_1 = aSerializer;
    this.r2i_1 = bSerializer;
    this.s2i_1 = cSerializer;
    var tmp = this;
    tmp.t2i_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).t1y = function () {
    return this.t2i_1;
  };
  protoOf(TripleSerializer_0).u2i = function (encoder, value) {
    var structuredEncoder = encoder.g22(this.t2i_1);
    structuredEncoder.x23(this.t2i_1, 0, this.q2i_1, value.np_1);
    structuredEncoder.x23(this.t2i_1, 1, this.r2i_1, value.op_1);
    structuredEncoder.x23(this.t2i_1, 2, this.s2i_1, value.pp_1);
    structuredEncoder.h22(this.t2i_1);
  };
  protoOf(TripleSerializer_0).u1y = function (encoder, value) {
    return this.u2i(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).v1y = function (decoder) {
    var composite = decoder.g22(this.t2i_1);
    if (composite.w22()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.i2i_1 = keySerializer;
    this.j2i_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).k2i = function (encoder, value) {
    var structuredEncoder = encoder.g22(this.t1y());
    structuredEncoder.x23(this.t1y(), 0, this.i2i_1, this.e2i(value));
    structuredEncoder.x23(this.t1y(), 1, this.j2i_1, this.g2i(value));
    structuredEncoder.h22(this.t1y());
  };
  protoOf(KeyValueSerializer).u1y = function (encoder, value) {
    return this.k2i(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).v1y = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.t1y();
    var composite = decoder.g22(descriptor);
    var tmp$ret$0;
    $l$block: {
      if (composite.w22()) {
        var key = composite.t22(this.t1y(), 0, this.i2i_1);
        var value = composite.t22(this.t1y(), 1, this.j2i_1);
        tmp$ret$0 = this.h2i(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.x22(this.t1y());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.t22(this.t1y(), 0, this.i2i_1);
            break;
          case 1:
            value_0 = composite.t22(this.t1y(), 1, this.j2i_1);
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
      tmp$ret$0 = this.h2i(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.h22(descriptor);
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
    this.v2i_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_2()));
  }
  protoOf(ULongSerializer).t1y = function () {
    return this.v2i_1;
  };
  protoOf(ULongSerializer).w2i = function (encoder, value) {
    var tmp = encoder.m23(this.v2i_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.g23(tmp$ret$0);
  };
  protoOf(ULongSerializer).u1y = function (encoder, value) {
    return this.w2i(encoder, value instanceof ULong ? value.yq_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).x2i = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.d22(this.v2i_1).x21();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).v1y = function (decoder) {
    return new ULong(this.x2i(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.y2i_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_8(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).t1y = function () {
    return this.y2i_1;
  };
  protoOf(UIntSerializer).z2i = function (encoder, value) {
    var tmp = encoder.m23(this.y2i_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.f23(tmp$ret$0);
  };
  protoOf(UIntSerializer).u1y = function (encoder, value) {
    return this.z2i(encoder, value instanceof UInt ? value.nq_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).a2j = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.d22(this.y2i_1).w21();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).v1y = function (decoder) {
    return new UInt(this.a2j(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.b2j_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_10(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).t1y = function () {
    return this.b2j_1;
  };
  protoOf(UShortSerializer).c2j = function (encoder, value) {
    var tmp = encoder.m23(this.b2j_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.e23(tmp$ret$0);
  };
  protoOf(UShortSerializer).u1y = function (encoder, value) {
    return this.c2j(encoder, value instanceof UShort ? value.jr_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).d2j = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.d22(this.b2j_1).v21();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).v1y = function (decoder) {
    return new UShort(this.d2j(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.e2j_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_12(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).t1y = function () {
    return this.e2j_1;
  };
  protoOf(UByteSerializer).f2j = function (encoder, value) {
    var tmp = encoder.m23(this.e2j_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.d23(tmp$ret$0);
  };
  protoOf(UByteSerializer).u1y = function (encoder, value) {
    return this.f2j(encoder, value instanceof UByte ? value.cq_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).g2j = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.d22(this.e2j_1).u21();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).v1y = function (decoder) {
    return new UByte(this.g2j(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function PolymorphicModuleBuilder(baseClass, baseSerializer) {
    baseSerializer = baseSerializer === VOID ? null : baseSerializer;
    this.h2j_1 = baseClass;
    this.i2j_1 = baseSerializer;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.j2j_1 = ArrayList_init_$Create$_0();
    this.k2j_1 = null;
    this.l2j_1 = null;
  }
  protoOf(PolymorphicModuleBuilder).m2j = function (subclass, serializer) {
    this.j2j_1.n(to(subclass, serializer));
  };
  protoOf(PolymorphicModuleBuilder).n2j = function (builder) {
    if (!(this.i2j_1 == null)) {
      builder.u2j(this.h2j_1, this.h2j_1, this.i2j_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.j2j_1.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var kclass = element.cc();
      var serializer = element.dc();
      var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var tmp$ret$0 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
      builder.u2j(this.h2j_1, tmp, tmp$ret$0);
    }
    var defaultSerializer = this.k2j_1;
    if (!(defaultSerializer == null)) {
      builder.v2j(this.h2j_1, defaultSerializer, false);
    }
    var defaultDeserializer = this.l2j_1;
    if (!(defaultDeserializer == null)) {
      builder.w2j(this.h2j_1, defaultDeserializer, false);
    }
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).c20 = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.d20(kClass, typeArgumentsSerializers) : $super.d20.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.y2j_1 = class2ContextualFactory;
    this.z2j_1 = polyBase2Serializers;
    this.a2k_1 = polyBase2DefaultSerializerProvider;
    this.b2k_1 = polyBase2NamedSerializers;
    this.c2k_1 = polyBase2DefaultDeserializerProvider;
    this.d2k_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).b20 = function () {
    return this.d2k_1;
  };
  protoOf(SerialModuleImpl).f24 = function (baseClass, value) {
    if (!baseClass.hc(value))
      return null;
    var tmp0_safe_receiver = this.z2j_1.k2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.a2k_1.k2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).e24 = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.b2k_1.k2(baseClass);
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
    var tmp_1 = this.c2k_1.k2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).d20 = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.y2j_1.k2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e2k(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).x2j = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.y2j_1.x().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.y();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.z();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.h2k_1;
        collector.i2k(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.g2k(kclass, serial.f2k_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.z2j_1.x().p();
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
        collector.j2k(tmp_1, tmp_2, tmp$ret$11);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.a2k_1.x().p();
    while (_iterator__ex2g4s_2.q()) {
      var element_2 = _iterator__ex2g4s_2.r();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.y();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.z();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.k2k(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.c2k_1.x().p();
    while (_iterator__ex2g4s_3.q()) {
      var element_3 = _iterator__ex2g4s_3.r();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.y();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.z();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.l2k(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.h2k_1 = serializer;
  }
  protoOf(Argless).e2k = function (typeArgumentsSerializers) {
    return this.h2k_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.h2k_1, this.h2k_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.h2k_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.f2k_1 = provider;
  }
  protoOf(WithTypeArguments).e2k = function (typeArgumentsSerializers) {
    return this.f2k_1(typeArgumentsSerializers);
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
    tmp.o2j_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.p2j_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.q2j_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.r2j_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.s2j_1 = HashMap_init_$Create$();
    this.t2j_1 = false;
  }
  protoOf(SerializersModuleBuilder).i2k = function (kClass, serializer) {
    return this.m2k(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).g2k = function (kClass, provider) {
    return this.m2k(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).j2k = function (baseClass, actualClass, actualSerializer) {
    this.u2j(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).k2k = function (baseClass, defaultSerializerProvider) {
    this.v2j(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).l2k = function (baseClass, defaultDeserializerProvider) {
    this.w2j(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).n2k = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.o2j_1.k2(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.o2j_1.n2(forClass, provider);
    if (isInterface_0(forClass))
      this.t2j_1 = true;
  };
  protoOf(SerializersModuleBuilder).m2k = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.n2k(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.n2k.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).v2j = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.q2j_1.k2(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString_0(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.q2j_1.n2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).w2j = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.s2j_1.k2(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString_0(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.s2j_1.n2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).o2k = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.t1y().u1z();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.p2j_1;
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
    var this_1 = this.r2j_1;
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
        names.o2(previousSerializer.t1y().u1z());
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
  protoOf(SerializersModuleBuilder).u2j = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.o2k(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.o2k.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).x27 = function () {
    return new SerialModuleImpl(this.o2j_1, this.p2j_1, this.q2j_1, this.r2j_1, this.s2j_1, this.t2j_1);
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
    this.p2k_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.p2k_1.equals(tmp0_other_with_cast.p2k_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.p2k_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.p2k_1) + ')';
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
    return mapOf([to(PrimitiveClasses_getInstance().md(), serializer_2(StringCompanionObject_instance)), to(getKClass(Char), serializer_3(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().pd(), CharArraySerializer()), to(PrimitiveClasses_getInstance().kd(), serializer_4(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().vd(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().jd(), serializer_5(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().ud(), FloatArraySerializer()), to(getKClass(Long), serializer_6(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().td(), LongArraySerializer()), to(getKClass(ULong), serializer_7(Companion_getInstance_3())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().id(), serializer_8(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().sd(), IntArraySerializer()), to(getKClass(UInt), serializer_9(Companion_getInstance_4())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().hd(), serializer_10(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().rd(), ShortArraySerializer()), to(getKClass(UShort), serializer_11(Companion_getInstance_5())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().gd(), serializer_12(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().qd(), ByteArraySerializer()), to(getKClass(UByte), serializer_13(Companion_getInstance_6())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().fd(), serializer_14(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().od(), BooleanArraySerializer()), to(getKClass(Unit), serializer_15(Unit_instance)), to(PrimitiveClasses_getInstance().ed(), NothingSerializer()), to(getKClass(Duration), serializer_16(Companion_getInstance())), to(getKClass(Uuid), serializer_17(Companion_getInstance_0()))]);
  }
  function get_isInterface(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().ed())
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
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().ed()) {
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
    return rootClass.equals(PrimitiveClasses_getInstance().ld());
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
          var tmp_1 = assocObject.w2a(args.slice());
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
    this.q2k_1 = $factory;
  }
  protoOf(createCache$1).e20 = function (key) {
    return this.q2k_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.r2k_1 = $factory;
  }
  protoOf(createParametrizedCache$1).f20 = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.r2k_1(key, types);
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
  protoOf(SerialDescriptorImpl).g20 = get_isNullable;
  protoOf(SerialDescriptorImpl).l20 = get_isInline;
  protoOf(AbstractDecoder).t22 = decodeSerializableElement$default;
  protoOf(AbstractDecoder).f22 = decodeSerializableValue;
  protoOf(AbstractDecoder).w22 = decodeSequentially;
  protoOf(AbstractDecoder).y22 = decodeCollectionSize;
  protoOf(AbstractEncoder).b24 = encodeNotNullMark;
  protoOf(AbstractEncoder).c24 = beginCollection;
  protoOf(AbstractEncoder).y23 = encodeSerializableValue;
  protoOf(AbstractEncoder).a24 = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).d24 = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).g20 = get_isNullable;
  protoOf(ListLikeDescriptor).l20 = get_isInline;
  protoOf(ListLikeDescriptor).n20 = get_annotations;
  protoOf(MapLikeDescriptor).g20 = get_isNullable;
  protoOf(MapLikeDescriptor).l20 = get_isInline;
  protoOf(MapLikeDescriptor).n20 = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).g20 = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).l20 = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).m2a = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).g20 = get_isNullable;
  protoOf(NothingSerialDescriptor).l20 = get_isInline;
  protoOf(NothingSerialDescriptor).n20 = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).g20 = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).l20 = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).n20 = get_annotations;
  protoOf(TaggedEncoder).c24 = beginCollection;
  protoOf(TaggedEncoder).y23 = encodeSerializableValue;
  protoOf(TaggedEncoder).a24 = encodeNullableSerializableValue;
  protoOf(TaggedEncoder).d24 = shouldEncodeElementDefault;
  protoOf(TaggedDecoder).t22 = decodeSerializableElement$default;
  protoOf(TaggedDecoder).f22 = decodeSerializableValue;
  protoOf(TaggedDecoder).w22 = decodeSequentially;
  protoOf(TaggedDecoder).y22 = decodeCollectionSize;
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
  _.$_$.q = IntSerializer_getInstance;
  _.$_$.r = LongSerializer_getInstance;
  _.$_$.s = StringSerializer_getInstance;
  _.$_$.t = ListSerializer;
  _.$_$.u = MapSerializer;
  _.$_$.v = SetSerializer;
  _.$_$.w = get_nullable;
  _.$_$.x = serializer_2;
  _.$_$.y = serializer_11;
  _.$_$.z = serializer_9;
  _.$_$.a1 = serializer_13;
  _.$_$.b1 = serializer_7;
  _.$_$.c1 = PolymorphicKind;
  _.$_$.d1 = PrimitiveKind;
  _.$_$.e1 = PrimitiveSerialDescriptor;
  _.$_$.f1 = get_annotations;
  _.$_$.g1 = get_isInline;
  _.$_$.h1 = get_isNullable;
  _.$_$.i1 = SerialDescriptor;
  _.$_$.j1 = ENUM;
  _.$_$.k1 = buildClassSerialDescriptor;
  _.$_$.l1 = buildSerialDescriptor;
  _.$_$.m1 = getContextualDescriptor;
  _.$_$.n1 = AbstractDecoder;
  _.$_$.o1 = AbstractEncoder;
  _.$_$.p1 = CompositeDecoder;
  _.$_$.q1 = CompositeEncoder;
  _.$_$.r1 = Decoder;
  _.$_$.s1 = Encoder;
  _.$_$.t1 = AbstractPolymorphicSerializer;
  _.$_$.u1 = ArrayListSerializer;
  _.$_$.v1 = ElementMarker;
  _.$_$.w1 = typeParametersSerializers;
  _.$_$.x1 = GeneratedSerializer;
  _.$_$.y1 = InlinePrimitiveDescriptor;
  _.$_$.z1 = LinkedHashMapSerializer;
  _.$_$.a2 = LinkedHashSetSerializer;
  _.$_$.b2 = NamedValueDecoder;
  _.$_$.c2 = NamedValueEncoder;
  _.$_$.d2 = PluginGeneratedSerialDescriptor;
  _.$_$.e2 = SerializerFactory;
  _.$_$.f2 = createAnnotatedEnumSerializer;
  _.$_$.g2 = createSimpleEnumSerializer;
  _.$_$.h2 = jsonCachedSerialNames;
  _.$_$.i2 = throwMissingFieldException;
  _.$_$.j2 = EmptySerializersModule_0;
  _.$_$.k2 = PolymorphicModuleBuilder;
  _.$_$.l2 = SerializersModuleBuilder;
  _.$_$.m2 = contextual;
  _.$_$.n2 = SerializersModuleCollector;
  _.$_$.o2 = BinaryFormat;
  _.$_$.p2 = DeserializationStrategy;
  _.$_$.q2 = KSerializer;
  _.$_$.r2 = MissingFieldException;
  _.$_$.s2 = SealedClassSerializer;
  _.$_$.t2 = SerializationException;
  _.$_$.u2 = SerializationStrategy;
  _.$_$.v2 = StringFormat;
  _.$_$.w2 = findPolymorphicSerializer_0;
  _.$_$.x2 = findPolymorphicSerializer;
  _.$_$.y2 = serializerOrNull_0;
  _.$_$.z2 = serializerOrNull;
  _.$_$.a3 = serializer_0;
  _.$_$.b3 = serializer_1;
  _.$_$.c3 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
