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
  var equals = kotlin_kotlin.$_$.rc;
  var hashCode = kotlin_kotlin.$_$.wc;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var IsolateState = kotlin_co_touchlab_stately_isolate.$_$.a;
  var protoOf = kotlin_kotlin.$_$.be;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var Collection = kotlin_kotlin.$_$.o6;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var VOID = kotlin_kotlin.$_$.j;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var createState = kotlin_co_touchlab_stately_isolate.$_$.b;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b3;
  var asJsMapView = kotlin_kotlin.$_$.y6;
  var asJsReadonlyMapView = kotlin_kotlin.$_$.v6;
  var KtMutableMap = kotlin_kotlin.$_$.z6;
  var objectCreate = kotlin_kotlin.$_$.ae;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  var asJsReadonlySetView = kotlin_kotlin.$_$.c7;
  var KtMutableSet = kotlin_kotlin.$_$.a7;
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
      return it.w($element);
    };
  }
  function IsoMutableCollection$containsAll$lambda($elements) {
    return function (it) {
      return it.b2($elements);
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
    it.g2();
    return Unit_instance;
  }
  function IsoMutableCollection$iterator$lambda(this$0) {
    return function (it) {
      return new IsoMutableIterator(this$0.a6d(it.p()));
    };
  }
  function IsoMutableCollection$remove$lambda($element) {
    return function (it) {
      return it.f2($element);
    };
  }
  function IsoMutableCollection(stateHolder) {
    IsolateState.call(this, stateHolder);
  }
  protoOf(IsoMutableCollection).equals = function (other) {
    return this.b6d(IsoMutableCollection$equals$lambda(other));
  };
  protoOf(IsoMutableCollection).hashCode = function () {
    return this.b6d(IsoMutableCollection$hashCode$lambda);
  };
  protoOf(IsoMutableCollection).s = function () {
    return this.b6d(IsoMutableCollection$_get_size_$lambda_ojq7a4);
  };
  protoOf(IsoMutableCollection).uh = function (element) {
    return this.b6d(IsoMutableCollection$contains$lambda(element));
  };
  protoOf(IsoMutableCollection).w = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.uh((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(IsoMutableCollection).vh = function (elements) {
    return this.b6d(IsoMutableCollection$containsAll$lambda(elements));
  };
  protoOf(IsoMutableCollection).b2 = function (elements) {
    return this.vh(elements);
  };
  protoOf(IsoMutableCollection).h = function () {
    return this.b6d(IsoMutableCollection$isEmpty$lambda);
  };
  protoOf(IsoMutableCollection).d6d = function (element) {
    return this.b6d(IsoMutableCollection$add$lambda(element));
  };
  protoOf(IsoMutableCollection).n = function (element) {
    return this.d6d((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(IsoMutableCollection).e6d = function (elements) {
    return this.b6d(IsoMutableCollection$addAll$lambda(elements));
  };
  protoOf(IsoMutableCollection).t = function (elements) {
    return this.e6d(elements);
  };
  protoOf(IsoMutableCollection).g2 = function () {
    return this.b6d(IsoMutableCollection$clear$lambda);
  };
  protoOf(IsoMutableCollection).p = function () {
    return this.b6d(IsoMutableCollection$iterator$lambda(this));
  };
  protoOf(IsoMutableCollection).f6d = function (element) {
    return this.b6d(IsoMutableCollection$remove$lambda(element));
  };
  protoOf(IsoMutableCollection).f2 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.f6d((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function IsoMutableIterator$hasNext$lambda(it) {
    return it.q();
  }
  function IsoMutableIterator$next$lambda(it) {
    return it.r();
  }
  function IsoMutableIterator$remove$lambda(it) {
    it.a5();
    return Unit_instance;
  }
  function IsoMutableIterator(stateHolder) {
    IsolateState.call(this, stateHolder);
  }
  protoOf(IsoMutableIterator).q = function () {
    return this.b6d(IsoMutableIterator$hasNext$lambda);
  };
  protoOf(IsoMutableIterator).r = function () {
    return this.b6d(IsoMutableIterator$next$lambda);
  };
  protoOf(IsoMutableIterator).a5 = function () {
    return this.b6d(IsoMutableIterator$remove$lambda);
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
      return it.k2($key);
    };
  }
  function IsoMutableMap$containsValue$lambda($value) {
    return function (it) {
      return it.l2($value);
    };
  }
  function IsoMutableMap$get$lambda($key) {
    return function (it) {
      return it.m2($key);
    };
  }
  function IsoMutableMap$isEmpty$lambda(it) {
    return it.h();
  }
  function IsoMutableMap$_get_keys_$lambda_z6b79x(this$0) {
    return function (it) {
      return new IsoMutableSet(this$0.a6d(it.n2()));
    };
  }
  function IsoMutableMap$_get_values_$lambda_waxbzb(this$0) {
    return function (it) {
      return new IsoMutableCollection(this$0.a6d(it.o2()));
    };
  }
  function IsoMutableMap$clear$lambda(it) {
    it.g2();
    return Unit_instance;
  }
  function IsoMutableMap$put$lambda($key, $value) {
    return function (it) {
      return it.p2($key, $value);
    };
  }
  function IsoMutableMap$putAll$lambda($from) {
    return function (it) {
      it.r2($from);
      return Unit_instance;
    };
  }
  function IsoMutableMap$remove$lambda($key) {
    return function (it) {
      return it.q2($key);
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
    return this.b6d(IsoMutableMap$_get_size_$lambda_5ut66g);
  };
  protoOf(IsoMutableMap).k2 = function (key) {
    return this.b6d(IsoMutableMap$containsKey$lambda(key));
  };
  protoOf(IsoMutableMap).l2 = function (value) {
    return this.b6d(IsoMutableMap$containsValue$lambda(value));
  };
  protoOf(IsoMutableMap).m2 = function (key) {
    return this.b6d(IsoMutableMap$get$lambda(key));
  };
  protoOf(IsoMutableMap).h = function () {
    return this.b6d(IsoMutableMap$isEmpty$lambda);
  };
  protoOf(IsoMutableMap).z = function () {
    throw UnsupportedOperationException_init_$Create$("Can't leak mutable reference");
  };
  protoOf(IsoMutableMap).n2 = function () {
    return this.b6d(IsoMutableMap$_get_keys_$lambda_z6b79x(this));
  };
  protoOf(IsoMutableMap).o2 = function () {
    return this.b6d(IsoMutableMap$_get_values_$lambda_waxbzb(this));
  };
  protoOf(IsoMutableMap).g2 = function () {
    return this.b6d(IsoMutableMap$clear$lambda);
  };
  protoOf(IsoMutableMap).p2 = function (key, value) {
    return this.b6d(IsoMutableMap$put$lambda(key, value));
  };
  protoOf(IsoMutableMap).r2 = function (from) {
    return this.b6d(IsoMutableMap$putAll$lambda(from));
  };
  protoOf(IsoMutableMap).q2 = function (key) {
    return this.b6d(IsoMutableMap$remove$lambda(key));
  };
  protoOf(IsoMutableMap).equals = function (other) {
    return this.b6d(IsoMutableMap$equals$lambda(other));
  };
  protoOf(IsoMutableMap).hashCode = function () {
    return this.b6d(IsoMutableMap$hashCode$lambda);
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
