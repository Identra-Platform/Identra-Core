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
  var protoOf = kotlin_kotlin.$_$.x3;
  var initMetadataForInterface = kotlin_kotlin.$_$.s3;
  var initMetadataForClass = kotlin_kotlin.$_$.p3;
  var VOID = kotlin_kotlin.$_$.c;
  var isBlank = kotlin_kotlin.$_$.g4;
  var toString = kotlin_kotlin.$_$.z3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s;
  var Unit_instance = kotlin_kotlin.$_$.l1;
  var equals = kotlin_kotlin.$_$.k3;
  var toList = kotlin_kotlin.$_$.f2;
  var emptyList = kotlin_kotlin.$_$.u1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.j;
  var toHashSet = kotlin_kotlin.$_$.e2;
  var copyToArray = kotlin_kotlin.$_$.s1;
  var toBooleanArray = kotlin_kotlin.$_$.d2;
  var withIndex = kotlin_kotlin.$_$.i2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.p1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.f;
  var to = kotlin_kotlin.$_$.e5;
  var toMap = kotlin_kotlin.$_$.g2;
  var lazy = kotlin_kotlin.$_$.a5;
  var contentEquals = kotlin_kotlin.$_$.q1;
  var until = kotlin_kotlin.$_$.b4;
  var joinToString = kotlin_kotlin.$_$.x1;
  var KProperty1 = kotlin_kotlin.$_$.c4;
  var getPropertyCallableRef = kotlin_kotlin.$_$.m3;
  var initMetadataForObject = kotlin_kotlin.$_$.u3;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.y4;
  var getStringHashCode = kotlin_kotlin.$_$.n3;
  var hashCode = kotlin_kotlin.$_$.o3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u;
  var isInterface = kotlin_kotlin.$_$.v3;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var contentHashCode = kotlin_kotlin.$_$.r1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.h;
  var booleanArray = kotlin_kotlin.$_$.e3;
  var emptyMap = kotlin_kotlin.$_$.v1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy_0 = kotlin_kotlin.$_$.z4;
  var get_indices = kotlin_kotlin.$_$.w1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.w;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(elementNames$$inlined$Iterable$1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(HashMapClassDesc, 'HashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer');
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(HashMapSerializer, 'HashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(EnumSerializer, 'EnumSerializer');
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(EnumDescriptor, 'EnumDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer');
  initMetadataForObject(StringSerializer, 'StringSerializer');
  initMetadataForClass(PrimitiveSerialDescriptor, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  //endregion
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
    this.j11_1 = $this_elementDescriptors;
    this.i11_1 = $this_elementDescriptors.f11();
  }
  protoOf(elementDescriptors$1).f = function () {
    return this.i11_1 > 0;
  };
  protoOf(elementDescriptors$1).g = function () {
    var tmp = this.j11_1.f11();
    var _unary__edvuaz = this.i11_1;
    this.i11_1 = _unary__edvuaz - 1 | 0;
    return this.j11_1.h11(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.k11_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).e = function () {
    return new elementDescriptors$1(this.k11_1);
  };
  function elementNames$1($this_elementNames) {
    this.m11_1 = $this_elementNames;
    this.l11_1 = $this_elementNames.f11();
  }
  protoOf(elementNames$1).f = function () {
    return this.l11_1 > 0;
  };
  protoOf(elementNames$1).g = function () {
    var tmp = this.m11_1.f11();
    var _unary__edvuaz = this.l11_1;
    this.l11_1 = _unary__edvuaz - 1 | 0;
    return this.m11_1.g11(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.n11_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).e = function () {
    return new elementNames$1(this.n11_1);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.r11_1.h(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.o11_1 = serialName;
    this.p11_1 = false;
    this.q11_1 = emptyList();
    this.r11_1 = ArrayList_init_$Create$();
    this.s11_1 = HashSet_init_$Create$();
    this.t11_1 = ArrayList_init_$Create$();
    this.u11_1 = ArrayList_init_$Create$();
    this.v11_1 = ArrayList_init_$Create$();
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.h12_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.j1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.g12_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.g11(it) + ': ' + this$0.h11(it).d11();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.w11_1 = serialName;
    this.x11_1 = kind;
    this.y11_1 = elementsCount;
    this.z11_1 = builder.q11_1;
    this.a12_1 = toHashSet(builder.r11_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.r11_1;
    tmp.b12_1 = copyToArray(this_0);
    this.c12_1 = compactArray(builder.t11_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.u11_1;
    tmp_0.d12_1 = copyToArray(this_1);
    this.e12_1 = toBooleanArray(builder.v11_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.b12_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.e();
    while (_iterator__ex2g4s.f()) {
      var item = _iterator__ex2g4s.g();
      var tmp$ret$2 = to(item.t9_1, item.s9_1);
      destination.m(tmp$ret$2);
    }
    tmp_1.f12_1 = toMap(destination);
    this.g12_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.h12_1 = lazy(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).d11 = function () {
    return this.w11_1;
  };
  protoOf(SerialDescriptorImpl).e11 = function () {
    return this.x11_1;
  };
  protoOf(SerialDescriptorImpl).f11 = function () {
    return this.y11_1;
  };
  protoOf(SerialDescriptorImpl).i12 = function () {
    return this.a12_1;
  };
  protoOf(SerialDescriptorImpl).g11 = function (index) {
    return getChecked(this.b12_1, index);
  };
  protoOf(SerialDescriptorImpl).h11 = function (index) {
    return getChecked(this.c12_1, index);
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
      if (!(this.d11() === other.d11())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.g12_1, other.g12_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.f11() === other.f11())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.f11();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.h11(index).d11() === other.h11(index).d11())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.h11(index).e11(), other.h11(index).e11())) {
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
    var tmp = until(0, this.y11_1);
    var tmp_0 = this.w11_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
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
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).r7());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
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
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).d11 = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.l12_1 = elementDescriptor;
    this.m12_1 = 1;
  }
  protoOf(ListLikeDescriptor).e11 = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).f11 = function () {
    return this.m12_1;
  };
  protoOf(ListLikeDescriptor).g11 = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).h11 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.d11() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.l12_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.l12_1, other.l12_1) && this.d11() === other.d11())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.l12_1), 31) + getStringHashCode(this.d11()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.d11() + '(' + toString(this.l12_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.n12_1 = serialName;
    this.o12_1 = keyDescriptor;
    this.p12_1 = valueDescriptor;
    this.q12_1 = 2;
  }
  protoOf(MapLikeDescriptor).d11 = function () {
    return this.n12_1;
  };
  protoOf(MapLikeDescriptor).e11 = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).f11 = function () {
    return this.q12_1;
  };
  protoOf(MapLikeDescriptor).g11 = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).h11 = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.d11() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.o12_1;
        break;
      case 1:
        tmp = this.p12_1;
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
    if (!(this.d11() === other.d11()))
      return false;
    if (!equals(this.o12_1, other.o12_1))
      return false;
    if (!equals(this.p12_1, other.p12_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.d11());
    result = imul(31, result) + hashCode(this.o12_1) | 0;
    result = imul(31, result) + hashCode(this.p12_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.d11() + '(' + toString(this.o12_1) + ', ' + toString(this.p12_1) + ')';
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.s12_1 = new ArrayListClassDesc(element.t12());
  }
  protoOf(ArrayListSerializer).t12 = function () {
    return this.s12_1;
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.w12_1 = new HashMapClassDesc(kSerializer.t12(), vSerializer.t12());
  }
  protoOf(HashMapSerializer).t12 = function () {
    return this.w12_1;
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.y12_1 = keySerializer;
    this.z12_1 = valueSerializer;
  }
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.x12_1 = elementSerializer;
  }
  function AbstractCollectionSerializer() {
  }
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.a13_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.a13_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.p13(element.o1_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.b13_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer(serialName, values) {
    this.a13_1 = values;
    this.b13_1 = null;
    var tmp = this;
    tmp.c13_1 = lazy(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).t12 = function () {
    var tmp0 = this.c13_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.j1();
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.t12().d11() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.d14_1;
    // Inline function 'kotlin.getValue' call
    elementDescriptors$factory();
    return tmp0.j1();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.g11(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.c14_1 = ENUM_getInstance();
    var tmp = this;
    tmp.d14_1 = lazy(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).e11 = function () {
    return this.c14_1;
  };
  protoOf(EnumDescriptor).h11 = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.e11() === ENUM_getInstance()))
      return false;
    if (!(this.d11() === other.d11()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.d11() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.d11());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = get_elementNames(this).e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
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
      return receiver.t12();
    }, null);
  }
  function elementDescriptors$factory() {
    return getPropertyCallableRef('elementDescriptors', 1, KProperty1, function (receiver) {
      return _get_elementDescriptors__y23q9p(receiver);
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
      return _this__u8e3s4.i12();
    var result = HashSet_init_$Create$_0(_this__u8e3s4.f11());
    var inductionVariable = 0;
    var last = _this__u8e3s4.f11();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.g11(i);
        result.m(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.p())) {
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
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.d11());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.d11();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.e();
    while (_iterator__ex2g4s_0.f()) {
      var element_0 = _iterator__ex2g4s_0.g();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.e11();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.m13_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.j1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.o13_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory_0();
    return tmp0.j1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.h13_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.h13_1[i];
        indices.m3(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.e13_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g14();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.e13_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h14();
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
          var tmp$ret$0 = item.t12();
          destination.m(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.e14());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.g11(i) + ': ' + this$0.h11(i).d11();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.d13_1 = serialName;
    this.e13_1 = generatedSerializer;
    this.f13_1 = elementsCount;
    this.g13_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.f13_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.h13_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.f13_1;
    tmp_3.i13_1 = Array(size);
    this.j13_1 = null;
    this.k13_1 = booleanArray(this.f13_1);
    this.l13_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.m13_1 = lazy_0(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.n13_1 = lazy_0(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.o13_1 = lazy_0(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).d11 = function () {
    return this.d13_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).f11 = function () {
    return this.f13_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).e11 = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).i12 = function () {
    return this.l13_1.m1();
  };
  protoOf(PluginGeneratedSerialDescriptor).e14 = function () {
    var tmp0 = this.n13_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.j1();
  };
  protoOf(PluginGeneratedSerialDescriptor).f14 = function (name, isOptional) {
    this.g13_1 = this.g13_1 + 1 | 0;
    this.h13_1[this.g13_1] = name;
    this.k13_1[this.g13_1] = isOptional;
    this.i13_1[this.g13_1] = null;
    if (this.g13_1 === (this.f13_1 - 1 | 0)) {
      this.l13_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).p13 = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.f14(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.f14.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).h11 = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).t12();
  };
  protoOf(PluginGeneratedSerialDescriptor).g11 = function (index) {
    return getChecked(this.h13_1, index);
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
      if (!(this.d11() === other.d11())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.e14(), other.e14())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.f11() === other.f11())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.f11();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.h11(index).d11() === other.h11(index).d11())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.h11(index).e11(), other.h11(index).e11())) {
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
    var tmp = until(0, this.f13_1);
    var tmp_0 = this.d11() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.e14();
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
  function StringSerializer() {
    StringSerializer_instance = this;
    this.i14_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).t12 = function () {
    return this.i14_1;
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.j14_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    this.j14_1 = serialName;
    this.k14_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).d11 = function () {
    return this.j14_1;
  };
  protoOf(PrimitiveSerialDescriptor).e11 = function () {
    return this.k14_1;
  };
  protoOf(PrimitiveSerialDescriptor).f11 = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).g11 = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).h11 = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.j14_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.j14_1 === other.j14_1 && equals(this.k14_1, other.k14_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.j14_1) + imul(31, this.k14_1.hashCode()) | 0;
  };
  function SerializableWith() {
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = StringSerializer_getInstance;
  _.$_$.b = ArrayListSerializer;
  _.$_$.c = typeParametersSerializers;
  _.$_$.d = GeneratedSerializer;
  _.$_$.e = HashMapSerializer;
  _.$_$.f = PluginGeneratedSerialDescriptor;
  _.$_$.g = createSimpleEnumSerializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
