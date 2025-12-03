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
  var protoOf = kotlin_kotlin.$_$.wc;
  var initMetadataForInterface = kotlin_kotlin.$_$.wb;
  var VOID = kotlin_kotlin.$_$.j;
  var asList = kotlin_kotlin.$_$.o6;
  var objectCreate = kotlin_kotlin.$_$.vc;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.j5;
  var Unit_instance = kotlin_kotlin.$_$.w5;
  var emptyList = kotlin_kotlin.$_$.o7;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.o;
  var lazy = kotlin_kotlin.$_$.gi;
  var toString = kotlin_kotlin.$_$.ad;
  var initMetadataForClass = kotlin_kotlin.$_$.sb;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var KProperty1 = kotlin_kotlin.$_$.od;
  var getPropertyCallableRef = kotlin_kotlin.$_$.pb;
  var THROW_CCE = kotlin_kotlin.$_$.ih;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var zip = kotlin_kotlin.$_$.ca;
  var toMap = kotlin_kotlin.$_$.u9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var mapCapacity = kotlin_kotlin.$_$.q8;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var KtMap = kotlin_kotlin.$_$.g6;
  var isInterface = kotlin_kotlin.$_$.hc;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.x1;
  var captureStack = kotlin_kotlin.$_$.eb;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.z1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.b2;
  var IllegalArgumentException = kotlin_kotlin.$_$.ah;
  var listOf = kotlin_kotlin.$_$.o8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var KClass = kotlin_kotlin.$_$.kd;
  var Triple = kotlin_kotlin.$_$.kh;
  var getKClass = kotlin_kotlin.$_$.g;
  var Pair = kotlin_kotlin.$_$.fh;
  var Entry = kotlin_kotlin.$_$.e6;
  var KtMutableMap = kotlin_kotlin.$_$.i6;
  var LinkedHashMap = kotlin_kotlin.$_$.b6;
  var HashMap = kotlin_kotlin.$_$.z5;
  var KtSet = kotlin_kotlin.$_$.l6;
  var KtMutableSet = kotlin_kotlin.$_$.j6;
  var LinkedHashSet = kotlin_kotlin.$_$.c6;
  var HashSet = kotlin_kotlin.$_$.a6;
  var Collection = kotlin_kotlin.$_$.y5;
  var KtList = kotlin_kotlin.$_$.d6;
  var KtMutableList = kotlin_kotlin.$_$.h6;
  var ArrayList = kotlin_kotlin.$_$.x5;
  var copyToArray = kotlin_kotlin.$_$.j7;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.m3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.k3;
  var Result = kotlin_kotlin.$_$.gh;
  var ensureNotNull = kotlin_kotlin.$_$.ai;
  var equals = kotlin_kotlin.$_$.mb;
  var getStringHashCode = kotlin_kotlin.$_$.qb;
  var isBlank = kotlin_kotlin.$_$.me;
  var toList = kotlin_kotlin.$_$.r9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var toHashSet = kotlin_kotlin.$_$.n9;
  var toBooleanArray = kotlin_kotlin.$_$.l9;
  var withIndex = kotlin_kotlin.$_$.ba;
  var to = kotlin_kotlin.$_$.pi;
  var lazy_0 = kotlin_kotlin.$_$.hi;
  var contentEquals = kotlin_kotlin.$_$.u6;
  var until = kotlin_kotlin.$_$.jd;
  var joinToString = kotlin_kotlin.$_$.h8;
  var initMetadataForObject = kotlin_kotlin.$_$.yb;
  var Long = kotlin_kotlin.$_$.ch;
  var Char = kotlin_kotlin.$_$.sg;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.z2;
  var Duration = kotlin_kotlin.$_$.mg;
  var Companion_getInstance = kotlin_kotlin.$_$.m5;
  var Uuid = kotlin_kotlin.$_$.og;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.o5;
  var toIntOrNull = kotlin_kotlin.$_$.wf;
  var hashCode = kotlin_kotlin.$_$.rb;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.t;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.d1;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.c1;
  var isArray = kotlin_kotlin.$_$.zb;
  var arrayIterator = kotlin_kotlin.$_$.cb;
  var step = kotlin_kotlin.$_$.id;
  var getValue = kotlin_kotlin.$_$.c8;
  var longArray = kotlin_kotlin.$_$.oc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.tb;
  var get_lastIndex = kotlin_kotlin.$_$.j8;
  var countTrailingZeroBits = kotlin_kotlin.$_$.yh;
  var getOrNull = kotlin_kotlin.$_$.a8;
  var indexOf = kotlin_kotlin.$_$.d8;
  var contentToString = kotlin_kotlin.$_$.y6;
  var Enum = kotlin_kotlin.$_$.xg;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.x;
  var toString_0 = kotlin_kotlin.$_$.ni;
  var KTypeParameter = kotlin_kotlin.$_$.pd;
  var contentHashCode = kotlin_kotlin.$_$.x6;
  var booleanArray = kotlin_kotlin.$_$.db;
  var emptyMap = kotlin_kotlin.$_$.p7;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.p5;
  var isCharArray = kotlin_kotlin.$_$.cc;
  var charArray = kotlin_kotlin.$_$.gb;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.f5;
  var isDoubleArray = kotlin_kotlin.$_$.ec;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.g5;
  var isFloatArray = kotlin_kotlin.$_$.fc;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.q5;
  var isLongArray = kotlin_kotlin.$_$.ic;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.u5;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.p4;
  var ULongArray = kotlin_kotlin.$_$.ph;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.l4;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i4;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.n4;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j4;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.h5;
  var isIntArray = kotlin_kotlin.$_$.gc;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.t5;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.g4;
  var UIntArray = kotlin_kotlin.$_$.nh;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.c4;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.w3;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.e4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.y3;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.i5;
  var isShortArray = kotlin_kotlin.$_$.kc;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.v5;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.y4;
  var UShortArray = kotlin_kotlin.$_$.rh;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.u4;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.r4;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.w4;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.s4;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.e5;
  var isByteArray = kotlin_kotlin.$_$.bc;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.s5;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.u3;
  var UByteArray = kotlin_kotlin.$_$.lh;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.r3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.n3;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.s3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.o3;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.d5;
  var isBooleanArray = kotlin_kotlin.$_$.ac;
  var coerceAtLeast = kotlin_kotlin.$_$.ed;
  var copyOf = kotlin_kotlin.$_$.d7;
  var copyOf_0 = kotlin_kotlin.$_$.f7;
  var copyOf_1 = kotlin_kotlin.$_$.g7;
  var copyOf_2 = kotlin_kotlin.$_$.b7;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.q4;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.m4;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.o4;
  var copyOf_3 = kotlin_kotlin.$_$.i7;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.h4;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.d4;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.f4;
  var copyOf_4 = kotlin_kotlin.$_$.a7;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.z4;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.v4;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.x4;
  var copyOf_5 = kotlin_kotlin.$_$.e7;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.v3;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.q3;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.t3;
  var copyOf_6 = kotlin_kotlin.$_$.c7;
  var Unit = kotlin_kotlin.$_$.th;
  var trimIndent = kotlin_kotlin.$_$.jg;
  var charSequenceLength = kotlin_kotlin.$_$.ib;
  var last = kotlin_kotlin.$_$.m8;
  var lastOrNull = kotlin_kotlin.$_$.l8;
  var get_lastIndex_0 = kotlin_kotlin.$_$.k8;
  var ULong = kotlin_kotlin.$_$.qh;
  var UInt = kotlin_kotlin.$_$.oh;
  var UShort = kotlin_kotlin.$_$.sh;
  var UByte = kotlin_kotlin.$_$.mh;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ii;
  var asSequence = kotlin_kotlin.$_$.p6;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.l5;
  var mapOf = kotlin_kotlin.$_$.s8;
  var get_js = kotlin_kotlin.$_$.mc;
  var findAssociatedObject = kotlin_kotlin.$_$.e;
  var get_indices = kotlin_kotlin.$_$.f8;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var get_indices_0 = kotlin_kotlin.$_$.e8;
  var Companion_instance = kotlin_kotlin.$_$.r5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.i3;
  var createFailure = kotlin_kotlin.$_$.zh;
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
    return deserializer.i1y(this);
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
    return $super === VOID ? this.f22(descriptor, index, deserializer, previousValue) : $super.f22.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.t21(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.h1y(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.g1y().t1z();
    if (isNullabilitySupported) {
      return this.l23(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.o22();
    } else {
      this.o23();
      this.l23(serializer, value);
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
    return this.t2j(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
    $this.k1y_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, objectCreate(protoOf(PolymorphicSerializer)));
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.u1y('type', serializer_2(StringCompanionObject_instance).g1y());
      $this$buildSerialDescriptor.u1y('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.j1y_1.hc() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.o1y_1 = this$0.k1y_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.j1y_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.j1y_1 = baseClass;
    this.k1y_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.l1y_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).v1y = function () {
    return this.j1y_1;
  };
  protoOf(PolymorphicSerializer).g1y = function () {
    var tmp0 = this.l1y_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.z();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.j1y_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.y1y(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.v1y());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.x1y(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.v1y());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.g1y();
    }, null);
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.a1z_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, objectCreate(protoOf(SealedClassSerializer)));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = this$0.d1z_1.x().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.component1' call
        var name = element.y();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element.z();
        $this$buildSerialDescriptor.u1y(name, serializer.g1y());
      }
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.u1y('type', serializer_2(StringCompanionObject_instance).g1y());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.z1y_1.hc() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0));
      $this$buildSerialDescriptor.u1y('value', elementDescriptor);
      $this$buildSerialDescriptor.o1y_1 = this$0.a1z_1;
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
    this.e1z_1 = $this;
  }
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).f1z = function () {
    return this.e1z_1.p();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).g1z = function (element) {
    return element.z().g1y().h1z();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).i1z = function (element) {
    return this.g1z((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.z1y_1 = baseClass;
    this.a1z_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.b1z_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.z1y_1.hc() + ' should be marked @Serializable');
    }
    this.c1z_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    // Inline function 'kotlin.collections.groupingBy' call
    var this_0 = this.c1z_1.x();
    // Inline function 'kotlin.collections.aggregate' call
    var tmp0 = new SealedClassSerializer$$inlined$groupingBy$1(this_0);
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.collections.aggregateTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tmp0.f1z();
    while (_iterator__ex2g4s.q()) {
      var e = _iterator__ex2g4s.r();
      var key = tmp0.i1z(e);
      var accumulator = destination.k2(key);
      accumulator == null && !destination.i2(key);
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var message = "Multiple sealed subclasses of '" + toString(this.z1y_1) + "' have the same serial name '" + key + "':" + (" '" + toString(accumulator.y()) + "', '" + toString(e.y()) + "'");
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
    tmp_1.d1z_1 = destination_0;
  }
  protoOf(SealedClassSerializer).v1y = function () {
    return this.z1y_1;
  };
  protoOf(SealedClassSerializer).g1y = function () {
    var tmp0 = this.b1z_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return tmp0.z();
  };
  protoOf(SealedClassSerializer).x1y = function (decoder, klassName) {
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.d1z_1;
    var tmp0_elvis_lhs = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).k2(klassName);
    return tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).x1y.call(this, decoder, klassName) : tmp0_elvis_lhs;
  };
  protoOf(SealedClassSerializer).y1y = function (encoder, value) {
    var tmp0_elvis_lhs = this.c1z_1.k2(getKClassFromExpression(value));
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? protoOf(AbstractPolymorphicSerializer).y1y.call(this, encoder, value) : tmp0_elvis_lhs;
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
      return receiver.g1y();
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
    this.n1z_1 = missingFields;
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
      if (isInterface_0(rootClass) && !(_this__u8e3s4.p1z(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.o1z()) {
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
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.p1z(rootClass) : tmp0_elvis_lhs;
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
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.q1z(rootClass, serializers) : tmp3_elvis_lhs;
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().r1z(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().r1z(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().s1z(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().s1z(clazz, types);
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
    if (_this__u8e3s4.g1y().t1z()) {
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
    this.u1z_1 = original;
    this.v1z_1 = kClass;
    this.w1z_1 = this.u1z_1.h1z() + '<' + this.v1z_1.hc() + '>';
  }
  protoOf(ContextDescriptor).h1z = function () {
    return this.w1z_1;
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
    return equals(this.u1z_1, another.u1z_1) && another.v1z_1.equals(this.v1z_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.v1z_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.w1z_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.v1z_1) + ', original: ' + toString(this.u1z_1) + ')';
  };
  protoOf(ContextDescriptor).x1z = function () {
    return this.u1z_1.x1z();
  };
  protoOf(ContextDescriptor).t1z = function () {
    return this.u1z_1.t1z();
  };
  protoOf(ContextDescriptor).y1z = function () {
    return this.u1z_1.y1z();
  };
  protoOf(ContextDescriptor).z1z = function () {
    return this.u1z_1.z1z();
  };
  protoOf(ContextDescriptor).a20 = function () {
    return this.u1z_1.a20();
  };
  protoOf(ContextDescriptor).b20 = function (index) {
    return this.u1z_1.b20(index);
  };
  protoOf(ContextDescriptor).c20 = function (name) {
    return this.u1z_1.c20(name);
  };
  protoOf(ContextDescriptor).d20 = function (index) {
    return this.u1z_1.d20(index);
  };
  protoOf(ContextDescriptor).e20 = function (index) {
    return this.u1z_1.e20(index);
  };
  protoOf(ContextDescriptor).f20 = function (index) {
    return this.u1z_1.f20(index);
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.p1z(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.g1y();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.v1z_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.g20_1);
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
    this.k20_1 = $this_elementDescriptors;
    this.j20_1 = $this_elementDescriptors.z1z();
  }
  protoOf(elementDescriptors$1).q = function () {
    return this.j20_1 > 0;
  };
  protoOf(elementDescriptors$1).r = function () {
    var tmp = this.k20_1.z1z();
    var _unary__edvuaz = this.j20_1;
    this.j20_1 = _unary__edvuaz - 1 | 0;
    return this.k20_1.e20(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.l20_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).p = function () {
    return new elementDescriptors$1(this.l20_1);
  };
  function elementNames$1($this_elementNames) {
    this.n20_1 = $this_elementNames;
    this.m20_1 = $this_elementNames.z1z();
  }
  protoOf(elementNames$1).q = function () {
    return this.m20_1 > 0;
  };
  protoOf(elementNames$1).r = function () {
    var tmp = this.n20_1.z1z();
    var _unary__edvuaz = this.m20_1;
    this.m20_1 = _unary__edvuaz - 1 | 0;
    return this.n20_1.b20(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.o20_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).p = function () {
    return new elementNames$1(this.o20_1);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.p1y_1.s(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.m1y_1 = serialName;
    this.n1y_1 = false;
    this.o1y_1 = emptyList();
    this.p1y_1 = ArrayList_init_$Create$_0();
    this.q1y_1 = HashSet_init_$Create$();
    this.r1y_1 = ArrayList_init_$Create$_0();
    this.s1y_1 = ArrayList_init_$Create$_0();
    this.t1y_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).p20 = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.q1y_1.n(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.m1y_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.p1y_1.n(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.r1y_1.n(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.s1y_1.n(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.t1y_1.n(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).u1y = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.p20(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.p20.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.b21_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.z();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.a21_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.b20(it) + ': ' + this$0.e20(it).h1z();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.q20_1 = serialName;
    this.r20_1 = kind;
    this.s20_1 = elementsCount;
    this.t20_1 = builder.o1y_1;
    this.u20_1 = toHashSet(builder.p1y_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.p1y_1;
    tmp.v20_1 = copyToArray(this_0);
    this.w20_1 = compactArray(builder.r1y_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.s1y_1;
    tmp_0.x20_1 = copyToArray(this_1);
    this.y20_1 = toBooleanArray(builder.t1y_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.v20_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$2 = to(item.wh_1, item.vh_1);
      destination.n(tmp$ret$2);
    }
    tmp_1.z20_1 = toMap(destination);
    this.a21_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.b21_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).h1z = function () {
    return this.q20_1;
  };
  protoOf(SerialDescriptorImpl).x1z = function () {
    return this.r20_1;
  };
  protoOf(SerialDescriptorImpl).z1z = function () {
    return this.s20_1;
  };
  protoOf(SerialDescriptorImpl).a20 = function () {
    return this.t20_1;
  };
  protoOf(SerialDescriptorImpl).c21 = function () {
    return this.u20_1;
  };
  protoOf(SerialDescriptorImpl).b20 = function (index) {
    return getChecked(this.v20_1, index);
  };
  protoOf(SerialDescriptorImpl).c20 = function (name) {
    var tmp0_elvis_lhs = this.z20_1.k2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).d20 = function (index) {
    return getChecked(this.x20_1, index);
  };
  protoOf(SerialDescriptorImpl).e20 = function (index) {
    return getChecked(this.w20_1, index);
  };
  protoOf(SerialDescriptorImpl).f20 = function (index) {
    return getChecked_0(this.y20_1, index);
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
      if (!(this.h1z() === other.h1z())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.a21_1, other.a21_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.z1z() === other.z1z())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.z1z();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.e20(index).h1z() === other.e20(index).h1z())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.e20(index).x1z(), other.e20(index).x1z())) {
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
    var tmp = until(0, this.s20_1);
    var tmp_0 = this.q20_1 + '(';
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.p1y_1.s(), toList(typeParameters), sdBuilder);
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
  protoOf(AbstractDecoder).d21 = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).e21 = function () {
    return true;
  };
  protoOf(AbstractDecoder).f21 = function () {
    return null;
  };
  protoOf(AbstractDecoder).g21 = function () {
    var tmp = this.d21();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).h21 = function () {
    var tmp = this.d21();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).i21 = function () {
    var tmp = this.d21();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).j21 = function () {
    var tmp = this.d21();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).k21 = function () {
    var tmp = this.d21();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).l21 = function () {
    var tmp = this.d21();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).m21 = function () {
    var tmp = this.d21();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).n21 = function () {
    var tmp = this.d21();
    return tmp instanceof Char ? tmp.l1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).o21 = function () {
    var tmp = this.d21();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).p21 = function (enumDescriptor) {
    var tmp = this.d21();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).q21 = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).r21 = function (deserializer, previousValue) {
    return this.s21(deserializer);
  };
  protoOf(AbstractDecoder).t21 = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).u21 = function (descriptor) {
  };
  protoOf(AbstractDecoder).v21 = function (descriptor, index) {
    return this.g21();
  };
  protoOf(AbstractDecoder).w21 = function (descriptor, index) {
    return this.h21();
  };
  protoOf(AbstractDecoder).x21 = function (descriptor, index) {
    return this.i21();
  };
  protoOf(AbstractDecoder).y21 = function (descriptor, index) {
    return this.j21();
  };
  protoOf(AbstractDecoder).z21 = function (descriptor, index) {
    return this.k21();
  };
  protoOf(AbstractDecoder).a22 = function (descriptor, index) {
    return this.l21();
  };
  protoOf(AbstractDecoder).b22 = function (descriptor, index) {
    return this.m21();
  };
  protoOf(AbstractDecoder).c22 = function (descriptor, index) {
    return this.n21();
  };
  protoOf(AbstractDecoder).d22 = function (descriptor, index) {
    return this.o21();
  };
  protoOf(AbstractDecoder).e22 = function (descriptor, index) {
    return this.q21(descriptor.e20(index));
  };
  protoOf(AbstractDecoder).f22 = function (descriptor, index, deserializer, previousValue) {
    return this.r21(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).h22 = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.g1y().t1z();
    var tmp;
    if (isNullabilitySupported || this.e21()) {
      tmp = this.r21(deserializer, previousValue);
    } else {
      tmp = this.f21();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).t21 = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).u21 = function (descriptor) {
  };
  protoOf(AbstractEncoder).m22 = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).n22 = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).o22 = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).p22 = function (value) {
    return this.n22(value);
  };
  protoOf(AbstractEncoder).q22 = function (value) {
    return this.n22(value);
  };
  protoOf(AbstractEncoder).r22 = function (value) {
    return this.n22(value);
  };
  protoOf(AbstractEncoder).s22 = function (value) {
    return this.n22(value);
  };
  protoOf(AbstractEncoder).t22 = function (value) {
    return this.n22(value);
  };
  protoOf(AbstractEncoder).u22 = function (value) {
    return this.n22(value);
  };
  protoOf(AbstractEncoder).v22 = function (value) {
    return this.n22(value);
  };
  protoOf(AbstractEncoder).w22 = function (value) {
    return this.n22(new Char(value));
  };
  protoOf(AbstractEncoder).x22 = function (value) {
    return this.n22(value);
  };
  protoOf(AbstractEncoder).y22 = function (enumDescriptor, index) {
    return this.n22(index);
  };
  protoOf(AbstractEncoder).z22 = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).a23 = function (descriptor, index, value) {
    if (this.m22(descriptor, index)) {
      this.p22(value);
    }
  };
  protoOf(AbstractEncoder).b23 = function (descriptor, index, value) {
    if (this.m22(descriptor, index)) {
      this.q22(value);
    }
  };
  protoOf(AbstractEncoder).c23 = function (descriptor, index, value) {
    if (this.m22(descriptor, index)) {
      this.r22(value);
    }
  };
  protoOf(AbstractEncoder).d23 = function (descriptor, index, value) {
    if (this.m22(descriptor, index)) {
      this.s22(value);
    }
  };
  protoOf(AbstractEncoder).e23 = function (descriptor, index, value) {
    if (this.m22(descriptor, index)) {
      this.t22(value);
    }
  };
  protoOf(AbstractEncoder).f23 = function (descriptor, index, value) {
    if (this.m22(descriptor, index)) {
      this.u22(value);
    }
  };
  protoOf(AbstractEncoder).g23 = function (descriptor, index, value) {
    if (this.m22(descriptor, index)) {
      this.v22(value);
    }
  };
  protoOf(AbstractEncoder).h23 = function (descriptor, index, value) {
    if (this.m22(descriptor, index)) {
      this.w22(value);
    }
  };
  protoOf(AbstractEncoder).i23 = function (descriptor, index, value) {
    if (this.m22(descriptor, index)) {
      this.x22(value);
    }
  };
  protoOf(AbstractEncoder).j23 = function (descriptor, index) {
    return this.m22(descriptor, index) ? this.z22(descriptor.e20(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).k23 = function (descriptor, index, serializer, value) {
    if (this.m22(descriptor, index)) {
      this.l23(serializer, value);
    }
  };
  protoOf(AbstractEncoder).m23 = function (descriptor, index, serializer, value) {
    if (this.m22(descriptor, index)) {
      this.n23(serializer, value);
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
    var klassName = compositeDecoder.d22($this.g1y(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.g22($this.g1y(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).w1y = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.g1y();
    var composite = encoder.t21(descriptor);
    composite.i23(this.g1y(), 0, actualSerializer.g1y().h1z());
    var tmp = this.g1y();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.k23(tmp, 1, tmp$ret$0, value);
    composite.u21(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).h1y = function (encoder, value) {
    return this.w1y(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).i1y = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.g1y();
    var composite = decoder.t21(descriptor);
    var tmp$ret$0;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.j22()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.k22(this.g1y());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.d22(this.g1y(), index);
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
            value = composite.g22(this.g1y(), index, serializer);
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
    composite.u21(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).x1y = function (decoder, klassName) {
    return decoder.i22().r23(this.v1y(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).y1y = function (encoder, value) {
    return encoder.i22().s23(this.v1y(), value);
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
    this.t23_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).g1y = function () {
    return this.t23_1;
  };
  protoOf(NothingSerializer_0).u23 = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).h1y = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.u23(encoder, tmp);
  };
  protoOf(NothingSerializer_0).i1y = function (decoder) {
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
    this.v23_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).g1y = function () {
    return this.v23_1;
  };
  protoOf(DurationSerializer).w23 = function (encoder, value) {
    encoder.x22(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).h1y = function (encoder, value) {
    return this.w23(encoder, value instanceof Duration ? value.fg_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).x23 = function (decoder) {
    return Companion_getInstance().co(decoder.o21());
  };
  protoOf(DurationSerializer).i1y = function (decoder) {
    return new Duration(this.x23(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.y23_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).g1y = function () {
    return this.y23_1;
  };
  protoOf(UuidSerializer).z23 = function (encoder, value) {
    encoder.x22(value.toString());
  };
  protoOf(UuidSerializer).h1y = function (encoder, value) {
    return this.z23(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).i1y = function (decoder) {
    return Companion_getInstance_0().fp(decoder.o21());
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
  protoOf(ArrayListClassDesc).h1z = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).h1z = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).h1z = function () {
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
  protoOf(ArrayClassDesc).h1z = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.c24_1 = elementDescriptor;
    this.d24_1 = 1;
  }
  protoOf(ListLikeDescriptor).x1z = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).z1z = function () {
    return this.d24_1;
  };
  protoOf(ListLikeDescriptor).b20 = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).c20 = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).f20 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.h1z() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).d20 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.h1z() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).e20 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.h1z() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.c24_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.c24_1, other.c24_1) && this.h1z() === other.h1z())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.c24_1), 31) + getStringHashCode(this.h1z()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.h1z() + '(' + toString(this.c24_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.i24_1 = serialName;
    this.j24_1 = keyDescriptor;
    this.k24_1 = valueDescriptor;
    this.l24_1 = 2;
  }
  protoOf(MapLikeDescriptor).h1z = function () {
    return this.i24_1;
  };
  protoOf(MapLikeDescriptor).x1z = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).z1z = function () {
    return this.l24_1;
  };
  protoOf(MapLikeDescriptor).b20 = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).c20 = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).f20 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.h1z() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).d20 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.h1z() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).e20 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.h1z() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.j24_1;
        break;
      case 1:
        tmp = this.k24_1;
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
    if (!(this.h1z() === other.h1z()))
      return false;
    if (!equals(this.j24_1, other.j24_1))
      return false;
    if (!equals(this.k24_1, other.k24_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.h1z());
    result = imul(31, result) + hashCode(this.j24_1) | 0;
    result = imul(31, result) + hashCode(this.k24_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.h1z() + '(' + toString(this.j24_1) + ', ' + toString(this.k24_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.q24_1 = primitive.h1z() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).h1z = function () {
    return this.q24_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.s24_1 = new ArrayListClassDesc(element.g1y());
  }
  protoOf(ArrayListSerializer).g1y = function () {
    return this.s24_1;
  };
  protoOf(ArrayListSerializer).t24 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).u24 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(ArrayListSerializer).v24 = function (_this__u8e3s4) {
    return this.u24(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).w24 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).x24 = function (_this__u8e3s4) {
    return this.w24(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).y24 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).z24 = function (_this__u8e3s4) {
    return this.y24((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).a25 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.a6(size);
  };
  protoOf(ArrayListSerializer).b25 = function (_this__u8e3s4, size) {
    return this.a25(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).c25 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.g2(index, element);
  };
  protoOf(ArrayListSerializer).d25 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.c25(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.o25_1 = new HashSetClassDesc(eSerializer.g1y());
  }
  protoOf(HashSetSerializer).g1y = function () {
    return this.o25_1;
  };
  protoOf(HashSetSerializer).t24 = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).p25 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(HashSetSerializer).v24 = function (_this__u8e3s4) {
    return this.p25(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).q25 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).x24 = function (_this__u8e3s4) {
    return this.q25(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).r25 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).z24 = function (_this__u8e3s4) {
    return this.r25((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).s25 = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).b25 = function (_this__u8e3s4, size) {
    return this.s25(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).t25 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.n(element);
  };
  protoOf(HashSetSerializer).d25 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.t25(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.v25_1 = new LinkedHashSetClassDesc(eSerializer.g1y());
  }
  protoOf(LinkedHashSetSerializer).g1y = function () {
    return this.v25_1;
  };
  protoOf(LinkedHashSetSerializer).t24 = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).w25 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(LinkedHashSetSerializer).v24 = function (_this__u8e3s4) {
    return this.w25(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).x25 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).x24 = function (_this__u8e3s4) {
    return this.x25(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).r25 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).z24 = function (_this__u8e3s4) {
    return this.r25((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).y25 = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).b25 = function (_this__u8e3s4, size) {
    return this.y25(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).z25 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.n(element);
  };
  protoOf(LinkedHashSetSerializer).d25 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.z25(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.c26_1 = new HashMapClassDesc(kSerializer.g1y(), vSerializer.g1y());
  }
  protoOf(HashMapSerializer).g1y = function () {
    return this.c26_1;
  };
  protoOf(HashMapSerializer).d26 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(HashMapSerializer).e26 = function (_this__u8e3s4) {
    return this.d26((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).f26 = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.x().p();
  };
  protoOf(HashMapSerializer).g26 = function (_this__u8e3s4) {
    return this.f26((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).t24 = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).h26 = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.s(), 2);
  };
  protoOf(HashMapSerializer).v24 = function (_this__u8e3s4) {
    return this.h26(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).i26 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).x24 = function (_this__u8e3s4) {
    return this.i26(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).j26 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).z24 = function (_this__u8e3s4) {
    return this.j26((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).k26 = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).b25 = function (_this__u8e3s4, size) {
    return this.k26(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.r26_1 = new LinkedHashMapClassDesc(kSerializer.g1y(), vSerializer.g1y());
  }
  protoOf(LinkedHashMapSerializer).g1y = function () {
    return this.r26_1;
  };
  protoOf(LinkedHashMapSerializer).d26 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(LinkedHashMapSerializer).e26 = function (_this__u8e3s4) {
    return this.d26((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).f26 = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.x().p();
  };
  protoOf(LinkedHashMapSerializer).g26 = function (_this__u8e3s4) {
    return this.f26((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).t24 = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).s26 = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.s(), 2);
  };
  protoOf(LinkedHashMapSerializer).v24 = function (_this__u8e3s4) {
    return this.s26(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).t26 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).x24 = function (_this__u8e3s4) {
    return this.t26(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).j26 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).z24 = function (_this__u8e3s4) {
    return this.j26((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).u26 = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).b25 = function (_this__u8e3s4, size) {
    return this.u26(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.w26_1 = kClass;
    this.x26_1 = new ArrayClassDesc(eSerializer.g1y());
  }
  protoOf(ReferenceArraySerializer).g1y = function () {
    return this.x26_1;
  };
  protoOf(ReferenceArraySerializer).y26 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).e26 = function (_this__u8e3s4) {
    return this.y26((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).z26 = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).g26 = function (_this__u8e3s4) {
    return this.z26((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).t24 = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).a27 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(ReferenceArraySerializer).v24 = function (_this__u8e3s4) {
    return this.a27(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).b27 = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.w26_1);
  };
  protoOf(ReferenceArraySerializer).x24 = function (_this__u8e3s4) {
    return this.b27(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).c27 = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).z24 = function (_this__u8e3s4) {
    return this.c27((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).d27 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.a6(size);
  };
  protoOf(ReferenceArraySerializer).b25 = function (_this__u8e3s4, size) {
    return this.d27(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).e27 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.g2(index, element);
  };
  protoOf(ReferenceArraySerializer).d25 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.e27(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).f25 = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(CollectionSerializer).e26 = function (_this__u8e3s4) {
    return this.f25((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).g25 = function (_this__u8e3s4) {
    return _this__u8e3s4.p();
  };
  protoOf(CollectionSerializer).g26 = function (_this__u8e3s4) {
    return this.g25((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.l26_1 = keySerializer;
    this.m26_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).n26 = function (decoder, builder, startIndex, size) {
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
        this.o26(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).j25 = function (decoder, builder, startIndex, size) {
    return this.n26(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).o26 = function (decoder, index, builder, checkIndex) {
    var key = decoder.g22(this.g1y(), index, this.l26_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.k22(this.g1y());
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
      var tmp_2 = this.m26_1.g1y().x1z();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.f22(this.g1y(), vIndex, this.m26_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.g22(this.g1y(), vIndex, this.m26_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.n2(key, value);
  };
  protoOf(MapLikeSerializer).k25 = function (decoder, index, builder, checkIndex) {
    return this.o26(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).i25 = function (encoder, value) {
    var size = this.e26(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.g1y();
    var composite = encoder.p23(descriptor, size);
    var iterator = this.g26(value);
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
      var tmp = this.g1y();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.k23(tmp, _unary__edvuaz, this.l26_1, k);
      var tmp_0 = this.g1y();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.k23(tmp_0, _unary__edvuaz_0, this.m26_1, v);
    }
    composite.u21(descriptor);
  };
  protoOf(MapLikeSerializer).h1y = function (encoder, value) {
    return this.i25(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.h25_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).i25 = function (encoder, value) {
    var size = this.e26(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.g1y();
    var composite = encoder.p23(descriptor, size);
    var iterator = this.g26(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.k23(this.g1y(), index, this.h25_1, iterator.r());
      }
       while (inductionVariable < size);
    composite.u21(descriptor);
  };
  protoOf(CollectionLikeSerializer).h1y = function (encoder, value) {
    return this.i25(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).j25 = function (decoder, builder, startIndex, size) {
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
        this.k25(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).k25 = function (decoder, index, builder, checkIndex) {
    this.d25(builder, index, decoder.g22(this.g1y(), index, this.h25_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.l22($this.g1y());
    $this.b25(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).m25 = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.z24(previous);
    var builder = tmp1_elvis_lhs == null ? this.t24() : tmp1_elvis_lhs;
    var startIndex = this.v24(builder);
    var compositeDecoder = decoder.t21(this.g1y());
    if (compositeDecoder.j22()) {
      this.j25(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.k22(this.g1y());
        if (index === -1)
          break $l$loop;
        this.l25(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.u21(this.g1y());
    return this.x24(builder);
  };
  protoOf(AbstractCollectionSerializer).i1y = function (decoder) {
    return this.m25(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).l25 = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.k25(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.k25.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.g27_1 = new PrimitiveArrayDescriptor(primitiveSerializer.g1y());
  }
  protoOf(PrimitiveArraySerializer).g1y = function () {
    return this.g27_1;
  };
  protoOf(PrimitiveArraySerializer).h27 = function (_this__u8e3s4) {
    return _this__u8e3s4.i27();
  };
  protoOf(PrimitiveArraySerializer).v24 = function (_this__u8e3s4) {
    return this.h27(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).j27 = function (_this__u8e3s4) {
    return _this__u8e3s4.k27();
  };
  protoOf(PrimitiveArraySerializer).x24 = function (_this__u8e3s4) {
    return this.j27(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).l27 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.m27(size);
  };
  protoOf(PrimitiveArraySerializer).b25 = function (_this__u8e3s4, size) {
    return this.l27(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).n27 = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).g26 = function (_this__u8e3s4) {
    return this.n27((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).o27 = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).d25 = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.o27(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).t24 = function () {
    return this.z24(this.p27());
  };
  protoOf(PrimitiveArraySerializer).s27 = function (encoder, value) {
    var size = this.e26(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.g27_1;
    var composite = encoder.p23(descriptor, size);
    this.r27(composite, value, size);
    composite.u21(descriptor);
  };
  protoOf(PrimitiveArraySerializer).h1y = function (encoder, value) {
    return this.s27(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).i25 = function (encoder, value) {
    return this.s27(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).i1y = function (decoder) {
    return this.m25(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).t27 = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.i27() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.m27(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.m27.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.u27_1 = longArray(0);
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
    $this.y27_1[slot] = $this.y27_1[slot].n3((new Long(1, 0)).j3(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.y27_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.y27_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.h3());
          slotMarks = slotMarks.n3((new Long(1, 0)).j3(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.w27_1($this.v27_1, index)) {
            $this.y27_1[slot] = slotMarks;
            return index;
          }
        }
        $this.y27_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.v27_1 = descriptor;
    this.w27_1 = readIfAbsent;
    var elementsCount = this.v27_1.z1z();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).j3(elementsCount);
      }
      tmp.x27_1 = tmp_0;
      this.y27_1 = Companion_getInstance_7().u27_1;
    } else {
      this.x27_1 = new Long(0, 0);
      this.y27_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).z27 = function (index) {
    if (index < 64) {
      this.x27_1 = this.x27_1.n3((new Long(1, 0)).j3(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).a28 = function () {
    var elementsCount = this.v27_1.z1z();
    while (!this.x27_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.x27_1.h3());
      this.x27_1 = this.x27_1.n3((new Long(1, 0)).j3(index));
      if (this.w27_1(this.v27_1, index)) {
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
        descriptor.n28(element);
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
      descriptor.o28(elementName);
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
          descriptor.p28(element_0);
        }
      }
    }
    return EnumSerializer_init_$Create$(serialName, values, descriptor);
  }
  function EnumSerializer_init_$Init$(serialName, values, descriptor, $this) {
    EnumSerializer.call($this, serialName, values);
    $this.r28_1 = descriptor;
    return $this;
  }
  function EnumSerializer_init_$Create$(serialName, values, descriptor) {
    return EnumSerializer_init_$Init$(serialName, values, descriptor, objectCreate(protoOf(EnumSerializer)));
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.q28_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.q28_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.o28(element.q2_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.r28_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer(serialName, values) {
    this.q28_1 = values;
    this.r28_1 = null;
    var tmp = this;
    tmp.s28_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).g1y = function () {
    var tmp0 = this.s28_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_1();
    return tmp0.z();
  };
  protoOf(EnumSerializer).t28 = function (encoder, value) {
    var index = indexOf(this.q28_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.g1y().h1z() + ', ' + ('must be one of ' + contentToString(this.q28_1)));
    }
    encoder.y22(this.g1y(), index);
  };
  protoOf(EnumSerializer).h1y = function (encoder, value) {
    return this.t28(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).i1y = function (decoder) {
    var index = decoder.p21(this.g1y());
    if (!(0 <= index ? index <= (this.q28_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.g1y().h1z() + ' enum values, ' + ('values size is ' + this.q28_1.length));
    }
    return this.q28_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.g1y().h1z() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.h29_1;
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
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.b20(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.g29_1 = ENUM_getInstance();
    var tmp = this;
    tmp.h29_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).x1z = function () {
    return this.g29_1;
  };
  protoOf(EnumDescriptor).e20 = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.x1z() === ENUM_getInstance()))
      return false;
    if (!(this.h1z() === other.h1z()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.h1z() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.h1z());
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
      return receiver.g1y();
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
    this.w29_1 = true;
  }
  protoOf(InlineClassDescriptor).y1z = function () {
    return this.w29_1;
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
      if (!(this.h1z() === other.h1z())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.w29_1 && contentEquals(this.i29(), other.i29()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.z1z() === other.z1z())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.z1z();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.e20(index).h1z() === other.e20(index).h1z())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.e20(index).x1z(), other.e20(index).x1z())) {
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
    this.x29_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.x29_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).g1y = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).h1y = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).i1y = function (decoder) {
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
    this.a2a_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).i22 = function () {
    return this.a2a_1;
  };
  protoOf(NoOpEncoder).n22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).o22 = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).p22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).q22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).r22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).s22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).t22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).u22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).v22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).w22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).x22 = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).y22 = function (enumDescriptor, index) {
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
    this.b2a_1 = OBJECT_getInstance();
    this.c2a_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).x1z = function () {
    return this.b2a_1;
  };
  protoOf(NothingSerialDescriptor).h1z = function () {
    return this.c2a_1;
  };
  protoOf(NothingSerialDescriptor).z1z = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).b20 = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).c20 = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).f20 = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).e20 = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).d20 = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.c2a_1) + imul(31, this.b2a_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.d2a_1 = serializer;
    this.e2a_1 = new SerialDescriptorForNullable(this.d2a_1.g1y());
  }
  protoOf(NullableSerializer).g1y = function () {
    return this.e2a_1;
  };
  protoOf(NullableSerializer).f2a = function (encoder, value) {
    if (!(value == null)) {
      encoder.o23();
      encoder.l23(this.d2a_1, value);
    } else {
      encoder.o22();
    }
  };
  protoOf(NullableSerializer).h1y = function (encoder, value) {
    return this.f2a(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).i1y = function (decoder) {
    return decoder.e21() ? decoder.s21(this.d2a_1) : decoder.f21();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.d2a_1, other.d2a_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.d2a_1);
  };
  function SerialDescriptorForNullable(original) {
    this.g20_1 = original;
    this.h20_1 = this.g20_1.h1z() + '?';
    this.i20_1 = cachedSerialNames(this.g20_1);
  }
  protoOf(SerialDescriptorForNullable).h1z = function () {
    return this.h20_1;
  };
  protoOf(SerialDescriptorForNullable).c21 = function () {
    return this.i20_1;
  };
  protoOf(SerialDescriptorForNullable).t1z = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.g20_1, other.g20_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.g20_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.g20_1), 31);
  };
  protoOf(SerialDescriptorForNullable).x1z = function () {
    return this.g20_1.x1z();
  };
  protoOf(SerialDescriptorForNullable).y1z = function () {
    return this.g20_1.y1z();
  };
  protoOf(SerialDescriptorForNullable).z1z = function () {
    return this.g20_1.z1z();
  };
  protoOf(SerialDescriptorForNullable).a20 = function () {
    return this.g20_1.a20();
  };
  protoOf(SerialDescriptorForNullable).b20 = function (index) {
    return this.g20_1.b20(index);
  };
  protoOf(SerialDescriptorForNullable).c20 = function (name) {
    return this.g20_1.c20(name);
  };
  protoOf(SerialDescriptorForNullable).d20 = function (index) {
    return this.g20_1.d20(index);
  };
  protoOf(SerialDescriptorForNullable).e20 = function (index) {
    return this.g20_1.e20(index);
  };
  protoOf(SerialDescriptorForNullable).f20 = function (index) {
    return this.g20_1.f20(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.o1y_1 = this$0.h2a_1;
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
    this.g2a_1 = objectInstance;
    this.h2a_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.i2a_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).g1y = function () {
    var tmp0 = this.i2a_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_2();
    return tmp0.z();
  };
  protoOf(ObjectSerializer).w1y = function (encoder, value) {
    encoder.t21(this.g1y()).u21(this.g1y());
  };
  protoOf(ObjectSerializer).h1y = function (encoder, value) {
    return this.w1y(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).i1y = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.g1y();
    var composite = decoder.t21(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      if (composite.j22()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.k22(this.g1y());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$0;
    composite.u21(descriptor);
    return this.g2a_1;
  };
  function descriptor$factory_2() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.g1y();
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
      return _this__u8e3s4.c21();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.z1z());
    var inductionVariable = 0;
    var last = _this__u8e3s4.z1z();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.b20(i);
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
    var tmp0 = _this__u8e3s4.km_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.km_1);
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
          var element = descriptor.b20(i);
          missingFields.n(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.h1z());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.h1z());
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
      var tmp0_safe_receiver = element.h1z();
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
      var tmp0_safe_receiver_0 = element_0.x1z();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.k28_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.z();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.m28_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory_0();
    return tmp0.z();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.f28_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.f28_1[i];
        indices.n2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.c28_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y29();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.c28_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z29();
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
          var tmp$ret$0 = item.g1y();
          destination.n(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.i29());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.b20(i) + ': ' + this$0.e20(i).h1z();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.b28_1 = serialName;
    this.c28_1 = generatedSerializer;
    this.d28_1 = elementsCount;
    this.e28_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.d28_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.f28_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.d28_1;
    tmp_3.g28_1 = Array(size);
    this.h28_1 = null;
    this.i28_1 = booleanArray(this.d28_1);
    this.j28_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.k28_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.l28_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.m28_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).h1z = function () {
    return this.b28_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).z1z = function () {
    return this.d28_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).x1z = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).a20 = function () {
    var tmp0_elvis_lhs = this.h28_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).c21 = function () {
    return this.j28_1.l2();
  };
  protoOf(PluginGeneratedSerialDescriptor).i29 = function () {
    var tmp0 = this.l28_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.z();
  };
  protoOf(PluginGeneratedSerialDescriptor).j29 = function (name, isOptional) {
    this.e28_1 = this.e28_1 + 1 | 0;
    this.f28_1[this.e28_1] = name;
    this.i28_1[this.e28_1] = isOptional;
    this.g28_1[this.e28_1] = null;
    if (this.e28_1 === (this.d28_1 - 1 | 0)) {
      this.j28_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).o28 = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.j29(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.j29.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).p28 = function (annotation) {
    // Inline function 'kotlin.let' call
    var it = this.g28_1[this.e28_1];
    var tmp;
    if (it == null) {
      var result = ArrayList_init_$Create$(1);
      this.g28_1[this.e28_1] = result;
      tmp = result;
    } else {
      tmp = it;
    }
    var list = tmp;
    list.n(annotation);
  };
  protoOf(PluginGeneratedSerialDescriptor).n28 = function (a) {
    if (this.h28_1 == null) {
      this.h28_1 = ArrayList_init_$Create$(1);
    }
    ensureNotNull(this.h28_1).n(a);
  };
  protoOf(PluginGeneratedSerialDescriptor).e20 = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).g1y();
  };
  protoOf(PluginGeneratedSerialDescriptor).f20 = function (index) {
    return getChecked_0(this.i28_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).d20 = function (index) {
    var tmp0_elvis_lhs = getChecked(this.g28_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).b20 = function (index) {
    return getChecked(this.f28_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).c20 = function (name) {
    var tmp0_elvis_lhs = this.j28_1.k2(name);
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
      if (!(this.h1z() === other.h1z())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.i29(), other.i29())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.z1z() === other.z1z())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.z1z();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.e20(index).h1z() === other.e20(index).h1z())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.e20(index).x1z(), other.e20(index).x1z())) {
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
    var tmp = until(0, this.d28_1);
    var tmp_0 = this.h1z() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.i29();
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
  protoOf(CharArraySerializer_0).m2a = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).e26 = function (_this__u8e3s4) {
    return this.m2a((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).n2a = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).z24 = function (_this__u8e3s4) {
    return this.n2a((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).p27 = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).o2a = function (decoder, index, builder, checkIndex) {
    builder.r2a(decoder.c22(this.g27_1, index));
  };
  protoOf(CharArraySerializer_0).k25 = function (decoder, index, builder, checkIndex) {
    return this.o2a(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).q27 = function (decoder, index, builder, checkIndex) {
    return this.o2a(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).s2a = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.h23(this.g27_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).r27 = function (encoder, content, size) {
    return this.s2a(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(DoubleArraySerializer_0).v2a = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).e26 = function (_this__u8e3s4) {
    return this.v2a((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).w2a = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).z24 = function (_this__u8e3s4) {
    return this.w2a((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).p27 = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).x2a = function (decoder, index, builder, checkIndex) {
    builder.a2b(decoder.b22(this.g27_1, index));
  };
  protoOf(DoubleArraySerializer_0).k25 = function (decoder, index, builder, checkIndex) {
    return this.x2a(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).q27 = function (decoder, index, builder, checkIndex) {
    return this.x2a(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).b2b = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.g23(this.g27_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).r27 = function (encoder, content, size) {
    return this.b2b(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(FloatArraySerializer_0).e2b = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).e26 = function (_this__u8e3s4) {
    return this.e2b((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).f2b = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).z24 = function (_this__u8e3s4) {
    return this.f2b((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).p27 = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).g2b = function (decoder, index, builder, checkIndex) {
    builder.j2b(decoder.a22(this.g27_1, index));
  };
  protoOf(FloatArraySerializer_0).k25 = function (decoder, index, builder, checkIndex) {
    return this.g2b(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).q27 = function (decoder, index, builder, checkIndex) {
    return this.g2b(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).k2b = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.f23(this.g27_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).r27 = function (encoder, content, size) {
    return this.k2b(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(LongArraySerializer_0).n2b = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).e26 = function (_this__u8e3s4) {
    return this.n2b((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).o2b = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).z24 = function (_this__u8e3s4) {
    return this.o2b((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).p27 = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).p2b = function (decoder, index, builder, checkIndex) {
    builder.s2b(decoder.z21(this.g27_1, index));
  };
  protoOf(LongArraySerializer_0).k25 = function (decoder, index, builder, checkIndex) {
    return this.p2b(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).q27 = function (decoder, index, builder, checkIndex) {
    return this.p2b(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).t2b = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.e23(this.g27_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).r27 = function (encoder, content, size) {
    return this.t2b(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(ULongArraySerializer_0).w2b = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).e26 = function (_this__u8e3s4) {
    return this.w2b(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.qq_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).x2b = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).z24 = function (_this__u8e3s4) {
    return this.x2b(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.qq_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).y2b = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).p27 = function () {
    return new ULongArray(this.y2b());
  };
  protoOf(ULongArraySerializer_0).z2b = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.e22(this.g27_1, index).k21();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.c2c(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).k25 = function (decoder, index, builder, checkIndex) {
    return this.z2b(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).q27 = function (decoder, index, builder, checkIndex) {
    return this.z2b(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).d2c = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.j23(this.g27_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.t22(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).r27 = function (encoder, content, size) {
    return this.d2c(encoder, content instanceof ULongArray ? content.qq_1 : THROW_CCE(), size);
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
  protoOf(IntArraySerializer_0).g2c = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).e26 = function (_this__u8e3s4) {
    return this.g2c((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).h2c = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).z24 = function (_this__u8e3s4) {
    return this.h2c((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).p27 = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).i2c = function (decoder, index, builder, checkIndex) {
    builder.l2c(decoder.y21(this.g27_1, index));
  };
  protoOf(IntArraySerializer_0).k25 = function (decoder, index, builder, checkIndex) {
    return this.i2c(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).q27 = function (decoder, index, builder, checkIndex) {
    return this.i2c(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).m2c = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.d23(this.g27_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).r27 = function (encoder, content, size) {
    return this.m2c(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UIntArraySerializer_0).p2c = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).e26 = function (_this__u8e3s4) {
    return this.p2c(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.fq_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).q2c = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).z24 = function (_this__u8e3s4) {
    return this.q2c(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.fq_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).r2c = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).p27 = function () {
    return new UIntArray(this.r2c());
  };
  protoOf(UIntArraySerializer_0).s2c = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.e22(this.g27_1, index).j21();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.v2c(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).k25 = function (decoder, index, builder, checkIndex) {
    return this.s2c(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).q27 = function (decoder, index, builder, checkIndex) {
    return this.s2c(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).w2c = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.j23(this.g27_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.s22(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).r27 = function (encoder, content, size) {
    return this.w2c(encoder, content instanceof UIntArray ? content.fq_1 : THROW_CCE(), size);
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
  protoOf(ShortArraySerializer_0).z2c = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).e26 = function (_this__u8e3s4) {
    return this.z2c((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).a2d = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).z24 = function (_this__u8e3s4) {
    return this.a2d((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).p27 = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).b2d = function (decoder, index, builder, checkIndex) {
    builder.e2d(decoder.x21(this.g27_1, index));
  };
  protoOf(ShortArraySerializer_0).k25 = function (decoder, index, builder, checkIndex) {
    return this.b2d(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).q27 = function (decoder, index, builder, checkIndex) {
    return this.b2d(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).f2d = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.c23(this.g27_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).r27 = function (encoder, content, size) {
    return this.f2d(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UShortArraySerializer_0).i2d = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).e26 = function (_this__u8e3s4) {
    return this.i2d(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.br_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).j2d = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).z24 = function (_this__u8e3s4) {
    return this.j2d(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.br_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).k2d = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).p27 = function () {
    return new UShortArray(this.k2d());
  };
  protoOf(UShortArraySerializer_0).l2d = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.e22(this.g27_1, index).i21();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.o2d(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).k25 = function (decoder, index, builder, checkIndex) {
    return this.l2d(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).q27 = function (decoder, index, builder, checkIndex) {
    return this.l2d(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).p2d = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.j23(this.g27_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.r22(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).r27 = function (encoder, content, size) {
    return this.p2d(encoder, content instanceof UShortArray ? content.br_1 : THROW_CCE(), size);
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
  protoOf(ByteArraySerializer_0).s2d = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).e26 = function (_this__u8e3s4) {
    return this.s2d((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).t2d = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).z24 = function (_this__u8e3s4) {
    return this.t2d((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).p27 = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).u2d = function (decoder, index, builder, checkIndex) {
    builder.x2d(decoder.w21(this.g27_1, index));
  };
  protoOf(ByteArraySerializer_0).k25 = function (decoder, index, builder, checkIndex) {
    return this.u2d(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).q27 = function (decoder, index, builder, checkIndex) {
    return this.u2d(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).y2d = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.b23(this.g27_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).r27 = function (encoder, content, size) {
    return this.y2d(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
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
  protoOf(UByteArraySerializer_0).b2e = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).e26 = function (_this__u8e3s4) {
    return this.b2e(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.up_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).c2e = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).z24 = function (_this__u8e3s4) {
    return this.c2e(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.up_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).d2e = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).p27 = function () {
    return new UByteArray(this.d2e());
  };
  protoOf(UByteArraySerializer_0).e2e = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.e22(this.g27_1, index).h21();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.h2e(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).k25 = function (decoder, index, builder, checkIndex) {
    return this.e2e(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).q27 = function (decoder, index, builder, checkIndex) {
    return this.e2e(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).i2e = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.j23(this.g27_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.q22(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).r27 = function (encoder, content, size) {
    return this.i2e(encoder, content instanceof UByteArray ? content.up_1 : THROW_CCE(), size);
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
  protoOf(BooleanArraySerializer_0).l2e = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).e26 = function (_this__u8e3s4) {
    return this.l2e((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).m2e = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).z24 = function (_this__u8e3s4) {
    return this.m2e((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).p27 = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).n2e = function (decoder, index, builder, checkIndex) {
    builder.q2e(decoder.v21(this.g27_1, index));
  };
  protoOf(BooleanArraySerializer_0).k25 = function (decoder, index, builder, checkIndex) {
    return this.n2e(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).q27 = function (decoder, index, builder, checkIndex) {
    return this.n2e(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).r2e = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.a23(this.g27_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).r27 = function (encoder, content, size) {
    return this.r2e(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.p2a_1 = bufferWithData;
    this.q2a_1 = bufferWithData.length;
    this.m27(10);
  }
  protoOf(CharArrayBuilder).i27 = function () {
    return this.q2a_1;
  };
  protoOf(CharArrayBuilder).m27 = function (requiredCapacity) {
    if (this.p2a_1.length < requiredCapacity)
      this.p2a_1 = copyOf(this.p2a_1, coerceAtLeast(requiredCapacity, imul(this.p2a_1.length, 2)));
  };
  protoOf(CharArrayBuilder).r2a = function (c) {
    this.t27();
    var tmp = this.p2a_1;
    var _unary__edvuaz = this.q2a_1;
    this.q2a_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).k27 = function () {
    return copyOf(this.p2a_1, this.q2a_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.y2a_1 = bufferWithData;
    this.z2a_1 = bufferWithData.length;
    this.m27(10);
  }
  protoOf(DoubleArrayBuilder).i27 = function () {
    return this.z2a_1;
  };
  protoOf(DoubleArrayBuilder).m27 = function (requiredCapacity) {
    if (this.y2a_1.length < requiredCapacity)
      this.y2a_1 = copyOf_0(this.y2a_1, coerceAtLeast(requiredCapacity, imul(this.y2a_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).a2b = function (c) {
    this.t27();
    var tmp = this.y2a_1;
    var _unary__edvuaz = this.z2a_1;
    this.z2a_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).k27 = function () {
    return copyOf_0(this.y2a_1, this.z2a_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.h2b_1 = bufferWithData;
    this.i2b_1 = bufferWithData.length;
    this.m27(10);
  }
  protoOf(FloatArrayBuilder).i27 = function () {
    return this.i2b_1;
  };
  protoOf(FloatArrayBuilder).m27 = function (requiredCapacity) {
    if (this.h2b_1.length < requiredCapacity)
      this.h2b_1 = copyOf_1(this.h2b_1, coerceAtLeast(requiredCapacity, imul(this.h2b_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).j2b = function (c) {
    this.t27();
    var tmp = this.h2b_1;
    var _unary__edvuaz = this.i2b_1;
    this.i2b_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).k27 = function () {
    return copyOf_1(this.h2b_1, this.i2b_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.q2b_1 = bufferWithData;
    this.r2b_1 = bufferWithData.length;
    this.m27(10);
  }
  protoOf(LongArrayBuilder).i27 = function () {
    return this.r2b_1;
  };
  protoOf(LongArrayBuilder).m27 = function (requiredCapacity) {
    if (this.q2b_1.length < requiredCapacity)
      this.q2b_1 = copyOf_2(this.q2b_1, coerceAtLeast(requiredCapacity, imul(this.q2b_1.length, 2)));
  };
  protoOf(LongArrayBuilder).s2b = function (c) {
    this.t27();
    var tmp = this.q2b_1;
    var _unary__edvuaz = this.r2b_1;
    this.r2b_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).k27 = function () {
    return copyOf_2(this.q2b_1, this.r2b_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a2c_1 = bufferWithData;
    this.b2c_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.m27(10);
  }
  protoOf(ULongArrayBuilder).i27 = function () {
    return this.b2c_1;
  };
  protoOf(ULongArrayBuilder).m27 = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.a2c_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.a2c_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.a2c_1), 2));
      tmp.a2c_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).c2c = function (c) {
    this.t27();
    var tmp = this.a2c_1;
    var _unary__edvuaz = this.b2c_1;
    this.b2c_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).s2e = function () {
    var tmp0 = this.a2c_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.b2c_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).k27 = function () {
    return new ULongArray(this.s2e());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.j2c_1 = bufferWithData;
    this.k2c_1 = bufferWithData.length;
    this.m27(10);
  }
  protoOf(IntArrayBuilder).i27 = function () {
    return this.k2c_1;
  };
  protoOf(IntArrayBuilder).m27 = function (requiredCapacity) {
    if (this.j2c_1.length < requiredCapacity)
      this.j2c_1 = copyOf_3(this.j2c_1, coerceAtLeast(requiredCapacity, imul(this.j2c_1.length, 2)));
  };
  protoOf(IntArrayBuilder).l2c = function (c) {
    this.t27();
    var tmp = this.j2c_1;
    var _unary__edvuaz = this.k2c_1;
    this.k2c_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).k27 = function () {
    return copyOf_3(this.j2c_1, this.k2c_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.t2c_1 = bufferWithData;
    this.u2c_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.m27(10);
  }
  protoOf(UIntArrayBuilder).i27 = function () {
    return this.u2c_1;
  };
  protoOf(UIntArrayBuilder).m27 = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.t2c_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.t2c_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.t2c_1), 2));
      tmp.t2c_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).v2c = function (c) {
    this.t27();
    var tmp = this.t2c_1;
    var _unary__edvuaz = this.u2c_1;
    this.u2c_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).t2e = function () {
    var tmp0 = this.t2c_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.u2c_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).k27 = function () {
    return new UIntArray(this.t2e());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c2d_1 = bufferWithData;
    this.d2d_1 = bufferWithData.length;
    this.m27(10);
  }
  protoOf(ShortArrayBuilder).i27 = function () {
    return this.d2d_1;
  };
  protoOf(ShortArrayBuilder).m27 = function (requiredCapacity) {
    if (this.c2d_1.length < requiredCapacity)
      this.c2d_1 = copyOf_4(this.c2d_1, coerceAtLeast(requiredCapacity, imul(this.c2d_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).e2d = function (c) {
    this.t27();
    var tmp = this.c2d_1;
    var _unary__edvuaz = this.d2d_1;
    this.d2d_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).k27 = function () {
    return copyOf_4(this.c2d_1, this.d2d_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.m2d_1 = bufferWithData;
    this.n2d_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.m27(10);
  }
  protoOf(UShortArrayBuilder).i27 = function () {
    return this.n2d_1;
  };
  protoOf(UShortArrayBuilder).m27 = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.m2d_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.m2d_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.m2d_1), 2));
      tmp.m2d_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).o2d = function (c) {
    this.t27();
    var tmp = this.m2d_1;
    var _unary__edvuaz = this.n2d_1;
    this.n2d_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).u2e = function () {
    var tmp0 = this.m2d_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.n2d_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).k27 = function () {
    return new UShortArray(this.u2e());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.v2d_1 = bufferWithData;
    this.w2d_1 = bufferWithData.length;
    this.m27(10);
  }
  protoOf(ByteArrayBuilder).i27 = function () {
    return this.w2d_1;
  };
  protoOf(ByteArrayBuilder).m27 = function (requiredCapacity) {
    if (this.v2d_1.length < requiredCapacity)
      this.v2d_1 = copyOf_5(this.v2d_1, coerceAtLeast(requiredCapacity, imul(this.v2d_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).x2d = function (c) {
    this.t27();
    var tmp = this.v2d_1;
    var _unary__edvuaz = this.w2d_1;
    this.w2d_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).k27 = function () {
    return copyOf_5(this.v2d_1, this.w2d_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.f2e_1 = bufferWithData;
    this.g2e_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.m27(10);
  }
  protoOf(UByteArrayBuilder).i27 = function () {
    return this.g2e_1;
  };
  protoOf(UByteArrayBuilder).m27 = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.f2e_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.f2e_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.f2e_1), 2));
      tmp.f2e_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).h2e = function (c) {
    this.t27();
    var tmp = this.f2e_1;
    var _unary__edvuaz = this.g2e_1;
    this.g2e_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).v2e = function () {
    var tmp0 = this.f2e_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.g2e_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).k27 = function () {
    return new UByteArray(this.v2e());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.o2e_1 = bufferWithData;
    this.p2e_1 = bufferWithData.length;
    this.m27(10);
  }
  protoOf(BooleanArrayBuilder).i27 = function () {
    return this.p2e_1;
  };
  protoOf(BooleanArrayBuilder).m27 = function (requiredCapacity) {
    if (this.o2e_1.length < requiredCapacity)
      this.o2e_1 = copyOf_6(this.o2e_1, coerceAtLeast(requiredCapacity, imul(this.o2e_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).q2e = function (c) {
    this.t27();
    var tmp = this.o2e_1;
    var _unary__edvuaz = this.p2e_1;
    this.p2e_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).k27 = function () {
    return copyOf_6(this.o2e_1, this.p2e_1);
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
    this.w2e_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).g1y = function () {
    return this.w2e_1;
  };
  protoOf(StringSerializer).x2e = function (encoder, value) {
    return encoder.x22(value);
  };
  protoOf(StringSerializer).h1y = function (encoder, value) {
    return this.x2e(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).i1y = function (decoder) {
    return decoder.o21();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.y2e_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).g1y = function () {
    return this.y2e_1;
  };
  protoOf(CharSerializer).z2e = function (encoder, value) {
    return encoder.w22(value);
  };
  protoOf(CharSerializer).h1y = function (encoder, value) {
    return this.z2e(encoder, value instanceof Char ? value.l1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).a2f = function (decoder) {
    return decoder.n21();
  };
  protoOf(CharSerializer).i1y = function (decoder) {
    return new Char(this.a2f(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.b2f_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).g1y = function () {
    return this.b2f_1;
  };
  protoOf(DoubleSerializer).c2f = function (encoder, value) {
    return encoder.v22(value);
  };
  protoOf(DoubleSerializer).h1y = function (encoder, value) {
    return this.c2f(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).i1y = function (decoder) {
    return decoder.m21();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.d2f_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).g1y = function () {
    return this.d2f_1;
  };
  protoOf(FloatSerializer).e2f = function (encoder, value) {
    return encoder.u22(value);
  };
  protoOf(FloatSerializer).h1y = function (encoder, value) {
    return this.e2f(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).i1y = function (decoder) {
    return decoder.l21();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.f2f_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).g1y = function () {
    return this.f2f_1;
  };
  protoOf(LongSerializer).g2f = function (encoder, value) {
    return encoder.t22(value);
  };
  protoOf(LongSerializer).h1y = function (encoder, value) {
    return this.g2f(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).i1y = function (decoder) {
    return decoder.k21();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.h2f_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).g1y = function () {
    return this.h2f_1;
  };
  protoOf(IntSerializer).i2f = function (encoder, value) {
    return encoder.s22(value);
  };
  protoOf(IntSerializer).h1y = function (encoder, value) {
    return this.i2f(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).i1y = function (decoder) {
    return decoder.j21();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.j2f_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).g1y = function () {
    return this.j2f_1;
  };
  protoOf(ShortSerializer).k2f = function (encoder, value) {
    return encoder.r22(value);
  };
  protoOf(ShortSerializer).h1y = function (encoder, value) {
    return this.k2f(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).i1y = function (decoder) {
    return decoder.i21();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.l2f_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).g1y = function () {
    return this.l2f_1;
  };
  protoOf(ByteSerializer).m2f = function (encoder, value) {
    return encoder.q22(value);
  };
  protoOf(ByteSerializer).h1y = function (encoder, value) {
    return this.m2f(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).i1y = function (decoder) {
    return decoder.h21();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.n2f_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).g1y = function () {
    return this.n2f_1;
  };
  protoOf(BooleanSerializer).o2f = function (encoder, value) {
    return encoder.p22(value);
  };
  protoOf(BooleanSerializer).h1y = function (encoder, value) {
    return this.o2f(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).i1y = function (decoder) {
    return decoder.g21();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.p2f_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).g1y = function () {
    return this.p2f_1.g1y();
  };
  protoOf(UnitSerializer).q2f = function (encoder, value) {
    this.p2f_1.w1y(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).h1y = function (encoder, value) {
    return this.q2f(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).r2f = function (decoder) {
    this.p2f_1.i1y(decoder);
  };
  protoOf(UnitSerializer).i1y = function (decoder) {
    this.r2f(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.s2f_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.s2f_1 = serialName;
    this.t2f_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).h1z = function () {
    return this.s2f_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).x1z = function () {
    return this.t2f_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).z1z = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).b20 = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).c20 = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).f20 = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).e20 = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).d20 = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.s2f_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.s2f_1 === other.s2f_1 && equals(this.t2f_1, other.t2f_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.s2f_1) + imul(31, this.t2f_1.hashCode()) | 0;
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
      var primitiveName = primitive.g1y().h1z();
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
  protoOf(NamedValueEncoder).v2f = function (_this__u8e3s4, index) {
    return this.x2f(this.w2f(_this__u8e3s4, index));
  };
  protoOf(NamedValueEncoder).x2f = function (nestedName) {
    var tmp0_elvis_lhs = this.z2f();
    return this.a2g(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueEncoder).w2f = function (descriptor, index) {
    return descriptor.b20(index);
  };
  protoOf(NamedValueEncoder).a2g = function (parentName, childName) {
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
  protoOf(NamedValueDecoder).v2f = function (_this__u8e3s4, index) {
    return this.x2f(this.w2f(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).x2f = function (nestedName) {
    var tmp0_elvis_lhs = this.z2f();
    return this.a2g(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).w2f = function (descriptor, index) {
    return descriptor.b20(index);
  };
  protoOf(NamedValueDecoder).a2g = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).x2g = function () {
    return this.v2g_1.h() ? '$' : joinToString(this.v2g_1, '.', '$.');
  };
  function encodeElement($this, desc, index) {
    var tag = $this.v2f(desc, index);
    $this.r2g(tag);
    return true;
  }
  function TaggedEncoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.y2f_1 = ArrayList_init_$Create$_0();
  }
  protoOf(TaggedEncoder).i22 = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedEncoder).b2g = function (tag, value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(TaggedEncoder).c2g = function (tag) {
  };
  protoOf(TaggedEncoder).d2g = function (tag) {
    throw SerializationException_init_$Create$_0('null is not supported');
  };
  protoOf(TaggedEncoder).e2g = function (tag, value) {
    return this.b2g(tag, value);
  };
  protoOf(TaggedEncoder).f2g = function (tag, value) {
    return this.b2g(tag, value);
  };
  protoOf(TaggedEncoder).g2g = function (tag, value) {
    return this.b2g(tag, value);
  };
  protoOf(TaggedEncoder).h2g = function (tag, value) {
    return this.b2g(tag, value);
  };
  protoOf(TaggedEncoder).i2g = function (tag, value) {
    return this.b2g(tag, value);
  };
  protoOf(TaggedEncoder).j2g = function (tag, value) {
    return this.b2g(tag, value);
  };
  protoOf(TaggedEncoder).k2g = function (tag, value) {
    return this.b2g(tag, value);
  };
  protoOf(TaggedEncoder).l2g = function (tag, value) {
    return this.b2g(tag, new Char(value));
  };
  protoOf(TaggedEncoder).m2g = function (tag, value) {
    return this.b2g(tag, value);
  };
  protoOf(TaggedEncoder).n2g = function (tag, enumDescriptor, ordinal) {
    return this.b2g(tag, ordinal);
  };
  protoOf(TaggedEncoder).o2g = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.r2g(tag);
    return this;
  };
  protoOf(TaggedEncoder).z22 = function (descriptor) {
    return this.o2g(this.s2g(), descriptor);
  };
  protoOf(TaggedEncoder).o23 = function () {
    return this.c2g(this.q2g());
  };
  protoOf(TaggedEncoder).o22 = function () {
    return this.d2g(this.s2g());
  };
  protoOf(TaggedEncoder).p22 = function (value) {
    return this.k2g(this.s2g(), value);
  };
  protoOf(TaggedEncoder).q22 = function (value) {
    return this.f2g(this.s2g(), value);
  };
  protoOf(TaggedEncoder).r22 = function (value) {
    return this.g2g(this.s2g(), value);
  };
  protoOf(TaggedEncoder).s22 = function (value) {
    return this.e2g(this.s2g(), value);
  };
  protoOf(TaggedEncoder).t22 = function (value) {
    return this.h2g(this.s2g(), value);
  };
  protoOf(TaggedEncoder).u22 = function (value) {
    return this.i2g(this.s2g(), value);
  };
  protoOf(TaggedEncoder).v22 = function (value) {
    return this.j2g(this.s2g(), value);
  };
  protoOf(TaggedEncoder).w22 = function (value) {
    return this.l2g(this.s2g(), value);
  };
  protoOf(TaggedEncoder).x22 = function (value) {
    return this.m2g(this.s2g(), value);
  };
  protoOf(TaggedEncoder).y22 = function (enumDescriptor, index) {
    return this.n2g(this.s2g(), enumDescriptor, index);
  };
  protoOf(TaggedEncoder).t21 = function (descriptor) {
    return this;
  };
  protoOf(TaggedEncoder).u21 = function (descriptor) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.y2f_1.h()) {
      this.s2g();
    }
    this.p2g(descriptor);
  };
  protoOf(TaggedEncoder).p2g = function (descriptor) {
  };
  protoOf(TaggedEncoder).a23 = function (descriptor, index, value) {
    return this.k2g(this.v2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).b23 = function (descriptor, index, value) {
    return this.f2g(this.v2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).c23 = function (descriptor, index, value) {
    return this.g2g(this.v2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).d23 = function (descriptor, index, value) {
    return this.e2g(this.v2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).e23 = function (descriptor, index, value) {
    return this.h2g(this.v2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).f23 = function (descriptor, index, value) {
    return this.i2g(this.v2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).g23 = function (descriptor, index, value) {
    return this.j2g(this.v2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).h23 = function (descriptor, index, value) {
    return this.l2g(this.v2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).i23 = function (descriptor, index, value) {
    return this.m2g(this.v2f(descriptor, index), value);
  };
  protoOf(TaggedEncoder).j23 = function (descriptor, index) {
    return this.o2g(this.v2f(descriptor, index), descriptor.e20(index));
  };
  protoOf(TaggedEncoder).k23 = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.l23(serializer, value);
    }
  };
  protoOf(TaggedEncoder).m23 = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.n23(serializer, value);
    }
  };
  protoOf(TaggedEncoder).q2g = function () {
    return last(this.y2f_1);
  };
  protoOf(TaggedEncoder).z2f = function () {
    return lastOrNull(this.y2f_1);
  };
  protoOf(TaggedEncoder).r2g = function (name) {
    this.y2f_1.n(name);
  };
  protoOf(TaggedEncoder).s2g = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.y2f_1.h()) {
      tmp = this.y2f_1.h2(get_lastIndex_0(this.y2f_1));
    } else {
      throw SerializationException_init_$Create$_0('No tag in stack for requested element');
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.r2g(tag);
    var r = block();
    if (!$this.w2g_1) {
      $this.s2g();
    }
    $this.w2g_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.r21($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.g1y().t1z();
      var tmp;
      if (isNullabilitySupported || tmp0.e21()) {
        tmp = this$0.r21($deserializer, $previousValue);
      } else {
        tmp = tmp0.f21();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.v2g_1 = ArrayList_init_$Create$_0();
    this.w2g_1 = false;
  }
  protoOf(TaggedDecoder).i22 = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).y2g = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).z2g = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).a2h = function (tag) {
    var tmp = this.y2g(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).b2h = function (tag) {
    var tmp = this.y2g(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).c2h = function (tag) {
    var tmp = this.y2g(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).d2h = function (tag) {
    var tmp = this.y2g(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).e2h = function (tag) {
    var tmp = this.y2g(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).f2h = function (tag) {
    var tmp = this.y2g(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).g2h = function (tag) {
    var tmp = this.y2g(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).h2h = function (tag) {
    var tmp = this.y2g(tag);
    return tmp instanceof Char ? tmp.l1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).i2h = function (tag) {
    var tmp = this.y2g(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).j2h = function (tag, enumDescriptor) {
    var tmp = this.y2g(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).k2h = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.r2g(tag);
    return this;
  };
  protoOf(TaggedDecoder).r21 = function (deserializer, previousValue) {
    return this.s21(deserializer);
  };
  protoOf(TaggedDecoder).q21 = function (descriptor) {
    return this.k2h(this.s2g(), descriptor);
  };
  protoOf(TaggedDecoder).e21 = function () {
    var tmp0_elvis_lhs = this.z2f();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.z2g(currentTag);
  };
  protoOf(TaggedDecoder).f21 = function () {
    return null;
  };
  protoOf(TaggedDecoder).g21 = function () {
    return this.a2h(this.s2g());
  };
  protoOf(TaggedDecoder).h21 = function () {
    return this.b2h(this.s2g());
  };
  protoOf(TaggedDecoder).i21 = function () {
    return this.c2h(this.s2g());
  };
  protoOf(TaggedDecoder).j21 = function () {
    return this.d2h(this.s2g());
  };
  protoOf(TaggedDecoder).k21 = function () {
    return this.e2h(this.s2g());
  };
  protoOf(TaggedDecoder).l21 = function () {
    return this.f2h(this.s2g());
  };
  protoOf(TaggedDecoder).m21 = function () {
    return this.g2h(this.s2g());
  };
  protoOf(TaggedDecoder).n21 = function () {
    return this.h2h(this.s2g());
  };
  protoOf(TaggedDecoder).o21 = function () {
    return this.i2h(this.s2g());
  };
  protoOf(TaggedDecoder).p21 = function (enumDescriptor) {
    return this.j2h(this.s2g(), enumDescriptor);
  };
  protoOf(TaggedDecoder).t21 = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).u21 = function (descriptor) {
  };
  protoOf(TaggedDecoder).v21 = function (descriptor, index) {
    return this.a2h(this.v2f(descriptor, index));
  };
  protoOf(TaggedDecoder).w21 = function (descriptor, index) {
    return this.b2h(this.v2f(descriptor, index));
  };
  protoOf(TaggedDecoder).x21 = function (descriptor, index) {
    return this.c2h(this.v2f(descriptor, index));
  };
  protoOf(TaggedDecoder).y21 = function (descriptor, index) {
    return this.d2h(this.v2f(descriptor, index));
  };
  protoOf(TaggedDecoder).z21 = function (descriptor, index) {
    return this.e2h(this.v2f(descriptor, index));
  };
  protoOf(TaggedDecoder).a22 = function (descriptor, index) {
    return this.f2h(this.v2f(descriptor, index));
  };
  protoOf(TaggedDecoder).b22 = function (descriptor, index) {
    return this.g2h(this.v2f(descriptor, index));
  };
  protoOf(TaggedDecoder).c22 = function (descriptor, index) {
    return this.h2h(this.v2f(descriptor, index));
  };
  protoOf(TaggedDecoder).d22 = function (descriptor, index) {
    return this.i2h(this.v2f(descriptor, index));
  };
  protoOf(TaggedDecoder).e22 = function (descriptor, index) {
    return this.k2h(this.v2f(descriptor, index), descriptor.e20(index));
  };
  protoOf(TaggedDecoder).f22 = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.v2f(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).h22 = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.v2f(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).z2f = function () {
    return lastOrNull(this.v2g_1);
  };
  protoOf(TaggedDecoder).r2g = function (name) {
    this.v2g_1.n(name);
  };
  protoOf(TaggedDecoder).s2g = function () {
    var r = this.v2g_1.h2(get_lastIndex_0(this.v2g_1));
    this.w2g_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.l2h_1 = key;
    this.m2h_1 = value;
  }
  protoOf(MapEntry).y = function () {
    return this.l2h_1;
  };
  protoOf(MapEntry).z = function () {
    return this.m2h_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.l2h_1) + ', value=' + toString_0(this.m2h_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.l2h_1 == null ? 0 : hashCode(this.l2h_1);
    result = imul(result, 31) + (this.m2h_1 == null ? 0 : hashCode(this.m2h_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.l2h_1, tmp0_other_with_cast.l2h_1))
      return false;
    if (!equals(this.m2h_1, tmp0_other_with_cast.m2h_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.u1y('key', $keySerializer.g1y());
      $this$buildSerialDescriptor.u1y('value', $valueSerializer.g1y());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.p2h_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).g1y = function () {
    return this.p2h_1;
  };
  protoOf(MapEntrySerializer_0).q2h = function (_this__u8e3s4) {
    return _this__u8e3s4.y();
  };
  protoOf(MapEntrySerializer_0).r2h = function (_this__u8e3s4) {
    return this.q2h((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).s2h = function (_this__u8e3s4) {
    return _this__u8e3s4.z();
  };
  protoOf(MapEntrySerializer_0).t2h = function (_this__u8e3s4) {
    return this.s2h((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).u2h = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.u1y('first', $keySerializer.g1y());
      $this$buildClassSerialDescriptor.u1y('second', $valueSerializer.g1y());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.a2i_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).g1y = function () {
    return this.a2i_1;
  };
  protoOf(PairSerializer_0).b2i = function (_this__u8e3s4) {
    return _this__u8e3s4.bc_1;
  };
  protoOf(PairSerializer_0).r2h = function (_this__u8e3s4) {
    return this.b2i(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).c2i = function (_this__u8e3s4) {
    return _this__u8e3s4.cc_1;
  };
  protoOf(PairSerializer_0).t2h = function (_this__u8e3s4) {
    return this.c2i(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).u2h = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.g22($this.g2i_1, 0, $this.d2i_1);
    var b = composite.g22($this.g2i_1, 1, $this.e2i_1);
    var c = composite.g22($this.g2i_1, 2, $this.f2i_1);
    composite.u21($this.g2i_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.k22($this.g2i_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.g22($this.g2i_1, 0, $this.d2i_1);
          break;
        case 1:
          b = composite.g22($this.g2i_1, 1, $this.e2i_1);
          break;
        case 2:
          c = composite.g22($this.g2i_1, 2, $this.f2i_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.u21($this.g2i_1);
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
      $this$buildClassSerialDescriptor.u1y('first', this$0.d2i_1.g1y());
      $this$buildClassSerialDescriptor.u1y('second', this$0.e2i_1.g1y());
      $this$buildClassSerialDescriptor.u1y('third', this$0.f2i_1.g1y());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.d2i_1 = aSerializer;
    this.e2i_1 = bSerializer;
    this.f2i_1 = cSerializer;
    var tmp = this;
    tmp.g2i_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).g1y = function () {
    return this.g2i_1;
  };
  protoOf(TripleSerializer_0).h2i = function (encoder, value) {
    var structuredEncoder = encoder.t21(this.g2i_1);
    structuredEncoder.k23(this.g2i_1, 0, this.d2i_1, value.ap_1);
    structuredEncoder.k23(this.g2i_1, 1, this.e2i_1, value.bp_1);
    structuredEncoder.k23(this.g2i_1, 2, this.f2i_1, value.cp_1);
    structuredEncoder.u21(this.g2i_1);
  };
  protoOf(TripleSerializer_0).h1y = function (encoder, value) {
    return this.h2i(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).i1y = function (decoder) {
    var composite = decoder.t21(this.g2i_1);
    if (composite.j22()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.v2h_1 = keySerializer;
    this.w2h_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).x2h = function (encoder, value) {
    var structuredEncoder = encoder.t21(this.g1y());
    structuredEncoder.k23(this.g1y(), 0, this.v2h_1, this.r2h(value));
    structuredEncoder.k23(this.g1y(), 1, this.w2h_1, this.t2h(value));
    structuredEncoder.u21(this.g1y());
  };
  protoOf(KeyValueSerializer).h1y = function (encoder, value) {
    return this.x2h(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).i1y = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.g1y();
    var composite = decoder.t21(descriptor);
    var tmp$ret$0;
    $l$block: {
      if (composite.j22()) {
        var key = composite.g22(this.g1y(), 0, this.v2h_1);
        var value = composite.g22(this.g1y(), 1, this.w2h_1);
        tmp$ret$0 = this.u2h(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.k22(this.g1y());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.g22(this.g1y(), 0, this.v2h_1);
            break;
          case 1:
            value_0 = composite.g22(this.g1y(), 1, this.w2h_1);
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
      tmp$ret$0 = this.u2h(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.u21(descriptor);
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
    this.i2i_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_6(Companion_getInstance_2()));
  }
  protoOf(ULongSerializer).g1y = function () {
    return this.i2i_1;
  };
  protoOf(ULongSerializer).j2i = function (encoder, value) {
    var tmp = encoder.z22(this.i2i_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.t22(tmp$ret$0);
  };
  protoOf(ULongSerializer).h1y = function (encoder, value) {
    return this.j2i(encoder, value instanceof ULong ? value.lq_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).k2i = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.q21(this.i2i_1).k21();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).i1y = function (decoder) {
    return new ULong(this.k2i(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.l2i_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_8(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).g1y = function () {
    return this.l2i_1;
  };
  protoOf(UIntSerializer).m2i = function (encoder, value) {
    var tmp = encoder.z22(this.l2i_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.s22(tmp$ret$0);
  };
  protoOf(UIntSerializer).h1y = function (encoder, value) {
    return this.m2i(encoder, value instanceof UInt ? value.aq_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).n2i = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.q21(this.l2i_1).j21();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).i1y = function (decoder) {
    return new UInt(this.n2i(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.o2i_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_10(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).g1y = function () {
    return this.o2i_1;
  };
  protoOf(UShortSerializer).p2i = function (encoder, value) {
    var tmp = encoder.z22(this.o2i_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.r22(tmp$ret$0);
  };
  protoOf(UShortSerializer).h1y = function (encoder, value) {
    return this.p2i(encoder, value instanceof UShort ? value.wq_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).q2i = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.q21(this.o2i_1).i21();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).i1y = function (decoder) {
    return new UShort(this.q2i(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.r2i_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_12(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).g1y = function () {
    return this.r2i_1;
  };
  protoOf(UByteSerializer).s2i = function (encoder, value) {
    var tmp = encoder.z22(this.r2i_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.q22(tmp$ret$0);
  };
  protoOf(UByteSerializer).h1y = function (encoder, value) {
    return this.s2i(encoder, value instanceof UByte ? value.pp_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).t2i = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.q21(this.r2i_1).h21();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).i1y = function (decoder) {
    return new UByte(this.t2i(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function PolymorphicModuleBuilder(baseClass, baseSerializer) {
    baseSerializer = baseSerializer === VOID ? null : baseSerializer;
    this.u2i_1 = baseClass;
    this.v2i_1 = baseSerializer;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.w2i_1 = ArrayList_init_$Create$_0();
    this.x2i_1 = null;
    this.y2i_1 = null;
  }
  protoOf(PolymorphicModuleBuilder).z2i = function (subclass, serializer) {
    this.w2i_1.n(to(subclass, serializer));
  };
  protoOf(PolymorphicModuleBuilder).a2j = function (builder) {
    if (!(this.v2i_1 == null)) {
      builder.h2j(this.u2i_1, this.u2i_1, this.v2i_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.w2i_1.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var kclass = element.dc();
      var serializer = element.ec();
      var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var tmp$ret$0 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
      builder.h2j(this.u2i_1, tmp, tmp$ret$0);
    }
    var defaultSerializer = this.x2i_1;
    if (!(defaultSerializer == null)) {
      builder.i2j(this.u2i_1, defaultSerializer, false);
    }
    var defaultDeserializer = this.y2i_1;
    if (!(defaultDeserializer == null)) {
      builder.j2j(this.u2i_1, defaultDeserializer, false);
    }
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).p1z = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.q1z(kClass, typeArgumentsSerializers) : $super.q1z.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.l2j_1 = class2ContextualFactory;
    this.m2j_1 = polyBase2Serializers;
    this.n2j_1 = polyBase2DefaultSerializerProvider;
    this.o2j_1 = polyBase2NamedSerializers;
    this.p2j_1 = polyBase2DefaultDeserializerProvider;
    this.q2j_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).o1z = function () {
    return this.q2j_1;
  };
  protoOf(SerialModuleImpl).s23 = function (baseClass, value) {
    if (!baseClass.ic(value))
      return null;
    var tmp0_safe_receiver = this.m2j_1.k2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.n2j_1.k2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).r23 = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.o2j_1.k2(baseClass);
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
    var tmp_1 = this.p2j_1.k2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).q1z = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.l2j_1.k2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r2j(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).k2j = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.l2j_1.x().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.y();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.z();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.u2j_1;
        collector.v2j(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.t2j(kclass, serial.s2j_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.m2j_1.x().p();
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
        collector.w2j(tmp_1, tmp_2, tmp$ret$11);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.n2j_1.x().p();
    while (_iterator__ex2g4s_2.q()) {
      var element_2 = _iterator__ex2g4s_2.r();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.y();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.z();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.x2j(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.p2j_1.x().p();
    while (_iterator__ex2g4s_3.q()) {
      var element_3 = _iterator__ex2g4s_3.r();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.y();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.z();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.y2j(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.u2j_1 = serializer;
  }
  protoOf(Argless).r2j = function (typeArgumentsSerializers) {
    return this.u2j_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.u2j_1, this.u2j_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.u2j_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.s2j_1 = provider;
  }
  protoOf(WithTypeArguments).r2j = function (typeArgumentsSerializers) {
    return this.s2j_1(typeArgumentsSerializers);
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
    tmp.b2j_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.c2j_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.d2j_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.e2j_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.f2j_1 = HashMap_init_$Create$();
    this.g2j_1 = false;
  }
  protoOf(SerializersModuleBuilder).v2j = function (kClass, serializer) {
    return this.z2j(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).t2j = function (kClass, provider) {
    return this.z2j(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).w2j = function (baseClass, actualClass, actualSerializer) {
    this.h2j(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).x2j = function (baseClass, defaultSerializerProvider) {
    this.i2j(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).y2j = function (baseClass, defaultDeserializerProvider) {
    this.j2j(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).a2k = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.b2j_1.k2(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.b2j_1.n2(forClass, provider);
    if (isInterface_0(forClass))
      this.g2j_1 = true;
  };
  protoOf(SerializersModuleBuilder).z2j = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.a2k(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.a2k.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).i2j = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.d2j_1.k2(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString_0(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.d2j_1.n2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).j2j = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.f2j_1.k2(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString_0(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.f2j_1.n2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).b2k = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.g1y().h1z();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.c2j_1;
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
    var this_1 = this.e2j_1;
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
        names.o2(previousSerializer.g1y().h1z());
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
  protoOf(SerializersModuleBuilder).h2j = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.b2k(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.b2k.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).k27 = function () {
    return new SerialModuleImpl(this.b2j_1, this.c2j_1, this.d2j_1, this.e2j_1, this.f2j_1, this.g2j_1);
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
    this.c2k_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.c2k_1.equals(tmp0_other_with_cast.c2k_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.c2k_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.c2k_1) + ')';
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
          var tmp_1 = assocObject.j2a(args.slice());
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
    this.d2k_1 = $factory;
  }
  protoOf(createCache$1).r1z = function (key) {
    return this.d2k_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.e2k_1 = $factory;
  }
  protoOf(createParametrizedCache$1).s1z = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.e2k_1(key, types);
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
  protoOf(SerialDescriptorImpl).t1z = get_isNullable;
  protoOf(SerialDescriptorImpl).y1z = get_isInline;
  protoOf(AbstractDecoder).g22 = decodeSerializableElement$default;
  protoOf(AbstractDecoder).s21 = decodeSerializableValue;
  protoOf(AbstractDecoder).j22 = decodeSequentially;
  protoOf(AbstractDecoder).l22 = decodeCollectionSize;
  protoOf(AbstractEncoder).o23 = encodeNotNullMark;
  protoOf(AbstractEncoder).p23 = beginCollection;
  protoOf(AbstractEncoder).l23 = encodeSerializableValue;
  protoOf(AbstractEncoder).n23 = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).q23 = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).t1z = get_isNullable;
  protoOf(ListLikeDescriptor).y1z = get_isInline;
  protoOf(ListLikeDescriptor).a20 = get_annotations;
  protoOf(MapLikeDescriptor).t1z = get_isNullable;
  protoOf(MapLikeDescriptor).y1z = get_isInline;
  protoOf(MapLikeDescriptor).a20 = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).t1z = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).y1z = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).z29 = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).t1z = get_isNullable;
  protoOf(NothingSerialDescriptor).y1z = get_isInline;
  protoOf(NothingSerialDescriptor).a20 = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).t1z = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).y1z = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).a20 = get_annotations;
  protoOf(TaggedEncoder).p23 = beginCollection;
  protoOf(TaggedEncoder).l23 = encodeSerializableValue;
  protoOf(TaggedEncoder).n23 = encodeNullableSerializableValue;
  protoOf(TaggedEncoder).q23 = shouldEncodeElementDefault;
  protoOf(TaggedDecoder).g22 = decodeSerializableElement$default;
  protoOf(TaggedDecoder).s21 = decodeSerializableValue;
  protoOf(TaggedDecoder).j22 = decodeSequentially;
  protoOf(TaggedDecoder).l22 = decodeCollectionSize;
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
  _.$_$.y1 = LinkedHashMapSerializer;
  _.$_$.z1 = LinkedHashSetSerializer;
  _.$_$.a2 = NamedValueDecoder;
  _.$_$.b2 = NamedValueEncoder;
  _.$_$.c2 = PluginGeneratedSerialDescriptor;
  _.$_$.d2 = SerializerFactory;
  _.$_$.e2 = createAnnotatedEnumSerializer;
  _.$_$.f2 = createSimpleEnumSerializer;
  _.$_$.g2 = jsonCachedSerialNames;
  _.$_$.h2 = throwMissingFieldException;
  _.$_$.i2 = EmptySerializersModule_0;
  _.$_$.j2 = PolymorphicModuleBuilder;
  _.$_$.k2 = SerializersModuleBuilder;
  _.$_$.l2 = contextual;
  _.$_$.m2 = SerializersModuleCollector;
  _.$_$.n2 = BinaryFormat;
  _.$_$.o2 = DeserializationStrategy;
  _.$_$.p2 = KSerializer;
  _.$_$.q2 = MissingFieldException;
  _.$_$.r2 = SealedClassSerializer;
  _.$_$.s2 = SerializationException;
  _.$_$.t2 = SerializationStrategy;
  _.$_$.u2 = StringFormat;
  _.$_$.v2 = findPolymorphicSerializer_0;
  _.$_$.w2 = findPolymorphicSerializer;
  _.$_$.x2 = serializerOrNull_0;
  _.$_$.y2 = serializerOrNull;
  _.$_$.z2 = serializer_0;
  _.$_$.a3 = serializer_1;
  _.$_$.b3 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
