(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './Stately-stately-isolate.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./Stately-stately-isolate.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Stately-stately-iso-collections'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Stately-stately-iso-collections'.");
    }
    if (typeof globalThis['Stately-stately-isolate'] === 'undefined') {
      throw new Error("Error loading module 'Stately-stately-iso-collections'. Its dependency 'Stately-stately-isolate' was not found. Please, check whether 'Stately-stately-isolate' is loaded prior to 'Stately-stately-iso-collections'.");
    }
    globalThis['Stately-stately-iso-collections'] = factory(typeof globalThis['Stately-stately-iso-collections'] === 'undefined' ? {} : globalThis['Stately-stately-iso-collections'], globalThis['kotlin-kotlin-stdlib'], globalThis['Stately-stately-isolate']);
  }
}(function (_, kotlin_kotlin, kotlin_co_touchlab_stately_isolate) {
  'use strict';
  //region block: imports
  var equals = kotlin_kotlin.$_$.wb;
  var hashCode = kotlin_kotlin.$_$.bc;
  var Unit_instance = kotlin_kotlin.$_$.a6;
  var IsolateState = kotlin_co_touchlab_stately_isolate.$_$.a;
  var protoOf = kotlin_kotlin.$_$.gd;
  var THROW_CCE = kotlin_kotlin.$_$.ai;
  var Collection = kotlin_kotlin.$_$.c6;
  var initMetadataForClass = kotlin_kotlin.$_$.cc;
  var VOID = kotlin_kotlin.$_$.j;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var createState = kotlin_co_touchlab_stately_isolate.$_$.b;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.v2;
  var asJsMapView = kotlin_kotlin.$_$.m6;
  var asJsReadonlyMapView = kotlin_kotlin.$_$.j6;
  var KtMutableMap = kotlin_kotlin.$_$.n6;
  var objectCreate = kotlin_kotlin.$_$.fd;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.e1;
  var asJsReadonlySetView = kotlin_kotlin.$_$.p6;
  var KtMutableSet = kotlin_kotlin.$_$.o6;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(IsoMutableCollection, 'IsoMutableCollection', VOID, IsolateState, [IsolateState, Collection]);
  initMetadataForClass(IsoMutableIterator, 'IsoMutableIterator', VOID, IsolateState);
  initMetadataForClass(IsoMutableMap, 'IsoMutableMap', IsoMutableMap, IsolateState, [IsolateState, KtMutableMap]);
  initMetadataForClass(IsoMutableSet, 'IsoMutableSet', IsoMutableSet_init_$Create$, IsoMutableCollection, [IsoMutableCollection, KtMutableSet]);
  //endregion
  function IsoMutableCollection$equals$lambda($other) {
    return function (it) {
      return equals(it, $other);
    };
  }
  function IsoMutableCollection$hashCode$lambda(it) {
    return hashCode(it);
  }
  function IsoMutableCollection$_get_size_$lambda_ojq7a4(it) {
    return it.s();
  }
  function IsoMutableCollection$contains$lambda($element) {
    return function (it) {
      return it.x1($element);
    };
  }
  function IsoMutableCollection$containsAll$lambda($elements) {
    return function (it) {
      return it.y1($elements);
    };
  }
  function IsoMutableCollection$isEmpty$lambda(it) {
    return it.h();
  }
  function IsoMutableCollection$add$lambda($element) {
    return function (it) {
      return it.n($element);
    };
  }
  function IsoMutableCollection$addAll$lambda($elements) {
    return function (it) {
      return it.t($elements);
    };
  }
  function IsoMutableCollection$clear$lambda(it) {
    it.e2();
    return Unit_instance;
  }
  function IsoMutableCollection$iterator$lambda(this$0) {
    return function (it) {
      return new IsoMutableIterator(this$0.w6a(it.p()));
    };
  }
  function IsoMutableCollection$remove$lambda($element) {
    return function (it) {
      return it.d2($element);
    };
  }
  function IsoMutableCollection(stateHolder) {
    IsolateState.call(this, stateHolder);
  }
  protoOf(IsoMutableCollection).equals = function (other) {
    return this.x6a(IsoMutableCollection$equals$lambda(other));
  };
  protoOf(IsoMutableCollection).hashCode = function () {
    return this.x6a(IsoMutableCollection$hashCode$lambda);
  };
  protoOf(IsoMutableCollection).s = function () {
    return this.x6a(IsoMutableCollection$_get_size_$lambda_ojq7a4);
  };
  protoOf(IsoMutableCollection).th = function (element) {
    return this.x6a(IsoMutableCollection$contains$lambda(element));
  };
  protoOf(IsoMutableCollection).x1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.th((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(IsoMutableCollection).uh = function (elements) {
    return this.x6a(IsoMutableCollection$containsAll$lambda(elements));
  };
  protoOf(IsoMutableCollection).y1 = function (elements) {
    return this.uh(elements);
  };
  protoOf(IsoMutableCollection).h = function () {
    return this.x6a(IsoMutableCollection$isEmpty$lambda);
  };
  protoOf(IsoMutableCollection).z6a = function (element) {
    return this.x6a(IsoMutableCollection$add$lambda(element));
  };
  protoOf(IsoMutableCollection).n = function (element) {
    return this.z6a((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(IsoMutableCollection).a6b = function (elements) {
    return this.x6a(IsoMutableCollection$addAll$lambda(elements));
  };
  protoOf(IsoMutableCollection).t = function (elements) {
    return this.a6b(elements);
  };
  protoOf(IsoMutableCollection).e2 = function () {
    return this.x6a(IsoMutableCollection$clear$lambda);
  };
  protoOf(IsoMutableCollection).p = function () {
    return this.x6a(IsoMutableCollection$iterator$lambda(this));
  };
  protoOf(IsoMutableCollection).b6b = function (element) {
    return this.x6a(IsoMutableCollection$remove$lambda(element));
  };
  protoOf(IsoMutableCollection).d2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.b6b((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function IsoMutableIterator$hasNext$lambda(it) {
    return it.q();
  }
  function IsoMutableIterator$next$lambda(it) {
    return it.r();
  }
  function IsoMutableIterator$remove$lambda(it) {
    it.y4();
    return Unit_instance;
  }
  function IsoMutableIterator(stateHolder) {
    IsolateState.call(this, stateHolder);
  }
  protoOf(IsoMutableIterator).q = function () {
    return this.x6a(IsoMutableIterator$hasNext$lambda);
  };
  protoOf(IsoMutableIterator).r = function () {
    return this.x6a(IsoMutableIterator$next$lambda);
  };
  protoOf(IsoMutableIterator).y4 = function () {
    return this.x6a(IsoMutableIterator$remove$lambda);
  };
  function IsoMutableMap$_init_$lambda_xuvuuo() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    return LinkedHashMap_init_$Create$();
  }
  function IsoMutableMap$_get_size_$lambda_5ut66g(it) {
    return it.s();
  }
  function IsoMutableMap$containsKey$lambda($key) {
    return function (it) {
      return it.i2($key);
    };
  }
  function IsoMutableMap$containsValue$lambda($value) {
    return function (it) {
      return it.j2($value);
    };
  }
  function IsoMutableMap$get$lambda($key) {
    return function (it) {
      return it.k2($key);
    };
  }
  function IsoMutableMap$isEmpty$lambda(it) {
    return it.h();
  }
  function IsoMutableMap$_get_keys_$lambda_z6b79x(this$0) {
    return function (it) {
      return new IsoMutableSet(this$0.w6a(it.l2()));
    };
  }
  function IsoMutableMap$_get_values_$lambda_waxbzb(this$0) {
    return function (it) {
      return new IsoMutableCollection(this$0.w6a(it.m2()));
    };
  }
  function IsoMutableMap$clear$lambda(it) {
    it.e2();
    return Unit_instance;
  }
  function IsoMutableMap$put$lambda($key, $value) {
    return function (it) {
      return it.n2($key, $value);
    };
  }
  function IsoMutableMap$putAll$lambda($from) {
    return function (it) {
      it.p2($from);
      return Unit_instance;
    };
  }
  function IsoMutableMap$remove$lambda($key) {
    return function (it) {
      return it.o2($key);
    };
  }
  function IsoMutableMap$equals$lambda($other) {
    return function (it) {
      return equals(it, $other);
    };
  }
  function IsoMutableMap$hashCode$lambda(it) {
    return hashCode(it);
  }
  function IsoMutableMap(stateRunner, producer) {
    stateRunner = stateRunner === VOID ? null : stateRunner;
    var tmp;
    if (producer === VOID) {
      tmp = IsoMutableMap$_init_$lambda_xuvuuo;
    } else {
      tmp = producer;
    }
    producer = tmp;
    IsolateState.call(this, createState(stateRunner, producer));
  }
  protoOf(IsoMutableMap).s = function () {
    return this.x6a(IsoMutableMap$_get_size_$lambda_5ut66g);
  };
  protoOf(IsoMutableMap).i2 = function (key) {
    return this.x6a(IsoMutableMap$containsKey$lambda(key));
  };
  protoOf(IsoMutableMap).j2 = function (value) {
    return this.x6a(IsoMutableMap$containsValue$lambda(value));
  };
  protoOf(IsoMutableMap).k2 = function (key) {
    return this.x6a(IsoMutableMap$get$lambda(key));
  };
  protoOf(IsoMutableMap).h = function () {
    return this.x6a(IsoMutableMap$isEmpty$lambda);
  };
  protoOf(IsoMutableMap).x = function () {
    throw UnsupportedOperationException_init_$Create$("Can't leak mutable reference");
  };
  protoOf(IsoMutableMap).l2 = function () {
    return this.x6a(IsoMutableMap$_get_keys_$lambda_z6b79x(this));
  };
  protoOf(IsoMutableMap).m2 = function () {
    return this.x6a(IsoMutableMap$_get_values_$lambda_waxbzb(this));
  };
  protoOf(IsoMutableMap).e2 = function () {
    return this.x6a(IsoMutableMap$clear$lambda);
  };
  protoOf(IsoMutableMap).n2 = function (key, value) {
    return this.x6a(IsoMutableMap$put$lambda(key, value));
  };
  protoOf(IsoMutableMap).p2 = function (from) {
    return this.x6a(IsoMutableMap$putAll$lambda(from));
  };
  protoOf(IsoMutableMap).o2 = function (key) {
    return this.x6a(IsoMutableMap$remove$lambda(key));
  };
  protoOf(IsoMutableMap).equals = function (other) {
    return this.x6a(IsoMutableMap$equals$lambda(other));
  };
  protoOf(IsoMutableMap).hashCode = function () {
    return this.x6a(IsoMutableMap$hashCode$lambda);
  };
  function IsoMutableSet_init_$Init$(stateRunner, producer, $this) {
    stateRunner = stateRunner === VOID ? null : stateRunner;
    var tmp;
    if (producer === VOID) {
      tmp = IsoMutableSet$_init_$lambda_l0amie;
    } else {
      tmp = producer;
    }
    producer = tmp;
    IsoMutableSet.call($this, createState(stateRunner, producer));
    return $this;
  }
  function IsoMutableSet_init_$Create$(stateRunner, producer) {
    return IsoMutableSet_init_$Init$(stateRunner, producer, objectCreate(protoOf(IsoMutableSet)));
  }
  function IsoMutableSet$_init_$lambda_l0amie() {
    // Inline function 'kotlin.collections.mutableSetOf' call
    return LinkedHashSet_init_$Create$();
  }
  function IsoMutableSet(stateHolder) {
    IsoMutableCollection.call(this, stateHolder);
  }
  //region block: post-declaration
  protoOf(IsoMutableMap).asJsMapView = asJsMapView;
  protoOf(IsoMutableMap).asJsReadonlyMapView = asJsReadonlyMapView;
  protoOf(IsoMutableSet).asJsReadonlySetView = asJsReadonlySetView;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = IsoMutableMap;
  _.$_$.b = IsoMutableSet;
  _.$_$.c = IsoMutableSet_init_$Init$;
  //endregion
  return _;
}));

//# sourceMappingURL=Stately-stately-iso-collections.js.map
