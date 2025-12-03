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
  var Companion_instance = kotlin_kotlin.$_$.r5;
  var Unit_instance = kotlin_kotlin.$_$.w5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.i3;
  var protoOf = kotlin_kotlin.$_$.wc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.tb;
  var THROW_CCE = kotlin_kotlin.$_$.ih;
  var initMetadataForObject = kotlin_kotlin.$_$.yb;
  var toString = kotlin_kotlin.$_$.ni;
  var hashCode = kotlin_kotlin.$_$.rb;
  var equals = kotlin_kotlin.$_$.mb;
  var initMetadataForClass = kotlin_kotlin.$_$.sb;
  var createFailure = kotlin_kotlin.$_$.zh;
  var Result = kotlin_kotlin.$_$.gh;
  var initMetadataForInterface = kotlin_kotlin.$_$.wb;
  var toString_0 = kotlin_kotlin.$_$.cg;
  var newThrowable = kotlin_kotlin.$_$.pc;
  var stackTraceToString = kotlin_kotlin.$_$.ki;
  var VOID = kotlin_kotlin.$_$.j;
  var isInterface = kotlin_kotlin.$_$.hc;
  var CoroutineImpl = kotlin_kotlin.$_$.wa;
  var toLong = kotlin_kotlin.$_$.yc;
  var numberToLong = kotlin_kotlin.$_$.uc;
  var intercepted = kotlin_kotlin.$_$.ia;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ii;
  var returnIfSuspended = kotlin_kotlin.$_$.p;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.fa;
  var Long = kotlin_kotlin.$_$.ch;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ub;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var IllegalStateException = kotlin_kotlin.$_$.bh;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.g2;
  var captureStack = kotlin_kotlin.$_$.eb;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var decodeToString = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.d;
  var replace = kotlin_kotlin.$_$.bf;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var readString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.n;
  var closeFinally = kotlin_kotlin.$_$.xh;
  var toString_1 = kotlin_kotlin.$_$.ad;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var readByteString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.b5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var startCoroutineCancellable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var Continuation = kotlin_kotlin.$_$.qa;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.vb;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var initMetadataForLambda = kotlin_kotlin.$_$.xb;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var CancellationException = kotlin_kotlin.$_$.ea;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var readString_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.l;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var listOf = kotlin_kotlin.$_$.p8;
  var IOException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.e;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.l1;
  var charSequenceLength = kotlin_kotlin.$_$.ib;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.i;
  var encodeToByteArray = kotlin_kotlin.$_$.be;
  var readString_1 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.m;
  var writeString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.o;
  var AutoCloseable = kotlin_kotlin.$_$.qg;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a3;
  var replace_0 = kotlin_kotlin.$_$.cf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var getStringHashCode = kotlin_kotlin.$_$.qb;
  var IOException_init_$Init$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.b;
  var readByteArray_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var charSequenceSubSequence = kotlin_kotlin.$_$.jb;
  var isCharSequence = kotlin_kotlin.$_$.dc;
  var trim = kotlin_kotlin.$_$.lg;
  var toByte = kotlin_kotlin.$_$.xc;
  var decodeToString_0 = kotlin_kotlin.$_$.zd;
  var setOf = kotlin_kotlin.$_$.e9;
  var charSequenceGet = kotlin_kotlin.$_$.hb;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.g3;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject(Empty, 'Empty');
  initMetadataForClass(Closed, 'Closed');
  function resume() {
    return this.d1k().ha(Companion_getInstance().a1k_1);
  }
  function resume_0(throwable) {
    var tmp = this.d1k();
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
    return tmp.ha(tmp1_elvis_lhs == null ? Companion_getInstance().a1k_1 : tmp1_elvis_lhs.zo_1);
  }
  initMetadataForInterface(Task, 'Task');
  initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
  initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
  initMetadataForCoroutine($awaitContentCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($flushCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($flushAndCloseCOROUTINE$2, CoroutineImpl);
  function awaitContent$default(min, $completion, $super) {
    min = min === VOID ? 1 : min;
    return $super === VOID ? this.p1m(min, $completion) : $super.p1m.call(this, min, $completion);
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
    this.lu();
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
    this.z1j_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.a1k_1 = _Result___init__impl__xyqfz8(Unit_instance);
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
    this.b1k_1 = cause;
  }
  protoOf(Closed).toString = function () {
    return 'Closed(cause=' + toString(this.b1k_1) + ')';
  };
  protoOf(Closed).hashCode = function () {
    return this.b1k_1 == null ? 0 : hashCode(this.b1k_1);
  };
  protoOf(Closed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    var tmp0_other_with_cast = other instanceof Closed ? other : THROW_CCE();
    if (!equals(this.b1k_1, tmp0_other_with_cast.b1k_1))
      return false;
    return true;
  };
  function Task() {
  }
  function Read(continuation) {
    this.h1k_1 = continuation;
    this.i1k_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.h1k_1), 16));
      stackTraceToString(this_0);
      tmp.i1k_1 = this_0;
    }
  }
  protoOf(Read).d1k = function () {
    return this.h1k_1;
  };
  protoOf(Read).c1k = function () {
    return this.i1k_1;
  };
  protoOf(Read).e1k = function () {
    return 'read';
  };
  function Write(continuation) {
    this.j1k_1 = continuation;
    this.k1k_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.j1k_1), 16));
      stackTraceToString(this_0);
      tmp.k1k_1 = this_0;
    }
  }
  protoOf(Write).d1k = function () {
    return this.j1k_1;
  };
  protoOf(Write).c1k = function () {
    return this.k1k_1;
  };
  protoOf(Write).e1k = function () {
    return 'write';
  };
  function moveFlushToReadBuffer($this) {
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    $this.o1k_1;
    $this.m1k_1.e1i($this.q1k_1);
    $this.n1k_1 = 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = $this.p1k_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Write) {
      tmp = $this.p1k_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.f1k();
    }
  }
  function closeSlot($this, cause) {
    var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().z1j_1;
    var continuation = $this.p1k_1.atomicfu$getAndSet(closeContinuation);
    if (isInterface(continuation, Task)) {
      continuation.g1k(cause);
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
    this.b1l_1 = _this__u8e3s4;
    this.c1l_1 = min;
  }
  protoOf($awaitContentCOROUTINE$0).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            rethrowCloseCauseIfNeeded_1(this.b1l_1);
            if (this.b1l_1.q1k_1.s().e1(toLong(this.c1l_1)) >= 0)
              return true;
            var tmp_0 = this;
            tmp_0.d1l_1 = this.b1l_1;
            this.e1l_1 = this.d1l_1;
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!(numberToLong(this.b1l_1.n1k_1).z2(this.b1l_1.q1k_1.s()).e1(toLong(this.c1l_1)) < 0 && this.b1l_1.s1k_1.kotlinx$atomicfu$value == null)) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.m9_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.ov();
            var tmp0 = this.e1l_1;
            var tmp1 = new Read(cancellable);
            l$ret$1: do {
              var previous = tmp0.p1k_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.p1k_1.atomicfu$compareAndSet(previous, tmp1)) {
                  tmp1.f1k();
                  break l$ret$1;
                }
              }
              if (previous instanceof Read) {
                previous.g1k(new ConcurrentIOException(tmp1.e1k(), previous.c1k()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.f1k();
                } else {
                  if (previous instanceof Closed) {
                    tmp1.g1k(previous.b1k_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(numberToLong(this.b1l_1.n1k_1).z2(this.b1l_1.q1k_1.s()).e1(toLong(this.c1l_1)) < 0 && this.b1l_1.s1k_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.p1k_1.kotlinx$atomicfu$value;
                var tmp_1;
                if (current instanceof Read) {
                  tmp_1 = tmp0.p1k_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  current.f1k();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.pv(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m9_1 = 1;
            continue $sm;
          case 3:
            if (this.b1l_1.q1k_1.s().e1(new Long(1048576, 0)) < 0) {
              moveFlushToReadBuffer(this.b1l_1);
            }

            return this.b1l_1.q1k_1.s().e1(toLong(this.c1l_1)) >= 0;
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
    this.n1l_1 = _this__u8e3s4;
  }
  protoOf($flushCOROUTINE$1).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            rethrowCloseCauseIfNeeded_1(this.n1l_1);
            this.n1l_1.q1l();
            if (this.n1l_1.n1k_1 < 1048576)
              return Unit_instance;
            var tmp_0 = this;
            tmp_0.o1l_1 = this.n1l_1;
            this.p1l_1 = this.o1l_1;
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!(this.n1l_1.n1k_1 >= 1048576 && this.n1l_1.s1k_1.kotlinx$atomicfu$value == null)) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.m9_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.ov();
            var tmp0 = this.p1l_1;
            var tmp1 = new Write(cancellable);
            l$ret$1: do {
              var previous = tmp0.p1k_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.p1k_1.atomicfu$compareAndSet(previous, tmp1)) {
                  tmp1.f1k();
                  break l$ret$1;
                }
              }
              if (previous instanceof Write) {
                previous.g1k(new ConcurrentIOException(tmp1.e1k(), previous.c1k()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.f1k();
                } else {
                  if (previous instanceof Closed) {
                    tmp1.g1k(previous.b1k_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(this.n1l_1.n1k_1 >= 1048576 && this.n1l_1.s1k_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.p1k_1.kotlinx$atomicfu$value;
                var tmp_1;
                if (current instanceof Write) {
                  tmp_1 = tmp0.p1k_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_1 = false;
                }
                if (tmp_1) {
                  current.f1k();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.pv(), this);
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
    this.z1l_1 = _this__u8e3s4;
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
            tmp_0.a1m_1 = this.z1l_1;
            this.b1m_1 = this.a1m_1;
            this.n9_1 = 2;
            var tmp_1 = this;
            tmp_1.d1m_1 = Companion_instance;
            var tmp_2 = this;
            tmp_2.e1m_1 = this.b1m_1;
            this.f1m_1 = this.e1m_1;
            this.m9_1 = 1;
            suspendResult = this.f1m_1.g1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_3 = this;
            this.d1m_1;
            tmp_3.c1m_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.n9_1 = 4;
            this.m9_1 = 3;
            continue $sm;
          case 2:
            this.n9_1 = 4;
            var tmp_4 = this.p9_1;
            if (tmp_4 instanceof Error) {
              var e = this.p9_1;
              var tmp_5 = this;
              tmp_5.c1m_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 3;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            this.n9_1 = 4;
            if (!this.z1l_1.s1k_1.atomicfu$compareAndSet(null, get_CLOSED()))
              return Unit_instance;
            closeSlot(this.z1l_1, null);
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
    this.l1k_1 = autoFlush;
    this.m1k_1 = new Buffer();
    this.n1k_1 = 0;
    this.o1k_1 = new Object();
    this.p1k_1 = atomic$ref$1(Empty_instance);
    this.q1k_1 = new Buffer();
    this.r1k_1 = new Buffer();
    this.s1k_1 = atomic$ref$1(null);
  }
  protoOf(ByteChannel).h1m = function () {
    var tmp0_safe_receiver = this.s1k_1.kotlinx$atomicfu$value;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.j1m(ClosedReadChannelException$_init_$ref_ix0089());
    }
    if (this.q1k_1.b1h()) {
      moveFlushToReadBuffer(this);
    }
    return this.q1k_1;
  };
  protoOf(ByteChannel).k1m = function () {
    if (this.l1m()) {
      var tmp0_safe_receiver = this.s1k_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = tmp0_safe_receiver.j1m(ClosedWriteChannelException$_init_$ref_ef15ty());
      }
      if (tmp == null)
        throw new ClosedWriteChannelException();
    }
    return this.r1k_1;
  };
  protoOf(ByteChannel).m1m = function () {
    var tmp0_safe_receiver = this.s1k_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1m();
  };
  protoOf(ByteChannel).l1m = function () {
    return !(this.s1k_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannel).o1m = function () {
    return !(this.m1m() == null) || (this.l1m() && this.n1k_1 === 0 && this.q1k_1.b1h());
  };
  protoOf(ByteChannel).p1m = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$0(this, min, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(ByteChannel).g1m = function ($completion) {
    var tmp = new $flushCOROUTINE$1(this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(ByteChannel).q1l = function () {
    if (this.r1k_1.b1h())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.o1k_1;
    var count = this.r1k_1.s().j1();
    this.m1k_1.t1i(this.r1k_1);
    this.n1k_1 = this.n1k_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.p1k_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.p1k_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.f1k();
    }
  };
  protoOf(ByteChannel).q4 = function () {
    this.q1l();
    if (!this.s1k_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  };
  protoOf(ByteChannel).r1m = function ($completion) {
    var tmp = new $flushAndCloseCOROUTINE$2(this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(ByteChannel).s1m = function (cause) {
    if (!(this.s1k_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.s1k_1.atomicfu$compareAndSet(null, closedToken);
    var wrappedCause = closedToken.n1m();
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
    this_0.k1i(content, offset, offset + length | 0);
    var source = this_0;
    return ByteReadChannel_0(source);
  }
  function ByteReadChannel_0(source) {
    return new SourceByteReadChannel(source);
  }
  function ByteReadChannel$Companion$Empty$1() {
    this.t1m_1 = null;
    this.u1m_1 = new Buffer();
  }
  protoOf(ByteReadChannel$Companion$Empty$1).m1m = function () {
    return this.t1m_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).o1m = function () {
    return true;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).h1m = function () {
    return this.u1m_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).p1m = function (min, $completion) {
    return false;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).s1m = function (cause) {
  };
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.v1m_1 = new ByteReadChannel$Companion$Empty$1();
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
    _this__u8e3s4.s1m(IOException_init_$Create$('Channel was cancelled'));
  }
  function readRemaining(_this__u8e3s4, $completion) {
    var tmp = new $readRemainingCOROUTINE$3(_this__u8e3s4, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function get_availableForRead(_this__u8e3s4) {
    return _this__u8e3s4.h1m().a1h().s().j1();
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
    var tmp0_safe_receiver = _this__u8e3s4.m1m();
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
    lineEnding = lineEnding === VOID ? Companion_getInstance_1().o1q_1 : lineEnding;
    var tmp = new $readUTF8LineToCOROUTINE$13(_this__u8e3s4, out, max, lineEnding, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.m1m();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.m1m();
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
    this.e1n_1 = _this__u8e3s4;
  }
  protoOf($readRemainingCOROUTINE$3).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.f1n_1 = BytePacketBuilder();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.e1n_1.o1m()) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.f1n_1.t1i(this.e1n_1.h1m());
            this.m9_1 = 2;
            suspendResult = this.e1n_1.q1m(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m9_1 = 1;
            continue $sm;
          case 3:
            rethrowCloseCauseIfNeeded(this.e1n_1);
            return this.f1n_1.a1h();
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
    this.o1n_1 = _this__u8e3s4;
    this.p1n_1 = packet;
  }
  protoOf($readPacketCOROUTINE$4).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 6;
            this.q1n_1 = new Buffer();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!(this.q1n_1.s().e1(toLong(this.p1n_1)) < 0)) {
              this.m9_1 = 5;
              continue $sm;
            }

            if (this.o1n_1.h1m().b1h()) {
              this.m9_1 = 2;
              suspendResult = this.o1n_1.q1m(VOID, this);
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
            if (this.o1n_1.o1m()) {
              this.m9_1 = 5;
              continue $sm;
            } else {
              this.m9_1 = 4;
              continue $sm;
            }

          case 4:
            if (get_remaining(this.o1n_1.h1m()).e1(numberToLong(this.p1n_1).a3(this.q1n_1.s())) > 0) {
              this.o1n_1.h1m().d1i(this.q1n_1, numberToLong(this.p1n_1).a3(this.q1n_1.s()));
            } else {
              this.o1n_1.h1m().e1i(this.q1n_1);
            }

            this.m9_1 = 1;
            continue $sm;
          case 5:
            if (this.q1n_1.s().e1(toLong(this.p1n_1)) < 0) {
              throw EOFException_init_$Create$('Not enough data available, required ' + this.p1n_1 + ' bytes but only ' + this.q1n_1.s().toString() + ' available');
            }

            return this.q1n_1;
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
    this.z1n_1 = _this__u8e3s4;
    this.a1o_1 = max;
  }
  protoOf($discardCOROUTINE$5).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            this.b1o_1 = this.a1o_1;
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!(this.b1o_1.e1(new Long(0, 0)) > 0 && !this.z1n_1.o1m())) {
              this.m9_1 = 4;
              continue $sm;
            }

            if (get_availableForRead(this.z1n_1) === 0) {
              this.m9_1 = 2;
              suspendResult = this.z1n_1.q1m(VOID, this);
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
            var tmp0 = this.b1o_1;
            var b = get_remaining(this.z1n_1.h1m());
            var count = tmp0.e1(b) <= 0 ? tmp0 : b;
            discard_0(this.z1n_1.h1m(), count);
            this.b1o_1 = this.b1o_1.a3(count);
            this.m9_1 = 1;
            continue $sm;
          case 4:
            return this.a1o_1.a3(this.b1o_1);
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
    this.k1o_1 = _this__u8e3s4;
    this.l1o_1 = buffer;
    this.m1o_1 = offset;
    this.n1o_1 = length;
  }
  protoOf($readAvailableCOROUTINE$7).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            if (this.k1o_1.o1m())
              return -1;
            if (this.k1o_1.h1m().b1h()) {
              this.m9_1 = 1;
              suspendResult = this.k1o_1.q1m(VOID, this);
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
            if (this.k1o_1.o1m())
              return -1;
            return readAvailable_0(this.k1o_1.h1m(), this.l1o_1, this.m1o_1, this.n1o_1);
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
    this.w1o_1 = _this__u8e3s4;
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
            suspendResult = readBuffer(this.w1o_1, this);
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
    this.f1p_1 = _this__u8e3s4;
    this.g1p_1 = channel;
    this.h1p_1 = limit;
  }
  protoOf($copyToCOROUTINE$10).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 12;
            this.i1p_1 = this.h1p_1;
            this.m9_1 = 1;
            continue $sm;
          case 1:
            this.n9_1 = 8;
            this.n9_1 = 7;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            if (!(!this.f1p_1.o1m() && this.i1p_1.e1(new Long(0, 0)) > 0)) {
              this.m9_1 = 6;
              continue $sm;
            }

            if (this.f1p_1.h1m().b1h()) {
              this.m9_1 = 3;
              suspendResult = this.f1p_1.q1m(VOID, this);
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
            var tmp0 = this.i1p_1;
            var b = get_remaining(this.f1p_1.h1m());
            tmp_0.k1p_1 = tmp0.e1(b) <= 0 ? tmp0 : b;
            this.f1p_1.h1m().d1i(this.g1p_1.k1m(), this.k1p_1);
            this.i1p_1 = this.i1p_1.a3(this.k1p_1);
            this.m9_1 = 5;
            suspendResult = this.g1p_1.g1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.m9_1 = 2;
            continue $sm;
          case 6:
            this.j1p_1 = Unit_instance;
            this.n9_1 = 12;
            this.m9_1 = 10;
            continue $sm;
          case 7:
            this.n9_1 = 8;
            var tmp_1 = this.p9_1;
            if (tmp_1 instanceof Error) {
              this.l1p_1 = this.p9_1;
              var tmp_2 = this;
              this.f1p_1.s1m(this.l1p_1);
              close_0(this.g1p_1, this.l1p_1);
              throw this.l1p_1;
            } else {
              throw this.p9_1;
            }

          case 8:
            this.n9_1 = 12;
            this.m1p_1 = this.p9_1;
            this.m9_1 = 9;
            suspendResult = this.g1p_1.g1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            throw this.m1p_1;
          case 10:
            this.n9_1 = 12;
            this.m9_1 = 11;
            suspendResult = this.g1p_1.g1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            return this.h1p_1.a3(this.i1p_1);
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
    this.v1p_1 = _this__u8e3s4;
    this.w1p_1 = channel;
  }
  protoOf($copyToCOROUTINE$11).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 11;
            this.x1p_1 = new Long(0, 0);
            this.m9_1 = 1;
            continue $sm;
          case 1:
            this.n9_1 = 7;
            this.n9_1 = 6;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            if (!!this.v1p_1.o1m()) {
              this.m9_1 = 5;
              continue $sm;
            }

            this.x1p_1 = this.x1p_1.z2(this.v1p_1.h1m().e1i(this.w1p_1.k1m()));
            this.m9_1 = 3;
            suspendResult = this.w1p_1.g1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.m9_1 = 4;
            suspendResult = this.v1p_1.q1m(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.m9_1 = 2;
            continue $sm;
          case 5:
            this.y1p_1 = Unit_instance;
            this.n9_1 = 11;
            this.m9_1 = 9;
            continue $sm;
          case 6:
            this.n9_1 = 7;
            var tmp_0 = this.p9_1;
            if (tmp_0 instanceof Error) {
              this.z1p_1 = this.p9_1;
              var tmp_1 = this;
              this.v1p_1.s1m(this.z1p_1);
              close_0(this.w1p_1, this.z1p_1);
              throw this.z1p_1;
            } else {
              throw this.p9_1;
            }

          case 7:
            this.n9_1 = 11;
            this.a1q_1 = this.p9_1;
            this.m9_1 = 8;
            suspendResult = this.w1p_1.g1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            throw this.a1q_1;
          case 9:
            this.n9_1 = 11;
            this.m9_1 = 10;
            suspendResult = this.w1p_1.g1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            return this.x1p_1;
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
    this.j1q_1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$12).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.k1q_1 = new Buffer();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.j1q_1.o1m()) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.k1q_1.t1i(this.j1q_1.h1m());
            this.m9_1 = 2;
            suspendResult = this.j1q_1.q1m(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m9_1 = 1;
            continue $sm;
          case 3:
            var tmp0_safe_receiver = this.j1q_1.m1m();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return this.k1q_1;
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
    this.y1q_1 = _this__u8e3s4;
    this.z1q_1 = out;
    this.a1r_1 = max;
    this.b1r_1 = lineEnding;
  }
  protoOf($readUTF8LineToCOROUTINE$13).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 21;
            if (this.y1q_1.h1m().b1h()) {
              this.m9_1 = 1;
              suspendResult = this.y1q_1.q1m(VOID, this);
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
            if (this.y1q_1.o1m())
              return false;
            var tmp_0 = this;
            tmp_0.c1r_1 = new Buffer();
            this.m9_1 = 3;
            continue $sm;
          case 3:
            this.e1r_1 = this.c1r_1;
            this.f1r_1 = null;
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
            tmp_1.h1r_1 = this.e1r_1;
            this.i1r_1 = this.h1r_1;
            this.m9_1 = 7;
            continue $sm;
          case 7:
            if (!!this.y1q_1.o1m()) {
              this.m9_1 = 14;
              continue $sm;
            }

            this.m9_1 = 8;
            continue $sm;
          case 8:
            if (!!this.y1q_1.h1m().b1h()) {
              this.m9_1 = 12;
              continue $sm;
            }

            this.j1r_1 = this.y1q_1.h1m().e1h();
            if (this.j1r_1 === 13) {
              if (this.y1q_1.h1m().b1h()) {
                this.m9_1 = 10;
                suspendResult = this.y1q_1.q1m(VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.m9_1 = 11;
                continue $sm;
              }
            } else {
              if (this.j1r_1 === 10) {
                readUTF8LineTo$checkLineEndingAllowed(this.b1r_1, Companion_getInstance_1().m1q_1);
                this.z1q_1.o(readString(this.i1r_1));
                this.g1r_1 = true;
                this.n9_1 = 21;
                this.m9_1 = 15;
                continue $sm;
              } else {
                this.i1r_1.u1i(this.j1r_1);
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
            if (this.y1q_1.h1m().a1h().w1h(new Long(0, 0)) === 10) {
              readUTF8LineTo$checkLineEndingAllowed(this.b1r_1, Companion_getInstance_1().n1q_1);
              discard_0(this.y1q_1.h1m(), new Long(1, 0));
            } else {
              readUTF8LineTo$checkLineEndingAllowed(this.b1r_1, Companion_getInstance_1().l1q_1);
            }

            this.z1q_1.o(readString(this.i1r_1));
            this.g1r_1 = true;
            this.n9_1 = 21;
            this.m9_1 = 15;
            continue $sm;
          case 12:
            if (this.i1r_1.s().e1(toLong(this.a1r_1)) >= 0) {
              throw new TooLongLineException('Line exceeds limit of ' + this.a1r_1 + ' characters');
            }

            this.m9_1 = 13;
            suspendResult = this.y1q_1.q1m(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            this.m9_1 = 7;
            continue $sm;
          case 14:
            var tmp_2 = this;
            var this_0 = this.i1r_1.s().e1(new Long(0, 0)) > 0;
            if (this_0) {
              this.z1q_1.o(readString(this.i1r_1));
            }

            tmp_2.g1r_1 = this_0;
            this.n9_1 = 21;
            this.m9_1 = 15;
            var tmp_3 = this;
            continue $sm;
          case 15:
            var tmp_4 = this.g1r_1;
            this.n9_1 = 21;
            closeFinally(this.e1r_1, this.f1r_1);
            return tmp_4;
          case 16:
            this.n9_1 = 21;
            var tmp_5 = this;
            closeFinally(this.e1r_1, this.f1r_1);
            tmp_5.d1r_1 = Unit_instance;
            this.m9_1 = 20;
            continue $sm;
          case 17:
            this.n9_1 = 18;
            var tmp_6 = this.p9_1;
            if (tmp_6 instanceof Error) {
              var e = this.p9_1;
              var tmp_7 = this;
              this.f1r_1 = e;
              throw e;
            } else {
              throw this.p9_1;
            }

          case 18:
            this.n9_1 = 21;
            var t = this.p9_1;
            closeFinally(this.e1r_1, this.f1r_1);
            throw t;
          case 19:
            this.n9_1 = 21;
            closeFinally(this.e1r_1, this.f1r_1);
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
    this.s1r_1 = _this__u8e3s4;
    this.t1r_1 = max;
  }
  protoOf($readRemainingCOROUTINE$14).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.u1r_1 = BytePacketBuilder();
            this.v1r_1 = this.t1r_1;
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!(!this.s1r_1.o1m() && this.v1r_1.e1(new Long(0, 0)) > 0)) {
              this.m9_1 = 3;
              continue $sm;
            }

            if (this.v1r_1.e1(get_remaining(this.s1r_1.h1m())) >= 0) {
              this.v1r_1 = this.v1r_1.a3(get_remaining(this.s1r_1.h1m()));
              this.s1r_1.h1m().e1i(this.u1r_1);
            } else {
              this.s1r_1.h1m().d1i(this.u1r_1, this.v1r_1);
              this.v1r_1 = new Long(0, 0);
            }

            this.m9_1 = 2;
            suspendResult = this.s1r_1.q1m(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m9_1 = 1;
            continue $sm;
          case 3:
            return this.u1r_1.a1h();
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
    this.e1s_1 = _this__u8e3s4;
    this.f1s_1 = byteString;
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
            suspendResult = peek(this.e1s_1, this.f1s_1.s(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g1s_1 = suspendResult;
            if (equals(this.g1s_1, this.f1s_1)) {
              this.m9_1 = 3;
              suspendResult = discard(this.e1s_1, toLong(this.f1s_1.s()), this);
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
    this.p1s_1 = _this__u8e3s4;
    this.q1s_1 = matchString;
    this.r1s_1 = writeChannel;
    this.s1s_1 = limit;
    this.t1s_1 = ignoreMissing;
  }
  protoOf($readUntilCOROUTINE$16).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 11;
            if (!(this.q1s_1.s() > 0)) {
              var message = 'Empty match string not permitted for readUntil';
              throw IllegalStateException_init_$Create$(toString_1(message));
            }

            this.u1s_1 = buildPartialMatchTable(this.q1s_1);
            this.v1s_1 = {_v: 0};
            this.w1s_1 = new Int8Array(this.q1s_1.s());
            this.x1s_1 = {_v: new Long(0, 0)};
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.p1s_1.o1m()) {
              this.m9_1 = 7;
              continue $sm;
            }

            this.m9_1 = 2;
            suspendResult = readByte(this.p1s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y1s_1 = suspendResult;
            if (this.v1s_1._v > 0 && !(this.y1s_1 === this.q1s_1.u(this.v1s_1._v))) {
              this.m9_1 = 3;
              suspendResult = readUntil$appendPartialMatch(this.r1s_1, this.w1s_1, this.v1s_1, this.x1s_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 4;
              continue $sm;
            }

          case 3:
            readUntil$resetPartialMatch(this.v1s_1, this.q1s_1, this.u1s_1, this.y1s_1);
            this.m9_1 = 4;
            continue $sm;
          case 4:
            if (this.y1s_1 === this.q1s_1.u(this.v1s_1._v)) {
              var tmp_0 = this;
              this.w1s_1[this.v1s_1._v] = this.y1s_1;
              this.v1s_1._v = this.v1s_1._v + 1 | 0;
              if (this.v1s_1._v === this.q1s_1.s()) {
                return this.x1s_1._v;
              }
              tmp_0.z1s_1 = Unit_instance;
              this.m9_1 = 6;
              continue $sm;
            } else {
              this.m9_1 = 5;
              suspendResult = writeByte(this.r1s_1, this.y1s_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            var tmp_1 = this;
            var _unary__edvuaz = this.x1s_1._v;
            this.x1s_1._v = _unary__edvuaz.e3();
            tmp_1.z1s_1 = _unary__edvuaz;
            this.m9_1 = 6;
            continue $sm;
          case 6:
            if (this.x1s_1._v.e1(this.s1s_1) > 0) {
              throw IOException_init_$Create$('Limit of ' + this.s1s_1.toString() + ' bytes exceeded while scanning for "' + decodeToString(this.q1s_1) + '"');
            }

            this.m9_1 = 1;
            continue $sm;
          case 7:
            if (this.t1s_1) {
              this.m9_1 = 9;
              suspendResult = readUntil$appendPartialMatch(this.r1s_1, this.w1s_1, this.v1s_1, this.x1s_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 8;
              continue $sm;
            }

          case 8:
            throw IOException_init_$Create$('Expected "' + toSingleLineString(this.q1s_1) + '" but encountered end of input');
          case 9:
            this.m9_1 = 10;
            suspendResult = this.r1s_1.g1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            return this.x1s_1._v;
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
    this.i1t_1 = _this__u8e3s4;
    this.j1t_1 = count;
  }
  protoOf($peekCOROUTINE$17).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            if (this.i1t_1.o1m())
              return null;
            this.m9_1 = 1;
            suspendResult = this.i1t_1.p1m(this.j1t_1, this);
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
            return readByteString(this.i1t_1.h1m().f1i(), this.j1t_1);
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
    this.s1t_1 = _this__u8e3s4;
  }
  protoOf($readByteCOROUTINE$18).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            if (this.s1t_1.h1m().b1h()) {
              this.m9_1 = 1;
              suspendResult = this.s1t_1.q1m(VOID, this);
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
            if (this.s1t_1.h1m().b1h()) {
              throw EOFException_init_$Create$('Not enough data available');
            }

            return this.s1t_1.h1m().e1h();
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
    this.b1u_1 = $writeChannel;
    this.c1u_1 = matchBuffer;
    this.d1u_1 = matchIndex;
    this.e1u_1 = rc;
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
            suspendResult = writeFully(this.b1u_1, this.c1u_1, 0, this.d1u_1._v, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0 = this.e1u_1._v;
            var other = this.d1u_1._v;
            this.e1u_1._v = tmp0.z2(toLong(other));
            this.d1u_1._v = 0;
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
    this.n1u_1 = _this__u8e3s4;
  }
  protoOf($flushIfNeededCOROUTINE$20).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            rethrowCloseCauseIfNeeded_0(this.n1u_1);
            var tmp_0;
            var tmp_1 = this.n1u_1;
            var tmp0_safe_receiver = tmp_1 instanceof ByteChannel ? tmp_1 : null;
            if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1k_1) === true) {
              tmp_0 = true;
            } else {
              tmp_0 = get_size(this.n1u_1.k1m()) >= 1048576;
            }

            if (tmp_0) {
              this.m9_1 = 1;
              suspendResult = this.n1u_1.g1m(this);
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
    this.o1u_1 = channel;
    this.p1u_1 = job;
  }
  protoOf(WriterJob).zu = function () {
    return this.p1u_1;
  };
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
  }
  function WriterScope(channel, coroutineContext) {
    this.q1u_1 = channel;
    this.r1u_1 = coroutineContext;
  }
  protoOf(WriterScope).qr = function () {
    return this.r1u_1;
  };
  function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? value.length : endIndex;
    _this__u8e3s4.k1m().k1i(value, startIndex, endIndex);
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
    return _this__u8e3s4.zu().ls();
  }
  function close_0(_this__u8e3s4, cause) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    if (cause == null) {
      fireAndForget(ByteWriteChannel$flushAndClose$ref_0(_this__u8e3s4));
    } else {
      _this__u8e3s4.s1m(cause);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, block) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    var tmp = _this__u8e3s4.zu();
    tmp.ss(invokeOnCompletion$lambda(block));
  }
  function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    // Inline function 'kotlin.apply' call
    var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel, null));
    this_0.ss(writer$lambda(channel));
    var job = this_0;
    return new WriterJob(channel, job);
  }
  function fireAndForget(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
  }
  function writeByte(_this__u8e3s4, value, $completion) {
    _this__u8e3s4.k1m().u1i(value);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function NO_CALLBACK$1() {
    this.c1v_1 = EmptyCoroutineContext_getInstance();
  }
  protoOf(NO_CALLBACK$1).s9 = function () {
    return this.c1v_1;
  };
  protoOf(NO_CALLBACK$1).da = function (result) {
    return Unit_instance;
  };
  protoOf(NO_CALLBACK$1).ha = function (result) {
    return this.da(result);
  };
  function ByteWriteChannel$flushAndClose$ref($boundThis) {
    this.d1v_1 = $boundThis;
  }
  protoOf(ByteWriteChannel$flushAndClose$ref).e1v = function ($completion) {
    return this.d1v_1.r1m($completion);
  };
  protoOf(ByteWriteChannel$flushAndClose$ref).zb = function ($completion) {
    return this.e1v($completion);
  };
  function ByteWriteChannel$flushAndClose$ref_0($boundThis) {
    var i = new ByteWriteChannel$flushAndClose$ref($boundThis);
    var l = function ($completion) {
      return i.e1v($completion);
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
    this.n1v_1 = $block;
    this.o1v_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(writer$slambda).i1w = function ($this$launch, $completion) {
    var tmp = this.m1g($this$launch, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(writer$slambda).ua = function (p1, $completion) {
    return this.i1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(writer$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 14;
            this.q1v_1 = Job(get_job(this.p1v_1.qr()));
            this.m9_1 = 1;
            continue $sm;
          case 1:
            this.n9_1 = 4;
            this.n9_1 = 3;
            this.m9_1 = 2;
            suspendResult = this.n1v_1(new WriterScope(this.o1v_1, this.p1v_1.qr().ij(this.q1v_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q1v_1.nz();
            var tmp_0 = this;
            var tmp_1;
            if (get_job(this.p1v_1.qr()).ms()) {
              this.o1v_1.s1m(get_job(this.p1v_1.qr()).ps());
              tmp_1 = Unit_instance;
            }

            tmp_0.r1v_1 = tmp_1;
            this.n9_1 = 14;
            this.m9_1 = 9;
            continue $sm;
          case 3:
            this.n9_1 = 4;
            var tmp_2 = this.p9_1;
            if (tmp_2 instanceof Error) {
              this.s1v_1 = this.p9_1;
              var tmp_3 = this;
              cancel(this.q1v_1, 'Exception thrown while writing to channel', this.s1v_1);
              this.o1v_1.s1m(this.s1v_1);
              tmp_3.r1v_1 = Unit_instance;
              this.n9_1 = 14;
              this.m9_1 = 9;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 4:
            this.n9_1 = 14;
            this.t1v_1 = this.p9_1;
            this.m9_1 = 5;
            suspendResult = this.q1v_1.oz(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp_4 = this;
            tmp_4.u1v_1 = this.p1v_1;
            this.v1v_1 = this.u1v_1;
            this.n9_1 = 7;
            var tmp_5 = this;
            tmp_5.x1v_1 = Companion_instance;
            var tmp_6 = this;
            tmp_6.y1v_1 = this.v1v_1;
            this.z1v_1 = this.y1v_1;
            this.m9_1 = 6;
            suspendResult = this.o1v_1.r1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.a1w_1 = Unit_instance;
            var tmp_7 = this;
            this.x1v_1;
            var value = this.a1w_1;
            tmp_7.w1v_1 = _Result___init__impl__xyqfz8(value);
            this.n9_1 = 14;
            this.m9_1 = 8;
            continue $sm;
          case 7:
            this.n9_1 = 14;
            var tmp_8 = this.p9_1;
            if (tmp_8 instanceof Error) {
              this.b1w_1 = this.p9_1;
              var tmp_9 = this;
              var exception = this.b1w_1;
              tmp_9.w1v_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.m9_1 = 8;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 8:
            this.n9_1 = 14;
            throw this.t1v_1;
          case 9:
            this.n9_1 = 14;
            this.m9_1 = 10;
            suspendResult = this.q1v_1.oz(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            var tmp_10 = this;
            tmp_10.c1w_1 = this.p1v_1;
            this.d1w_1 = this.c1w_1;
            this.n9_1 = 12;
            var tmp_11 = this;
            tmp_11.f1w_1 = Companion_instance;
            var tmp_12 = this;
            tmp_12.g1w_1 = this.d1w_1;
            this.h1w_1 = this.g1w_1;
            this.m9_1 = 11;
            suspendResult = this.o1v_1.r1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            var tmp_13 = this;
            this.f1w_1;
            tmp_13.e1w_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.n9_1 = 14;
            this.m9_1 = 13;
            continue $sm;
          case 12:
            this.n9_1 = 14;
            var tmp_14 = this.p9_1;
            if (tmp_14 instanceof Error) {
              var e = this.p9_1;
              var tmp_15 = this;
              tmp_15.e1w_1 = _Result___init__impl__xyqfz8(createFailure(e));
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
  protoOf(writer$slambda).m1g = function ($this$launch, completion) {
    var i = new writer$slambda(this.n1v_1, this.o1v_1, completion);
    i.p1v_1 = $this$launch;
    return i;
  };
  function writer$slambda_0($block, $channel, resultContinuation) {
    var i = new writer$slambda($block, $channel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.i1w($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function writer$lambda($channel) {
    return function (it) {
      var tmp;
      if (!(it == null) && !$channel.l1m()) {
        $channel.s1m(it);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function $writePacketCOROUTINE$21(_this__u8e3s4, source, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1v_1 = _this__u8e3s4;
    this.b1v_1 = source;
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
            if (!!this.b1v_1.b1h()) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.a1v_1.k1m().o1i(this.b1v_1, get_remaining(this.b1v_1));
            this.m9_1 = 2;
            suspendResult = flushIfNeeded(this.a1v_1, this);
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
    this.i1m_1 = origin;
  }
  protoOf(CloseToken).j1w = function (wrap) {
    var tmp0_subject = this.i1m_1;
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, CopyableThrowable) : false) {
        tmp = this.i1m_1.xz();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException_init_$Create$(this.i1m_1.message, this.i1m_1);
        } else {
          tmp = wrap(this.i1m_1);
        }
      }
    }
    return tmp;
  };
  protoOf(CloseToken).n1m = function (wrap, $super) {
    var tmp;
    if (wrap === VOID) {
      tmp = ClosedByteChannelException$_init_$ref_yjp351();
    } else {
      tmp = wrap;
    }
    wrap = tmp;
    return $super === VOID ? this.j1w(wrap) : $super.j1w.call(this, wrap);
  };
  protoOf(CloseToken).j1m = function (wrap) {
    var tmp0_safe_receiver = this.j1w(wrap);
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
    $this.n1w_1 = $this.n1w_1.z2($this.m1w_1.a3($this.l1w_1.s()));
    $this.m1w_1 = $this.l1w_1.s();
  }
  function $awaitContentCOROUTINE$22(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w1w_1 = _this__u8e3s4;
    this.x1w_1 = min;
  }
  protoOf($awaitContentCOROUTINE$22).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            if (this.w1w_1.h1m().s().e1(toLong(this.x1w_1)) >= 0) {
              this.y1w_1 = true;
              this.m9_1 = 2;
              continue $sm;
            } else {
              this.m9_1 = 1;
              suspendResult = this.w1w_1.k1w_1.p1m(this.x1w_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.y1w_1 = suspendResult;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return this.y1w_1;
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
    this.k1w_1 = delegate;
    this.l1w_1 = new Buffer();
    this.m1w_1 = new Long(0, 0);
    this.n1w_1 = new Long(0, 0);
  }
  protoOf(CountedByteReadChannel).z1w = function () {
    updateConsumed(this);
    return this.n1w_1;
  };
  protoOf(CountedByteReadChannel).m1m = function () {
    return this.k1w_1.m1m();
  };
  protoOf(CountedByteReadChannel).o1m = function () {
    return this.l1w_1.b1h() && this.k1w_1.o1m();
  };
  protoOf(CountedByteReadChannel).h1m = function () {
    updateConsumed(this);
    var appended = this.l1w_1.t1i(this.k1w_1.h1m());
    this.m1w_1 = this.m1w_1.z2(appended);
    return this.l1w_1;
  };
  protoOf(CountedByteReadChannel).p1m = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$22(this, min, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(CountedByteReadChannel).s1m = function (cause) {
    this.k1w_1.s1m(cause);
    this.l1w_1.q4();
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
    if ($this === Companion_getInstance_1().l1q_1) {
      tmp = 'CR';
    } else if ($this === Companion_getInstance_1().m1q_1) {
      tmp = 'LF';
    } else if ($this === Companion_getInstance_1().n1q_1) {
      tmp = 'CRLF';
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = Companion_getInstance_1().p1q_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        var it = element.a1x_1;
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
    this.l1q_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.m1q_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.n1q_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.o1q_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.p1q_1 = listOf([new LineEndingMode(this.l1q_1), new LineEndingMode(this.m1q_1), new LineEndingMode(this.n1q_1)]);
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
    if (!($this === (other instanceof LineEndingMode ? other.a1x_1 : THROW_CCE())))
      return false;
    return true;
  }
  function LineEndingMode(mode) {
    Companion_getInstance_1();
    this.a1x_1 = mode;
  }
  protoOf(LineEndingMode).toString = function () {
    return LineEndingMode__toString_impl_j4h76r(this.a1x_1);
  };
  protoOf(LineEndingMode).hashCode = function () {
    return LineEndingMode__hashCode_impl_2mopm4(this.a1x_1);
  };
  protoOf(LineEndingMode).equals = function (other) {
    return LineEndingMode__equals_impl_qyr4nk(this.a1x_1, other);
  };
  function SourceByteReadChannel(source) {
    this.b1x_1 = source;
    this.c1x_1 = null;
  }
  protoOf(SourceByteReadChannel).m1m = function () {
    var tmp0_safe_receiver = this.c1x_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n1m();
  };
  protoOf(SourceByteReadChannel).o1m = function () {
    return this.b1x_1.b1h();
  };
  protoOf(SourceByteReadChannel).h1m = function () {
    var tmp0_safe_receiver = this.m1m();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.b1x_1.a1h();
  };
  protoOf(SourceByteReadChannel).p1m = function (min, $completion) {
    var tmp0_safe_receiver = this.m1m();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.b1x_1.d1h(toLong(min));
  };
  protoOf(SourceByteReadChannel).s1m = function (cause) {
    if (!(this.c1x_1 == null))
      return Unit_instance;
    this.b1x_1.q4();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.c1x_1 = new CloseToken(IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  };
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? 2147483647 : max;
    var tmp0 = toLong(max);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = input.a1h().s();
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
    return !_this__u8e3s4.b1h();
  }
  function readBytes(_this__u8e3s4, count) {
    count = count === VOID ? _this__u8e3s4.s().j1() : count;
    return readByteArray(_this__u8e3s4, count);
  }
  function BytePacketBuilder() {
    return new Buffer();
  }
  function writePacket_0(_this__u8e3s4, packet) {
    _this__u8e3s4.t1i(packet);
  }
  function build(_this__u8e3s4) {
    return _this__u8e3s4.a1h();
  }
  function writeFully_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    _this__u8e3s4.k1i(buffer, offset, offset + length | 0);
  }
  function get_size(_this__u8e3s4) {
    return _this__u8e3s4.a1h().s().j1();
  }
  var ByteReadPacketEmpty;
  function get_remaining(_this__u8e3s4) {
    _init_properties_ByteReadPacket_kt__28475y();
    return _this__u8e3s4.a1h().s();
  }
  function discard_0(_this__u8e3s4, count) {
    count = count === VOID ? new Long(-1, 2147483647) : count;
    _init_properties_ByteReadPacket_kt__28475y();
    _this__u8e3s4.d1h(count);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4);
    var countToDiscard = count.e1(b) <= 0 ? count : b;
    _this__u8e3s4.a1h().y1h(countToDiscard);
    return countToDiscard;
  }
  function takeWhile(_this__u8e3s4, block) {
    _init_properties_ByteReadPacket_kt__28475y();
    while (!_this__u8e3s4.b1h() && block(_this__u8e3s4.a1h())) {
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
    var result = _this__u8e3s4.z1h(buffer, offset, offset + length | 0);
    return result === -1 ? 0 : result;
  }
  function toByteArray_0(_this__u8e3s4, charset) {
    charset = charset === VOID ? Charsets_getInstance().d1x_1 : charset;
    if (charset.equals(Charsets_getInstance().d1x_1))
      return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
    return encodeToByteArray_0(charset.g1x(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function readText_0(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().d1x_1 : charset;
    max = max === VOID ? 2147483647 : max;
    if (charset.equals(Charsets_getInstance().d1x_1)) {
      if (max === 2147483647)
        return readString_0(_this__u8e3s4);
      var tmp0 = _this__u8e3s4.a1h().s();
      // Inline function 'kotlin.math.min' call
      var b = toLong(max);
      var count = tmp0.e1(b) <= 0 ? tmp0 : b;
      return readString_1(_this__u8e3s4, count);
    }
    return decode(charset.h1x(), _this__u8e3s4, max);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().d1x_1 : charset;
    if (charset === Charsets_getInstance().d1x_1) {
      return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
    }
    encodeToImpl(charset.g1x(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).l1x = function () {
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
  protoOf(NoPoolImpl).t1x = function (instance) {
    return Unit_instance;
  };
  protoOf(NoPoolImpl).lu = function () {
    return Unit_instance;
  };
  function Companion_2() {
  }
  protoOf(Companion_2).u1x = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().d1x_1;
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
      return Charsets_getInstance().e1x_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  protoOf(Companion_2).v1x = function (charset) {
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
    this.f1x_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.f1x_1 === other.f1x_1;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.f1x_1);
  };
  protoOf(Charset).toString = function () {
    return this.f1x_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.f1x_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.d1x_1 = new CharsetImpl('UTF-8');
    this.e1x_1 = new CharsetImpl('ISO-8859-1');
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
    this.w1x_1 = _charset;
  }
  function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetEncoder(_charset) {
    this.x1x_1 = _charset;
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
  }
  protoOf(CharsetImpl).g1x = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).h1x = function () {
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
    this.a1y_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.a1y_1.toString() + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.a1y_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetEncoderImpl ? other : THROW_CCE();
    if (!this.a1y_1.equals(tmp0_other_with_cast.a1y_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.c1y_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.c1y_1.toString() + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.c1y_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetDecoderImpl ? other : THROW_CCE();
    if (!this.c1y_1.equals(tmp0_other_with_cast.c1y_1))
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
    if (get_charset(_this__u8e3s4).equals(Charsets_getInstance().e1x_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    if (!(get_charset(_this__u8e3s4) === Charsets_getInstance().d1x_1)) {
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init_$Create$(toString_1(message_0));
    }
    var encoder = new TextEncoder();
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
    var result = encoder.encode(tmp$ret$5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    dst.n1i(result);
    return result.length;
  }
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.x1x_1;
  }
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset_0(_this__u8e3s4)), true);
    var tmp0 = input.a1h().s();
    // Inline function 'kotlin.comparisons.minOf' call
    var b = toLong(max);
    var count = tmp0.e1(b) <= 0 ? tmp0 : b;
    var tmp = readByteArray(input, count.j1());
    var array = tmp instanceof Int8Array ? tmp : THROW_CCE();
    var tmp_0;
    try {
      tmp_0 = decoder.d1y(array);
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
    return _this__u8e3s4.w1x_1;
  }
  function forName(_this__u8e3s4, name) {
    return Companion_instance_3.u1x(name);
  }
  function isSupported(_this__u8e3s4, name) {
    return Companion_instance_3.v1x(name);
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
    this.e1y_1 = $this_toKtor;
  }
  protoOf(toKtor$1).d1y = function (buffer) {
    return this.e1y_1.decode(buffer);
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
    this.f1y_1 = fatal;
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
  protoOf(TextDecoderFallback).d1y = function (buffer) {
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
          if (!!this.f1y_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException_init_$Create$(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.u1i(toByte(point >> 8));
        }
        builder.u1i(toByte(point & 255));
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
        dst.u1i(toByte(character));
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
    this.m1x_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.m1x_1;
    tmp.n1x_1 = Array(size);
    this.o1x_1 = 0;
  }
  protoOf(DefaultPool).p1x = function (instance) {
  };
  protoOf(DefaultPool).q1x = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).r1x = function (instance) {
  };
  protoOf(DefaultPool).s1x = function () {
    if (this.o1x_1 === 0)
      return this.l1x();
    this.o1x_1 = this.o1x_1 - 1 | 0;
    var idx = this.o1x_1;
    var tmp = this.n1x_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.n1x_1[idx] = null;
    return this.q1x(instance);
  };
  protoOf(DefaultPool).t1x = function (instance) {
    this.r1x(instance);
    if (this.o1x_1 === this.m1x_1) {
      this.p1x(instance);
    } else {
      var _unary__edvuaz = this.o1x_1;
      this.o1x_1 = _unary__edvuaz + 1 | 0;
      this.n1x_1[_unary__edvuaz] = instance;
    }
  };
  protoOf(DefaultPool).lu = function () {
    var inductionVariable = 0;
    var last = this.o1x_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.n1x_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.n1x_1[i] = null;
        this.p1x(instance);
      }
       while (inductionVariable < last);
    this.o1x_1 = 0;
  };
  //region block: post-declaration
  protoOf(Read).f1k = resume;
  protoOf(Read).g1k = resume_0;
  protoOf(Write).f1k = resume;
  protoOf(Write).g1k = resume_0;
  protoOf(ByteChannel).q1m = awaitContent$default;
  protoOf(ByteReadChannel$Companion$Empty$1).q1m = awaitContent$default;
  protoOf(CountedByteReadChannel).q1m = awaitContent$default;
  protoOf(SourceByteReadChannel).q1m = awaitContent$default;
  protoOf(DefaultPool).q4 = close;
  protoOf(NoPoolImpl).q4 = close;
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
