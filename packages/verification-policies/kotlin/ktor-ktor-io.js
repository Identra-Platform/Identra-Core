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
  var Companion_instance = kotlin_kotlin.$_$.g6;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.v3;
  var protoOf = kotlin_kotlin.$_$.be;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  var toString = kotlin_kotlin.$_$.pk;
  var hashCode = kotlin_kotlin.$_$.wc;
  var equals = kotlin_kotlin.$_$.rc;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var createFailure = kotlin_kotlin.$_$.bk;
  var Result = kotlin_kotlin.$_$.ij;
  var initMetadataForInterface = kotlin_kotlin.$_$.bd;
  var toString_0 = kotlin_kotlin.$_$.ai;
  var newThrowable = kotlin_kotlin.$_$.ud;
  var stackTraceToString = kotlin_kotlin.$_$.mk;
  var VOID = kotlin_kotlin.$_$.j;
  var isInterface = kotlin_kotlin.$_$.md;
  var CoroutineImpl = kotlin_kotlin.$_$.bc;
  var toLong = kotlin_kotlin.$_$.de;
  var numberToLong = kotlin_kotlin.$_$.zd;
  var intercepted = kotlin_kotlin.$_$.ob;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.kk;
  var returnIfSuspended = kotlin_kotlin.$_$.s;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.lb;
  var Long = kotlin_kotlin.$_$.cj;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.zc;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var IllegalStateException = kotlin_kotlin.$_$.bj;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.m2;
  var captureStack = kotlin_kotlin.$_$.jc;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var decodeToString = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.d;
  var replace = kotlin_kotlin.$_$.zg;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var readString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.n;
  var closeFinally = kotlin_kotlin.$_$.zj;
  var toString_1 = kotlin_kotlin.$_$.fe;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var readByteString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.q5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var startCoroutineCancellable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var Continuation = kotlin_kotlin.$_$.vb;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.ad;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var initMetadataForLambda = kotlin_kotlin.$_$.cd;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var CancellationException = kotlin_kotlin.$_$.kb;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var readString_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.l;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var listOf = kotlin_kotlin.$_$.r9;
  var IOException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.e;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q1;
  var charSequenceLength = kotlin_kotlin.$_$.nc;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.i;
  var encodeToByteArray = kotlin_kotlin.$_$.tf;
  var readString_1 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.m;
  var writeString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.o;
  var AutoCloseable = kotlin_kotlin.$_$.qi;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var replace_0 = kotlin_kotlin.$_$.ah;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var getStringHashCode = kotlin_kotlin.$_$.vc;
  var IOException_init_$Init$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.b;
  var readByteArray_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var charSequenceSubSequence = kotlin_kotlin.$_$.oc;
  var isCharSequence = kotlin_kotlin.$_$.id;
  var trim = kotlin_kotlin.$_$.ki;
  var toByte = kotlin_kotlin.$_$.ce;
  var decodeToString_0 = kotlin_kotlin.$_$.rf;
  var setOf = kotlin_kotlin.$_$.ja;
  var charSequenceGet = kotlin_kotlin.$_$.mc;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.t3;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject(Empty, 'Empty');
  initMetadataForClass(Closed, 'Closed');
  function resume() {
    return this.r1m().ia(Companion_getInstance().o1m_1);
  }
  function resume_0(throwable) {
    var tmp = this.r1m();
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
    return tmp.ia(tmp1_elvis_lhs == null ? Companion_getInstance().o1m_1 : tmp1_elvis_lhs.up_1);
  }
  initMetadataForInterface(Task, 'Task');
  initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
  initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
  initMetadataForCoroutine($awaitContentCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($flushCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($flushAndCloseCOROUTINE$2, CoroutineImpl);
  function awaitContent$default(min, $completion, $super) {
    min = min === VOID ? 1 : min;
    return $super === VOID ? this.d1p(min, $completion) : $super.d1p.call(this, min, $completion);
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
    this.kv();
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
    this.n1m_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.o1m_1 = _Result___init__impl__xyqfz8(Unit_instance);
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
    this.p1m_1 = cause;
  }
  protoOf(Closed).toString = function () {
    return 'Closed(cause=' + toString(this.p1m_1) + ')';
  };
  protoOf(Closed).hashCode = function () {
    return this.p1m_1 == null ? 0 : hashCode(this.p1m_1);
  };
  protoOf(Closed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    var tmp0_other_with_cast = other instanceof Closed ? other : THROW_CCE();
    if (!equals(this.p1m_1, tmp0_other_with_cast.p1m_1))
      return false;
    return true;
  };
  function Task() {
  }
  function Read(continuation) {
    this.v1m_1 = continuation;
    this.w1m_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.v1m_1), 16));
      stackTraceToString(this_0);
      tmp.w1m_1 = this_0;
    }
  }
  protoOf(Read).r1m = function () {
    return this.v1m_1;
  };
  protoOf(Read).q1m = function () {
    return this.w1m_1;
  };
  protoOf(Read).s1m = function () {
    return 'read';
  };
  function Write(continuation) {
    this.x1m_1 = continuation;
    this.y1m_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.x1m_1), 16));
      stackTraceToString(this_0);
      tmp.y1m_1 = this_0;
    }
  }
  protoOf(Write).r1m = function () {
    return this.x1m_1;
  };
  protoOf(Write).q1m = function () {
    return this.y1m_1;
  };
  protoOf(Write).s1m = function () {
    return 'write';
  };
  function moveFlushToReadBuffer($this) {
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    $this.c1n_1;
    $this.a1n_1.s1k($this.e1n_1);
    $this.b1n_1 = 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = $this.d1n_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Write) {
      tmp = $this.d1n_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.t1m();
    }
  }
  function closeSlot($this, cause) {
    var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().n1m_1;
    var continuation = $this.d1n_1.atomicfu$getAndSet(closeContinuation);
    if (isInterface(continuation, Task)) {
      continuation.u1m(cause);
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
    this.p1n_1 = _this__u8e3s4;
    this.q1n_1 = min;
  }
  protoOf($awaitContentCOROUTINE$0).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            rethrowCloseCauseIfNeeded_1(this.p1n_1);
            if (this.p1n_1.e1n_1.s().g1(toLong(this.q1n_1)) >= 0)
              return true;
            var tmp_0 = this;
            tmp_0.r1n_1 = this.p1n_1;
            this.s1n_1 = this.r1n_1;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!(numberToLong(this.p1n_1.b1n_1).b3(this.p1n_1.e1n_1.s()).g1(toLong(this.q1n_1)) < 0 && this.p1n_1.g1n_1.kotlinx$atomicfu$value == null)) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.n9_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.nw();
            var tmp0 = this.s1n_1;
            var tmp1 = new Read(cancellable);
            l$ret$1: do {
              var previous = tmp0.d1n_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.d1n_1.atomicfu$compareAndSet(previous, tmp1)) {
                  tmp1.t1m();
                  break l$ret$1;
                }
              }
              if (previous instanceof Read) {
                previous.u1m(new ConcurrentIOException(tmp1.s1m(), previous.q1m()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.t1m();
                } else {
                  if (previous instanceof Closed) {
                    tmp1.u1m(previous.p1m_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(numberToLong(this.p1n_1.b1n_1).b3(this.p1n_1.e1n_1.s()).g1(toLong(this.q1n_1)) < 0 && this.p1n_1.g1n_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.d1n_1.kotlinx$atomicfu$value;
                var tmp_1;
                if (current instanceof Read) {
                  tmp_1 = tmp0.d1n_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  current.t1m();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.ow(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n9_1 = 1;
            continue $sm;
          case 3:
            if (this.p1n_1.e1n_1.s().g1(new Long(1048576, 0)) < 0) {
              moveFlushToReadBuffer(this.p1n_1);
            }

            return this.p1n_1.e1n_1.s().g1(toLong(this.q1n_1)) >= 0;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $flushCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b1o_1 = _this__u8e3s4;
  }
  protoOf($flushCOROUTINE$1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            rethrowCloseCauseIfNeeded_1(this.b1o_1);
            this.b1o_1.e1o();
            if (this.b1o_1.b1n_1 < 1048576)
              return Unit_instance;
            var tmp_0 = this;
            tmp_0.c1o_1 = this.b1o_1;
            this.d1o_1 = this.c1o_1;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!(this.b1o_1.b1n_1 >= 1048576 && this.b1o_1.g1n_1.kotlinx$atomicfu$value == null)) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.n9_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.nw();
            var tmp0 = this.d1o_1;
            var tmp1 = new Write(cancellable);
            l$ret$1: do {
              var previous = tmp0.d1n_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.d1n_1.atomicfu$compareAndSet(previous, tmp1)) {
                  tmp1.t1m();
                  break l$ret$1;
                }
              }
              if (previous instanceof Write) {
                previous.u1m(new ConcurrentIOException(tmp1.s1m(), previous.q1m()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.t1m();
                } else {
                  if (previous instanceof Closed) {
                    tmp1.u1m(previous.p1m_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(this.b1o_1.b1n_1 >= 1048576 && this.b1o_1.g1n_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.d1n_1.kotlinx$atomicfu$value;
                var tmp_1;
                if (current instanceof Write) {
                  tmp_1 = tmp0.d1n_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  current.t1m();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.ow(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n9_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $flushAndCloseCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1o_1 = _this__u8e3s4;
  }
  protoOf($flushAndCloseCOROUTINE$2).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            var tmp_0 = this;
            tmp_0.o1o_1 = this.n1o_1;
            this.p1o_1 = this.o1o_1;
            this.o9_1 = 2;
            var tmp_1 = this;
            tmp_1.r1o_1 = Companion_instance;
            var tmp_2 = this;
            tmp_2.s1o_1 = this.p1o_1;
            this.t1o_1 = this.s1o_1;
            this.n9_1 = 1;
            suspendResult = this.t1o_1.u1o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_3 = this;
            this.r1o_1;
            tmp_3.q1o_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.o9_1 = 4;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.o9_1 = 4;
            var tmp_4 = this.q9_1;
            if (tmp_4 instanceof Error) {
              var e = this.q9_1;
              var tmp_5 = this;
              tmp_5.q1o_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 3;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            this.o9_1 = 4;
            if (!this.n1o_1.g1n_1.atomicfu$compareAndSet(null, get_CLOSED()))
              return Unit_instance;
            closeSlot(this.n1o_1, null);
            return Unit_instance;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 4) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  function ByteChannel(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.z1m_1 = autoFlush;
    this.a1n_1 = new Buffer();
    this.b1n_1 = 0;
    this.c1n_1 = new Object();
    this.d1n_1 = atomic$ref$1(Empty_instance);
    this.e1n_1 = new Buffer();
    this.f1n_1 = new Buffer();
    this.g1n_1 = atomic$ref$1(null);
  }
  protoOf(ByteChannel).v1o = function () {
    var tmp0_safe_receiver = this.g1n_1.kotlinx$atomicfu$value;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.x1o(ClosedReadChannelException$_init_$ref_ix0089());
    }
    if (this.e1n_1.p1j()) {
      moveFlushToReadBuffer(this);
    }
    return this.e1n_1;
  };
  protoOf(ByteChannel).y1o = function () {
    if (this.z1o()) {
      var tmp0_safe_receiver = this.g1n_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = tmp0_safe_receiver.x1o(ClosedWriteChannelException$_init_$ref_ef15ty());
      }
      if (tmp == null)
        throw new ClosedWriteChannelException();
    }
    return this.f1n_1;
  };
  protoOf(ByteChannel).a1p = function () {
    var tmp0_safe_receiver = this.g1n_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b1p();
  };
  protoOf(ByteChannel).z1o = function () {
    return !(this.g1n_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannel).c1p = function () {
    return !(this.a1p() == null) || (this.z1o() && this.b1n_1 === 0 && this.e1n_1.p1j());
  };
  protoOf(ByteChannel).d1p = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$0(this, min, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(ByteChannel).u1o = function ($completion) {
    var tmp = new $flushCOROUTINE$1(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(ByteChannel).e1o = function () {
    if (this.f1n_1.p1j())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.c1n_1;
    var count = this.f1n_1.s().l1();
    this.a1n_1.h1l(this.f1n_1);
    this.b1n_1 = this.b1n_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.d1n_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.d1n_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.t1m();
    }
  };
  protoOf(ByteChannel).y4 = function () {
    this.e1o();
    if (!this.g1n_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  };
  protoOf(ByteChannel).f1p = function ($completion) {
    var tmp = new $flushAndCloseCOROUTINE$2(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(ByteChannel).g1p = function (cause) {
    if (!(this.g1n_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.g1n_1.atomicfu$compareAndSet(null, closedToken);
    var wrappedCause = closedToken.b1p();
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
    this_0.y1k(content, offset, offset + length | 0);
    var source = this_0;
    return ByteReadChannel_0(source);
  }
  function ByteReadChannel_0(source) {
    return new SourceByteReadChannel(source);
  }
  function ByteReadChannel$Companion$Empty$1() {
    this.h1p_1 = null;
    this.i1p_1 = new Buffer();
  }
  protoOf(ByteReadChannel$Companion$Empty$1).a1p = function () {
    return this.h1p_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).c1p = function () {
    return true;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).v1o = function () {
    return this.i1p_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).d1p = function (min, $completion) {
    return false;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).g1p = function (cause) {
  };
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.j1p_1 = new ByteReadChannel$Companion$Empty$1();
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
    _this__u8e3s4.g1p(IOException_init_$Create$('Channel was cancelled'));
  }
  function readRemaining(_this__u8e3s4, $completion) {
    var tmp = new $readRemainingCOROUTINE$3(_this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function get_availableForRead(_this__u8e3s4) {
    return _this__u8e3s4.v1o().o1j().s().l1();
  }
  function readPacket(_this__u8e3s4, packet, $completion) {
    var tmp = new $readPacketCOROUTINE$4(_this__u8e3s4, packet, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function discard(_this__u8e3s4, max, $completion) {
    max = max === VOID ? new Long(-1, 2147483647) : max;
    var tmp = new $discardCOROUTINE$5(_this__u8e3s4, max, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var tmp = new $readAvailableCOROUTINE$7(_this__u8e3s4, buffer, offset, length, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$9(_this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function copyTo(_this__u8e3s4, channel, limit, $completion) {
    var tmp = new $copyToCOROUTINE$10(_this__u8e3s4, channel, limit, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function copyTo_0(_this__u8e3s4, channel, $completion) {
    var tmp = new $copyToCOROUTINE$11(_this__u8e3s4, channel, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.a1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function readBuffer(_this__u8e3s4, $completion) {
    var tmp = new $readBufferCOROUTINE$12(_this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function readUTF8LineTo(_this__u8e3s4, out, max, lineEnding, $completion) {
    max = max === VOID ? 2147483647 : max;
    lineEnding = lineEnding === VOID ? Companion_getInstance_1().c1t_1 : lineEnding;
    var tmp = new $readUTF8LineToCOROUTINE$13(_this__u8e3s4, out, max, lineEnding, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.a1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.a1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function readRemaining_0(_this__u8e3s4, max, $completion) {
    var tmp = new $readRemainingCOROUTINE$14(_this__u8e3s4, max, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function skipIfFound(_this__u8e3s4, byteString, $completion) {
    var tmp = new $skipIfFoundCOROUTINE$15(_this__u8e3s4, byteString, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
    var tmp = new $readUntilCOROUTINE$16(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function peek(_this__u8e3s4, count, $completion) {
    var tmp = new $peekCOROUTINE$17(_this__u8e3s4, count, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
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
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
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
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function readUntil$resetPartialMatch(matchIndex, $matchString, partialMatchTable, byte) {
    while (matchIndex._v > 0 && !(byte === $matchString.u(matchIndex._v))) {
      matchIndex._v = partialMatchTable[matchIndex._v - 1 | 0];
    }
  }
  function $readRemainingCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s1p_1 = _this__u8e3s4;
  }
  protoOf($readRemainingCOROUTINE$3).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.t1p_1 = BytePacketBuilder();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.s1p_1.c1p()) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.t1p_1.h1l(this.s1p_1.v1o());
            this.n9_1 = 2;
            suspendResult = this.s1p_1.e1p(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n9_1 = 1;
            continue $sm;
          case 3:
            rethrowCloseCauseIfNeeded(this.s1p_1);
            return this.t1p_1.o1j();
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $readPacketCOROUTINE$4(_this__u8e3s4, packet, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c1q_1 = _this__u8e3s4;
    this.d1q_1 = packet;
  }
  protoOf($readPacketCOROUTINE$4).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            this.e1q_1 = new Buffer();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!(this.e1q_1.s().g1(toLong(this.d1q_1)) < 0)) {
              this.n9_1 = 5;
              continue $sm;
            }

            if (this.c1q_1.v1o().p1j()) {
              this.n9_1 = 2;
              suspendResult = this.c1q_1.e1p(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

          case 2:
            this.n9_1 = 3;
            continue $sm;
          case 3:
            if (this.c1q_1.c1p()) {
              this.n9_1 = 5;
              continue $sm;
            } else {
              this.n9_1 = 4;
              continue $sm;
            }

          case 4:
            if (get_remaining(this.c1q_1.v1o()).g1(numberToLong(this.d1q_1).c3(this.e1q_1.s())) > 0) {
              this.c1q_1.v1o().r1k(this.e1q_1, numberToLong(this.d1q_1).c3(this.e1q_1.s()));
            } else {
              this.c1q_1.v1o().s1k(this.e1q_1);
            }

            this.n9_1 = 1;
            continue $sm;
          case 5:
            if (this.e1q_1.s().g1(toLong(this.d1q_1)) < 0) {
              throw EOFException_init_$Create$('Not enough data available, required ' + this.d1q_1 + ' bytes but only ' + this.e1q_1.s().toString() + ' available');
            }

            return this.e1q_1;
          case 6:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 6) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $discardCOROUTINE$5(_this__u8e3s4, max, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1q_1 = _this__u8e3s4;
    this.o1q_1 = max;
  }
  protoOf($discardCOROUTINE$5).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.p1q_1 = this.o1q_1;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!(this.p1q_1.g1(new Long(0, 0)) > 0 && !this.n1q_1.c1p())) {
              this.n9_1 = 4;
              continue $sm;
            }

            if (get_availableForRead(this.n1q_1) === 0) {
              this.n9_1 = 2;
              suspendResult = this.n1q_1.e1p(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

          case 2:
            this.n9_1 = 3;
            continue $sm;
          case 3:
            var tmp0 = this.p1q_1;
            var b = get_remaining(this.n1q_1.v1o());
            var count = tmp0.g1(b) <= 0 ? tmp0 : b;
            discard_0(this.n1q_1.v1o(), count);
            this.p1q_1 = this.p1q_1.c3(count);
            this.n9_1 = 1;
            continue $sm;
          case 4:
            return this.o1q_1.c3(this.p1q_1);
          case 5:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 5) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $readAvailableCOROUTINE$7(_this__u8e3s4, buffer, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y1q_1 = _this__u8e3s4;
    this.z1q_1 = buffer;
    this.a1r_1 = offset;
    this.b1r_1 = length;
  }
  protoOf($readAvailableCOROUTINE$7).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            if (this.y1q_1.c1p())
              return -1;
            if (this.y1q_1.v1o().p1j()) {
              this.n9_1 = 1;
              suspendResult = this.y1q_1.e1p(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.n9_1 = 2;
            continue $sm;
          case 2:
            if (this.y1q_1.c1p())
              return -1;
            return readAvailable_0(this.y1q_1.v1o(), this.z1q_1, this.a1r_1, this.b1r_1);
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
  function $toByteArrayCOROUTINE$9(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k1r_1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$9).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = readBuffer(this.k1r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes(ARGUMENT);
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $copyToCOROUTINE$10(_this__u8e3s4, channel, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1r_1 = _this__u8e3s4;
    this.u1r_1 = channel;
    this.v1r_1 = limit;
  }
  protoOf($copyToCOROUTINE$10).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 12;
            this.w1r_1 = this.v1r_1;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 8;
            this.o9_1 = 7;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            if (!(!this.t1r_1.c1p() && this.w1r_1.g1(new Long(0, 0)) > 0)) {
              this.n9_1 = 6;
              continue $sm;
            }

            if (this.t1r_1.v1o().p1j()) {
              this.n9_1 = 3;
              suspendResult = this.t1r_1.e1p(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 4;
              continue $sm;
            }

          case 3:
            this.n9_1 = 4;
            continue $sm;
          case 4:
            var tmp_0 = this;
            var tmp0 = this.w1r_1;
            var b = get_remaining(this.t1r_1.v1o());
            tmp_0.y1r_1 = tmp0.g1(b) <= 0 ? tmp0 : b;
            this.t1r_1.v1o().r1k(this.u1r_1.y1o(), this.y1r_1);
            this.w1r_1 = this.w1r_1.c3(this.y1r_1);
            this.n9_1 = 5;
            suspendResult = this.u1r_1.u1o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.n9_1 = 2;
            continue $sm;
          case 6:
            this.x1r_1 = Unit_instance;
            this.o9_1 = 12;
            this.n9_1 = 10;
            continue $sm;
          case 7:
            this.o9_1 = 8;
            var tmp_1 = this.q9_1;
            if (tmp_1 instanceof Error) {
              this.z1r_1 = this.q9_1;
              var tmp_2 = this;
              this.t1r_1.g1p(this.z1r_1);
              close_0(this.u1r_1, this.z1r_1);
              throw this.z1r_1;
            } else {
              throw this.q9_1;
            }

          case 8:
            this.o9_1 = 12;
            this.a1s_1 = this.q9_1;
            this.n9_1 = 9;
            suspendResult = this.u1r_1.u1o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            throw this.a1s_1;
          case 10:
            this.o9_1 = 12;
            this.n9_1 = 11;
            suspendResult = this.u1r_1.u1o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            return this.v1r_1.c3(this.w1r_1);
          case 12:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 12) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $copyToCOROUTINE$11(_this__u8e3s4, channel, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j1s_1 = _this__u8e3s4;
    this.k1s_1 = channel;
  }
  protoOf($copyToCOROUTINE$11).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 11;
            this.l1s_1 = new Long(0, 0);
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 7;
            this.o9_1 = 6;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            if (!!this.j1s_1.c1p()) {
              this.n9_1 = 5;
              continue $sm;
            }

            this.l1s_1 = this.l1s_1.b3(this.j1s_1.v1o().s1k(this.k1s_1.y1o()));
            this.n9_1 = 3;
            suspendResult = this.k1s_1.u1o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.n9_1 = 4;
            suspendResult = this.j1s_1.e1p(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.n9_1 = 2;
            continue $sm;
          case 5:
            this.m1s_1 = Unit_instance;
            this.o9_1 = 11;
            this.n9_1 = 9;
            continue $sm;
          case 6:
            this.o9_1 = 7;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof Error) {
              this.n1s_1 = this.q9_1;
              var tmp_1 = this;
              this.j1s_1.g1p(this.n1s_1);
              close_0(this.k1s_1, this.n1s_1);
              throw this.n1s_1;
            } else {
              throw this.q9_1;
            }

          case 7:
            this.o9_1 = 11;
            this.o1s_1 = this.q9_1;
            this.n9_1 = 8;
            suspendResult = this.k1s_1.u1o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            throw this.o1s_1;
          case 9:
            this.o9_1 = 11;
            this.n9_1 = 10;
            suspendResult = this.k1s_1.u1o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            return this.l1s_1;
          case 11:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 11) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $readBufferCOROUTINE$12(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x1s_1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$12).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.y1s_1 = new Buffer();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.x1s_1.c1p()) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.y1s_1.h1l(this.x1s_1.v1o());
            this.n9_1 = 2;
            suspendResult = this.x1s_1.e1p(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n9_1 = 1;
            continue $sm;
          case 3:
            var tmp0_safe_receiver = this.x1s_1.a1p();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return this.y1s_1;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $readUTF8LineToCOROUTINE$13(_this__u8e3s4, out, max, lineEnding, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m1t_1 = _this__u8e3s4;
    this.n1t_1 = out;
    this.o1t_1 = max;
    this.p1t_1 = lineEnding;
  }
  protoOf($readUTF8LineToCOROUTINE$13).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 21;
            if (this.m1t_1.v1o().p1j()) {
              this.n9_1 = 1;
              suspendResult = this.m1t_1.e1p(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.n9_1 = 2;
            continue $sm;
          case 2:
            if (this.m1t_1.c1p())
              return false;
            var tmp_0 = this;
            tmp_0.q1t_1 = new Buffer();
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.s1t_1 = this.q1t_1;
            this.t1t_1 = null;
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.n9_1 = 5;
            continue $sm;
          case 5:
            this.n9_1 = 6;
            continue $sm;
          case 6:
            this.o9_1 = 18;
            this.o9_1 = 17;
            var tmp_1 = this;
            tmp_1.v1t_1 = this.s1t_1;
            this.w1t_1 = this.v1t_1;
            this.n9_1 = 7;
            continue $sm;
          case 7:
            if (!!this.m1t_1.c1p()) {
              this.n9_1 = 14;
              continue $sm;
            }

            this.n9_1 = 8;
            continue $sm;
          case 8:
            if (!!this.m1t_1.v1o().p1j()) {
              this.n9_1 = 12;
              continue $sm;
            }

            this.x1t_1 = this.m1t_1.v1o().s1j();
            if (this.x1t_1 === 13) {
              if (this.m1t_1.v1o().p1j()) {
                this.n9_1 = 10;
                suspendResult = this.m1t_1.e1p(VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.n9_1 = 11;
                continue $sm;
              }
            } else {
              if (this.x1t_1 === 10) {
                readUTF8LineTo$checkLineEndingAllowed(this.p1t_1, Companion_getInstance_1().a1t_1);
                this.n1t_1.o(readString(this.w1t_1));
                this.u1t_1 = true;
                this.o9_1 = 21;
                this.n9_1 = 15;
                continue $sm;
              } else {
                this.w1t_1.i1l(this.x1t_1);
                this.n9_1 = 9;
                continue $sm;
              }
            }

          case 9:
            this.n9_1 = 8;
            continue $sm;
          case 10:
            this.n9_1 = 11;
            continue $sm;
          case 11:
            if (this.m1t_1.v1o().o1j().k1k(new Long(0, 0)) === 10) {
              readUTF8LineTo$checkLineEndingAllowed(this.p1t_1, Companion_getInstance_1().b1t_1);
              discard_0(this.m1t_1.v1o(), new Long(1, 0));
            } else {
              readUTF8LineTo$checkLineEndingAllowed(this.p1t_1, Companion_getInstance_1().z1s_1);
            }

            this.n1t_1.o(readString(this.w1t_1));
            this.u1t_1 = true;
            this.o9_1 = 21;
            this.n9_1 = 15;
            continue $sm;
          case 12:
            if (this.w1t_1.s().g1(toLong(this.o1t_1)) >= 0) {
              throw new TooLongLineException('Line exceeds limit of ' + this.o1t_1 + ' characters');
            }

            this.n9_1 = 13;
            suspendResult = this.m1t_1.e1p(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            this.n9_1 = 7;
            continue $sm;
          case 14:
            var tmp_2 = this;
            var this_0 = this.w1t_1.s().g1(new Long(0, 0)) > 0;
            if (this_0) {
              this.n1t_1.o(readString(this.w1t_1));
            }

            tmp_2.u1t_1 = this_0;
            this.o9_1 = 21;
            this.n9_1 = 15;
            var tmp_3 = this;
            continue $sm;
          case 15:
            var tmp_4 = this.u1t_1;
            this.o9_1 = 21;
            closeFinally(this.s1t_1, this.t1t_1);
            return tmp_4;
          case 16:
            this.o9_1 = 21;
            var tmp_5 = this;
            closeFinally(this.s1t_1, this.t1t_1);
            tmp_5.r1t_1 = Unit_instance;
            this.n9_1 = 20;
            continue $sm;
          case 17:
            this.o9_1 = 18;
            var tmp_6 = this.q9_1;
            if (tmp_6 instanceof Error) {
              var e = this.q9_1;
              var tmp_7 = this;
              this.t1t_1 = e;
              throw e;
            } else {
              throw this.q9_1;
            }

          case 18:
            this.o9_1 = 21;
            var t = this.q9_1;
            closeFinally(this.s1t_1, this.t1t_1);
            throw t;
          case 19:
            this.o9_1 = 21;
            closeFinally(this.s1t_1, this.t1t_1);
            if (false) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.n9_1 = 20;
            continue $sm;
          case 20:
            return Unit_instance;
          case 21:
            throw this.q9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 21) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  function $readRemainingCOROUTINE$14(_this__u8e3s4, max, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1u_1 = _this__u8e3s4;
    this.h1u_1 = max;
  }
  protoOf($readRemainingCOROUTINE$14).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.i1u_1 = BytePacketBuilder();
            this.j1u_1 = this.h1u_1;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!(!this.g1u_1.c1p() && this.j1u_1.g1(new Long(0, 0)) > 0)) {
              this.n9_1 = 3;
              continue $sm;
            }

            if (this.j1u_1.g1(get_remaining(this.g1u_1.v1o())) >= 0) {
              this.j1u_1 = this.j1u_1.c3(get_remaining(this.g1u_1.v1o()));
              this.g1u_1.v1o().s1k(this.i1u_1);
            } else {
              this.g1u_1.v1o().r1k(this.i1u_1, this.j1u_1);
              this.j1u_1 = new Long(0, 0);
            }

            this.n9_1 = 2;
            suspendResult = this.g1u_1.e1p(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n9_1 = 1;
            continue $sm;
          case 3:
            return this.i1u_1.o1j();
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $skipIfFoundCOROUTINE$15(_this__u8e3s4, byteString, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s1u_1 = _this__u8e3s4;
    this.t1u_1 = byteString;
  }
  protoOf($skipIfFoundCOROUTINE$15).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n9_1 = 1;
            suspendResult = peek(this.s1u_1, this.t1u_1.s(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u1u_1 = suspendResult;
            if (equals(this.u1u_1, this.t1u_1)) {
              this.n9_1 = 3;
              suspendResult = discard(this.s1u_1, toLong(this.t1u_1.s()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
          case 3:
            return true;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $readUntilCOROUTINE$16(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d1v_1 = _this__u8e3s4;
    this.e1v_1 = matchString;
    this.f1v_1 = writeChannel;
    this.g1v_1 = limit;
    this.h1v_1 = ignoreMissing;
  }
  protoOf($readUntilCOROUTINE$16).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 11;
            if (!(this.e1v_1.s() > 0)) {
              var message = 'Empty match string not permitted for readUntil';
              throw IllegalStateException_init_$Create$(toString_1(message));
            }

            this.i1v_1 = buildPartialMatchTable(this.e1v_1);
            this.j1v_1 = {_v: 0};
            this.k1v_1 = new Int8Array(this.e1v_1.s());
            this.l1v_1 = {_v: new Long(0, 0)};
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.d1v_1.c1p()) {
              this.n9_1 = 7;
              continue $sm;
            }

            this.n9_1 = 2;
            suspendResult = readByte(this.d1v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m1v_1 = suspendResult;
            if (this.j1v_1._v > 0 && !(this.m1v_1 === this.e1v_1.u(this.j1v_1._v))) {
              this.n9_1 = 3;
              suspendResult = readUntil$appendPartialMatch(this.f1v_1, this.k1v_1, this.j1v_1, this.l1v_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 4;
              continue $sm;
            }

          case 3:
            readUntil$resetPartialMatch(this.j1v_1, this.e1v_1, this.i1v_1, this.m1v_1);
            this.n9_1 = 4;
            continue $sm;
          case 4:
            if (this.m1v_1 === this.e1v_1.u(this.j1v_1._v)) {
              var tmp_0 = this;
              this.k1v_1[this.j1v_1._v] = this.m1v_1;
              this.j1v_1._v = this.j1v_1._v + 1 | 0;
              if (this.j1v_1._v === this.e1v_1.s()) {
                return this.l1v_1._v;
              }
              tmp_0.n1v_1 = Unit_instance;
              this.n9_1 = 6;
              continue $sm;
            } else {
              this.n9_1 = 5;
              suspendResult = writeByte(this.f1v_1, this.m1v_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            var tmp_1 = this;
            var _unary__edvuaz = this.l1v_1._v;
            this.l1v_1._v = _unary__edvuaz.g3();
            tmp_1.n1v_1 = _unary__edvuaz;
            this.n9_1 = 6;
            continue $sm;
          case 6:
            if (this.l1v_1._v.g1(this.g1v_1) > 0) {
              throw IOException_init_$Create$('Limit of ' + this.g1v_1.toString() + ' bytes exceeded while scanning for "' + decodeToString(this.e1v_1) + '"');
            }

            this.n9_1 = 1;
            continue $sm;
          case 7:
            if (this.h1v_1) {
              this.n9_1 = 9;
              suspendResult = readUntil$appendPartialMatch(this.f1v_1, this.k1v_1, this.j1v_1, this.l1v_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 8;
              continue $sm;
            }

          case 8:
            throw IOException_init_$Create$('Expected "' + toSingleLineString(this.e1v_1) + '" but encountered end of input');
          case 9:
            this.n9_1 = 10;
            suspendResult = this.f1v_1.u1o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            return this.l1v_1._v;
          case 11:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 11) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $peekCOROUTINE$17(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w1v_1 = _this__u8e3s4;
    this.x1v_1 = count;
  }
  protoOf($peekCOROUTINE$17).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            if (this.w1v_1.c1p())
              return null;
            this.n9_1 = 1;
            suspendResult = this.w1v_1.d1p(this.x1v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              return null;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 2:
            return readByteString(this.w1v_1.v1o().t1k(), this.x1v_1);
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
  function $readByteCOROUTINE$18(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1w_1 = _this__u8e3s4;
  }
  protoOf($readByteCOROUTINE$18).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            if (this.g1w_1.v1o().p1j()) {
              this.n9_1 = 1;
              suspendResult = this.g1w_1.e1p(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.n9_1 = 2;
            continue $sm;
          case 2:
            if (this.g1w_1.v1o().p1j()) {
              throw EOFException_init_$Create$('Not enough data available');
            }

            return this.g1w_1.v1o().s1j();
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
  function $readUntil$appendPartialMatchCOROUTINE$19($writeChannel, matchBuffer, matchIndex, rc, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p1w_1 = $writeChannel;
    this.q1w_1 = matchBuffer;
    this.r1w_1 = matchIndex;
    this.s1w_1 = rc;
  }
  protoOf($readUntil$appendPartialMatchCOROUTINE$19).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = writeFully(this.p1w_1, this.q1w_1, 0, this.r1w_1._v, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0 = this.s1w_1._v;
            var other = this.r1w_1._v;
            this.s1w_1._v = tmp0.b3(toLong(other));
            this.r1w_1._v = 0;
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function flushIfNeeded(_this__u8e3s4, $completion) {
    var tmp = new $flushIfNeededCOROUTINE$20(_this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function $flushIfNeededCOROUTINE$20(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b1x_1 = _this__u8e3s4;
  }
  protoOf($flushIfNeededCOROUTINE$20).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            rethrowCloseCauseIfNeeded_0(this.b1x_1);
            var tmp_0;
            var tmp_1 = this.b1x_1;
            var tmp0_safe_receiver = tmp_1 instanceof ByteChannel ? tmp_1 : null;
            if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1m_1) === true) {
              tmp_0 = true;
            } else {
              tmp_0 = get_size(this.b1x_1.y1o()) >= 1048576;
            }

            if (tmp_0) {
              this.n9_1 = 1;
              suspendResult = this.b1x_1.u1o(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
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
  function get_NO_CALLBACK() {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return NO_CALLBACK;
  }
  var NO_CALLBACK;
  function WriterJob(channel, job) {
    this.c1x_1 = channel;
    this.d1x_1 = job;
  }
  protoOf(WriterJob).yv = function () {
    return this.d1x_1;
  };
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
  }
  function WriterScope(channel, coroutineContext) {
    this.e1x_1 = channel;
    this.f1x_1 = coroutineContext;
  }
  protoOf(WriterScope).ps = function () {
    return this.f1x_1;
  };
  function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? value.length : endIndex;
    _this__u8e3s4.y1o().y1k(value, startIndex, endIndex);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function writePacket(_this__u8e3s4, source, $completion) {
    var tmp = new $writePacketCOROUTINE$21(_this__u8e3s4, source, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function get_isCompleted(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return _this__u8e3s4.yv().kt();
  }
  function close_0(_this__u8e3s4, cause) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    if (cause == null) {
      fireAndForget(ByteWriteChannel$flushAndClose$ref_0(_this__u8e3s4));
    } else {
      _this__u8e3s4.g1p(cause);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, block) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    var tmp = _this__u8e3s4.yv();
    tmp.rt(invokeOnCompletion$lambda(block));
  }
  function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    // Inline function 'kotlin.apply' call
    var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel, null));
    this_0.rt(writer$lambda(channel));
    var job = this_0;
    return new WriterJob(channel, job);
  }
  function fireAndForget(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
  }
  function writeByte(_this__u8e3s4, value, $completion) {
    _this__u8e3s4.y1o().i1l(value);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function NO_CALLBACK$1() {
    this.q1x_1 = EmptyCoroutineContext_getInstance();
  }
  protoOf(NO_CALLBACK$1).t9 = function () {
    return this.q1x_1;
  };
  protoOf(NO_CALLBACK$1).ea = function (result) {
    return Unit_instance;
  };
  protoOf(NO_CALLBACK$1).ia = function (result) {
    return this.ea(result);
  };
  function ByteWriteChannel$flushAndClose$ref($boundThis) {
    this.r1x_1 = $boundThis;
  }
  protoOf(ByteWriteChannel$flushAndClose$ref).s1x = function ($completion) {
    return this.r1x_1.f1p($completion);
  };
  protoOf(ByteWriteChannel$flushAndClose$ref).ac = function ($completion) {
    return this.s1x($completion);
  };
  function ByteWriteChannel$flushAndClose$ref_0($boundThis) {
    var i = new ByteWriteChannel$flushAndClose$ref($boundThis);
    var l = function ($completion) {
      return i.s1x($completion);
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
    this.b1y_1 = $block;
    this.c1y_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(writer$slambda).w1y = function ($this$launch, $completion) {
    var tmp = this.a1j($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(writer$slambda).va = function (p1, $completion) {
    return this.w1y((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(writer$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 14;
            this.e1y_1 = Job(get_job(this.d1y_1.ps()));
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 4;
            this.o9_1 = 3;
            this.n9_1 = 2;
            suspendResult = this.b1y_1(new WriterScope(this.c1y_1, this.d1y_1.ps().xj(this.e1y_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.e1y_1.m10();
            var tmp_0 = this;
            var tmp_1;
            if (get_job(this.d1y_1.ps()).lt()) {
              this.c1y_1.g1p(get_job(this.d1y_1.ps()).ot());
              tmp_1 = Unit_instance;
            }

            tmp_0.f1y_1 = tmp_1;
            this.o9_1 = 14;
            this.n9_1 = 9;
            continue $sm;
          case 3:
            this.o9_1 = 4;
            var tmp_2 = this.q9_1;
            if (tmp_2 instanceof Error) {
              this.g1y_1 = this.q9_1;
              var tmp_3 = this;
              cancel(this.e1y_1, 'Exception thrown while writing to channel', this.g1y_1);
              this.c1y_1.g1p(this.g1y_1);
              tmp_3.f1y_1 = Unit_instance;
              this.o9_1 = 14;
              this.n9_1 = 9;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 4:
            this.o9_1 = 14;
            this.h1y_1 = this.q9_1;
            this.n9_1 = 5;
            suspendResult = this.e1y_1.n10(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp_4 = this;
            tmp_4.i1y_1 = this.d1y_1;
            this.j1y_1 = this.i1y_1;
            this.o9_1 = 7;
            var tmp_5 = this;
            tmp_5.l1y_1 = Companion_instance;
            var tmp_6 = this;
            tmp_6.m1y_1 = this.j1y_1;
            this.n1y_1 = this.m1y_1;
            this.n9_1 = 6;
            suspendResult = this.c1y_1.f1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.o1y_1 = Unit_instance;
            var tmp_7 = this;
            this.l1y_1;
            var value = this.o1y_1;
            tmp_7.k1y_1 = _Result___init__impl__xyqfz8(value);
            this.o9_1 = 14;
            this.n9_1 = 8;
            continue $sm;
          case 7:
            this.o9_1 = 14;
            var tmp_8 = this.q9_1;
            if (tmp_8 instanceof Error) {
              this.p1y_1 = this.q9_1;
              var tmp_9 = this;
              var exception = this.p1y_1;
              tmp_9.k1y_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.n9_1 = 8;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 8:
            this.o9_1 = 14;
            throw this.h1y_1;
          case 9:
            this.o9_1 = 14;
            this.n9_1 = 10;
            suspendResult = this.e1y_1.n10(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            var tmp_10 = this;
            tmp_10.q1y_1 = this.d1y_1;
            this.r1y_1 = this.q1y_1;
            this.o9_1 = 12;
            var tmp_11 = this;
            tmp_11.t1y_1 = Companion_instance;
            var tmp_12 = this;
            tmp_12.u1y_1 = this.r1y_1;
            this.v1y_1 = this.u1y_1;
            this.n9_1 = 11;
            suspendResult = this.c1y_1.f1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            var tmp_13 = this;
            this.t1y_1;
            tmp_13.s1y_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.o9_1 = 14;
            this.n9_1 = 13;
            continue $sm;
          case 12:
            this.o9_1 = 14;
            var tmp_14 = this.q9_1;
            if (tmp_14 instanceof Error) {
              var e = this.q9_1;
              var tmp_15 = this;
              tmp_15.s1y_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 13;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 13:
            this.o9_1 = 14;
            return Unit_instance;
          case 14:
            throw this.q9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 14) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(writer$slambda).a1j = function ($this$launch, completion) {
    var i = new writer$slambda(this.b1y_1, this.c1y_1, completion);
    i.d1y_1 = $this$launch;
    return i;
  };
  function writer$slambda_0($block, $channel, resultContinuation) {
    var i = new writer$slambda($block, $channel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.w1y($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function writer$lambda($channel) {
    return function (it) {
      var tmp;
      if (!(it == null) && !$channel.z1o()) {
        $channel.g1p(it);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function $writePacketCOROUTINE$21(_this__u8e3s4, source, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o1x_1 = _this__u8e3s4;
    this.p1x_1 = source;
  }
  protoOf($writePacketCOROUTINE$21).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.p1x_1.p1j()) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.o1x_1.y1o().c1l(this.p1x_1, get_remaining(this.p1x_1));
            this.n9_1 = 2;
            suspendResult = flushIfNeeded(this.o1x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n9_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
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
    this.w1o_1 = origin;
  }
  protoOf(CloseToken).x1y = function (wrap) {
    var tmp0_subject = this.w1o_1;
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, CopyableThrowable) : false) {
        tmp = this.w1o_1.w10();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException_init_$Create$(this.w1o_1.message, this.w1o_1);
        } else {
          tmp = wrap(this.w1o_1);
        }
      }
    }
    return tmp;
  };
  protoOf(CloseToken).b1p = function (wrap, $super) {
    var tmp;
    if (wrap === VOID) {
      tmp = ClosedByteChannelException$_init_$ref_yjp351();
    } else {
      tmp = wrap;
    }
    wrap = tmp;
    return $super === VOID ? this.x1y(wrap) : $super.x1y.call(this, wrap);
  };
  protoOf(CloseToken).x1o = function (wrap) {
    var tmp0_safe_receiver = this.x1y(wrap);
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
    $this.b1z_1 = $this.b1z_1.b3($this.a1z_1.c3($this.z1y_1.s()));
    $this.a1z_1 = $this.z1y_1.s();
  }
  function $awaitContentCOROUTINE$22(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k1z_1 = _this__u8e3s4;
    this.l1z_1 = min;
  }
  protoOf($awaitContentCOROUTINE$22).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            if (this.k1z_1.v1o().s().g1(toLong(this.l1z_1)) >= 0) {
              this.m1z_1 = true;
              this.n9_1 = 2;
              continue $sm;
            } else {
              this.n9_1 = 1;
              suspendResult = this.k1z_1.y1y_1.d1p(this.l1z_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.m1z_1 = suspendResult;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return this.m1z_1;
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
  function CountedByteReadChannel(delegate) {
    this.y1y_1 = delegate;
    this.z1y_1 = new Buffer();
    this.a1z_1 = new Long(0, 0);
    this.b1z_1 = new Long(0, 0);
  }
  protoOf(CountedByteReadChannel).n1z = function () {
    updateConsumed(this);
    return this.b1z_1;
  };
  protoOf(CountedByteReadChannel).a1p = function () {
    return this.y1y_1.a1p();
  };
  protoOf(CountedByteReadChannel).c1p = function () {
    return this.z1y_1.p1j() && this.y1y_1.c1p();
  };
  protoOf(CountedByteReadChannel).v1o = function () {
    updateConsumed(this);
    var appended = this.z1y_1.h1l(this.y1y_1.v1o());
    this.a1z_1 = this.a1z_1.b3(appended);
    return this.z1y_1;
  };
  protoOf(CountedByteReadChannel).d1p = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$22(this, min, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(CountedByteReadChannel).g1p = function (cause) {
    this.y1y_1.g1p(cause);
    this.z1y_1.y4();
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
    if ($this === Companion_getInstance_1().z1s_1) {
      tmp = 'CR';
    } else if ($this === Companion_getInstance_1().a1t_1) {
      tmp = 'LF';
    } else if ($this === Companion_getInstance_1().b1t_1) {
      tmp = 'CRLF';
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = Companion_getInstance_1().d1t_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        var it = element.o1z_1;
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
    this.z1s_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.a1t_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.b1t_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.c1t_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.d1t_1 = listOf([new LineEndingMode(this.z1s_1), new LineEndingMode(this.a1t_1), new LineEndingMode(this.b1t_1)]);
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
    if (!($this === (other instanceof LineEndingMode ? other.o1z_1 : THROW_CCE())))
      return false;
    return true;
  }
  function LineEndingMode(mode) {
    Companion_getInstance_1();
    this.o1z_1 = mode;
  }
  protoOf(LineEndingMode).toString = function () {
    return LineEndingMode__toString_impl_j4h76r(this.o1z_1);
  };
  protoOf(LineEndingMode).hashCode = function () {
    return LineEndingMode__hashCode_impl_2mopm4(this.o1z_1);
  };
  protoOf(LineEndingMode).equals = function (other) {
    return LineEndingMode__equals_impl_qyr4nk(this.o1z_1, other);
  };
  function SourceByteReadChannel(source) {
    this.p1z_1 = source;
    this.q1z_1 = null;
  }
  protoOf(SourceByteReadChannel).a1p = function () {
    var tmp0_safe_receiver = this.q1z_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b1p();
  };
  protoOf(SourceByteReadChannel).c1p = function () {
    return this.p1z_1.p1j();
  };
  protoOf(SourceByteReadChannel).v1o = function () {
    var tmp0_safe_receiver = this.a1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.p1z_1.o1j();
  };
  protoOf(SourceByteReadChannel).d1p = function (min, $completion) {
    var tmp0_safe_receiver = this.a1p();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.p1z_1.r1j(toLong(min));
  };
  protoOf(SourceByteReadChannel).g1p = function (cause) {
    if (!(this.q1z_1 == null))
      return Unit_instance;
    this.p1z_1.y4();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.q1z_1 = new CloseToken(IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  };
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? 2147483647 : max;
    var tmp0 = toLong(max);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = input.o1j().s();
    // Inline function 'kotlin.text.buildString' call
    var capacity = (tmp0.g1(b) <= 0 ? tmp0 : b).l1();
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
    return !_this__u8e3s4.p1j();
  }
  function readBytes(_this__u8e3s4, count) {
    count = count === VOID ? _this__u8e3s4.s().l1() : count;
    return readByteArray(_this__u8e3s4, count);
  }
  function BytePacketBuilder() {
    return new Buffer();
  }
  function writePacket_0(_this__u8e3s4, packet) {
    _this__u8e3s4.h1l(packet);
  }
  function build(_this__u8e3s4) {
    return _this__u8e3s4.o1j();
  }
  function writeFully_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    _this__u8e3s4.y1k(buffer, offset, offset + length | 0);
  }
  function get_size(_this__u8e3s4) {
    return _this__u8e3s4.o1j().s().l1();
  }
  var ByteReadPacketEmpty;
  function get_remaining(_this__u8e3s4) {
    _init_properties_ByteReadPacket_kt__28475y();
    return _this__u8e3s4.o1j().s();
  }
  function discard_0(_this__u8e3s4, count) {
    count = count === VOID ? new Long(-1, 2147483647) : count;
    _init_properties_ByteReadPacket_kt__28475y();
    _this__u8e3s4.r1j(count);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4);
    var countToDiscard = count.g1(b) <= 0 ? count : b;
    _this__u8e3s4.o1j().m1k(countToDiscard);
    return countToDiscard;
  }
  function takeWhile(_this__u8e3s4, block) {
    _init_properties_ByteReadPacket_kt__28475y();
    while (!_this__u8e3s4.p1j() && block(_this__u8e3s4.o1j())) {
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
    var result = _this__u8e3s4.n1k(buffer, offset, offset + length | 0);
    return result === -1 ? 0 : result;
  }
  function toByteArray_0(_this__u8e3s4, charset) {
    charset = charset === VOID ? Charsets_getInstance().r1z_1 : charset;
    if (charset.equals(Charsets_getInstance().r1z_1))
      return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
    return encodeToByteArray_0(charset.u1z(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function readText_0(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().r1z_1 : charset;
    max = max === VOID ? 2147483647 : max;
    if (charset.equals(Charsets_getInstance().r1z_1)) {
      if (max === 2147483647)
        return readString_0(_this__u8e3s4);
      var tmp0 = _this__u8e3s4.o1j().s();
      // Inline function 'kotlin.math.min' call
      var b = toLong(max);
      var count = tmp0.g1(b) <= 0 ? tmp0 : b;
      return readString_1(_this__u8e3s4, count);
    }
    return decode(charset.v1z(), _this__u8e3s4, max);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().r1z_1 : charset;
    if (charset === Charsets_getInstance().r1z_1) {
      return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
    }
    encodeToImpl(charset.u1z(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).z1z = function () {
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
  protoOf(NoPoolImpl).h20 = function (instance) {
    return Unit_instance;
  };
  protoOf(NoPoolImpl).kv = function () {
    return Unit_instance;
  };
  function Companion_2() {
  }
  protoOf(Companion_2).i20 = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().r1z_1;
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
      return Charsets_getInstance().s1z_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  protoOf(Companion_2).j20 = function (charset) {
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
    this.t1z_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.t1z_1 === other.t1z_1;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.t1z_1);
  };
  protoOf(Charset).toString = function () {
    return this.t1z_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.t1z_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.r1z_1 = new CharsetImpl('UTF-8');
    this.s1z_1 = new CharsetImpl('ISO-8859-1');
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
    this.k20_1 = _charset;
  }
  function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetEncoder(_charset) {
    this.l20_1 = _charset;
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
  }
  protoOf(CharsetImpl).u1z = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).v1z = function () {
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
    this.o20_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.o20_1.toString() + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.o20_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetEncoderImpl ? other : THROW_CCE();
    if (!this.o20_1.equals(tmp0_other_with_cast.o20_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.q20_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.q20_1.toString() + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.q20_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetDecoderImpl ? other : THROW_CCE();
    if (!this.q20_1.equals(tmp0_other_with_cast.q20_1))
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
    if (get_charset(_this__u8e3s4).equals(Charsets_getInstance().s1z_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    if (!(get_charset(_this__u8e3s4) === Charsets_getInstance().r1z_1)) {
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init_$Create$(toString_1(message_0));
    }
    var encoder = new TextEncoder();
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
    var result = encoder.encode(tmp$ret$5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    dst.b1l(result);
    return result.length;
  }
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.l20_1;
  }
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset_0(_this__u8e3s4)), true);
    var tmp0 = input.o1j().s();
    // Inline function 'kotlin.comparisons.minOf' call
    var b = toLong(max);
    var count = tmp0.g1(b) <= 0 ? tmp0 : b;
    var tmp = readByteArray(input, count.l1());
    var array = tmp instanceof Int8Array ? tmp : THROW_CCE();
    var tmp_0;
    try {
      tmp_0 = decoder.r20(array);
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
    return _this__u8e3s4.k20_1;
  }
  function forName(_this__u8e3s4, name) {
    return Companion_instance_3.i20(name);
  }
  function isSupported(_this__u8e3s4, name) {
    return Companion_instance_3.j20(name);
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
    this.s20_1 = $this_toKtor;
  }
  protoOf(toKtor$1).r20 = function (buffer) {
    return this.s20_1.decode(buffer);
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
    this.t20_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().w(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
  }
  protoOf(TextDecoderFallback).r20 = function (buffer) {
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
          if (!!this.t20_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException_init_$Create$(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.i1l(toByte(point >> 8));
        }
        builder.i1l(toByte(point & 255));
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
        dst.i1l(toByte(character));
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
    this.a20_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.a20_1;
    tmp.b20_1 = Array(size);
    this.c20_1 = 0;
  }
  protoOf(DefaultPool).d20 = function (instance) {
  };
  protoOf(DefaultPool).e20 = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).f20 = function (instance) {
  };
  protoOf(DefaultPool).g20 = function () {
    if (this.c20_1 === 0)
      return this.z1z();
    this.c20_1 = this.c20_1 - 1 | 0;
    var idx = this.c20_1;
    var tmp = this.b20_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.b20_1[idx] = null;
    return this.e20(instance);
  };
  protoOf(DefaultPool).h20 = function (instance) {
    this.f20(instance);
    if (this.c20_1 === this.a20_1) {
      this.d20(instance);
    } else {
      var _unary__edvuaz = this.c20_1;
      this.c20_1 = _unary__edvuaz + 1 | 0;
      this.b20_1[_unary__edvuaz] = instance;
    }
  };
  protoOf(DefaultPool).kv = function () {
    var inductionVariable = 0;
    var last = this.c20_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.b20_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.b20_1[i] = null;
        this.d20(instance);
      }
       while (inductionVariable < last);
    this.c20_1 = 0;
  };
  //region block: post-declaration
  protoOf(Read).t1m = resume;
  protoOf(Read).u1m = resume_0;
  protoOf(Write).t1m = resume;
  protoOf(Write).u1m = resume_0;
  protoOf(ByteChannel).e1p = awaitContent$default;
  protoOf(ByteReadChannel$Companion$Empty$1).e1p = awaitContent$default;
  protoOf(CountedByteReadChannel).e1p = awaitContent$default;
  protoOf(SourceByteReadChannel).e1p = awaitContent$default;
  protoOf(DefaultPool).y4 = close;
  protoOf(NoPoolImpl).y4 = close;
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
