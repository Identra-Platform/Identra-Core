(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    globalThis['kotlinx-coroutines-core'] = factory(typeof globalThis['kotlinx-coroutines-core'] === 'undefined' ? {} : globalThis['kotlinx-coroutines-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.w5;
  var protoOf = kotlin_kotlin.$_$.wc;
  var THROW_CCE = kotlin_kotlin.$_$.ih;
  var Continuation = kotlin_kotlin.$_$.qa;
  var initMetadataForClass = kotlin_kotlin.$_$.sb;
  var VOID = kotlin_kotlin.$_$.j;
  var toString = kotlin_kotlin.$_$.ad;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.mi;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var Companion_instance = kotlin_kotlin.$_$.r5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.i3;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.f;
  var intercepted = kotlin_kotlin.$_$.ia;
  var CoroutineImpl = kotlin_kotlin.$_$.wa;
  var copyToArray = kotlin_kotlin.$_$.j7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.fa;
  var emptyList = kotlin_kotlin.$_$.o7;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ub;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.b5;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.ha;
  var initMetadataForInterface = kotlin_kotlin.$_$.wb;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var isInterface = kotlin_kotlin.$_$.hc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var toString_0 = kotlin_kotlin.$_$.ni;
  var initMetadataForObject = kotlin_kotlin.$_$.yb;
  var hashCode = kotlin_kotlin.$_$.rb;
  var equals = kotlin_kotlin.$_$.mb;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.j3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.m3;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.ma;
  var Key_instance = kotlin_kotlin.$_$.a5;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.la;
  var get = kotlin_kotlin.$_$.na;
  var minusKey = kotlin_kotlin.$_$.oa;
  var ContinuationInterceptor = kotlin_kotlin.$_$.pa;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.s2;
  var addSuppressed = kotlin_kotlin.$_$.vh;
  var getStringHashCode = kotlin_kotlin.$_$.qb;
  var Enum = kotlin_kotlin.$_$.xg;
  var startCoroutine = kotlin_kotlin.$_$.xa;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ii;
  var Long = kotlin_kotlin.$_$.ch;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.q;
  var RuntimeException = kotlin_kotlin.$_$.hh;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.r2;
  var captureStack = kotlin_kotlin.$_$.eb;
  var Error_0 = kotlin_kotlin.$_$.yg;
  var Error_init_$Init$ = kotlin_kotlin.$_$.o1;
  var Element = kotlin_kotlin.$_$.ua;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.m1;
  var CancellationException = kotlin_kotlin.$_$.ea;
  var ArrayList = kotlin_kotlin.$_$.x5;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.h2;
  var plus = kotlin_kotlin.$_$.va;
  var get_0 = kotlin_kotlin.$_$.sa;
  var fold = kotlin_kotlin.$_$.ra;
  var minusKey_0 = kotlin_kotlin.$_$.ta;
  var anyToString = kotlin_kotlin.$_$.bb;
  var createFailure = kotlin_kotlin.$_$.zh;
  var UnsupportedOperationException = kotlin_kotlin.$_$.uh;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var ensureNotNull = kotlin_kotlin.$_$.ai;
  var toLong = kotlin_kotlin.$_$.yc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var listOf = kotlin_kotlin.$_$.p8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.j2;
  var compareTo = kotlin_kotlin.$_$.kb;
  var last = kotlin_kotlin.$_$.te;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.tb;
  var IllegalStateException = kotlin_kotlin.$_$.bh;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.e2;
  var NoSuchElementException = kotlin_kotlin.$_$.dh;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.k2;
  var getKClass = kotlin_kotlin.$_$.g;
  var Unit = kotlin_kotlin.$_$.th;
  var Exception = kotlin_kotlin.$_$.zg;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.u1;
  var defineProp = kotlin_kotlin.$_$.lb;
  var toLongOrNull = kotlin_kotlin.$_$.zf;
  var createCoroutineUnintercepted_0 = kotlin_kotlin.$_$.ga;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.ja;
  var plus_0 = kotlin_kotlin.$_$.y8;
  var KtList = kotlin_kotlin.$_$.d6;
  var listOf_0 = kotlin_kotlin.$_$.o8;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.t1;
  var removeFirstOrNull = kotlin_kotlin.$_$.z8;
  var KtMutableList = kotlin_kotlin.$_$.h6;
  var coerceIn = kotlin_kotlin.$_$.gd;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.h1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.f1;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.p2;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.d1;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.ys(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.ys.call(this, cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.ts(onCancelling, invokeImmediately, handler) : $super.ts.call(this, onCancelling, invokeImmediately, handler);
  }
  initMetadataForInterface(Job, 'Job', VOID, VOID, [Element], [0]);
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Job, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], [0]);
  initMetadataForInterface(NotCompleted, 'NotCompleted');
  initMetadataForInterface(CancelHandler, 'CancelHandler', VOID, VOID, [NotCompleted]);
  initMetadataForClass(DisposeHandlersOnCancel, 'DisposeHandlersOnCancel', VOID, VOID, [CancelHandler]);
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode', LockFreeLinkedListNode);
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(JobNode, 'JobNode', VOID, LockFreeLinkedListNode, [LockFreeLinkedListNode, Incomplete]);
  initMetadataForClass(AwaitAllNode, 'AwaitAllNode', VOID, JobNode);
  initMetadataForClass(AwaitAll, 'AwaitAll', VOID, VOID, VOID, [0]);
  initMetadataForCoroutine($awaitAllCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(StandaloneCoroutine, 'StandaloneCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', VOID, StandaloneCoroutine, VOID, [0]);
  initMetadataForCoroutine($awaitCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(DeferredCoroutine, 'DeferredCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, Job], [0]);
  initMetadataForClass(LazyDeferredCoroutine, 'LazyDeferredCoroutine', VOID, DeferredCoroutine, VOID, [0]);
  initMetadataForInterface(CancellableContinuation, 'CancellableContinuation', VOID, VOID, [Continuation]);
  initMetadataForClass(DisposeOnCancel, 'DisposeOnCancel', VOID, VOID, [CancelHandler]);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForInterface(Waiter, 'Waiter');
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [DispatchedTask, CancellableContinuation, Waiter]);
  initMetadataForClass(UserSupplied, 'UserSupplied', VOID, VOID, [CancelHandler]);
  initMetadataForObject(Active, 'Active', VOID, VOID, [NotCompleted]);
  initMetadataForClass(CompletedContinuation, 'CompletedContinuation');
  initMetadataForClass(ChildContinuation, 'ChildContinuation', VOID, JobNode);
  initMetadataForCoroutine($awaitCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(CompletableDeferredImpl, 'CompletableDeferredImpl', VOID, JobSupport, [JobSupport, Job], [0]);
  initMetadataForInterface(CompletableJob, 'CompletableJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForClass(CancelledContinuation, 'CancelledContinuation', VOID, CompletedExceptionally);
  initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  initMetadataForObject(Key_0, 'Key');
  initMetadataForObject(Key_1, 'Key');
  initMetadataForClass(CoroutineName, 'CoroutineName', VOID, AbstractCoroutineContextElement);
  initMetadataForObject(GlobalScope, 'GlobalScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  initMetadataForInterface(CopyableThrowable, 'CopyableThrowable');
  initMetadataForInterface(Delay, 'Delay', VOID, VOID, VOID, [1]);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForObject(Key_2, 'Key');
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle');
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(LockFreeLinkedListHead, 'LockFreeLinkedListHead', LockFreeLinkedListHead, LockFreeLinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LockFreeLinkedListHead, [LockFreeLinkedListHead, Incomplete]);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [SynchronizedObject, Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForClass(AwaitContinuation, 'AwaitContinuation', VOID, CancellableContinuationImpl);
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobNode);
  initMetadataForClass(ResumeOnCompletion, 'ResumeOnCompletion', VOID, JobNode);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobNode);
  initMetadataForClass(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', VOID, JobNode);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(JobImpl, 'JobImpl', VOID, JobSupport, [JobSupport, CompletableJob], [0]);
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(SupervisorJobImpl, 'SupervisorJobImpl', VOID, JobImpl, VOID, [0]);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException, [CancellationException, CopyableThrowable]);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForObject(Key_3, 'Key');
  initMetadataForClass(BufferOverflow, 'BufferOverflow', VOID, Enum);
  initMetadataForClass(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode');
  initMetadataForClass(Segment, 'Segment', VOID, ConcurrentLinkedListNode, [ConcurrentLinkedListNode, NotCompleted]);
  initMetadataForClass(ChannelSegment, 'ChannelSegment', VOID, Segment);
  initMetadataForCoroutine($hasNextCOROUTINE$6, CoroutineImpl);
  initMetadataForClass(SendBroadcast, 'SendBroadcast', VOID, VOID, [Waiter]);
  initMetadataForClass(BufferedChannelIterator, 'BufferedChannelIterator', VOID, VOID, [Waiter], [0, 3]);
  initMetadataForCoroutine($sendCOROUTINE$3, CoroutineImpl);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.z18(cause) : $super.z18.call(this, cause);
  }
  initMetadataForInterface(SendChannel, 'SendChannel', VOID, VOID, VOID, [1]);
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.ys(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.ys.call(this, cause);
    }
    return tmp;
  }
  initMetadataForInterface(ReceiveChannel, 'ReceiveChannel', VOID, VOID, VOID, [0]);
  initMetadataForClass(BufferedChannel, 'BufferedChannel', VOID, VOID, [SendChannel, ReceiveChannel], [1, 4, 0, 3]);
  initMetadataForClass(WaiterEB, 'WaiterEB');
  initMetadataForClass(ReceiveCatching, 'ReceiveCatching', VOID, VOID, [Waiter]);
  initMetadataForObject(Factory, 'Factory');
  initMetadataForClass(Failed, 'Failed', Failed);
  initMetadataForClass(Closed, 'Closed', VOID, Failed);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ChannelResult, 'ChannelResult');
  initMetadataForClass(ClosedSendChannelException, 'ClosedSendChannelException', VOID, IllegalStateException);
  initMetadataForClass(ClosedReceiveChannelException, 'ClosedReceiveChannelException', VOID, NoSuchElementException);
  initMetadataForClass(ChannelCoroutine, 'ChannelCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, SendChannel, ReceiveChannel], [1, 0]);
  initMetadataForClass(ConflatedBufferedChannel, 'ConflatedBufferedChannel', VOID, BufferedChannel, VOID, [1, 0]);
  initMetadataForInterface(ProducerScope, 'ProducerScope', VOID, VOID, [CoroutineScope, SendChannel], [1]);
  initMetadataForClass(ProducerCoroutine, 'ProducerCoroutine', VOID, ChannelCoroutine, [ChannelCoroutine, ProducerScope], [1, 0]);
  initMetadataForCoroutine($collectCOROUTINE$10, CoroutineImpl);
  initMetadataForClass(asFlow$$inlined$unsafeFlow$1, VOID, VOID, VOID, VOID, [1]);
  initMetadataForInterface(FlowCollector, 'FlowCollector', VOID, VOID, VOID, [1]);
  initMetadataForCoroutine($emitCOROUTINE$21, CoroutineImpl);
  initMetadataForClass(firstOrNull$$inlined$collectWhile$1, VOID, VOID, VOID, [FlowCollector], [1]);
  initMetadataForCoroutine($firstOrNullCOROUTINE$20, CoroutineImpl);
  initMetadataForClass(SegmentOrClosed, 'SegmentOrClosed');
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [DispatchedTask, Continuation]);
  initMetadataForClass(DispatchException, 'DispatchException', VOID, Exception);
  initMetadataForClass(UndeliveredElementException, 'UndeliveredElementException', VOID, RuntimeException);
  initMetadataForClass(ContextScope, 'ContextScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForInterface(SelectInstance, 'SelectInstance');
  initMetadataForClass(ClauseData, 'ClauseData', VOID, VOID, VOID, [1]);
  initMetadataForClass(SelectImplementation, 'SelectImplementation', VOID, VOID, [CancelHandler, SelectInstance, Waiter], [0, 2]);
  initMetadataForClass(TrySelectDetailedResult, 'TrySelectDetailedResult', VOID, Enum);
  initMetadataForClass(CancellableContinuationWithOwner, 'CancellableContinuationWithOwner', VOID, VOID, [CancellableContinuation, Waiter]);
  initMetadataForClass(SemaphoreAndMutexImpl, 'SemaphoreAndMutexImpl', VOID, VOID, VOID, [0]);
  initMetadataForClass(MutexImpl, 'MutexImpl', VOID, SemaphoreAndMutexImpl, VOID, [1, 0]);
  initMetadataForClass(SemaphoreSegment, 'SemaphoreSegment', VOID, Segment);
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [KtMutableList]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(ClearTimeout, 'ClearTimeout', VOID, VOID, [CancelHandler]);
  initMetadataForClass(WindowClearTimeout, 'WindowClearTimeout', VOID, ClearTimeout);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, [CoroutineDispatcher, Delay], [1]);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForClass(AbortFlowException, 'AbortFlowException', VOID, CancellationException);
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForClass(ListClosed, 'ListClosed', VOID, LockFreeLinkedListNode);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.mr(parentContext.la(Key_instance_3));
    }
    this.pr_1 = parentContext.ij(this);
  }
  protoOf(AbstractCoroutine).s9 = function () {
    return this.pr_1;
  };
  protoOf(AbstractCoroutine).qr = function () {
    return this.pr_1;
  };
  protoOf(AbstractCoroutine).rr = function () {
    return protoOf(JobSupport).rr.call(this);
  };
  protoOf(AbstractCoroutine).sr = function (value) {
  };
  protoOf(AbstractCoroutine).tr = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).ur = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).vr = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.tr(state.wr_1, state.yr());
    } else {
      this.sr((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).ha = function (result) {
    var state = this.zr(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.as(state);
  };
  protoOf(AbstractCoroutine).as = function (state) {
    return this.bs(state);
  };
  protoOf(AbstractCoroutine).cs = function (exception) {
    handleCoroutineException(this.pr_1, exception);
  };
  protoOf(AbstractCoroutine).ds = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.pr_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).ds.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).ds.call(this);
  };
  protoOf(AbstractCoroutine).es = function (start, receiver, block) {
    start.hs(block, receiver, this);
  };
  function awaitAll(_this__u8e3s4, $completion) {
    var tmp = new $awaitAllCOROUTINE$0(_this__u8e3s4, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function DisposeHandlersOnCancel($outer, nodes) {
    this.au_1 = $outer;
    this.zt_1 = nodes;
  }
  protoOf(DisposeHandlersOnCancel).bu = function () {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.zt_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      element.ku().lu();
    }
  };
  protoOf(DisposeHandlersOnCancel).mu = function (cause) {
    this.bu();
  };
  protoOf(DisposeHandlersOnCancel).toString = function () {
    return 'DisposeHandlersOnCancel[' + toString(this.zt_1) + ']';
  };
  function AwaitAllNode($outer, continuation) {
    this.ju_1 = $outer;
    JobNode.call(this);
    this.gu_1 = continuation;
    this.iu_1 = atomic$ref$1(null);
  }
  protoOf(AwaitAllNode).ku = function () {
    var tmp = this.hu_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('handle');
    }
  };
  protoOf(AwaitAllNode).nu = function (value) {
    this.iu_1.kotlinx$atomicfu$value = value;
  };
  protoOf(AwaitAllNode).ou = function () {
    return this.iu_1.kotlinx$atomicfu$value;
  };
  protoOf(AwaitAllNode).pu = function () {
    return false;
  };
  protoOf(AwaitAllNode).mu = function (cause) {
    if (!(cause == null)) {
      var token = this.gu_1.tu(cause);
      if (!(token == null)) {
        this.gu_1.uu(token);
        var tmp0_safe_receiver = this.ou();
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.bu();
        }
      }
    } else if (this.ju_1.ru_1.atomicfu$decrementAndGet() === 0) {
      var tmp2 = this.gu_1;
      // Inline function 'kotlin.collections.map' call
      var this_0 = this.ju_1.qu_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(this_0.length);
      var inductionVariable = 0;
      var last = this_0.length;
      while (inductionVariable < last) {
        var item = this_0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0 = item.su();
        destination.n(tmp$ret$0);
      }
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$3 = _Result___init__impl__xyqfz8(destination);
      tmp2.ha(tmp$ret$3);
    }
  };
  function AwaitAll(deferreds) {
    this.qu_1 = deferreds;
    this.ru_1 = atomic$int$1(this.qu_1.length);
  }
  protoOf(AwaitAll).hv = function ($completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.ov();
    var tmp = 0;
    var tmp_0 = this.qu_1.length;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var deferred = this.qu_1[tmp_2];
      deferred.ns();
      // Inline function 'kotlin.apply' call
      var this_0 = new AwaitAllNode(this, cancellable);
      this_0.hu_1 = invokeOnCompletion(deferred, VOID, this_0);
      tmp_1[tmp_2] = this_0;
      tmp = tmp + 1 | 0;
    }
    var nodes = tmp_1;
    var disposer = new DisposeHandlersOnCancel(this, nodes);
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = nodes.length;
    while (inductionVariable < last) {
      var element = nodes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      element.nu(disposer);
    }
    if (cancellable.ls()) {
      disposer.bu();
    } else {
      invokeOnCancellation(cancellable, disposer);
    }
    return cancellable.pv();
  };
  function $awaitAllCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xt_1 = _this__u8e3s4;
  }
  protoOf($awaitAllCOROUTINE$0).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            if (this.xt_1.h()) {
              this.yt_1 = emptyList();
              this.m9_1 = 2;
              continue $sm;
            } else {
              this.m9_1 = 1;
              var this_0 = this.xt_1;
              suspendResult = (new AwaitAll(copyToArray(this_0))).hv(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.yt_1 = suspendResult;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return this.yt_1;
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
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.qv() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.es(start, coroutine, block);
    return coroutine;
  }
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.qv() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.es(start, coroutine, block);
    return coroutine;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).kt = function (exception) {
    handleCoroutineException(this.pr_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.xv_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).os = function () {
    startCoroutineCancellable_0(this.xv_1, this);
  };
  function $awaitCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gw_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$1).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.gw_1.ot(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : !(suspendResult == null)) ? suspendResult : THROW_CCE();
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
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).su = function () {
    var tmp = this.nt();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(DeferredCoroutine).kw = function ($completion) {
    var tmp = new $awaitCOROUTINE$1(this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.ow_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).os = function () {
    startCoroutineCancellable_0(this.ow_1, this);
  };
  function CancellableContinuation() {
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    return invokeOnCancellation(_this__u8e3s4, new DisposeOnCancel(handle));
  }
  function invokeOnCancellation(_this__u8e3s4, handler) {
    var tmp;
    if (_this__u8e3s4 instanceof CancellableContinuationImpl) {
      _this__u8e3s4.tw(handler);
      tmp = Unit_instance;
    } else {
      throw UnsupportedOperationException_init_$Create$('third-party implementation of CancellableContinuation is not supported');
    }
    return tmp;
  }
  function DisposeOnCancel(handle) {
    this.uw_1 = handle;
  }
  protoOf(DisposeOnCancel).mu = function (cause) {
    return this.uw_1.lu();
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + toString(this.uw_1) + ']';
  };
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, 1);
    }
    var tmp0_safe_receiver = delegate.bx();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver.cx()) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, 2);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_parentHandle__f8dcex($this) {
    return $this.nv_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.ks();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.ex_1)) {
      var tmp_0 = $this.jv_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).dx();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.jv_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.fx(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.lv_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    if (!!(index === 536870911)) {
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      segment.kx(index, cause, $this.s9());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.s9(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.lv_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (1 << 29) + (cur & 536870911) | 0;
          if ($this.lv_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.lv_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (2 << 29) + (cur & 536870911) | 0;
          if ($this.lv_1.atomicfu$compareAndSet(cur, tmp$ret$2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.s9().la(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var handle = invokeOnCompletion(parent, VOID, new ChildContinuation($this));
    $this.nv_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.mv_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.mv_1.atomicfu$compareAndSet(state, handler))
          return Unit_instance;
      } else {
        var tmp;
        if (!(state == null) ? isInterface(state, CancelHandler) : false) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.tx()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.wr_1;
              if (isInterface(handler, CancelHandler)) {
                $this.qx(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.mx_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              if (state.rx()) {
                $this.qx(handler, state.px_1);
                return Unit_instance;
              }
              var update = state.sx(VOID, handler);
              if ($this.mv_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.mv_1.atomicfu$compareAndSet(state, update_0))
                return Unit_instance;
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) && idempotent == null) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = isInterface(state, CancelHandler);
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, isInterface(state, CancelHandler) ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.mv_1;
    while (true) {
      var tmp1 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp1 == null) ? isInterface(tmp1, NotCompleted) : false) {
          var update = resumedState($this, tmp1, proposedUpdate, $this.ex_1, onCancellation, idempotent);
          if (!$this.mv_1.atomicfu$compareAndSet(tmp1, update)) {
            break $l$block;
          }
          detachChildIfNonReusable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp1 instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) && tmp1.ox_1 === idempotent) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonReusable($this) {
    if (!isReusable($this)) {
      $this.ux();
    }
  }
  function CancellableContinuationImpl$resume$lambda($onCancellation) {
    return function (cause, _unused_var__etf5q3, _unused_var__etf5q3_0) {
      $onCancellation(cause);
      return Unit_instance;
    };
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.jv_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.kv_1 = this.jv_1.s9();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$1 = (0 << 29) + 536870911 | 0;
    tmp.lv_1 = atomic$int$1(tmp$ret$1);
    this.mv_1 = atomic$ref$1(Active_instance);
    this.nv_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).vx = function () {
    return this.jv_1;
  };
  protoOf(CancellableContinuationImpl).s9 = function () {
    return this.kv_1;
  };
  protoOf(CancellableContinuationImpl).ks = function () {
    return this.mv_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).ls = function () {
    var tmp = this.ks();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).ms = function () {
    var tmp = this.ks();
    return tmp instanceof CancelledContinuation;
  };
  protoOf(CancellableContinuationImpl).ov = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.ls()) {
      handle.lu();
      this.nv_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).cx = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.mv_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.ox_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.ux();
      return false;
    }
    var tmp_0 = this.lv_1;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    tmp_0.kotlinx$atomicfu$value = (0 << 29) + 536870911 | 0;
    this.mv_1.kotlinx$atomicfu$value = Active_instance;
    return true;
  };
  protoOf(CancellableContinuationImpl).wx = function () {
    return this.ks();
  };
  protoOf(CancellableContinuationImpl).xx = function (takenState, cause) {
    var this_0 = this.mv_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            if (!!state.rx()) {
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.sx(VOID, VOID, VOID, VOID, cause);
            if (this.mv_1.atomicfu$compareAndSet(state, update)) {
              state.yx(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.mv_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).zx = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.mv_1;
    while (true) {
      var tmp1 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(!(tmp1 == null) ? isInterface(tmp1, NotCompleted) : false))
          return false;
        var tmp;
        if (isInterface(tmp1, CancelHandler)) {
          tmp = true;
        } else {
          tmp = tmp1 instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.mv_1.atomicfu$compareAndSet(tmp1, update)) {
          break $l$block;
        }
        if (isInterface(tmp1, CancelHandler)) {
          this.qx(tmp1, cause);
        } else {
          if (tmp1 instanceof Segment) {
            callSegmentOnCancellation(this, tmp1, cause);
          }
        }
        detachChildIfNonReusable(this);
        dispatchResume(this, this.ex_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).ay = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.zx(cause);
    detachChildIfNonReusable(this);
  };
  protoOf(CancellableContinuationImpl).qx = function (handler, cause) {
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      handler.mu(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.s9(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).by = function (onCancellation, cause, value) {
    try {
      onCancellation(cause, value, this.s9());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.s9(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).cy = function (parent) {
    return parent.ps();
  };
  protoOf(CancellableContinuationImpl).pv = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.dy();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.dy();
    }
    var state = this.ks();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.wr_1, this);
    if (get_isCancellableMode(this.ex_1)) {
      var job = this.s9().la(Key_instance_3);
      if (!(job == null) && !job.rr()) {
        var cause = job.ps();
        this.xx(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.ey(state);
  };
  protoOf(CancellableContinuationImpl).dy = function () {
    var tmp = this.jv_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fy(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.ux();
    this.zx(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).ha = function (result) {
    return this.gy(toState(result, this), this.ex_1);
  };
  protoOf(CancellableContinuationImpl).hy = function (value, onCancellation) {
    var tmp = this.ex_1;
    var tmp_0;
    if (onCancellation == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = CancellableContinuationImpl$resume$lambda(onCancellation);
    }
    return this.iy(value, tmp, tmp_0);
  };
  protoOf(CancellableContinuationImpl).sw = function (value, onCancellation) {
    return this.iy(value, this.ex_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).jy = function (segment, index) {
    var tmp0 = this.lv_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.index' call
        // Inline function 'kotlin.check' call
        if (!((cur & 536870911) === 536870911)) {
          var message = 'invokeOnCancellation should be called at most once';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlinx.coroutines.decision' call
        // Inline function 'kotlinx.coroutines.decisionAndIndex' call
        var upd = (cur >> 29 << 29) + index | 0;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    invokeOnCancellationImpl(this, segment);
  };
  protoOf(CancellableContinuationImpl).qw = function (handler) {
    return invokeOnCancellation(this, new UserSupplied(handler));
  };
  protoOf(CancellableContinuationImpl).tw = function (handler) {
    return invokeOnCancellationImpl(this, handler);
  };
  protoOf(CancellableContinuationImpl).iy = function (proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.mv_1;
    while (true) {
      var tmp1 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp1 == null) ? isInterface(tmp1, NotCompleted) : false) {
          var update = resumedState(this, tmp1, proposedUpdate, resumeMode, onCancellation, null);
          if (!this.mv_1.atomicfu$compareAndSet(tmp1, update)) {
            break $l$block;
          }
          detachChildIfNonReusable(this);
          dispatchResume(this, resumeMode);
          return Unit_instance;
        } else {
          if (tmp1 instanceof CancelledContinuation) {
            if (tmp1.ny()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                this.by(onCancellation, tmp1.wr_1, proposedUpdate);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError(this, proposedUpdate);
      }
    }
  };
  protoOf(CancellableContinuationImpl).gy = function (proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    if ($super === VOID) {
      this.iy(proposedUpdate, resumeMode, onCancellation);
      tmp = Unit_instance;
    } else {
      tmp = $super.iy.call(this, proposedUpdate, resumeMode, onCancellation);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).ux = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.lu();
    this.nv_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).pw = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).tu = function (exception) {
    return tryResumeImpl(this, new CompletedExceptionally(exception), null, null);
  };
  protoOf(CancellableContinuationImpl).uu = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.ex_1);
  };
  protoOf(CancellableContinuationImpl).rw = function (_this__u8e3s4, value) {
    var tmp = this.jv_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.ww_1) === _this__u8e3s4) {
      tmp_0 = 4;
    } else {
      tmp_0 = this.ex_1;
    }
    this.gy(value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).ey = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.lx_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).oy = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).oy.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.jv_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.py() + '(' + toDebugString(this.jv_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).py = function () {
    return 'CancellableContinuation';
  };
  function NotCompleted() {
  }
  function UserSupplied(handler) {
    this.sy_1 = handler;
  }
  protoOf(UserSupplied).mu = function (cause) {
    this.sy_1(cause);
  };
  protoOf(UserSupplied).toString = function () {
    return 'CancelHandler.UserSupplied[' + get_classSimpleName(this.sy_1) + '@' + get_hexAddress(this) + ']';
  };
  function CancelHandler() {
  }
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.lx_1 = result;
    this.mx_1 = cancelHandler;
    this.nx_1 = onCancellation;
    this.ox_1 = idempotentResume;
    this.px_1 = cancelCause;
  }
  protoOf(CompletedContinuation).rx = function () {
    return !(this.px_1 == null);
  };
  protoOf(CompletedContinuation).yx = function (cont, cause) {
    var tmp0_safe_receiver = this.mx_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.qx(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.nx_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.by(tmp1_safe_receiver, cause, this.lx_1);
    }
  };
  protoOf(CompletedContinuation).ty = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).sx = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.lx_1 : result;
    cancelHandler = cancelHandler === VOID ? this.mx_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.nx_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.ox_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.px_1 : cancelCause;
    return $super === VOID ? this.ty(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.ty.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.lx_1) + ', cancelHandler=' + toString_0(this.mx_1) + ', onCancellation=' + toString_0(this.nx_1) + ', idempotentResume=' + toString_0(this.ox_1) + ', cancelCause=' + toString_0(this.px_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.lx_1 == null ? 0 : hashCode(this.lx_1);
    result = imul(result, 31) + (this.mx_1 == null ? 0 : hashCode(this.mx_1)) | 0;
    result = imul(result, 31) + (this.nx_1 == null ? 0 : hashCode(this.nx_1)) | 0;
    result = imul(result, 31) + (this.ox_1 == null ? 0 : hashCode(this.ox_1)) | 0;
    result = imul(result, 31) + (this.px_1 == null ? 0 : hashCode(this.px_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.lx_1, tmp0_other_with_cast.lx_1))
      return false;
    if (!equals(this.mx_1, tmp0_other_with_cast.mx_1))
      return false;
    if (!equals(this.nx_1, tmp0_other_with_cast.nx_1))
      return false;
    if (!equals(this.ox_1, tmp0_other_with_cast.ox_1))
      return false;
    if (!equals(this.px_1, tmp0_other_with_cast.px_1))
      return false;
    return true;
  };
  function ChildContinuation(child) {
    JobNode.call(this);
    this.yy_1 = child;
  }
  protoOf(ChildContinuation).pu = function () {
    return true;
  };
  protoOf(ChildContinuation).mu = function (cause) {
    this.yy_1.ay(this.yy_1.cy(this.zu()));
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hz_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$2).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.hz_1.ot(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : !(suspendResult == null)) ? suspendResult : THROW_CCE();
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.mr(parent);
  }
  protoOf(CompletableDeferredImpl).xs = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).su = function () {
    var tmp = this.nt();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CompletableDeferredImpl).kw = function ($completion) {
    var tmp = new $awaitCOROUTINE$2(this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(CompletableDeferredImpl).kz = function (value) {
    return this.lz(value);
  };
  protoOf(CompletableDeferredImpl).mz = function (exception) {
    return this.lz(new CompletedExceptionally(exception));
  };
  function CompletableJob() {
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.wr_1 = cause;
    this.xr_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).yr = function () {
    return this.xr_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).tx = function () {
    return this.xr_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.wr_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.my_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).ny = function () {
    return this.my_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.getOrElse' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4) {
    // Inline function 'kotlin.getOrElse' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).qz = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).ma = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).na = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.sz();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    var tmp;
    if (exception instanceof DispatchException) {
      tmp = exception.tz_1;
    } else {
      tmp = exception;
    }
    var reportException = tmp;
    try {
      var tmp0_safe_receiver = context.la(Key_instance_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        tmp0_safe_receiver.uz(context, reportException);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(reportException, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, reportException);
  }
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    addSuppressed(this_0, originalException);
    return this_0;
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function CoroutineName(name) {
    AbstractCoroutineContextElement.call(this, Key_instance_2);
    this.wz_1 = name;
  }
  protoOf(CoroutineName).toString = function () {
    return 'CoroutineName(' + this.wz_1 + ')';
  };
  protoOf(CoroutineName).hashCode = function () {
    return getStringHashCode(this.wz_1);
  };
  protoOf(CoroutineName).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    var tmp0_other_with_cast = other instanceof CoroutineName ? other : THROW_CCE();
    if (!(this.wz_1 === tmp0_other_with_cast.wz_1))
      return false;
    return true;
  };
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.la(Key_instance_3) == null) ? context : context.ij(Job_0()));
  }
  function GlobalScope() {
  }
  protoOf(GlobalScope).qr = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    return GlobalScope_instance;
  }
  function cancel(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return cancel_0(_this__u8e3s4, CancellationException_0(message, cause));
  }
  function cancel_0(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.qr().la(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Scope cannot be cancelled because it does not have a job: ' + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.ys(cause);
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).hs = function (block, receiver, completion) {
    var tmp;
    switch (this.r2_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).qv = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CopyableThrowable() {
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.la(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delay(timeMillis, $completion) {
    if (timeMillis.e1(new Long(0, 0)) <= 0)
      return Unit_instance;
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.ov();
    if (timeMillis.e1(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.s9()).yz(timeMillis, cancellable);
    }
    return cancellable.pv();
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.a10_1 = new Long(0, 0);
    this.b10_1 = false;
    this.c10_1 = null;
  }
  protoOf(EventLoop).d10 = function () {
    var tmp0_elvis_lhs = this.c10_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.jh();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.qy();
    return true;
  };
  protoOf(EventLoop).e10 = function (task) {
    var tmp0_elvis_lhs = this.c10_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      this.c10_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.hh(task);
  };
  protoOf(EventLoop).f10 = function () {
    return this.a10_1.e1(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).g10 = function () {
    var tmp0_safe_receiver = this.c10_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).h10 = function (unconfined) {
    this.a10_1 = this.a10_1.z2(delta(this, unconfined));
    if (!unconfined)
      this.b10_1 = true;
  };
  protoOf(EventLoop).i10 = function (unconfined) {
    this.a10_1 = this.a10_1.a3(delta(this, unconfined));
    if (this.a10_1.e1(new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.b10_1) {
      this.j10();
    }
  };
  protoOf(EventLoop).j10 = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.k10_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).l10 = function () {
    var tmp0_elvis_lhs = this.k10_1.n10();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      ThreadLocalEventLoop_getInstance().k10_1.o10(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).lu = function () {
  };
  protoOf(NonDisposableHandle).ct = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.la(Key_instance_3);
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, invokeImmediately, handler) {
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    var tmp;
    if (_this__u8e3s4 instanceof JobSupport) {
      tmp = _this__u8e3s4.vs(invokeImmediately, handler);
    } else {
      var tmp_0 = handler.pu();
      tmp = _this__u8e3s4.ts(tmp_0, invokeImmediately, JobNode$invoke$ref(handler));
    }
    return tmp;
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.rr())
      throw _this__u8e3s4.ps();
  }
  function cancel_1(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.ys(CancellationException_0(message, cause));
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.la(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Current context doesn't contain Job in it: " + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel_2(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_safe_receiver = _this__u8e3s4.la(Key_instance_3);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ys(cause);
    }
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function JobNode$invoke$ref($boundThis) {
    var l = function (p0) {
      $boundThis.mu(p0);
      return Unit_instance;
    };
    l.callableName = 'invoke';
    return l;
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.p10_1 = isActive;
  }
  protoOf(Empty).rr = function () {
    return this.p10_1;
  };
  protoOf(Empty).av = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.p10_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LockFreeLinkedListHead.call(this);
  }
  protoOf(NodeList).rr = function () {
    return true;
  };
  protoOf(NodeList).av = function () {
    return this;
  };
  protoOf(NodeList).t10 = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.x8('List{');
    this_0.x8(state);
    this_0.x8('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = this.bv_1;
    while (!equals(cur, this)) {
      var node = cur;
      if (node instanceof JobNode) {
        if (first) {
          first = false;
        } else
          this_0.x8(', ');
        this_0.w8(node);
      }
      cur = cur.bv_1;
    }
    this_0.x8(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.t10('Active') : protoOf(LockFreeLinkedListHead).toString.call(this);
  };
  function JobNode() {
    LockFreeLinkedListNode.call(this);
  }
  protoOf(JobNode).zu = function () {
    var tmp = this.yu_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).rr = function () {
    return true;
  };
  protoOf(JobNode).av = function () {
    return null;
  };
  protoOf(JobNode).lu = function () {
    return this.zu().ws(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.zu()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.y10_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.y10_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wr_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    wasCancelling = state.z10();
    var exceptions = state.a11(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.kt(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).tx();
      }
    }
    if (!wasCancelling) {
      $this.ht(finalException);
    }
    $this.vr(finalState);
    var casSuccess = $this.kr_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.h()) {
      if (state.z10()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.ur() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = exceptions.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        if (!(element instanceof CancellationException)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.u(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = exceptions.p();
        while (_iterator__ex2g4s_0.q()) {
          var element_0 = _iterator__ex2g4s_0.r();
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.s() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.s());
    var unwrappedCause = unwrap(rootCause);
    var _iterator__ex2g4s = exceptions.p();
    while (_iterator__ex2g4s.q()) {
      var exception = _iterator__ex2g4s.r();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.n(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        addSuppressed(rootCause, unwrapped);
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.kr_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.ht(null);
    $this.vr(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.js();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      tmp0_safe_receiver.lu();
      $this.is(NonDisposableHandle_instance);
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.wr_1;
    if (state instanceof JobNode) {
      try {
        state.mu(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.cs(new CompletionHandlerException('Exception in completion handler ' + state.toString() + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.av();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion($this, tmp2_safe_receiver, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.ht(cause);
    list.u10(4);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = list.bv_1;
    while (!equals(cur, list)) {
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        tmp = node.pu();
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.mu(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp_0 = tmp0_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.bv_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.cs(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.it())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.js();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.ct(cause) || isCancellation;
  }
  function notifyCompletion($this, _this__u8e3s4, cause) {
    _this__u8e3s4.u10(1);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = _this__u8e3s4.bv_1;
    while (!equals(cur, _this__u8e3s4)) {
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        tmp = true;
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.mu(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp_0 = tmp0_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.bv_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.cs(tmp0_safe_receiver_0);
    }
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.p10_1)
        return 0;
      if (!$this.kr_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.os();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.kr_1.atomicfu$compareAndSet(state, state.b11_1))
          return -1;
        $this.os();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.p10_1 ? list : new InactiveNodeList(list);
    $this.kr_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.gv(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
    var list = state.bv_1;
    $this.kr_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.ks();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false))
        return false;
      if (startInternal($this, state) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.ov();
    disposeOnCancellation(cancellable, invokeOnCompletion($this, VOID, new ResumeOnCompletion(cancellable)));
    return cancellable.pv();
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.ks();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.c11();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.ur() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).ft();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = $this.ks();
      $l$block: {
        if (tmp1 instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          if (tmp1.d11())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp1.z10();
          if (!(cause == null) || !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp1.e11(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = tmp1.f11();
          var tmp_0;
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            notifyCancelling($this, tmp1.v10_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp1 == null) ? isInterface(tmp1, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp1.rr()) {
              if (tryMakeCancelling($this, tmp1, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp1, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString(tmp1);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp0_elvis_lhs = state.av();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var message = 'State should have list: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.kr_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.c11())
      return get_COMPLETING_ALREADY();
    finishing.g11(true);
    if (!(finishing === state)) {
      if (!$this.kr_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.z10();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      finishing.e11(tmp0_safe_receiver.wr_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.f11();
    var tmp_0;
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    if (notifyRootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      notifyCancelling($this, list, notifyRootCause);
    }
    var child = nextChild($this, list);
    if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    list.u10(2);
    var anotherChild = nextChild($this, list);
    if (!(anotherChild == null) && tryWaitForChild($this, finishing, anotherChild, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js($this, _this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wr_1;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.l11_1, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild($this_0, child_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = nextChild_0;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild($this, lastChild);
    if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
      return Unit_instance;
    state.v10_1.u10(2);
    var waitChildAgain = nextChild($this, lastChild);
    if (!(waitChildAgain == null) && tryWaitForChild($this, state, waitChildAgain, proposedUpdate)) {
      return Unit_instance;
    }
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.bs(finalState);
  }
  function nextChild($this, _this__u8e3s4) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (!cur.dv_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.prevNode' call
      cur = cur.cv_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
      cur = cur.bv_1;
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (cur.dv_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.z10() ? 'Cancelling' : state.c11() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.rr() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    SynchronizedObject.call(this);
    this.v10_1 = list;
    this.w10_1 = atomic$boolean$1(isCompleting);
    this.x10_1 = atomic$ref$1(rootCause);
    this.y10_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).av = function () {
    return this.v10_1;
  };
  protoOf(Finishing).g11 = function (value) {
    this.w10_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).c11 = function () {
    return this.w10_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).m11 = function (value) {
    this.x10_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).f11 = function () {
    return this.x10_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).d11 = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).z10 = function () {
    return !(this.f11() == null);
  };
  protoOf(Finishing).rr = function () {
    return this.f11() == null;
  };
  protoOf(Finishing).a11 = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        this_0.n(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.f11();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      list.g2(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.n(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).e11 = function (exception) {
    var rootCause = this.f11();
    if (rootCause == null) {
      this.m11(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        this_0.n(eh);
        this_0.n(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).n(exception);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.z10() + ', completing=' + this.c11() + ', rootCause=' + toString_0(this.f11()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.v10_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.r11_1 = parent;
    this.s11_1 = state;
    this.t11_1 = child;
    this.u11_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).pu = function () {
    return false;
  };
  protoOf(ChildCompletion).mu = function (cause) {
    continueCompleting(this.r11_1, this.s11_1, this.t11_1, this.u11_1);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, 1);
    this.b12_1 = job;
  }
  protoOf(AwaitContinuation).cy = function (parent) {
    var state = this.b12_1.ks();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.f11();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.wr_1;
    return parent.ps();
  };
  protoOf(AwaitContinuation).py = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.ov();
    disposeOnCancellation(cont, invokeOnCompletion($this, VOID, new ResumeAwaitOnCompletion(cont)));
    return cont.pv();
  }
  function JobSupport(active) {
    this.kr_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.lr_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).y = function () {
    return Key_instance_3;
  };
  protoOf(JobSupport).is = function (value) {
    this.lr_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).js = function () {
    return this.lr_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).mr = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.is(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.ns();
    var handle = parent.gt(this);
    this.is(handle);
    if (this.ls()) {
      handle.lu();
      this.is(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).ks = function () {
    return this.kr_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).rr = function () {
    var state = this.ks();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.rr();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).ls = function () {
    var tmp = this.ks();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).ms = function () {
    var state = this.ks();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.z10();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).ns = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.ks();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).os = function () {
  };
  protoOf(JobSupport).ps = function () {
    var state = this.ks();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.f11();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.qs(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.rs(state.wr_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).qs = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.ur() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).rs = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.qs(_this__u8e3s4, message) : $super.qs.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).ss = function (handler) {
    return this.vs(true, new InvokeOnCompletion(handler));
  };
  protoOf(JobSupport).ts = function (onCancelling, invokeImmediately, handler) {
    var tmp;
    if (onCancelling) {
      tmp = new InvokeOnCancelling(handler);
    } else {
      tmp = new InvokeOnCompletion(handler);
    }
    return this.vs(invokeImmediately, tmp);
  };
  protoOf(JobSupport).vs = function (invokeImmediately, node) {
    node.yu_1 = this;
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.ks();
        if (state instanceof Empty) {
          if (state.p10_1) {
            if (this.kr_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$0 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.av();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var tmp;
              if (node.pu()) {
                var tmp0_safe_receiver = state instanceof Finishing ? state : null;
                var rootCause = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f11();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = list.ev(node, 5);
                } else {
                  if (invokeImmediately) {
                    node.mu(rootCause);
                  }
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_0;
              } else {
                tmp = list.ev(node, 1);
              }
              if (tmp) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$0 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$0;
    if (added)
      return node;
    else if (invokeImmediately) {
      var tmp_1 = this.ks();
      var tmp0_safe_receiver_0 = tmp_1 instanceof CompletedExceptionally ? tmp_1 : null;
      node.mu(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.wr_1);
    }
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).oz = function ($completion) {
    if (!joinInternal(this)) {
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp$ret$0 = $completion.s9();
      ensureActive(tmp$ret$0);
      return Unit_instance;
    }
    return joinSuspend(this, $completion);
  };
  protoOf(JobSupport).ws = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.ks();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.kr_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.av() == null)) {
            node.fv();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).xs = function () {
    return false;
  };
  protoOf(JobSupport).ys = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.ur() : null, null, this);
    } else {
      tmp = cause;
    }
    this.at(tmp);
  };
  protoOf(JobSupport).ur = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).at = function (cause) {
    this.et(cause);
  };
  protoOf(JobSupport).bt = function (parentJob) {
    this.et(parentJob);
  };
  protoOf(JobSupport).ct = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.et(cause) && this.jt();
  };
  protoOf(JobSupport).dt = function (cause) {
    return this.et(cause);
  };
  protoOf(JobSupport).et = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.xs()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.bs(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).ft = function () {
    var state = this.ks();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.f11();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.wr_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var message = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).lz = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = this.ks();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp1, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.bs(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).zr = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = this.ks();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp1, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(this, proposedUpdate));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).gt = function (child) {
    // Inline function 'kotlin.also' call
    var this_0 = new ChildHandleNode(child);
    this_0.yu_1 = this;
    var node = this_0;
    var tmp$ret$2;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.ks();
        if (state instanceof Empty) {
          if (state.p10_1) {
            if (this.kr_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$2 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.av();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var addedBeforeCancellation = list.ev(node, 7);
              var tmp;
              if (addedBeforeCancellation) {
                tmp = true;
              } else {
                var addedBeforeCompletion = list.ev(node, 3);
                var latestState = this.ks();
                var tmp_0;
                if (latestState instanceof Finishing) {
                  tmp_0 = latestState.f11();
                } else {
                  // Inline function 'kotlinx.coroutines.assert' call
                  var tmp0_safe_receiver = latestState instanceof CompletedExceptionally ? latestState : null;
                  tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wr_1;
                }
                var rootCause = tmp_0;
                node.mu(rootCause);
                var tmp_1;
                if (addedBeforeCompletion) {
                  // Inline function 'kotlinx.coroutines.assert' call
                  tmp_1 = true;
                } else {
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_1;
              }
              if (tmp) {
                tmp$ret$2 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$2 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$2;
    if (added)
      return node;
    var tmp_2 = this.ks();
    var tmp0_safe_receiver_0 = tmp_2 instanceof CompletedExceptionally ? tmp_2 : null;
    node.mu(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.wr_1);
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).cs = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).ht = function (cause) {
  };
  protoOf(JobSupport).it = function () {
    return false;
  };
  protoOf(JobSupport).jt = function () {
    return true;
  };
  protoOf(JobSupport).kt = function (exception) {
    return false;
  };
  protoOf(JobSupport).vr = function (state) {
  };
  protoOf(JobSupport).bs = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.lt() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).lt = function () {
    return this.ds() + '{' + stateString(this, this.ks()) + '}';
  };
  protoOf(JobSupport).ds = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).mt = function () {
    var state = this.ks();
    // Inline function 'kotlin.check' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_exceptionOrNull__b3j7js(this, state);
  };
  protoOf(JobSupport).nt = function () {
    var state = this.ks();
    // Inline function 'kotlin.check' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (state instanceof CompletedExceptionally)
      throw state.wr_1;
    return unboxState(state);
  };
  protoOf(JobSupport).ot = function ($completion) {
    $l$loop: while (true) {
      var state = this.ks();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.wr_1;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function InactiveNodeList(list) {
    this.b11_1 = list;
  }
  protoOf(InactiveNodeList).av = function () {
    return this.b11_1;
  };
  protoOf(InactiveNodeList).rr = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.b11_1.t10('New') : anyToString(this);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.g12_1 = handler;
  }
  protoOf(InvokeOnCompletion).pu = function () {
    return false;
  };
  protoOf(InvokeOnCompletion).mu = function (cause) {
    return this.g12_1(cause);
  };
  function InvokeOnCancelling(handler) {
    JobNode.call(this);
    this.l12_1 = handler;
    this.m12_1 = atomic$boolean$1(false);
  }
  protoOf(InvokeOnCancelling).pu = function () {
    return true;
  };
  protoOf(InvokeOnCancelling).mu = function (cause) {
    if (this.m12_1.atomicfu$compareAndSet(false, true))
      this.l12_1(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.r12_1 = continuation;
  }
  protoOf(ResumeOnCompletion).pu = function () {
    return false;
  };
  protoOf(ResumeOnCompletion).mu = function (cause) {
    // Inline function 'kotlin.coroutines.resume' call
    var this_0 = this.r12_1;
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
    this_0.ha(tmp$ret$0);
    return Unit_instance;
  };
  function ChildHandleNode(childJob) {
    JobNode.call(this);
    this.l11_1 = childJob;
  }
  protoOf(ChildHandleNode).pu = function () {
    return true;
  };
  protoOf(ChildHandleNode).mu = function (cause) {
    return this.l11_1.bt(this.zu());
  };
  protoOf(ChildHandleNode).ct = function (cause) {
    return this.zu().ct(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s12_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.x12_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).pu = function () {
    return false;
  };
  protoOf(ResumeAwaitOnCompletion).mu = function (cause) {
    var state = this.zu().ks();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp0 = this.x12_1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = state.wr_1;
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.ha(tmp$ret$1);
    } else {
      var tmp2 = this.x12_1;
      var tmp = unboxState(state);
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
      tmp2.ha(tmp$ret$3);
    }
  };
  function IncompleteStateBox(state) {
    this.s12_1 = state;
  }
  function handlesExceptionF($this) {
    var tmp = $this.js();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zu();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.jt())
        return true;
      var tmp_1 = parentJob.js();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.zu();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.mr(parent);
    this.a13_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).xs = function () {
    return true;
  };
  protoOf(JobImpl).jt = function () {
    return this.a13_1;
  };
  protoOf(JobImpl).nz = function () {
    return this.lz(Unit_instance);
  };
  protoOf(JobImpl).mz = function (exception) {
    return this.lz(new CompletedExceptionally(exception));
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.d13();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).d13 = function () {
    var main = Dispatchers_getInstance().i13();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.c13();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).ct = function (cause) {
    return false;
  };
  function TimeoutCancellationException() {
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).qz = function (context) {
    return false;
  };
  protoOf(Unconfined).rz = function (context, block) {
    var yieldContext = context.la(Key_instance_4);
    if (!(yieldContext == null)) {
      yieldContext.o13_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
  }
  var Key_instance_4;
  function Key_getInstance_3() {
    return Key_instance_4;
  }
  function Waiter() {
  }
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_instance;
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function get_NULL_SEGMENT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NULL_SEGMENT;
  }
  var NULL_SEGMENT;
  function get_SEGMENT_SIZE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  function get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  }
  var EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  function get_BUFFERED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return BUFFERED;
  }
  var BUFFERED;
  function get_IN_BUFFER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return IN_BUFFER;
  }
  var IN_BUFFER;
  function get_RESUMING_BY_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_RCV;
  }
  var RESUMING_BY_RCV;
  function get_RESUMING_BY_EB() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_EB;
  }
  var RESUMING_BY_EB;
  function get_POISONED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return POISONED;
  }
  var POISONED;
  function get_DONE_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return DONE_RCV;
  }
  var DONE_RCV;
  function get_INTERRUPTED_SEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_SEND;
  }
  var INTERRUPTED_SEND;
  function get_INTERRUPTED_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_RCV;
  }
  var INTERRUPTED_RCV;
  function get_CHANNEL_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CHANNEL_CLOSED;
  }
  var CHANNEL_CLOSED;
  function get_SUSPEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND;
  }
  var SUSPEND;
  function get_SUSPEND_NO_WAITER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND_NO_WAITER;
  }
  var SUSPEND_NO_WAITER;
  function get_FAILED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return FAILED;
  }
  var FAILED;
  function get_NO_RECEIVE_RESULT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_RECEIVE_RESULT;
  }
  var NO_RECEIVE_RESULT;
  function get_CLOSE_HANDLER_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_CLOSED;
  }
  var CLOSE_HANDLER_CLOSED;
  function get_CLOSE_HANDLER_INVOKED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_INVOKED;
  }
  var CLOSE_HANDLER_INVOKED;
  function get_NO_CLOSE_CAUSE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_CLOSE_CAUSE;
  }
  var NO_CLOSE_CAUSE;
  function setElementLazy($this, index, value) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    $this.u13_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value = value;
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this.t13_1 = channel;
    this.u13_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).v13 = function () {
    return ensureNotNull(this.t13_1);
  };
  protoOf(ChannelSegment).w13 = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).x13 = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).y13 = function (index) {
    var tmp = this.u13_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ChannelSegment).z13 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.y13(index);
    this.a14(index);
    return this_0;
  };
  protoOf(ChannelSegment).a14 = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).b14 = function (index) {
    return this.u13_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).c14 = function (index, value) {
    this.u13_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value = value;
  };
  protoOf(ChannelSegment).d14 = function (index, from, to) {
    return this.u13_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).e14 = function (index, update) {
    return this.u13_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).kx = function (index, cause, context) {
    var isSender = index >= get_SEGMENT_SIZE();
    var index_0 = isSender ? index - get_SEGMENT_SIZE() | 0 : index;
    var element = this.y13(index_0);
    $l$loop: while (true) {
      var cur = this.b14(index_0);
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.d14(index_0, cur, update)) {
          this.a14(index_0);
          this.r14(index_0, !isSender);
          if (isSender) {
            var tmp0_safe_receiver = this.v13().g14_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp0_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        }
      } else {
        if (cur === get_INTERRUPTED_SEND() || cur === get_INTERRUPTED_RCV()) {
          this.a14(index_0);
          if (isSender) {
            var tmp1_safe_receiver = this.v13().g14_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp1_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        } else {
          if (cur === get_RESUMING_BY_EB() || cur === get_RESUMING_BY_RCV())
            continue $l$loop;
          else {
            if (cur === get_DONE_RCV() || cur === get_BUFFERED())
              return Unit_instance;
            else {
              if (cur === get_CHANNEL_CLOSED())
                return Unit_instance;
              else {
                // Inline function 'kotlin.error' call
                var message = 'unexpected state: ' + toString_0(cur);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  };
  protoOf(ChannelSegment).r14 = function (index, receiver) {
    if (receiver) {
      var tmp = this.v13();
      var tmp0 = this.ix_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$1 = tmp0.b3(toLong(other)).z2(toLong(index));
      tmp.s14(tmp$ret$1);
    }
    this.t14();
  };
  function onClosedHasNext($this) {
    $this.f15_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.h15_1.i15();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var cause = tmp;
    throw recoverStackTrace_0(cause);
  }
  function hasNextOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      $this.g15_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var this_0 = $this.h15_1;
      var updCellResult = updateCellReceive(this_0, segment, index, r, $this);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension(this_0, $this, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (r.e1(this_0.j15()) < 0) {
          segment.d15();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = this_0.m14_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if (this_0.k15()) {
              onClosedHasNextNoWaiterSuspend($this);
              break $l$block_0;
            }
            var r_0 = this_0.i14_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = r_0.c3(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = r_0.d3(toLong(other_0)).j1();
            if (!segment_0.ix_1.equals(id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this_0, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive(this_0, segment_0, i, r_0, $this);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp1_safe_receiver = (!($this == null) ? isInterface($this, Waiter) : false) ? $this : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this_0, tmp1_safe_receiver, segment_0, i);
              }
            } else if (updCellResult_0 === get_FAILED()) {
              if (r_0.e1(this_0.j15()) < 0) {
                segment_0.d15();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              // Inline function 'kotlin.error' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.d15();
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              $this.f15_1 = element;
              $this.g15_1 = null;
              var tmp0_safe_receiver = $this.h15_1.g14_1;
              cancellable.sw(true, tmp0_safe_receiver == null ? null : bindCancellationFun($this.h15_1, tmp0_safe_receiver, element));
            }
            break $l$block_0;
          }
        }
      } else {
        segment.d15();
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        $this.f15_1 = element_0;
        $this.g15_1 = null;
        var tmp0_safe_receiver_0 = $this.h15_1.g14_1;
        cancellable.sw(true, tmp0_safe_receiver_0 == null ? null : bindCancellationFun($this.h15_1, tmp0_safe_receiver_0, element_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.dy();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.pv();
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.g15_1);
    $this.g15_1 = null;
    $this.f15_1 = get_CHANNEL_CLOSED();
    var cause = $this.h15_1.i15();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.ha(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.ha(tmp$ret$2);
    }
  }
  function $hasNextCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t15_1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$6).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 8;
            if (!(this.t15_1.f15_1 === get_NO_RECEIVE_RESULT()) && !(this.t15_1.f15_1 === get_CHANNEL_CLOSED())) {
              var tmp_0 = this;
              tmp_0.u15_1 = true;
              this.m9_1 = 11;
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.v15_1 = this.t15_1.h15_1;
              var tmp_2 = this;
              tmp_2.w15_1 = null;
              this.m9_1 = 1;
              continue $sm;
            }

          case 1:
            this.y15_1 = this.v15_1;
            this.z15_1 = this.w15_1;
            this.a16_1 = this.y15_1.m14_1.kotlinx$atomicfu$value;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.m9_1 = 9;
              continue $sm;
            }

            if (this.y15_1.k15()) {
              var tmp_3 = this;
              tmp_3.x15_1 = onClosedHasNext(this.t15_1);
              this.m9_1 = 10;
              continue $sm;
            } else {
              this.m9_1 = 3;
              continue $sm;
            }

          case 3:
            this.b16_1 = this.y15_1.i14_1.atomicfu$getAndIncrement$long();
            var tmp_4 = this;
            var tmp0 = this.b16_1;
            var other = get_SEGMENT_SIZE();
            tmp_4.c16_1 = tmp0.c3(toLong(other));
            var tmp_5 = this;
            var tmp2 = this.b16_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_5.d16_1 = tmp2.d3(toLong(other_0)).j1();
            if (!this.a16_1.ix_1.equals(this.c16_1)) {
              this.e16_1 = findSegmentReceive(this.y15_1, this.c16_1, this.a16_1);
              if (this.e16_1 == null) {
                this.m9_1 = 2;
                var tmp_6 = this;
                continue $sm;
              } else {
                this.f16_1 = this.e16_1;
                this.m9_1 = 4;
                continue $sm;
              }
            } else {
              this.m9_1 = 5;
              continue $sm;
            }

          case 4:
            this.a16_1 = this.f16_1;
            this.m9_1 = 5;
            continue $sm;
          case 5:
            this.g16_1 = updateCellReceive(this.y15_1, this.a16_1, this.d16_1, this.b16_1, this.z15_1);
            if (this.g16_1 === get_SUSPEND()) {
              var tmp_7 = this;
              var tmp_8 = this.z15_1;
              var tmp1_safe_receiver = (!(tmp_8 == null) ? isInterface(tmp_8, Waiter) : false) ? tmp_8 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.y15_1, tmp1_safe_receiver, this.a16_1, this.d16_1);
              }
              this.a16_1;
              this.d16_1;
              this.b16_1;
              var message = 'unreachable';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (this.g16_1 === get_FAILED()) {
                if (this.b16_1.e1(this.y15_1.j15()) < 0) {
                  this.a16_1.d15();
                }
                this.m9_1 = 2;
                var tmp_9 = this;
                continue $sm;
              } else {
                if (this.g16_1 === get_SUSPEND_NO_WAITER()) {
                  var tmp_10 = this;
                  tmp_10.i16_1 = this.a16_1;
                  var tmp_11 = this;
                  tmp_11.j16_1 = this.d16_1;
                  var tmp_12 = this;
                  tmp_12.k16_1 = this.b16_1;
                  this.l16_1 = this.i16_1;
                  this.m16_1 = this.j16_1;
                  this.n16_1 = this.k16_1;
                  this.m9_1 = 6;
                  suspendResult = hasNextOnNoWaiterSuspend(this.t15_1, this.l16_1, this.m16_1, this.n16_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_13 = this;
                  this.a16_1.d15();
                  var tmp_14 = this.g16_1;
                  var element = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
                  this.t15_1.f15_1 = element;
                  tmp_13.h16_1 = true;
                  this.m9_1 = 7;
                  continue $sm;
                }
              }
            }

          case 6:
            var tmp_15 = this;
            return suspendResult;
          case 7:
            this.x15_1 = this.h16_1;
            this.m9_1 = 10;
            continue $sm;
          case 8:
            throw this.p9_1;
          case 9:
            if (false) {
              this.m9_1 = 1;
              continue $sm;
            }

            this.m9_1 = 10;
            continue $sm;
          case 10:
            this.u15_1 = this.x15_1;
            this.m9_1 = 11;
            continue $sm;
          case 11:
            return this.u15_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 8) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.j14_1.kotlinx$atomicfu$value;
  }
  function _get_isRendezvousOrUnlimited__3mdufi($this) {
    // Inline function 'kotlin.let' call
    var it = _get_bufferEndCounter__2d4hee($this);
    return it.equals(new Long(0, 0)) || it.equals(new Long(-1, 2147483647));
  }
  function onClosedSend($this, element, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.ov();
    $l$block: {
      var tmp0_safe_receiver = $this.g14_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, $this.o16());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = recoverStackTrace(tmp1_safe_receiver, cancellable);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
        cancellable.ha(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var exception_0 = $this.o16();
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = recoverStackTrace(exception_0, cancellable);
      var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(exception_1));
      cancellable.ha(tmp$ret$4);
    }
    return cancellable.pv();
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      switch (updateCellSend($this, segment, index, element, s, cancellable, false)) {
        case 0:
          segment.d15();
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.ha(tmp$ret$0);
          break;
        case 1:
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.ha(tmp$ret$3);
          break;
        case 2:
          prepareSenderForSuspension($this, cancellable, segment, index);
          break;
        case 4:
          if (s.e1($this.p16()) < 0) {
            segment.d15();
          }

          onClosedSendOnNoWaiterSuspend($this, element, cancellable);
          break;
        case 5:
          segment.d15();
          $l$block_5: {
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
            var segment_0 = $this.l14_1.kotlinx$atomicfu$value;
            $l$loop_0: while (true) {
              var sendersAndCloseStatusCur = $this.h14_1.atomicfu$getAndIncrement$long();
              // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
              var s_0 = sendersAndCloseStatusCur.m3(new Long(-1, 268435455));
              var closed = _get_isClosedForSend0__kxgf9m($this, sendersAndCloseStatusCur);
              // Inline function 'kotlin.Long.div' call
              var other = get_SEGMENT_SIZE();
              var id = s_0.c3(toLong(other));
              // Inline function 'kotlin.Long.rem' call
              var other_0 = get_SEGMENT_SIZE();
              var i = s_0.d3(toLong(other_0)).j1();
              if (!segment_0.ix_1.equals(id)) {
                var tmp0_elvis_lhs = findSegmentSend($this, id, segment_0);
                var tmp;
                if (tmp0_elvis_lhs == null) {
                  var tmp_0;
                  if (closed) {
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  } else {
                    continue $l$loop_0;
                  }
                } else {
                  tmp = tmp0_elvis_lhs;
                }
                segment_0 = tmp;
              }
              switch (updateCellSend($this, segment_0, i, element, s_0, cancellable, closed)) {
                case 0:
                  segment_0.d15();
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$12 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.ha(tmp$ret$12);
                  break $l$block_5;
                case 1:
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$15 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.ha(tmp$ret$15);
                  break $l$block_5;
                case 2:
                  if (closed) {
                    segment_0.t14();
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  }

                  var tmp2_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
                  if (tmp2_safe_receiver == null)
                    null;
                  else {
                    prepareSenderForSuspension($this, tmp2_safe_receiver, segment_0, i);
                  }

                  break $l$block_5;
                case 4:
                  if (s_0.e1($this.p16()) < 0) {
                    segment_0.d15();
                  }

                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  break $l$block_5;
                case 5:
                  segment_0.d15();
                  continue $l$loop_0;
                case 3:
                  // Inline function 'kotlin.error' call

                  var message = 'unexpected';
                  throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }

          break;
        default:
          // Inline function 'kotlin.error' call

          var message_0 = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.dy();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.pv();
  }
  function prepareSenderForSuspension($this, _this__u8e3s4, segment, index) {
    _this__u8e3s4.jy(segment, index + get_SEGMENT_SIZE() | 0);
  }
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp0_safe_receiver = $this.g14_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, element, cont.s9());
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = recoverStackTrace($this.o16(), cont);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.ha(tmp$ret$0);
  }
  function SendBroadcast() {
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.x13(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.b14(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.d14(index, null, get_BUFFERED())) {
          return 1;
        }
      } else {
        if (waiter == null) {
          return 3;
        } else {
          if (segment.d14(index, null, waiter))
            return 2;
        }
      }
    } else {
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        segment.a14(index);
        var tmp;
        if (tryResumeReceiver($this, state, element)) {
          segment.c14(index, get_DONE_RCV());
          $this.q16();
          tmp = 0;
        } else {
          if (!(segment.e14(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.r14(index, true);
          }
          tmp = 5;
        }
        return tmp;
      }
    }
    return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
  }
  function updateCellSendSlow($this, segment, index, element, s, waiter, closed) {
    while (true) {
      var state = segment.b14(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) && !closed) {
          if (segment.d14(index, null, get_BUFFERED())) {
            return 1;
          }
        } else {
          if (closed) {
            if (segment.d14(index, null, get_INTERRUPTED_SEND())) {
              segment.r14(index, false);
              return 4;
            }
          } else if (waiter == null)
            return 3;
          else if (segment.d14(index, null, waiter))
            return 2;
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.d14(index, state, get_BUFFERED())) {
          return 1;
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.a14(index);
        return 5;
      } else if (state === get_POISONED()) {
        segment.a14(index);
        return 5;
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.a14(index);
        completeCloseOrCancel($this);
        return 4;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.a14(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.r16_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver($this, receiver, element)) {
          segment.c14(index, get_DONE_RCV());
          $this.q16();
          tmp_0 = 0;
        } else {
          if (!(segment.e14(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.r14(index, true);
          }
          tmp_0 = 5;
        }
        return tmp_0;
      }
    }
  }
  function shouldSendSuspend0($this, curSendersAndCloseStatus) {
    if (_get_isClosedForSend0__kxgf9m($this, curSendersAndCloseStatus))
      return false;
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var tmp$ret$0 = curSendersAndCloseStatus.m3(new Long(-1, 268435455));
    return !bufferOrRendezvousSend($this, tmp$ret$0);
  }
  function bufferOrRendezvousSend($this, curSenders) {
    var tmp;
    if (curSenders.e1(_get_bufferEndCounter__2d4hee($this)) < 0) {
      tmp = true;
    } else {
      var tmp0 = $this.p16();
      // Inline function 'kotlin.Long.plus' call
      var other = $this.f14_1;
      var tmp$ret$0 = tmp0.z2(toLong(other));
      tmp = curSenders.e1(tmp$ret$0) < 0;
    }
    return tmp;
  }
  function tryResumeReceiver($this, _this__u8e3s4, element) {
    var tmp;
    if (isInterface(_this__u8e3s4, SelectInstance)) {
      tmp = _this__u8e3s4.w16($this, element);
    } else {
      if (_this__u8e3s4 instanceof ReceiveCatching) {
        if (!(_this__u8e3s4 instanceof ReceiveCatching))
          THROW_CCE();
        var tmp_0 = Companion_getInstance().u16(element);
        var tmp1_safe_receiver = $this.g14_1;
        tmp = tryResume0(_this__u8e3s4.v16_1, new ChannelResult(tmp_0), tmp1_safe_receiver == null ? null : bindCancellationFunResult($this, tmp1_safe_receiver));
      } else {
        if (_this__u8e3s4 instanceof BufferedChannelIterator) {
          if (!(_this__u8e3s4 instanceof BufferedChannelIterator))
            THROW_CCE();
          tmp = _this__u8e3s4.s16(element);
        } else {
          if (isInterface(_this__u8e3s4, CancellableContinuation)) {
            if (!isInterface(_this__u8e3s4, CancellableContinuation))
              THROW_CCE();
            var tmp2_safe_receiver = $this.g14_1;
            tmp = tryResume0(_this__u8e3s4, element, tmp2_safe_receiver == null ? null : bindCancellationFun_0($this, tmp2_safe_receiver));
          } else {
            var message = 'Unexpected receiver type: ' + toString(_this__u8e3s4);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
    }
    return tmp;
  }
  function prepareReceiverForSuspension($this, _this__u8e3s4, segment, index) {
    $this.x16();
    _this__u8e3s4.jy(segment, index);
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.b14(index);
    if (state === null) {
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var senders = $this.h14_1.kotlinx$atomicfu$value.m3(new Long(-1, 268435455));
      if (r.e1(senders) >= 0) {
        if (waiter === null) {
          return get_SUSPEND_NO_WAITER();
        }
        if (segment.d14(index, state, waiter)) {
          expandBuffer($this);
          return get_SUSPEND();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.d14(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.z13(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.b14(index);
      if (state === null || state === get_IN_BUFFER()) {
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var senders = $this.h14_1.kotlinx$atomicfu$value.m3(new Long(-1, 268435455));
        if (r.e1(senders) < 0) {
          if (segment.d14(index, state, get_POISONED())) {
            expandBuffer($this);
            return get_FAILED();
          }
        } else {
          if (waiter === null) {
            return get_SUSPEND_NO_WAITER();
          }
          if (segment.d14(index, state, waiter)) {
            expandBuffer($this);
            return get_SUSPEND();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.d14(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.z13(index);
        }
      } else if (state === get_INTERRUPTED_SEND())
        return get_FAILED();
      else if (state === get_POISONED())
        return get_FAILED();
      else if (state === get_CHANNEL_CLOSED()) {
        expandBuffer($this);
        return get_FAILED();
      } else if (state === get_RESUMING_BY_EB())
        continue $l$loop;
      else {
        if (segment.d14(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.r16_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender($this, sender, segment, index)) {
            segment.c14(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.z13(index);
          } else {
            segment.c14(index, get_INTERRUPTED_SEND());
            segment.r14(index, false);
            if (helpExpandBuffer) {
              expandBuffer($this);
            }
            tmp_0 = get_FAILED();
          }
          return tmp_0;
        }
      }
    }
  }
  function tryResumeSender($this, _this__u8e3s4, segment, index) {
    var tmp;
    if (isInterface(_this__u8e3s4, CancellableContinuation)) {
      if (!isInterface(_this__u8e3s4, CancellableContinuation))
        THROW_CCE();
      tmp = tryResume0(_this__u8e3s4, Unit_instance);
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        if (!(_this__u8e3s4 instanceof SelectImplementation))
          THROW_CCE();
        var trySelectResult = _this__u8e3s4.c17($this, Unit_instance);
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.a14(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if (_this__u8e3s4 instanceof SendBroadcast) {
          tmp = tryResume0(_this__u8e3s4.y16_1, true);
        } else {
          var message = 'Unexpected waiter: ' + toString(_this__u8e3s4);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp;
  }
  function expandBuffer($this) {
    if (_get_isRendezvousOrUnlimited__3mdufi($this))
      return Unit_instance;
    var segment = $this.n14_1.kotlinx$atomicfu$value;
    try_again: while (true) {
      var b = $this.j14_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = b.c3(toLong(other));
      var s = $this.j15();
      if (s.e1(b) <= 0) {
        if (segment.ix_1.e1(id) < 0 && !(segment.z14() == null)) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      }
      if (!segment.ix_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentBufferEnd($this, id, segment, b);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue try_again;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = b.d3(toLong(other_0)).j1();
      if (updateCellExpandBuffer($this, segment, i, b)) {
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      } else {
        incCompletedExpandBufferAttempts$default($this);
        continue try_again;
      }
    }
  }
  function updateCellExpandBuffer($this, segment, index, b) {
    var state = segment.b14(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (b.e1($this.i14_1.kotlinx$atomicfu$value) >= 0) {
        if (segment.d14(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender($this, state, segment, index)) {
            segment.c14(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.c14(index, get_INTERRUPTED_SEND());
            segment.r14(index, false);
            tmp = false;
          }
          return tmp;
        }
      }
    }
    return updateCellExpandBufferSlow($this, segment, index, b);
  }
  function updateCellExpandBufferSlow($this, segment, index, b) {
    $l$loop: while (true) {
      var state = segment.b14(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (b.e1($this.i14_1.kotlinx$atomicfu$value) < 0) {
          if (segment.d14(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.d14(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender($this, state, segment, index)) {
              segment.c14(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.c14(index, get_INTERRUPTED_SEND());
              segment.r14(index, false);
              tmp = false;
            }
            return tmp;
          }
        }
      } else {
        if (state === get_INTERRUPTED_SEND())
          return false;
        else {
          if (state === null) {
            if (segment.d14(index, state, get_IN_BUFFER()))
              return true;
          } else {
            if (state === get_BUFFERED())
              return true;
            else {
              if (state === get_POISONED() || state === get_DONE_RCV() || state === get_INTERRUPTED_RCV())
                return true;
              else {
                if (state === get_CHANNEL_CLOSED())
                  return true;
                else {
                  if (state === get_RESUMING_BY_RCV())
                    continue $l$loop;
                  else {
                    // Inline function 'kotlin.error' call
                    var message = 'Unexpected cell state: ' + toString_0(state);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts($this, nAttempts) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
    if (!$this.k14_1.atomicfu$addAndGet$long(nAttempts).m3(new Long(0, 1073741824)).equals(new Long(0, 0))) {
      $l$loop: while (true) {
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        if (!!$this.k14_1.kotlinx$atomicfu$value.m3(new Long(0, 1073741824)).equals(new Long(0, 0))) {
          break $l$loop;
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts$default($this, nAttempts, $super) {
    nAttempts = nAttempts === VOID ? new Long(1, 0) : nAttempts;
    return incCompletedExpandBufferAttempts($this, nAttempts);
  }
  function BufferedChannelIterator($outer) {
    this.h15_1 = $outer;
    this.f15_1 = get_NO_RECEIVE_RESULT();
    this.g15_1 = null;
  }
  protoOf(BufferedChannelIterator).d17 = function ($completion) {
    var tmp = new $hasNextCOROUTINE$6(this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(BufferedChannelIterator).jy = function (segment, index) {
    var tmp0_safe_receiver = this.g15_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.jy(segment, index);
    }
  };
  protoOf(BufferedChannelIterator).r = function () {
    var result = this.f15_1;
    // Inline function 'kotlin.check' call
    if (!!(result === get_NO_RECEIVE_RESULT())) {
      var message = '`hasNext()` has not been invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.f15_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.h15_1));
    return (result == null ? true : !(result == null)) ? result : THROW_CCE();
  };
  protoOf(BufferedChannelIterator).s16 = function (element) {
    var cont = ensureNotNull(this.g15_1);
    this.g15_1 = null;
    this.f15_1 = element;
    var tmp0_safe_receiver = this.h15_1.g14_1;
    return tryResume0(cont, true, tmp0_safe_receiver == null ? null : bindCancellationFun(this.h15_1, tmp0_safe_receiver, element));
  };
  protoOf(BufferedChannelIterator).e17 = function () {
    var cont = ensureNotNull(this.g15_1);
    this.g15_1 = null;
    this.f15_1 = get_CHANNEL_CLOSED();
    var cause = this.h15_1.i15();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.ha(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.ha(tmp$ret$2);
    }
  };
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.i15();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException('Channel was closed') : tmp0_elvis_lhs;
  }
  function invokeCloseHandler($this) {
    var tmp0 = $this.q14_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.getAndUpdate' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        var tmp;
        if (cur === null) {
          tmp = get_CLOSE_HANDLER_CLOSED();
        } else {
          tmp = get_CLOSE_HANDLER_INVOKED();
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = cur;
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var closeHandler = tmp_0;
    if (typeof closeHandler !== 'function')
      THROW_CCE();
    closeHandler($this.i15());
  }
  function markClosed($this) {
    var tmp0 = $this.h14_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        var tmp;
        switch (cur.k3(60).j1()) {
          case 0:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$1 = cur.m3(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$1, 2);
            break;
          case 1:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$2 = cur.m3(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$2, 3);
            break;
          default:
            return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$4 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$4 = Unit_instance;
    }
    return tmp$ret$4;
  }
  function markCancelled($this) {
    var tmp0 = $this.h14_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var tmp$ret$0 = cur.m3(new Long(-1, 268435455));
        var upd = constructSendersAndCloseStatus(tmp$ret$0, 3);
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$2 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$2 = Unit_instance;
    }
    return tmp$ret$2;
  }
  function markCancellationStarted($this) {
    var tmp0 = $this.h14_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        var tmp;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        if (cur.k3(60).j1() === 0) {
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          var tmp$ret$1 = cur.m3(new Long(-1, 268435455));
          tmp = constructSendersAndCloseStatus(tmp$ret$1, 1);
        } else {
          return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$3 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$3 = Unit_instance;
    }
    return tmp$ret$3;
  }
  function completeCloseOrCancel($this) {
    $this.f17();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.h17()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!lastBufferedCellGlobalIndex.equals(new Long(-1, -1))) {
        $this.g17(lastBufferedCellGlobalIndex);
      }
    }
    cancelSuspendedReceiveRequests($this, lastSegment, sendersCur);
    return lastSegment;
  }
  function completeCancel($this, sendersCur) {
    var lastSegment = completeClose($this, sendersCur);
    removeUnprocessedElements($this, lastSegment);
  }
  function closeLinkedList($this) {
    var lastSegment = $this.n14_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.let' call
    var it = $this.l14_1.kotlinx$atomicfu$value;
    if (it.ix_1.e1(lastSegment.ix_1) > 0)
      lastSegment = it;
    // Inline function 'kotlin.let' call
    var it_0 = $this.m14_1.kotlinx$atomicfu$value;
    if (it_0.ix_1.e1(lastSegment.ix_1) > 0)
      lastSegment = it_0;
    return close(lastSegment);
  }
  function markAllEmptyCellsAsClosed($this, lastSegment) {
    var segment = lastSegment;
    while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.ix_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var globalIndex = tmp0.b3(toLong(other)).z2(toLong(index));
          if (globalIndex.e1($this.p16()) < 0)
            return new Long(-1, -1);
          cell_update: while (true) {
            var state = segment.b14(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.d14(index, state, get_CHANNEL_CLOSED())) {
                segment.t14();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp0_elvis_lhs = segment.c15();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return new Long(-1, -1);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
  }
  function removeUnprocessedElements($this, lastSegment) {
    var onUndeliveredElement = $this.g14_1;
    var undeliveredElementException = null;
    var suspendedSenders = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.ix_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var globalIndex = tmp0.b3(toLong(other)).z2(toLong(index));
          update_cell: while (true) {
            var state = segment.b14(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (globalIndex.e1($this.p16()) < 0)
                  break process_segments;
                if (segment.d14(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.y13(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.a14(index);
                  segment.t14();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() || state === null) {
                  if (segment.d14(index, state, get_CHANNEL_CLOSED())) {
                    segment.t14();
                    break update_cell;
                  }
                } else {
                  var tmp;
                  if (!(state == null) ? isInterface(state, Waiter) : false) {
                    tmp = true;
                  } else {
                    tmp = state instanceof WaiterEB;
                  }
                  if (tmp) {
                    if (globalIndex.e1($this.p16()) < 0)
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.r16_1;
                    } else {
                      tmp_0 = (!(state == null) ? isInterface(state, Waiter) : false) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.d14(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.y13(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.a14(index);
                      segment.t14();
                      break update_cell;
                    }
                  } else {
                    if (state === get_RESUMING_BY_EB() || state === get_RESUMING_BY_RCV())
                      break process_segments;
                    else {
                      if (state === get_RESUMING_BY_EB())
                        continue update_cell;
                      else {
                        break update_cell;
                      }
                    }
                  }
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      var tmp0_elvis_lhs = segment.c15();
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        break process_segments;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      segment = tmp_1;
    }
    var tmp4 = suspendedSenders;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp4);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp_2 = access$_get_holder__kkflen(tmp4);
          var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          resumeSenderOnCancelledChannel($this, it);
        } else {
          var tmp_3 = access$_get_holder__kkflen(tmp4);
          var list = tmp_3 instanceof ArrayList ? tmp_3 : THROW_CCE();
          var inductionVariable_0 = list.s() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.u(i);
              resumeSenderOnCancelledChannel($this, it_0);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    var tmp1_safe_receiver = undeliveredElementException;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp1_safe_receiver;
    }
  }
  function cancelSuspendedReceiveRequests($this, lastSegment, sendersCounter) {
    var suspendedReceivers = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (!(segment == null)) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.ix_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          if (tmp0.b3(toLong(other)).z2(toLong(index)).e1(sendersCounter) < 0)
            break process_segments;
          cell_update: while (true) {
            var state = segment.b14(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.d14(index, state, get_CHANNEL_CLOSED())) {
                segment.t14();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.d14(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.r16_1);
                  segment.r14(index, true);
                  break cell_update;
                }
              } else {
                if (!(state == null) ? isInterface(state, Waiter) : false) {
                  if (segment.d14(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.r14(index, true);
                    break cell_update;
                  }
                } else {
                  break cell_update;
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      segment = segment.c15();
    }
    var tmp4 = suspendedReceivers;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp4);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp = access$_get_holder__kkflen(tmp4);
          var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          resumeReceiverOnClosedChannel($this, it);
        } else {
          var tmp_0 = access$_get_holder__kkflen(tmp4);
          var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable_0 = list.s() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.u(i);
              resumeReceiverOnClosedChannel($this, it_0);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
  }
  function resumeReceiverOnClosedChannel($this, _this__u8e3s4) {
    return resumeWaiterOnClosedChannel($this, _this__u8e3s4, true);
  }
  function resumeSenderOnCancelledChannel($this, _this__u8e3s4) {
    return resumeWaiterOnClosedChannel($this, _this__u8e3s4, false);
  }
  function resumeWaiterOnClosedChannel($this, _this__u8e3s4, receiver) {
    if (_this__u8e3s4 instanceof SendBroadcast) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = _this__u8e3s4.y16_1;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      this_0.ha(tmp$ret$0);
    } else {
      if (isInterface(_this__u8e3s4, CancellableContinuation)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = receiver ? _get_receiveException__foorc1($this) : $this.o16();
        var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
        _this__u8e3s4.ha(tmp$ret$2);
      } else {
        if (_this__u8e3s4 instanceof ReceiveCatching) {
          var tmp4 = _this__u8e3s4.v16_1;
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = new ChannelResult(Companion_getInstance().i17($this.i15()));
          var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
          tmp4.ha(tmp$ret$4);
        } else {
          if (_this__u8e3s4 instanceof BufferedChannelIterator) {
            _this__u8e3s4.e17();
          } else {
            if (isInterface(_this__u8e3s4, SelectInstance))
              _this__u8e3s4.w16($this, get_CHANNEL_CLOSED());
            else {
              // Inline function 'kotlin.error' call
              var message = 'Unexpected waiter: ' + toString(_this__u8e3s4);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  }
  function _get_isClosedForSend0__kxgf9m($this, _this__u8e3s4) {
    return isClosed($this, _this__u8e3s4, false);
  }
  function _get_isClosedForReceive0__f7qknl($this, _this__u8e3s4) {
    return isClosed($this, _this__u8e3s4, true);
  }
  function isClosed($this, sendersAndCloseStatusCur, isClosedForReceive) {
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp;
    switch (sendersAndCloseStatusCur.k3(60).j1()) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$1 = sendersAndCloseStatusCur.m3(new Long(-1, 268435455));
        completeClose($this, tmp$ret$1);
        tmp = isClosedForReceive ? !$this.j17() : true;
        break;
      case 3:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$2 = sendersAndCloseStatusCur.m3(new Long(-1, 268435455));
        completeCancel($this, tmp$ret$2);
        tmp = true;
        break;
      default:
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call

        var message = 'unexpected close status: ' + sendersAndCloseStatusCur.k3(60).j1();
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function isCellNonEmpty($this, segment, index, globalIndex) {
    while (true) {
      var state = segment.b14(index);
      if (state === null || state === get_IN_BUFFER()) {
        if (segment.d14(index, state, get_POISONED())) {
          expandBuffer($this);
          return false;
        }
      } else if (state === get_BUFFERED())
        return true;
      else if (state === get_INTERRUPTED_SEND())
        return false;
      else if (state === get_CHANNEL_CLOSED())
        return false;
      else if (state === get_DONE_RCV())
        return false;
      else if (state === get_POISONED())
        return false;
      else if (state === get_RESUMING_BY_EB())
        return true;
      else if (state === get_RESUMING_BY_RCV())
        return false;
      else
        return globalIndex.equals($this.p16());
    }
  }
  function findSegmentSend($this, id, startFrom) {
    var tmp0 = $this.l14_1;
    var tmp3 = createSegmentFunction();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp3);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp1 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (cur.ix_1.e1(tmp1.ix_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp1.v14()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.w14()) {
                  cur.s4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp1.w14()) {
                tmp1.s4();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$2;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.ix_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      if (tmp0_0.b3(toLong(other)).e1($this.p16()) < 0) {
        startFrom.d15();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.ix_1.e1(id) > 0) {
        var tmp2 = segment.ix_1;
        // Inline function 'kotlin.Long.times' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$4 = tmp2.b3(toLong(other_0));
        updateSendersCounterIfLower($this, tmp$ret$4);
        var tmp4 = segment.ix_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        if (tmp4.b3(toLong(other_1)).e1($this.p16()) < 0) {
          segment.d15();
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function findSegmentReceive($this, id, startFrom) {
    var tmp0 = $this.m14_1;
    var tmp3 = createSegmentFunction();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp3);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp1 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (cur.ix_1.e1(tmp1.ix_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp1.v14()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.w14()) {
                  cur.s4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp1.w14()) {
                tmp1.s4();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$2;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.ix_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      if (tmp0_0.b3(toLong(other)).e1($this.j15()) < 0) {
        startFrom.d15();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (!_get_isRendezvousOrUnlimited__3mdufi($this)) {
        var tmp2 = _get_bufferEndCounter__2d4hee($this);
        // Inline function 'kotlin.Long.div' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$4 = tmp2.c3(toLong(other_0));
        tmp_1 = id.e1(tmp$ret$4) <= 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp4 = $this.n14_1;
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          while (true) {
            var cur_0 = tmp4.kotlinx$atomicfu$value;
            if (cur_0.ix_1.e1(segment.ix_1) >= 0) {
              break $l$block_5;
            }
            if (!segment.v14()) {
              break $l$block_5;
            }
            if (tmp4.atomicfu$compareAndSet(cur_0, segment)) {
              if (cur_0.w14()) {
                cur_0.s4();
              }
              break $l$block_5;
            }
            if (segment.w14()) {
              segment.s4();
            }
          }
        }
      }
      var tmp_2;
      if (segment.ix_1.e1(id) > 0) {
        var tmp6 = segment.ix_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$7 = tmp6.b3(toLong(other_1));
        updateReceiversCounterIfLower($this, tmp$ret$7);
        var tmp8 = segment.ix_1;
        // Inline function 'kotlin.Long.times' call
        var other_2 = get_SEGMENT_SIZE();
        if (tmp8.b3(toLong(other_2)).e1($this.j15()) < 0) {
          segment.d15();
        }
        tmp_2 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_2 = segment;
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function findSegmentBufferEnd($this, id, startFrom, currentBufferEndCounter) {
    var tmp0 = $this.n14_1;
    var tmp3 = createSegmentFunction();
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp3);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp1 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$0;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (cur.ix_1.e1(tmp1.ix_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp1.v14()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.w14()) {
                  cur.s4();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp1.w14()) {
                tmp1.s4();
              }
            }
            tmp$ret$0 = Unit_instance;
          }
          tmp = tmp$ret$0;
        }
        if (tmp) {
          tmp$ret$2 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$2;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom);
      incCompletedExpandBufferAttempts$default($this);
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.ix_1.e1(id) > 0) {
        // Inline function 'kotlin.Long.plus' call
        var tmp_2 = currentBufferEndCounter.z2(toLong(1));
        var tmp2 = segment.ix_1;
        // Inline function 'kotlin.Long.times' call
        var other = get_SEGMENT_SIZE();
        var tmp$ret$4 = tmp2.b3(toLong(other));
        if ($this.j14_1.atomicfu$compareAndSet(tmp_2, tmp$ret$4)) {
          var tmp4 = segment.ix_1;
          // Inline function 'kotlin.Long.times' call
          var other_0 = get_SEGMENT_SIZE();
          var tmp$ret$5 = tmp4.b3(toLong(other_0));
          incCompletedExpandBufferAttempts($this, tmp$ret$5.a3(currentBufferEndCounter));
        } else {
          incCompletedExpandBufferAttempts$default($this);
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom) {
    var segment = startFrom;
    $l$loop: while (segment.ix_1.e1(id) < 0) {
      var tmp0_elvis_lhs = segment.z14();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.u14()) {
        var tmp1_elvis_lhs = segment.z14();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        segment = tmp_0;
      }
      var tmp0 = $this.n14_1;
      var tmp1 = segment;
      var tmp$ret$0;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.moveForward' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          if (cur.ix_1.e1(tmp1.ix_1) >= 0) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!tmp1.v14()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (tmp0.atomicfu$compareAndSet(cur, tmp1)) {
            if (cur.w14()) {
              cur.s4();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (tmp1.w14()) {
            tmp1.s4();
          }
        }
        tmp$ret$0 = Unit_instance;
      }
      if (tmp$ret$0)
        return Unit_instance;
    }
  }
  function updateSendersCounterIfLower($this, value) {
    var this_0 = $this.h14_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var curCounter = cur.m3(new Long(-1, 268435455));
      if (curCounter.e1(value) >= 0)
        return Unit_instance;
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      var tmp$ret$1 = cur.k3(60).j1();
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$1);
      if ($this.h14_1.atomicfu$compareAndSet(cur, update))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function updateReceiversCounterIfLower($this, value) {
    var this_0 = $this.i14_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      if (cur.e1(value) >= 0)
        return Unit_instance;
      if ($this.i14_1.atomicfu$compareAndSet(cur, value))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function bindCancellationFunResult($this, _this__u8e3s4) {
    return BufferedChannel$onCancellationChannelResultImplDoNotCall$ref($this);
  }
  function onCancellationChannelResultImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.g14_1), ensureNotNull(ChannelResult__getOrNull_impl_f5e07h(element)), context);
  }
  function bindCancellationFun($this, _this__u8e3s4, element) {
    return BufferedChannel$bindCancellationFun$lambda(_this__u8e3s4, element);
  }
  function bindCancellationFun_0($this, _this__u8e3s4) {
    return BufferedChannel$onCancellationImplDoNotCall$ref($this);
  }
  function onCancellationImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.g14_1), element, context);
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda($element, this$0, $select) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      var tmp;
      if (!($element === get_CHANNEL_CLOSED())) {
        callUndeliveredElement(this$0.g14_1, ($element == null ? true : !($element == null)) ? $element : THROW_CCE(), $select.s9());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this$0) {
    return function (select, _unused_var__etf5q3, element) {
      return BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda(element, this$0, select);
    };
  }
  function BufferedChannel$onCancellationChannelResultImplDoNotCall$ref($boundThis) {
    var l = function (p0, p1, p2) {
      onCancellationChannelResultImplDoNotCall($boundThis, p0, p1.l17_1, p2);
      return Unit_instance;
    };
    l.callableName = 'onCancellationChannelResultImplDoNotCall';
    return l;
  }
  function BufferedChannel$bindCancellationFun$lambda($this_bindCancellationFun, $element) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, context) {
      callUndeliveredElement($this_bindCancellationFun, $element, context);
      return Unit_instance;
    };
  }
  function BufferedChannel$onCancellationImplDoNotCall$ref($boundThis) {
    var l = function (p0, p1, p2) {
      onCancellationImplDoNotCall($boundThis, p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = 'onCancellationImplDoNotCall';
    return l;
  }
  function $sendCOROUTINE$3(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u17_1 = _this__u8e3s4;
    this.v17_1 = element;
  }
  protoOf($sendCOROUTINE$3).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 11;
            var tmp_0 = this;
            tmp_0.w17_1 = this.u17_1;
            var tmp_1 = this;
            tmp_1.x17_1 = this.v17_1;
            var tmp_2 = this;
            tmp_2.y17_1 = null;
            this.m9_1 = 1;
            continue $sm;
          case 1:
            this.a18_1 = this.w17_1;
            this.b18_1 = this.x17_1;
            this.c18_1 = this.y17_1;
            this.d18_1 = this.a18_1.l14_1.kotlinx$atomicfu$value;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.m9_1 = 12;
              continue $sm;
            }

            this.e18_1 = this.a18_1.h14_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            tmp_3.f18_1 = this.e18_1.m3(new Long(-1, 268435455));
            this.g18_1 = _get_isClosedForSend0__kxgf9m(this.a18_1, this.e18_1);
            var tmp_4 = this;
            var tmp0 = this.f18_1;
            var other = get_SEGMENT_SIZE();
            tmp_4.h18_1 = tmp0.c3(toLong(other));
            var tmp_5 = this;
            var tmp2 = this.f18_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_5.i18_1 = tmp2.d3(toLong(other_0)).j1();
            if (!this.d18_1.ix_1.equals(this.h18_1)) {
              this.j18_1 = findSegmentSend(this.a18_1, this.h18_1, this.d18_1);
              if (this.j18_1 == null) {
                if (this.g18_1) {
                  this.m9_1 = 10;
                  suspendResult = onClosedSend(this.u17_1, this.v17_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.m9_1 = 2;
                  continue $sm;
                }
              } else {
                this.k18_1 = this.j18_1;
                this.m9_1 = 3;
                continue $sm;
              }
            } else {
              this.m9_1 = 4;
              continue $sm;
            }

          case 3:
            this.d18_1 = this.k18_1;
            this.m9_1 = 4;
            continue $sm;
          case 4:
            this.l18_1 = updateCellSend(this.a18_1, this.d18_1, this.i18_1, this.b18_1, this.f18_1, this.c18_1, this.g18_1);
            if (this.l18_1 === 0) {
              this.d18_1.d15();
              var tmp_6 = this;
              tmp_6.z17_1 = Unit_instance;
              this.m9_1 = 13;
              continue $sm;
            } else {
              if (this.l18_1 === 1) {
                var tmp_7 = this;
                tmp_7.z17_1 = Unit_instance;
                this.m9_1 = 13;
                continue $sm;
              } else {
                if (this.l18_1 === 2) {
                  if (this.g18_1) {
                    this.d18_1.t14();
                    this.m9_1 = 9;
                    suspendResult = onClosedSend(this.u17_1, this.v17_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.m9_1 = 8;
                    continue $sm;
                  }
                } else {
                  if (this.l18_1 === 4) {
                    if (this.f18_1.e1(this.a18_1.p16()) < 0) {
                      this.d18_1.d15();
                    }
                    this.m9_1 = 7;
                    suspendResult = onClosedSend(this.u17_1, this.v17_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.l18_1 === 5) {
                      this.d18_1.d15();
                      this.m9_1 = 2;
                      continue $sm;
                    } else {
                      if (this.l18_1 === 3) {
                        var tmp_8 = this;
                        tmp_8.m18_1 = this.d18_1;
                        var tmp_9 = this;
                        tmp_9.n18_1 = this.i18_1;
                        var tmp_10 = this;
                        tmp_10.o18_1 = this.b18_1;
                        var tmp_11 = this;
                        tmp_11.p18_1 = this.f18_1;
                        this.q18_1 = this.m18_1;
                        this.r18_1 = this.n18_1;
                        this.s18_1 = this.o18_1;
                        this.t18_1 = this.p18_1;
                        this.m9_1 = 6;
                        suspendResult = sendOnNoWaiterSuspend(this.u17_1, this.q18_1, this.r18_1, this.s18_1, this.t18_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.m9_1 = 5;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 5:
            this.m9_1 = 2;
            continue $sm;
          case 6:
            var tmp_12 = this;
            tmp_12.z17_1 = Unit_instance;
            this.m9_1 = 13;
            continue $sm;
          case 7:
            var tmp_13 = this;
            tmp_13.z17_1 = Unit_instance;
            this.m9_1 = 13;
            continue $sm;
          case 8:
            var tmp_14 = this.c18_1;
            var tmp2_safe_receiver = (!(tmp_14 == null) ? isInterface(tmp_14, Waiter) : false) ? tmp_14 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(this.a18_1, tmp2_safe_receiver, this.d18_1, this.i18_1);
            }

            var tmp_15 = this;
            this.d18_1;
            this.i18_1;
            tmp_15.z17_1 = Unit_instance;
            this.m9_1 = 13;
            continue $sm;
          case 9:
            var tmp_16 = this;
            tmp_16.z17_1 = Unit_instance;
            this.m9_1 = 13;
            continue $sm;
          case 10:
            var tmp_17 = this;
            tmp_17.z17_1 = Unit_instance;
            this.m9_1 = 13;
            continue $sm;
          case 11:
            throw this.p9_1;
          case 12:
            if (false) {
              this.m9_1 = 1;
              continue $sm;
            }

            this.m9_1 = 13;
            continue $sm;
          case 13:
            return Unit_instance;
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
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.f14_1 = capacity;
    this.g14_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    if (!(this.f14_1 >= 0)) {
      var message = 'Invalid channel capacity: ' + this.f14_1 + ', should be >=0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.h14_1 = atomic$long$1(new Long(0, 0));
    this.i14_1 = atomic$long$1(new Long(0, 0));
    this.j14_1 = atomic$long$1(initialBufferEnd(this.f14_1));
    this.k14_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(new Long(0, 0), null, this, 3);
    this.l14_1 = atomic$ref$1(firstSegment);
    this.m14_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.n14_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp_3;
    if (this.g14_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
    }
    tmp_2.o14_1 = tmp_3;
    this.p14_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.q14_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).j15 = function () {
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    return this.h14_1.kotlinx$atomicfu$value.m3(new Long(-1, 268435455));
  };
  protoOf(BufferedChannel).p16 = function () {
    return this.i14_1.kotlinx$atomicfu$value;
  };
  protoOf(BufferedChannel).u18 = function (element, $completion) {
    var tmp = new $sendCOROUTINE$3(this, element, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(BufferedChannel).v18 = function (element) {
    if (shouldSendSuspend0(this, this.h14_1.kotlinx$atomicfu$value))
      return Companion_getInstance().w18();
    var tmp2 = get_INTERRUPTED_SEND();
    var tmp$ret$4;
    $l$block_4: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = this.l14_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.h14_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.m3(new Long(-1, 268435455));
        var closed = _get_isClosedForSend0__kxgf9m(this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = s.c3(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = s.d3(toLong(other_0)).j1();
        if (!segment.ix_1.equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              tmp$ret$4 = Companion_getInstance().i17(this.o16());
              break $l$block_4;
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        switch (updateCellSend(this, segment, i, element, s, tmp2, closed)) {
          case 0:
            segment.d15();
            tmp$ret$4 = Companion_getInstance().u16(Unit_instance);
            break $l$block_4;
          case 1:
            tmp$ret$4 = Companion_getInstance().u16(Unit_instance);
            break $l$block_4;
          case 2:
            if (closed) {
              segment.t14();
              tmp$ret$4 = Companion_getInstance().i17(this.o16());
              break $l$block_4;
            }

            var tmp2_safe_receiver = (!(tmp2 == null) ? isInterface(tmp2, Waiter) : false) ? tmp2 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
            }

            segment.t14();
            tmp$ret$4 = Companion_getInstance().w18();
            break $l$block_4;
          case 4:
            if (s.e1(this.p16()) < 0) {
              segment.d15();
            }

            tmp$ret$4 = Companion_getInstance().i17(this.o16());
            break $l$block_4;
          case 5:
            segment.d15();
            continue $l$loop_0;
          case 3:
            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(BufferedChannel).x18 = function (element) {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
    var waiter = get_BUFFERED();
    var segment = this.l14_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var sendersAndCloseStatusCur = this.h14_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var s = sendersAndCloseStatusCur.m3(new Long(-1, 268435455));
      var closed = _get_isClosedForSend0__kxgf9m(this, sendersAndCloseStatusCur);
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = s.c3(toLong(other));
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = s.d3(toLong(other_0)).j1();
      if (!segment.ix_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (closed) {
            return Companion_getInstance().i17(this.o16());
          } else {
            continue $l$loop_0;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      switch (updateCellSend(this, segment, i, element, s, waiter, closed)) {
        case 0:
          segment.d15();
          return Companion_getInstance().u16(Unit_instance);
        case 1:
          return Companion_getInstance().u16(Unit_instance);
        case 2:
          if (closed) {
            segment.t14();
            return Companion_getInstance().i17(this.o16());
          }

          var tmp2_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
          }

          var tmp4 = segment.ix_1;
          // Inline function 'kotlin.Long.times' call

          var other_1 = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call

          var tmp$ret$5 = tmp4.b3(toLong(other_1)).z2(toLong(i));
          this.g17(tmp$ret$5);
          return Companion_getInstance().u16(Unit_instance);
        case 4:
          if (s.e1(this.p16()) < 0) {
            segment.d15();
          }

          return Companion_getInstance().i17(this.o16());
        case 5:
          segment.d15();
          continue $l$loop_0;
        case 3:
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp$ret$3;
  };
  protoOf(BufferedChannel).x16 = function () {
  };
  protoOf(BufferedChannel).q16 = function () {
  };
  protoOf(BufferedChannel).g17 = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.m14_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var r = this.i14_1.kotlinx$atomicfu$value;
      // Inline function 'kotlin.Long.plus' call
      var other = this.f14_1;
      var tmp2 = r.z2(toLong(other));
      // Inline function 'kotlin.math.max' call
      var b = _get_bufferEndCounter__2d4hee(this);
      var tmp$ret$2 = tmp2.e1(b) >= 0 ? tmp2 : b;
      if (globalCellIndex.e1(tmp$ret$2) < 0)
        return Unit_instance;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$3 = r.z2(toLong(1));
      if (!this.i14_1.atomicfu$compareAndSet(r, tmp$ret$3))
        continue $l$loop_0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = get_SEGMENT_SIZE();
      var id = r.c3(toLong(other_0));
      // Inline function 'kotlin.Long.rem' call
      var other_1 = get_SEGMENT_SIZE();
      var i = r.d3(toLong(other_1)).j1();
      if (!segment.ix_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var updCellResult = updateCellReceive(this, segment, i, r, null);
      if (updCellResult === get_FAILED()) {
        if (r.e1(this.j15()) < 0) {
          segment.d15();
        }
      } else {
        segment.d15();
        var tmp1_safe_receiver = this.g14_1;
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE());
        }
        var tmp2_safe_receiver = tmp_0;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          throw tmp2_safe_receiver;
        }
      }
    }
  };
  protoOf(BufferedChannel).s14 = function (globalIndex) {
    if (_get_isRendezvousOrUnlimited__3mdufi(this))
      return Unit_instance;
    while (_get_bufferEndCounter__2d4hee(this).e1(globalIndex) <= 0) {
    }
    // Inline function 'kotlin.repeat' call
    var times = get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS();
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = _get_bufferEndCounter__2d4hee(this);
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var ebCompleted = this.k14_1.kotlinx$atomicfu$value.m3(new Long(-1, 1073741823));
        if (b.equals(ebCompleted) && b.equals(_get_bufferEndCounter__2d4hee(this)))
          return Unit_instance;
      }
       while (inductionVariable < times);
    var tmp2 = this.k14_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp2.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var tmp$ret$3 = cur.m3(new Long(-1, 1073741823));
        var upd = constructEBCompletedAndPauseFlag(tmp$ret$3, true);
        if (tmp2.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    while (true) {
      var b_0 = _get_bufferEndCounter__2d4hee(this);
      var ebCompletedAndBit = this.k14_1.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      var ebCompleted_0 = ebCompletedAndBit.m3(new Long(-1, 1073741823));
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      var pauseExpandBuffers = !ebCompletedAndBit.m3(new Long(0, 1073741824)).equals(new Long(0, 0));
      if (b_0.equals(ebCompleted_0) && b_0.equals(_get_bufferEndCounter__2d4hee(this))) {
        var tmp4 = this.k14_1;
        $l$block_0: {
          // Inline function 'kotlinx.atomicfu.update' call
          while (true) {
            var cur_0 = tmp4.kotlinx$atomicfu$value;
            // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
            var tmp$ret$8 = cur_0.m3(new Long(-1, 1073741823));
            var upd_0 = constructEBCompletedAndPauseFlag(tmp$ret$8, false);
            if (tmp4.atomicfu$compareAndSet(cur_0, upd_0)) {
              break $l$block_0;
            }
          }
        }
        return Unit_instance;
      }
      if (!pauseExpandBuffers) {
        this.k14_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).p = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).i15 = function () {
    var tmp = this.p14_1.kotlinx$atomicfu$value;
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).o16 = function () {
    var tmp0_elvis_lhs = this.i15();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException('Channel was closed') : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).y18 = function () {
  };
  protoOf(BufferedChannel).z18 = function (cause) {
    return this.a19(cause, false);
  };
  protoOf(BufferedChannel).ys = function (cause) {
    this.c19(cause);
  };
  protoOf(BufferedChannel).c19 = function (cause) {
    return this.a19(cause == null ? CancellationException_init_$Create$('Channel was cancelled') : cause, true);
  };
  protoOf(BufferedChannel).a19 = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this.p14_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    // Inline function 'kotlin.also' call
    this.y18();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    return closedByThisOperation;
  };
  protoOf(BufferedChannel).h17 = function () {
    return false;
  };
  protoOf(BufferedChannel).f17 = function () {
    return _get_isClosedForSend0__kxgf9m(this, this.h14_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).k15 = function () {
    return _get_isClosedForReceive0__f7qknl(this, this.h14_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).j17 = function () {
    $l$loop: while (true) {
      var segment = this.m14_1.kotlinx$atomicfu$value;
      var r = this.p16();
      var s = this.j15();
      if (s.e1(r) <= 0)
        return false;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = r.c3(toLong(other));
      if (!segment.ix_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (this.m14_1.kotlinx$atomicfu$value.ix_1.e1(id) < 0) {
            return false;
          } else {
            continue $l$loop;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.d15();
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = r.d3(toLong(other_0)).j1();
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = r.z2(toLong(1));
      this.i14_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp0_subject = this.h14_1.kotlinx$atomicfu$value.k3(60).j1();
    if (tmp0_subject === 2) {
      sb.x8('closed,');
    } else if (tmp0_subject === 3) {
      sb.x8('cancelled,');
    }
    sb.x8('capacity=' + this.f14_1 + ',');
    sb.x8('data=[');
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = listOf([this.m14_1.kotlinx$atomicfu$value, this.l14_1.kotlinx$atomicfu$value, this.n14_1.kotlinx$atomicfu$value]);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      if (!(element === get_NULL_SEGMENT())) {
        destination.n(element);
      }
    }
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      var iterator = destination.p();
      if (!iterator.q())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.r();
      if (!iterator.q()) {
        tmp$ret$4 = minElem;
        break $l$block;
      }
      var minValue = minElem.ix_1;
      do {
        var e = iterator.r();
        var v = e.ix_1;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.q());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.p16();
    var s = this.j15();
    var segment = firstSegment;
    append_elements: while (true) {
      var inductionVariable = 0;
      var last_0 = get_SEGMENT_SIZE();
      if (inductionVariable < last_0)
        process_cell: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp5 = segment.ix_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var globalCellIndex = tmp5.b3(toLong(other)).z2(toLong(i));
          if (globalCellIndex.e1(s) >= 0 && globalCellIndex.e1(r) >= 0)
            break append_elements;
          var cellState = segment.b14(i);
          var element_0 = segment.y13(i);
          var tmp;
          if (!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) {
            tmp = globalCellIndex.e1(r) < 0 && globalCellIndex.e1(s) >= 0 ? 'receive' : globalCellIndex.e1(s) < 0 && globalCellIndex.e1(r) >= 0 ? 'send' : 'cont';
          } else {
            if (!(cellState == null) ? isInterface(cellState, SelectInstance) : false) {
              tmp = globalCellIndex.e1(r) < 0 && globalCellIndex.e1(s) >= 0 ? 'onReceive' : globalCellIndex.e1(s) < 0 && globalCellIndex.e1(r) >= 0 ? 'onSend' : 'select';
            } else {
              if (cellState instanceof ReceiveCatching) {
                tmp = 'receiveCatching';
              } else {
                if (cellState instanceof SendBroadcast) {
                  tmp = 'sendBroadcast';
                } else {
                  if (cellState instanceof WaiterEB) {
                    tmp = 'EB(' + cellState.toString() + ')';
                  } else {
                    if (equals(cellState, get_RESUMING_BY_RCV()) || equals(cellState, get_RESUMING_BY_EB())) {
                      tmp = 'resuming_sender';
                    } else {
                      if (cellState == null || (equals(cellState, get_IN_BUFFER()) || equals(cellState, get_DONE_RCV())) || (equals(cellState, get_POISONED()) || equals(cellState, get_INTERRUPTED_RCV()) || (equals(cellState, get_INTERRUPTED_SEND()) || equals(cellState, get_CHANNEL_CLOSED())))) {
                        continue process_cell;
                      } else {
                        tmp = toString(cellState);
                      }
                    }
                  }
                }
              }
            }
          }
          var cellStateString = tmp;
          if (!(element_0 == null)) {
            sb.x8('(' + cellStateString + ',' + toString_0(element_0) + '),');
          } else {
            sb.x8(cellStateString + ',');
          }
        }
         while (inductionVariable < last_0);
      var tmp2_elvis_lhs = segment.z14();
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (last(sb) === _Char___init__impl__6a9atx(44)) {
      sb.fe(sb.a() - 1 | 0);
    }
    sb.x8(']');
    return sb.toString();
  };
  function WaiterEB(waiter) {
    this.r16_1 = waiter;
  }
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + toString(this.r16_1) + ')';
  };
  function initialBufferEnd(capacity) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    switch (capacity) {
      case 0:
        return new Long(0, 0);
      case 2147483647:
        return new Long(-1, 2147483647);
      default:
        return toLong(capacity);
    }
  }
  function ReceiveCatching() {
  }
  function tryResume0(_this__u8e3s4, value, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_BufferedChannel_kt__d6uc4y();
    // Inline function 'kotlin.let' call
    var token = _this__u8e3s4.pw(value, null, onCancellation);
    var tmp;
    if (!(token == null)) {
      _this__u8e3s4.uu(token);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function constructEBCompletedAndPauseFlag(counter, pauseEB) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return (pauseEB ? new Long(0, 1073741824) : new Long(0, 0)).z2(counter);
  }
  function constructSendersAndCloseStatus(counter, closeStatus) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return toLong(closeStatus).j3(60).z2(counter);
  }
  function createSegmentFunction() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return createSegment$ref();
  }
  function createSegment(id, prev) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return new ChannelSegment(id, prev, prev.v13(), 0);
  }
  function createSegment$ref() {
    var l = function (p0, p1) {
      return createSegment(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  var properties_initialized_BufferedChannel_kt_58tjvw;
  function _init_properties_BufferedChannel_kt__d6uc4y() {
    if (!properties_initialized_BufferedChannel_kt_58tjvw) {
      properties_initialized_BufferedChannel_kt_58tjvw = true;
      NULL_SEGMENT = new ChannelSegment(new Long(-1, -1), null, null, 0);
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.bufferedChannel.segmentSize', 32);
      EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS = systemProp('kotlinx.coroutines.bufferedChannel.expandBufferCompletionWaitIterations', 10000);
      BUFFERED = new Symbol('BUFFERED');
      IN_BUFFER = new Symbol('SHOULD_BUFFER');
      RESUMING_BY_RCV = new Symbol('S_RESUMING_BY_RCV');
      RESUMING_BY_EB = new Symbol('RESUMING_BY_EB');
      POISONED = new Symbol('POISONED');
      DONE_RCV = new Symbol('DONE_RCV');
      INTERRUPTED_SEND = new Symbol('INTERRUPTED_SEND');
      INTERRUPTED_RCV = new Symbol('INTERRUPTED_RCV');
      CHANNEL_CLOSED = new Symbol('CHANNEL_CLOSED');
      SUSPEND = new Symbol('SUSPEND');
      SUSPEND_NO_WAITER = new Symbol('SUSPEND_NO_WAITER');
      FAILED = new Symbol('FAILED');
      NO_RECEIVE_RESULT = new Symbol('NO_RECEIVE_RESULT');
      CLOSE_HANDLER_CLOSED = new Symbol('CLOSE_HANDLER_CLOSED');
      CLOSE_HANDLER_INVOKED = new Symbol('CLOSE_HANDLER_INVOKED');
      NO_CLOSE_CAUSE = new Symbol('NO_CLOSE_CAUSE');
    }
  }
  function Factory() {
    Factory_instance = this;
    this.e19_1 = 2147483647;
    this.f19_1 = 0;
    this.g19_1 = -1;
    this.h19_1 = -2;
    this.i19_1 = -3;
    this.j19_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.k19_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw($this);
      tmp = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l19_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.l19_1 = cause;
  }
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.l19_1, other.l19_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.l19_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + toString_0(this.l19_1) + ')';
  };
  function Companion() {
    Companion_instance_0 = this;
    this.t16_1 = new Failed();
  }
  protoOf(Companion).u16 = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).w18 = function () {
    return _ChannelResult___init__impl__siwsuf(this.t16_1);
  };
  protoOf(Companion).i17 = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed(cause));
  };
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp;
    if (_ChannelResult___get_holder__impl__pm9gzw($this) instanceof Closed) {
      tmp = _ChannelResult___get_holder__impl__pm9gzw($this).toString();
    } else {
      tmp = 'Value(' + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.l17_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance();
    this.l17_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.l17_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.l17_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.l17_1, other);
  };
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function SendChannel() {
  }
  function ReceiveChannel() {
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp;
    switch (capacity) {
      case 0:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(0, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      case -1:
        // Inline function 'kotlin.require' call

        if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }

        tmp = new ConflatedBufferedChannel(1, BufferOverflow_DROP_OLDEST_getInstance(), onUndeliveredElement);
        break;
      case 2147483647:
        tmp = new BufferedChannel(2147483647, onUndeliveredElement);
        break;
      case -2:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().k19_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      default:
        tmp = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.p19_1 = _channel;
  }
  protoOf(ChannelCoroutine).ys = function (cause) {
    if (this.ms())
      return Unit_instance;
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.ur() : null, null, this);
    } else {
      tmp = cause;
    }
    this.at(tmp);
  };
  protoOf(ChannelCoroutine).d19 = function (cause, $super) {
    return this.zs(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).at = function (cause) {
    var exception = this.rs(cause);
    this.p19_1.ys(exception);
    this.dt(exception);
  };
  protoOf(ChannelCoroutine).u18 = function (element, $completion) {
    return this.p19_1.u18(element, $completion);
  };
  protoOf(ChannelCoroutine).v18 = function (element) {
    return this.p19_1.v18(element);
  };
  protoOf(ChannelCoroutine).z18 = function (cause) {
    return this.p19_1.z18(cause);
  };
  protoOf(ChannelCoroutine).p = function () {
    return this.p19_1.p();
  };
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp;
    if (cause == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
      tmp = tmp0_elvis_lhs == null ? CancellationException_0('Channel was consumed, consumer had failed', cause) : tmp0_elvis_lhs;
    }
    _this__u8e3s4.ys(tmp);
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.d1a_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : $this.x18(element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).v18.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) || _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp0_safe_receiver = $this.g14_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        throw tmp1_safe_receiver;
      }
    }
    return Companion_getInstance().u16(Unit_instance);
  }
  function ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    BufferedChannel.call(this, capacity, onUndeliveredElement);
    this.c1a_1 = capacity;
    this.d1a_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    if (!!(this.d1a_1 === BufferOverflow_SUSPEND_getInstance())) {
      var message = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).hc() + ' instead';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.c1a_1 >= 1)) {
      var message_0 = 'Buffered channel capacity must be at least 1, but ' + this.c1a_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).h17 = function () {
    return this.d1a_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).u18 = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var this_0 = trySendImpl(this, element, true);
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (tmp instanceof Closed) {
      ChannelResult__exceptionOrNull_impl_16ei30(this_0);
      var tmp0_safe_receiver = this.g14_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, this.o16());
        throw tmp1_safe_receiver;
      }
      throw this.o16();
    }
    return Unit_instance;
  };
  protoOf(ConflatedBufferedChannel).v18 = function (element) {
    return trySendImpl(this, element, false);
  };
  function produce(_this__u8e3s4, context, capacity, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    return produce_0(_this__u8e3s4, context, capacity, BufferOverflow_SUSPEND_getInstance(), CoroutineStart_DEFAULT_getInstance(), null, block);
  }
  function ProducerScope() {
  }
  function produce_0(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    onCompletion = onCompletion === VOID ? null : onCompletion;
    var channel = Channel(capacity, onBufferOverflow);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.ss(onCompletion);
    }
    coroutine.es(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).rr = function () {
    return protoOf(ChannelCoroutine).rr.call(this);
  };
  protoOf(ProducerCoroutine).i1a = function (value) {
    this.p19_1.b19();
  };
  protoOf(ProducerCoroutine).sr = function (value) {
    return this.i1a(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).tr = function (cause, handled) {
    var processed = this.p19_1.z18(cause);
    if (!processed && !handled) {
      handleCoroutineException(this.pr_1, cause);
    }
  };
  protoOf(ProducerCoroutine).d19 = function (cause, $super) {
    return this.zs(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function asFlow(_this__u8e3s4) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new asFlow$$inlined$unsafeFlow$1(_this__u8e3s4);
  }
  function $collectCOROUTINE$10(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r1a_1 = _this__u8e3s4;
    this.s1a_1 = collector;
  }
  protoOf($collectCOROUTINE$10).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            var tmp_0 = this;
            tmp_0.t1a_1 = this.s1a_1;
            this.u1a_1 = this.t1a_1;
            var tmp_1 = this;
            tmp_1.v1a_1 = this.r1a_1.b1b_1;
            this.w1a_1 = this.v1a_1;
            this.x1a_1 = this.w1a_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.x1a_1.q()) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.y1a_1 = this.x1a_1.r();
            var tmp_2 = this;
            tmp_2.z1a_1 = this.y1a_1;
            this.a1b_1 = this.z1a_1;
            this.m9_1 = 2;
            suspendResult = this.u1a_1.c1b(this.a1b_1, this);
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
  function asFlow$$inlined$unsafeFlow$1($this_asFlow) {
    this.b1b_1 = $this_asFlow;
  }
  protoOf(asFlow$$inlined$unsafeFlow$1).d1b = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$10(this, collector, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(asFlow$$inlined$unsafeFlow$1).e1b = function (collector, $completion) {
    return this.d1b(collector, $completion);
  };
  function FlowCollector() {
  }
  function checkOwnership(_this__u8e3s4, owner) {
    if (!(_this__u8e3s4.f1b_1 === owner))
      throw _this__u8e3s4;
  }
  function firstOrNull(_this__u8e3s4, predicate, $completion) {
    var tmp = new $firstOrNullCOROUTINE$20(_this__u8e3s4, predicate, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function $emitCOROUTINE$21(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c1c_1 = _this__u8e3s4;
    this.d1c_1 = value;
  }
  protoOf($emitCOROUTINE$21).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            var tmp_0 = this;
            tmp_0.e1c_1 = this.d1c_1;
            this.f1c_1 = this.e1c_1;
            this.m9_1 = 1;
            suspendResult = this.c1c_1.h1c_1(this.f1c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_1 = this;
              this.c1c_1.i1c_1._v = this.f1c_1;
              tmp_1.g1c_1 = false;
              this.m9_1 = 2;
              continue $sm;
            } else {
              var tmp_2 = this;
              tmp_2.g1c_1 = true;
              this.m9_1 = 2;
              continue $sm;
            }

          case 2:
            var ARGUMENT = this.g1c_1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this.c1c_1);
            } else {
              this.m9_1 = 3;
              continue $sm;
            }

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
  function firstOrNull$$inlined$collectWhile$1($predicate, $result) {
    this.h1c_1 = $predicate;
    this.i1c_1 = $result;
  }
  protoOf(firstOrNull$$inlined$collectWhile$1).j1c = function (value, $completion) {
    var tmp = new $emitCOROUTINE$21(this, value, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(firstOrNull$$inlined$collectWhile$1).c1b = function (value, $completion) {
    return this.j1c((value == null ? true : !(value == null)) ? value : THROW_CCE(), $completion);
  };
  function $firstOrNullCOROUTINE$20(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o1b_1 = _this__u8e3s4;
    this.p1b_1 = predicate;
  }
  protoOf($firstOrNullCOROUTINE$20).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.q1b_1 = {_v: null};
            var tmp_0 = this;
            tmp_0.r1b_1 = this.o1b_1;
            this.s1b_1 = this.r1b_1;
            var tmp_1 = this;
            tmp_1.t1b_1 = new firstOrNull$$inlined$collectWhile$1(this.p1b_1, this.q1b_1);
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.s1b_1.e1b(this.t1b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n9_1 = 4;
            this.m9_1 = 3;
            continue $sm;
          case 2:
            this.n9_1 = 4;
            var tmp_2 = this.p9_1;
            if (tmp_2 instanceof AbortFlowException) {
              var e = this.p9_1;
              checkOwnership(e, this.t1b_1);
              ensureActive(this.s9());
              this.m9_1 = 3;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            this.n9_1 = 4;
            return this.q1b_1._v;
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
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.ix_1 = id;
    this.jx_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).u14 = function () {
    return this.jx_1.kotlinx$atomicfu$value === this.w13() && !this.b15();
  };
  protoOf(Segment).v14 = function () {
    var tmp0 = this.jx_1;
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        if (!(!(cur === this.w13()) || this.b15())) {
          tmp$ret$1 = false;
          break $l$block_0;
        }
        if (tmp0.atomicfu$compareAndSet(cur, cur + 65536 | 0)) {
          tmp$ret$1 = true;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(Segment).w14 = function () {
    return this.jx_1.atomicfu$addAndGet(-65536) === this.w13() && !this.b15();
  };
  protoOf(Segment).t14 = function () {
    if (this.jx_1.atomicfu$incrementAndGet() === this.w13()) {
      this.s4();
    }
  };
  function close(_this__u8e3s4) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return cur;
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (next === null) {
        if (cur.e15())
          return cur;
      } else {
        cur = next;
      }
    }
  }
  function _SegmentOrClosed___init__impl__jnexvb(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _SegmentOrClosed___get_isClosed__impl__qmxmlo($this) {
    return _get_value__a43j40($this) === get_CLOSED();
  }
  function _SegmentOrClosed___get_segment__impl__jvcr9l($this) {
    var tmp;
    if (_get_value__a43j40($this) === get_CLOSED()) {
      var message = 'Does not contain segment';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      var tmp_0 = _get_value__a43j40($this);
      tmp = tmp_0 instanceof Segment ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function SegmentOrClosed__toString_impl_pzb2an($this) {
    return 'SegmentOrClosed(value=' + toString_0($this) + ')';
  }
  function SegmentOrClosed__hashCode_impl_4855hs($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function SegmentOrClosed__equals_impl_6erq1g($this, other) {
    if (!(other instanceof SegmentOrClosed))
      return false;
    var tmp0_other_with_cast = other instanceof SegmentOrClosed ? other.k17_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.k17_1 = value;
  }
  protoOf(SegmentOrClosed).toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.k17_1);
  };
  protoOf(SegmentOrClosed).hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.k17_1);
  };
  protoOf(SegmentOrClosed).equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.k17_1, other);
  };
  function _get_nextOrClosed__w0gmuv($this) {
    return $this.x14_1.kotlinx$atomicfu$value;
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.c15();
    while (!(cur === null) && cur.u14())
      cur = cur.y14_1.kotlinx$atomicfu$value;
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.z14());
    while (cur.u14()) {
      var tmp0_elvis_lhs = cur.z14();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return cur;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      cur = tmp;
    }
    return cur;
  }
  function access$_get_nextOrClosed__ywzond($this) {
    return _get_nextOrClosed__w0gmuv($this);
  }
  function ConcurrentLinkedListNode(prev) {
    this.x14_1 = atomic$ref$1(null);
    this.y14_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).z14 = function () {
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
    // Inline function 'kotlin.let' call
    var it = access$_get_nextOrClosed__ywzond(this);
    var tmp;
    if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
      return null;
    } else {
      tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
    }
    return tmp;
  };
  protoOf(ConcurrentLinkedListNode).a15 = function (value) {
    return this.x14_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).b15 = function () {
    return this.z14() == null;
  };
  protoOf(ConcurrentLinkedListNode).c15 = function () {
    return this.y14_1.kotlinx$atomicfu$value;
  };
  protoOf(ConcurrentLinkedListNode).d15 = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    this.y14_1.kotlinx$atomicfu$value = null;
  };
  protoOf(ConcurrentLinkedListNode).e15 = function () {
    return this.x14_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).s4 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.b15())
      return Unit_instance;
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      var tmp0 = next.y14_1;
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          var upd = cur === null ? null : prev;
          if (tmp0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
      if (!(prev === null))
        prev.x14_1.kotlinx$atomicfu$value = next;
      if (next.u14() && !next.b15())
        continue $l$loop_0;
      if (!(prev === null) && prev.u14())
        continue $l$loop_0;
      return Unit_instance;
    }
  };
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (cur.ix_1.e1(id) < 0 || cur.u14()) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (!(next == null)) {
        cur = next;
        continue $l$loop;
      }
      // Inline function 'kotlin.Long.plus' call
      var newTail = createNewSegment(cur.ix_1.z2(toLong(1)), cur);
      if (cur.a15(newTail)) {
        if (cur.u14()) {
          cur.s4();
        }
        cur = newTail;
      }
    }
    return _SegmentOrClosed___init__impl__jnexvb(cur);
  }
  function access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy() {
    return get_CLOSED();
  }
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (!properties_initialized_ConcurrentLinkedList_kt_kwt434) {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function handleUncaughtCoroutineException(context, exception) {
    var _iterator__ex2g4s = get_platformExceptionHandlers().p();
    while (_iterator__ex2g4s.q()) {
      var handler = _iterator__ex2g4s.r();
      try {
        handler.uz(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _unused_var__etf5q3 = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.ax_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.ww_1 = dispatcher;
    this.xw_1 = continuation;
    this.yw_1 = get_UNDEFINED();
    this.zw_1 = threadContextElements(this.s9());
    this.ax_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).dx = function () {
    return !(this.ax_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).k1c = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.ax_1;
    while (true) {
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).sz = function () {
    this.k1c();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ux();
    }
  };
  protoOf(DispatchedContinuation).bx = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.ax_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === null) {
        this.ax_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (state instanceof CancellableContinuationImpl) {
          if (this.ax_1.atomicfu$compareAndSet(state, get_REUSABLE_CLAIMED())) {
            return state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          }
        } else {
          if (state !== get_REUSABLE_CLAIMED()) {
            if (!(state instanceof Error)) {
              // Inline function 'kotlin.error' call
              var message = 'Inconsistent state ' + toString_0(state);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).fy = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.ax_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.ax_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.require' call
          if (!this.ax_1.atomicfu$compareAndSet(state, null)) {
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          // Inline function 'kotlin.error' call
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).fx = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.ax_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.ax_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.ax_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).wx = function () {
    var state = this.yw_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.yw_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).vx = function () {
    return this;
  };
  protoOf(DispatchedContinuation).ha = function (result) {
    var state = toState_0(result);
    if (safeIsDispatchNeeded(this.ww_1, this.s9())) {
      this.yw_1 = state;
      this.ex_1 = 0;
      safeDispatch(this.ww_1, this.s9(), this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().l10();
        if (false && eventLoop.g10()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.f10()) {
          this.yw_1 = state;
          this.ex_1 = 0;
          eventLoop.e10(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.h10(true);
          try {
            this.s9();
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.zw_1;
            this.xw_1.ha(result);
            $l$loop: while (eventLoop.d10()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.ry(e);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.i10(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.ww_1.toString() + ', ' + toDebugString(this.xw_1) + ']';
  };
  protoOf(DispatchedContinuation).s9 = function () {
    return this.xw_1.s9();
  };
  function safeDispatch(_this__u8e3s4, context, runnable) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    try {
      _this__u8e3s4.rz(context, runnable);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        throw new DispatchException(e, _this__u8e3s4, context);
      } else {
        throw $p;
      }
    }
  }
  function safeIsDispatchNeeded(_this__u8e3s4, context) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    try {
      return _this__u8e3s4.qz(context);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        throw new DispatchException(e, _this__u8e3s4, context);
      } else {
        throw $p;
      }
    }
  }
  function resumeCancellableWith(_this__u8e3s4, result) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith' call
      var state = toState_0(result);
      if (safeIsDispatchNeeded(_this__u8e3s4.ww_1, _this__u8e3s4.s9())) {
        _this__u8e3s4.yw_1 = state;
        _this__u8e3s4.ex_1 = 1;
        safeDispatch(_this__u8e3s4.ww_1, _this__u8e3s4.s9(), _this__u8e3s4);
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().l10();
          if (false && eventLoop.g10()) {
            break $l$block;
          }
          var tmp_0;
          if (eventLoop.f10()) {
            _this__u8e3s4.yw_1 = state;
            _this__u8e3s4.ex_1 = 1;
            eventLoop.e10(_this__u8e3s4);
            tmp_0 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.h10(true);
            try {
              var tmp$ret$4;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.s9().la(Key_instance_3);
                if (!(job == null) && !job.rr()) {
                  var cause = job.ps();
                  _this__u8e3s4.xx(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.ha(tmp$ret$2);
                  tmp$ret$4 = true;
                  break $l$block_0;
                }
                tmp$ret$4 = false;
              }
              if (!tmp$ret$4) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                _this__u8e3s4.xw_1;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.zw_1;
                _this__u8e3s4.xw_1.ha(result);
              }
              $l$loop: while (eventLoop.d10()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.ry(e);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.i10(true);
            }
            tmp_0 = false;
          }
        }
      }
      tmp = Unit_instance;
    } else {
      _this__u8e3s4.ha(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.ex_1 = resumeMode;
  }
  protoOf(DispatchedTask).xx = function (takenState, cause) {
  };
  protoOf(DispatchedTask).ey = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).oy = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wr_1;
  };
  protoOf(DispatchedTask).qy = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    try {
      var tmp = this.vx();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.xw_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.zw_1;
      var context = continuation.s9();
      var state = this.wx();
      var exception = this.oy(state);
      var job = exception == null && get_isCancellableMode(this.ex_1) ? context.la(Key_instance_3) : null;
      if (!(job == null) && !job.rr()) {
        var cause = job.ps();
        this.xx(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.ha(tmp$ret$1);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.ha(tmp$ret$3);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.ey(state);
          var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
          continuation.ha(tmp$ret$5);
        }
      }
    } catch ($p) {
      if ($p instanceof DispatchException) {
        var e = $p;
        handleCoroutineException(this.vx().s9(), e.tz_1);
      } else {
        if ($p instanceof Error) {
          var e_0 = $p;
          this.ry(e_0);
        } else {
          throw $p;
        }
      }
    }
  };
  protoOf(DispatchedTask).ry = function (exception) {
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", exception);
    handleCoroutineException(this.vx().s9(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.vx();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.ex_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.ww_1;
      var context = delegate.s9();
      if (safeIsDispatchNeeded(dispatcher, context)) {
        safeDispatch(dispatcher, context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function DispatchException(cause, dispatcher, context) {
    Exception_init_$Init$('Coroutine dispatcher ' + dispatcher.toString() + ' threw an exception, context = ' + toString(context), cause, this);
    captureStack(this, DispatchException);
    this.tz_1 = cause;
  }
  protoOf(DispatchException).ta = function () {
    return this.tz_1;
  };
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().l10();
    if (eventLoop.f10()) {
      eventLoop.e10(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.h10(true);
      try {
        resume(_this__u8e3s4, _this__u8e3s4.vx(), true);
        $l$loop: while (eventLoop.d10()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.ry(e);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.i10(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.wx();
    var exception = _this__u8e3s4.oy(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.ey(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      this_0.xw_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.zw_1;
      this_0.xw_1.ha(result);
    } else {
      delegate.ha(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).n(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.n((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
        list.n(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function access$_get_holder__kkflen($this) {
    return _get_holder__f6h5pd($this);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      handleCoroutineException(context, tmp0_safe_receiver);
    }
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) && !(undeliveredElementException.cause === ex)) {
          addSuppressed(undeliveredElementException, ex);
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + toString_0(element), ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function ContextScope(context) {
    this.l1c_1 = context;
  }
  protoOf(ContextScope).qr = function () {
    return this.l1c_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.l1c_1) + ')';
  };
  function Symbol(symbol) {
    this.m1c_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.m1c_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? 2147483647 : maxValue;
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).j1();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    maxValue = maxValue === VOID ? new Long(-1, 2147483647) : maxValue;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.e1(parsed) <= 0 ? parsed.e1(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var message_0 = "System property '" + propertyName + "' should be in range " + minValue.toString() + '..' + maxValue.toString() + ", but is '" + parsed.toString() + "'";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp, tmp$ret$0);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp, tmp$ret$0);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(fatalCompletion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function dispatcherFailure(completion, e) {
    var tmp;
    if (e instanceof DispatchException) {
      tmp = e.tz_1;
    } else {
      tmp = e;
    }
    var reportException = tmp;
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(reportException));
    completion.ha(tmp$ret$0);
    throw reportException;
  }
  function startCoroutineCancellable_1(_this__u8e3s4, completion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(createCoroutineUnintercepted_0(_this__u8e3s4, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp, tmp$ret$0);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    var actualCompletion = completion;
    var tmp;
    try {
      // Inline function 'kotlinx.coroutines.withCoroutineContext' call
      actualCompletion.s9();
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineResumed' call
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_1;
        if (e instanceof DispatchException) {
          tmp_1 = e.tz_1;
        } else {
          tmp_1 = e;
        }
        var reportException = tmp_1;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$5 = _Result___init__impl__xyqfz8(createFailure(reportException));
        actualCompletion.ha(tmp$ret$5);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value_0 = (value == null ? true : !(value == null)) ? value : THROW_CCE();
      var tmp$ret$7 = _Result___init__impl__xyqfz8(value_0);
      actualCompletion.ha(tmp$ret$7);
    }
  }
  var DUMMY_PROCESS_RESULT_FUNCTION;
  function get_STATE_REG() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_REG;
  }
  var STATE_REG;
  function get_STATE_COMPLETED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_COMPLETED;
  }
  var STATE_COMPLETED;
  function get_STATE_CANCELLED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_CANCELLED;
  }
  var STATE_CANCELLED;
  function get_NO_RESULT() {
    _init_properties_Select_kt__zhm2jg();
    return NO_RESULT;
  }
  var NO_RESULT;
  var PARAM_CLAUSE_0;
  function SelectInstance() {
  }
  function trySelectInternal($this, clauseObject, internalResult) {
    $l$loop: while (true) {
      var curState = $this.z16_1.kotlinx$atomicfu$value;
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.r1c($this, internalResult);
        if ($this.z16_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.b17_1 = internalResult;
          if (tryResume_0(cont, onCancellation))
            return 0;
          $this.b17_1 = get_NO_RESULT();
          return 2;
        }
      } else {
        var tmp_0;
        if (equals(curState, get_STATE_COMPLETED())) {
          tmp_0 = true;
        } else {
          tmp_0 = curState instanceof ClauseData;
        }
        if (tmp_0)
          return 3;
        else {
          if (equals(curState, get_STATE_CANCELLED()))
            return 2;
          else {
            if (equals(curState, get_STATE_REG())) {
              if ($this.z16_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, KtList)) {
                if ($this.z16_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
                  return 1;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected state: ' + toString(curState);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  }
  function findClause($this, clauseObject) {
    var tmp0_elvis_lhs = $this.a17_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = clauses.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        if (element.o1c_1 === clauseObject) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var message = 'Clause with object ' + toString(clauseObject) + ' is not found';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function ClauseData() {
  }
  protoOf(ClauseData).r1c = function (select, internalResult) {
    var tmp0_safe_receiver = this.q1c_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver(select, this.p1c_1, internalResult);
  };
  function SelectImplementation() {
  }
  protoOf(SelectImplementation).c17 = function (clauseObject, result) {
    return TrySelectDetailedResult_0(trySelectInternal(this, clauseObject, result));
  };
  var TrySelectDetailedResult_SUCCESSFUL_instance;
  var TrySelectDetailedResult_REREGISTER_instance;
  var TrySelectDetailedResult_CANCELLED_instance;
  var TrySelectDetailedResult_ALREADY_SELECTED_instance;
  var TrySelectDetailedResult_entriesInitialized;
  function TrySelectDetailedResult_initEntries() {
    if (TrySelectDetailedResult_entriesInitialized)
      return Unit_instance;
    TrySelectDetailedResult_entriesInitialized = true;
    TrySelectDetailedResult_SUCCESSFUL_instance = new TrySelectDetailedResult('SUCCESSFUL', 0);
    TrySelectDetailedResult_REREGISTER_instance = new TrySelectDetailedResult('REREGISTER', 1);
    TrySelectDetailedResult_CANCELLED_instance = new TrySelectDetailedResult('CANCELLED', 2);
    TrySelectDetailedResult_ALREADY_SELECTED_instance = new TrySelectDetailedResult('ALREADY_SELECTED', 3);
  }
  function TrySelectDetailedResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TrySelectDetailedResult_0(trySelectInternalResult) {
    _init_properties_Select_kt__zhm2jg();
    var tmp;
    switch (trySelectInternalResult) {
      case 0:
        tmp = TrySelectDetailedResult_SUCCESSFUL_getInstance();
        break;
      case 1:
        tmp = TrySelectDetailedResult_REREGISTER_getInstance();
        break;
      case 2:
        tmp = TrySelectDetailedResult_CANCELLED_getInstance();
        break;
      case 3:
        tmp = TrySelectDetailedResult_ALREADY_SELECTED_getInstance();
        break;
      default:
        var message = 'Unexpected internal result: ' + trySelectInternalResult;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function tryResume_0(_this__u8e3s4, onCancellation) {
    _init_properties_Select_kt__zhm2jg();
    var tmp0_elvis_lhs = _this__u8e3s4.pw(Unit_instance, null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.uu(token);
    return true;
  }
  function DUMMY_PROCESS_RESULT_FUNCTION$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
    _init_properties_Select_kt__zhm2jg();
    return null;
  }
  function TrySelectDetailedResult_SUCCESSFUL_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_SUCCESSFUL_instance;
  }
  function TrySelectDetailedResult_REREGISTER_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_REREGISTER_instance;
  }
  function TrySelectDetailedResult_CANCELLED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_CANCELLED_instance;
  }
  function TrySelectDetailedResult_ALREADY_SELECTED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_ALREADY_SELECTED_instance;
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (!properties_initialized_Select_kt_7rpl36) {
      properties_initialized_Select_kt_7rpl36 = true;
      DUMMY_PROCESS_RESULT_FUNCTION = DUMMY_PROCESS_RESULT_FUNCTION$lambda;
      STATE_REG = new Symbol('STATE_REG');
      STATE_COMPLETED = new Symbol('STATE_COMPLETED');
      STATE_CANCELLED = new Symbol('STATE_CANCELLED');
      NO_RESULT = new Symbol('NO_RESULT');
      PARAM_CLAUSE_0 = new Symbol('PARAM_CLAUSE_0');
    }
  }
  function get_NO_OWNER() {
    _init_properties_Mutex_kt__jod56b();
    return NO_OWNER;
  }
  var NO_OWNER;
  var ON_LOCK_ALREADY_LOCKED_BY_OWNER;
  function Mutex(locked) {
    locked = locked === VOID ? false : locked;
    _init_properties_Mutex_kt__jod56b();
    return new MutexImpl(locked);
  }
  function MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this$0, this$1) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      // Inline function 'kotlinx.coroutines.assert' call
      this$0.z1c_1.kotlinx$atomicfu$value = this$1.c1d_1;
      this$0.e1d(this$1.c1d_1);
      return Unit_instance;
    };
  }
  function MutexImpl$CancellableContinuationWithOwner$resume$lambda(this$0, this$1) {
    return function (it) {
      this$0.e1d(this$1.c1d_1);
      return Unit_instance;
    };
  }
  function holdsLockImpl($this, owner) {
    $l$loop: while (true) {
      if (!$this.f1d())
        return 0;
      var curOwner = $this.z1c_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop;
      return curOwner === owner ? 1 : 2;
    }
  }
  function lockSuspend($this, owner, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      var contWithOwner = new CancellableContinuationWithOwner($this, cancellable, owner);
      $this.acquireCont(contWithOwner);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.dy();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.pv();
  }
  function tryLockImpl($this, owner) {
    $l$loop: while (true) {
      if ($this.n1d()) {
        // Inline function 'kotlinx.coroutines.assert' call
        $this.z1c_1.kotlinx$atomicfu$value = owner;
        return 0;
      } else {
        if (owner == null)
          return 1;
        switch (holdsLockImpl($this, owner)) {
          case 1:
            return 2;
          case 2:
            return 1;
          case 0:
            continue $l$loop;
        }
      }
    }
  }
  function CancellableContinuationWithOwner($outer, cont, owner) {
    this.d1d_1 = $outer;
    this.b1d_1 = cont;
    this.c1d_1 = owner;
  }
  protoOf(CancellableContinuationWithOwner).o1d = function (value, idempotent, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    var token = this.b1d_1.pw(value, idempotent, MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this.d1d_1, this));
    if (!(token == null)) {
      // Inline function 'kotlinx.coroutines.assert' call
      this.d1d_1.z1c_1.kotlinx$atomicfu$value = this.c1d_1;
    }
    return token;
  };
  protoOf(CancellableContinuationWithOwner).pw = function (value, idempotent, onCancellation) {
    return this.o1d(value instanceof Unit ? value : THROW_CCE(), idempotent, onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).p1d = function (value, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    this.d1d_1.z1c_1.kotlinx$atomicfu$value = this.c1d_1;
    this.b1d_1.hy(Unit_instance, MutexImpl$CancellableContinuationWithOwner$resume$lambda(this.d1d_1, this));
  };
  protoOf(CancellableContinuationWithOwner).sw = function (value, onCancellation) {
    return this.p1d(value instanceof Unit ? value : THROW_CCE(), onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).ls = function () {
    return this.b1d_1.ls();
  };
  protoOf(CancellableContinuationWithOwner).ms = function () {
    return this.b1d_1.ms();
  };
  protoOf(CancellableContinuationWithOwner).tu = function (exception) {
    return this.b1d_1.tu(exception);
  };
  protoOf(CancellableContinuationWithOwner).uu = function (token) {
    this.b1d_1.uu(token);
  };
  protoOf(CancellableContinuationWithOwner).qw = function (handler) {
    this.b1d_1.qw(handler);
  };
  protoOf(CancellableContinuationWithOwner).jy = function (segment, index) {
    this.b1d_1.jy(segment, index);
  };
  protoOf(CancellableContinuationWithOwner).q1d = function (_this__u8e3s4, value) {
    this.b1d_1.rw(_this__u8e3s4, Unit_instance);
  };
  protoOf(CancellableContinuationWithOwner).rw = function (_this__u8e3s4, value) {
    return this.q1d(_this__u8e3s4, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(CancellableContinuationWithOwner).oi = function (result) {
    this.b1d_1.ha(result);
  };
  protoOf(CancellableContinuationWithOwner).ha = function (result) {
    return this.oi(result);
  };
  protoOf(CancellableContinuationWithOwner).s9 = function () {
    return this.b1d_1.s9();
  };
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, $owner) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      this$0.e1d($owner);
      return Unit_instance;
    };
  }
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda(this$0) {
    return function (_unused_var__etf5q3, owner, _unused_var__etf5q3_0) {
      return MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, owner);
    };
  }
  function MutexImpl(locked) {
    SemaphoreAndMutexImpl.call(this, 1, locked ? 1 : 0);
    this.z1c_1 = atomic$ref$1(locked ? null : get_NO_OWNER());
    var tmp = this;
    tmp.a1d_1 = MutexImpl$onSelectCancellationUnlockConstructor$lambda(this);
  }
  protoOf(MutexImpl).f1d = function () {
    return this.r1d() === 0;
  };
  protoOf(MutexImpl).s1d = function (owner, $completion) {
    if (this.t1d(owner))
      return Unit_instance;
    return lockSuspend(this, owner, $completion);
  };
  protoOf(MutexImpl).t1d = function (owner) {
    var tmp;
    switch (tryLockImpl(this, owner)) {
      case 0:
        tmp = true;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        var message = 'This mutex is already locked by the specified owner: ' + toString_0(owner);
        throw IllegalStateException_init_$Create$(toString(message));
      default:
        var message_0 = 'unexpected';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MutexImpl).e1d = function (owner) {
    $l$loop_0: while (true) {
      // Inline function 'kotlin.check' call
      if (!this.f1d()) {
        var message = 'This mutex is not locked';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var curOwner = this.z1c_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop_0;
      // Inline function 'kotlin.check' call
      if (!(curOwner === owner || owner == null)) {
        var message_0 = 'This mutex is locked by ' + toString_0(curOwner) + ', but ' + toString_0(owner) + ' is expected';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (!this.z1c_1.atomicfu$compareAndSet(curOwner, get_NO_OWNER()))
        continue $l$loop_0;
      this.u1d();
      return Unit_instance;
    }
  };
  protoOf(MutexImpl).toString = function () {
    return 'Mutex@' + get_hexAddress(this) + '[isLocked=' + this.f1d() + ',owner=' + toString_0(this.z1c_1.kotlinx$atomicfu$value) + ']';
  };
  var properties_initialized_Mutex_kt_yv4p3j;
  function _init_properties_Mutex_kt__jod56b() {
    if (!properties_initialized_Mutex_kt_yv4p3j) {
      properties_initialized_Mutex_kt_yv4p3j = true;
      NO_OWNER = new Symbol('NO_OWNER');
      ON_LOCK_ALREADY_LOCKED_BY_OWNER = new Symbol('ALREADY_LOCKED_BY_OWNER');
    }
  }
  function get_MAX_SPIN_CYCLES() {
    _init_properties_Semaphore_kt__t514r6();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function get_PERMIT() {
    _init_properties_Semaphore_kt__t514r6();
    return PERMIT;
  }
  var PERMIT;
  function get_TAKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return TAKEN;
  }
  var TAKEN;
  function get_BROKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return BROKEN;
  }
  var BROKEN;
  function get_CANCELLED() {
    _init_properties_Semaphore_kt__t514r6();
    return CANCELLED;
  }
  var CANCELLED;
  function get_SEGMENT_SIZE_0() {
    _init_properties_Semaphore_kt__t514r6();
    return SEGMENT_SIZE_0;
  }
  var SEGMENT_SIZE_0;
  function decPermits($this) {
    $l$loop: while (true) {
      var p = $this.l1d_1.atomicfu$getAndDecrement();
      if (p > $this.g1d_1)
        continue $l$loop;
      return p;
    }
  }
  function coerceAvailablePermitsAtMaximum($this) {
    $l$loop_0: while (true) {
      var cur = $this.l1d_1.kotlinx$atomicfu$value;
      if (cur <= $this.g1d_1)
        break $l$loop_0;
      if ($this.l1d_1.atomicfu$compareAndSet(cur, $this.g1d_1))
        break $l$loop_0;
    }
  }
  function addAcquireToQueue($this, waiter) {
    var curTail = $this.j1d_1.kotlinx$atomicfu$value;
    var enqIdx = $this.k1d_1.atomicfu$getAndIncrement$long();
    var createNewSegment = createSegment$ref_0();
    var tmp2 = $this.j1d_1;
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var tmp3 = enqIdx.c3(toLong(other));
    var tmp$ret$3;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(curTail, tmp3, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp1 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              var cur = tmp2.kotlinx$atomicfu$value;
              if (cur.ix_1.e1(tmp1.ix_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp1.v14()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp2.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.w14()) {
                  cur.s4();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp1.w14()) {
                tmp1.s4();
              }
            }
            tmp$ret$1 = Unit_instance;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$3 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$3);
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var i = enqIdx.d3(toLong(other_0)).j1();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    if (segment.z1d_1.atomicfu$get(i).atomicfu$compareAndSet(null, waiter)) {
      waiter.jy(segment, i);
      return true;
    }
    var tmp14 = get_PERMIT();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    var value = get_TAKEN();
    if (segment.z1d_1.atomicfu$get(i).atomicfu$compareAndSet(tmp14, value)) {
      if (isInterface(waiter, CancellableContinuation)) {
        if (!isInterface(waiter, CancellableContinuation))
          THROW_CCE();
        waiter.sw(Unit_instance, $this.m1d_1);
      } else {
        if (isInterface(waiter, SelectInstance)) {
          waiter.n1c(Unit_instance);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'unexpected: ' + toString(waiter);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      return true;
    }
    // Inline function 'kotlinx.coroutines.assert' call
    return false;
  }
  function tryResumeNextFromQueue($this) {
    var curHead = $this.h1d_1.kotlinx$atomicfu$value;
    var deqIdx = $this.i1d_1.atomicfu$getAndIncrement$long();
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var id = deqIdx.c3(toLong(other));
    var createNewSegment = createSegment$ref_1();
    var tmp2 = $this.h1d_1;
    var tmp$ret$3;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(curHead, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp1 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            while (true) {
              var cur = tmp2.kotlinx$atomicfu$value;
              if (cur.ix_1.e1(tmp1.ix_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp1.v14()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp2.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.w14()) {
                  cur.s4();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp1.w14()) {
                tmp1.s4();
              }
            }
            tmp$ret$1 = Unit_instance;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$3 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$3);
    segment.d15();
    if (segment.ix_1.e1(id) > 0)
      return false;
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var i = deqIdx.d3(toLong(other_0)).j1();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.getAndSet' call
    var value = get_PERMIT();
    var cellState = segment.z1d_1.atomicfu$get(i).atomicfu$getAndSet(value);
    if (cellState === null) {
      // Inline function 'kotlin.repeat' call
      var times = get_MAX_SPIN_CYCLES();
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.get' call
          if (segment.z1d_1.atomicfu$get(i).kotlinx$atomicfu$value === get_TAKEN())
            return true;
        }
         while (inductionVariable < times);
      var tmp15 = get_PERMIT();
      // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
      var value_0 = get_BROKEN();
      return !segment.z1d_1.atomicfu$get(i).atomicfu$compareAndSet(tmp15, value_0);
    } else if (cellState === get_CANCELLED())
      return false;
    else
      return tryResumeAcquire($this, cellState);
  }
  function tryResumeAcquire($this, _this__u8e3s4) {
    var tmp;
    if (isInterface(_this__u8e3s4, CancellableContinuation)) {
      if (!isInterface(_this__u8e3s4, CancellableContinuation))
        THROW_CCE();
      var token = _this__u8e3s4.pw(Unit_instance, null, $this.m1d_1);
      var tmp_0;
      if (!(token == null)) {
        _this__u8e3s4.uu(token);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        tmp = _this__u8e3s4.w16($this, Unit_instance);
      } else {
        var message = 'unexpected: ' + toString(_this__u8e3s4);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function SemaphoreAndMutexImpl$onCancellationRelease$lambda(this$0) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      this$0.u1d();
      return Unit_instance;
    };
  }
  function createSegment$ref_0() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function createSegment$ref_1() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function SemaphoreAndMutexImpl(permits, acquiredPermits) {
    this.g1d_1 = permits;
    this.i1d_1 = atomic$long$1(new Long(0, 0));
    this.k1d_1 = atomic$long$1(new Long(0, 0));
    // Inline function 'kotlin.require' call
    if (!(this.g1d_1 > 0)) {
      var message = 'Semaphore should have at least 1 permit, but had ' + this.g1d_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(0 <= acquiredPermits ? acquiredPermits <= this.g1d_1 : false)) {
      var message_0 = 'The number of acquired permits should be in 0..' + this.g1d_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var s = new SemaphoreSegment(new Long(0, 0), null, 2);
    this.h1d_1 = atomic$ref$1(s);
    this.j1d_1 = atomic$ref$1(s);
    this.l1d_1 = atomic$int$1(this.g1d_1 - acquiredPermits | 0);
    var tmp = this;
    tmp.m1d_1 = SemaphoreAndMutexImpl$onCancellationRelease$lambda(this);
  }
  protoOf(SemaphoreAndMutexImpl).r1d = function () {
    // Inline function 'kotlin.math.max' call
    var a = this.l1d_1.kotlinx$atomicfu$value;
    return Math.max(a, 0);
  };
  protoOf(SemaphoreAndMutexImpl).n1d = function () {
    $l$loop: while (true) {
      var p = this.l1d_1.kotlinx$atomicfu$value;
      if (p > this.g1d_1) {
        coerceAvailablePermitsAtMaximum(this);
        continue $l$loop;
      }
      if (p <= 0)
        return false;
      if (this.l1d_1.atomicfu$compareAndSet(p, p - 1 | 0))
        return true;
    }
  };
  protoOf(SemaphoreAndMutexImpl).acquireCont = function (waiter) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreAndMutexImpl.acquire' call
      while (true) {
        var p = decPermits(this);
        if (p > 0) {
          waiter.sw(Unit_instance, this.m1d_1);
          tmp$ret$1 = Unit_instance;
          break $l$block_0;
        }
        if (addAcquireToQueue(this, isInterface(waiter, Waiter) ? waiter : THROW_CCE())) {
          tmp$ret$1 = Unit_instance;
          break $l$block_0;
        }
      }
      tmp$ret$1 = Unit_instance;
    }
    return tmp$ret$1;
  };
  protoOf(SemaphoreAndMutexImpl).u1d = function () {
    while (true) {
      var p = this.l1d_1.atomicfu$getAndIncrement();
      if (p >= this.g1d_1) {
        coerceAvailablePermitsAtMaximum(this);
        // Inline function 'kotlin.error' call
        var message = 'The number of released permits cannot be greater than ' + this.g1d_1;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      if (p >= 0)
        return Unit_instance;
      if (tryResumeNextFromQueue(this))
        return Unit_instance;
    }
  };
  function SemaphoreSegment(id, prev, pointers) {
    Segment.call(this, id, prev, pointers);
    this.z1d_1 = atomicfu$AtomicRefArray$ofNulls(get_SEGMENT_SIZE_0());
  }
  protoOf(SemaphoreSegment).w13 = function () {
    return get_SEGMENT_SIZE_0();
  };
  protoOf(SemaphoreSegment).kx = function (index, cause, context) {
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.set' call
    var value = get_CANCELLED();
    this.z1d_1.atomicfu$get(index).kotlinx$atomicfu$value = value;
    this.t14();
  };
  protoOf(SemaphoreSegment).toString = function () {
    return 'SemaphoreSegment[id=' + this.ix_1.toString() + ', hashCode=' + hashCode(this) + ']';
  };
  function createSegment_0(id, prev) {
    _init_properties_Semaphore_kt__t514r6();
    return new SemaphoreSegment(id, prev, 0);
  }
  var properties_initialized_Semaphore_kt_uqcwok;
  function _init_properties_Semaphore_kt__t514r6() {
    if (!properties_initialized_Semaphore_kt_uqcwok) {
      properties_initialized_Semaphore_kt_uqcwok = true;
      MAX_SPIN_CYCLES = systemProp('kotlinx.coroutines.semaphore.maxSpinCycles', 100);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE_0 = systemProp('kotlinx.coroutines.semaphore.segmentSize', 16);
    }
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' || typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return !(typeof navigator === 'undefined') && navigator != null && navigator.userAgent != null && !(typeof navigator.userAgent === 'undefined') && !(typeof navigator.userAgent.match === 'undefined') && navigator.userAgent.match('\\bjsdom\\b');
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).hc();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).c1e = function () {
    process.nextTick(this.j1e_1.h1e_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.n1e();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.g1e_1 = dispatcher;
    var tmp = this;
    tmp.h1e_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).o1e = function () {
    this.g1e_1.c1e();
  };
  protoOf(ScheduledMessageQueue).p1e = function () {
    setTimeout(this.h1e_1, 0);
  };
  protoOf(ScheduledMessageQueue).q1e = function (timeout) {
    setTimeout(this.h1e_1, timeout);
  };
  function w3cSetTimeout(handler, timeout) {
    return setTimeout(handler, timeout);
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.e1f_1 && event.data == this$0.f1f_1) {
        event.stopPropagation();
        this$0.n1e();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.n1e();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.e1f_1 = window_0;
    this.f1f_1 = 'dispatchCoroutine';
    this.e1f_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).o1e = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).p1e = function () {
    this.e1f_1.postMessage(this.f1f_1, '*');
  };
  function w3cSetTimeout_0(window_0, handler, timeout) {
    return setTimeout_0(window_0, handler, timeout);
  }
  function w3cClearTimeout(window_0, handle) {
    return window_0.clearTimeout(handle);
  }
  function w3cClearTimeout_0(handle) {
    return clearTimeout(handle);
  }
  function setTimeout_0(window_0, handler, timeout) {
    return window_0.setTimeout(handler, timeout);
  }
  function await_0(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.ov();
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    return cancellable.pv();
  }
  function promise(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    return asPromise(async(_this__u8e3s4, context, start, block));
  }
  function asPromise(_this__u8e3s4) {
    var promise = new Promise(asPromise$lambda(_this__u8e3s4));
    // Inline function 'kotlin.js.asDynamic' call
    promise.deferred = _this__u8e3s4;
    return promise;
  }
  function await$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      this_0.ha(tmp$ret$0);
      return Unit_instance;
    };
  }
  function await$lambda_0($cont) {
    return function (it) {
      var tmp0 = $cont;
      var tmp0_elvis_lhs = it instanceof Error ? it : null;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = tmp0_elvis_lhs == null ? Exception_init_$Create$('Non-Kotlin exception ' + it.toString()) : tmp0_elvis_lhs;
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.ha(tmp$ret$0);
      return Unit_instance;
    };
  }
  function asPromise$lambda$lambda($this_asPromise, $reject, $resolve) {
    return function (it) {
      var e = $this_asPromise.mt();
      var tmp;
      if (!(e == null)) {
        tmp = $reject(e);
      } else {
        tmp = $resolve($this_asPromise.su());
      }
      return Unit_instance;
    };
  }
  function asPromise$lambda($this_asPromise) {
    return function (resolve, reject) {
      $this_asPromise.ss(asPromise$lambda$lambda($this_asPromise, reject, resolve));
      return Unit_instance;
    };
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function propagateExceptionFinalResort(exception) {
    console.error(exception.toString());
  }
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).rz = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).c1e = function () {
    this.j1e_1.q1e(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.rw(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.j1e_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).rz = function (context, block) {
    this.j1e_1.r1e(block);
  };
  protoOf(SetTimeoutBasedDispatcher).yz = function (timeMillis, continuation) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new ClearTimeout(handle));
  };
  function MessageQueue() {
    this.k1e_1 = ArrayDeque_init_$Create$();
    this.l1e_1 = 16;
    this.m1e_1 = false;
  }
  protoOf(MessageQueue).r1e = function (element) {
    this.s1e(element);
    if (!this.m1e_1) {
      this.m1e_1 = true;
      this.o1e();
    }
  };
  protoOf(MessageQueue).n1e = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.l1e_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.qy();
        }
         while (inductionVariable < times);
    }finally {
      if (this.h()) {
        this.m1e_1 = false;
      } else {
        this.p1e();
      }
    }
  };
  protoOf(MessageQueue).s1e = function (element) {
    return this.k1e_1.n(element);
  };
  protoOf(MessageQueue).n = function (element) {
    return this.s1e((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).t1e = function (index, element) {
    this.k1e_1.g2(index, element);
  };
  protoOf(MessageQueue).g2 = function (index, element) {
    return this.t1e(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).u1e = function (element) {
    return this.k1e_1.d2(element);
  };
  protoOf(MessageQueue).d2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.u1e((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).v1e = function (elements) {
    return this.k1e_1.t(elements);
  };
  protoOf(MessageQueue).t = function (elements) {
    return this.v1e(elements);
  };
  protoOf(MessageQueue).e2 = function () {
    this.k1e_1.e2();
  };
  protoOf(MessageQueue).w1e = function (index, element) {
    return this.k1e_1.f2(index, element);
  };
  protoOf(MessageQueue).f2 = function (index, element) {
    return this.w1e(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).h2 = function (index) {
    return this.k1e_1.h2(index);
  };
  protoOf(MessageQueue).b2 = function () {
    return this.k1e_1.b2();
  };
  protoOf(MessageQueue).v = function (index) {
    return this.k1e_1.v(index);
  };
  protoOf(MessageQueue).c2 = function (fromIndex, toIndex) {
    return this.k1e_1.c2(fromIndex, toIndex);
  };
  protoOf(MessageQueue).h = function () {
    return this.k1e_1.h();
  };
  protoOf(MessageQueue).x1e = function (element) {
    return this.k1e_1.x1(element);
  };
  protoOf(MessageQueue).x1 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.x1e((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).p = function () {
    return this.k1e_1.p();
  };
  protoOf(MessageQueue).y1e = function (elements) {
    return this.k1e_1.y1(elements);
  };
  protoOf(MessageQueue).y1 = function (elements) {
    return this.y1e(elements);
  };
  protoOf(MessageQueue).u = function (index) {
    return this.k1e_1.u(index);
  };
  protoOf(MessageQueue).z1e = function (element) {
    return this.k1e_1.z1(element);
  };
  protoOf(MessageQueue).z1 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.z1e((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).a1f = function (element) {
    return this.k1e_1.a2(element);
  };
  protoOf(MessageQueue).a2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.a1f((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).asJsReadonlyArrayView = function () {
    return this.k1e_1.asJsReadonlyArrayView();
  };
  protoOf(MessageQueue).s = function () {
    return this.k1e_1.dh_1;
  };
  function WindowClearTimeout($outer, handle) {
    this.n1f_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).lu = function () {
    w3cClearTimeout(this.n1f_1.p1f_1, this.r1f_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.rw(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.p1f_1 = window_0;
    this.q1f_1 = new WindowMessageQueue(this.p1f_1);
  }
  protoOf(WindowDispatcher).rz = function (context, block) {
    return this.q1f_1.r1e(block);
  };
  protoOf(WindowDispatcher).yz = function (timeMillis, continuation) {
    var handle = w3cSetTimeout_0(this.p1f_1, WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new WindowClearTimeout(this, handle));
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).j1();
  }
  function ClearTimeout(handle) {
    this.r1f_1 = handle;
  }
  protoOf(ClearTimeout).lu = function () {
    w3cClearTimeout_0(this.r1f_1);
  };
  protoOf(ClearTimeout).mu = function (cause) {
    this.lu();
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.r1f_1 + ']';
  };
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().e13_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.qr().ij(context);
    return !(combined === Dispatchers_getInstance().e13_1) && combined.la(Key_instance) == null ? combined.ij(Dispatchers_getInstance().e13_1) : combined;
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.e13_1 = createDefaultDispatcher();
    this.f13_1 = Unconfined_getInstance();
    this.g13_1 = new JsMainDispatcher(this.e13_1, false);
    this.h13_1 = null;
  }
  protoOf(Dispatchers).i13 = function () {
    var tmp0_elvis_lhs = this.h13_1;
    return tmp0_elvis_lhs == null ? this.g13_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.t1f_1 = delegate;
    this.u1f_1 = invokeImmediately;
    this.v1f_1 = this.u1f_1 ? this : new JsMainDispatcher(this.t1f_1, true);
  }
  protoOf(JsMainDispatcher).c13 = function () {
    return this.v1f_1;
  };
  protoOf(JsMainDispatcher).qz = function (context) {
    return !this.u1f_1;
  };
  protoOf(JsMainDispatcher).rz = function (context, block) {
    return this.t1f_1.rz(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.d13();
    return tmp0_elvis_lhs == null ? this.t1f_1.toString() : tmp0_elvis_lhs;
  };
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    captureStack(this, JobCancellationException);
    this.w1f_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.w1f_1);
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.w1f_1, this.w1f_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.w1f_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function CancellationException_0(message, cause) {
    return CancellationException_init_$Create$_0(message, cause);
  }
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function AbortFlowException(owner) {
    CancellationException_init_$Init$_0('Flow was aborted, no more elements needed', this);
    captureStack(this, AbortFlowException);
    this.f1b_1 = owner;
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function LockFreeLinkedListHead() {
    LockFreeLinkedListNode.call(this);
  }
  function LockFreeLinkedListNode() {
    this.bv_1 = this;
    this.cv_1 = this;
    this.dv_1 = false;
  }
  protoOf(LockFreeLinkedListNode).ev = function (node, permissionsBitmask) {
    var prev = this.cv_1;
    var tmp;
    if (prev instanceof ListClosed) {
      tmp = ((prev.a1g_1 & permissionsBitmask) === 0 && prev.ev(node, permissionsBitmask));
    } else {
      node.bv_1 = this;
      node.cv_1 = prev;
      prev.bv_1 = node;
      this.cv_1 = node;
      tmp = true;
    }
    return tmp;
  };
  protoOf(LockFreeLinkedListNode).u10 = function (forbiddenElementsBit) {
    this.ev(new ListClosed(forbiddenElementsBit), forbiddenElementsBit);
  };
  protoOf(LockFreeLinkedListNode).fv = function () {
    if (this.dv_1)
      return false;
    var prev = this.cv_1;
    var next = this.bv_1;
    prev.bv_1 = next;
    next.cv_1 = prev;
    this.dv_1 = true;
    return true;
  };
  protoOf(LockFreeLinkedListNode).gv = function (node) {
    if (!(this.bv_1 === this))
      return false;
    this.ev(node, -2147483648);
    return true;
  };
  function ListClosed(forbiddenElementsBitmask) {
    LockFreeLinkedListNode.call(this);
    this.a1g_1 = forbiddenElementsBitmask;
  }
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function SynchronizedObject() {
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.m10_1 = null;
  }
  protoOf(CommonThreadLocal).n10 = function () {
    var tmp = this.m10_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).o10 = function (value) {
    this.m10_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).us = invokeOnCompletion$default;
  protoOf(JobSupport).zs = cancel$default;
  protoOf(JobSupport).ij = plus;
  protoOf(JobSupport).la = get_0;
  protoOf(JobSupport).hj = fold;
  protoOf(JobSupport).gj = minusKey_0;
  protoOf(CoroutineDispatcher).la = get;
  protoOf(CoroutineDispatcher).gj = minusKey;
  protoOf(BufferedChannel).b19 = close$default;
  protoOf(BufferedChannel).d19 = cancel$default_0;
  protoOf(ChannelCoroutine).b19 = close$default;
  defineProp(protoOf(DispatchException), 'cause', function () {
    return this.ta();
  });
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  Key_instance_2 = new Key_1();
  GlobalScope_instance = new GlobalScope();
  Key_instance_3 = new Key_2();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_4 = new Key_3();
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = firstOrNull;
  _.$_$.b = awaitAll;
  _.$_$.c = await_0;
  _.$_$.d = delay;
  _.$_$.e = Key_instance_1;
  _.$_$.f = Dispatchers_getInstance;
  _.$_$.g = GlobalScope_instance;
  _.$_$.h = Key_instance_3;
  _.$_$.i = Channel;
  _.$_$.j = ProducerScope;
  _.$_$.k = cancelConsumed;
  _.$_$.l = produce;
  _.$_$.m = FlowCollector;
  _.$_$.n = asFlow;
  _.$_$.o = recoverStackTrace;
  _.$_$.p = startCoroutineCancellable_1;
  _.$_$.q = Mutex;
  _.$_$.r = CancellableContinuationImpl;
  _.$_$.s = CancellationException_0;
  _.$_$.t = CompletableDeferred;
  _.$_$.u = CompletableJob;
  _.$_$.v = CopyableThrowable;
  _.$_$.w = CoroutineName;
  _.$_$.x = CoroutineScope_0;
  _.$_$.y = CoroutineScope;
  _.$_$.z = Job_0;
  _.$_$.a1 = SupervisorJob;
  _.$_$.b1 = async;
  _.$_$.c1 = cancel_0;
  _.$_$.d1 = cancel_2;
  _.$_$.e1 = cancel;
  _.$_$.f1 = cancel_1;
  _.$_$.g1 = get_job;
  _.$_$.h1 = launch;
  _.$_$.i1 = promise;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
