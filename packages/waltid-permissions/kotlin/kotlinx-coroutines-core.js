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
  var Unit_instance = kotlin_kotlin.$_$.l1;
  var protoOf = kotlin_kotlin.$_$.x3;
  var THROW_CCE = kotlin_kotlin.$_$.t4;
  var Continuation = kotlin_kotlin.$_$.t2;
  var initMetadataForClass = kotlin_kotlin.$_$.p3;
  var VOID = kotlin_kotlin.$_$.c;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.j1;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.l2;
  var initMetadataForInterface = kotlin_kotlin.$_$.s3;
  var isInterface = kotlin_kotlin.$_$.v3;
  var toString = kotlin_kotlin.$_$.z3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u;
  var toString_0 = kotlin_kotlin.$_$.d5;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k2;
  var initMetadataForObject = kotlin_kotlin.$_$.u3;
  var hashCode = kotlin_kotlin.$_$.o3;
  var equals = kotlin_kotlin.$_$.k3;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.m;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.g1;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.h1;
  var Companion_instance = kotlin_kotlin.$_$.k1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.f1;
  var createFailure = kotlin_kotlin.$_$.x4;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.p2;
  var Key_instance = kotlin_kotlin.$_$.i1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.o2;
  var get = kotlin_kotlin.$_$.q2;
  var minusKey = kotlin_kotlin.$_$.r2;
  var ContinuationInterceptor = kotlin_kotlin.$_$.s2;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var addSuppressed = kotlin_kotlin.$_$.w4;
  var Enum = kotlin_kotlin.$_$.m4;
  var startCoroutine = kotlin_kotlin.$_$.a3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.b5;
  var Long = kotlin_kotlin.$_$.q4;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.e;
  var RuntimeException = kotlin_kotlin.$_$.s4;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.a1;
  var captureStack = kotlin_kotlin.$_$.f3;
  var Error_0 = kotlin_kotlin.$_$.n4;
  var Error_init_$Init$ = kotlin_kotlin.$_$.q;
  var Element = kotlin_kotlin.$_$.x2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.c5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var CancellationException = kotlin_kotlin.$_$.j2;
  var ArrayList = kotlin_kotlin.$_$.m1;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var plus = kotlin_kotlin.$_$.y2;
  var get_0 = kotlin_kotlin.$_$.v2;
  var fold = kotlin_kotlin.$_$.u2;
  var minusKey_0 = kotlin_kotlin.$_$.w2;
  var anyToString = kotlin_kotlin.$_$.d3;
  var UnsupportedOperationException = kotlin_kotlin.$_$.v4;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.y4;
  var toLong = kotlin_kotlin.$_$.y3;
  var intercepted = kotlin_kotlin.$_$.m2;
  var CoroutineImpl = kotlin_kotlin.$_$.z2;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.r3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var listOf = kotlin_kotlin.$_$.z1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.x;
  var compareTo = kotlin_kotlin.$_$.i3;
  var last = kotlin_kotlin.$_$.h4;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.q3;
  var IllegalStateException = kotlin_kotlin.$_$.p4;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.t;
  var NoSuchElementException = kotlin_kotlin.$_$.r4;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.y;
  var getKClass = kotlin_kotlin.$_$.b;
  var Unit = kotlin_kotlin.$_$.u4;
  var initMetadataForLambda = kotlin_kotlin.$_$.t3;
  var joinToString = kotlin_kotlin.$_$.x1;
  var FunctionAdapter = kotlin_kotlin.$_$.c3;
  var Exception = kotlin_kotlin.$_$.o4;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.r;
  var defineProp = kotlin_kotlin.$_$.j3;
  var toLongOrNull = kotlin_kotlin.$_$.k4;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.n2;
  var plus_0 = kotlin_kotlin.$_$.b2;
  var KtList = kotlin_kotlin.$_$.o1;
  var listOf_0 = kotlin_kotlin.$_$.y1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var removeFirstOrNull = kotlin_kotlin.$_$.c2;
  var Collection = kotlin_kotlin.$_$.n1;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.n;
  var getStringHashCode = kotlin_kotlin.$_$.n3;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.i;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.z;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.l;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(Job, 'Job', VOID, VOID, [Element], [0]);
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Job, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], [0]);
  initMetadataForClass(StandaloneCoroutine, 'StandaloneCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', VOID, StandaloneCoroutine, VOID, [0]);
  initMetadataForClass(DeferredCoroutine, 'DeferredCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, Job], [0]);
  initMetadataForClass(LazyDeferredCoroutine, 'LazyDeferredCoroutine', VOID, DeferredCoroutine, VOID, [0]);
  initMetadataForInterface(CancellableContinuation, 'CancellableContinuation', VOID, VOID, [Continuation]);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForInterface(Waiter, 'Waiter');
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [DispatchedTask, CancellableContinuation, Waiter]);
  initMetadataForInterface(NotCompleted, 'NotCompleted');
  initMetadataForInterface(CancelHandler, 'CancelHandler', VOID, VOID, [NotCompleted]);
  initMetadataForObject(Active, 'Active', VOID, VOID, [NotCompleted]);
  initMetadataForClass(CompletedContinuation, 'CompletedContinuation');
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode', LockFreeLinkedListNode);
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(JobNode, 'JobNode', VOID, LockFreeLinkedListNode, [LockFreeLinkedListNode, Incomplete]);
  initMetadataForClass(ChildContinuation, 'ChildContinuation', VOID, JobNode);
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForClass(CancelledContinuation, 'CancelledContinuation', VOID, CompletedExceptionally);
  initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  initMetadataForObject(Key_0, 'Key');
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForObject(Key_1, 'Key');
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle');
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(LockFreeLinkedListHead, 'LockFreeLinkedListHead', LockFreeLinkedListHead, LockFreeLinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LockFreeLinkedListHead, [LockFreeLinkedListHead, Incomplete]);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [SynchronizedObject, Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobNode);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobNode);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(JobImpl, 'JobImpl', VOID, JobSupport, [JobSupport, Job], [0]);
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(SupervisorJobImpl, 'SupervisorJobImpl', VOID, JobImpl, VOID, [0]);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForObject(Key_2, 'Key');
  initMetadataForClass(BufferOverflow, 'BufferOverflow', VOID, Enum);
  initMetadataForClass(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode');
  initMetadataForClass(Segment, 'Segment', VOID, ConcurrentLinkedListNode, [ConcurrentLinkedListNode, NotCompleted]);
  initMetadataForClass(ChannelSegment, 'ChannelSegment', VOID, Segment);
  initMetadataForCoroutine($hasNextCOROUTINE$4, CoroutineImpl);
  initMetadataForClass(SendBroadcast, 'SendBroadcast', VOID, VOID, [Waiter]);
  initMetadataForClass(BufferedChannelIterator, 'BufferedChannelIterator', VOID, VOID, [Waiter], [0, 3]);
  initMetadataForCoroutine($sendCOROUTINE$1, CoroutineImpl);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.kq(cause) : $super.kq.call(this, cause);
  }
  initMetadataForInterface(SendChannel, 'SendChannel', VOID, VOID, VOID, [1]);
  initMetadataForClass(BufferedChannel, 'BufferedChannel', VOID, VOID, [SendChannel], [1, 4, 0, 3]);
  initMetadataForClass(WaiterEB, 'WaiterEB');
  initMetadataForClass(ReceiveCatching, 'ReceiveCatching', VOID, VOID, [Waiter]);
  initMetadataForObject(Factory, 'Factory');
  initMetadataForClass(Failed, 'Failed', Failed);
  initMetadataForClass(Closed, 'Closed', VOID, Failed);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ChannelResult, 'ChannelResult');
  initMetadataForClass(ClosedSendChannelException, 'ClosedSendChannelException', VOID, IllegalStateException);
  initMetadataForClass(ClosedReceiveChannelException, 'ClosedReceiveChannelException', VOID, NoSuchElementException);
  initMetadataForClass(ChannelCoroutine, 'ChannelCoroutine', VOID, AbstractCoroutine, [AbstractCoroutine, SendChannel], [1, 0]);
  initMetadataForClass(ConflatedBufferedChannel, 'ConflatedBufferedChannel', VOID, BufferedChannel, VOID, [1, 0]);
  initMetadataForInterface(ProducerScope, 'ProducerScope', VOID, VOID, [CoroutineScope, SendChannel], [1]);
  initMetadataForClass(ProducerCoroutine, 'ProducerCoroutine', VOID, ChannelCoroutine, [ChannelCoroutine, ProducerScope], [1, 0]);
  initMetadataForInterface(Flow, 'Flow', VOID, VOID, VOID, [1]);
  initMetadataForClass(AbstractFlow, 'AbstractFlow', VOID, VOID, [Flow], [1]);
  initMetadataForClass(SafeFlow, 'SafeFlow', VOID, AbstractFlow, VOID, [1]);
  initMetadataForCoroutine($emitAllImplCOROUTINE$8, CoroutineImpl);
  initMetadataForCoroutine($collectCOROUTINE$9, CoroutineImpl);
  initMetadataForInterface(FlowCollector, 'FlowCollector', VOID, VOID, VOID, [1]);
  initMetadataForLambda(ChannelFlow$_get_collectToFun_$slambda_j53z2e, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelFlow$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ChannelFlow, 'ChannelFlow', VOID, VOID, [Flow], [1]);
  initMetadataForLambda(ChannelFlowMerge$collectTo$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(ChannelFlowMerge$collectTo$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ChannelFlowMerge, 'ChannelFlowMerge', VOID, ChannelFlow, VOID, [1]);
  initMetadataForClass(SendingCollector, 'SendingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(ThrowingCollector, 'ThrowingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(flatMapMerge$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$11, CoroutineImpl);
  initMetadataForClass(flatMapMerge$$inlined$map$1, VOID, VOID, VOID, [Flow], [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(flattenConcat$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$12, CoroutineImpl);
  initMetadataForClass(flattenConcat$$inlined$unsafeFlow$1, VOID, VOID, VOID, [Flow], [1]);
  initMetadataForClass(SegmentOrClosed, 'SegmentOrClosed');
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [DispatchedTask, Continuation]);
  initMetadataForClass(DispatchException, 'DispatchException', VOID, Exception);
  initMetadataForClass(UndeliveredElementException, 'UndeliveredElementException', VOID, RuntimeException);
  initMetadataForClass(ContextScope, 'ContextScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(ScopeCoroutine, 'ScopeCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForInterface(SelectInstance, 'SelectInstance');
  initMetadataForClass(ClauseData, 'ClauseData', VOID, VOID, VOID, [1]);
  initMetadataForClass(SelectImplementation, 'SelectImplementation', VOID, VOID, [CancelHandler, Waiter, SelectInstance], [0, 2]);
  initMetadataForClass(TrySelectDetailedResult, 'TrySelectDetailedResult', VOID, Enum);
  initMetadataForClass(SemaphoreAndMutexImpl, 'SemaphoreAndMutexImpl', VOID, VOID, VOID, [0]);
  initMetadataForClass(SemaphoreImpl, 'SemaphoreImpl', VOID, SemaphoreAndMutexImpl, VOID, [0]);
  initMetadataForClass(SemaphoreSegment, 'SemaphoreSegment', VOID, Segment);
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, VOID, [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [Collection, KtList]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, VOID, [1]);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForClass(SafeCollector, 'SafeCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForClass(ListClosed, 'ListClosed', VOID, LockFreeLinkedListNode);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.dc(parentContext.s6(Key_instance_2));
    }
    this.gc_1 = parentContext.na(this);
  }
  protoOf(AbstractCoroutine).l6 = function () {
    return this.gc_1;
  };
  protoOf(AbstractCoroutine).hc = function () {
    return this.gc_1;
  };
  protoOf(AbstractCoroutine).ic = function () {
    return protoOf(JobSupport).ic.call(this);
  };
  protoOf(AbstractCoroutine).jc = function (value) {
  };
  protoOf(AbstractCoroutine).kc = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).lc = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).mc = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.kc(state.nc_1, state.pc());
    } else {
      this.jc((state == null ? true : !(state == null)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).q6 = function (result) {
    var state = this.qc(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.rc(state);
  };
  protoOf(AbstractCoroutine).rc = function (state) {
    return this.sc(state);
  };
  protoOf(AbstractCoroutine).tc = function (exception) {
    handleCoroutineException(this.gc_1, exception);
  };
  protoOf(AbstractCoroutine).uc = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.gc_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).uc.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).uc.call(this);
  };
  protoOf(AbstractCoroutine).vc = function (start, receiver, block) {
    start.yc(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.ce() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.vc(start, coroutine, block);
    return coroutine;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).yd = function (exception) {
    handleCoroutineException(this.gc_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.je_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).gd = function () {
    startCoroutineCancellable(this.je_1, this);
  };
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.ce() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.vc(start, coroutine, block);
    return coroutine;
  }
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).ne = function () {
    var tmp = this.be();
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.re_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).gd = function () {
    startCoroutineCancellable(this.re_1, this);
  };
  function CancellableContinuation() {
  }
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, 1);
    }
    var tmp0_safe_receiver = delegate.bf();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver.if()) {
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
    return $this.hf_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.cd();
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
    if (get_isReusableMode($this.kf_1)) {
      var tmp_0 = $this.df_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).jf();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.df_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.lf(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.ff_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    if (!!(index === 536870911)) {
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      segment.qf(index, cause, $this.l6());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.l6(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.ff_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (1 << 29) + (cur & 536870911) | 0;
          if ($this.ff_1.atomicfu$compareAndSet(cur, tmp$ret$2))
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
    var this_0 = $this.ff_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$2 = (2 << 29) + (cur & 536870911) | 0;
          if ($this.ff_1.atomicfu$compareAndSet(cur, tmp$ret$2))
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
    var tmp0_elvis_lhs = $this.l6().s6(Key_instance_2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var handle = invokeOnCompletion(parent, VOID, new ChildContinuation($this));
    $this.hf_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.gf_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.gf_1.atomicfu$compareAndSet(state, handler))
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
            if (!state.zf()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.nc_1;
              if (isInterface(handler, CancelHandler)) {
                $this.wf(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.sf_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              if (state.xf()) {
                $this.wf(handler, state.vf_1);
                return Unit_instance;
              }
              var update = state.yf(VOID, handler);
              if ($this.gf_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.gf_1.atomicfu$compareAndSet(state, update_0))
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
    var this_0 = $this.gf_1;
    while (true) {
      var tmp1 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp1 == null) ? isInterface(tmp1, NotCompleted) : false) {
          var update = resumedState($this, tmp1, proposedUpdate, $this.kf_1, onCancellation, idempotent);
          if (!$this.gf_1.atomicfu$compareAndSet(tmp1, update)) {
            break $l$block;
          }
          detachChildIfNonReusable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp1 instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) && tmp1.uf_1 === idempotent) {
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
      $this.ag();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.df_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.ef_1 = this.df_1.l6();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$1 = (0 << 29) + 536870911 | 0;
    tmp.ff_1 = atomic$int$1(tmp$ret$1);
    this.gf_1 = atomic$ref$1(Active_instance);
    this.hf_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).bg = function () {
    return this.df_1;
  };
  protoOf(CancellableContinuationImpl).l6 = function () {
    return this.ef_1;
  };
  protoOf(CancellableContinuationImpl).cd = function () {
    return this.gf_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).dd = function () {
    var tmp = this.cd();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).cg = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.dd()) {
      handle.dg();
      this.hf_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).if = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.gf_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.uf_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.ag();
      return false;
    }
    var tmp_0 = this.ff_1;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    tmp_0.kotlinx$atomicfu$value = (0 << 29) + 536870911 | 0;
    this.gf_1.kotlinx$atomicfu$value = Active_instance;
    return true;
  };
  protoOf(CancellableContinuationImpl).eg = function () {
    return this.cd();
  };
  protoOf(CancellableContinuationImpl).fg = function (takenState, cause) {
    var this_0 = this.gf_1;
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
            if (!!state.xf()) {
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.yf(VOID, VOID, VOID, VOID, cause);
            if (this.gf_1.atomicfu$compareAndSet(state, update)) {
              state.gg(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.gf_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).hg = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.gf_1;
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
        if (!this.gf_1.atomicfu$compareAndSet(tmp1, update)) {
          break $l$block;
        }
        if (isInterface(tmp1, CancelHandler)) {
          this.wf(tmp1, cause);
        } else {
          if (tmp1 instanceof Segment) {
            callSegmentOnCancellation(this, tmp1, cause);
          }
        }
        detachChildIfNonReusable(this);
        dispatchResume(this, this.kf_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).ig = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.hg(cause);
    detachChildIfNonReusable(this);
  };
  protoOf(CancellableContinuationImpl).wf = function (handler, cause) {
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      handler.jg(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.l6(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).kg = function (onCancellation, cause, value) {
    try {
      onCancellation(cause, value, this.l6());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.l6(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).lg = function (parent) {
    return parent.hd();
  };
  protoOf(CancellableContinuationImpl).mg = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.ng();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.ng();
    }
    var state = this.cd();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.nc_1, this);
    if (get_isCancellableMode(this.kf_1)) {
      var job = this.l6().s6(Key_instance_2);
      if (!(job == null) && !job.ic()) {
        var cause = job.hd();
        this.fg(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.og(state);
  };
  protoOf(CancellableContinuationImpl).ng = function () {
    var tmp = this.df_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pg(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.ag();
    this.hg(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).q6 = function (result) {
    return this.qg(toState(result, this), this.kf_1);
  };
  protoOf(CancellableContinuationImpl).ue = function (value, onCancellation) {
    return this.rg(value, this.kf_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).sg = function (segment, index) {
    var tmp0 = this.ff_1;
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
  protoOf(CancellableContinuationImpl).rg = function (proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.gf_1;
    while (true) {
      var tmp1 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp1 == null) ? isInterface(tmp1, NotCompleted) : false) {
          var update = resumedState(this, tmp1, proposedUpdate, resumeMode, onCancellation, null);
          if (!this.gf_1.atomicfu$compareAndSet(tmp1, update)) {
            break $l$block;
          }
          detachChildIfNonReusable(this);
          dispatchResume(this, resumeMode);
          return Unit_instance;
        } else {
          if (tmp1 instanceof CancelledContinuation) {
            if (tmp1.wg()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                this.kg(onCancellation, tmp1.nc_1, proposedUpdate);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError(this, proposedUpdate);
      }
    }
  };
  protoOf(CancellableContinuationImpl).qg = function (proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    if ($super === VOID) {
      this.rg(proposedUpdate, resumeMode, onCancellation);
      tmp = Unit_instance;
    } else {
      tmp = $super.rg.call(this, proposedUpdate, resumeMode, onCancellation);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).ag = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.dg();
    this.hf_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).se = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).te = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.kf_1);
  };
  protoOf(CancellableContinuationImpl).og = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.rf_1;
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : !(state == null)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).xg = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).xg.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.df_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.yg() + '(' + toDebugString(this.df_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).yg = function () {
    return 'CancellableContinuation';
  };
  function NotCompleted() {
  }
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
    this.rf_1 = result;
    this.sf_1 = cancelHandler;
    this.tf_1 = onCancellation;
    this.uf_1 = idempotentResume;
    this.vf_1 = cancelCause;
  }
  protoOf(CompletedContinuation).xf = function () {
    return !(this.vf_1 == null);
  };
  protoOf(CompletedContinuation).gg = function (cont, cause) {
    var tmp0_safe_receiver = this.sf_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.wf(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.tf_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.kg(tmp1_safe_receiver, cause, this.rf_1);
    }
  };
  protoOf(CompletedContinuation).bh = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).yf = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.rf_1 : result;
    cancelHandler = cancelHandler === VOID ? this.sf_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.tf_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.uf_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.vf_1 : cancelCause;
    return $super === VOID ? this.bh(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.bh.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.rf_1) + ', cancelHandler=' + toString_0(this.sf_1) + ', onCancellation=' + toString_0(this.tf_1) + ', idempotentResume=' + toString_0(this.uf_1) + ', cancelCause=' + toString_0(this.vf_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.rf_1 == null ? 0 : hashCode(this.rf_1);
    result = imul(result, 31) + (this.sf_1 == null ? 0 : hashCode(this.sf_1)) | 0;
    result = imul(result, 31) + (this.tf_1 == null ? 0 : hashCode(this.tf_1)) | 0;
    result = imul(result, 31) + (this.uf_1 == null ? 0 : hashCode(this.uf_1)) | 0;
    result = imul(result, 31) + (this.vf_1 == null ? 0 : hashCode(this.vf_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.rf_1, tmp0_other_with_cast.rf_1))
      return false;
    if (!equals(this.sf_1, tmp0_other_with_cast.sf_1))
      return false;
    if (!equals(this.tf_1, tmp0_other_with_cast.tf_1))
      return false;
    if (!equals(this.uf_1, tmp0_other_with_cast.uf_1))
      return false;
    if (!equals(this.vf_1, tmp0_other_with_cast.vf_1))
      return false;
    return true;
  };
  function ChildContinuation(child) {
    JobNode.call(this);
    this.gh_1 = child;
  }
  protoOf(ChildContinuation).hh = function () {
    return true;
  };
  protoOf(ChildContinuation).jg = function (cause) {
    this.gh_1.ig(this.gh_1.lg(this.mh()));
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.nc_1 = cause;
    this.oc_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).pc = function () {
    return this.oc_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).zf = function () {
    return this.oc_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.nc_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.vg_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).wg = function () {
    return this.vg_1.atomicfu$compareAndSet(false, true);
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
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.nc_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = (state == null ? true : !(state == null)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(value);
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
  protoOf(CoroutineDispatcher).vh = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).t6 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).u6 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.xh();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    var tmp;
    if (exception instanceof DispatchException) {
      tmp = exception.yh_1;
    } else {
      tmp = exception;
    }
    var reportException = tmp;
    try {
      var tmp0_safe_receiver = context.s6(Key_instance_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        tmp0_safe_receiver.zh(context, reportException);
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
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.s6(Key_instance_2) == null) ? context : context.na(Job_0()));
  }
  function coroutineScope(block, $completion) {
    var coroutine = new ScopeCoroutine($completion.l6(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
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
  protoOf(CoroutineStart).yc = function (block, receiver, completion) {
    var tmp;
    switch (this.p1_1) {
      case 0:
        startCoroutineCancellable_0(block, receiver, completion);
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
  protoOf(CoroutineStart).ce = function () {
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
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.bi_1 = new Long(0, 0);
    this.ci_1 = false;
    this.di_1 = null;
  }
  protoOf(EventLoop).ei = function () {
    var tmp0_elvis_lhs = this.di_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.m9();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.zg();
    return true;
  };
  protoOf(EventLoop).fi = function (task) {
    var tmp0_elvis_lhs = this.di_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      this.di_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.k9(task);
  };
  protoOf(EventLoop).gi = function () {
    return this.bi_1.x1(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).hi = function () {
    var tmp0_safe_receiver = this.di_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).ii = function (unconfined) {
    this.bi_1 = this.bi_1.y1(delta(this, unconfined));
    if (!unconfined)
      this.ci_1 = true;
  };
  protoOf(EventLoop).ji = function (unconfined) {
    this.bi_1 = this.bi_1.z1(delta(this, unconfined));
    if (this.bi_1.x1(new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.ci_1) {
      this.ki();
    }
  };
  protoOf(EventLoop).ki = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.li_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).mi = function () {
    var tmp0_elvis_lhs = this.li_1.oi();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      ThreadLocalEventLoop_getInstance().li_1.pi(this_0);
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
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).bd = function () {
    return null;
  };
  protoOf(NonDisposableHandle).dg = function () {
  };
  protoOf(NonDisposableHandle).qd = function (cause) {
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
    var tmp0_safe_receiver = _this__u8e3s4.s6(Key_instance_2);
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
      tmp = _this__u8e3s4.md(invokeImmediately, handler);
    } else {
      var tmp_0 = handler.hh();
      tmp = _this__u8e3s4.ld(tmp_0, invokeImmediately, JobNode$invoke$ref(handler));
    }
    return tmp;
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.ic())
      throw _this__u8e3s4.hd();
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function JobNode$invoke$ref($boundThis) {
    var l = function (p0) {
      $boundThis.jg(p0);
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
    this.qi_1 = isActive;
  }
  protoOf(Empty).ic = function () {
    return this.qi_1;
  };
  protoOf(Empty).nh = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.qi_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LockFreeLinkedListHead.call(this);
  }
  protoOf(NodeList).ic = function () {
    return true;
  };
  protoOf(NodeList).nh = function () {
    return this;
  };
  protoOf(NodeList).ui = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.a6('List{');
    this_0.a6(state);
    this_0.a6('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = this.oh_1;
    while (!equals(cur, this)) {
      var node = cur;
      if (node instanceof JobNode) {
        if (first) {
          first = false;
        } else
          this_0.a6(', ');
        this_0.z5(node);
      }
      cur = cur.oh_1;
    }
    this_0.a6(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.ui('Active') : protoOf(LockFreeLinkedListHead).toString.call(this);
  };
  function JobNode() {
    LockFreeLinkedListNode.call(this);
  }
  protoOf(JobNode).mh = function () {
    var tmp = this.lh_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).ic = function () {
    return true;
  };
  protoOf(JobNode).nh = function () {
    return null;
  };
  protoOf(JobNode).dg = function () {
    return this.mh().nd(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.mh()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.zi_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.zi_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nc_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    wasCancelling = state.aj();
    var exceptions = state.bj(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.yd(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).zf();
      }
    }
    if (!wasCancelling) {
      $this.vd(finalException);
    }
    $this.mc(finalState);
    var casSuccess = $this.bc_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.p()) {
      if (state.aj()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.lc() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = exceptions.e();
      while (_iterator__ex2g4s.f()) {
        var element = _iterator__ex2g4s.g();
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
    var first = exceptions.o(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = exceptions.e();
        while (_iterator__ex2g4s_0.f()) {
          var element_0 = _iterator__ex2g4s_0.g();
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
    if (exceptions.h() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.h());
    var unwrappedCause = unwrap(rootCause);
    var _iterator__ex2g4s = exceptions.e();
    while (_iterator__ex2g4s.f()) {
      var exception = _iterator__ex2g4s.g();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.m(unwrapped);
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
    if (!$this.bc_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.vd(null);
    $this.mc(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.ad();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      tmp0_safe_receiver.dg();
      $this.zc(NonDisposableHandle_instance);
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.nc_1;
    if (state instanceof JobNode) {
      try {
        state.jg(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.tc(new CompletionHandlerException('Exception in completion handler ' + state.toString() + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.nh();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion($this, tmp2_safe_receiver, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.vd(cause);
    list.vi(4);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = list.oh_1;
    while (!equals(cur, list)) {
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        tmp = node.hh();
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.jg(cause);
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
      cur = cur.oh_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.tc(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.wd())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.ad();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.qd(cause) || isCancellation;
  }
  function notifyCompletion($this, _this__u8e3s4, cause) {
    _this__u8e3s4.vi(1);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = _this__u8e3s4.oh_1;
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
          node.jg(cause);
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
      cur = cur.oh_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.tc(tmp0_safe_receiver_0);
    }
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.qi_1)
        return 0;
      if (!$this.bc_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.gd();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.bc_1.atomicfu$compareAndSet(state, state.cj_1))
          return -1;
        $this.gd();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.qi_1 ? list : new InactiveNodeList(list);
    $this.bc_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.th(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
    var list = state.oh_1;
    $this.bc_1.atomicfu$compareAndSet(state, list);
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.cd();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.dj();
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
        tmp_0 = new JobCancellationException(null == null ? $this.lc() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).td();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = $this.cd();
      $l$block: {
        if (tmp1 instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          if (tmp1.ej())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp1.aj();
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
            tmp1.fj(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = tmp1.gj();
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
            notifyCancelling($this, tmp1.wi_1, notifyRootCause);
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
            if (tmp1.ic()) {
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
    var tmp0_elvis_lhs = state.nh();
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
    if (!$this.bc_1.atomicfu$compareAndSet(state, cancelling))
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
    if (finishing.dj())
      return get_COMPLETING_ALREADY();
    finishing.hj(true);
    if (!(finishing === state)) {
      if (!$this.bc_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.aj();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      finishing.fj(tmp0_safe_receiver.nc_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.gj();
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
    list.vi(2);
    var anotherChild = nextChild($this, list);
    if (!(anotherChild == null) && tryWaitForChild($this, finishing, anotherChild, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js($this, _this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nc_1;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.mj_1, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
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
    state.wi_1.vi(2);
    var waitChildAgain = nextChild($this, lastChild);
    if (!(waitChildAgain == null) && tryWaitForChild($this, state, waitChildAgain, proposedUpdate)) {
      return Unit_instance;
    }
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.sc(finalState);
  }
  function nextChild($this, _this__u8e3s4) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (!cur.qh_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.prevNode' call
      cur = cur.ph_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
      cur = cur.oh_1;
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (cur.qh_1)
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
      tmp = state.aj() ? 'Cancelling' : state.dj() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.ic() ? 'Active' : 'New';
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
    this.wi_1 = list;
    this.xi_1 = atomic$boolean$1(isCompleting);
    this.yi_1 = atomic$ref$1(rootCause);
    this.zi_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).nh = function () {
    return this.wi_1;
  };
  protoOf(Finishing).hj = function (value) {
    this.xi_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).dj = function () {
    return this.xi_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).nj = function (value) {
    this.yi_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).gj = function () {
    return this.yi_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).ej = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).aj = function () {
    return !(this.gj() == null);
  };
  protoOf(Finishing).ic = function () {
    return this.gj() == null;
  };
  protoOf(Finishing).bj = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        this_0.m(eh);
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
    var rootCause = this.gj();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      list.c3(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.m(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).fj = function (exception) {
    var rootCause = this.gj();
    if (rootCause == null) {
      this.nj(exception);
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
        this_0.m(eh);
        this_0.m(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).m(exception);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.aj() + ', completing=' + this.dj() + ', rootCause=' + toString_0(this.gj()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.wi_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.sj_1 = parent;
    this.tj_1 = state;
    this.uj_1 = child;
    this.vj_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).hh = function () {
    return false;
  };
  protoOf(ChildCompletion).jg = function (cause) {
    continueCompleting(this.sj_1, this.tj_1, this.uj_1, this.vj_1);
  };
  function JobSupport(active) {
    this.bc_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.cc_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).i1 = function () {
    return Key_instance_2;
  };
  protoOf(JobSupport).zc = function (value) {
    this.cc_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).ad = function () {
    return this.cc_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).bd = function () {
    var tmp0_safe_receiver = this.ad();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bd();
  };
  protoOf(JobSupport).dc = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.zc(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.fd();
    var handle = parent.ud(this);
    this.zc(handle);
    if (this.dd()) {
      handle.dg();
      this.zc(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).cd = function () {
    return this.bc_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).ic = function () {
    var state = this.cd();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.ic();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).dd = function () {
    var tmp = this.cd();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).ed = function () {
    var state = this.cd();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.aj();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).fd = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.cd();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).gd = function () {
  };
  protoOf(JobSupport).hd = function () {
    var state = this.cd();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.gj();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.id(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
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
          tmp = this.jd(state.nc_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).id = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.lc() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).jd = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.id(_this__u8e3s4, message) : $super.id.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).kd = function (handler) {
    return this.md(true, new InvokeOnCompletion(handler));
  };
  protoOf(JobSupport).ld = function (onCancelling, invokeImmediately, handler) {
    var tmp;
    if (onCancelling) {
      tmp = new InvokeOnCancelling(handler);
    } else {
      tmp = new InvokeOnCompletion(handler);
    }
    return this.md(invokeImmediately, tmp);
  };
  protoOf(JobSupport).md = function (invokeImmediately, node) {
    node.lh_1 = this;
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.cd();
        if (state instanceof Empty) {
          if (state.qi_1) {
            if (this.bc_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$0 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.nh();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var tmp;
              if (node.hh()) {
                var tmp0_safe_receiver = state instanceof Finishing ? state : null;
                var rootCause = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gj();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = list.rh(node, 5);
                } else {
                  if (invokeImmediately) {
                    node.jg(rootCause);
                  }
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_0;
              } else {
                tmp = list.rh(node, 1);
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
      var tmp_1 = this.cd();
      var tmp0_safe_receiver_0 = tmp_1 instanceof CompletedExceptionally ? tmp_1 : null;
      node.jg(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.nc_1);
    }
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).nd = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.cd();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.bc_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.nh() == null)) {
            node.sh();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).od = function () {
    return false;
  };
  protoOf(JobSupport).lc = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).pd = function (parentJob) {
    this.sd(parentJob);
  };
  protoOf(JobSupport).qd = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.sd(cause) && this.xd();
  };
  protoOf(JobSupport).rd = function (cause) {
    return this.sd(cause);
  };
  protoOf(JobSupport).sd = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.od()) {
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
      this.sc(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).td = function () {
    var state = this.cd();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.gj();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.nc_1;
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
  protoOf(JobSupport).qc = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp1 = this.cd();
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
  protoOf(JobSupport).ud = function (child) {
    // Inline function 'kotlin.also' call
    var this_0 = new ChildHandleNode(child);
    this_0.lh_1 = this;
    var node = this_0;
    var tmp$ret$2;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.cd();
        if (state instanceof Empty) {
          if (state.qi_1) {
            if (this.bc_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$2 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.nh();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var addedBeforeCancellation = list.rh(node, 7);
              var tmp;
              if (addedBeforeCancellation) {
                tmp = true;
              } else {
                var addedBeforeCompletion = list.rh(node, 3);
                var latestState = this.cd();
                var tmp_0;
                if (latestState instanceof Finishing) {
                  tmp_0 = latestState.gj();
                } else {
                  // Inline function 'kotlinx.coroutines.assert' call
                  var tmp0_safe_receiver = latestState instanceof CompletedExceptionally ? latestState : null;
                  tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nc_1;
                }
                var rootCause = tmp_0;
                node.jg(rootCause);
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
    var tmp_2 = this.cd();
    var tmp0_safe_receiver_0 = tmp_2 instanceof CompletedExceptionally ? tmp_2 : null;
    node.jg(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.nc_1);
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).tc = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).vd = function (cause) {
  };
  protoOf(JobSupport).wd = function () {
    return false;
  };
  protoOf(JobSupport).xd = function () {
    return true;
  };
  protoOf(JobSupport).yd = function (exception) {
    return false;
  };
  protoOf(JobSupport).mc = function (state) {
  };
  protoOf(JobSupport).sc = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.zd() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).zd = function () {
    return this.uc() + '{' + stateString(this, this.cd()) + '}';
  };
  protoOf(JobSupport).uc = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).ae = function () {
    var state = this.cd();
    // Inline function 'kotlin.check' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _get_exceptionOrNull__b3j7js(this, state);
  };
  protoOf(JobSupport).be = function () {
    var state = this.cd();
    // Inline function 'kotlin.check' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (state instanceof CompletedExceptionally)
      throw state.nc_1;
    return unboxState(state);
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
    this.cj_1 = list;
  }
  protoOf(InactiveNodeList).nh = function () {
    return this.cj_1;
  };
  protoOf(InactiveNodeList).ic = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.cj_1.ui('New') : anyToString(this);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.ak_1 = handler;
  }
  protoOf(InvokeOnCompletion).hh = function () {
    return false;
  };
  protoOf(InvokeOnCompletion).jg = function (cause) {
    return this.ak_1(cause);
  };
  function InvokeOnCancelling(handler) {
    JobNode.call(this);
    this.fk_1 = handler;
    this.gk_1 = atomic$boolean$1(false);
  }
  protoOf(InvokeOnCancelling).hh = function () {
    return true;
  };
  protoOf(InvokeOnCancelling).jg = function (cause) {
    if (this.gk_1.atomicfu$compareAndSet(false, true))
      this.fk_1(cause);
  };
  function ChildHandleNode(childJob) {
    JobNode.call(this);
    this.mj_1 = childJob;
  }
  protoOf(ChildHandleNode).bd = function () {
    return this.mh();
  };
  protoOf(ChildHandleNode).hh = function () {
    return true;
  };
  protoOf(ChildHandleNode).jg = function (cause) {
    return this.mj_1.pd(this.mh());
  };
  protoOf(ChildHandleNode).qd = function (cause) {
    return this.mh().qd(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hk_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function IncompleteStateBox(state) {
    this.hk_1 = state;
  }
  function handlesExceptionF($this) {
    var tmp = $this.ad();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.mh();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.xd())
        return true;
      var tmp_1 = parentJob.ad();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.mh();
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
    this.dc(parent);
    this.kk_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).od = function () {
    return true;
  };
  protoOf(JobImpl).xd = function () {
    return this.kk_1;
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
    var tmp0_elvis_lhs = this.nk();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).nk = function () {
    var main = Dispatchers_getInstance().sk();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.mk();
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
  protoOf(SupervisorJobImpl).qd = function (cause) {
    return false;
  };
  function TimeoutCancellationException() {
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).vh = function (context) {
    return false;
  };
  protoOf(Unconfined).wh = function (context, block) {
    var yieldContext = context.s6(Key_instance_3);
    if (!(yieldContext == null)) {
      yieldContext.yk_1 = true;
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
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
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
    $this.el_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value = value;
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this.dl_1 = channel;
    this.el_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).fl = function () {
    return ensureNotNull(this.dl_1);
  };
  protoOf(ChannelSegment).gl = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).hl = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).il = function (index) {
    var tmp = this.el_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ChannelSegment).jl = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.il(index);
    this.kl(index);
    return this_0;
  };
  protoOf(ChannelSegment).kl = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).ll = function (index) {
    return this.el_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).ml = function (index, value) {
    this.el_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value = value;
  };
  protoOf(ChannelSegment).nl = function (index, from, to) {
    return this.el_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).ol = function (index, update) {
    return this.el_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).qf = function (index, cause, context) {
    var isSender = index >= get_SEGMENT_SIZE();
    var index_0 = isSender ? index - get_SEGMENT_SIZE() | 0 : index;
    var element = this.il(index_0);
    $l$loop: while (true) {
      var cur = this.ll(index_0);
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.nl(index_0, cur, update)) {
          this.kl(index_0);
          this.bm(index_0, !isSender);
          if (isSender) {
            var tmp0_safe_receiver = this.fl().ql_1;
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
          this.kl(index_0);
          if (isSender) {
            var tmp1_safe_receiver = this.fl().ql_1;
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
  protoOf(ChannelSegment).bm = function (index, receiver) {
    if (receiver) {
      var tmp = this.fl();
      var tmp0 = this.of_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$1 = tmp0.a2(toLong(other)).y1(toLong(index));
      tmp.cm(tmp$ret$1);
    }
    this.dm();
  };
  function onClosedHasNext($this) {
    $this.qm_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.sm_1.tm();
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
      $this.rm_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var this_0 = $this.sm_1;
      var updCellResult = updateCellReceive(this_0, segment, index, r, $this);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension(this_0, $this, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (r.x1(this_0.um()) < 0) {
          segment.nm();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = this_0.wl_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if (this_0.vm()) {
              onClosedHasNextNoWaiterSuspend($this);
              break $l$block_0;
            }
            var r_0 = this_0.sl_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = r_0.b2(toLong(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var i = r_0.c2(toLong(other_0)).k2();
            if (!segment_0.of_1.equals(id)) {
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
              if (r_0.x1(this_0.um()) < 0) {
                segment_0.nm();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              // Inline function 'kotlin.error' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.nm();
              var element = (updCellResult_0 == null ? true : !(updCellResult_0 == null)) ? updCellResult_0 : THROW_CCE();
              $this.qm_1 = element;
              $this.rm_1 = null;
              var tmp0_safe_receiver = $this.sm_1.ql_1;
              cancellable.ue(true, tmp0_safe_receiver == null ? null : bindCancellationFun($this.sm_1, tmp0_safe_receiver, element));
            }
            break $l$block_0;
          }
        }
      } else {
        segment.nm();
        var element_0 = (updCellResult == null ? true : !(updCellResult == null)) ? updCellResult : THROW_CCE();
        $this.qm_1 = element_0;
        $this.rm_1 = null;
        var tmp0_safe_receiver_0 = $this.sm_1.ql_1;
        cancellable.ue(true, tmp0_safe_receiver_0 == null ? null : bindCancellationFun($this.sm_1, tmp0_safe_receiver_0, element_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.ng();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.mg();
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.rm_1);
    $this.rm_1 = null;
    $this.qm_1 = get_CHANNEL_CLOSED();
    var cause = $this.sm_1.tm();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.q6(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.q6(tmp$ret$2);
    }
  }
  function $hasNextCOROUTINE$4(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.en_1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$4).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        switch (tmp) {
          case 0:
            this.g6_1 = 8;
            if (!(this.en_1.qm_1 === get_NO_RECEIVE_RESULT()) && !(this.en_1.qm_1 === get_CHANNEL_CLOSED())) {
              var tmp_0 = this;
              tmp_0.fn_1 = true;
              this.f6_1 = 11;
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.gn_1 = this.en_1.sm_1;
              var tmp_2 = this;
              tmp_2.hn_1 = null;
              this.f6_1 = 1;
              continue $sm;
            }

          case 1:
            this.jn_1 = this.gn_1;
            this.kn_1 = this.hn_1;
            this.ln_1 = this.jn_1.wl_1.kotlinx$atomicfu$value;
            this.f6_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.f6_1 = 9;
              continue $sm;
            }

            if (this.jn_1.vm()) {
              var tmp_3 = this;
              tmp_3.in_1 = onClosedHasNext(this.en_1);
              this.f6_1 = 10;
              continue $sm;
            } else {
              this.f6_1 = 3;
              continue $sm;
            }

          case 3:
            this.mn_1 = this.jn_1.sl_1.atomicfu$getAndIncrement$long();
            var tmp_4 = this;
            var tmp0 = this.mn_1;
            var other = get_SEGMENT_SIZE();
            tmp_4.nn_1 = tmp0.b2(toLong(other));
            var tmp_5 = this;
            var tmp2 = this.mn_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_5.on_1 = tmp2.c2(toLong(other_0)).k2();
            if (!this.ln_1.of_1.equals(this.nn_1)) {
              this.pn_1 = findSegmentReceive(this.jn_1, this.nn_1, this.ln_1);
              if (this.pn_1 == null) {
                this.f6_1 = 2;
                var tmp_6 = this;
                continue $sm;
              } else {
                this.qn_1 = this.pn_1;
                this.f6_1 = 4;
                continue $sm;
              }
            } else {
              this.f6_1 = 5;
              continue $sm;
            }

          case 4:
            this.ln_1 = this.qn_1;
            this.f6_1 = 5;
            continue $sm;
          case 5:
            this.rn_1 = updateCellReceive(this.jn_1, this.ln_1, this.on_1, this.mn_1, this.kn_1);
            if (this.rn_1 === get_SUSPEND()) {
              var tmp_7 = this;
              var tmp_8 = this.kn_1;
              var tmp1_safe_receiver = (!(tmp_8 == null) ? isInterface(tmp_8, Waiter) : false) ? tmp_8 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.jn_1, tmp1_safe_receiver, this.ln_1, this.on_1);
              }
              this.ln_1;
              this.on_1;
              this.mn_1;
              var message = 'unreachable';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (this.rn_1 === get_FAILED()) {
                if (this.mn_1.x1(this.jn_1.um()) < 0) {
                  this.ln_1.nm();
                }
                this.f6_1 = 2;
                var tmp_9 = this;
                continue $sm;
              } else {
                if (this.rn_1 === get_SUSPEND_NO_WAITER()) {
                  var tmp_10 = this;
                  tmp_10.tn_1 = this.ln_1;
                  var tmp_11 = this;
                  tmp_11.un_1 = this.on_1;
                  var tmp_12 = this;
                  tmp_12.vn_1 = this.mn_1;
                  this.wn_1 = this.tn_1;
                  this.xn_1 = this.un_1;
                  this.yn_1 = this.vn_1;
                  this.f6_1 = 6;
                  suspendResult = hasNextOnNoWaiterSuspend(this.en_1, this.wn_1, this.xn_1, this.yn_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_13 = this;
                  this.ln_1.nm();
                  var tmp_14 = this.rn_1;
                  var element = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
                  this.en_1.qm_1 = element;
                  tmp_13.sn_1 = true;
                  this.f6_1 = 7;
                  continue $sm;
                }
              }
            }

          case 6:
            var tmp_15 = this;
            return suspendResult;
          case 7:
            this.in_1 = this.sn_1;
            this.f6_1 = 10;
            continue $sm;
          case 8:
            throw this.i6_1;
          case 9:
            if (false) {
              this.f6_1 = 1;
              continue $sm;
            }

            this.f6_1 = 10;
            continue $sm;
          case 10:
            this.fn_1 = this.in_1;
            this.f6_1 = 11;
            continue $sm;
          case 11:
            return this.fn_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g6_1 === 8) {
          throw e;
        } else {
          this.f6_1 = this.g6_1;
          this.i6_1 = e;
        }
      }
     while (true);
  };
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.tl_1.kotlinx$atomicfu$value;
  }
  function _get_isRendezvousOrUnlimited__3mdufi($this) {
    // Inline function 'kotlin.let' call
    var it = _get_bufferEndCounter__2d4hee($this);
    return it.equals(new Long(0, 0)) || it.equals(new Long(-1, 2147483647));
  }
  function onClosedSend($this, element, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.cg();
    $l$block: {
      var tmp0_safe_receiver = $this.ql_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, $this.zn());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = recoverStackTrace(tmp1_safe_receiver, cancellable);
        var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
        cancellable.q6(tmp$ret$0);
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var exception_0 = $this.zn();
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = recoverStackTrace(exception_0, cancellable);
      var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(exception_1));
      cancellable.q6(tmp$ret$4);
    }
    return cancellable.mg();
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      switch (updateCellSend($this, segment, index, element, s, cancellable, false)) {
        case 0:
          segment.nm();
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.q6(tmp$ret$0);
          break;
        case 1:
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.q6(tmp$ret$3);
          break;
        case 2:
          prepareSenderForSuspension($this, cancellable, segment, index);
          break;
        case 4:
          if (s.x1($this.ao()) < 0) {
            segment.nm();
          }

          onClosedSendOnNoWaiterSuspend($this, element, cancellable);
          break;
        case 5:
          segment.nm();
          $l$block_5: {
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
            var segment_0 = $this.vl_1.kotlinx$atomicfu$value;
            $l$loop_0: while (true) {
              var sendersAndCloseStatusCur = $this.rl_1.atomicfu$getAndIncrement$long();
              // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
              var s_0 = sendersAndCloseStatusCur.j2(new Long(-1, 268435455));
              var closed = _get_isClosedForSend0__kxgf9m($this, sendersAndCloseStatusCur);
              // Inline function 'kotlin.Long.div' call
              var other = get_SEGMENT_SIZE();
              var id = s_0.b2(toLong(other));
              // Inline function 'kotlin.Long.rem' call
              var other_0 = get_SEGMENT_SIZE();
              var i = s_0.c2(toLong(other_0)).k2();
              if (!segment_0.of_1.equals(id)) {
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
                  segment_0.nm();
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$12 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.q6(tmp$ret$12);
                  break $l$block_5;
                case 1:
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$15 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.q6(tmp$ret$15);
                  break $l$block_5;
                case 2:
                  if (closed) {
                    segment_0.dm();
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
                  if (s_0.x1($this.ao()) < 0) {
                    segment_0.nm();
                  }

                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  break $l$block_5;
                case 5:
                  segment_0.nm();
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
        cancellable.ng();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.mg();
  }
  function prepareSenderForSuspension($this, _this__u8e3s4, segment, index) {
    _this__u8e3s4.sg(segment, index + get_SEGMENT_SIZE() | 0);
  }
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp0_safe_receiver = $this.ql_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, element, cont.l6());
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = recoverStackTrace($this.zn(), cont);
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.q6(tmp$ret$0);
  }
  function SendBroadcast() {
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.hl(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.ll(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.nl(index, null, get_BUFFERED())) {
          return 1;
        }
      } else {
        if (waiter == null) {
          return 3;
        } else {
          if (segment.nl(index, null, waiter))
            return 2;
        }
      }
    } else {
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        segment.kl(index);
        var tmp;
        if (tryResumeReceiver($this, state, element)) {
          segment.ml(index, get_DONE_RCV());
          $this.bo();
          tmp = 0;
        } else {
          if (!(segment.ol(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.bm(index, true);
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
      var state = segment.ll(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) && !closed) {
          if (segment.nl(index, null, get_BUFFERED())) {
            return 1;
          }
        } else {
          if (closed) {
            if (segment.nl(index, null, get_INTERRUPTED_SEND())) {
              segment.bm(index, false);
              return 4;
            }
          } else if (waiter == null)
            return 3;
          else if (segment.nl(index, null, waiter))
            return 2;
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.nl(index, state, get_BUFFERED())) {
          return 1;
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.kl(index);
        return 5;
      } else if (state === get_POISONED()) {
        segment.kl(index);
        return 5;
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.kl(index);
        completeCloseOrCancel($this);
        return 4;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.kl(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.co_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver($this, receiver, element)) {
          segment.ml(index, get_DONE_RCV());
          $this.bo();
          tmp_0 = 0;
        } else {
          if (!(segment.ol(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.bm(index, true);
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
    var tmp$ret$0 = curSendersAndCloseStatus.j2(new Long(-1, 268435455));
    return !bufferOrRendezvousSend($this, tmp$ret$0);
  }
  function bufferOrRendezvousSend($this, curSenders) {
    var tmp;
    if (curSenders.x1(_get_bufferEndCounter__2d4hee($this)) < 0) {
      tmp = true;
    } else {
      var tmp0 = $this.ao();
      // Inline function 'kotlin.Long.plus' call
      var other = $this.pl_1;
      var tmp$ret$0 = tmp0.y1(toLong(other));
      tmp = curSenders.x1(tmp$ret$0) < 0;
    }
    return tmp;
  }
  function tryResumeReceiver($this, _this__u8e3s4, element) {
    var tmp;
    if (isInterface(_this__u8e3s4, SelectInstance)) {
      tmp = _this__u8e3s4.ho($this, element);
    } else {
      if (_this__u8e3s4 instanceof ReceiveCatching) {
        if (!(_this__u8e3s4 instanceof ReceiveCatching))
          THROW_CCE();
        var tmp_0 = Companion_getInstance().fo(element);
        var tmp1_safe_receiver = $this.ql_1;
        tmp = tryResume0(_this__u8e3s4.go_1, new ChannelResult(tmp_0), tmp1_safe_receiver == null ? null : bindCancellationFunResult($this, tmp1_safe_receiver));
      } else {
        if (_this__u8e3s4 instanceof BufferedChannelIterator) {
          if (!(_this__u8e3s4 instanceof BufferedChannelIterator))
            THROW_CCE();
          tmp = _this__u8e3s4.do(element);
        } else {
          if (isInterface(_this__u8e3s4, CancellableContinuation)) {
            if (!isInterface(_this__u8e3s4, CancellableContinuation))
              THROW_CCE();
            var tmp2_safe_receiver = $this.ql_1;
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
    $this.io();
    _this__u8e3s4.sg(segment, index);
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.ll(index);
    if (state === null) {
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var senders = $this.rl_1.kotlinx$atomicfu$value.j2(new Long(-1, 268435455));
      if (r.x1(senders) >= 0) {
        if (waiter === null) {
          return get_SUSPEND_NO_WAITER();
        }
        if (segment.nl(index, state, waiter)) {
          expandBuffer($this);
          return get_SUSPEND();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.nl(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.jl(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.ll(index);
      if (state === null || state === get_IN_BUFFER()) {
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var senders = $this.rl_1.kotlinx$atomicfu$value.j2(new Long(-1, 268435455));
        if (r.x1(senders) < 0) {
          if (segment.nl(index, state, get_POISONED())) {
            expandBuffer($this);
            return get_FAILED();
          }
        } else {
          if (waiter === null) {
            return get_SUSPEND_NO_WAITER();
          }
          if (segment.nl(index, state, waiter)) {
            expandBuffer($this);
            return get_SUSPEND();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.nl(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.jl(index);
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
        if (segment.nl(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.co_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender($this, sender, segment, index)) {
            segment.ml(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.jl(index);
          } else {
            segment.ml(index, get_INTERRUPTED_SEND());
            segment.bm(index, false);
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
        var trySelectResult = _this__u8e3s4.no($this, Unit_instance);
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.kl(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if (_this__u8e3s4 instanceof SendBroadcast) {
          tmp = tryResume0(_this__u8e3s4.jo_1, true);
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
    var segment = $this.xl_1.kotlinx$atomicfu$value;
    try_again: while (true) {
      var b = $this.tl_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = b.b2(toLong(other));
      var s = $this.um();
      if (s.x1(b) <= 0) {
        if (segment.of_1.x1(id) < 0 && !(segment.jm() == null)) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts$default($this);
        return Unit_instance;
      }
      if (!segment.of_1.equals(id)) {
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
      var i = b.c2(toLong(other_0)).k2();
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
    var state = segment.ll(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (b.x1($this.sl_1.kotlinx$atomicfu$value) >= 0) {
        if (segment.nl(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender($this, state, segment, index)) {
            segment.ml(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.ml(index, get_INTERRUPTED_SEND());
            segment.bm(index, false);
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
      var state = segment.ll(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (b.x1($this.sl_1.kotlinx$atomicfu$value) < 0) {
          if (segment.nl(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.nl(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender($this, state, segment, index)) {
              segment.ml(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.ml(index, get_INTERRUPTED_SEND());
              segment.bm(index, false);
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
            if (segment.nl(index, state, get_IN_BUFFER()))
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
    if (!$this.ul_1.atomicfu$addAndGet$long(nAttempts).j2(new Long(0, 1073741824)).equals(new Long(0, 0))) {
      $l$loop: while (true) {
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        if (!!$this.ul_1.kotlinx$atomicfu$value.j2(new Long(0, 1073741824)).equals(new Long(0, 0))) {
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
    this.sm_1 = $outer;
    this.qm_1 = get_NO_RECEIVE_RESULT();
    this.rm_1 = null;
  }
  protoOf(BufferedChannelIterator).oo = function ($completion) {
    var tmp = new $hasNextCOROUTINE$4(this, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  protoOf(BufferedChannelIterator).sg = function (segment, index) {
    var tmp0_safe_receiver = this.rm_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.sg(segment, index);
    }
  };
  protoOf(BufferedChannelIterator).g = function () {
    var result = this.qm_1;
    // Inline function 'kotlin.check' call
    if (!!(result === get_NO_RECEIVE_RESULT())) {
      var message = '`hasNext()` has not been invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.qm_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.sm_1));
    return (result == null ? true : !(result == null)) ? result : THROW_CCE();
  };
  protoOf(BufferedChannelIterator).do = function (element) {
    var cont = ensureNotNull(this.rm_1);
    this.rm_1 = null;
    this.qm_1 = element;
    var tmp0_safe_receiver = this.sm_1.ql_1;
    return tryResume0(cont, true, tmp0_safe_receiver == null ? null : bindCancellationFun(this.sm_1, tmp0_safe_receiver, element));
  };
  protoOf(BufferedChannelIterator).po = function () {
    var cont = ensureNotNull(this.rm_1);
    this.rm_1 = null;
    this.qm_1 = get_CHANNEL_CLOSED();
    var cause = this.sm_1.tm();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      cont.q6(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.q6(tmp$ret$2);
    }
  };
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.tm();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException('Channel was closed') : tmp0_elvis_lhs;
  }
  function invokeCloseHandler($this) {
    var tmp0 = $this.am_1;
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
    closeHandler($this.tm());
  }
  function markClosed($this) {
    var tmp0 = $this.rl_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        var tmp;
        switch (cur.i2(60).k2()) {
          case 0:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$1 = cur.j2(new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$1, 2);
            break;
          case 1:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$2 = cur.j2(new Long(-1, 268435455));
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
    var tmp0 = $this.rl_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var tmp$ret$0 = cur.j2(new Long(-1, 268435455));
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
    var tmp0 = $this.rl_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        var tmp;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        if (cur.i2(60).k2() === 0) {
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          var tmp$ret$1 = cur.j2(new Long(-1, 268435455));
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
    $this.qo();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.so()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!lastBufferedCellGlobalIndex.equals(new Long(-1, -1))) {
        $this.ro(lastBufferedCellGlobalIndex);
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
    var lastSegment = $this.xl_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.let' call
    var it = $this.vl_1.kotlinx$atomicfu$value;
    if (it.of_1.x1(lastSegment.of_1) > 0)
      lastSegment = it;
    // Inline function 'kotlin.let' call
    var it_0 = $this.wl_1.kotlinx$atomicfu$value;
    if (it_0.of_1.x1(lastSegment.of_1) > 0)
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
          var tmp0 = segment.of_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var globalIndex = tmp0.a2(toLong(other)).y1(toLong(index));
          if (globalIndex.x1($this.ao()) < 0)
            return new Long(-1, -1);
          cell_update: while (true) {
            var state = segment.ll(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.nl(index, state, get_CHANNEL_CLOSED())) {
                segment.dm();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp0_elvis_lhs = segment.mm();
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
    var onUndeliveredElement = $this.ql_1;
    var undeliveredElementException = null;
    var suspendedSenders = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.of_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var globalIndex = tmp0.a2(toLong(other)).y1(toLong(index));
          update_cell: while (true) {
            var state = segment.ll(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (globalIndex.x1($this.ao()) < 0)
                  break process_segments;
                if (segment.nl(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.il(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.kl(index);
                  segment.dm();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() || state === null) {
                  if (segment.nl(index, state, get_CHANNEL_CLOSED())) {
                    segment.dm();
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
                    if (globalIndex.x1($this.ao()) < 0)
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.co_1;
                    } else {
                      tmp_0 = (!(state == null) ? isInterface(state, Waiter) : false) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.nl(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.il(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.kl(index);
                      segment.dm();
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
      var tmp0_elvis_lhs = segment.mm();
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
          var inductionVariable_0 = list.h() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.o(i);
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
          var tmp0 = segment.of_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          if (tmp0.a2(toLong(other)).y1(toLong(index)).x1(sendersCounter) < 0)
            break process_segments;
          cell_update: while (true) {
            var state = segment.ll(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.nl(index, state, get_CHANNEL_CLOSED())) {
                segment.dm();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.nl(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.co_1);
                  segment.bm(index, true);
                  break cell_update;
                }
              } else {
                if (!(state == null) ? isInterface(state, Waiter) : false) {
                  if (segment.nl(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.bm(index, true);
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
      segment = segment.mm();
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
          var inductionVariable_0 = list.h() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.o(i);
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
      var this_0 = _this__u8e3s4.jo_1;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(false);
      this_0.q6(tmp$ret$0);
    } else {
      if (isInterface(_this__u8e3s4, CancellableContinuation)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = receiver ? _get_receiveException__foorc1($this) : $this.zn();
        var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
        _this__u8e3s4.q6(tmp$ret$2);
      } else {
        if (_this__u8e3s4 instanceof ReceiveCatching) {
          var tmp4 = _this__u8e3s4.go_1;
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = new ChannelResult(Companion_getInstance().to($this.tm()));
          var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
          tmp4.q6(tmp$ret$4);
        } else {
          if (_this__u8e3s4 instanceof BufferedChannelIterator) {
            _this__u8e3s4.po();
          } else {
            if (isInterface(_this__u8e3s4, SelectInstance))
              _this__u8e3s4.ho($this, get_CHANNEL_CLOSED());
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
    switch (sendersAndCloseStatusCur.i2(60).k2()) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$1 = sendersAndCloseStatusCur.j2(new Long(-1, 268435455));
        completeClose($this, tmp$ret$1);
        tmp = isClosedForReceive ? !$this.uo() : true;
        break;
      case 3:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$2 = sendersAndCloseStatusCur.j2(new Long(-1, 268435455));
        completeCancel($this, tmp$ret$2);
        tmp = true;
        break;
      default:
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call

        var message = 'unexpected close status: ' + sendersAndCloseStatusCur.i2(60).k2();
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function isCellNonEmpty($this, segment, index, globalIndex) {
    while (true) {
      var state = segment.ll(index);
      if (state === null || state === get_IN_BUFFER()) {
        if (segment.nl(index, state, get_POISONED())) {
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
        return globalIndex.equals($this.ao());
    }
  }
  function findSegmentSend($this, id, startFrom) {
    var tmp0 = $this.vl_1;
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
              if (cur.of_1.x1(tmp1.of_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp1.fm()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.gm()) {
                  cur.pm();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp1.gm()) {
                tmp1.pm();
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
      var tmp0_0 = startFrom.of_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      if (tmp0_0.a2(toLong(other)).x1($this.ao()) < 0) {
        startFrom.nm();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (segment.of_1.x1(id) > 0) {
        var tmp2 = segment.of_1;
        // Inline function 'kotlin.Long.times' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$4 = tmp2.a2(toLong(other_0));
        updateSendersCounterIfLower($this, tmp$ret$4);
        var tmp4 = segment.of_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        if (tmp4.a2(toLong(other_1)).x1($this.ao()) < 0) {
          segment.nm();
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
    var tmp0 = $this.wl_1;
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
              if (cur.of_1.x1(tmp1.of_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp1.fm()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.gm()) {
                  cur.pm();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp1.gm()) {
                tmp1.pm();
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
      var tmp0_0 = startFrom.of_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      if (tmp0_0.a2(toLong(other)).x1($this.um()) < 0) {
        startFrom.nm();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (!_get_isRendezvousOrUnlimited__3mdufi($this)) {
        var tmp2 = _get_bufferEndCounter__2d4hee($this);
        // Inline function 'kotlin.Long.div' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$4 = tmp2.b2(toLong(other_0));
        tmp_1 = id.x1(tmp$ret$4) <= 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp4 = $this.xl_1;
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          while (true) {
            var cur_0 = tmp4.kotlinx$atomicfu$value;
            if (cur_0.of_1.x1(segment.of_1) >= 0) {
              break $l$block_5;
            }
            if (!segment.fm()) {
              break $l$block_5;
            }
            if (tmp4.atomicfu$compareAndSet(cur_0, segment)) {
              if (cur_0.gm()) {
                cur_0.pm();
              }
              break $l$block_5;
            }
            if (segment.gm()) {
              segment.pm();
            }
          }
        }
      }
      var tmp_2;
      if (segment.of_1.x1(id) > 0) {
        var tmp6 = segment.of_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$7 = tmp6.a2(toLong(other_1));
        updateReceiversCounterIfLower($this, tmp$ret$7);
        var tmp8 = segment.of_1;
        // Inline function 'kotlin.Long.times' call
        var other_2 = get_SEGMENT_SIZE();
        if (tmp8.a2(toLong(other_2)).x1($this.um()) < 0) {
          segment.nm();
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
    var tmp0 = $this.xl_1;
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
              if (cur.of_1.x1(tmp1.of_1) >= 0) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (!tmp1.fm()) {
                tmp$ret$0 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.gm()) {
                  cur.pm();
                }
                tmp$ret$0 = true;
                break $l$block_1;
              }
              if (tmp1.gm()) {
                tmp1.pm();
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
      if (segment.of_1.x1(id) > 0) {
        // Inline function 'kotlin.Long.plus' call
        var tmp_2 = currentBufferEndCounter.y1(toLong(1));
        var tmp2 = segment.of_1;
        // Inline function 'kotlin.Long.times' call
        var other = get_SEGMENT_SIZE();
        var tmp$ret$4 = tmp2.a2(toLong(other));
        if ($this.tl_1.atomicfu$compareAndSet(tmp_2, tmp$ret$4)) {
          var tmp4 = segment.of_1;
          // Inline function 'kotlin.Long.times' call
          var other_0 = get_SEGMENT_SIZE();
          var tmp$ret$5 = tmp4.a2(toLong(other_0));
          incCompletedExpandBufferAttempts($this, tmp$ret$5.z1(currentBufferEndCounter));
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
    $l$loop: while (segment.of_1.x1(id) < 0) {
      var tmp0_elvis_lhs = segment.jm();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.em()) {
        var tmp1_elvis_lhs = segment.jm();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        segment = tmp_0;
      }
      var tmp0 = $this.xl_1;
      var tmp1 = segment;
      var tmp$ret$0;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.moveForward' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          if (cur.of_1.x1(tmp1.of_1) >= 0) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!tmp1.fm()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (tmp0.atomicfu$compareAndSet(cur, tmp1)) {
            if (cur.gm()) {
              cur.pm();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (tmp1.gm()) {
            tmp1.pm();
          }
        }
        tmp$ret$0 = Unit_instance;
      }
      if (tmp$ret$0)
        return Unit_instance;
    }
  }
  function updateSendersCounterIfLower($this, value) {
    var this_0 = $this.rl_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var curCounter = cur.j2(new Long(-1, 268435455));
      if (curCounter.x1(value) >= 0)
        return Unit_instance;
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      var tmp$ret$1 = cur.i2(60).k2();
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$1);
      if ($this.rl_1.atomicfu$compareAndSet(cur, update))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function updateReceiversCounterIfLower($this, value) {
    var this_0 = $this.sl_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      if (cur.x1(value) >= 0)
        return Unit_instance;
      if ($this.sl_1.atomicfu$compareAndSet(cur, value))
        return Unit_instance;
    }
    return Unit_instance;
  }
  function bindCancellationFunResult($this, _this__u8e3s4) {
    return BufferedChannel$onCancellationChannelResultImplDoNotCall$ref($this);
  }
  function onCancellationChannelResultImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.ql_1), ensureNotNull(ChannelResult__getOrNull_impl_f5e07h(element)), context);
  }
  function bindCancellationFun($this, _this__u8e3s4, element) {
    return BufferedChannel$bindCancellationFun$lambda(_this__u8e3s4, element);
  }
  function bindCancellationFun_0($this, _this__u8e3s4) {
    return BufferedChannel$onCancellationImplDoNotCall$ref($this);
  }
  function onCancellationImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.ql_1), element, context);
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda($element, this$0, $select) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      var tmp;
      if (!($element === get_CHANNEL_CLOSED())) {
        callUndeliveredElement(this$0.ql_1, ($element == null ? true : !($element == null)) ? $element : THROW_CCE(), $select.l6());
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
      onCancellationChannelResultImplDoNotCall($boundThis, p0, p1.wo_1, p2);
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
  function $sendCOROUTINE$1(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fp_1 = _this__u8e3s4;
    this.gp_1 = element;
  }
  protoOf($sendCOROUTINE$1).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        switch (tmp) {
          case 0:
            this.g6_1 = 11;
            var tmp_0 = this;
            tmp_0.hp_1 = this.fp_1;
            var tmp_1 = this;
            tmp_1.ip_1 = this.gp_1;
            var tmp_2 = this;
            tmp_2.jp_1 = null;
            this.f6_1 = 1;
            continue $sm;
          case 1:
            this.lp_1 = this.hp_1;
            this.mp_1 = this.ip_1;
            this.np_1 = this.jp_1;
            this.op_1 = this.lp_1.vl_1.kotlinx$atomicfu$value;
            this.f6_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.f6_1 = 12;
              continue $sm;
            }

            this.pp_1 = this.lp_1.rl_1.atomicfu$getAndIncrement$long();
            var tmp_3 = this;
            tmp_3.qp_1 = this.pp_1.j2(new Long(-1, 268435455));
            this.rp_1 = _get_isClosedForSend0__kxgf9m(this.lp_1, this.pp_1);
            var tmp_4 = this;
            var tmp0 = this.qp_1;
            var other = get_SEGMENT_SIZE();
            tmp_4.sp_1 = tmp0.b2(toLong(other));
            var tmp_5 = this;
            var tmp2 = this.qp_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_5.tp_1 = tmp2.c2(toLong(other_0)).k2();
            if (!this.op_1.of_1.equals(this.sp_1)) {
              this.up_1 = findSegmentSend(this.lp_1, this.sp_1, this.op_1);
              if (this.up_1 == null) {
                if (this.rp_1) {
                  this.f6_1 = 10;
                  suspendResult = onClosedSend(this.fp_1, this.gp_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.f6_1 = 2;
                  continue $sm;
                }
              } else {
                this.vp_1 = this.up_1;
                this.f6_1 = 3;
                continue $sm;
              }
            } else {
              this.f6_1 = 4;
              continue $sm;
            }

          case 3:
            this.op_1 = this.vp_1;
            this.f6_1 = 4;
            continue $sm;
          case 4:
            this.wp_1 = updateCellSend(this.lp_1, this.op_1, this.tp_1, this.mp_1, this.qp_1, this.np_1, this.rp_1);
            if (this.wp_1 === 0) {
              this.op_1.nm();
              var tmp_6 = this;
              tmp_6.kp_1 = Unit_instance;
              this.f6_1 = 13;
              continue $sm;
            } else {
              if (this.wp_1 === 1) {
                var tmp_7 = this;
                tmp_7.kp_1 = Unit_instance;
                this.f6_1 = 13;
                continue $sm;
              } else {
                if (this.wp_1 === 2) {
                  if (this.rp_1) {
                    this.op_1.dm();
                    this.f6_1 = 9;
                    suspendResult = onClosedSend(this.fp_1, this.gp_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.f6_1 = 8;
                    continue $sm;
                  }
                } else {
                  if (this.wp_1 === 4) {
                    if (this.qp_1.x1(this.lp_1.ao()) < 0) {
                      this.op_1.nm();
                    }
                    this.f6_1 = 7;
                    suspendResult = onClosedSend(this.fp_1, this.gp_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.wp_1 === 5) {
                      this.op_1.nm();
                      this.f6_1 = 2;
                      continue $sm;
                    } else {
                      if (this.wp_1 === 3) {
                        var tmp_8 = this;
                        tmp_8.xp_1 = this.op_1;
                        var tmp_9 = this;
                        tmp_9.yp_1 = this.tp_1;
                        var tmp_10 = this;
                        tmp_10.zp_1 = this.mp_1;
                        var tmp_11 = this;
                        tmp_11.aq_1 = this.qp_1;
                        this.bq_1 = this.xp_1;
                        this.cq_1 = this.yp_1;
                        this.dq_1 = this.zp_1;
                        this.eq_1 = this.aq_1;
                        this.f6_1 = 6;
                        suspendResult = sendOnNoWaiterSuspend(this.fp_1, this.bq_1, this.cq_1, this.dq_1, this.eq_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.f6_1 = 5;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 5:
            this.f6_1 = 2;
            continue $sm;
          case 6:
            var tmp_12 = this;
            tmp_12.kp_1 = Unit_instance;
            this.f6_1 = 13;
            continue $sm;
          case 7:
            var tmp_13 = this;
            tmp_13.kp_1 = Unit_instance;
            this.f6_1 = 13;
            continue $sm;
          case 8:
            var tmp_14 = this.np_1;
            var tmp2_safe_receiver = (!(tmp_14 == null) ? isInterface(tmp_14, Waiter) : false) ? tmp_14 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(this.lp_1, tmp2_safe_receiver, this.op_1, this.tp_1);
            }

            var tmp_15 = this;
            this.op_1;
            this.tp_1;
            tmp_15.kp_1 = Unit_instance;
            this.f6_1 = 13;
            continue $sm;
          case 9:
            var tmp_16 = this;
            tmp_16.kp_1 = Unit_instance;
            this.f6_1 = 13;
            continue $sm;
          case 10:
            var tmp_17 = this;
            tmp_17.kp_1 = Unit_instance;
            this.f6_1 = 13;
            continue $sm;
          case 11:
            throw this.i6_1;
          case 12:
            if (false) {
              this.f6_1 = 1;
              continue $sm;
            }

            this.f6_1 = 13;
            continue $sm;
          case 13:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.g6_1 === 11) {
          throw e;
        } else {
          this.f6_1 = this.g6_1;
          this.i6_1 = e;
        }
      }
     while (true);
  };
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.pl_1 = capacity;
    this.ql_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    if (!(this.pl_1 >= 0)) {
      var message = 'Invalid channel capacity: ' + this.pl_1 + ', should be >=0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.rl_1 = atomic$long$1(new Long(0, 0));
    this.sl_1 = atomic$long$1(new Long(0, 0));
    this.tl_1 = atomic$long$1(initialBufferEnd(this.pl_1));
    this.ul_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(new Long(0, 0), null, this, 3);
    this.vl_1 = atomic$ref$1(firstSegment);
    this.wl_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.xl_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp_3;
    if (this.ql_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
    }
    tmp_2.yl_1 = tmp_3;
    this.zl_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.am_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).um = function () {
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    return this.rl_1.kotlinx$atomicfu$value.j2(new Long(-1, 268435455));
  };
  protoOf(BufferedChannel).ao = function () {
    return this.sl_1.kotlinx$atomicfu$value;
  };
  protoOf(BufferedChannel).fq = function (element, $completion) {
    var tmp = new $sendCOROUTINE$1(this, element, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  protoOf(BufferedChannel).gq = function (element) {
    if (shouldSendSuspend0(this, this.rl_1.kotlinx$atomicfu$value))
      return Companion_getInstance().hq();
    var tmp2 = get_INTERRUPTED_SEND();
    var tmp$ret$4;
    $l$block_4: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = this.vl_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.rl_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = sendersAndCloseStatusCur.j2(new Long(-1, 268435455));
        var closed = _get_isClosedForSend0__kxgf9m(this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = s.b2(toLong(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var i = s.c2(toLong(other_0)).k2();
        if (!segment.of_1.equals(id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              tmp$ret$4 = Companion_getInstance().to(this.zn());
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
            segment.nm();
            tmp$ret$4 = Companion_getInstance().fo(Unit_instance);
            break $l$block_4;
          case 1:
            tmp$ret$4 = Companion_getInstance().fo(Unit_instance);
            break $l$block_4;
          case 2:
            if (closed) {
              segment.dm();
              tmp$ret$4 = Companion_getInstance().to(this.zn());
              break $l$block_4;
            }

            var tmp2_safe_receiver = (!(tmp2 == null) ? isInterface(tmp2, Waiter) : false) ? tmp2 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
            }

            segment.dm();
            tmp$ret$4 = Companion_getInstance().hq();
            break $l$block_4;
          case 4:
            if (s.x1(this.ao()) < 0) {
              segment.nm();
            }

            tmp$ret$4 = Companion_getInstance().to(this.zn());
            break $l$block_4;
          case 5:
            segment.nm();
            continue $l$loop_0;
          case 3:
            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(BufferedChannel).iq = function (element) {
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
    var waiter = get_BUFFERED();
    var segment = this.vl_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var sendersAndCloseStatusCur = this.rl_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var s = sendersAndCloseStatusCur.j2(new Long(-1, 268435455));
      var closed = _get_isClosedForSend0__kxgf9m(this, sendersAndCloseStatusCur);
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = s.b2(toLong(other));
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = s.c2(toLong(other_0)).k2();
      if (!segment.of_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (closed) {
            return Companion_getInstance().to(this.zn());
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
          segment.nm();
          return Companion_getInstance().fo(Unit_instance);
        case 1:
          return Companion_getInstance().fo(Unit_instance);
        case 2:
          if (closed) {
            segment.dm();
            return Companion_getInstance().to(this.zn());
          }

          var tmp2_safe_receiver = (!(waiter == null) ? isInterface(waiter, Waiter) : false) ? waiter : null;
          if (tmp2_safe_receiver == null)
            null;
          else {
            prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
          }

          var tmp4 = segment.of_1;
          // Inline function 'kotlin.Long.times' call

          var other_1 = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call

          var tmp$ret$5 = tmp4.a2(toLong(other_1)).y1(toLong(i));
          this.ro(tmp$ret$5);
          return Companion_getInstance().fo(Unit_instance);
        case 4:
          if (s.x1(this.ao()) < 0) {
            segment.nm();
          }

          return Companion_getInstance().to(this.zn());
        case 5:
          segment.nm();
          continue $l$loop_0;
        case 3:
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp$ret$3;
  };
  protoOf(BufferedChannel).io = function () {
  };
  protoOf(BufferedChannel).bo = function () {
  };
  protoOf(BufferedChannel).ro = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.wl_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var r = this.sl_1.kotlinx$atomicfu$value;
      // Inline function 'kotlin.Long.plus' call
      var other = this.pl_1;
      var tmp2 = r.y1(toLong(other));
      // Inline function 'kotlin.math.max' call
      var b = _get_bufferEndCounter__2d4hee(this);
      var tmp$ret$2 = tmp2.x1(b) >= 0 ? tmp2 : b;
      if (globalCellIndex.x1(tmp$ret$2) < 0)
        return Unit_instance;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$3 = r.y1(toLong(1));
      if (!this.sl_1.atomicfu$compareAndSet(r, tmp$ret$3))
        continue $l$loop_0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = get_SEGMENT_SIZE();
      var id = r.b2(toLong(other_0));
      // Inline function 'kotlin.Long.rem' call
      var other_1 = get_SEGMENT_SIZE();
      var i = r.c2(toLong(other_1)).k2();
      if (!segment.of_1.equals(id)) {
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
        if (r.x1(this.um()) < 0) {
          segment.nm();
        }
      } else {
        segment.nm();
        var tmp1_safe_receiver = this.ql_1;
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
  protoOf(BufferedChannel).cm = function (globalIndex) {
    if (_get_isRendezvousOrUnlimited__3mdufi(this))
      return Unit_instance;
    while (_get_bufferEndCounter__2d4hee(this).x1(globalIndex) <= 0) {
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
        var ebCompleted = this.ul_1.kotlinx$atomicfu$value.j2(new Long(-1, 1073741823));
        if (b.equals(ebCompleted) && b.equals(_get_bufferEndCounter__2d4hee(this)))
          return Unit_instance;
      }
       while (inductionVariable < times);
    var tmp2 = this.ul_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp2.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var tmp$ret$3 = cur.j2(new Long(-1, 1073741823));
        var upd = constructEBCompletedAndPauseFlag(tmp$ret$3, true);
        if (tmp2.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    while (true) {
      var b_0 = _get_bufferEndCounter__2d4hee(this);
      var ebCompletedAndBit = this.ul_1.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      var ebCompleted_0 = ebCompletedAndBit.j2(new Long(-1, 1073741823));
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      var pauseExpandBuffers = !ebCompletedAndBit.j2(new Long(0, 1073741824)).equals(new Long(0, 0));
      if (b_0.equals(ebCompleted_0) && b_0.equals(_get_bufferEndCounter__2d4hee(this))) {
        var tmp4 = this.ul_1;
        $l$block_0: {
          // Inline function 'kotlinx.atomicfu.update' call
          while (true) {
            var cur_0 = tmp4.kotlinx$atomicfu$value;
            // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
            var tmp$ret$8 = cur_0.j2(new Long(-1, 1073741823));
            var upd_0 = constructEBCompletedAndPauseFlag(tmp$ret$8, false);
            if (tmp4.atomicfu$compareAndSet(cur_0, upd_0)) {
              break $l$block_0;
            }
          }
        }
        return Unit_instance;
      }
      if (!pauseExpandBuffers) {
        this.ul_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).e = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).tm = function () {
    var tmp = this.zl_1.kotlinx$atomicfu$value;
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).zn = function () {
    var tmp0_elvis_lhs = this.tm();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException('Channel was closed') : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).jq = function () {
  };
  protoOf(BufferedChannel).kq = function (cause) {
    return this.lq(cause, false);
  };
  protoOf(BufferedChannel).nq = function (cause) {
    this.oq(cause);
  };
  protoOf(BufferedChannel).oq = function (cause) {
    return this.lq(cause == null ? CancellationException_init_$Create$('Channel was cancelled') : cause, true);
  };
  protoOf(BufferedChannel).lq = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this.zl_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    // Inline function 'kotlin.also' call
    this.jq();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    return closedByThisOperation;
  };
  protoOf(BufferedChannel).so = function () {
    return false;
  };
  protoOf(BufferedChannel).qo = function () {
    return _get_isClosedForSend0__kxgf9m(this, this.rl_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).vm = function () {
    return _get_isClosedForReceive0__f7qknl(this, this.rl_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).uo = function () {
    $l$loop: while (true) {
      var segment = this.wl_1.kotlinx$atomicfu$value;
      var r = this.ao();
      var s = this.um();
      if (s.x1(r) <= 0)
        return false;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = r.b2(toLong(other));
      if (!segment.of_1.equals(id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (this.wl_1.kotlinx$atomicfu$value.of_1.x1(id) < 0) {
            return false;
          } else {
            continue $l$loop;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.nm();
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var i = r.c2(toLong(other_0)).k2();
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = r.y1(toLong(1));
      this.sl_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp0_subject = this.rl_1.kotlinx$atomicfu$value.i2(60).k2();
    if (tmp0_subject === 2) {
      sb.a6('closed,');
    } else if (tmp0_subject === 3) {
      sb.a6('cancelled,');
    }
    sb.a6('capacity=' + this.pl_1 + ',');
    sb.a6('data=[');
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = listOf([this.wl_1.kotlinx$atomicfu$value, this.vl_1.kotlinx$atomicfu$value, this.xl_1.kotlinx$atomicfu$value]);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      if (!(element === get_NULL_SEGMENT())) {
        destination.m(element);
      }
    }
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      var iterator = destination.e();
      if (!iterator.f())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.g();
      if (!iterator.f()) {
        tmp$ret$4 = minElem;
        break $l$block;
      }
      var minValue = minElem.of_1;
      do {
        var e = iterator.g();
        var v = e.of_1;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.f());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.ao();
    var s = this.um();
    var segment = firstSegment;
    append_elements: while (true) {
      var inductionVariable = 0;
      var last_0 = get_SEGMENT_SIZE();
      if (inductionVariable < last_0)
        process_cell: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp5 = segment.of_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var globalCellIndex = tmp5.a2(toLong(other)).y1(toLong(i));
          if (globalCellIndex.x1(s) >= 0 && globalCellIndex.x1(r) >= 0)
            break append_elements;
          var cellState = segment.ll(i);
          var element_0 = segment.il(i);
          var tmp;
          if (!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) {
            tmp = globalCellIndex.x1(r) < 0 && globalCellIndex.x1(s) >= 0 ? 'receive' : globalCellIndex.x1(s) < 0 && globalCellIndex.x1(r) >= 0 ? 'send' : 'cont';
          } else {
            if (!(cellState == null) ? isInterface(cellState, SelectInstance) : false) {
              tmp = globalCellIndex.x1(r) < 0 && globalCellIndex.x1(s) >= 0 ? 'onReceive' : globalCellIndex.x1(s) < 0 && globalCellIndex.x1(r) >= 0 ? 'onSend' : 'select';
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
            sb.a6('(' + cellStateString + ',' + toString_0(element_0) + '),');
          } else {
            sb.a6(cellStateString + ',');
          }
        }
         while (inductionVariable < last_0);
      var tmp2_elvis_lhs = segment.jm();
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (last(sb) === _Char___init__impl__6a9atx(44)) {
      sb.v8(sb.a() - 1 | 0);
    }
    sb.a6(']');
    return sb.toString();
  };
  function WaiterEB(waiter) {
    this.co_1 = waiter;
  }
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + toString(this.co_1) + ')';
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
    var token = _this__u8e3s4.se(value, null, onCancellation);
    var tmp;
    if (!(token == null)) {
      _this__u8e3s4.te(token);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function constructEBCompletedAndPauseFlag(counter, pauseEB) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return (pauseEB ? new Long(0, 1073741824) : new Long(0, 0)).y1(counter);
  }
  function constructSendersAndCloseStatus(counter, closeStatus) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return toLong(closeStatus).h2(60).y1(counter);
  }
  function createSegmentFunction() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return createSegment$ref();
  }
  function createSegment(id, prev) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return new ChannelSegment(id, prev, prev.fl(), 0);
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
    this.pq_1 = 2147483647;
    this.qq_1 = 0;
    this.rq_1 = -1;
    this.sq_1 = -2;
    this.tq_1 = -3;
    this.uq_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.vq_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
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
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wq_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.wq_1 = cause;
  }
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.wq_1, other.wq_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.wq_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + toString_0(this.wq_1) + ')';
  };
  function Companion() {
    Companion_instance_0 = this;
    this.eo_1 = new Failed();
  }
  protoOf(Companion).fo = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).hq = function () {
    return _ChannelResult___init__impl__siwsuf(this.eo_1);
  };
  protoOf(Companion).to = function (cause) {
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
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.wo_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance();
    this.wo_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.wo_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.wo_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.wo_1, other);
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
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().vq_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      default:
        tmp = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.ar_1 = _channel;
  }
  protoOf(ChannelCoroutine).nq = function (cause) {
    if (this.ed())
      return Unit_instance;
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.lc() : null, null, this);
    } else {
      tmp = cause;
    }
    this.br(tmp);
  };
  protoOf(ChannelCoroutine).br = function (cause) {
    var exception = this.jd(cause);
    this.ar_1.nq(exception);
    this.rd(exception);
  };
  protoOf(ChannelCoroutine).fq = function (element, $completion) {
    return this.ar_1.fq(element, $completion);
  };
  protoOf(ChannelCoroutine).kq = function (cause) {
    return this.ar_1.kq(cause);
  };
  protoOf(ChannelCoroutine).e = function () {
    return this.ar_1.e();
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
    _this__u8e3s4.nq(tmp);
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.pr_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : $this.iq(element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).gq.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) || _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp0_safe_receiver = $this.ql_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        throw tmp1_safe_receiver;
      }
    }
    return Companion_getInstance().fo(Unit_instance);
  }
  function ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    BufferedChannel.call(this, capacity, onUndeliveredElement);
    this.or_1 = capacity;
    this.pr_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    if (!!(this.pr_1 === BufferOverflow_SUSPEND_getInstance())) {
      var message = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).r7() + ' instead';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.or_1 >= 1)) {
      var message_0 = 'Buffered channel capacity must be at least 1, but ' + this.or_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).so = function () {
    return this.pr_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).fq = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var this_0 = trySendImpl(this, element, true);
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (tmp instanceof Closed) {
      ChannelResult__exceptionOrNull_impl_16ei30(this_0);
      var tmp0_safe_receiver = this.ql_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, this.zn());
        throw tmp1_safe_receiver;
      }
      throw this.zn();
    }
    return Unit_instance;
  };
  protoOf(ConflatedBufferedChannel).gq = function (element) {
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
      coroutine.kd(onCompletion);
    }
    coroutine.vc(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).ic = function () {
    return protoOf(ChannelCoroutine).ic.call(this);
  };
  protoOf(ProducerCoroutine).ur = function (value) {
    this.ar_1.mq();
  };
  protoOf(ProducerCoroutine).jc = function (value) {
    return this.ur(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).kc = function (cause, handled) {
    var processed = this.ar_1.kq(cause);
    if (!processed && !handled) {
      handleCoroutineException(this.gc_1, cause);
    }
  };
  function flow(block) {
    return new SafeFlow(block);
  }
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.vr_1 = block;
  }
  protoOf(SafeFlow).wr = function (collector, $completion) {
    return this.vr_1(collector, $completion);
  };
  function emitAll(_this__u8e3s4, channel, $completion) {
    return emitAllImpl(_this__u8e3s4, channel, true, $completion);
  }
  function emitAllImpl(_this__u8e3s4, channel, consume, $completion) {
    var tmp = new $emitAllImplCOROUTINE$8(_this__u8e3s4, channel, consume, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  }
  function $emitAllImplCOROUTINE$8(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gs_1 = _this__u8e3s4;
    this.hs_1 = channel;
    this.is_1 = consume;
  }
  protoOf($emitAllImplCOROUTINE$8).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        switch (tmp) {
          case 0:
            this.g6_1 = 9;
            ensureActive_1(this.gs_1);
            this.js_1 = null;
            this.f6_1 = 1;
            continue $sm;
          case 1:
            this.g6_1 = 7;
            this.g6_1 = 6;
            this.ls_1 = this.hs_1.e();
            this.f6_1 = 2;
            continue $sm;
          case 2:
            this.f6_1 = 3;
            suspendResult = this.ls_1.oo(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            if (!suspendResult) {
              this.f6_1 = 5;
              continue $sm;
            }

            this.ms_1 = this.ls_1.g();
            this.f6_1 = 4;
            suspendResult = this.gs_1.ns(this.ms_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.f6_1 = 2;
            continue $sm;
          case 5:
            this.ks_1 = Unit_instance;
            this.g6_1 = 9;
            this.f6_1 = 8;
            continue $sm;
          case 6:
            this.g6_1 = 7;
            var tmp_0 = this.i6_1;
            if (tmp_0 instanceof Error) {
              var e = this.i6_1;
              var tmp_1 = this;
              this.js_1 = e;
              throw e;
            } else {
              throw this.i6_1;
            }

          case 7:
            this.g6_1 = 9;
            var t = this.i6_1;
            if (this.is_1) {
              cancelConsumed(this.hs_1, this.js_1);
            }

            throw t;
          case 8:
            this.g6_1 = 9;
            if (this.is_1) {
              cancelConsumed(this.hs_1, this.js_1);
            }

            return Unit_instance;
          case 9:
            throw this.i6_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.g6_1 === 9) {
          throw e_0;
        } else {
          this.f6_1 = this.g6_1;
          this.i6_1 = e_0;
        }
      }
     while (true);
  };
  function Flow() {
  }
  function $collectCOROUTINE$9(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ws_1 = _this__u8e3s4;
    this.xs_1 = collector;
  }
  protoOf($collectCOROUTINE$9).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        switch (tmp) {
          case 0:
            this.g6_1 = 5;
            var tmp_0 = this;
            tmp_0.ys_1 = new SafeCollector(this.xs_1, this.l6());
            this.f6_1 = 1;
            continue $sm;
          case 1:
            this.g6_1 = 4;
            this.f6_1 = 2;
            suspendResult = this.ws_1.wr(this.ys_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.zs_1 = suspendResult;
            this.g6_1 = 5;
            this.f6_1 = 3;
            continue $sm;
          case 3:
            this.g6_1 = 5;
            this.ys_1.p6();
            return Unit_instance;
          case 4:
            this.g6_1 = 5;
            var t = this.i6_1;
            this.ys_1.p6();
            throw t;
          case 5:
            throw this.i6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g6_1 === 5) {
          throw e;
        } else {
          this.f6_1 = this.g6_1;
          this.i6_1 = e;
        }
      }
     while (true);
  };
  function AbstractFlow() {
  }
  protoOf(AbstractFlow).xr = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$9(this, collector, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  function FlowCollector() {
  }
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation) {
    this.mt_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).ot = function (it, $completion) {
    var tmp = this.pt(it, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).x6 = function (p1, $completion) {
    return this.ot((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        switch (tmp) {
          case 0:
            this.g6_1 = 2;
            this.f6_1 = 1;
            suspendResult = this.mt_1.tt(this.nt_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.i6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g6_1 === 2) {
          throw e;
        } else {
          this.f6_1 = this.g6_1;
          this.i6_1 = e;
        }
      }
     while (true);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).pt = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.mt_1, completion);
    i.nt_1 = it;
    return i;
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.ot(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.cu_1 = $collector;
    this.du_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$collect$slambda).fu = function ($this$coroutineScope, $completion) {
    var tmp = this.gu($this$coroutineScope, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  protoOf(ChannelFlow$collect$slambda).x6 = function (p1, $completion) {
    return this.fu((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$collect$slambda).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        switch (tmp) {
          case 0:
            this.g6_1 = 2;
            this.f6_1 = 1;
            suspendResult = emitAll(this.cu_1, this.du_1.hu(this.eu_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.i6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g6_1 === 2) {
          throw e;
        } else {
          this.f6_1 = this.g6_1;
          this.i6_1 = e;
        }
      }
     while (true);
  };
  protoOf(ChannelFlow$collect$slambda).gu = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.cu_1, this.du_1, completion);
    i.eu_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.fu($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.qt_1 = context;
    this.rt_1 = capacity;
    this.st_1 = onBufferOverflow;
    // Inline function 'kotlinx.coroutines.assert' call
  }
  protoOf(ChannelFlow).iu = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  protoOf(ChannelFlow).ju = function () {
    return this.rt_1 === -3 ? -2 : this.rt_1;
  };
  protoOf(ChannelFlow).hu = function (scope) {
    return produce_0(scope, this.qt_1, this.ju(), this.st_1, CoroutineStart_ATOMIC_getInstance(), VOID, this.iu());
  };
  protoOf(ChannelFlow).xr = function (collector, $completion) {
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $completion);
  };
  protoOf(ChannelFlow).ku = function () {
    return null;
  };
  protoOf(ChannelFlow).toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp0_safe_receiver = this.ku();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      props.m(tmp0_safe_receiver);
    }
    if (!(this.qt_1 === EmptyCoroutineContext_getInstance())) {
      props.m('context=' + toString(this.qt_1));
    }
    if (!(this.rt_1 === -3)) {
      props.m('capacity=' + this.rt_1);
    }
    if (!this.st_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.m('onBufferOverflow=' + this.st_1.toString());
    }
    return get_classSimpleName(this) + '[' + joinToString(props, ', ') + ']';
  };
  function ChannelFlowMerge$collectTo$slambda$slambda($inner, $collector, $semaphore, resultContinuation) {
    this.tu_1 = $inner;
    this.uu_1 = $collector;
    this.vu_1 = $semaphore;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowMerge$collectTo$slambda$slambda).fu = function ($this$launch, $completion) {
    var tmp = this.gu($this$launch, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  protoOf(ChannelFlowMerge$collectTo$slambda$slambda).x6 = function (p1, $completion) {
    return this.fu((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowMerge$collectTo$slambda$slambda).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        switch (tmp) {
          case 0:
            this.g6_1 = 5;
            this.f6_1 = 1;
            continue $sm;
          case 1:
            this.g6_1 = 4;
            this.f6_1 = 2;
            suspendResult = this.tu_1.xr(this.uu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.xu_1 = suspendResult;
            this.g6_1 = 5;
            this.f6_1 = 3;
            continue $sm;
          case 3:
            this.g6_1 = 5;
            this.vu_1.yu();
            return Unit_instance;
          case 4:
            this.g6_1 = 5;
            var t = this.i6_1;
            this.vu_1.yu();
            throw t;
          case 5:
            throw this.i6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g6_1 === 5) {
          throw e;
        } else {
          this.f6_1 = this.g6_1;
          this.i6_1 = e;
        }
      }
     while (true);
  };
  protoOf(ChannelFlowMerge$collectTo$slambda$slambda).gu = function ($this$launch, completion) {
    var i = new ChannelFlowMerge$collectTo$slambda$slambda(this.tu_1, this.uu_1, this.vu_1, completion);
    i.wu_1 = $this$launch;
    return i;
  };
  function ChannelFlowMerge$collectTo$slambda$slambda_0($inner, $collector, $semaphore, resultContinuation) {
    var i = new ChannelFlowMerge$collectTo$slambda$slambda($inner, $collector, $semaphore, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.fu($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.zu_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).ns = function (value, $completion) {
    return this.zu_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).m2 = function () {
    return this.zu_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.m2(), other.m2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.m2());
  };
  function ChannelFlowMerge$collectTo$slambda($job, $semaphore, $scope, $collector, resultContinuation) {
    this.iv_1 = $job;
    this.jv_1 = $semaphore;
    this.kv_1 = $scope;
    this.lv_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowMerge$collectTo$slambda).nv = function (inner, $completion) {
    var tmp = this.ov(inner, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  protoOf(ChannelFlowMerge$collectTo$slambda).x6 = function (p1, $completion) {
    return this.nv((!(p1 == null) ? isInterface(p1, Flow) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowMerge$collectTo$slambda).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        switch (tmp) {
          case 0:
            this.g6_1 = 2;
            var tmp0_safe_receiver = this.iv_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            this.f6_1 = 1;
            suspendResult = this.jv_1.pv(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            launch(this.kv_1, VOID, VOID, ChannelFlowMerge$collectTo$slambda$slambda_0(this.mv_1, this.lv_1, this.jv_1, null));
            return Unit_instance;
          case 2:
            throw this.i6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g6_1 === 2) {
          throw e;
        } else {
          this.f6_1 = this.g6_1;
          this.i6_1 = e;
        }
      }
     while (true);
  };
  protoOf(ChannelFlowMerge$collectTo$slambda).ov = function (inner, completion) {
    var i = new ChannelFlowMerge$collectTo$slambda(this.iv_1, this.jv_1, this.kv_1, this.lv_1, completion);
    i.mv_1 = inner;
    return i;
  };
  function ChannelFlowMerge$collectTo$slambda_0($job, $semaphore, $scope, $collector, resultContinuation) {
    var i = new ChannelFlowMerge$collectTo$slambda($job, $semaphore, $scope, $collector, resultContinuation);
    var l = function (inner, $completion) {
      return i.nv(inner, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlowMerge(flow, concurrency, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -2 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.tv_1 = flow;
    this.uv_1 = concurrency;
  }
  protoOf(ChannelFlowMerge).hu = function (scope) {
    return produce(scope, this.qt_1, this.rt_1, this.iu());
  };
  protoOf(ChannelFlowMerge).tt = function (scope, $completion) {
    var semaphore = Semaphore(this.uv_1);
    var collector = new SendingCollector(scope);
    // Inline function 'kotlin.js.getCoroutineContext' call
    var job = $completion.l6().s6(Key_instance_2);
    var tmp = ChannelFlowMerge$collectTo$slambda_0(job, semaphore, scope, collector, null);
    return this.tv_1.xr(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp), $completion);
  };
  protoOf(ChannelFlowMerge).ku = function () {
    return 'concurrency=' + this.uv_1;
  };
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.ma(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.ct_1)) {
      // Inline function 'kotlin.error' call
      var message = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + toString(_this__u8e3s4.bt_1) + ',\n') + ('\t\tbut emission happened in ' + toString(currentContext) + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        var tmp0 = $this.bd();
        var tmp1 = collectJob_0;
        $this = tmp0;
        collectJob_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.i1();
      var collectElement = $this_checkContext.bt_1.s6(key);
      var tmp;
      if (!(key === Key_instance_2)) {
        return !(element === collectElement) ? -2147483648 : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var message = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + toString_0(emissionParentJob) + ', expected child of ' + toString_0(collectJob) + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function SendingCollector(channel) {
    this.vv_1 = channel;
  }
  protoOf(SendingCollector).ns = function (value, $completion) {
    return this.vv_1.fq(value, $completion);
  };
  function ensureActive_1(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.wv_1;
  }
  function ThrowingCollector() {
  }
  function get_DEFAULT_CONCURRENCY() {
    _init_properties_Merge_kt__cbpr96();
    return DEFAULT_CONCURRENCY;
  }
  var DEFAULT_CONCURRENCY;
  function flatMapMerge(_this__u8e3s4, concurrency, transform) {
    concurrency = concurrency === VOID ? get_DEFAULT_CONCURRENCY() : concurrency;
    _init_properties_Merge_kt__cbpr96();
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var tmp$ret$2 = new flatMapMerge$$inlined$map$1(_this__u8e3s4, transform);
    return flattenMerge(tmp$ret$2, concurrency);
  }
  function flattenMerge(_this__u8e3s4, concurrency) {
    concurrency = concurrency === VOID ? get_DEFAULT_CONCURRENCY() : concurrency;
    _init_properties_Merge_kt__cbpr96();
    // Inline function 'kotlin.require' call
    if (!(concurrency > 0)) {
      var message = 'Expected positive concurrency level, but had ' + concurrency;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return concurrency === 1 ? flattenConcat(_this__u8e3s4) : new ChannelFlowMerge(_this__u8e3s4, concurrency);
  }
  function flattenConcat(_this__u8e3s4) {
    _init_properties_Merge_kt__cbpr96();
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new flattenConcat$$inlined$unsafeFlow$1(_this__u8e3s4);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.xv_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).ns = function (value, $completion) {
    return this.xv_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).m2 = function () {
    return this.xv_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.m2(), other.m2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
    return hashCode(this.m2());
  };
  function flatMapMerge$o$collect$slambda($$this$unsafeFlow, $transform, resultContinuation) {
    this.gw_1 = $$this$unsafeFlow;
    this.hw_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(flatMapMerge$o$collect$slambda).ow = function (value, $completion) {
    var tmp = this.pw(value, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  protoOf(flatMapMerge$o$collect$slambda).x6 = function (p1, $completion) {
    return this.ow((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(flatMapMerge$o$collect$slambda).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        switch (tmp) {
          case 0:
            this.g6_1 = 3;
            var tmp_0 = this;
            tmp_0.jw_1 = this.gw_1;
            var tmp_1 = this;
            tmp_1.kw_1 = this.iw_1;
            this.lw_1 = this.jw_1;
            this.mw_1 = this.kw_1;
            this.f6_1 = 1;
            suspendResult = this.hw_1(this.mw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.nw_1 = suspendResult;
            this.f6_1 = 2;
            suspendResult = this.lw_1.ns(this.nw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.i6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g6_1 === 3) {
          throw e;
        } else {
          this.f6_1 = this.g6_1;
          this.i6_1 = e;
        }
      }
     while (true);
  };
  protoOf(flatMapMerge$o$collect$slambda).pw = function (value, completion) {
    var i = new flatMapMerge$o$collect$slambda(this.gw_1, this.hw_1, completion);
    i.iw_1 = value;
    return i;
  };
  function flatMapMerge$o$collect$slambda_0($$this$unsafeFlow, $transform, resultContinuation) {
    var i = new flatMapMerge$o$collect$slambda($$this$unsafeFlow, $transform, resultContinuation);
    var l = function (value, $completion) {
      return i.ow(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$11(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.yw_1 = _this__u8e3s4;
    this.zw_1 = collector;
  }
  protoOf($collectCOROUTINE$11).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        switch (tmp) {
          case 0:
            this.g6_1 = 2;
            var tmp_0 = this;
            tmp_0.ax_1 = this.zw_1;
            this.bx_1 = this.ax_1;
            this.f6_1 = 1;
            var tmp_1 = flatMapMerge$o$collect$slambda_0(this.bx_1, this.yw_1.dx_1, null);
            suspendResult = this.yw_1.cx_1.xr(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.i6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g6_1 === 2) {
          throw e;
        } else {
          this.f6_1 = this.g6_1;
          this.i6_1 = e;
        }
      }
     while (true);
  };
  function flatMapMerge$$inlined$map$1($this, $transform) {
    this.cx_1 = $this;
    this.dx_1 = $transform;
  }
  protoOf(flatMapMerge$$inlined$map$1).ex = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$11(this, collector, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  protoOf(flatMapMerge$$inlined$map$1).xr = function (collector, $completion) {
    return this.ex(collector, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.fx_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).ns = function (value, $completion) {
    return this.fx_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).m2 = function () {
    return this.fx_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.m2(), other.m2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).hashCode = function () {
    return hashCode(this.m2());
  };
  function flattenConcat$o$collect$slambda($$this$flow, resultContinuation) {
    this.ox_1 = $$this$flow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(flattenConcat$o$collect$slambda).nv = function (value, $completion) {
    var tmp = this.ov(value, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  protoOf(flattenConcat$o$collect$slambda).x6 = function (p1, $completion) {
    return this.nv((!(p1 == null) ? isInterface(p1, Flow) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(flattenConcat$o$collect$slambda).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        switch (tmp) {
          case 0:
            this.g6_1 = 2;
            this.f6_1 = 1;
            suspendResult = emitAll_0(this.ox_1, this.px_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.i6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g6_1 === 2) {
          throw e;
        } else {
          this.f6_1 = this.g6_1;
          this.i6_1 = e;
        }
      }
     while (true);
  };
  protoOf(flattenConcat$o$collect$slambda).ov = function (value, completion) {
    var i = new flattenConcat$o$collect$slambda(this.ox_1, completion);
    i.px_1 = value;
    return i;
  };
  function flattenConcat$o$collect$slambda_0($$this$flow, resultContinuation) {
    var i = new flattenConcat$o$collect$slambda($$this$flow, resultContinuation);
    var l = function (value, $completion) {
      return i.nv(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$12(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.yx_1 = _this__u8e3s4;
    this.zx_1 = collector;
  }
  protoOf($collectCOROUTINE$12).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        switch (tmp) {
          case 0:
            this.g6_1 = 2;
            var tmp_0 = this;
            tmp_0.ay_1 = this.zx_1;
            this.by_1 = this.ay_1;
            this.f6_1 = 1;
            var tmp_1 = flattenConcat$o$collect$slambda_0(this.by_1, null);
            suspendResult = this.yx_1.cy_1.xr(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.i6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g6_1 === 2) {
          throw e;
        } else {
          this.f6_1 = this.g6_1;
          this.i6_1 = e;
        }
      }
     while (true);
  };
  function flattenConcat$$inlined$unsafeFlow$1($this_flattenConcat) {
    this.cy_1 = $this_flattenConcat;
  }
  protoOf(flattenConcat$$inlined$unsafeFlow$1).ex = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$12(this, collector, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  protoOf(flattenConcat$$inlined$unsafeFlow$1).xr = function (collector, $completion) {
    return this.ex(collector, $completion);
  };
  var properties_initialized_Merge_kt_dhn6vs;
  function _init_properties_Merge_kt__cbpr96() {
    if (!properties_initialized_Merge_kt_dhn6vs) {
      properties_initialized_Merge_kt_dhn6vs = true;
      DEFAULT_CONCURRENCY = systemProp('kotlinx.coroutines.flow.defaultConcurrency', 16, 1, 2147483647);
    }
  }
  function emitAll_0(_this__u8e3s4, flow, $completion) {
    ensureActive_1(_this__u8e3s4);
    return flow.xr(_this__u8e3s4, $completion);
  }
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.of_1 = id;
    this.pf_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).em = function () {
    return this.pf_1.kotlinx$atomicfu$value === this.gl() && !this.lm();
  };
  protoOf(Segment).fm = function () {
    var tmp0 = this.pf_1;
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        if (!(!(cur === this.gl()) || this.lm())) {
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
  protoOf(Segment).gm = function () {
    return this.pf_1.atomicfu$addAndGet(-65536) === this.gl() && !this.lm();
  };
  protoOf(Segment).dm = function () {
    if (this.pf_1.atomicfu$incrementAndGet() === this.gl()) {
      this.pm();
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
        if (cur.om())
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
    var tmp0_other_with_cast = other instanceof SegmentOrClosed ? other.vo_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.vo_1 = value;
  }
  protoOf(SegmentOrClosed).toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.vo_1);
  };
  protoOf(SegmentOrClosed).hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.vo_1);
  };
  protoOf(SegmentOrClosed).equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.vo_1, other);
  };
  function _get_nextOrClosed__w0gmuv($this) {
    return $this.hm_1.kotlinx$atomicfu$value;
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.mm();
    while (!(cur === null) && cur.em())
      cur = cur.im_1.kotlinx$atomicfu$value;
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.jm());
    while (cur.em()) {
      var tmp0_elvis_lhs = cur.jm();
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
    this.hm_1 = atomic$ref$1(null);
    this.im_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).jm = function () {
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
  protoOf(ConcurrentLinkedListNode).km = function (value) {
    return this.hm_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).lm = function () {
    return this.jm() == null;
  };
  protoOf(ConcurrentLinkedListNode).mm = function () {
    return this.im_1.kotlinx$atomicfu$value;
  };
  protoOf(ConcurrentLinkedListNode).nm = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    this.im_1.kotlinx$atomicfu$value = null;
  };
  protoOf(ConcurrentLinkedListNode).om = function () {
    return this.hm_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).pm = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.lm())
      return Unit_instance;
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      var tmp0 = next.im_1;
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
        prev.hm_1.kotlinx$atomicfu$value = next;
      if (next.em() && !next.lm())
        continue $l$loop_0;
      if (!(prev === null) && prev.em())
        continue $l$loop_0;
      return Unit_instance;
    }
  };
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (cur.of_1.x1(id) < 0 || cur.em()) {
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
      var newTail = createNewSegment(cur.of_1.y1(toLong(1)), cur);
      if (cur.km(newTail)) {
        if (cur.em()) {
          cur.pm();
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
    var _iterator__ex2g4s = get_platformExceptionHandlers().e();
    while (_iterator__ex2g4s.f()) {
      var handler = _iterator__ex2g4s.g();
      try {
        handler.zh(context, exception);
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
    var tmp = $this.af_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.we_1 = dispatcher;
    this.xe_1 = continuation;
    this.ye_1 = get_UNDEFINED();
    this.ze_1 = threadContextElements(this.l6());
    this.af_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).jf = function () {
    return !(this.af_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).dy = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.af_1;
    while (true) {
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).xh = function () {
    this.dy();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ag();
    }
  };
  protoOf(DispatchedContinuation).bf = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.af_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === null) {
        this.af_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (state instanceof CancellableContinuationImpl) {
          if (this.af_1.atomicfu$compareAndSet(state, get_REUSABLE_CLAIMED())) {
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
  protoOf(DispatchedContinuation).pg = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.af_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.af_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.require' call
          if (!this.af_1.atomicfu$compareAndSet(state, null)) {
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
  protoOf(DispatchedContinuation).lf = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.af_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.af_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.af_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).eg = function () {
    var state = this.ye_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.ye_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).bg = function () {
    return this;
  };
  protoOf(DispatchedContinuation).q6 = function (result) {
    var state = toState_0(result);
    if (safeIsDispatchNeeded(this.we_1, this.l6())) {
      this.ye_1 = state;
      this.kf_1 = 0;
      safeDispatch(this.we_1, this.l6(), this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().mi();
        if (false && eventLoop.hi()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.gi()) {
          this.ye_1 = state;
          this.kf_1 = 0;
          eventLoop.fi(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.ii(true);
          try {
            this.l6();
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.ze_1;
            this.xe_1.q6(result);
            $l$loop: while (eventLoop.ei()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.ah(e);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.ji(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.we_1.toString() + ', ' + toDebugString(this.xe_1) + ']';
  };
  protoOf(DispatchedContinuation).l6 = function () {
    return this.xe_1.l6();
  };
  function safeDispatch(_this__u8e3s4, context, runnable) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    try {
      _this__u8e3s4.wh(context, runnable);
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
      return _this__u8e3s4.vh(context);
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
      if (safeIsDispatchNeeded(_this__u8e3s4.we_1, _this__u8e3s4.l6())) {
        _this__u8e3s4.ye_1 = state;
        _this__u8e3s4.kf_1 = 1;
        safeDispatch(_this__u8e3s4.we_1, _this__u8e3s4.l6(), _this__u8e3s4);
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().mi();
          if (false && eventLoop.hi()) {
            break $l$block;
          }
          var tmp_0;
          if (eventLoop.gi()) {
            _this__u8e3s4.ye_1 = state;
            _this__u8e3s4.kf_1 = 1;
            eventLoop.fi(_this__u8e3s4);
            tmp_0 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.ii(true);
            try {
              var tmp$ret$4;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.l6().s6(Key_instance_2);
                if (!(job == null) && !job.ic()) {
                  var cause = job.hd();
                  _this__u8e3s4.fg(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.q6(tmp$ret$2);
                  tmp$ret$4 = true;
                  break $l$block_0;
                }
                tmp$ret$4 = false;
              }
              if (!tmp$ret$4) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                _this__u8e3s4.xe_1;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.ze_1;
                _this__u8e3s4.xe_1.q6(result);
              }
              $l$loop: while (eventLoop.ei()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.ah(e);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.ji(true);
            }
            tmp_0 = false;
          }
        }
      }
      tmp = Unit_instance;
    } else {
      _this__u8e3s4.q6(result);
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
    this.kf_1 = resumeMode;
  }
  protoOf(DispatchedTask).fg = function (takenState, cause) {
  };
  protoOf(DispatchedTask).og = function (state) {
    return (state == null ? true : !(state == null)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).xg = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nc_1;
  };
  protoOf(DispatchedTask).zg = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    try {
      var tmp = this.bg();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.xe_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.ze_1;
      var context = continuation.l6();
      var state = this.eg();
      var exception = this.xg(state);
      var job = exception == null && get_isCancellableMode(this.kf_1) ? context.s6(Key_instance_2) : null;
      if (!(job == null) && !job.ic()) {
        var cause = job.hd();
        this.fg(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.q6(tmp$ret$1);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.q6(tmp$ret$3);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.og(state);
          var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
          continuation.q6(tmp$ret$5);
        }
      }
    } catch ($p) {
      if ($p instanceof DispatchException) {
        var e = $p;
        handleCoroutineException(this.bg().l6(), e.yh_1);
      } else {
        if ($p instanceof Error) {
          var e_0 = $p;
          this.ah(e_0);
        } else {
          throw $p;
        }
      }
    }
  };
  protoOf(DispatchedTask).ah = function (exception) {
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", exception);
    handleCoroutineException(this.bg().l6(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.bg();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.kf_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.we_1;
      var context = delegate.l6();
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
    this.yh_1 = cause;
  }
  protoOf(DispatchException).w6 = function () {
    return this.yh_1;
  };
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().mi();
    if (eventLoop.gi()) {
      eventLoop.fi(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.ii(true);
      try {
        resume(_this__u8e3s4, _this__u8e3s4.bg(), true);
        $l$loop: while (eventLoop.ei()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.ah(e);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.ji(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.eg();
    var exception = _this__u8e3s4.xg(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.og(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      this_0.xe_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.ze_1;
      this_0.xe_1.q6(result);
    } else {
      delegate.q6(result);
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
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).m(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.m((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
        list.m(element);
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
    this.ey_1 = context;
  }
  protoOf(ContextScope).hc = function () {
    return this.ey_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.ey_1) + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.iy_1 = uCont;
  }
  protoOf(ScopeCoroutine).wd = function () {
    return true;
  };
  protoOf(ScopeCoroutine).sc = function (state) {
    resumeCancellableWith(intercepted(this.iy_1), recoverResult(state, this.iy_1));
  };
  protoOf(ScopeCoroutine).jy = function () {
  };
  protoOf(ScopeCoroutine).rc = function (state) {
    this.iy_1.q6(recoverResult(state, this.iy_1));
  };
  function Symbol(symbol) {
    this.ky_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.ky_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? 2147483647 : maxValue;
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).k2();
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
    if (!(minValue.x1(parsed) <= 0 ? parsed.x1(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var message_0 = "System property '" + propertyName + "' should be in range " + minValue.toString() + '..' + maxValue.toString() + ", but is '" + parsed.toString() + "'";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, fatalCompletion) {
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
  function startCoroutineCancellable_0(_this__u8e3s4, receiver, completion) {
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
  function dispatcherFailure(completion, e) {
    var tmp;
    if (e instanceof DispatchException) {
      tmp = e.yh_1;
    } else {
      tmp = e;
    }
    var reportException = tmp;
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(reportException));
    completion.q6(tmp$ret$0);
    throw reportException;
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.qc(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$2 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      _this__u8e3s4.jy();
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        state.nc_1;
        if (true) {
          throw recoverStackTrace(state.nc_1, _this__u8e3s4.iy_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.nc_1, _this__u8e3s4.iy_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$2 = tmp_1;
    }
    return tmp$ret$2;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    var actualCompletion = completion;
    var tmp;
    try {
      // Inline function 'kotlinx.coroutines.withCoroutineContext' call
      actualCompletion.l6();
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineResumed' call
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_1;
        if (e instanceof DispatchException) {
          tmp_1 = e.yh_1;
        } else {
          tmp_1 = e;
        }
        var reportException = tmp_1;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$5 = _Result___init__impl__xyqfz8(createFailure(reportException));
        actualCompletion.q6(tmp$ret$5);
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
      actualCompletion.q6(tmp$ret$7);
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
      var curState = $this.ko_1.kotlinx$atomicfu$value;
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.py($this, internalResult);
        if ($this.ko_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.mo_1 = internalResult;
          if (tryResume_0(cont, onCancellation))
            return 0;
          $this.mo_1 = get_NO_RESULT();
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
              if ($this.ko_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, KtList)) {
                if ($this.ko_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
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
    var tmp0_elvis_lhs = $this.lo_1;
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
      var _iterator__ex2g4s = clauses.e();
      while (_iterator__ex2g4s.f()) {
        var element = _iterator__ex2g4s.g();
        if (element.my_1 === clauseObject) {
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
  protoOf(ClauseData).py = function (select, internalResult) {
    var tmp0_safe_receiver = this.oy_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver(select, this.ny_1, internalResult);
  };
  function SelectImplementation() {
  }
  protoOf(SelectImplementation).no = function (clauseObject, result) {
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
    var tmp0_elvis_lhs = _this__u8e3s4.se(Unit_instance, null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.te(token);
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
  function Semaphore(permits, acquiredPermits) {
    acquiredPermits = acquiredPermits === VOID ? 0 : acquiredPermits;
    _init_properties_Semaphore_kt__t514r6();
    return new SemaphoreImpl(permits, acquiredPermits);
  }
  function SemaphoreImpl(permits, acquiredPermits) {
    SemaphoreAndMutexImpl.call(this, permits, acquiredPermits);
  }
  function acquireSlowPath($this, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      $l$block: {
        if (addAcquireToQueue($this, cancellable)) {
          break $l$block;
        }
        $this.acquireCont(cancellable);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.ng();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.mg();
  }
  function decPermits($this) {
    $l$loop: while (true) {
      var p = $this.vy_1.atomicfu$getAndDecrement();
      if (p > $this.qy_1)
        continue $l$loop;
      return p;
    }
  }
  function coerceAvailablePermitsAtMaximum($this) {
    $l$loop_0: while (true) {
      var cur = $this.vy_1.kotlinx$atomicfu$value;
      if (cur <= $this.qy_1)
        break $l$loop_0;
      if ($this.vy_1.atomicfu$compareAndSet(cur, $this.qy_1))
        break $l$loop_0;
    }
  }
  function addAcquireToQueue($this, waiter) {
    var curTail = $this.ty_1.kotlinx$atomicfu$value;
    var enqIdx = $this.uy_1.atomicfu$getAndIncrement$long();
    var createNewSegment = createSegment$ref_0();
    var tmp2 = $this.ty_1;
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var tmp3 = enqIdx.b2(toLong(other));
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
              if (cur.of_1.x1(tmp1.of_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp1.fm()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp2.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.gm()) {
                  cur.pm();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp1.gm()) {
                tmp1.pm();
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
    var i = enqIdx.c2(toLong(other_0)).k2();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    if (segment.bz_1.atomicfu$get(i).atomicfu$compareAndSet(null, waiter)) {
      waiter.sg(segment, i);
      return true;
    }
    var tmp14 = get_PERMIT();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    var value = get_TAKEN();
    if (segment.bz_1.atomicfu$get(i).atomicfu$compareAndSet(tmp14, value)) {
      if (isInterface(waiter, CancellableContinuation)) {
        if (!isInterface(waiter, CancellableContinuation))
          THROW_CCE();
        waiter.ue(Unit_instance, $this.wy_1);
      } else {
        if (isInterface(waiter, SelectInstance)) {
          waiter.ly(Unit_instance);
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
    var curHead = $this.ry_1.kotlinx$atomicfu$value;
    var deqIdx = $this.sy_1.atomicfu$getAndIncrement$long();
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var id = deqIdx.b2(toLong(other));
    var createNewSegment = createSegment$ref_1();
    var tmp2 = $this.ry_1;
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
              if (cur.of_1.x1(tmp1.of_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp1.fm()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp2.atomicfu$compareAndSet(cur, tmp1)) {
                if (cur.gm()) {
                  cur.pm();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp1.gm()) {
                tmp1.pm();
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
    segment.nm();
    if (segment.of_1.x1(id) > 0)
      return false;
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var i = deqIdx.c2(toLong(other_0)).k2();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.getAndSet' call
    var value = get_PERMIT();
    var cellState = segment.bz_1.atomicfu$get(i).atomicfu$getAndSet(value);
    if (cellState === null) {
      // Inline function 'kotlin.repeat' call
      var times = get_MAX_SPIN_CYCLES();
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.get' call
          if (segment.bz_1.atomicfu$get(i).kotlinx$atomicfu$value === get_TAKEN())
            return true;
        }
         while (inductionVariable < times);
      var tmp15 = get_PERMIT();
      // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
      var value_0 = get_BROKEN();
      return !segment.bz_1.atomicfu$get(i).atomicfu$compareAndSet(tmp15, value_0);
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
      var token = _this__u8e3s4.se(Unit_instance, null, $this.wy_1);
      var tmp_0;
      if (!(token == null)) {
        _this__u8e3s4.te(token);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (isInterface(_this__u8e3s4, SelectInstance)) {
        tmp = _this__u8e3s4.ho($this, Unit_instance);
      } else {
        var message = 'unexpected: ' + toString(_this__u8e3s4);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function SemaphoreAndMutexImpl$onCancellationRelease$lambda(this$0) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      this$0.yu();
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
    this.qy_1 = permits;
    this.sy_1 = atomic$long$1(new Long(0, 0));
    this.uy_1 = atomic$long$1(new Long(0, 0));
    // Inline function 'kotlin.require' call
    if (!(this.qy_1 > 0)) {
      var message = 'Semaphore should have at least 1 permit, but had ' + this.qy_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(0 <= acquiredPermits ? acquiredPermits <= this.qy_1 : false)) {
      var message_0 = 'The number of acquired permits should be in 0..' + this.qy_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var s = new SemaphoreSegment(new Long(0, 0), null, 2);
    this.ry_1 = atomic$ref$1(s);
    this.ty_1 = atomic$ref$1(s);
    this.vy_1 = atomic$int$1(this.qy_1 - acquiredPermits | 0);
    var tmp = this;
    tmp.wy_1 = SemaphoreAndMutexImpl$onCancellationRelease$lambda(this);
  }
  protoOf(SemaphoreAndMutexImpl).pv = function ($completion) {
    var p = decPermits(this);
    if (p > 0)
      return Unit_instance;
    return acquireSlowPath(this, $completion);
  };
  protoOf(SemaphoreAndMutexImpl).acquireCont = function (waiter) {
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreAndMutexImpl.acquire' call
      while (true) {
        var p = decPermits(this);
        if (p > 0) {
          waiter.ue(Unit_instance, this.wy_1);
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
  protoOf(SemaphoreAndMutexImpl).yu = function () {
    while (true) {
      var p = this.vy_1.atomicfu$getAndIncrement();
      if (p >= this.qy_1) {
        coerceAvailablePermitsAtMaximum(this);
        // Inline function 'kotlin.error' call
        var message = 'The number of released permits cannot be greater than ' + this.qy_1;
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
    this.bz_1 = atomicfu$AtomicRefArray$ofNulls(get_SEGMENT_SIZE_0());
  }
  protoOf(SemaphoreSegment).gl = function () {
    return get_SEGMENT_SIZE_0();
  };
  protoOf(SemaphoreSegment).qf = function (index, cause, context) {
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.set' call
    var value = get_CANCELLED();
    this.bz_1.atomicfu$get(index).kotlinx$atomicfu$value = value;
    this.dm();
  };
  protoOf(SemaphoreSegment).toString = function () {
    return 'SemaphoreSegment[id=' + this.of_1.toString() + ', hashCode=' + hashCode(this) + ']';
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
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).r7();
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
  protoOf(NodeDispatcher).ez = function () {
    process.nextTick(this.lz_1.jz_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.pz();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.iz_1 = dispatcher;
    var tmp = this;
    tmp.jz_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).qz = function () {
    this.iz_1.ez();
  };
  protoOf(ScheduledMessageQueue).rz = function () {
    setTimeout(this.jz_1, 0);
  };
  protoOf(ScheduledMessageQueue).sz = function (timeout) {
    setTimeout(this.jz_1, timeout);
  };
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.yz_1 && event.data == this$0.zz_1) {
        event.stopPropagation();
        this$0.pz();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.pz();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.yz_1 = window_0;
    this.zz_1 = 'dispatchCoroutine';
    this.yz_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).qz = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).rz = function () {
    this.yz_1.postMessage(this.zz_1, '*');
  };
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
  function asPromise$lambda$lambda($this_asPromise, $reject, $resolve) {
    return function (it) {
      var e = $this_asPromise.ae();
      var tmp;
      if (!(e == null)) {
        tmp = $reject(e);
      } else {
        tmp = $resolve($this_asPromise.ne());
      }
      return Unit_instance;
    };
  }
  function asPromise$lambda($this_asPromise) {
    return function (resolve, reject) {
      $this_asPromise.kd(asPromise$lambda$lambda($this_asPromise, reject, resolve));
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
  protoOf(UnconfinedEventLoop).wh = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).ez = function () {
    this.lz_1.sz(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.lz_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).wh = function (context, block) {
    this.lz_1.tz(block);
  };
  function MessageQueue() {
    this.mz_1 = ArrayDeque_init_$Create$();
    this.nz_1 = 16;
    this.oz_1 = false;
  }
  protoOf(MessageQueue).tz = function (element) {
    this.uz(element);
    if (!this.oz_1) {
      this.oz_1 = true;
      this.qz();
    }
  };
  protoOf(MessageQueue).pz = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.nz_1;
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
          element.zg();
        }
         while (inductionVariable < times);
    }finally {
      if (this.p()) {
        this.oz_1 = false;
      } else {
        this.rz();
      }
    }
  };
  protoOf(MessageQueue).uz = function (element) {
    return this.mz_1.m(element);
  };
  protoOf(MessageQueue).m = function (element) {
    return this.uz((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).d3 = function (index) {
    return this.mz_1.d3(index);
  };
  protoOf(MessageQueue).n = function (index) {
    return this.mz_1.n(index);
  };
  protoOf(MessageQueue).p = function () {
    return this.mz_1.p();
  };
  protoOf(MessageQueue).e = function () {
    return this.mz_1.e();
  };
  protoOf(MessageQueue).o = function (index) {
    return this.mz_1.o(index);
  };
  protoOf(MessageQueue).h = function () {
    return this.mz_1.g9_1;
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.h10_1 = window_0;
    this.i10_1 = new WindowMessageQueue(this.h10_1);
  }
  protoOf(WindowDispatcher).wh = function (context, block) {
    return this.i10_1.tz(block);
  };
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.hc().na(context);
    return !(combined === Dispatchers_getInstance().ok_1) && combined.s6(Key_instance) == null ? combined.na(Dispatchers_getInstance().ok_1) : combined;
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.ok_1 = createDefaultDispatcher();
    this.pk_1 = Unconfined_getInstance();
    this.qk_1 = new JsMainDispatcher(this.ok_1, false);
    this.rk_1 = null;
  }
  protoOf(Dispatchers).sk = function () {
    var tmp0_elvis_lhs = this.rk_1;
    return tmp0_elvis_lhs == null ? this.qk_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.k10_1 = delegate;
    this.l10_1 = invokeImmediately;
    this.m10_1 = this.l10_1 ? this : new JsMainDispatcher(this.k10_1, true);
  }
  protoOf(JsMainDispatcher).mk = function () {
    return this.m10_1;
  };
  protoOf(JsMainDispatcher).vh = function (context) {
    return !this.l10_1;
  };
  protoOf(JsMainDispatcher).wh = function (context, block) {
    return this.k10_1.wh(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.nk();
    return tmp0_elvis_lhs == null ? this.k10_1.toString() : tmp0_elvis_lhs;
  };
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    captureStack(this, JobCancellationException);
    this.n10_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.n10_1);
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
        tmp_1 = equals(other.n10_1, this.n10_1);
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
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.n10_1) | 0, 31);
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
  function SafeCollector$collectContextSize$lambda(count, _unused_var__etf5q3) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.at_1 = collector;
    this.bt_1 = collectContext;
    var tmp = this;
    tmp.ct_1 = this.bt_1.ma(0, SafeCollector$collectContextSize$lambda);
    this.dt_1 = null;
  }
  protoOf(SafeCollector).ns = function (value, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.l6();
    ensureActive(currentContext);
    if (!(this.dt_1 === currentContext)) {
      checkContext(this, currentContext);
      this.dt_1 = currentContext;
    }
    return this.at_1.ns(value, $completion);
  };
  protoOf(SafeCollector).p6 = function () {
  };
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
    this.oh_1 = this;
    this.ph_1 = this;
    this.qh_1 = false;
  }
  protoOf(LockFreeLinkedListNode).rh = function (node, permissionsBitmask) {
    var prev = this.ph_1;
    var tmp;
    if (prev instanceof ListClosed) {
      tmp = ((prev.r10_1 & permissionsBitmask) === 0 && prev.rh(node, permissionsBitmask));
    } else {
      node.oh_1 = this;
      node.ph_1 = prev;
      prev.oh_1 = node;
      this.ph_1 = node;
      tmp = true;
    }
    return tmp;
  };
  protoOf(LockFreeLinkedListNode).vi = function (forbiddenElementsBit) {
    this.rh(new ListClosed(forbiddenElementsBit), forbiddenElementsBit);
  };
  protoOf(LockFreeLinkedListNode).sh = function () {
    if (this.qh_1)
      return false;
    var prev = this.ph_1;
    var next = this.oh_1;
    prev.oh_1 = next;
    next.ph_1 = prev;
    this.qh_1 = true;
    return true;
  };
  protoOf(LockFreeLinkedListNode).th = function (node) {
    if (!(this.oh_1 === this))
      return false;
    this.rh(node, -2147483648);
    return true;
  };
  function ListClosed(forbiddenElementsBitmask) {
    LockFreeLinkedListNode.call(this);
    this.r10_1 = forbiddenElementsBitmask;
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
    this.ni_1 = null;
  }
  protoOf(CommonThreadLocal).oi = function () {
    var tmp = this.ni_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).pi = function (value) {
    this.ni_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).na = plus;
  protoOf(JobSupport).s6 = get_0;
  protoOf(JobSupport).ma = fold;
  protoOf(JobSupport).la = minusKey_0;
  protoOf(CoroutineDispatcher).s6 = get;
  protoOf(CoroutineDispatcher).la = minusKey;
  protoOf(BufferedChannel).mq = close$default;
  protoOf(ChannelCoroutine).mq = close$default;
  defineProp(protoOf(DispatchException), 'cause', function () {
    return this.w6();
  });
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  Key_instance_2 = new Key_1();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_3 = new Key_2();
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Dispatchers_getInstance;
  _.$_$.b = FlowCollector;
  _.$_$.c = Flow;
  _.$_$.d = flatMapMerge;
  _.$_$.e = flow;
  _.$_$.f = CoroutineScope_0;
  _.$_$.g = CoroutineScope;
  _.$_$.h = SupervisorJob;
  _.$_$.i = promise;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
