(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-atomicfu.js', './Stately-stately-iso-collections.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-atomicfu.js'), require('./Stately-stately-iso-collections.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'cache4k-cache4k'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'cache4k-cache4k'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'cache4k-cache4k'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'cache4k-cache4k'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'cache4k-cache4k'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'cache4k-cache4k'.");
    }
    if (typeof globalThis['Stately-stately-iso-collections'] === 'undefined') {
      throw new Error("Error loading module 'cache4k-cache4k'. Its dependency 'Stately-stately-iso-collections' was not found. Please, check whether 'Stately-stately-iso-collections' is loaded prior to 'cache4k-cache4k'.");
    }
    globalThis['cache4k-cache4k'] = factory(typeof globalThis['cache4k-cache4k'] === 'undefined' ? {} : globalThis['cache4k-cache4k'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-atomicfu'], globalThis['Stately-stately-iso-collections']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_co_touchlab_stately_iso_collections) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.wc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.tb;
  var Long = kotlin_kotlin.$_$.ch;
  var Companion_getInstance = kotlin_kotlin.$_$.m5;
  var Duration__isPositive_impl_tvkkt2 = kotlin_kotlin.$_$.x2;
  var toString = kotlin_kotlin.$_$.ad;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var Unit_instance = kotlin_kotlin.$_$.w5;
  var Monotonic_instance = kotlin_kotlin.$_$.n5;
  var initMetadataForClass = kotlin_kotlin.$_$.sb;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.ih;
  var equals = kotlin_kotlin.$_$.mb;
  var hashCode = kotlin_kotlin.$_$.rb;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var CoroutineImpl = kotlin_kotlin.$_$.wa;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.fa;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ub;
  var get_atomicfu$reentrantLock = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var VOID = kotlin_kotlin.$_$.j;
  var listOfNotNull = kotlin_kotlin.$_$.n8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var toLong = kotlin_kotlin.$_$.yc;
  var initMetadataForLambda = kotlin_kotlin.$_$.xb;
  var firstOrNull = kotlin_kotlin.$_$.v7;
  var Duration__isFinite_impl_rzjsps = kotlin_kotlin.$_$.w2;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var IsoMutableSet = kotlin_co_touchlab_stately_iso_collections.$_$.b;
  var IsoMutableSet_init_$Init$ = kotlin_co_touchlab_stately_iso_collections.$_$.c;
  var KtMutableSet = kotlin_kotlin.$_$.j6;
  var IsoMutableMap = kotlin_co_touchlab_stately_iso_collections.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(CacheBuilderImpl, 'CacheBuilderImpl', CacheBuilderImpl);
  initMetadataForClass(Created, 'Created');
  initMetadataForClass(Updated, 'Updated');
  initMetadataForClass(Expired, 'Expired');
  initMetadataForClass(Evicted, 'Evicted');
  initMetadataForCoroutine($synchronizedForCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(KeyedSynchronizer, 'KeyedSynchronizer', KeyedSynchronizer, VOID, VOID, [2]);
  initMetadataForClass(MutexEntry, 'MutexEntry');
  initMetadataForLambda(RealCache$get$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(RealCache, 'RealCache', VOID, VOID, VOID, [2]);
  initMetadataForClass(CacheEntry, 'CacheEntry');
  initMetadataForClass(ReorderingIsoMutableSet, 'ReorderingIsoMutableSet', ReorderingIsoMutableSet, IsoMutableSet, [IsoMutableSet, KtMutableSet]);
  initMetadataForClass(ConcurrentMutableMap, 'ConcurrentMutableMap', ConcurrentMutableMap);
  //endregion
  function Companion() {
  }
  protoOf(Companion).o6a = function () {
    return new CacheBuilderImpl();
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.p6a_1 = new Long(-1, -1);
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function CacheBuilderImpl() {
    Companion_getInstance_1();
    this.q6a_1 = Companion_getInstance().hg_1;
    this.r6a_1 = Companion_getInstance().hg_1;
    this.s6a_1 = new Long(-1, -1);
    this.t6a_1 = null;
    this.u6a_1 = null;
  }
  protoOf(CacheBuilderImpl).v6a = function (duration) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.require' call
    if (!Duration__isPositive_impl_tvkkt2(duration)) {
      var message = 'expireAfterWrite duration must be positive';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.q6a_1 = duration;
    return this;
  };
  protoOf(CacheBuilderImpl).j2v = function () {
    var tmp = this.q6a_1;
    var tmp_0 = this.r6a_1;
    var tmp_1 = this.s6a_1;
    var tmp0_elvis_lhs = this.t6a_1;
    return new RealCache(tmp, tmp_0, tmp_1, tmp0_elvis_lhs == null ? Monotonic_instance : tmp0_elvis_lhs, this.u6a_1);
  };
  function Created(key, value) {
    this.w6a_1 = key;
    this.x6a_1 = value;
  }
  protoOf(Created).toString = function () {
    return 'Created(key=' + toString(this.w6a_1) + ', value=' + toString(this.x6a_1) + ')';
  };
  protoOf(Created).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Created))
      THROW_CCE();
    return equals(this.w6a_1, other.w6a_1) && equals(this.x6a_1, other.x6a_1);
  };
  protoOf(Created).hashCode = function () {
    var result = hashCode(this.w6a_1);
    result = imul(31, result) + hashCode(this.x6a_1) | 0;
    return result;
  };
  function Updated(key, oldValue, newValue) {
    this.y6a_1 = key;
    this.z6a_1 = oldValue;
    this.a6b_1 = newValue;
  }
  protoOf(Updated).toString = function () {
    return 'Updated(key=' + toString(this.y6a_1) + ', oldValue=' + toString(this.z6a_1) + ', newValue=' + toString(this.a6b_1) + ')';
  };
  protoOf(Updated).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Updated))
      THROW_CCE();
    return equals(this.y6a_1, other.y6a_1) && equals(this.z6a_1, other.z6a_1) && equals(this.a6b_1, other.a6b_1);
  };
  protoOf(Updated).hashCode = function () {
    var result = hashCode(this.y6a_1);
    result = imul(31, result) + hashCode(this.z6a_1) | 0;
    result = imul(31, result) + hashCode(this.a6b_1) | 0;
    return result;
  };
  function Expired(key, value) {
    this.b6b_1 = key;
    this.c6b_1 = value;
  }
  protoOf(Expired).toString = function () {
    return 'Expired(key=' + toString(this.b6b_1) + ', value=' + toString(this.c6b_1) + ')';
  };
  protoOf(Expired).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Expired))
      THROW_CCE();
    return equals(this.b6b_1, other.b6b_1) && equals(this.c6b_1, other.c6b_1);
  };
  protoOf(Expired).hashCode = function () {
    var result = hashCode(this.b6b_1);
    result = imul(31, result) + hashCode(this.c6b_1) | 0;
    return result;
  };
  function Evicted(key, value) {
    this.d6b_1 = key;
    this.e6b_1 = value;
  }
  protoOf(Evicted).toString = function () {
    return 'Evicted(key=' + toString(this.d6b_1) + ', value=' + toString(this.e6b_1) + ')';
  };
  protoOf(Evicted).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Evicted))
      THROW_CCE();
    return equals(this.d6b_1, other.d6b_1) && equals(this.e6b_1, other.e6b_1);
  };
  protoOf(Evicted).hashCode = function () {
    var result = hashCode(this.d6b_1);
    result = imul(31, result) + hashCode(this.e6b_1) | 0;
    return result;
  };
  function getMutex($this, key) {
    // Inline function 'kotlinx.atomicfu.locks.withLock' call
    $this.g6b_1;
    var tmp0_elvis_lhs = $this.f6b_1.i6b(key);
    var mutexEntry = tmp0_elvis_lhs == null ? new MutexEntry(Mutex(), 0) : tmp0_elvis_lhs;
    mutexEntry.k6b_1 = mutexEntry.k6b_1 + 1 | 0;
    if ($this.f6b_1.i6b(key) == null) {
      $this.f6b_1.l6b(key, mutexEntry);
    }
    return mutexEntry.j6b_1;
  }
  function removeMutex($this, key) {
    // Inline function 'kotlinx.atomicfu.locks.withLock' call
    $this.g6b_1;
    var tmp0_elvis_lhs = $this.f6b_1.i6b(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var mutexEntry = tmp;
    mutexEntry.k6b_1 = mutexEntry.k6b_1 - 1 | 0;
    if (mutexEntry.k6b_1 === 0) {
      $this.f6b_1.m6b(key);
    }
  }
  function $synchronizedForCOROUTINE$0(_this__u8e3s4, key, action, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v6b_1 = _this__u8e3s4;
    this.w6b_1 = key;
    this.x6b_1 = action;
  }
  protoOf($synchronizedForCOROUTINE$0).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 9;
            var tmp_0 = this;
            tmp_0.y6b_1 = getMutex(this.v6b_1, this.w6b_1);
            this.z6b_1 = this.y6b_1;
            var tmp_1 = this;
            tmp_1.a6c_1 = null;
            this.m9_1 = 1;
            suspendResult = this.z6b_1.s1d(this.a6c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b6c_1 = Unit_instance;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.n9_1 = 8;
            this.m9_1 = 3;
            continue $sm;
          case 3:
            this.n9_1 = 7;
            this.m9_1 = 4;
            suspendResult = this.x6b_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.c6c_1 = suspendResult;
            this.m9_1 = 5;
            continue $sm;
          case 5:
            var tmp_2 = this.c6c_1;
            this.n9_1 = 8;
            removeMutex(this.v6b_1, this.w6b_1);
            this.b6c_1 = tmp_2;
            this.n9_1 = 9;
            this.m9_1 = 6;
            continue $sm;
          case 6:
            var tmp_3 = this.b6c_1;
            this.n9_1 = 9;
            this.z6b_1.e1d(this.a6c_1);
            return tmp_3;
          case 7:
            this.n9_1 = 8;
            var t = this.p9_1;
            removeMutex(this.v6b_1, this.w6b_1);
            throw t;
          case 8:
            this.n9_1 = 9;
            var t_0 = this.p9_1;
            this.z6b_1.e1d(this.a6c_1);
            throw t_0;
          case 9:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 9) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function KeyedSynchronizer() {
    this.f6b_1 = new ConcurrentMutableMap();
    var tmp = this;
    // Inline function 'kotlinx.atomicfu.locks.reentrantLock' call
    tmp.g6b_1 = get_atomicfu$reentrantLock();
  }
  protoOf(KeyedSynchronizer).d6c = function (key, action, $completion) {
    var tmp = new $synchronizedForCOROUTINE$0(this, key, action, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  function MutexEntry(mutex, counter) {
    this.j6b_1 = mutex;
    this.k6b_1 = counter;
  }
  function expireEntries($this) {
    var queuesToProcess = listOfNotNull([$this.l6c_1 ? $this.o6c_1 : null, $this.m6c_1 ? $this.p6c_1 : null]);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = queuesToProcess.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      element.h6a(RealCache$expireEntries$lambda(element, $this));
    }
  }
  function isExpired($this, _this__u8e3s4) {
    return $this.m6c_1 && _this__u8e3s4.s6c_1.kotlinx$atomicfu$value.io($this.f6c_1).jo() || ($this.l6c_1 && _this__u8e3s4.t6c_1.kotlinx$atomicfu$value.io($this.e6c_1).jo());
  }
  function evictEntries($this) {
    if (!$this.k6c_1) {
      return Unit_instance;
    }
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = $this.p6c_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    while (toLong($this.j6c_1.s()).e1($this.g6c_1) > 0) {
      $this.p6c_1.h6a(RealCache$evictEntries$lambda($this));
    }
  }
  function recordRead($this, cacheEntry) {
    if ($this.m6c_1) {
      var accessTimeMark = cacheEntry.s6c_1.kotlinx$atomicfu$value;
      var tmp0 = cacheEntry.s6c_1;
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          var upd = accessTimeMark.io(accessTimeMark.go());
          if (tmp0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
    }
    var tmp0_safe_receiver = $this.p6c_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.j6a(cacheEntry);
  }
  function recordWrite($this, cacheEntry) {
    if ($this.m6c_1) {
      var accessTimeMark = cacheEntry.s6c_1.kotlinx$atomicfu$value;
      var tmp0 = cacheEntry.s6c_1;
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          var upd = accessTimeMark.io(accessTimeMark.go());
          if (tmp0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
    }
    if ($this.l6c_1) {
      var writeTimeMark = cacheEntry.t6c_1.kotlinx$atomicfu$value;
      var tmp2 = cacheEntry.t6c_1;
      $l$block_0: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur_0 = tmp2.kotlinx$atomicfu$value;
          var upd_0 = writeTimeMark.io(writeTimeMark.go());
          if (tmp2.atomicfu$compareAndSet(cur_0, upd_0)) {
            break $l$block_0;
          }
        }
      }
    }
    var tmp0_safe_receiver = $this.p6c_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.j6a(cacheEntry);
    var tmp1_safe_receiver = $this.o6c_1;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver.j6a(cacheEntry);
  }
  function onEvent($this, event) {
    var tmp0_safe_receiver = $this.i6c_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.u6c(event);
    }
  }
  function RealCache$get$slambda(this$0, $key, $loader, resultContinuation) {
    this.d6d_1 = this$0;
    this.e6d_1 = $key;
    this.f6d_1 = $loader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RealCache$get$slambda).i6d = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(RealCache$get$slambda).zb = function ($completion) {
    return this.i6d($completion);
  };
  protoOf(RealCache$get$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            var tmp0_safe_receiver = this.d6d_1.j6c_1.i6b(this.e6d_1);
            var tmp_1;
            if (tmp0_safe_receiver == null) {
              tmp_1 = null;
            } else {
              var tmp_2;
              if (isExpired(this.d6d_1, tmp0_safe_receiver)) {
                expireEntries(this.d6d_1);
                tmp_2 = null;
              } else {
                recordRead(this.d6d_1, tmp0_safe_receiver);
                tmp_2 = tmp0_safe_receiver.r6c_1.kotlinx$atomicfu$value;
              }
              tmp_1 = tmp_2;
            }

            tmp_0.g6d_1 = tmp_1;
            if (this.g6d_1 == null) {
              this.m9_1 = 1;
              suspendResult = this.f6d_1(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h6d_1 = this.g6d_1;
              this.m9_1 = 2;
              continue $sm;
            }

          case 1:
            var tmp_3 = this;
            var loadedValue = suspendResult;
            var existingValue = this.d6d_1.i6b(this.e6d_1);
            var tmp_4;
            if (!(existingValue == null)) {
              tmp_4 = existingValue;
            } else {
              this.d6d_1.j6d(this.e6d_1, loadedValue);
              tmp_4 = loadedValue;
            }

            tmp_3.h6d_1 = tmp_4;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return this.h6d_1;
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
  protoOf(RealCache$get$slambda).ia = function (completion) {
    return new RealCache$get$slambda(this.d6d_1, this.e6d_1, this.f6d_1, completion);
  };
  function RealCache$get$slambda_0(this$0, $key, $loader, resultContinuation) {
    var i = new RealCache$get$slambda(this$0, $key, $loader, resultContinuation);
    var l = function ($completion) {
      return i.i6d($completion);
    };
    l.$arity = 0;
    return l;
  }
  function RealCache$expireEntries$lambda($queue, this$0) {
    return function (it) {
      var iterator = $queue.p();
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = iterator;
      $l$loop: while (_iterator__ex2g4s.q()) {
        var entry = _iterator__ex2g4s.r();
        if (isExpired(this$0, entry)) {
          this$0.j6c_1.m6b(entry.q6c_1);
          iterator.s4();
          onEvent(this$0, new Expired(entry.q6c_1, entry.r6c_1.kotlinx$atomicfu$value));
        } else {
          break $l$loop;
        }
      }
      return Unit_instance;
    };
  }
  function RealCache$evictEntries$lambda(this$0) {
    return function (it) {
      var tmp0_safe_receiver = firstOrNull(it);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.run' call
        this$0.j6c_1.m6b(tmp0_safe_receiver.q6c_1);
        var tmp0_safe_receiver_0 = this$0.o6c_1;
        if (tmp0_safe_receiver_0 == null)
          null;
        else
          tmp0_safe_receiver_0.l6a(tmp0_safe_receiver);
        this$0.p6c_1.l6a(tmp0_safe_receiver);
        onEvent(this$0, new Evicted(tmp0_safe_receiver.q6c_1, tmp0_safe_receiver.r6c_1.kotlinx$atomicfu$value));
        tmp = Unit_instance;
      }
      return tmp;
    };
  }
  function RealCache(expireAfterWriteDuration, expireAfterAccessDuration, maxSize, timeSource, eventListener) {
    this.e6c_1 = expireAfterWriteDuration;
    this.f6c_1 = expireAfterAccessDuration;
    this.g6c_1 = maxSize;
    this.h6c_1 = timeSource;
    this.i6c_1 = eventListener;
    this.j6c_1 = new ConcurrentMutableMap();
    this.k6c_1 = this.g6c_1.e1(new Long(0, 0)) >= 0;
    this.l6c_1 = Duration__isFinite_impl_rzjsps(this.e6c_1);
    this.m6c_1 = Duration__isFinite_impl_rzjsps(this.f6c_1);
    this.n6c_1 = new KeyedSynchronizer();
    var tmp = this;
    // Inline function 'kotlin.takeIf' call
    var tmp_0;
    if (this.l6c_1) {
      tmp_0 = this;
    } else {
      tmp_0 = null;
    }
    var tmp_1;
    if (tmp_0 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = new ReorderingIsoMutableSet();
    }
    tmp.o6c_1 = tmp_1;
    var tmp_2 = this;
    // Inline function 'kotlin.takeIf' call
    var tmp_3;
    if (this.m6c_1 || this.k6c_1) {
      tmp_3 = this;
    } else {
      tmp_3 = null;
    }
    var tmp_4;
    if (tmp_3 == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_4 = new ReorderingIsoMutableSet();
    }
    tmp_2.p6c_1 = tmp_4;
  }
  protoOf(RealCache).i6b = function (key) {
    var tmp0_safe_receiver = this.j6c_1.i6b(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0;
      if (isExpired(this, tmp0_safe_receiver)) {
        expireEntries(this);
        tmp_0 = null;
      } else {
        recordRead(this, tmp0_safe_receiver);
        tmp_0 = tmp0_safe_receiver.r6c_1.kotlinx$atomicfu$value;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(RealCache).k6d = function (key, loader, $completion) {
    return this.n6c_1.d6c(key, RealCache$get$slambda_0(this, key, loader, null), $completion);
  };
  protoOf(RealCache).j6d = function (key, value) {
    expireEntries(this);
    var existingEntry = this.j6c_1.i6b(key);
    var tmp1_safe_receiver = existingEntry == null ? null : existingEntry.r6c_1;
    var oldValue = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.kotlinx$atomicfu$value;
    if (!(existingEntry == null)) {
      recordWrite(this, existingEntry);
      existingEntry.r6c_1.kotlinx$atomicfu$value = value;
    } else {
      var nowTimeMark = this.h6c_1.zf();
      var newEntry = new CacheEntry(key, atomic$ref$1(value), atomic$ref$1(nowTimeMark), atomic$ref$1(nowTimeMark));
      recordWrite(this, newEntry);
      this.j6c_1.l6b(key, newEntry);
    }
    var tmp;
    if (oldValue == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = new Updated(key, oldValue, value);
    }
    var tmp3_elvis_lhs = tmp;
    onEvent(this, tmp3_elvis_lhs == null ? new Created(key, value) : tmp3_elvis_lhs);
    evictEntries(this);
  };
  function CacheEntry(key, value, accessTimeMark, writeTimeMark) {
    this.q6c_1 = key;
    this.r6c_1 = value;
    this.s6c_1 = accessTimeMark;
    this.t6c_1 = writeTimeMark;
  }
  function ReorderingIsoMutableSet$add$lambda(this$0, $element) {
    return function (it) {
      var exists = this$0.l6a($element);
      protoOf(IsoMutableSet).j6a.call(this$0, $element);
      return !exists;
    };
  }
  function ReorderingIsoMutableSet() {
    IsoMutableSet_init_$Init$(VOID, VOID, this);
  }
  protoOf(ReorderingIsoMutableSet).j6a = function (element) {
    return this.h6a(ReorderingIsoMutableSet$add$lambda(this, element));
  };
  protoOf(ReorderingIsoMutableSet).n = function (element) {
    return this.j6a((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function ConcurrentMutableMap() {
    this.h6b_1 = new IsoMutableMap();
  }
  protoOf(ConcurrentMutableMap).s = function () {
    return this.h6b_1.s();
  };
  protoOf(ConcurrentMutableMap).i6b = function (key) {
    return this.h6b_1.k2(key);
  };
  protoOf(ConcurrentMutableMap).l6b = function (key, value) {
    return this.h6b_1.n2(key, value);
  };
  protoOf(ConcurrentMutableMap).m6b = function (key) {
    return this.h6b_1.o2(key);
  };
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=cache4k-cache4k.js.map
