(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-io-kotlinx-io-core.js', './kotlinx-atomicfu.js', './kotlinx-io-kotlinx-io-bytestring.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./kotlinx-atomicfu.js'), require('./kotlinx-io-kotlinx-io-bytestring.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-io-kotlinx-io-bytestring' was not found. Please, check whether 'kotlinx-io-kotlinx-io-bytestring' is loaded prior to 'ktor-ktor-io'.");
    }
    globalThis['ktor-ktor-io'] = factory(typeof globalThis['ktor-ktor-io'] === 'undefined' ? {} : globalThis['ktor-ktor-io'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['kotlinx-atomicfu'], globalThis['kotlinx-io-kotlinx-io-bytestring']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring) {
  'use strict';
  //region block: imports
  var Companion_instance = kotlin_kotlin.$_$.v5;
  var Unit_instance = kotlin_kotlin.$_$.a6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l3;
  var protoOf = kotlin_kotlin.$_$.gd;
  var initMetadataForCompanion = kotlin_kotlin.$_$.dc;
  var THROW_CCE = kotlin_kotlin.$_$.ai;
  var initMetadataForObject = kotlin_kotlin.$_$.ic;
  var toString = kotlin_kotlin.$_$.fj;
  var hashCode = kotlin_kotlin.$_$.bc;
  var equals = kotlin_kotlin.$_$.wb;
  var initMetadataForClass = kotlin_kotlin.$_$.cc;
  var createFailure = kotlin_kotlin.$_$.ri;
  var Result = kotlin_kotlin.$_$.yh;
  var initMetadataForInterface = kotlin_kotlin.$_$.gc;
  var toString_0 = kotlin_kotlin.$_$.sg;
  var newThrowable = kotlin_kotlin.$_$.zc;
  var stackTraceToString = kotlin_kotlin.$_$.cj;
  var VOID = kotlin_kotlin.$_$.j;
  var isInterface = kotlin_kotlin.$_$.rc;
  var CoroutineImpl = kotlin_kotlin.$_$.gb;
  var toLong = kotlin_kotlin.$_$.id;
  var numberToLong = kotlin_kotlin.$_$.ed;
  var intercepted = kotlin_kotlin.$_$.ta;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.aj;
  var returnIfSuspended = kotlin_kotlin.$_$.q;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.qa;
  var Long = kotlin_kotlin.$_$.th;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ec;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var IllegalStateException = kotlin_kotlin.$_$.sh;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.h2;
  var captureStack = kotlin_kotlin.$_$.ob;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var decodeToString = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.d;
  var replace = kotlin_kotlin.$_$.rf;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var readString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.n;
  var closeFinally = kotlin_kotlin.$_$.pi;
  var toString_1 = kotlin_kotlin.$_$.kd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var readByteString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.f5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var startCoroutineCancellable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var Continuation = kotlin_kotlin.$_$.ab;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.fc;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var initMetadataForLambda = kotlin_kotlin.$_$.hc;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var CancellationException = kotlin_kotlin.$_$.pa;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var readString_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.l;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var listOf = kotlin_kotlin.$_$.x8;
  var IOException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.e;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.m1;
  var charSequenceLength = kotlin_kotlin.$_$.sb;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.i;
  var encodeToByteArray = kotlin_kotlin.$_$.re;
  var readString_1 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.m;
  var writeString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.o;
  var AutoCloseable = kotlin_kotlin.$_$.hh;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c3;
  var replace_0 = kotlin_kotlin.$_$.sf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var getStringHashCode = kotlin_kotlin.$_$.ac;
  var IOException_init_$Init$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.b;
  var readByteArray_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var charSequenceSubSequence = kotlin_kotlin.$_$.tb;
  var isCharSequence = kotlin_kotlin.$_$.nc;
  var trim = kotlin_kotlin.$_$.ch;
  var toByte = kotlin_kotlin.$_$.hd;
  var decodeToString_0 = kotlin_kotlin.$_$.pe;
  var setOf = kotlin_kotlin.$_$.o9;
  var charSequenceGet = kotlin_kotlin.$_$.rb;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j3;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject(Empty, 'Empty');
  initMetadataForClass(Closed, 'Closed');
  function resume() {
    return this.q1k().ha(Companion_getInstance().n1k_1);
  }
  function resume_0(throwable) {
    var tmp = this.q1k();
    var tmp_0;
    if (throwable == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(throwable));
      tmp_0 = new Result(tmp$ret$2);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp.ha(tmp1_elvis_lhs == null ? Companion_getInstance().n1k_1 : tmp1_elvis_lhs.mp_1);
  }
  initMetadataForInterface(Task, 'Task');
  initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
  initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
  initMetadataForCoroutine($awaitContentCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($flushCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($flushAndCloseCOROUTINE$2, CoroutineImpl);
  function awaitContent$default(min, $completion, $super) {
    min = min === VOID ? 1 : min;
    return $super === VOID ? this.c1n(min, $completion) : $super.c1n.call(this, min, $completion);
  }
  initMetadataForInterface(ByteReadChannel_1, 'ByteReadChannel', VOID, VOID, VOID, [1]);
  initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel, VOID, [ByteReadChannel_1], [1, 0]);
  initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException', VOID, IllegalStateException);
  initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForCompanion(Companion_0);
  initMetadataForCoroutine($readRemainingCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($readPacketCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($discardCOROUTINE$5, CoroutineImpl);
  initMetadataForCoroutine($readAvailableCOROUTINE$7, CoroutineImpl);
  initMetadataForCoroutine($toByteArrayCOROUTINE$9, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$10, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$11, CoroutineImpl);
  initMetadataForCoroutine($readBufferCOROUTINE$12, CoroutineImpl);
  initMetadataForCoroutine($readUTF8LineToCOROUTINE$13, CoroutineImpl);
  initMetadataForCoroutine($readRemainingCOROUTINE$14, CoroutineImpl);
  initMetadataForCoroutine($skipIfFoundCOROUTINE$15, CoroutineImpl);
  initMetadataForCoroutine($readUntilCOROUTINE$16, CoroutineImpl);
  initMetadataForCoroutine($peekCOROUTINE$17, CoroutineImpl);
  initMetadataForCoroutine($readByteCOROUTINE$18, CoroutineImpl);
  initMetadataForCoroutine($readUntil$appendPartialMatchCOROUTINE$19, CoroutineImpl);
  initMetadataForCoroutine($flushIfNeededCOROUTINE$20, CoroutineImpl);
  initMetadataForClass(WriterJob, 'WriterJob');
  initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
  initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref, VOID, VOID, [0]);
  initMetadataForLambda(writer$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($writePacketCOROUTINE$21, CoroutineImpl);
  initMetadataForClass(CloseToken, 'CloseToken');
  initMetadataForCoroutine($awaitContentCOROUTINE$22, CoroutineImpl);
  initMetadataForClass(CountedByteReadChannel, 'CountedByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForClass(ClosedByteChannelException, 'ClosedByteChannelException', ClosedByteChannelException, IOException);
  initMetadataForClass(ClosedReadChannelException, 'ClosedReadChannelException', ClosedReadChannelException, ClosedByteChannelException);
  initMetadataForClass(ClosedWriteChannelException, 'ClosedWriteChannelException', ClosedWriteChannelException, ClosedByteChannelException);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(LineEndingMode, 'LineEndingMode');
  initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForClass(MalformedInputException, 'MalformedInputException', VOID, IOException);
  initMetadataForClass(TooLongLineException, 'TooLongLineException', VOID, MalformedInputException);
  function close() {
    this.yu();
  }
  initMetadataForInterface(ObjectPool, 'ObjectPool', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(DefaultPool, 'DefaultPool', VOID, VOID, [ObjectPool]);
  initMetadataForClass(ByteArrayPool$1, VOID, VOID, DefaultPool);
  initMetadataForClass(NoPoolImpl, 'NoPoolImpl', VOID, VOID, [ObjectPool]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Charset, 'Charset');
  initMetadataForObject(Charsets, 'Charsets');
  initMetadataForClass(CharsetDecoder, 'CharsetDecoder');
  initMetadataForClass(CharsetEncoder, 'CharsetEncoder');
  initMetadataForClass(CharsetImpl, 'CharsetImpl', VOID, Charset);
  initMetadataForClass(CharsetEncoderImpl, 'CharsetEncoderImpl', VOID, CharsetEncoder);
  initMetadataForClass(CharsetDecoderImpl, 'CharsetDecoderImpl', VOID, CharsetDecoder);
  initMetadataForClass(toKtor$1);
  initMetadataForClass(TextDecoderFallback, 'TextDecoderFallback');
  //endregion
  function Companion() {
    Companion_instance_0 = this;
    this.m1k_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.n1k_1 = _Result___init__impl__xyqfz8(Unit_instance);
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Empty() {
  }
  protoOf(Empty).toString = function () {
    return 'Empty';
  };
  protoOf(Empty).hashCode = function () {
    return -231472095;
  };
  protoOf(Empty).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Empty))
      return false;
    other instanceof Empty || THROW_CCE();
    return true;
  };
  var Empty_instance;
  function Empty_getInstance() {
    return Empty_instance;
  }
  function Closed(cause) {
    this.o1k_1 = cause;
  }
  protoOf(Closed).toString = function () {
    return 'Closed(cause=' + toString(this.o1k_1) + ')';
  };
  protoOf(Closed).hashCode = function () {
    return this.o1k_1 == null ? 0 : hashCode(this.o1k_1);
  };
  protoOf(Closed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    var tmp0_other_with_cast = other instanceof Closed ? other : THROW_CCE();
    if (!equals(this.o1k_1, tmp0_other_with_cast.o1k_1))
      return false;
    return true;
  };
  function Task() {
  }
  function Read(continuation) {
    this.u1k_1 = continuation;
    this.v1k_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.u1k_1), 16));
      stackTraceToString(this_0);
      tmp.v1k_1 = this_0;
    }
  }
  protoOf(Read).q1k = function () {
    return this.u1k_1;
  };
  protoOf(Read).p1k = function () {
    return this.v1k_1;
  };
  protoOf(Read).r1k = function () {
    return 'read';
  };
  function Write(continuation) {
    this.w1k_1 = continuation;
    this.x1k_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.w1k_1), 16));
      stackTraceToString(this_0);
      tmp.x1k_1 = this_0;
    }
  }
  protoOf(Write).q1k = function () {
    return this.w1k_1;
  };
  protoOf(Write).p1k = function () {
    return this.x1k_1;
  };
  protoOf(Write).r1k = function () {
    return 'write';
  };
  function moveFlushToReadBuffer($this) {
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    $this.b1l_1;
    $this.z1k_1.r1i($this.d1l_1);
    $this.a1l_1 = 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = $this.c1l_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Write) {
      tmp = $this.c1l_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.s1k();
    }
  }
  function closeSlot($this, cause) {
    var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().m1k_1;
    var continuation = $this.c1l_1.atomicfu$getAndSet(closeContinuation);
    if (isInterface(continuation, Task)) {
      continuation.t1k(cause);
    }
  }
  function ClosedReadChannelException$_init_$ref_ix0089() {
    var l = function (p0) {
      return new ClosedReadChannelException(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function ClosedWriteChannelException$_init_$ref_ef15ty() {
    var l = function (p0) {
      return new ClosedWriteChannelException(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function $awaitContentCOROUTINE$0(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o1l_1 = _this__u8e3s4;
    this.p1l_1 = min;
  }
  protoOf($awaitContentCOROUTINE$0).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            rethrowCloseCauseIfNeeded_1(this.o1l_1);
            if (this.o1l_1.d1l_1.s().e1(toLong(this.p1l_1)) >= 0)
              return true;
            var tmp_0 = this;
            tmp_0.q1l_1 = this.o1l_1;
            this.r1l_1 = this.q1l_1;
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!(numberToLong(this.o1l_1.a1l_1).z2(this.o1l_1.d1l_1.s()).e1(toLong(this.p1l_1)) < 0 && this.o1l_1.f1l_1.kotlinx$atomicfu$value == null)) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.m9_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.bw();
            var tmp0 = this.r1l_1;
            var tmp1 = new Read(cancellable);
            l$ret$1: do {
              var previous = tmp0.c1l_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.c1l_1.atomicfu$compareAndSet(previous, tmp1)) {
                  tmp1.s1k();
                  break l$ret$1;
                }
              }
              if (previous instanceof Read) {
                previous.t1k(new ConcurrentIOException(tmp1.r1k(), previous.p1k()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.s1k();
                } else {
                  if (previous instanceof Closed) {
                    tmp1.t1k(previous.o1k_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(numberToLong(this.o1l_1.a1l_1).z2(this.o1l_1.d1l_1.s()).e1(toLong(this.p1l_1)) < 0 && this.o1l_1.f1l_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.c1l_1.kotlinx$atomicfu$value;
                var tmp_1;
                if (current instanceof Read) {
                  tmp_1 = tmp0.c1l_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  current.s1k();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.cw(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m9_1 = 1;
            continue $sm;
          case 3:
            if (this.o1l_1.d1l_1.s().e1(new Long(1048576, 0)) < 0) {
              moveFlushToReadBuffer(this.o1l_1);
            }

            return this.o1l_1.d1l_1.s().e1(toLong(this.p1l_1)) >= 0;
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $flushCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1m_1 = _this__u8e3s4;
  }
  protoOf($flushCOROUTINE$1).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            rethrowCloseCauseIfNeeded_1(this.a1m_1);
            this.a1m_1.d1m();
            if (this.a1m_1.a1l_1 < 1048576)
              return Unit_instance;
            var tmp_0 = this;
            tmp_0.b1m_1 = this.a1m_1;
            this.c1m_1 = this.b1m_1;
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!(this.a1m_1.a1l_1 >= 1048576 && this.a1m_1.f1l_1.kotlinx$atomicfu$value == null)) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.m9_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.bw();
            var tmp0 = this.c1m_1;
            var tmp1 = new Write(cancellable);
            l$ret$1: do {
              var previous = tmp0.c1l_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.c1l_1.atomicfu$compareAndSet(previous, tmp1)) {
                  tmp1.s1k();
                  break l$ret$1;
                }
              }
              if (previous instanceof Write) {
                previous.t1k(new ConcurrentIOException(tmp1.r1k(), previous.p1k()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.s1k();
                } else {
                  if (previous instanceof Closed) {
                    tmp1.t1k(previous.o1k_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(this.a1m_1.a1l_1 >= 1048576 && this.a1m_1.f1l_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.c1l_1.kotlinx$atomicfu$value;
                var tmp_1;
                if (current instanceof Write) {
                  tmp_1 = tmp0.c1l_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  current.s1k();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.cw(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m9_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $flushAndCloseCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m1m_1 = _this__u8e3s4;
  }
  protoOf($flushAndCloseCOROUTINE$2).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            var tmp_0 = this;
            tmp_0.n1m_1 = this.m1m_1;
            this.o1m_1 = this.n1m_1;
            this.n9_1 = 2;
            var tmp_1 = this;
            tmp_1.q1m_1 = Companion_instance;
            var tmp_2 = this;
            tmp_2.r1m_1 = this.o1m_1;
            this.s1m_1 = this.r1m_1;
            this.m9_1 = 1;
            suspendResult = this.s1m_1.t1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_3 = this;
            this.q1m_1;
            tmp_3.p1m_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.n9_1 = 4;
            this.m9_1 = 3;
            continue $sm;
          case 2:
            this.n9_1 = 4;
            var tmp_4 = this.p9_1;
            if (tmp_4 instanceof Error) {
              var e = this.p9_1;
              var tmp_5 = this;
              tmp_5.p1m_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 3;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            this.n9_1 = 4;
            if (!this.m1m_1.f1l_1.atomicfu$compareAndSet(null, get_CLOSED()))
              return Unit_instance;
            closeSlot(this.m1m_1, null);
            return Unit_instance;
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n9_1 === 4) {
          throw e_0;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e_0;
        }
      }
     while (true);
  };
  function ByteChannel(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.y1k_1 = autoFlush;
    this.z1k_1 = new Buffer();
    this.a1l_1 = 0;
    this.b1l_1 = new Object();
    this.c1l_1 = atomic$ref$1(Empty_instance);
    this.d1l_1 = new Buffer();
    this.e1l_1 = new Buffer();
    this.f1l_1 = atomic$ref$1(null);
  }
  protoOf(ByteChannel).u1m = function () {
    var tmp0_safe_receiver = this.f1l_1.kotlinx$atomicfu$value;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.w1m(ClosedReadChannelException$_init_$ref_ix0089());
    }
    if (this.d1l_1.o1h()) {
      moveFlushToReadBuffer(this);
    }
    return this.d1l_1;
  };
  protoOf(ByteChannel).x1m = function () {
    if (this.y1m()) {
      var tmp0_safe_receiver = this.f1l_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = tmp0_safe_receiver.w1m(ClosedWriteChannelException$_init_$ref_ef15ty());
      }
      if (tmp == null)
        throw new ClosedWriteChannelException();
    }
    return this.e1l_1;
  };
  protoOf(ByteChannel).z1m = function () {
    var tmp0_safe_receiver = this.f1l_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1n();
  };
  protoOf(ByteChannel).y1m = function () {
    return !(this.f1l_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannel).b1n = function () {
    return !(this.z1m() == null) || (this.y1m() && this.a1l_1 === 0 && this.d1l_1.o1h());
  };
  protoOf(ByteChannel).c1n = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$0(this, min, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(ByteChannel).t1m = function ($completion) {
    var tmp = new $flushCOROUTINE$1(this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(ByteChannel).d1m = function () {
    if (this.e1l_1.o1h())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.b1l_1;
    var count = this.e1l_1.s().j1();
    this.z1k_1.g1j(this.e1l_1);
    this.a1l_1 = this.a1l_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.c1l_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.c1l_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.s1k();
    }
  };
  protoOf(ByteChannel).w4 = function () {
    this.d1m();
    if (!this.f1l_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  };
  protoOf(ByteChannel).e1n = function ($completion) {
    var tmp = new $flushAndCloseCOROUTINE$2(this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(ByteChannel).f1n = function (cause) {
    if (!(this.f1l_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.f1l_1.atomicfu$compareAndSet(null, closedToken);
    var wrappedCause = closedToken.a1n();
    closeSlot(this, wrappedCause);
  };
  protoOf(ByteChannel).toString = function () {
    return 'ByteChannel[' + hashCode(this) + ']';
  };
  function ConcurrentIOException(taskName, cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$('Concurrent ' + taskName + ' attempts', cause, this);
    captureStack(this, ConcurrentIOException);
  }
  function ByteReadChannel(content, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? content.length : length;
    // Inline function 'kotlin.also' call
    var this_0 = new Buffer();
    this_0.x1i(content, offset, offset + length | 0);
    var source = this_0;
    return ByteReadChannel_0(source);
  }
  function ByteReadChannel_0(source) {
    return new SourceByteReadChannel(source);
  }
  function ByteReadChannel$Companion$Empty$1() {
    this.g1n_1 = null;
    this.h1n_1 = new Buffer();
  }
  protoOf(ByteReadChannel$Companion$Empty$1).z1m = function () {
    return this.g1n_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).b1n = function () {
    return true;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).u1m = function () {
    return this.h1n_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).c1n = function (min, $completion) {
    return false;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).f1n = function (cause) {
  };
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.i1n_1 = new ByteReadChannel$Companion$Empty$1();
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function ByteReadChannel_1() {
  }
  function cancel_0(_this__u8e3s4) {
    _this__u8e3s4.f1n(IOException_init_$Create$('Channel was cancelled'));
  }
  function readRemaining(_this__u8e3s4, $completion) {
    var tmp = new $readRemainingCOROUTINE$3(_this__u8e3s4, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function get_availableForRead(_this__u8e3s4) {
    return _this__u8e3s4.u1m().n1h().s().j1();
  }
  function readPacket(_this__u8e3s4, packet, $completion) {
    var tmp = new $readPacketCOROUTINE$4(_this__u8e3s4, packet, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function discard(_this__u8e3s4, max, $completion) {
    max = max === VOID ? new Long(-1, 2147483647) : max;
    var tmp = new $discardCOROUTINE$5(_this__u8e3s4, max, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var tmp = new $readAvailableCOROUTINE$7(_this__u8e3s4, buffer, offset, length, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$9(_this__u8e3s4, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function copyTo(_this__u8e3s4, channel, limit, $completion) {
    var tmp = new $copyToCOROUTINE$10(_this__u8e3s4, channel, limit, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function copyTo_0(_this__u8e3s4, channel, $completion) {
    var tmp = new $copyToCOROUTINE$11(_this__u8e3s4, channel, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.z1m();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function readBuffer(_this__u8e3s4, $completion) {
    var tmp = new $readBufferCOROUTINE$12(_this__u8e3s4, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function readUTF8LineTo(_this__u8e3s4, out, max, lineEnding, $completion) {
    max = max === VOID ? 2147483647 : max;
    lineEnding = lineEnding === VOID ? Companion_getInstance_1().b1r_1 : lineEnding;
    var tmp = new $readUTF8LineToCOROUTINE$13(_this__u8e3s4, out, max, lineEnding, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.z1m();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.z1m();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function readRemaining_0(_this__u8e3s4, max, $completion) {
    var tmp = new $readRemainingCOROUTINE$14(_this__u8e3s4, max, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function skipIfFound(_this__u8e3s4, byteString, $completion) {
    var tmp = new $skipIfFoundCOROUTINE$15(_this__u8e3s4, byteString, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
    var tmp = new $readUntilCOROUTINE$16(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function peek(_this__u8e3s4, count, $completion) {
    var tmp = new $peekCOROUTINE$17(_this__u8e3s4, count, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function buildPartialMatchTable(byteString) {
    var table = new Int32Array(byteString.s());
    var j = 0;
    var inductionVariable = 1;
    var last = byteString.s();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        while (j > 0 && !(byteString.u(i) === byteString.u(j))) {
          j = table[j - 1 | 0];
        }
        if (byteString.u(i) === byteString.u(j)) {
          j = j + 1 | 0;
        }
        table[i] = j;
      }
       while (inductionVariable < last);
    return table;
  }
  function readByte(_this__u8e3s4, $completion) {
    var tmp = new $readByteCOROUTINE$18(_this__u8e3s4, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function toSingleLineString(_this__u8e3s4) {
    return replace(decodeToString(_this__u8e3s4), '\n', '\\n');
  }
  function readUTF8LineTo$checkLineEndingAllowed($lineEnding, lineEndingToCheck) {
    if (!LineEndingMode__contains_impl_q5pr68($lineEnding, lineEndingToCheck)) {
      throw IOException_init_$Create$('Unexpected line ending ' + LineEndingMode__toString_impl_j4h76r(lineEndingToCheck) + ', while expected ' + LineEndingMode__toString_impl_j4h76r($lineEnding));
    }
  }
  function readUntil$appendPartialMatch($writeChannel, matchBuffer, matchIndex, rc, $completion) {
    var tmp = new $readUntil$appendPartialMatchCOROUTINE$19($writeChannel, matchBuffer, matchIndex, rc, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function readUntil$resetPartialMatch(matchIndex, $matchString, partialMatchTable, byte) {
    while (matchIndex._v > 0 && !(byte === $matchString.u(matchIndex._v))) {
      matchIndex._v = partialMatchTable[matchIndex._v - 1 | 0];
    }
  }
  function $readRemainingCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r1n_1 = _this__u8e3s4;
  }
  protoOf($readRemainingCOROUTINE$3).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.s1n_1 = BytePacketBuilder();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.r1n_1.b1n()) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.s1n_1.g1j(this.r1n_1.u1m());
            this.m9_1 = 2;
            suspendResult = this.r1n_1.d1n(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m9_1 = 1;
            continue $sm;
          case 3:
            rethrowCloseCauseIfNeeded(this.r1n_1);
            return this.s1n_1.n1h();
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $readPacketCOROUTINE$4(_this__u8e3s4, packet, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b1o_1 = _this__u8e3s4;
    this.c1o_1 = packet;
  }
  protoOf($readPacketCOROUTINE$4).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 6;
            this.d1o_1 = new Buffer();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!(this.d1o_1.s().e1(toLong(this.c1o_1)) < 0)) {
              this.m9_1 = 5;
              continue $sm;
            }

            if (this.b1o_1.u1m().o1h()) {
              this.m9_1 = 2;
              suspendResult = this.b1o_1.d1n(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 3;
              continue $sm;
            }

          case 2:
            this.m9_1 = 3;
            continue $sm;
          case 3:
            if (this.b1o_1.b1n()) {
              this.m9_1 = 5;
              continue $sm;
            } else {
              this.m9_1 = 4;
              continue $sm;
            }

          case 4:
            if (get_remaining(this.b1o_1.u1m()).e1(numberToLong(this.c1o_1).a3(this.d1o_1.s())) > 0) {
              this.b1o_1.u1m().q1i(this.d1o_1, numberToLong(this.c1o_1).a3(this.d1o_1.s()));
            } else {
              this.b1o_1.u1m().r1i(this.d1o_1);
            }

            this.m9_1 = 1;
            continue $sm;
          case 5:
            if (this.d1o_1.s().e1(toLong(this.c1o_1)) < 0) {
              throw EOFException_init_$Create$('Not enough data available, required ' + this.c1o_1 + ' bytes but only ' + this.d1o_1.s().toString() + ' available');
            }

            return this.d1o_1;
          case 6:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 6) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $discardCOROUTINE$5(_this__u8e3s4, max, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m1o_1 = _this__u8e3s4;
    this.n1o_1 = max;
  }
  protoOf($discardCOROUTINE$5).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            this.o1o_1 = this.n1o_1;
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!(this.o1o_1.e1(new Long(0, 0)) > 0 && !this.m1o_1.b1n())) {
              this.m9_1 = 4;
              continue $sm;
            }

            if (get_availableForRead(this.m1o_1) === 0) {
              this.m9_1 = 2;
              suspendResult = this.m1o_1.d1n(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 3;
              continue $sm;
            }

          case 2:
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var tmp0 = this.o1o_1;
            var b = get_remaining(this.m1o_1.u1m());
            var count = tmp0.e1(b) <= 0 ? tmp0 : b;
            discard_0(this.m1o_1.u1m(), count);
            this.o1o_1 = this.o1o_1.a3(count);
            this.m9_1 = 1;
            continue $sm;
          case 4:
            return this.n1o_1.a3(this.o1o_1);
          case 5:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 5) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $readAvailableCOROUTINE$7(_this__u8e3s4, buffer, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x1o_1 = _this__u8e3s4;
    this.y1o_1 = buffer;
    this.z1o_1 = offset;
    this.a1p_1 = length;
  }
  protoOf($readAvailableCOROUTINE$7).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            if (this.x1o_1.b1n())
              return -1;
            if (this.x1o_1.u1m().o1h()) {
              this.m9_1 = 1;
              suspendResult = this.x1o_1.d1n(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 2;
              continue $sm;
            }

          case 1:
            this.m9_1 = 2;
            continue $sm;
          case 2:
            if (this.x1o_1.b1n())
              return -1;
            return readAvailable_0(this.x1o_1.u1m(), this.y1o_1, this.z1o_1, this.a1p_1);
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
  function $toByteArrayCOROUTINE$9(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j1p_1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$9).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = readBuffer(this.j1p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes(ARGUMENT);
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $copyToCOROUTINE$10(_this__u8e3s4, channel, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s1p_1 = _this__u8e3s4;
    this.t1p_1 = channel;
    this.u1p_1 = limit;
  }
  protoOf($copyToCOROUTINE$10).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 12;
            this.v1p_1 = this.u1p_1;
            this.m9_1 = 1;
            continue $sm;
          case 1:
            this.n9_1 = 8;
            this.n9_1 = 7;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            if (!(!this.s1p_1.b1n() && this.v1p_1.e1(new Long(0, 0)) > 0)) {
              this.m9_1 = 6;
              continue $sm;
            }

            if (this.s1p_1.u1m().o1h()) {
              this.m9_1 = 3;
              suspendResult = this.s1p_1.d1n(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 4;
              continue $sm;
            }

          case 3:
            this.m9_1 = 4;
            continue $sm;
          case 4:
            var tmp_0 = this;
            var tmp0 = this.v1p_1;
            var b = get_remaining(this.s1p_1.u1m());
            tmp_0.x1p_1 = tmp0.e1(b) <= 0 ? tmp0 : b;
            this.s1p_1.u1m().q1i(this.t1p_1.x1m(), this.x1p_1);
            this.v1p_1 = this.v1p_1.a3(this.x1p_1);
            this.m9_1 = 5;
            suspendResult = this.t1p_1.t1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.m9_1 = 2;
            continue $sm;
          case 6:
            this.w1p_1 = Unit_instance;
            this.n9_1 = 12;
            this.m9_1 = 10;
            continue $sm;
          case 7:
            this.n9_1 = 8;
            var tmp_1 = this.p9_1;
            if (tmp_1 instanceof Error) {
              this.y1p_1 = this.p9_1;
              var tmp_2 = this;
              this.s1p_1.f1n(this.y1p_1);
              close_0(this.t1p_1, this.y1p_1);
              throw this.y1p_1;
            } else {
              throw this.p9_1;
            }

          case 8:
            this.n9_1 = 12;
            this.z1p_1 = this.p9_1;
            this.m9_1 = 9;
            suspendResult = this.t1p_1.t1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            throw this.z1p_1;
          case 10:
            this.n9_1 = 12;
            this.m9_1 = 11;
            suspendResult = this.t1p_1.t1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            return this.u1p_1.a3(this.v1p_1);
          case 12:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 12) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $copyToCOROUTINE$11(_this__u8e3s4, channel, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i1q_1 = _this__u8e3s4;
    this.j1q_1 = channel;
  }
  protoOf($copyToCOROUTINE$11).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 11;
            this.k1q_1 = new Long(0, 0);
            this.m9_1 = 1;
            continue $sm;
          case 1:
            this.n9_1 = 7;
            this.n9_1 = 6;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            if (!!this.i1q_1.b1n()) {
              this.m9_1 = 5;
              continue $sm;
            }

            this.k1q_1 = this.k1q_1.z2(this.i1q_1.u1m().r1i(this.j1q_1.x1m()));
            this.m9_1 = 3;
            suspendResult = this.j1q_1.t1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.m9_1 = 4;
            suspendResult = this.i1q_1.d1n(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.m9_1 = 2;
            continue $sm;
          case 5:
            this.l1q_1 = Unit_instance;
            this.n9_1 = 11;
            this.m9_1 = 9;
            continue $sm;
          case 6:
            this.n9_1 = 7;
            var tmp_0 = this.p9_1;
            if (tmp_0 instanceof Error) {
              this.m1q_1 = this.p9_1;
              var tmp_1 = this;
              this.i1q_1.f1n(this.m1q_1);
              close_0(this.j1q_1, this.m1q_1);
              throw this.m1q_1;
            } else {
              throw this.p9_1;
            }

          case 7:
            this.n9_1 = 11;
            this.n1q_1 = this.p9_1;
            this.m9_1 = 8;
            suspendResult = this.j1q_1.t1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            throw this.n1q_1;
          case 9:
            this.n9_1 = 11;
            this.m9_1 = 10;
            suspendResult = this.j1q_1.t1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            return this.k1q_1;
          case 11:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 11) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $readBufferCOROUTINE$12(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w1q_1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$12).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.x1q_1 = new Buffer();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.w1q_1.b1n()) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.x1q_1.g1j(this.w1q_1.u1m());
            this.m9_1 = 2;
            suspendResult = this.w1q_1.d1n(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m9_1 = 1;
            continue $sm;
          case 3:
            var tmp0_safe_receiver = this.w1q_1.z1m();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return this.x1q_1;
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $readUTF8LineToCOROUTINE$13(_this__u8e3s4, out, max, lineEnding, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1r_1 = _this__u8e3s4;
    this.m1r_1 = out;
    this.n1r_1 = max;
    this.o1r_1 = lineEnding;
  }
  protoOf($readUTF8LineToCOROUTINE$13).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 21;
            if (this.l1r_1.u1m().o1h()) {
              this.m9_1 = 1;
              suspendResult = this.l1r_1.d1n(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 2;
              continue $sm;
            }

          case 1:
            this.m9_1 = 2;
            continue $sm;
          case 2:
            if (this.l1r_1.b1n())
              return false;
            var tmp_0 = this;
            tmp_0.p1r_1 = new Buffer();
            this.m9_1 = 3;
            continue $sm;
          case 3:
            this.r1r_1 = this.p1r_1;
            this.s1r_1 = null;
            this.m9_1 = 4;
            continue $sm;
          case 4:
            this.m9_1 = 5;
            continue $sm;
          case 5:
            this.m9_1 = 6;
            continue $sm;
          case 6:
            this.n9_1 = 18;
            this.n9_1 = 17;
            var tmp_1 = this;
            tmp_1.u1r_1 = this.r1r_1;
            this.v1r_1 = this.u1r_1;
            this.m9_1 = 7;
            continue $sm;
          case 7:
            if (!!this.l1r_1.b1n()) {
              this.m9_1 = 14;
              continue $sm;
            }

            this.m9_1 = 8;
            continue $sm;
          case 8:
            if (!!this.l1r_1.u1m().o1h()) {
              this.m9_1 = 12;
              continue $sm;
            }

            this.w1r_1 = this.l1r_1.u1m().r1h();
            if (this.w1r_1 === 13) {
              if (this.l1r_1.u1m().o1h()) {
                this.m9_1 = 10;
                suspendResult = this.l1r_1.d1n(VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.m9_1 = 11;
                continue $sm;
              }
            } else {
              if (this.w1r_1 === 10) {
                readUTF8LineTo$checkLineEndingAllowed(this.o1r_1, Companion_getInstance_1().z1q_1);
                this.m1r_1.o(readString(this.v1r_1));
                this.t1r_1 = true;
                this.n9_1 = 21;
                this.m9_1 = 15;
                continue $sm;
              } else {
                this.v1r_1.h1j(this.w1r_1);
                this.m9_1 = 9;
                continue $sm;
              }
            }

          case 9:
            this.m9_1 = 8;
            continue $sm;
          case 10:
            this.m9_1 = 11;
            continue $sm;
          case 11:
            if (this.l1r_1.u1m().n1h().j1i(new Long(0, 0)) === 10) {
              readUTF8LineTo$checkLineEndingAllowed(this.o1r_1, Companion_getInstance_1().a1r_1);
              discard_0(this.l1r_1.u1m(), new Long(1, 0));
            } else {
              readUTF8LineTo$checkLineEndingAllowed(this.o1r_1, Companion_getInstance_1().y1q_1);
            }

            this.m1r_1.o(readString(this.v1r_1));
            this.t1r_1 = true;
            this.n9_1 = 21;
            this.m9_1 = 15;
            continue $sm;
          case 12:
            if (this.v1r_1.s().e1(toLong(this.n1r_1)) >= 0) {
              throw new TooLongLineException('Line exceeds limit of ' + this.n1r_1 + ' characters');
            }

            this.m9_1 = 13;
            suspendResult = this.l1r_1.d1n(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            this.m9_1 = 7;
            continue $sm;
          case 14:
            var tmp_2 = this;
            var this_0 = this.v1r_1.s().e1(new Long(0, 0)) > 0;
            if (this_0) {
              this.m1r_1.o(readString(this.v1r_1));
            }

            tmp_2.t1r_1 = this_0;
            this.n9_1 = 21;
            this.m9_1 = 15;
            var tmp_3 = this;
            continue $sm;
          case 15:
            var tmp_4 = this.t1r_1;
            this.n9_1 = 21;
            closeFinally(this.r1r_1, this.s1r_1);
            return tmp_4;
          case 16:
            this.n9_1 = 21;
            var tmp_5 = this;
            closeFinally(this.r1r_1, this.s1r_1);
            tmp_5.q1r_1 = Unit_instance;
            this.m9_1 = 20;
            continue $sm;
          case 17:
            this.n9_1 = 18;
            var tmp_6 = this.p9_1;
            if (tmp_6 instanceof Error) {
              var e = this.p9_1;
              var tmp_7 = this;
              this.s1r_1 = e;
              throw e;
            } else {
              throw this.p9_1;
            }

          case 18:
            this.n9_1 = 21;
            var t = this.p9_1;
            closeFinally(this.r1r_1, this.s1r_1);
            throw t;
          case 19:
            this.n9_1 = 21;
            closeFinally(this.r1r_1, this.s1r_1);
            if (false) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.m9_1 = 20;
            continue $sm;
          case 20:
            return Unit_instance;
          case 21:
            throw this.p9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n9_1 === 21) {
          throw e_0;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e_0;
        }
      }
     while (true);
  };
  function $readRemainingCOROUTINE$14(_this__u8e3s4, max, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f1s_1 = _this__u8e3s4;
    this.g1s_1 = max;
  }
  protoOf($readRemainingCOROUTINE$14).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.h1s_1 = BytePacketBuilder();
            this.i1s_1 = this.g1s_1;
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!(!this.f1s_1.b1n() && this.i1s_1.e1(new Long(0, 0)) > 0)) {
              this.m9_1 = 3;
              continue $sm;
            }

            if (this.i1s_1.e1(get_remaining(this.f1s_1.u1m())) >= 0) {
              this.i1s_1 = this.i1s_1.a3(get_remaining(this.f1s_1.u1m()));
              this.f1s_1.u1m().r1i(this.h1s_1);
            } else {
              this.f1s_1.u1m().q1i(this.h1s_1, this.i1s_1);
              this.i1s_1 = new Long(0, 0);
            }

            this.m9_1 = 2;
            suspendResult = this.f1s_1.d1n(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m9_1 = 1;
            continue $sm;
          case 3:
            return this.h1s_1.n1h();
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $skipIfFoundCOROUTINE$15(_this__u8e3s4, byteString, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r1s_1 = _this__u8e3s4;
    this.s1s_1 = byteString;
  }
  protoOf($skipIfFoundCOROUTINE$15).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.m9_1 = 1;
            suspendResult = peek(this.r1s_1, this.s1s_1.s(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t1s_1 = suspendResult;
            if (equals(this.t1s_1, this.s1s_1)) {
              this.m9_1 = 3;
              suspendResult = discard(this.r1s_1, toLong(this.s1s_1.s()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
          case 3:
            return true;
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $readUntilCOROUTINE$16(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c1t_1 = _this__u8e3s4;
    this.d1t_1 = matchString;
    this.e1t_1 = writeChannel;
    this.f1t_1 = limit;
    this.g1t_1 = ignoreMissing;
  }
  protoOf($readUntilCOROUTINE$16).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 11;
            if (!(this.d1t_1.s() > 0)) {
              var message = 'Empty match string not permitted for readUntil';
              throw IllegalStateException_init_$Create$(toString_1(message));
            }

            this.h1t_1 = buildPartialMatchTable(this.d1t_1);
            this.i1t_1 = {_v: 0};
            this.j1t_1 = new Int8Array(this.d1t_1.s());
            this.k1t_1 = {_v: new Long(0, 0)};
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.c1t_1.b1n()) {
              this.m9_1 = 7;
              continue $sm;
            }

            this.m9_1 = 2;
            suspendResult = readByte(this.c1t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.l1t_1 = suspendResult;
            if (this.i1t_1._v > 0 && !(this.l1t_1 === this.d1t_1.u(this.i1t_1._v))) {
              this.m9_1 = 3;
              suspendResult = readUntil$appendPartialMatch(this.e1t_1, this.j1t_1, this.i1t_1, this.k1t_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 4;
              continue $sm;
            }

          case 3:
            readUntil$resetPartialMatch(this.i1t_1, this.d1t_1, this.h1t_1, this.l1t_1);
            this.m9_1 = 4;
            continue $sm;
          case 4:
            if (this.l1t_1 === this.d1t_1.u(this.i1t_1._v)) {
              var tmp_0 = this;
              this.j1t_1[this.i1t_1._v] = this.l1t_1;
              this.i1t_1._v = this.i1t_1._v + 1 | 0;
              if (this.i1t_1._v === this.d1t_1.s()) {
                return this.k1t_1._v;
              }
              tmp_0.m1t_1 = Unit_instance;
              this.m9_1 = 6;
              continue $sm;
            } else {
              this.m9_1 = 5;
              suspendResult = writeByte(this.e1t_1, this.l1t_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            var tmp_1 = this;
            var _unary__edvuaz = this.k1t_1._v;
            this.k1t_1._v = _unary__edvuaz.e3();
            tmp_1.m1t_1 = _unary__edvuaz;
            this.m9_1 = 6;
            continue $sm;
          case 6:
            if (this.k1t_1._v.e1(this.f1t_1) > 0) {
              throw IOException_init_$Create$('Limit of ' + this.f1t_1.toString() + ' bytes exceeded while scanning for "' + decodeToString(this.d1t_1) + '"');
            }

            this.m9_1 = 1;
            continue $sm;
          case 7:
            if (this.g1t_1) {
              this.m9_1 = 9;
              suspendResult = readUntil$appendPartialMatch(this.e1t_1, this.j1t_1, this.i1t_1, this.k1t_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 8;
              continue $sm;
            }

          case 8:
            throw IOException_init_$Create$('Expected "' + toSingleLineString(this.d1t_1) + '" but encountered end of input');
          case 9:
            this.m9_1 = 10;
            suspendResult = this.e1t_1.t1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            return this.k1t_1._v;
          case 11:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 11) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $peekCOROUTINE$17(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v1t_1 = _this__u8e3s4;
    this.w1t_1 = count;
  }
  protoOf($peekCOROUTINE$17).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            if (this.v1t_1.b1n())
              return null;
            this.m9_1 = 1;
            suspendResult = this.v1t_1.c1n(this.w1t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              return null;
            } else {
              this.m9_1 = 2;
              continue $sm;
            }

          case 2:
            return readByteString(this.v1t_1.u1m().s1i(), this.w1t_1);
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
  function $readByteCOROUTINE$18(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f1u_1 = _this__u8e3s4;
  }
  protoOf($readByteCOROUTINE$18).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            if (this.f1u_1.u1m().o1h()) {
              this.m9_1 = 1;
              suspendResult = this.f1u_1.d1n(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 2;
              continue $sm;
            }

          case 1:
            this.m9_1 = 2;
            continue $sm;
          case 2:
            if (this.f1u_1.u1m().o1h()) {
              throw EOFException_init_$Create$('Not enough data available');
            }

            return this.f1u_1.u1m().r1h();
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
  function $readUntil$appendPartialMatchCOROUTINE$19($writeChannel, matchBuffer, matchIndex, rc, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o1u_1 = $writeChannel;
    this.p1u_1 = matchBuffer;
    this.q1u_1 = matchIndex;
    this.r1u_1 = rc;
  }
  protoOf($readUntil$appendPartialMatchCOROUTINE$19).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = writeFully(this.o1u_1, this.p1u_1, 0, this.q1u_1._v, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0 = this.r1u_1._v;
            var other = this.q1u_1._v;
            this.r1u_1._v = tmp0.z2(toLong(other));
            this.q1u_1._v = 0;
            return Unit_instance;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function flushIfNeeded(_this__u8e3s4, $completion) {
    var tmp = new $flushIfNeededCOROUTINE$20(_this__u8e3s4, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function $flushIfNeededCOROUTINE$20(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1v_1 = _this__u8e3s4;
  }
  protoOf($flushIfNeededCOROUTINE$20).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            rethrowCloseCauseIfNeeded_0(this.a1v_1);
            var tmp_0;
            var tmp_1 = this.a1v_1;
            var tmp0_safe_receiver = tmp_1 instanceof ByteChannel ? tmp_1 : null;
            if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y1k_1) === true) {
              tmp_0 = true;
            } else {
              tmp_0 = get_size(this.a1v_1.x1m()) >= 1048576;
            }

            if (tmp_0) {
              this.m9_1 = 1;
              suspendResult = this.a1v_1.t1m(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 2;
              continue $sm;
            }

          case 1:
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
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
  function get_NO_CALLBACK() {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return NO_CALLBACK;
  }
  var NO_CALLBACK;
  function WriterJob(channel, job) {
    this.b1v_1 = channel;
    this.c1v_1 = job;
  }
  protoOf(WriterJob).mv = function () {
    return this.c1v_1;
  };
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
  }
  function WriterScope(channel, coroutineContext) {
    this.d1v_1 = channel;
    this.e1v_1 = coroutineContext;
  }
  protoOf(WriterScope).ds = function () {
    return this.e1v_1;
  };
  function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? value.length : endIndex;
    _this__u8e3s4.x1m().x1i(value, startIndex, endIndex);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function writePacket(_this__u8e3s4, source, $completion) {
    var tmp = new $writePacketCOROUTINE$21(_this__u8e3s4, source, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function get_isCompleted(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return _this__u8e3s4.mv().ys();
  }
  function close_0(_this__u8e3s4, cause) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    if (cause == null) {
      fireAndForget(ByteWriteChannel$flushAndClose$ref_0(_this__u8e3s4));
    } else {
      _this__u8e3s4.f1n(cause);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, block) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    var tmp = _this__u8e3s4.mv();
    tmp.ft(invokeOnCompletion$lambda(block));
  }
  function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    // Inline function 'kotlin.apply' call
    var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel, null));
    this_0.ft(writer$lambda(channel));
    var job = this_0;
    return new WriterJob(channel, job);
  }
  function fireAndForget(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
  }
  function writeByte(_this__u8e3s4, value, $completion) {
    _this__u8e3s4.x1m().h1j(value);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function NO_CALLBACK$1() {
    this.p1v_1 = EmptyCoroutineContext_getInstance();
  }
  protoOf(NO_CALLBACK$1).s9 = function () {
    return this.p1v_1;
  };
  protoOf(NO_CALLBACK$1).da = function (result) {
    return Unit_instance;
  };
  protoOf(NO_CALLBACK$1).ha = function (result) {
    return this.da(result);
  };
  function ByteWriteChannel$flushAndClose$ref($boundThis) {
    this.q1v_1 = $boundThis;
  }
  protoOf(ByteWriteChannel$flushAndClose$ref).r1v = function ($completion) {
    return this.q1v_1.e1n($completion);
  };
  protoOf(ByteWriteChannel$flushAndClose$ref).zb = function ($completion) {
    return this.r1v($completion);
  };
  function ByteWriteChannel$flushAndClose$ref_0($boundThis) {
    var i = new ByteWriteChannel$flushAndClose$ref($boundThis);
    var l = function ($completion) {
      return i.r1v($completion);
    };
    l.callableName = 'flushAndClose';
    l.$arity = 0;
    return l;
  }
  function invokeOnCompletion$lambda($block) {
    return function (it) {
      $block();
      return Unit_instance;
    };
  }
  function writer$slambda($block, $channel, resultContinuation) {
    this.a1w_1 = $block;
    this.b1w_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(writer$slambda).v1w = function ($this$launch, $completion) {
    var tmp = this.z1g($this$launch, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(writer$slambda).ua = function (p1, $completion) {
    return this.v1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(writer$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 14;
            this.d1w_1 = Job(get_job(this.c1w_1.ds()));
            this.m9_1 = 1;
            continue $sm;
          case 1:
            this.n9_1 = 4;
            this.n9_1 = 3;
            this.m9_1 = 2;
            suspendResult = this.a1w_1(new WriterScope(this.b1w_1, this.c1w_1.ds().pj(this.d1w_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.d1w_1.a10();
            var tmp_0 = this;
            var tmp_1;
            if (get_job(this.c1w_1.ds()).zs()) {
              this.b1w_1.f1n(get_job(this.c1w_1.ds()).ct());
              tmp_1 = Unit_instance;
            }

            tmp_0.e1w_1 = tmp_1;
            this.n9_1 = 14;
            this.m9_1 = 9;
            continue $sm;
          case 3:
            this.n9_1 = 4;
            var tmp_2 = this.p9_1;
            if (tmp_2 instanceof Error) {
              this.f1w_1 = this.p9_1;
              var tmp_3 = this;
              cancel(this.d1w_1, 'Exception thrown while writing to channel', this.f1w_1);
              this.b1w_1.f1n(this.f1w_1);
              tmp_3.e1w_1 = Unit_instance;
              this.n9_1 = 14;
              this.m9_1 = 9;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 4:
            this.n9_1 = 14;
            this.g1w_1 = this.p9_1;
            this.m9_1 = 5;
            suspendResult = this.d1w_1.b10(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp_4 = this;
            tmp_4.h1w_1 = this.c1w_1;
            this.i1w_1 = this.h1w_1;
            this.n9_1 = 7;
            var tmp_5 = this;
            tmp_5.k1w_1 = Companion_instance;
            var tmp_6 = this;
            tmp_6.l1w_1 = this.i1w_1;
            this.m1w_1 = this.l1w_1;
            this.m9_1 = 6;
            suspendResult = this.b1w_1.e1n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.n1w_1 = Unit_instance;
            var tmp_7 = this;
            this.k1w_1;
            var value = this.n1w_1;
            tmp_7.j1w_1 = _Result___init__impl__xyqfz8(value);
            this.n9_1 = 14;
            this.m9_1 = 8;
            continue $sm;
          case 7:
            this.n9_1 = 14;
            var tmp_8 = this.p9_1;
            if (tmp_8 instanceof Error) {
              this.o1w_1 = this.p9_1;
              var tmp_9 = this;
              var exception = this.o1w_1;
              tmp_9.j1w_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.m9_1 = 8;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 8:
            this.n9_1 = 14;
            throw this.g1w_1;
          case 9:
            this.n9_1 = 14;
            this.m9_1 = 10;
            suspendResult = this.d1w_1.b10(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            var tmp_10 = this;
            tmp_10.p1w_1 = this.c1w_1;
            this.q1w_1 = this.p1w_1;
            this.n9_1 = 12;
            var tmp_11 = this;
            tmp_11.s1w_1 = Companion_instance;
            var tmp_12 = this;
            tmp_12.t1w_1 = this.q1w_1;
            this.u1w_1 = this.t1w_1;
            this.m9_1 = 11;
            suspendResult = this.b1w_1.e1n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            var tmp_13 = this;
            this.s1w_1;
            tmp_13.r1w_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.n9_1 = 14;
            this.m9_1 = 13;
            continue $sm;
          case 12:
            this.n9_1 = 14;
            var tmp_14 = this.p9_1;
            if (tmp_14 instanceof Error) {
              var e = this.p9_1;
              var tmp_15 = this;
              tmp_15.r1w_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 13;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 13:
            this.n9_1 = 14;
            return Unit_instance;
          case 14:
            throw this.p9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n9_1 === 14) {
          throw e_0;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(writer$slambda).z1g = function ($this$launch, completion) {
    var i = new writer$slambda(this.a1w_1, this.b1w_1, completion);
    i.c1w_1 = $this$launch;
    return i;
  };
  function writer$slambda_0($block, $channel, resultContinuation) {
    var i = new writer$slambda($block, $channel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.v1w($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function writer$lambda($channel) {
    return function (it) {
      var tmp;
      if (!(it == null) && !$channel.y1m()) {
        $channel.f1n(it);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function $writePacketCOROUTINE$21(_this__u8e3s4, source, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1v_1 = _this__u8e3s4;
    this.o1v_1 = source;
  }
  protoOf($writePacketCOROUTINE$21).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.o1v_1.o1h()) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.n1v_1.x1m().b1j(this.o1v_1, get_remaining(this.o1v_1));
            this.m9_1 = 2;
            suspendResult = flushIfNeeded(this.n1v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m9_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_ByteWriteChannelOperations_kt_acrf6u;
  function _init_properties_ByteWriteChannelOperations_kt__i7slrs() {
    if (!properties_initialized_ByteWriteChannelOperations_kt_acrf6u) {
      properties_initialized_ByteWriteChannelOperations_kt_acrf6u = true;
      NO_CALLBACK = new NO_CALLBACK$1();
    }
  }
  function get_CLOSED() {
    _init_properties_CloseToken_kt__9ucr41();
    return CLOSED;
  }
  var CLOSED;
  function ClosedByteChannelException$_init_$ref_yjp351() {
    var l = function (p0) {
      return new ClosedByteChannelException(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function CloseToken(origin) {
    this.v1m_1 = origin;
  }
  protoOf(CloseToken).w1w = function (wrap) {
    var tmp0_subject = this.v1m_1;
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, CopyableThrowable) : false) {
        tmp = this.v1m_1.k10();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException_init_$Create$(this.v1m_1.message, this.v1m_1);
        } else {
          tmp = wrap(this.v1m_1);
        }
      }
    }
    return tmp;
  };
  protoOf(CloseToken).a1n = function (wrap, $super) {
    var tmp;
    if (wrap === VOID) {
      tmp = ClosedByteChannelException$_init_$ref_yjp351();
    } else {
      tmp = wrap;
    }
    wrap = tmp;
    return $super === VOID ? this.w1w(wrap) : $super.w1w.call(this, wrap);
  };
  protoOf(CloseToken).w1m = function (wrap) {
    var tmp0_safe_receiver = this.w1w(wrap);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return tmp;
  };
  var properties_initialized_CloseToken_kt_lgg8zn;
  function _init_properties_CloseToken_kt__9ucr41() {
    if (!properties_initialized_CloseToken_kt_lgg8zn) {
      properties_initialized_CloseToken_kt_lgg8zn = true;
      CLOSED = new CloseToken(null);
    }
  }
  function updateConsumed($this) {
    $this.a1x_1 = $this.a1x_1.z2($this.z1w_1.a3($this.y1w_1.s()));
    $this.z1w_1 = $this.y1w_1.s();
  }
  function $awaitContentCOROUTINE$22(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j1x_1 = _this__u8e3s4;
    this.k1x_1 = min;
  }
  protoOf($awaitContentCOROUTINE$22).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            if (this.j1x_1.u1m().s().e1(toLong(this.k1x_1)) >= 0) {
              this.l1x_1 = true;
              this.m9_1 = 2;
              continue $sm;
            } else {
              this.m9_1 = 1;
              suspendResult = this.j1x_1.x1w_1.c1n(this.k1x_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.l1x_1 = suspendResult;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return this.l1x_1;
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
  function CountedByteReadChannel(delegate) {
    this.x1w_1 = delegate;
    this.y1w_1 = new Buffer();
    this.z1w_1 = new Long(0, 0);
    this.a1x_1 = new Long(0, 0);
  }
  protoOf(CountedByteReadChannel).m1x = function () {
    updateConsumed(this);
    return this.a1x_1;
  };
  protoOf(CountedByteReadChannel).z1m = function () {
    return this.x1w_1.z1m();
  };
  protoOf(CountedByteReadChannel).b1n = function () {
    return this.y1w_1.o1h() && this.x1w_1.b1n();
  };
  protoOf(CountedByteReadChannel).u1m = function () {
    updateConsumed(this);
    var appended = this.y1w_1.g1j(this.x1w_1.u1m());
    this.z1w_1 = this.z1w_1.z2(appended);
    return this.y1w_1;
  };
  protoOf(CountedByteReadChannel).c1n = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$22(this, min, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(CountedByteReadChannel).f1n = function (cause) {
    this.x1w_1.f1n(cause);
    this.y1w_1.w4();
  };
  function counted(_this__u8e3s4) {
    return new CountedByteReadChannel(_this__u8e3s4);
  }
  function readText(_this__u8e3s4) {
    return readString_0(_this__u8e3s4);
  }
  function ClosedByteChannelException(cause) {
    cause = cause === VOID ? null : cause;
    IOException_init_$Init$(cause == null ? null : cause.message, cause, this);
    captureStack(this, ClosedByteChannelException);
  }
  function ClosedReadChannelException(cause) {
    cause = cause === VOID ? null : cause;
    ClosedByteChannelException.call(this, cause);
    captureStack(this, ClosedReadChannelException);
  }
  function ClosedWriteChannelException(cause) {
    cause = cause === VOID ? null : cause;
    ClosedByteChannelException.call(this, cause);
    captureStack(this, ClosedWriteChannelException);
  }
  function _LineEndingMode___init__impl__jo5bul(mode) {
    return mode;
  }
  function _get_mode__dah3bc($this) {
    return $this;
  }
  function LineEndingMode__contains_impl_q5pr68($this, other) {
    return (_get_mode__dah3bc($this) | _get_mode__dah3bc(other)) === _get_mode__dah3bc($this);
  }
  function LineEndingMode__plus_impl_ttpz2j($this, other) {
    return _LineEndingMode___init__impl__jo5bul(_get_mode__dah3bc($this) | _get_mode__dah3bc(other));
  }
  function LineEndingMode__toString_impl_j4h76r($this) {
    var tmp;
    if ($this === Companion_getInstance_1().y1q_1) {
      tmp = 'CR';
    } else if ($this === Companion_getInstance_1().z1q_1) {
      tmp = 'LF';
    } else if ($this === Companion_getInstance_1().a1r_1) {
      tmp = 'CRLF';
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = Companion_getInstance_1().c1r_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        var it = element.n1x_1;
        if (LineEndingMode__contains_impl_q5pr68($this, it)) {
          destination.n(element);
        }
      }
      tmp = toString_1(destination);
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.y1q_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.z1q_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.a1r_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.b1r_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.c1r_1 = listOf([new LineEndingMode(this.y1q_1), new LineEndingMode(this.z1q_1), new LineEndingMode(this.a1r_1)]);
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function LineEndingMode__hashCode_impl_2mopm4($this) {
    return $this;
  }
  function LineEndingMode__equals_impl_qyr4nk($this, other) {
    if (!(other instanceof LineEndingMode))
      return false;
    if (!($this === (other instanceof LineEndingMode ? other.n1x_1 : THROW_CCE())))
      return false;
    return true;
  }
  function LineEndingMode(mode) {
    Companion_getInstance_1();
    this.n1x_1 = mode;
  }
  protoOf(LineEndingMode).toString = function () {
    return LineEndingMode__toString_impl_j4h76r(this.n1x_1);
  };
  protoOf(LineEndingMode).hashCode = function () {
    return LineEndingMode__hashCode_impl_2mopm4(this.n1x_1);
  };
  protoOf(LineEndingMode).equals = function (other) {
    return LineEndingMode__equals_impl_qyr4nk(this.n1x_1, other);
  };
  function SourceByteReadChannel(source) {
    this.o1x_1 = source;
    this.p1x_1 = null;
  }
  protoOf(SourceByteReadChannel).z1m = function () {
    var tmp0_safe_receiver = this.p1x_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1n();
  };
  protoOf(SourceByteReadChannel).b1n = function () {
    return this.o1x_1.o1h();
  };
  protoOf(SourceByteReadChannel).u1m = function () {
    var tmp0_safe_receiver = this.z1m();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.o1x_1.n1h();
  };
  protoOf(SourceByteReadChannel).c1n = function (min, $completion) {
    var tmp0_safe_receiver = this.z1m();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.o1x_1.q1h(toLong(min));
  };
  protoOf(SourceByteReadChannel).f1n = function (cause) {
    if (!(this.p1x_1 == null))
      return Unit_instance;
    this.o1x_1.w4();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.p1x_1 = new CloseToken(IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  };
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? 2147483647 : max;
    var tmp0 = toLong(max);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = input.n1h().s();
    // Inline function 'kotlin.text.buildString' call
    var capacity = (tmp0.e1(b) <= 0 ? tmp0 : b).j1();
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    decode_0(_this__u8e3s4, input, this_0, max);
    return this_0.toString();
  }
  function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return Unit_instance;
    $l$loop: while (true) {
      var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, destination);
      // Inline function 'kotlin.check' call
      if (!(rc >= 0)) {
        throw IllegalStateException_init_$Create$('Check failed.');
      }
      start = start + rc | 0;
      if (start >= toIndex)
        break $l$loop;
    }
  }
  function TooLongLineException(message) {
    MalformedInputException.call(this, message);
    captureStack(this, TooLongLineException);
  }
  function encode(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
    return builder;
  }
  function canRead(_this__u8e3s4) {
    return !_this__u8e3s4.o1h();
  }
  function readBytes(_this__u8e3s4, count) {
    count = count === VOID ? _this__u8e3s4.s().j1() : count;
    return readByteArray(_this__u8e3s4, count);
  }
  function BytePacketBuilder() {
    return new Buffer();
  }
  function writePacket_0(_this__u8e3s4, packet) {
    _this__u8e3s4.g1j(packet);
  }
  function build(_this__u8e3s4) {
    return _this__u8e3s4.n1h();
  }
  function writeFully_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    _this__u8e3s4.x1i(buffer, offset, offset + length | 0);
  }
  function get_size(_this__u8e3s4) {
    return _this__u8e3s4.n1h().s().j1();
  }
  var ByteReadPacketEmpty;
  function get_remaining(_this__u8e3s4) {
    _init_properties_ByteReadPacket_kt__28475y();
    return _this__u8e3s4.n1h().s();
  }
  function discard_0(_this__u8e3s4, count) {
    count = count === VOID ? new Long(-1, 2147483647) : count;
    _init_properties_ByteReadPacket_kt__28475y();
    _this__u8e3s4.q1h(count);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4);
    var countToDiscard = count.e1(b) <= 0 ? count : b;
    _this__u8e3s4.n1h().l1i(countToDiscard);
    return countToDiscard;
  }
  function takeWhile(_this__u8e3s4, block) {
    _init_properties_ByteReadPacket_kt__28475y();
    while (!_this__u8e3s4.o1h() && block(_this__u8e3s4.n1h())) {
    }
  }
  var properties_initialized_ByteReadPacket_kt_hw4st4;
  function _init_properties_ByteReadPacket_kt__28475y() {
    if (!properties_initialized_ByteReadPacket_kt_hw4st4) {
      properties_initialized_ByteReadPacket_kt_hw4st4 = true;
      ByteReadPacketEmpty = new Buffer();
    }
  }
  function readAvailable_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var result = _this__u8e3s4.m1i(buffer, offset, offset + length | 0);
    return result === -1 ? 0 : result;
  }
  function toByteArray_0(_this__u8e3s4, charset) {
    charset = charset === VOID ? Charsets_getInstance().q1x_1 : charset;
    if (charset.equals(Charsets_getInstance().q1x_1))
      return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
    return encodeToByteArray_0(charset.t1x(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function readText_0(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().q1x_1 : charset;
    max = max === VOID ? 2147483647 : max;
    if (charset.equals(Charsets_getInstance().q1x_1)) {
      if (max === 2147483647)
        return readString_0(_this__u8e3s4);
      var tmp0 = _this__u8e3s4.n1h().s();
      // Inline function 'kotlin.math.min' call
      var b = toLong(max);
      var count = tmp0.e1(b) <= 0 ? tmp0 : b;
      return readString_1(_this__u8e3s4, count);
    }
    return decode(charset.u1x(), _this__u8e3s4, max);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().q1x_1 : charset;
    if (charset === Charsets_getInstance().q1x_1) {
      return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
    }
    encodeToImpl(charset.t1x(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).y1x = function () {
    return new Int8Array(4096);
  };
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function _init_properties_ByteArrayPool_kt__kfi3uj() {
    if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function ObjectPool() {
  }
  function NoPoolImpl() {
  }
  protoOf(NoPoolImpl).g1y = function (instance) {
    return Unit_instance;
  };
  protoOf(NoPoolImpl).yu = function () {
    return Unit_instance;
  };
  function Companion_2() {
  }
  protoOf(Companion_2).h1y = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().q1x_1;
    }
    var tmp;
    var tmp_0;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_0 = true;
        break;
      default:
        // Inline function 'kotlin.let' call

        var it = replace_0(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        var tmp_1;
        if (it === 'iso-8859-1') {
          tmp_1 = true;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_1 = it.toLowerCase() === 'iso-8859-1';
        }

        tmp_0 = tmp_1;
        break;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'latin1' || name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().r1x_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  protoOf(Companion_2).i1y = function (charset) {
    var tmp;
    switch (charset) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        tmp = true;
        break;
      default:
        var tmp_0;
        var tmp_1;
        switch (charset) {
          case 'ISO-8859-1':
          case 'iso-8859-1':
            tmp_1 = true;
            break;
          default:
            // Inline function 'kotlin.let' call

            var it = replace_0(charset, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
            var tmp_2;
            if (it === 'iso-8859-1') {
              tmp_2 = true;
            } else {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp_2 = it.toLowerCase() === 'iso-8859-1';
            }

            tmp_1 = tmp_2;
            break;
        }

        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = charset === 'latin1';
        }

        if (tmp_0) {
          tmp = true;
        } else {
          tmp = false;
        }

        break;
    }
    return tmp;
  };
  var Companion_instance_3;
  function Companion_getInstance_2() {
    return Companion_instance_3;
  }
  function Charset(_name) {
    this.s1x_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.s1x_1 === other.s1x_1;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.s1x_1);
  };
  protoOf(Charset).toString = function () {
    return this.s1x_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.s1x_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.q1x_1 = new CharsetImpl('UTF-8');
    this.r1x_1 = new CharsetImpl('ISO-8859-1');
  }
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function MalformedInputException(message) {
    IOException_init_$Init$_0(message, this);
    captureStack(this, MalformedInputException);
  }
  function CharsetDecoder(_charset) {
    this.j1y_1 = _charset;
  }
  function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetEncoder(_charset) {
    this.k1y_1 = _charset;
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
  }
  protoOf(CharsetImpl).t1x = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).u1x = function () {
    return new CharsetDecoderImpl(this);
  };
  function encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    var start = fromIndex;
    if (start >= toIndex)
      return new Int8Array(0);
    var dst = new Buffer();
    var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, dst);
    start = start + rc | 0;
    if (start === toIndex) {
      return readByteArray_0(dst);
    }
    encodeToImpl(_this__u8e3s4, dst, input, start, toIndex);
    return readByteArray_0(dst);
  }
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.n1y_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.n1y_1.toString() + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.n1y_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetEncoderImpl ? other : THROW_CCE();
    if (!this.n1y_1.equals(tmp0_other_with_cast.n1y_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.p1y_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.p1y_1.toString() + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.p1y_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetDecoderImpl ? other : THROW_CCE();
    if (!this.p1y_1.equals(tmp0_other_with_cast.p1y_1))
      return false;
    return true;
  };
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(fromIndex <= toIndex)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    if (get_charset(_this__u8e3s4).equals(Charsets_getInstance().r1x_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    if (!(get_charset(_this__u8e3s4) === Charsets_getInstance().q1x_1)) {
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init_$Create$(toString_1(message_0));
    }
    var encoder = new TextEncoder();
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
    var result = encoder.encode(tmp$ret$5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    dst.a1j(result);
    return result.length;
  }
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.k1y_1;
  }
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset_0(_this__u8e3s4)), true);
    var tmp0 = input.n1h().s();
    // Inline function 'kotlin.comparisons.minOf' call
    var b = toLong(max);
    var count = tmp0.e1(b) <= 0 ? tmp0 : b;
    var tmp = readByteArray(input, count.j1());
    var array = tmp instanceof Int8Array ? tmp : THROW_CCE();
    var tmp_0;
    try {
      tmp_0 = decoder.q1y(array);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var cause = $p;
        var tmp0_elvis_lhs = cause.message;
        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
      } else {
        throw $p;
      }
    }
    var result = tmp_0;
    dst.o(result);
    return result.length;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.j1y_1;
  }
  function forName(_this__u8e3s4, name) {
    return Companion_instance_3.h1y(name);
  }
  function isSupported(_this__u8e3s4, name) {
    return Companion_instance_3.i1y(name);
  }
  function Decoder(encoding, fatal) {
    fatal = fatal === VOID ? true : fatal;
    var tmp;
    try {
      tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        tmp_0 = new TextDecoderFallback(encoding, fatal);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function toKtor(_this__u8e3s4) {
    return new toKtor$1(_this__u8e3s4);
  }
  function textDecoderOptions(fatal) {
    fatal = fatal === VOID ? false : fatal;
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.with' call
    this_0.fatal = fatal;
    return this_0;
  }
  function toKtor$1($this_toKtor) {
    this.r1y_1 = $this_toKtor;
  }
  protoOf(toKtor$1).q1y = function (buffer) {
    return this.r1y_1.decode(buffer);
  };
  function get_ENCODING_ALIASES() {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return ENCODING_ALIASES;
  }
  var ENCODING_ALIASES;
  function get_REPLACEMENT() {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return REPLACEMENT;
  }
  var REPLACEMENT;
  function TextDecoderFallback(encoding, fatal) {
    this.s1y_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().x1(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
  }
  protoOf(TextDecoderFallback).q1y = function (buffer) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
    var inductionVariable = 0;
    var last = bytes.length;
    if (inductionVariable < last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var byte = bytes[index];
        var point = toCodePoint(byte);
        if (point < 0) {
          // Inline function 'kotlin.check' call
          if (!!this.s1y_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException_init_$Create$(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.h1j(toByte(point >> 8));
        }
        builder.h1j(toByte(point & 255));
      }
       while (inductionVariable < last);
    return decodeToString_0(readByteArray_0(builder));
  };
  function toCodePoint(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    var value = _this__u8e3s4 & 255;
    if (isASCII(value)) {
      return value;
    }
    return get_WIN1252_TABLE()[value - 128 | 0];
  }
  function isASCII(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
  }
  var properties_initialized_TextDecoderFallback_js_kt_6rekzk;
  function _init_properties_TextDecoderFallback_js_kt__an7r6m() {
    if (!properties_initialized_TextDecoderFallback_js_kt_6rekzk) {
      properties_initialized_TextDecoderFallback_js_kt_6rekzk = true;
      ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
      // Inline function 'kotlin.byteArrayOf' call
      REPLACEMENT = new Int8Array([-17, -65, -67]);
    }
  }
  function get_DEVELOPMENT_MODE() {
    return false;
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(input, index);
        var character = Char__toInt_impl_vasixd(this_0);
        if (character > 255) {
          failedToMapError(character);
        }
        dst.h1j(toByte(character));
      }
       while (inductionVariable < toIndex);
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function get_WIN1252_TABLE() {
    _init_properties_Win1252Table_kt__tl0v64();
    return WIN1252_TABLE;
  }
  var WIN1252_TABLE;
  var properties_initialized_Win1252Table_kt_pkmjoq;
  function _init_properties_Win1252Table_kt__tl0v64() {
    if (!properties_initialized_Win1252Table_kt_pkmjoq) {
      properties_initialized_Win1252Table_kt_pkmjoq = true;
      // Inline function 'kotlin.intArrayOf' call
      WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
    }
  }
  function DefaultPool(capacity) {
    this.z1x_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.z1x_1;
    tmp.a1y_1 = Array(size);
    this.b1y_1 = 0;
  }
  protoOf(DefaultPool).c1y = function (instance) {
  };
  protoOf(DefaultPool).d1y = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).e1y = function (instance) {
  };
  protoOf(DefaultPool).f1y = function () {
    if (this.b1y_1 === 0)
      return this.y1x();
    this.b1y_1 = this.b1y_1 - 1 | 0;
    var idx = this.b1y_1;
    var tmp = this.a1y_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.a1y_1[idx] = null;
    return this.d1y(instance);
  };
  protoOf(DefaultPool).g1y = function (instance) {
    this.e1y(instance);
    if (this.b1y_1 === this.z1x_1) {
      this.c1y(instance);
    } else {
      var _unary__edvuaz = this.b1y_1;
      this.b1y_1 = _unary__edvuaz + 1 | 0;
      this.a1y_1[_unary__edvuaz] = instance;
    }
  };
  protoOf(DefaultPool).yu = function () {
    var inductionVariable = 0;
    var last = this.b1y_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.a1y_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.a1y_1[i] = null;
        this.c1y(instance);
      }
       while (inductionVariable < last);
    this.b1y_1 = 0;
  };
  //region block: post-declaration
  protoOf(Read).s1k = resume;
  protoOf(Read).t1k = resume_0;
  protoOf(Write).s1k = resume;
  protoOf(Write).t1k = resume_0;
  protoOf(ByteChannel).d1n = awaitContent$default;
  protoOf(ByteReadChannel$Companion$Empty$1).d1n = awaitContent$default;
  protoOf(CountedByteReadChannel).d1n = awaitContent$default;
  protoOf(SourceByteReadChannel).d1n = awaitContent$default;
  protoOf(DefaultPool).w4 = close;
  protoOf(NoPoolImpl).w4 = close;
  //endregion
  //region block: init
  Empty_instance = new Empty();
  Companion_instance_3 = new Companion_2();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = copyTo;
  _.$_$.b = copyTo_0;
  _.$_$.c = discard;
  _.$_$.d = readAvailable;
  _.$_$.e = readPacket;
  _.$_$.f = readRemaining;
  _.$_$.g = readRemaining_0;
  _.$_$.h = readUTF8LineTo;
  _.$_$.i = readUntil;
  _.$_$.j = skipIfFound;
  _.$_$.k = toByteArray;
  _.$_$.l = writeFully;
  _.$_$.m = writePacket;
  _.$_$.n = LineEndingMode__plus_impl_ttpz2j;
  _.$_$.o = Charsets_getInstance;
  _.$_$.p = Companion_getInstance_0;
  _.$_$.q = Companion_getInstance_1;
  _.$_$.r = MalformedInputException;
  _.$_$.s = decode;
  _.$_$.t = encode;
  _.$_$.u = forName;
  _.$_$.v = isSupported;
  _.$_$.w = get_name;
  _.$_$.x = BytePacketBuilder;
  _.$_$.y = build;
  _.$_$.z = canRead;
  _.$_$.a1 = discard_0;
  _.$_$.b1 = readAvailable_0;
  _.$_$.c1 = readText_0;
  _.$_$.d1 = get_remaining;
  _.$_$.e1 = takeWhile;
  _.$_$.f1 = toByteArray_0;
  _.$_$.g1 = writeFully_0;
  _.$_$.h1 = writePacket_0;
  _.$_$.i1 = writeText;
  _.$_$.j1 = get_ByteArrayPool;
  _.$_$.k1 = DefaultPool;
  _.$_$.l1 = NoPoolImpl;
  _.$_$.m1 = ByteChannel;
  _.$_$.n1 = ByteReadChannel;
  _.$_$.o1 = ByteReadChannel_1;
  _.$_$.p1 = WriterScope;
  _.$_$.q1 = get_availableForRead;
  _.$_$.r1 = cancel_0;
  _.$_$.s1 = close_0;
  _.$_$.t1 = counted;
  _.$_$.u1 = invokeOnCompletion;
  _.$_$.v1 = get_isCompleted;
  _.$_$.w1 = readText;
  _.$_$.x1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io.js.map
