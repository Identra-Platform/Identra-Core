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
  var protoOf = kotlin_kotlin.$_$.be;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var Long = kotlin_kotlin.$_$.cj;
  var Companion_getInstance = kotlin_kotlin.$_$.b6;
  var Duration__isPositive_impl_tvkkt2 = kotlin_kotlin.$_$.f3;
  var toString = kotlin_kotlin.$_$.fe;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var Monotonic_instance = kotlin_kotlin.$_$.c6;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var equals = kotlin_kotlin.$_$.rc;
  var hashCode = kotlin_kotlin.$_$.wc;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var CoroutineImpl = kotlin_kotlin.$_$.bc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.lb;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.zc;
  var get_atomicfu$reentrantLock = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var VOID = kotlin_kotlin.$_$.j;
  var listOfNotNull = kotlin_kotlin.$_$.p9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var toLong = kotlin_kotlin.$_$.de;
  var initMetadataForLambda = kotlin_kotlin.$_$.cd;
  var firstOrNull = kotlin_kotlin.$_$.r8;
  var Duration__isFinite_impl_rzjsps = kotlin_kotlin.$_$.e3;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var IsoMutableSet = kotlin_co_touchlab_stately_iso_collections.$_$.b;
  var IsoMutableSet_init_$Init$ = kotlin_co_touchlab_stately_iso_collections.$_$.c;
  var KtMutableSet = kotlin_kotlin.$_$.a7;
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
  protoOf(Companion).i6d = function () {
    return new CacheBuilderImpl();
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.j6d_1 = new Long(-1, -1);
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function CacheBuilderImpl() {
    Companion_getInstance_1();
    this.k6d_1 = Companion_getInstance().ig_1;
    this.l6d_1 = Companion_getInstance().ig_1;
    this.m6d_1 = new Long(-1, -1);
    this.n6d_1 = null;
    this.o6d_1 = null;
  }
  protoOf(CacheBuilderImpl).p6d = function (duration) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.require' call
    if (!Duration__isPositive_impl_tvkkt2(duration)) {
      var message = 'expireAfterWrite duration must be positive';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.k6d_1 = duration;
    return this;
  };
  protoOf(CacheBuilderImpl).x2x = function () {
    var tmp = this.k6d_1;
    var tmp_0 = this.l6d_1;
    var tmp_1 = this.m6d_1;
    var tmp0_elvis_lhs = this.n6d_1;
    return new RealCache(tmp, tmp_0, tmp_1, tmp0_elvis_lhs == null ? Monotonic_instance : tmp0_elvis_lhs, this.o6d_1);
  };
  function Created(key, value) {
    this.q6d_1 = key;
    this.r6d_1 = value;
  }
  protoOf(Created).toString = function () {
    return 'Created(key=' + toString(this.q6d_1) + ', value=' + toString(this.r6d_1) + ')';
  };
  protoOf(Created).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Created))
      THROW_CCE();
    return equals(this.q6d_1, other.q6d_1) && equals(this.r6d_1, other.r6d_1);
  };
  protoOf(Created).hashCode = function () {
    var result = hashCode(this.q6d_1);
    result = imul(31, result) + hashCode(this.r6d_1) | 0;
    return result;
  };
  function Updated(key, oldValue, newValue) {
    this.s6d_1 = key;
    this.t6d_1 = oldValue;
    this.u6d_1 = newValue;
  }
  protoOf(Updated).toString = function () {
    return 'Updated(key=' + toString(this.s6d_1) + ', oldValue=' + toString(this.t6d_1) + ', newValue=' + toString(this.u6d_1) + ')';
  };
  protoOf(Updated).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Updated))
      THROW_CCE();
    return equals(this.s6d_1, other.s6d_1) && equals(this.t6d_1, other.t6d_1) && equals(this.u6d_1, other.u6d_1);
  };
  protoOf(Updated).hashCode = function () {
    var result = hashCode(this.s6d_1);
    result = imul(31, result) + hashCode(this.t6d_1) | 0;
    result = imul(31, result) + hashCode(this.u6d_1) | 0;
    return result;
  };
  function Expired(key, value) {
    this.v6d_1 = key;
    this.w6d_1 = value;
  }
  protoOf(Expired).toString = function () {
    return 'Expired(key=' + toString(this.v6d_1) + ', value=' + toString(this.w6d_1) + ')';
  };
  protoOf(Expired).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Expired))
      THROW_CCE();
    return equals(this.v6d_1, other.v6d_1) && equals(this.w6d_1, other.w6d_1);
  };
  protoOf(Expired).hashCode = function () {
    var result = hashCode(this.v6d_1);
    result = imul(31, result) + hashCode(this.w6d_1) | 0;
    return result;
  };
  function Evicted(key, value) {
    this.x6d_1 = key;
    this.y6d_1 = value;
  }
  protoOf(Evicted).toString = function () {
    return 'Evicted(key=' + toString(this.x6d_1) + ', value=' + toString(this.y6d_1) + ')';
  };
  protoOf(Evicted).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Evicted))
      THROW_CCE();
    return equals(this.x6d_1, other.x6d_1) && equals(this.y6d_1, other.y6d_1);
  };
  protoOf(Evicted).hashCode = function () {
    var result = hashCode(this.x6d_1);
    result = imul(31, result) + hashCode(this.y6d_1) | 0;
    return result;
  };
  function getMutex($this, key) {
    // Inline function 'kotlinx.atomicfu.locks.withLock' call
    $this.a6e_1;
    var tmp0_elvis_lhs = $this.z6d_1.c6e(key);
    var mutexEntry = tmp0_elvis_lhs == null ? new MutexEntry(Mutex(), 0) : tmp0_elvis_lhs;
    mutexEntry.e6e_1 = mutexEntry.e6e_1 + 1 | 0;
    if ($this.z6d_1.c6e(key) == null) {
      $this.z6d_1.f6e(key, mutexEntry);
    }
    return mutexEntry.d6e_1;
  }
  function removeMutex($this, key) {
    // Inline function 'kotlinx.atomicfu.locks.withLock' call
    $this.a6e_1;
    var tmp0_elvis_lhs = $this.z6d_1.c6e(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var mutexEntry = tmp;
    mutexEntry.e6e_1 = mutexEntry.e6e_1 - 1 | 0;
    if (mutexEntry.e6e_1 === 0) {
      $this.z6d_1.g6e(key);
    }
  }
  function $synchronizedForCOROUTINE$0(_this__u8e3s4, key, action, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p6e_1 = _this__u8e3s4;
    this.q6e_1 = key;
    this.r6e_1 = action;
  }
  protoOf($synchronizedForCOROUTINE$0).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 9;
            var tmp_0 = this;
            tmp_0.s6e_1 = getMutex(this.p6e_1, this.q6e_1);
            this.t6e_1 = this.s6e_1;
            var tmp_1 = this;
            tmp_1.u6e_1 = null;
            this.n9_1 = 1;
            suspendResult = this.t6e_1.g1g(this.u6e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v6e_1 = Unit_instance;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.o9_1 = 8;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.o9_1 = 7;
            this.n9_1 = 4;
            suspendResult = this.r6e_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.w6e_1 = suspendResult;
            this.n9_1 = 5;
            continue $sm;
          case 5:
            var tmp_2 = this.w6e_1;
            this.o9_1 = 8;
            removeMutex(this.p6e_1, this.q6e_1);
            this.v6e_1 = tmp_2;
            this.o9_1 = 9;
            this.n9_1 = 6;
            continue $sm;
          case 6:
            var tmp_3 = this.v6e_1;
            this.o9_1 = 9;
            this.t6e_1.s1f(this.u6e_1);
            return tmp_3;
          case 7:
            this.o9_1 = 8;
            var t = this.q9_1;
            removeMutex(this.p6e_1, this.q6e_1);
            throw t;
          case 8:
            this.o9_1 = 9;
            var t_0 = this.q9_1;
            this.t6e_1.s1f(this.u6e_1);
            throw t_0;
          case 9:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 9) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function KeyedSynchronizer() {
    this.z6d_1 = new ConcurrentMutableMap();
    var tmp = this;
    // Inline function 'kotlinx.atomicfu.locks.reentrantLock' call
    tmp.a6e_1 = get_atomicfu$reentrantLock();
  }
  protoOf(KeyedSynchronizer).x6e = function (key, action, $completion) {
    var tmp = new $synchronizedForCOROUTINE$0(this, key, action, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  function MutexEntry(mutex, counter) {
    this.d6e_1 = mutex;
    this.e6e_1 = counter;
  }
  function expireEntries($this) {
    var queuesToProcess = listOfNotNull([$this.f6f_1 ? $this.i6f_1 : null, $this.g6f_1 ? $this.j6f_1 : null]);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = queuesToProcess.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      element.b6d(RealCache$expireEntries$lambda(element, $this));
    }
  }
  function isExpired($this, _this__u8e3s4) {
    return $this.g6f_1 && _this__u8e3s4.m6f_1.kotlinx$atomicfu$value.dp($this.z6e_1).ep() || ($this.f6f_1 && _this__u8e3s4.n6f_1.kotlinx$atomicfu$value.dp($this.y6e_1).ep());
  }
  function evictEntries($this) {
    if (!$this.e6f_1) {
      return Unit_instance;
    }
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = $this.j6f_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    while (toLong($this.d6f_1.s()).g1($this.a6f_1) > 0) {
      $this.j6f_1.b6d(RealCache$evictEntries$lambda($this));
    }
  }
  function recordRead($this, cacheEntry) {
    if ($this.g6f_1) {
      var accessTimeMark = cacheEntry.m6f_1.kotlinx$atomicfu$value;
      var tmp0 = cacheEntry.m6f_1;
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          var upd = accessTimeMark.dp(accessTimeMark.bp());
          if (tmp0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
    }
    var tmp0_safe_receiver = $this.j6f_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.d6d(cacheEntry);
  }
  function recordWrite($this, cacheEntry) {
    if ($this.g6f_1) {
      var accessTimeMark = cacheEntry.m6f_1.kotlinx$atomicfu$value;
      var tmp0 = cacheEntry.m6f_1;
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          var upd = accessTimeMark.dp(accessTimeMark.bp());
          if (tmp0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
    }
    if ($this.f6f_1) {
      var writeTimeMark = cacheEntry.n6f_1.kotlinx$atomicfu$value;
      var tmp2 = cacheEntry.n6f_1;
      $l$block_0: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur_0 = tmp2.kotlinx$atomicfu$value;
          var upd_0 = writeTimeMark.dp(writeTimeMark.bp());
          if (tmp2.atomicfu$compareAndSet(cur_0, upd_0)) {
            break $l$block_0;
          }
        }
      }
    }
    var tmp0_safe_receiver = $this.j6f_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.d6d(cacheEntry);
    var tmp1_safe_receiver = $this.i6f_1;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver.d6d(cacheEntry);
  }
  function onEvent($this, event) {
    var tmp0_safe_receiver = $this.c6f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.o6f(event);
    }
  }
  function RealCache$get$slambda(this$0, $key, $loader, resultContinuation) {
    this.x6f_1 = this$0;
    this.y6f_1 = $key;
    this.z6f_1 = $loader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RealCache$get$slambda).c6g = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(RealCache$get$slambda).ac = function ($completion) {
    return this.c6g($completion);
  };
  protoOf(RealCache$get$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            var tmp0_safe_receiver = this.x6f_1.d6f_1.c6e(this.y6f_1);
            var tmp_1;
            if (tmp0_safe_receiver == null) {
              tmp_1 = null;
            } else {
              var tmp_2;
              if (isExpired(this.x6f_1, tmp0_safe_receiver)) {
                expireEntries(this.x6f_1);
                tmp_2 = null;
              } else {
                recordRead(this.x6f_1, tmp0_safe_receiver);
                tmp_2 = tmp0_safe_receiver.l6f_1.kotlinx$atomicfu$value;
              }
              tmp_1 = tmp_2;
            }

            tmp_0.a6g_1 = tmp_1;
            if (this.a6g_1 == null) {
              this.n9_1 = 1;
              suspendResult = this.z6f_1(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.b6g_1 = this.a6g_1;
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            var tmp_3 = this;
            var loadedValue = suspendResult;
            var existingValue = this.x6f_1.c6e(this.y6f_1);
            var tmp_4;
            if (!(existingValue == null)) {
              tmp_4 = existingValue;
            } else {
              this.x6f_1.d6g(this.y6f_1, loadedValue);
              tmp_4 = loadedValue;
            }

            tmp_3.b6g_1 = tmp_4;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return this.b6g_1;
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
  protoOf(RealCache$get$slambda).ja = function (completion) {
    return new RealCache$get$slambda(this.x6f_1, this.y6f_1, this.z6f_1, completion);
  };
  function RealCache$get$slambda_0(this$0, $key, $loader, resultContinuation) {
    var i = new RealCache$get$slambda(this$0, $key, $loader, resultContinuation);
    var l = function ($completion) {
      return i.c6g($completion);
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
          this$0.d6f_1.g6e(entry.k6f_1);
          iterator.a5();
          onEvent(this$0, new Expired(entry.k6f_1, entry.l6f_1.kotlinx$atomicfu$value));
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
        this$0.d6f_1.g6e(tmp0_safe_receiver.k6f_1);
        var tmp0_safe_receiver_0 = this$0.i6f_1;
        if (tmp0_safe_receiver_0 == null)
          null;
        else
          tmp0_safe_receiver_0.f6d(tmp0_safe_receiver);
        this$0.j6f_1.f6d(tmp0_safe_receiver);
        onEvent(this$0, new Evicted(tmp0_safe_receiver.k6f_1, tmp0_safe_receiver.l6f_1.kotlinx$atomicfu$value));
        tmp = Unit_instance;
      }
      return tmp;
    };
  }
  function RealCache(expireAfterWriteDuration, expireAfterAccessDuration, maxSize, timeSource, eventListener) {
    this.y6e_1 = expireAfterWriteDuration;
    this.z6e_1 = expireAfterAccessDuration;
    this.a6f_1 = maxSize;
    this.b6f_1 = timeSource;
    this.c6f_1 = eventListener;
    this.d6f_1 = new ConcurrentMutableMap();
    this.e6f_1 = this.a6f_1.g1(new Long(0, 0)) >= 0;
    this.f6f_1 = Duration__isFinite_impl_rzjsps(this.y6e_1);
    this.g6f_1 = Duration__isFinite_impl_rzjsps(this.z6e_1);
    this.h6f_1 = new KeyedSynchronizer();
    var tmp = this;
    // Inline function 'kotlin.takeIf' call
    var tmp_0;
    if (this.f6f_1) {
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
    tmp.i6f_1 = tmp_1;
    var tmp_2 = this;
    // Inline function 'kotlin.takeIf' call
    var tmp_3;
    if (this.g6f_1 || this.e6f_1) {
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
    tmp_2.j6f_1 = tmp_4;
  }
  protoOf(RealCache).c6e = function (key) {
    var tmp0_safe_receiver = this.d6f_1.c6e(key);
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
        tmp_0 = tmp0_safe_receiver.l6f_1.kotlinx$atomicfu$value;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(RealCache).e6g = function (key, loader, $completion) {
    return this.h6f_1.x6e(key, RealCache$get$slambda_0(this, key, loader, null), $completion);
  };
  protoOf(RealCache).d6g = function (key, value) {
    expireEntries(this);
    var existingEntry = this.d6f_1.c6e(key);
    var tmp1_safe_receiver = existingEntry == null ? null : existingEntry.l6f_1;
    var oldValue = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.kotlinx$atomicfu$value;
    if (!(existingEntry == null)) {
      recordWrite(this, existingEntry);
      existingEntry.l6f_1.kotlinx$atomicfu$value = value;
    } else {
      var nowTimeMark = this.b6f_1.ag();
      var newEntry = new CacheEntry(key, atomic$ref$1(value), atomic$ref$1(nowTimeMark), atomic$ref$1(nowTimeMark));
      recordWrite(this, newEntry);
      this.d6f_1.f6e(key, newEntry);
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
    this.k6f_1 = key;
    this.l6f_1 = value;
    this.m6f_1 = accessTimeMark;
    this.n6f_1 = writeTimeMark;
  }
  function ReorderingIsoMutableSet$add$lambda(this$0, $element) {
    return function (it) {
      var exists = this$0.f6d($element);
      protoOf(IsoMutableSet).d6d.call(this$0, $element);
      return !exists;
    };
  }
  function ReorderingIsoMutableSet() {
    IsoMutableSet_init_$Init$(VOID, VOID, this);
  }
  protoOf(ReorderingIsoMutableSet).d6d = function (element) {
    return this.b6d(ReorderingIsoMutableSet$add$lambda(this, element));
  };
  protoOf(ReorderingIsoMutableSet).n = function (element) {
    return this.d6d((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function ConcurrentMutableMap() {
    this.b6e_1 = new IsoMutableMap();
  }
  protoOf(ConcurrentMutableMap).s = function () {
    return this.b6e_1.s();
  };
  protoOf(ConcurrentMutableMap).c6e = function (key) {
    return this.b6e_1.m2(key);
  };
  protoOf(ConcurrentMutableMap).f6e = function (key, value) {
    return this.b6e_1.p2(key, value);
  };
  protoOf(ConcurrentMutableMap).g6e = function (key) {
    return this.b6e_1.q2(key);
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
