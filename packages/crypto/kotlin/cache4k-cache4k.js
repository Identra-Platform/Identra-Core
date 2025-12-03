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
  var protoOf = kotlin_kotlin.$_$.pc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.mb;
  var Long = kotlin_kotlin.$_$.ng;
  var Companion_getInstance = kotlin_kotlin.$_$.l5;
  var Duration__isPositive_impl_tvkkt2 = kotlin_kotlin.$_$.x2;
  var toString = kotlin_kotlin.$_$.tc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var Unit_instance = kotlin_kotlin.$_$.v5;
  var Monotonic_instance = kotlin_kotlin.$_$.m5;
  var initMetadataForClass = kotlin_kotlin.$_$.lb;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.tg;
  var equals = kotlin_kotlin.$_$.fb;
  var hashCode = kotlin_kotlin.$_$.kb;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var CoroutineImpl = kotlin_kotlin.$_$.pa;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.z9;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.nb;
  var get_atomicfu$reentrantLock = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var VOID = kotlin_kotlin.$_$.j;
  var listOfNotNull = kotlin_kotlin.$_$.i8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var toLong = kotlin_kotlin.$_$.rc;
  var initMetadataForLambda = kotlin_kotlin.$_$.qb;
  var firstOrNull = kotlin_kotlin.$_$.s7;
  var Duration__isFinite_impl_rzjsps = kotlin_kotlin.$_$.w2;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var IsoMutableSet = kotlin_co_touchlab_stately_iso_collections.$_$.b;
  var IsoMutableSet_init_$Init$ = kotlin_co_touchlab_stately_iso_collections.$_$.c;
  var KtMutableSet = kotlin_kotlin.$_$.i6;
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
  protoOf(Companion).h68 = function () {
    return new CacheBuilderImpl();
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.i68_1 = new Long(-1, -1);
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function CacheBuilderImpl() {
    Companion_getInstance_1();
    this.j68_1 = Companion_getInstance().dg_1;
    this.k68_1 = Companion_getInstance().dg_1;
    this.l68_1 = new Long(-1, -1);
    this.m68_1 = null;
    this.n68_1 = null;
  }
  protoOf(CacheBuilderImpl).o68 = function (duration) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.require' call
    if (!Duration__isPositive_impl_tvkkt2(duration)) {
      var message = 'expireAfterWrite duration must be positive';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.j68_1 = duration;
    return this;
  };
  protoOf(CacheBuilderImpl).w2u = function () {
    var tmp = this.j68_1;
    var tmp_0 = this.k68_1;
    var tmp_1 = this.l68_1;
    var tmp0_elvis_lhs = this.m68_1;
    return new RealCache(tmp, tmp_0, tmp_1, tmp0_elvis_lhs == null ? Monotonic_instance : tmp0_elvis_lhs, this.n68_1);
  };
  function Created(key, value) {
    this.p68_1 = key;
    this.q68_1 = value;
  }
  protoOf(Created).toString = function () {
    return 'Created(key=' + toString(this.p68_1) + ', value=' + toString(this.q68_1) + ')';
  };
  protoOf(Created).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Created))
      THROW_CCE();
    return equals(this.p68_1, other.p68_1) && equals(this.q68_1, other.q68_1);
  };
  protoOf(Created).hashCode = function () {
    var result = hashCode(this.p68_1);
    result = imul(31, result) + hashCode(this.q68_1) | 0;
    return result;
  };
  function Updated(key, oldValue, newValue) {
    this.r68_1 = key;
    this.s68_1 = oldValue;
    this.t68_1 = newValue;
  }
  protoOf(Updated).toString = function () {
    return 'Updated(key=' + toString(this.r68_1) + ', oldValue=' + toString(this.s68_1) + ', newValue=' + toString(this.t68_1) + ')';
  };
  protoOf(Updated).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Updated))
      THROW_CCE();
    return equals(this.r68_1, other.r68_1) && equals(this.s68_1, other.s68_1) && equals(this.t68_1, other.t68_1);
  };
  protoOf(Updated).hashCode = function () {
    var result = hashCode(this.r68_1);
    result = imul(31, result) + hashCode(this.s68_1) | 0;
    result = imul(31, result) + hashCode(this.t68_1) | 0;
    return result;
  };
  function Expired(key, value) {
    this.u68_1 = key;
    this.v68_1 = value;
  }
  protoOf(Expired).toString = function () {
    return 'Expired(key=' + toString(this.u68_1) + ', value=' + toString(this.v68_1) + ')';
  };
  protoOf(Expired).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Expired))
      THROW_CCE();
    return equals(this.u68_1, other.u68_1) && equals(this.v68_1, other.v68_1);
  };
  protoOf(Expired).hashCode = function () {
    var result = hashCode(this.u68_1);
    result = imul(31, result) + hashCode(this.v68_1) | 0;
    return result;
  };
  function Evicted(key, value) {
    this.w68_1 = key;
    this.x68_1 = value;
  }
  protoOf(Evicted).toString = function () {
    return 'Evicted(key=' + toString(this.w68_1) + ', value=' + toString(this.x68_1) + ')';
  };
  protoOf(Evicted).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Evicted))
      THROW_CCE();
    return equals(this.w68_1, other.w68_1) && equals(this.x68_1, other.x68_1);
  };
  protoOf(Evicted).hashCode = function () {
    var result = hashCode(this.w68_1);
    result = imul(31, result) + hashCode(this.x68_1) | 0;
    return result;
  };
  function getMutex($this, key) {
    // Inline function 'kotlinx.atomicfu.locks.withLock' call
    $this.z68_1;
    var tmp0_elvis_lhs = $this.y68_1.b69(key);
    var mutexEntry = tmp0_elvis_lhs == null ? new MutexEntry(Mutex(), 0) : tmp0_elvis_lhs;
    mutexEntry.d69_1 = mutexEntry.d69_1 + 1 | 0;
    if ($this.y68_1.b69(key) == null) {
      $this.y68_1.e69(key, mutexEntry);
    }
    return mutexEntry.c69_1;
  }
  function removeMutex($this, key) {
    // Inline function 'kotlinx.atomicfu.locks.withLock' call
    $this.z68_1;
    var tmp0_elvis_lhs = $this.y68_1.b69(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var mutexEntry = tmp;
    mutexEntry.d69_1 = mutexEntry.d69_1 - 1 | 0;
    if (mutexEntry.d69_1 === 0) {
      $this.y68_1.f69(key);
    }
  }
  function $synchronizedForCOROUTINE$0(_this__u8e3s4, key, action, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o69_1 = _this__u8e3s4;
    this.p69_1 = key;
    this.q69_1 = action;
  }
  protoOf($synchronizedForCOROUTINE$0).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 9;
            var tmp_0 = this;
            tmp_0.r69_1 = getMutex(this.o69_1, this.p69_1);
            this.s69_1 = this.r69_1;
            var tmp_1 = this;
            tmp_1.t69_1 = null;
            this.l9_1 = 1;
            suspendResult = this.s69_1.j1d(this.t69_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u69_1 = Unit_instance;
            this.l9_1 = 2;
            continue $sm;
          case 2:
            this.m9_1 = 8;
            this.l9_1 = 3;
            continue $sm;
          case 3:
            this.m9_1 = 7;
            this.l9_1 = 4;
            suspendResult = this.q69_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.v69_1 = suspendResult;
            this.l9_1 = 5;
            continue $sm;
          case 5:
            var tmp_2 = this.v69_1;
            this.m9_1 = 8;
            removeMutex(this.o69_1, this.p69_1);
            this.u69_1 = tmp_2;
            this.m9_1 = 9;
            this.l9_1 = 6;
            continue $sm;
          case 6:
            var tmp_3 = this.u69_1;
            this.m9_1 = 9;
            this.s69_1.w1c(this.t69_1);
            return tmp_3;
          case 7:
            this.m9_1 = 8;
            var t = this.o9_1;
            removeMutex(this.o69_1, this.p69_1);
            throw t;
          case 8:
            this.m9_1 = 9;
            var t_0 = this.o9_1;
            this.s69_1.w1c(this.t69_1);
            throw t_0;
          case 9:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 9) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function KeyedSynchronizer() {
    this.y68_1 = new ConcurrentMutableMap();
    var tmp = this;
    // Inline function 'kotlinx.atomicfu.locks.reentrantLock' call
    tmp.z68_1 = get_atomicfu$reentrantLock();
  }
  protoOf(KeyedSynchronizer).w69 = function (key, action, $completion) {
    var tmp = new $synchronizedForCOROUTINE$0(this, key, action, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  function MutexEntry(mutex, counter) {
    this.c69_1 = mutex;
    this.d69_1 = counter;
  }
  function expireEntries($this) {
    var queuesToProcess = listOfNotNull([$this.e6a_1 ? $this.h6a_1 : null, $this.f6a_1 ? $this.i6a_1 : null]);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = queuesToProcess.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      element.a68(RealCache$expireEntries$lambda(element, $this));
    }
  }
  function isExpired($this, _this__u8e3s4) {
    return $this.f6a_1 && _this__u8e3s4.l6a_1.kotlinx$atomicfu$value.eo($this.y69_1).fo() || ($this.e6a_1 && _this__u8e3s4.m6a_1.kotlinx$atomicfu$value.eo($this.x69_1).fo());
  }
  function evictEntries($this) {
    if (!$this.d6a_1) {
      return Unit_instance;
    }
    // Inline function 'kotlin.checkNotNull' call
    var tmp0 = $this.i6a_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    while (toLong($this.c6a_1.s()).e1($this.z69_1) > 0) {
      $this.i6a_1.a68(RealCache$evictEntries$lambda($this));
    }
  }
  function recordRead($this, cacheEntry) {
    if ($this.f6a_1) {
      var accessTimeMark = cacheEntry.l6a_1.kotlinx$atomicfu$value;
      var tmp0 = cacheEntry.l6a_1;
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          var upd = accessTimeMark.eo(accessTimeMark.co());
          if (tmp0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
    }
    var tmp0_safe_receiver = $this.i6a_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.c68(cacheEntry);
  }
  function recordWrite($this, cacheEntry) {
    if ($this.f6a_1) {
      var accessTimeMark = cacheEntry.l6a_1.kotlinx$atomicfu$value;
      var tmp0 = cacheEntry.l6a_1;
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          var upd = accessTimeMark.eo(accessTimeMark.co());
          if (tmp0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
    }
    if ($this.e6a_1) {
      var writeTimeMark = cacheEntry.m6a_1.kotlinx$atomicfu$value;
      var tmp2 = cacheEntry.m6a_1;
      $l$block_0: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur_0 = tmp2.kotlinx$atomicfu$value;
          var upd_0 = writeTimeMark.eo(writeTimeMark.co());
          if (tmp2.atomicfu$compareAndSet(cur_0, upd_0)) {
            break $l$block_0;
          }
        }
      }
    }
    var tmp0_safe_receiver = $this.i6a_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.c68(cacheEntry);
    var tmp1_safe_receiver = $this.h6a_1;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver.c68(cacheEntry);
  }
  function onEvent($this, event) {
    var tmp0_safe_receiver = $this.b6a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n6a(event);
    }
  }
  function RealCache$get$slambda(this$0, $key, $loader, resultContinuation) {
    this.w6a_1 = this$0;
    this.x6a_1 = $key;
    this.y6a_1 = $loader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RealCache$get$slambda).b6b = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(RealCache$get$slambda).yb = function ($completion) {
    return this.b6b($completion);
  };
  protoOf(RealCache$get$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0 = this;
            var tmp0_safe_receiver = this.w6a_1.c6a_1.b69(this.x6a_1);
            var tmp_1;
            if (tmp0_safe_receiver == null) {
              tmp_1 = null;
            } else {
              var tmp_2;
              if (isExpired(this.w6a_1, tmp0_safe_receiver)) {
                expireEntries(this.w6a_1);
                tmp_2 = null;
              } else {
                recordRead(this.w6a_1, tmp0_safe_receiver);
                tmp_2 = tmp0_safe_receiver.k6a_1.kotlinx$atomicfu$value;
              }
              tmp_1 = tmp_2;
            }

            tmp_0.z6a_1 = tmp_1;
            if (this.z6a_1 == null) {
              this.l9_1 = 1;
              suspendResult = this.y6a_1(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.a6b_1 = this.z6a_1;
              this.l9_1 = 2;
              continue $sm;
            }

          case 1:
            var tmp_3 = this;
            var loadedValue = suspendResult;
            var existingValue = this.w6a_1.b69(this.x6a_1);
            var tmp_4;
            if (!(existingValue == null)) {
              tmp_4 = existingValue;
            } else {
              this.w6a_1.c6b(this.x6a_1, loadedValue);
              tmp_4 = loadedValue;
            }

            tmp_3.a6b_1 = tmp_4;
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return this.a6b_1;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(RealCache$get$slambda).ha = function (completion) {
    return new RealCache$get$slambda(this.w6a_1, this.x6a_1, this.y6a_1, completion);
  };
  function RealCache$get$slambda_0(this$0, $key, $loader, resultContinuation) {
    var i = new RealCache$get$slambda(this$0, $key, $loader, resultContinuation);
    var l = function ($completion) {
      return i.b6b($completion);
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
          this$0.c6a_1.f69(entry.j6a_1);
          iterator.r4();
          onEvent(this$0, new Expired(entry.j6a_1, entry.k6a_1.kotlinx$atomicfu$value));
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
        this$0.c6a_1.f69(tmp0_safe_receiver.j6a_1);
        var tmp0_safe_receiver_0 = this$0.h6a_1;
        if (tmp0_safe_receiver_0 == null)
          null;
        else
          tmp0_safe_receiver_0.e68(tmp0_safe_receiver);
        this$0.i6a_1.e68(tmp0_safe_receiver);
        onEvent(this$0, new Evicted(tmp0_safe_receiver.j6a_1, tmp0_safe_receiver.k6a_1.kotlinx$atomicfu$value));
        tmp = Unit_instance;
      }
      return tmp;
    };
  }
  function RealCache(expireAfterWriteDuration, expireAfterAccessDuration, maxSize, timeSource, eventListener) {
    this.x69_1 = expireAfterWriteDuration;
    this.y69_1 = expireAfterAccessDuration;
    this.z69_1 = maxSize;
    this.a6a_1 = timeSource;
    this.b6a_1 = eventListener;
    this.c6a_1 = new ConcurrentMutableMap();
    this.d6a_1 = this.z69_1.e1(new Long(0, 0)) >= 0;
    this.e6a_1 = Duration__isFinite_impl_rzjsps(this.x69_1);
    this.f6a_1 = Duration__isFinite_impl_rzjsps(this.y69_1);
    this.g6a_1 = new KeyedSynchronizer();
    var tmp = this;
    // Inline function 'kotlin.takeIf' call
    var tmp_0;
    if (this.e6a_1) {
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
    tmp.h6a_1 = tmp_1;
    var tmp_2 = this;
    // Inline function 'kotlin.takeIf' call
    var tmp_3;
    if (this.f6a_1 || this.d6a_1) {
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
    tmp_2.i6a_1 = tmp_4;
  }
  protoOf(RealCache).b69 = function (key) {
    var tmp0_safe_receiver = this.c6a_1.b69(key);
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
        tmp_0 = tmp0_safe_receiver.k6a_1.kotlinx$atomicfu$value;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(RealCache).d6b = function (key, loader, $completion) {
    return this.g6a_1.w69(key, RealCache$get$slambda_0(this, key, loader, null), $completion);
  };
  protoOf(RealCache).c6b = function (key, value) {
    expireEntries(this);
    var existingEntry = this.c6a_1.b69(key);
    var tmp1_safe_receiver = existingEntry == null ? null : existingEntry.k6a_1;
    var oldValue = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.kotlinx$atomicfu$value;
    if (!(existingEntry == null)) {
      recordWrite(this, existingEntry);
      existingEntry.k6a_1.kotlinx$atomicfu$value = value;
    } else {
      var nowTimeMark = this.a6a_1.vf();
      var newEntry = new CacheEntry(key, atomic$ref$1(value), atomic$ref$1(nowTimeMark), atomic$ref$1(nowTimeMark));
      recordWrite(this, newEntry);
      this.c6a_1.e69(key, newEntry);
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
    this.j6a_1 = key;
    this.k6a_1 = value;
    this.l6a_1 = accessTimeMark;
    this.m6a_1 = writeTimeMark;
  }
  function ReorderingIsoMutableSet$add$lambda(this$0, $element) {
    return function (it) {
      var exists = this$0.e68($element);
      protoOf(IsoMutableSet).c68.call(this$0, $element);
      return !exists;
    };
  }
  function ReorderingIsoMutableSet() {
    IsoMutableSet_init_$Init$(VOID, VOID, this);
  }
  protoOf(ReorderingIsoMutableSet).c68 = function (element) {
    return this.a68(ReorderingIsoMutableSet$add$lambda(this, element));
  };
  protoOf(ReorderingIsoMutableSet).n = function (element) {
    return this.c68((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function ConcurrentMutableMap() {
    this.a69_1 = new IsoMutableMap();
  }
  protoOf(ConcurrentMutableMap).s = function () {
    return this.a69_1.s();
  };
  protoOf(ConcurrentMutableMap).b69 = function (key) {
    return this.a69_1.k2(key);
  };
  protoOf(ConcurrentMutableMap).e69 = function (key, value) {
    return this.a69_1.n2(key, value);
  };
  protoOf(ConcurrentMutableMap).f69 = function (key) {
    return this.a69_1.o2(key);
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
