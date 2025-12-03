(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-io-kotlinx-io-bytestring.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-io-kotlinx-io-bytestring.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-io-kotlinx-io-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-io-kotlinx-io-core'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-io-kotlinx-io-core'. Its dependency 'kotlinx-io-kotlinx-io-bytestring' was not found. Please, check whether 'kotlinx-io-kotlinx-io-bytestring' is loaded prior to 'kotlinx-io-kotlinx-io-core'.");
    }
    globalThis['kotlinx-io-kotlinx-io-core'] = factory(typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined' ? {} : globalThis['kotlinx-io-kotlinx-io-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-io-kotlinx-io-bytestring']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var Long = kotlin_kotlin.$_$.ch;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a3;
  var charArrayOf = kotlin_kotlin.$_$.fb;
  var protoOf = kotlin_kotlin.$_$.wc;
  var toString = kotlin_kotlin.$_$.ad;
  var Unit_instance = kotlin_kotlin.$_$.w5;
  var toShort = kotlin_kotlin.$_$.zc;
  var ensureNotNull = kotlin_kotlin.$_$.ai;
  var toLong = kotlin_kotlin.$_$.yc;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.l1;
  var initMetadataForClass = kotlin_kotlin.$_$.sb;
  var VOID = kotlin_kotlin.$_$.j;
  var UnsafeByteStringOperations_instance = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.b;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var AutoCloseable = kotlin_kotlin.$_$.qg;
  var objectCreate = kotlin_kotlin.$_$.vc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.tb;
  var arrayCopy = kotlin_kotlin.$_$.n6;
  var toByte = kotlin_kotlin.$_$.xc;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.y1;
  var initMetadataForObject = kotlin_kotlin.$_$.yb;
  var initMetadataForInterface = kotlin_kotlin.$_$.wb;
  var charSequenceGet = kotlin_kotlin.$_$.hb;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.g3;
  var charArray = kotlin_kotlin.$_$.gb;
  var numberToChar = kotlin_kotlin.$_$.rc;
  var concatToString = kotlin_kotlin.$_$.wd;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.q1;
  var captureStack = kotlin_kotlin.$_$.eb;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.s1;
  var Exception_init_$Init$_1 = kotlin_kotlin.$_$.u1;
  var Exception = kotlin_kotlin.$_$.zg;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(Source, 'Source', VOID, VOID, [AutoCloseable]);
  function write$default(source, startIndex, endIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? source.length : endIndex;
    var tmp;
    if ($super === VOID) {
      this.k1i(source, startIndex, endIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.k1i.call(this, source, startIndex, endIndex);
    }
    return tmp;
  }
  initMetadataForInterface(Sink, 'Sink', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(Buffer, 'Buffer', Buffer, VOID, [Source, Sink]);
  initMetadataForClass(PeekSource, 'PeekSource', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(RealSource, 'RealSource', VOID, VOID, [Source]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Segment, 'Segment');
  initMetadataForClass(SegmentCopyTracker, 'SegmentCopyTracker');
  initMetadataForObject(AlwaysSharedCopyTracker, 'AlwaysSharedCopyTracker', VOID, SegmentCopyTracker);
  initMetadataForObject(UnsafeBufferOperations, 'UnsafeBufferOperations');
  initMetadataForClass(SegmentReadContextImpl$1);
  initMetadataForClass(SegmentWriteContextImpl$1);
  initMetadataForClass(BufferIterationContextImpl$1);
  initMetadataForClass(IOException, 'IOException', IOException_init_$Create$, Exception);
  initMetadataForClass(EOFException, 'EOFException', EOFException_init_$Create$, IOException);
  initMetadataForObject(SegmentPool, 'SegmentPool');
  //endregion
  function get_HEX_DIGIT_CHARS() {
    _init_properties__Util_kt__g8tcl9();
    return HEX_DIGIT_CHARS;
  }
  var HEX_DIGIT_CHARS;
  function checkBounds(size, startIndex, endIndex) {
    _init_properties__Util_kt__g8tcl9();
    if (startIndex.e1(new Long(0, 0)) < 0 || endIndex.e1(size) > 0) {
      throw IndexOutOfBoundsException_init_$Create$('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
    }
    if (startIndex.e1(endIndex) > 0) {
      throw IllegalArgumentException_init_$Create$('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
    }
  }
  function checkOffsetAndCount(size, offset, byteCount) {
    _init_properties__Util_kt__g8tcl9();
    if (offset.e1(new Long(0, 0)) < 0 || offset.e1(size) > 0 || size.a3(offset).e1(byteCount) < 0 || byteCount.e1(new Long(0, 0)) < 0) {
      throw IllegalArgumentException_init_$Create$('offset (' + offset.toString() + ') and byteCount (' + byteCount.toString() + ') are not within the range [0..size(' + size.toString() + '))');
    }
  }
  var properties_initialized__Util_kt_67kc5b;
  function _init_properties__Util_kt__g8tcl9() {
    if (!properties_initialized__Util_kt_67kc5b) {
      properties_initialized__Util_kt_67kc5b = true;
      // Inline function 'kotlin.charArrayOf' call
      HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
    }
  }
  function throwEof($this, byteCount) {
    throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + $this.s().toString() + ', required: ' + byteCount.toString() + ')');
  }
  function Buffer() {
    this.x1g_1 = null;
    this.y1g_1 = null;
    this.z1g_1 = new Long(0, 0);
  }
  protoOf(Buffer).s = function () {
    return this.z1g_1;
  };
  protoOf(Buffer).a1h = function () {
    return this;
  };
  protoOf(Buffer).b1h = function () {
    return this.s().equals(new Long(0, 0));
  };
  protoOf(Buffer).c1h = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.s().e1(byteCount) < 0) {
      throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + this.s().toString() + ', required: ' + byteCount.toString() + ')');
    }
  };
  protoOf(Buffer).d1h = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount: ' + byteCount.toString() + ' < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.s().e1(byteCount) >= 0;
  };
  protoOf(Buffer).e1h = function () {
    var tmp0_elvis_lhs = this.x1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, new Long(1, 0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.s();
    if (segmentSize === 0) {
      this.m1h();
      return this.e1h();
    }
    var v = segment.n1h();
    this.z1g_1 = this.z1g_1.a3(new Long(1, 0));
    if (segmentSize === 1) {
      this.m1h();
    }
    return v;
  };
  protoOf(Buffer).o1h = function () {
    var tmp0_elvis_lhs = this.x1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, new Long(2, 0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.s();
    if (segmentSize < 2) {
      this.c1h(new Long(2, 0));
      if (segmentSize === 0) {
        this.m1h();
        return this.o1h();
      }
      // Inline function 'kotlinx.io.and' call
      var tmp_0 = (this.e1h() & 255) << 8;
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$1 = this.e1h() & 255;
      return toShort(tmp_0 | tmp$ret$1);
    }
    var v = segment.p1h();
    this.z1g_1 = this.z1g_1.a3(new Long(2, 0));
    if (segmentSize === 2) {
      this.m1h();
    }
    return v;
  };
  protoOf(Buffer).q1h = function () {
    return Unit_instance;
  };
  protoOf(Buffer).r1h = function (out, startIndex, endIndex) {
    checkBounds(this.s(), startIndex, endIndex);
    if (startIndex.equals(endIndex))
      return Unit_instance;
    var currentOffset = startIndex;
    var remainingByteCount = endIndex.a3(startIndex);
    out.z1g_1 = out.z1g_1.z2(remainingByteCount);
    var s = this.x1g_1;
    while (currentOffset.e1(toLong(ensureNotNull(s).h1h_1 - s.g1h_1 | 0)) >= 0) {
      currentOffset = currentOffset.a3(toLong(s.h1h_1 - s.g1h_1 | 0));
      s = s.k1h_1;
    }
    while (remainingByteCount.e1(new Long(0, 0)) > 0) {
      var copy = ensureNotNull(s).s1h();
      copy.g1h_1 = copy.g1h_1 + currentOffset.j1() | 0;
      var tmp = copy;
      var tmp0 = copy.g1h_1 + remainingByteCount.j1() | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = copy.h1h_1;
      tmp.h1h_1 = Math.min(tmp0, b);
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (out.x1g_1 == null) {
        out.x1g_1 = copy;
        out.y1g_1 = copy;
      } else if (false) {
        out.y1g_1 = ensureNotNull(out.y1g_1).t1h(copy).u1h();
        if (ensureNotNull(out.y1g_1).l1h_1 == null) {
          out.x1g_1 = out.y1g_1;
        }
      } else {
        out.y1g_1 = ensureNotNull(out.y1g_1).t1h(copy);
      }
      remainingByteCount = remainingByteCount.a3(toLong(copy.h1h_1 - copy.g1h_1 | 0));
      currentOffset = new Long(0, 0);
      s = s.k1h_1;
    }
  };
  protoOf(Buffer).v1h = function () {
    var result = this.s();
    if (result.equals(new Long(0, 0)))
      return new Long(0, 0);
    var tail = ensureNotNull(this.y1g_1);
    if (tail.h1h_1 < 8192 && tail.j1h_1) {
      result = result.a3(toLong(tail.h1h_1 - tail.g1h_1 | 0));
    }
    return result;
  };
  protoOf(Buffer).w1h = function (position) {
    if (position.e1(new Long(0, 0)) < 0 || position.e1(this.s()) >= 0) {
      throw IndexOutOfBoundsException_init_$Create$('position (' + position.toString() + ') is not within the range [0..size(' + this.s().toString() + '))');
    }
    if (position.equals(new Long(0, 0))) {
      return ensureNotNull(this.x1g_1).x1h(0);
    }
    // Inline function 'kotlinx.io.seek' call
    if (this.x1g_1 == null) {
      var offset = new Long(-1, -1);
      return ensureNotNull(null).x1h(position.a3(offset).j1());
    }
    if (this.s().a3(position).e1(position) < 0) {
      var s = this.y1g_1;
      var offset_0 = this.s();
      $l$loop: while (!(s == null) && offset_0.e1(position) > 0) {
        offset_0 = offset_0.a3(toLong(s.h1h_1 - s.g1h_1 | 0));
        if (offset_0.e1(position) <= 0)
          break $l$loop;
        s = s.l1h_1;
      }
      var tmp4 = s;
      var offset_1 = offset_0;
      return ensureNotNull(tmp4).x1h(position.a3(offset_1).j1());
    } else {
      var s_0 = this.x1g_1;
      var offset_2 = new Long(0, 0);
      $l$loop_0: while (!(s_0 == null)) {
        var tmp0 = offset_2;
        // Inline function 'kotlin.Long.plus' call
        var other = s_0.h1h_1 - s_0.g1h_1 | 0;
        var nextOffset = tmp0.z2(toLong(other));
        if (nextOffset.e1(position) > 0)
          break $l$loop_0;
        s_0 = s_0.k1h_1;
        offset_2 = nextOffset;
      }
      var tmp6 = s_0;
      var offset_3 = offset_2;
      return ensureNotNull(tmp6).x1h(position.a3(offset_3).j1());
    }
  };
  protoOf(Buffer).e2 = function () {
    return this.y1h(this.s());
  };
  protoOf(Buffer).y1h = function (byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount.e1(new Long(0, 0)) > 0) {
      var tmp0_elvis_lhs = this.x1g_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException_init_$Create$_0('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      var tmp1 = remainingByteCount;
      // Inline function 'kotlinx.io.minOf' call
      var b = head.h1h_1 - head.g1h_1 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = toLong(b);
      var toSkip = (tmp1.e1(b_0) <= 0 ? tmp1 : b_0).j1();
      this.z1g_1 = this.z1g_1.a3(toLong(toSkip));
      remainingByteCount = remainingByteCount.a3(toLong(toSkip));
      head.g1h_1 = head.g1h_1 + toSkip | 0;
      if (head.g1h_1 === head.h1h_1) {
        this.m1h();
      }
    }
  };
  protoOf(Buffer).z1h = function (sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    var tmp0_elvis_lhs = this.x1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return -1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    var tmp3 = endIndex - startIndex | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = s.s();
    var toCopy = Math.min(tmp3, b);
    s.a1i(sink, startIndex, startIndex + toCopy | 0);
    this.z1g_1 = this.z1g_1.a3(toLong(toCopy));
    if (isEmpty(s)) {
      this.m1h();
    }
    return toCopy;
  };
  protoOf(Buffer).b1i = function (sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.s().equals(new Long(0, 0)))
      return new Long(-1, -1);
    var bytesWritten = byteCount.e1(this.s()) > 0 ? this.s() : byteCount;
    sink.c1i(this, bytesWritten);
    return bytesWritten;
  };
  protoOf(Buffer).d1i = function (sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.s().e1(byteCount) < 0) {
      sink.c1i(this, this.s());
      throw EOFException_init_$Create$_0('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.s().toString() + ' bytes were written.');
    }
    sink.c1i(this, byteCount);
  };
  protoOf(Buffer).e1i = function (sink) {
    var byteCount = this.s();
    if (byteCount.e1(new Long(0, 0)) > 0) {
      sink.c1i(this, byteCount);
    }
    return byteCount;
  };
  protoOf(Buffer).f1i = function () {
    return buffered(new PeekSource(this));
  };
  protoOf(Buffer).g1i = function (minimumCapacity) {
    // Inline function 'kotlin.require' call
    if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
      var message = 'unexpected capacity (' + minimumCapacity + '), should be in range [1, 8192]';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.y1g_1 == null) {
      var result = SegmentPool_instance.j1i();
      this.x1g_1 = result;
      this.y1g_1 = result;
      return result;
    }
    var t = ensureNotNull(this.y1g_1);
    if ((t.h1h_1 + minimumCapacity | 0) > 8192 || !t.j1h_1) {
      var newTail = t.t1h(SegmentPool_instance.j1i());
      this.y1g_1 = newTail;
      return newTail;
    }
    return t;
  };
  protoOf(Buffer).k1i = function (source, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = source.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    var currentOffset = startIndex;
    while (currentOffset < endIndex) {
      var tail = this.g1i(1);
      var tmp3 = endIndex - currentOffset | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = tail.l1i();
      var toCopy = Math.min(tmp3, b);
      tail.m1i(source, currentOffset, currentOffset + toCopy | 0);
      currentOffset = currentOffset + toCopy | 0;
    }
    var tmp = this;
    var tmp5 = this.z1g_1;
    // Inline function 'kotlin.Long.plus' call
    var other = endIndex - startIndex | 0;
    tmp.z1g_1 = tmp5.z2(toLong(other));
  };
  protoOf(Buffer).o1i = function (source, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount.e1(new Long(0, 0)) > 0) {
      var read = source.b1i(this, remainingByteCount);
      if (read.equals(new Long(-1, -1))) {
        throw EOFException_init_$Create$_0('Source exhausted before reading ' + byteCount.toString() + ' bytes. ' + ('Only ' + byteCount.a3(remainingByteCount).toString() + ' were read.'));
      }
      remainingByteCount = remainingByteCount.a3(read);
    }
  };
  protoOf(Buffer).c1i = function (source, byteCount) {
    // Inline function 'kotlin.require' call
    if (!!(source === this)) {
      var message = 'source == this';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    checkOffsetAndCount(source.z1g_1, new Long(0, 0), byteCount);
    var remainingByteCount = byteCount;
    while (remainingByteCount.e1(new Long(0, 0)) > 0) {
      if (remainingByteCount.e1(toLong(ensureNotNull(source.x1g_1).s())) < 0) {
        var tail = this.y1g_1;
        var tmp;
        if (!(tail == null) && tail.j1h_1) {
          var tmp1 = remainingByteCount;
          // Inline function 'kotlin.Long.plus' call
          var other = tail.h1h_1;
          var tmp3 = tmp1.z2(toLong(other));
          // Inline function 'kotlin.Long.minus' call
          var other_0 = tail.p1i() ? 0 : tail.g1h_1;
          tmp = tmp3.a3(toLong(other_0)).e1(new Long(8192, 0)) <= 0;
        } else {
          tmp = false;
        }
        if (tmp) {
          ensureNotNull(source.x1g_1).r1i(tail, remainingByteCount.j1());
          source.z1g_1 = source.z1g_1.a3(remainingByteCount);
          this.z1g_1 = this.z1g_1.z2(remainingByteCount);
          return Unit_instance;
        } else {
          source.x1g_1 = ensureNotNull(source.x1g_1).q1i(remainingByteCount.j1());
        }
      }
      var segmentToMove = ensureNotNull(source.x1g_1);
      var movedByteCount = toLong(segmentToMove.s());
      source.x1g_1 = segmentToMove.s1i();
      if (source.x1g_1 == null) {
        source.y1g_1 = null;
      }
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (this.x1g_1 == null) {
        this.x1g_1 = segmentToMove;
        this.y1g_1 = segmentToMove;
      } else if (true) {
        this.y1g_1 = ensureNotNull(this.y1g_1).t1h(segmentToMove).u1h();
        if (ensureNotNull(this.y1g_1).l1h_1 == null) {
          this.x1g_1 = this.y1g_1;
        }
      } else {
        this.y1g_1 = ensureNotNull(this.y1g_1).t1h(segmentToMove);
      }
      source.z1g_1 = source.z1g_1.a3(movedByteCount);
      this.z1g_1 = this.z1g_1.z2(movedByteCount);
      remainingByteCount = remainingByteCount.a3(movedByteCount);
    }
  };
  protoOf(Buffer).t1i = function (source) {
    var totalBytesRead = new Long(0, 0);
    $l$loop: while (true) {
      var readCount = source.b1i(this, new Long(8192, 0));
      if (readCount.equals(new Long(-1, -1)))
        break $l$loop;
      totalBytesRead = totalBytesRead.z2(readCount);
    }
    return totalBytesRead;
  };
  protoOf(Buffer).u1i = function (byte) {
    this.g1i(1).v1i(byte);
    this.z1g_1 = this.z1g_1.z2(new Long(1, 0));
  };
  protoOf(Buffer).w1i = function (short) {
    this.g1i(2).x1i(short);
    this.z1g_1 = this.z1g_1.z2(new Long(2, 0));
  };
  protoOf(Buffer).q4 = function () {
    return Unit_instance;
  };
  protoOf(Buffer).toString = function () {
    if (this.s().equals(new Long(0, 0)))
      return 'Buffer(size=0)';
    var maxPrintableBytes = 64;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.s();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = toLong(maxPrintableBytes);
    var len = (a.e1(b) <= 0 ? a : b).j1();
    var builder = StringBuilder_init_$Create$(imul(len, 2) + (this.s().e1(toLong(maxPrintableBytes)) > 0 ? 1 : 0) | 0);
    var bytesWritten = 0;
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = this.x1g_1;
    while (!(curr == null)) {
      var tmp4 = get_SegmentReadContextImpl();
      var segment = curr;
      var idx = 0;
      while (bytesWritten < len && idx < segment.s()) {
        var _unary__edvuaz = idx;
        idx = _unary__edvuaz + 1 | 0;
        var b_0 = tmp4.y1i(segment, _unary__edvuaz);
        bytesWritten = bytesWritten + 1 | 0;
        var tmp = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.shr' call
        var tmp$ret$2 = b_0 >> 4;
        var tmp_0 = builder.y8(tmp[tmp$ret$2 & 15]);
        var tmp_1 = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.and' call
        var tmp$ret$3 = b_0 & 15;
        tmp_0.y8(tmp_1[tmp$ret$3]);
      }
      curr = curr.k1h_1;
    }
    if (this.s().e1(toLong(maxPrintableBytes)) > 0) {
      builder.y8(_Char___init__impl__6a9atx(8230));
    }
    return 'Buffer(size=' + this.s().toString() + ' hex=' + builder.toString() + ')';
  };
  protoOf(Buffer).m1h = function () {
    var oldHead = ensureNotNull(this.x1g_1);
    var nextHead = oldHead.k1h_1;
    this.x1g_1 = nextHead;
    if (nextHead == null) {
      this.y1g_1 = null;
    } else {
      nextHead.l1h_1 = null;
    }
    oldHead.k1h_1 = null;
    SegmentPool_instance.z1i(oldHead);
  };
  protoOf(Buffer).a1j = function () {
    var oldTail = ensureNotNull(this.y1g_1);
    var newTail = oldTail.l1h_1;
    this.y1g_1 = newTail;
    if (newTail == null) {
      this.x1g_1 = null;
    } else {
      newTail.k1h_1 = null;
    }
    oldTail.l1h_1 = null;
    SegmentPool_instance.z1i(oldTail);
  };
  function readByteString(_this__u8e3s4, byteCount) {
    return UnsafeByteStringOperations_instance.w1g(readByteArray_0(_this__u8e3s4, byteCount));
  }
  function buffered(_this__u8e3s4) {
    return new RealSource(_this__u8e3s4);
  }
  function PeekSource(upstream) {
    this.b1j_1 = upstream;
    this.c1j_1 = this.b1j_1.a1h();
    this.d1j_1 = this.c1j_1.x1g_1;
    var tmp = this;
    var tmp0_safe_receiver = this.c1j_1.x1g_1;
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g1h_1;
    tmp.e1j_1 = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
    this.f1j_1 = false;
    this.g1j_1 = new Long(0, 0);
  }
  protoOf(PeekSource).b1i = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!!this.f1j_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
      var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    if (!(this.d1j_1 == null || (this.d1j_1 === this.c1j_1.x1g_1 && this.e1j_1 === ensureNotNull(this.c1j_1.x1g_1).g1h_1))) {
      var message_1 = 'Peek source is invalid because upstream source was used';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    if (byteCount.equals(new Long(0, 0)))
      return new Long(0, 0);
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$7 = this.g1j_1.z2(toLong(1));
    if (!this.b1j_1.d1h(tmp$ret$7))
      return new Long(-1, -1);
    if (this.d1j_1 == null && !(this.c1j_1.x1g_1 == null)) {
      this.d1j_1 = this.c1j_1.x1g_1;
      this.e1j_1 = ensureNotNull(this.c1j_1.x1g_1).g1h_1;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.c1j_1.s().a3(this.g1j_1);
    var toCopy = byteCount.e1(b) <= 0 ? byteCount : b;
    this.c1j_1.r1h(sink, this.g1j_1, this.g1j_1.z2(toCopy));
    this.g1j_1 = this.g1j_1.z2(toCopy);
    return toCopy;
  };
  protoOf(PeekSource).q4 = function () {
    this.f1j_1 = true;
  };
  function RealSource(source) {
    this.h1j_1 = source;
    this.i1j_1 = false;
    this.j1j_1 = new Buffer();
  }
  protoOf(RealSource).a1h = function () {
    return this.j1j_1;
  };
  protoOf(RealSource).b1i = function (sink, byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.i1j_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (this.j1j_1.s().equals(new Long(0, 0))) {
      var read = this.h1j_1.b1i(this.j1j_1, new Long(8192, 0));
      if (read.equals(new Long(-1, -1)))
        return new Long(-1, -1);
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.j1j_1.s();
    var toRead = byteCount.e1(b) <= 0 ? byteCount : b;
    return this.j1j_1.b1i(sink, toRead);
  };
  protoOf(RealSource).b1h = function () {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.i1j_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.j1j_1.b1h() && this.h1j_1.b1i(this.j1j_1, new Long(8192, 0)).equals(new Long(-1, -1));
  };
  protoOf(RealSource).c1h = function (byteCount) {
    if (!this.d1h(byteCount))
      throw EOFException_init_$Create$_0("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
  };
  protoOf(RealSource).d1h = function (byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.i1j_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    while (this.j1j_1.s().e1(byteCount) < 0) {
      if (this.h1j_1.b1i(this.j1j_1, new Long(8192, 0)).equals(new Long(-1, -1)))
        return false;
    }
    return true;
  };
  protoOf(RealSource).e1h = function () {
    this.c1h(new Long(1, 0));
    return this.j1j_1.e1h();
  };
  protoOf(RealSource).z1h = function (sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    if (this.j1j_1.s().equals(new Long(0, 0))) {
      var read = this.h1j_1.b1i(this.j1j_1, new Long(8192, 0));
      if (read.equals(new Long(-1, -1)))
        return -1;
    }
    var tmp3 = endIndex - startIndex | 0;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.j1j_1.s();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = toLong(tmp3);
    var toRead = (a.e1(b) <= 0 ? a : b).j1();
    return this.j1j_1.z1h(sink, startIndex, startIndex + toRead | 0);
  };
  protoOf(RealSource).d1i = function (sink, byteCount) {
    try {
      this.c1h(byteCount);
    } catch ($p) {
      if ($p instanceof EOFException) {
        var e = $p;
        sink.c1i(this.j1j_1, this.j1j_1.s());
        throw e;
      } else {
        throw $p;
      }
    }
    this.j1j_1.d1i(sink, byteCount);
  };
  protoOf(RealSource).e1i = function (sink) {
    var totalBytesWritten = new Long(0, 0);
    while (!this.h1j_1.b1i(this.j1j_1, new Long(8192, 0)).equals(new Long(-1, -1))) {
      var emitByteCount = this.j1j_1.v1h();
      if (emitByteCount.e1(new Long(0, 0)) > 0) {
        totalBytesWritten = totalBytesWritten.z2(emitByteCount);
        sink.c1i(this.j1j_1, emitByteCount);
      }
    }
    if (this.j1j_1.s().e1(new Long(0, 0)) > 0) {
      totalBytesWritten = totalBytesWritten.z2(this.j1j_1.s());
      sink.c1i(this.j1j_1, this.j1j_1.s());
    }
    return totalBytesWritten;
  };
  protoOf(RealSource).o1h = function () {
    this.c1h(new Long(2, 0));
    return this.j1j_1.o1h();
  };
  protoOf(RealSource).f1i = function () {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.i1j_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return buffered(new PeekSource(this));
  };
  protoOf(RealSource).q4 = function () {
    if (this.i1j_1)
      return Unit_instance;
    this.i1j_1 = true;
    this.h1j_1.q4();
    this.j1j_1.e2();
  };
  protoOf(RealSource).toString = function () {
    return 'buffered(' + toString(this.h1j_1) + ')';
  };
  function Segment_init_$Init$($this) {
    Segment.call($this);
    $this.f1h_1 = new Int8Array(8192);
    $this.j1h_1 = true;
    $this.i1h_1 = null;
    return $this;
  }
  function Segment_init_$Create$() {
    return Segment_init_$Init$(objectCreate(protoOf(Segment)));
  }
  function Segment_init_$Init$_0(data, pos, limit, shareToken, owner, $this) {
    Segment.call($this);
    $this.f1h_1 = data;
    $this.g1h_1 = pos;
    $this.h1h_1 = limit;
    $this.i1h_1 = shareToken;
    $this.j1h_1 = owner;
    return $this;
  }
  function Segment_init_$Create$_0(data, pos, limit, shareToken, owner) {
    return Segment_init_$Init$_0(data, pos, limit, shareToken, owner, objectCreate(protoOf(Segment)));
  }
  function Companion() {
    this.k1j_1 = 8192;
    this.l1j_1 = 1024;
  }
  protoOf(Companion).m1j = function () {
    return Segment_init_$Create$();
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  protoOf(Segment).p1i = function () {
    var tmp1_safe_receiver = this.i1h_1;
    var tmp0_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n1j();
    return tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
  };
  protoOf(Segment).s1h = function () {
    var tmp0_elvis_lhs = this.i1h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = SegmentPool_instance.o1j();
      this.i1h_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var t = tmp;
    var tmp_0 = this.g1h_1;
    var tmp_1 = this.h1h_1;
    // Inline function 'kotlin.also' call
    t.p1j();
    return Segment_init_$Create$_0(this.f1h_1, tmp_0, tmp_1, t, false);
  };
  protoOf(Segment).s1i = function () {
    var result = this.k1h_1;
    if (!(this.l1h_1 == null)) {
      ensureNotNull(this.l1h_1).k1h_1 = this.k1h_1;
    }
    if (!(this.k1h_1 == null)) {
      ensureNotNull(this.k1h_1).l1h_1 = this.l1h_1;
    }
    this.k1h_1 = null;
    this.l1h_1 = null;
    return result;
  };
  protoOf(Segment).t1h = function (segment) {
    segment.l1h_1 = this;
    segment.k1h_1 = this.k1h_1;
    if (!(this.k1h_1 == null)) {
      ensureNotNull(this.k1h_1).l1h_1 = segment;
    }
    this.k1h_1 = segment;
    return segment;
  };
  protoOf(Segment).q1i = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount > 0 && byteCount <= (this.h1h_1 - this.g1h_1 | 0))) {
      var message = 'byteCount out of range';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var prefix;
    if (byteCount >= 1024) {
      prefix = this.s1h();
    } else {
      prefix = SegmentPool_instance.j1i();
      var tmp1 = this.f1h_1;
      var tmp2 = prefix.f1h_1;
      var tmp3 = this.g1h_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.g1h_1 + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp3, endIndex);
    }
    prefix.h1h_1 = prefix.g1h_1 + byteCount | 0;
    this.g1h_1 = this.g1h_1 + byteCount | 0;
    if (!(this.l1h_1 == null)) {
      ensureNotNull(this.l1h_1).t1h(prefix);
    } else {
      prefix.k1h_1 = this;
      this.l1h_1 = prefix;
    }
    return prefix;
  };
  protoOf(Segment).u1h = function () {
    // Inline function 'kotlin.check' call
    if (!!(this.l1h_1 == null)) {
      var message = 'cannot compact';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!ensureNotNull(this.l1h_1).j1h_1)
      return this;
    var byteCount = this.h1h_1 - this.g1h_1 | 0;
    var availableByteCount = (8192 - ensureNotNull(this.l1h_1).h1h_1 | 0) + (ensureNotNull(this.l1h_1).p1i() ? 0 : ensureNotNull(this.l1h_1).g1h_1) | 0;
    if (byteCount > availableByteCount)
      return this;
    var predecessor = this.l1h_1;
    this.r1i(ensureNotNull(predecessor), byteCount);
    var successor = this.s1i();
    // Inline function 'kotlin.check' call
    if (!(successor == null)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    SegmentPool_instance.z1i(this);
    return predecessor;
  };
  protoOf(Segment).v1i = function (byte) {
    var _unary__edvuaz = this.h1h_1;
    this.h1h_1 = _unary__edvuaz + 1 | 0;
    this.f1h_1[_unary__edvuaz] = byte;
  };
  protoOf(Segment).x1i = function (short) {
    var data = this.f1h_1;
    var limit = this.h1h_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = toByte(short & 255);
    this.h1h_1 = limit;
  };
  protoOf(Segment).n1h = function () {
    var _unary__edvuaz = this.g1h_1;
    this.g1h_1 = _unary__edvuaz + 1 | 0;
    return this.f1h_1[_unary__edvuaz];
  };
  protoOf(Segment).p1h = function () {
    var data = this.f1h_1;
    var pos = this.g1h_1;
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp = (data[_unary__edvuaz] & 255) << 8;
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
    var s = toShort(tmp | tmp$ret$1);
    this.g1h_1 = pos;
    return s;
  };
  protoOf(Segment).r1i = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!sink.j1h_1) {
      var message = 'only owner can write';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if ((sink.h1h_1 + byteCount | 0) > 8192) {
      if (sink.p1i())
        throw IllegalArgumentException_init_$Create$_0();
      if (((sink.h1h_1 + byteCount | 0) - sink.g1h_1 | 0) > 8192)
        throw IllegalArgumentException_init_$Create$_0();
      var tmp1 = sink.f1h_1;
      var tmp2 = sink.f1h_1;
      var tmp3 = sink.g1h_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = sink.h1h_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp3, endIndex);
      sink.h1h_1 = sink.h1h_1 - sink.g1h_1 | 0;
      sink.g1h_1 = 0;
    }
    var tmp6 = this.f1h_1;
    var tmp7 = sink.f1h_1;
    var tmp8 = sink.h1h_1;
    var tmp9 = this.g1h_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.g1h_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp6;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, tmp7, tmp8, tmp9, endIndex_0);
    sink.h1h_1 = sink.h1h_1 + byteCount | 0;
    this.g1h_1 = this.g1h_1 + byteCount | 0;
  };
  protoOf(Segment).a1i = function (dst, dstStartOffset, dstEndOffset) {
    var len = dstEndOffset - dstStartOffset | 0;
    var tmp0 = this.f1h_1;
    var tmp3 = this.g1h_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.g1h_1 + len | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstStartOffset, tmp3, endIndex);
    this.g1h_1 = this.g1h_1 + len | 0;
  };
  protoOf(Segment).m1i = function (src, srcStartOffset, srcEndOffset) {
    var tmp1 = this.f1h_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.h1h_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp1, destinationOffset, srcStartOffset, srcEndOffset);
    this.h1h_1 = this.h1h_1 + (srcEndOffset - srcStartOffset | 0) | 0;
  };
  protoOf(Segment).s = function () {
    return this.h1h_1 - this.g1h_1 | 0;
  };
  protoOf(Segment).l1i = function () {
    return this.f1h_1.length - this.h1h_1 | 0;
  };
  protoOf(Segment).q1j = function (readOnly) {
    return this.f1h_1;
  };
  protoOf(Segment).x1h = function (index) {
    return this.f1h_1[this.g1h_1 + index | 0];
  };
  protoOf(Segment).r1j = function (index, value) {
    this.f1h_1[this.h1h_1 + index | 0] = value;
  };
  protoOf(Segment).s1j = function (index, b0, b1) {
    var d = this.f1h_1;
    var l = this.h1h_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
  };
  protoOf(Segment).t1j = function (index, b0, b1, b2) {
    var d = this.f1h_1;
    var l = this.h1h_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
  };
  protoOf(Segment).u1j = function (index, b0, b1, b2, b3) {
    var d = this.f1h_1;
    var l = this.h1h_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
    d[(l + index | 0) + 3 | 0] = b3;
  };
  function Segment() {
    this.g1h_1 = 0;
    this.h1h_1 = 0;
    this.i1h_1 = null;
    this.j1h_1 = false;
    this.k1h_1 = null;
    this.l1h_1 = null;
  }
  function SegmentCopyTracker() {
  }
  function isEmpty(_this__u8e3s4) {
    return _this__u8e3s4.s() === 0;
  }
  function AlwaysSharedCopyTracker() {
    AlwaysSharedCopyTracker_instance = this;
    SegmentCopyTracker.call(this);
  }
  protoOf(AlwaysSharedCopyTracker).n1j = function () {
    return true;
  };
  protoOf(AlwaysSharedCopyTracker).p1j = function () {
    return Unit_instance;
  };
  var AlwaysSharedCopyTracker_instance;
  function AlwaysSharedCopyTracker_getInstance() {
    if (AlwaysSharedCopyTracker_instance == null)
      new AlwaysSharedCopyTracker();
    return AlwaysSharedCopyTracker_instance;
  }
  function Sink() {
  }
  function Source() {
  }
  function readByteArray(_this__u8e3s4) {
    return readByteArrayImpl(_this__u8e3s4, -1);
  }
  function readByteArrayImpl(_this__u8e3s4, size) {
    var arraySize = size;
    if (size === -1) {
      var fetchSize = new Long(2147483647, 0);
      while (_this__u8e3s4.a1h().s().e1(new Long(2147483647, 0)) < 0 && _this__u8e3s4.d1h(fetchSize)) {
        // Inline function 'kotlin.Long.times' call
        fetchSize = fetchSize.b3(toLong(2));
      }
      // Inline function 'kotlin.check' call
      if (!(_this__u8e3s4.a1h().s().e1(new Long(2147483647, 0)) < 0)) {
        var message = "Can't create an array of size " + _this__u8e3s4.a1h().s().toString();
        throw IllegalStateException_init_$Create$(toString(message));
      }
      arraySize = _this__u8e3s4.a1h().s().j1();
    } else {
      _this__u8e3s4.c1h(toLong(size));
    }
    var array = new Int8Array(arraySize);
    readTo(_this__u8e3s4.a1h(), array);
    return array;
  }
  function readTo(_this__u8e3s4, sink, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? sink.length : endIndex;
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    var offset = startIndex;
    while (offset < endIndex) {
      var bytesRead = _this__u8e3s4.z1h(sink, offset, endIndex);
      if (bytesRead === -1) {
        throw EOFException_init_$Create$_0('Source exhausted before reading ' + (endIndex - startIndex | 0) + ' bytes. ' + ('Only ' + bytesRead + ' bytes were read.'));
      }
      offset = offset + bytesRead | 0;
    }
  }
  function readByteArray_0(_this__u8e3s4, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    var byteCount_0 = toLong(byteCount);
    // Inline function 'kotlin.require' call
    if (!(byteCount_0.e1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return readByteArrayImpl(_this__u8e3s4, byteCount);
  }
  function readString(_this__u8e3s4) {
    _this__u8e3s4.d1h(new Long(-1, 2147483647));
    return commonReadUtf8(_this__u8e3s4.a1h(), _this__u8e3s4.a1h().s());
  }
  function readString_0(_this__u8e3s4, byteCount) {
    _this__u8e3s4.c1h(byteCount);
    return commonReadUtf8(_this__u8e3s4.a1h(), byteCount);
  }
  function readString_1(_this__u8e3s4) {
    return commonReadUtf8(_this__u8e3s4, _this__u8e3s4.s());
  }
  function commonReadUtf8(_this__u8e3s4, byteCount) {
    if (byteCount.equals(new Long(0, 0)))
      return '';
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = _this__u8e3s4.x1g_1;
    while (!(curr == null)) {
      get_SegmentReadContextImpl();
      if (toLong(curr.s()).e1(byteCount) >= 0) {
        var result = '';
        // Inline function 'kotlinx.io.unsafe.withData' call
        var tmp2 = curr.q1j(true);
        var tmp3 = curr.g1h_1;
        var tmp0 = curr.h1h_1;
        // Inline function 'kotlin.math.min' call
        var b = tmp3 + byteCount.j1() | 0;
        var tmp$ret$0 = Math.min(tmp0, b);
        result = commonToUtf8String(tmp2, tmp3, tmp$ret$0);
        _this__u8e3s4.y1h(byteCount);
        return result;
      }
      return commonToUtf8String(readByteArray_0(_this__u8e3s4, byteCount.j1()));
    }
    // Inline function 'kotlin.error' call
    var message = 'Unreacheable';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function writeString(_this__u8e3s4, string, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? string.length : endIndex;
    // Inline function 'kotlinx.io.checkBounds' call
    var size = string.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    // Inline function 'kotlinx.io.writeToInternalBuffer' call
    // Inline function 'kotlinx.io.commonWriteUtf8' call
    var this_0 = _this__u8e3s4.a1h();
    var i = startIndex;
    while (i < endIndex) {
      var p0 = i;
      // Inline function 'kotlin.code' call
      var this_1 = charSequenceGet(string, p0);
      var c = Char__toInt_impl_vasixd(this_1);
      if (c < 128) {
        $l$block_0: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail = this_0.g1i(1);
          var ctx = get_SegmentWriteContextImpl();
          var segmentOffset = -i | 0;
          // Inline function 'kotlin.comparisons.minOf' call
          var b = i + tail.l1i() | 0;
          var runLimit = Math.min(endIndex, b);
          var _unary__edvuaz = i;
          i = _unary__edvuaz + 1 | 0;
          ctx.y1j(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
          $l$loop: while (i < runLimit) {
            var p0_0 = i;
            // Inline function 'kotlin.code' call
            var this_2 = charSequenceGet(string, p0_0);
            c = Char__toInt_impl_vasixd(this_2);
            if (c >= 128)
              break $l$loop;
            var _unary__edvuaz_0 = i;
            i = _unary__edvuaz_0 + 1 | 0;
            ctx.y1j(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
          }
          var bytesWritten = i + segmentOffset | 0;
          if (bytesWritten === 1) {
            tail.h1h_1 = tail.h1h_1 + bytesWritten | 0;
            var tmp = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp.z1g_1 = this_0.z1g_1.z2(toLong(bytesWritten));
            break $l$block_0;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten ? bytesWritten <= tail.l1i() : false)) {
            var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.l1i();
            throw IllegalStateException_init_$Create$(toString(message));
          }
          if (!(bytesWritten === 0)) {
            tail.h1h_1 = tail.h1h_1 + bytesWritten | 0;
            var tmp_0 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_0.z1g_1 = this_0.z1g_1.z2(toLong(bytesWritten));
            break $l$block_0;
          }
          if (isEmpty(tail)) {
            this_0.a1j();
          }
        }
      } else if (c < 2048) {
        $l$block_2: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_0 = this_0.g1i(2);
          get_SegmentWriteContextImpl().x1j(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
          var bytesWritten_0 = 2;
          if (bytesWritten_0 === 2) {
            tail_0.h1h_1 = tail_0.h1h_1 + bytesWritten_0 | 0;
            var tmp_1 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_1.z1g_1 = this_0.z1g_1.z2(toLong(bytesWritten_0));
            break $l$block_2;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.l1i() : false)) {
            var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.l1i();
            throw IllegalStateException_init_$Create$(toString(message_0));
          }
          if (!(bytesWritten_0 === 0)) {
            tail_0.h1h_1 = tail_0.h1h_1 + bytesWritten_0 | 0;
            var tmp_2 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_2.z1g_1 = this_0.z1g_1.z2(toLong(bytesWritten_0));
            break $l$block_2;
          }
          if (isEmpty(tail_0)) {
            this_0.a1j();
          }
        }
        i = i + 1 | 0;
      } else if (c < 55296 || c > 57343) {
        $l$block_4: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_1 = this_0.g1i(3);
          get_SegmentWriteContextImpl().w1j(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
          var bytesWritten_1 = 3;
          if (bytesWritten_1 === 3) {
            tail_1.h1h_1 = tail_1.h1h_1 + bytesWritten_1 | 0;
            var tmp_3 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_3.z1g_1 = this_0.z1g_1.z2(toLong(bytesWritten_1));
            break $l$block_4;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.l1i() : false)) {
            var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.l1i();
            throw IllegalStateException_init_$Create$(toString(message_1));
          }
          if (!(bytesWritten_1 === 0)) {
            tail_1.h1h_1 = tail_1.h1h_1 + bytesWritten_1 | 0;
            var tmp_4 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_4.z1g_1 = this_0.z1g_1.z2(toLong(bytesWritten_1));
            break $l$block_4;
          }
          if (isEmpty(tail_1)) {
            this_0.a1j();
          }
        }
        i = i + 1 | 0;
      } else {
        var tmp_5;
        if ((i + 1 | 0) < endIndex) {
          var p0_1 = i + 1 | 0;
          // Inline function 'kotlin.code' call
          var this_3 = charSequenceGet(string, p0_1);
          tmp_5 = Char__toInt_impl_vasixd(this_3);
        } else {
          tmp_5 = 0;
        }
        var low = tmp_5;
        if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
          // Inline function 'kotlin.code' call
          var this_4 = _Char___init__impl__6a9atx(63);
          var tmp$ret$26 = Char__toInt_impl_vasixd(this_4);
          this_0.u1i(toByte(tmp$ret$26));
          i = i + 1 | 0;
        } else {
          var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
          $l$block_6: {
            // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
            var tail_2 = this_0.g1i(4);
            get_SegmentWriteContextImpl().v1j(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
            var bytesWritten_2 = 4;
            if (bytesWritten_2 === 4) {
              tail_2.h1h_1 = tail_2.h1h_1 + bytesWritten_2 | 0;
              var tmp_6 = this_0;
              // Inline function 'kotlin.Long.plus' call
              tmp_6.z1g_1 = this_0.z1g_1.z2(toLong(bytesWritten_2));
              break $l$block_6;
            }
            // Inline function 'kotlin.check' call
            if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.l1i() : false)) {
              var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.l1i();
              throw IllegalStateException_init_$Create$(toString(message_2));
            }
            if (!(bytesWritten_2 === 0)) {
              tail_2.h1h_1 = tail_2.h1h_1 + bytesWritten_2 | 0;
              var tmp_7 = this_0;
              // Inline function 'kotlin.Long.plus' call
              tmp_7.z1g_1 = this_0.z1g_1.z2(toLong(bytesWritten_2));
              break $l$block_6;
            }
            if (isEmpty(tail_2)) {
              this_0.a1j();
            }
          }
          i = i + 2 | 0;
        }
      }
    }
    _this__u8e3s4.q1h();
  }
  function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
    beginIndex = beginIndex === VOID ? 0 : beginIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
    if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
      throw IndexOutOfBoundsException_init_$Create$('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
    }
    var chars = charArray(endIndex - beginIndex | 0);
    var length = 0;
    // Inline function 'kotlinx.io.internal.processUtf16Chars' call
    var index = beginIndex;
    while (index < endIndex) {
      var b0 = _this__u8e3s4[index];
      if (b0 >= 0) {
        var c = numberToChar(b0);
        var _unary__edvuaz = length;
        length = _unary__edvuaz + 1 | 0;
        chars[_unary__edvuaz] = c;
        index = index + 1 | 0;
        while (index < endIndex && _this__u8e3s4[index] >= 0) {
          var _unary__edvuaz_0 = index;
          index = _unary__edvuaz_0 + 1 | 0;
          var c_0 = numberToChar(_this__u8e3s4[_unary__edvuaz_0]);
          var _unary__edvuaz_1 = length;
          length = _unary__edvuaz_1 + 1 | 0;
          chars[_unary__edvuaz_1] = c_0;
        }
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 5 === -2) {
          var tmp = index;
          var tmp3 = index;
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
            if (endIndex <= (tmp3 + 1 | 0)) {
              var c_1 = numberToChar(65533);
              var _unary__edvuaz_2 = length;
              length = _unary__edvuaz_2 + 1 | 0;
              chars[_unary__edvuaz_2] = c_1;
              tmp$ret$5 = 1;
              break $l$block_0;
            }
            var b0_0 = _this__u8e3s4[tmp3];
            var b1 = _this__u8e3s4[tmp3 + 1 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b1 & 192) === 128)) {
              var c_2 = numberToChar(65533);
              var _unary__edvuaz_3 = length;
              length = _unary__edvuaz_3 + 1 | 0;
              chars[_unary__edvuaz_3] = c_2;
              tmp$ret$5 = 1;
              break $l$block_0;
            }
            var codePoint = 3968 ^ b1 ^ b0_0 << 6;
            if (codePoint < 128) {
              var c_3 = numberToChar(65533);
              var _unary__edvuaz_4 = length;
              length = _unary__edvuaz_4 + 1 | 0;
              chars[_unary__edvuaz_4] = c_3;
            } else {
              var c_4 = numberToChar(codePoint);
              var _unary__edvuaz_5 = length;
              length = _unary__edvuaz_5 + 1 | 0;
              chars[_unary__edvuaz_5] = c_4;
            }
            tmp$ret$5 = 2;
          }
          index = tmp + tmp$ret$5 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 4 === -2) {
            var tmp_0 = index;
            var tmp12 = index;
            var tmp$ret$19;
            $l$block_4: {
              // Inline function 'kotlinx.io.internal.process3Utf8Bytes' call
              if (endIndex <= (tmp12 + 2 | 0)) {
                var c_5 = numberToChar(65533);
                var _unary__edvuaz_6 = length;
                length = _unary__edvuaz_6 + 1 | 0;
                chars[_unary__edvuaz_6] = c_5;
                var tmp_1;
                if (endIndex <= (tmp12 + 1 | 0)) {
                  tmp_1 = true;
                } else {
                  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                  // Inline function 'kotlinx.io.and' call
                  tmp_1 = !((_this__u8e3s4[tmp12 + 1 | 0] & 192) === 128);
                }
                if (tmp_1) {
                  tmp$ret$19 = 1;
                  break $l$block_4;
                } else {
                  tmp$ret$19 = 2;
                  break $l$block_4;
                }
              }
              var b0_1 = _this__u8e3s4[tmp12];
              var b1_0 = _this__u8e3s4[tmp12 + 1 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b1_0 & 192) === 128)) {
                var c_6 = numberToChar(65533);
                var _unary__edvuaz_7 = length;
                length = _unary__edvuaz_7 + 1 | 0;
                chars[_unary__edvuaz_7] = c_6;
                tmp$ret$19 = 1;
                break $l$block_4;
              }
              var b2 = _this__u8e3s4[tmp12 + 2 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b2 & 192) === 128)) {
                var c_7 = numberToChar(65533);
                var _unary__edvuaz_8 = length;
                length = _unary__edvuaz_8 + 1 | 0;
                chars[_unary__edvuaz_8] = c_7;
                tmp$ret$19 = 2;
                break $l$block_4;
              }
              var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
              if (codePoint_0 < 2048) {
                var c_8 = numberToChar(65533);
                var _unary__edvuaz_9 = length;
                length = _unary__edvuaz_9 + 1 | 0;
                chars[_unary__edvuaz_9] = c_8;
              } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
                var c_9 = numberToChar(65533);
                var _unary__edvuaz_10 = length;
                length = _unary__edvuaz_10 + 1 | 0;
                chars[_unary__edvuaz_10] = c_9;
              } else {
                var c_10 = numberToChar(codePoint_0);
                var _unary__edvuaz_11 = length;
                length = _unary__edvuaz_11 + 1 | 0;
                chars[_unary__edvuaz_11] = c_10;
              }
              tmp$ret$19 = 3;
            }
            index = tmp_0 + tmp$ret$19 | 0;
          } else {
            // Inline function 'kotlinx.io.shr' call
            if (b0 >> 3 === -2) {
              var tmp_2 = index;
              var tmp23 = index;
              var tmp$ret$41;
              $l$block_10: {
                // Inline function 'kotlinx.io.internal.process4Utf8Bytes' call
                if (endIndex <= (tmp23 + 3 | 0)) {
                  if (!(65533 === 65533)) {
                    var c_11 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_12 = length;
                    length = _unary__edvuaz_12 + 1 | 0;
                    chars[_unary__edvuaz_12] = c_11;
                    var c_12 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_13 = length;
                    length = _unary__edvuaz_13 + 1 | 0;
                    chars[_unary__edvuaz_13] = c_12;
                  } else {
                    var c_13 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_14 = length;
                    length = _unary__edvuaz_14 + 1 | 0;
                    chars[_unary__edvuaz_14] = c_13;
                  }
                  var tmp_3;
                  if (endIndex <= (tmp23 + 1 | 0)) {
                    tmp_3 = true;
                  } else {
                    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                    // Inline function 'kotlinx.io.and' call
                    tmp_3 = !((_this__u8e3s4[tmp23 + 1 | 0] & 192) === 128);
                  }
                  if (tmp_3) {
                    tmp$ret$41 = 1;
                    break $l$block_10;
                  } else {
                    var tmp_4;
                    if (endIndex <= (tmp23 + 2 | 0)) {
                      tmp_4 = true;
                    } else {
                      // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                      // Inline function 'kotlinx.io.and' call
                      tmp_4 = !((_this__u8e3s4[tmp23 + 2 | 0] & 192) === 128);
                    }
                    if (tmp_4) {
                      tmp$ret$41 = 2;
                      break $l$block_10;
                    } else {
                      tmp$ret$41 = 3;
                      break $l$block_10;
                    }
                  }
                }
                var b0_2 = _this__u8e3s4[tmp23];
                var b1_1 = _this__u8e3s4[tmp23 + 1 | 0];
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b1_1 & 192) === 128)) {
                  if (!(65533 === 65533)) {
                    var c_14 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_15 = length;
                    length = _unary__edvuaz_15 + 1 | 0;
                    chars[_unary__edvuaz_15] = c_14;
                    var c_15 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_16 = length;
                    length = _unary__edvuaz_16 + 1 | 0;
                    chars[_unary__edvuaz_16] = c_15;
                  } else {
                    var c_16 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_17 = length;
                    length = _unary__edvuaz_17 + 1 | 0;
                    chars[_unary__edvuaz_17] = c_16;
                  }
                  tmp$ret$41 = 1;
                  break $l$block_10;
                }
                var b2_0 = _this__u8e3s4[tmp23 + 2 | 0];
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b2_0 & 192) === 128)) {
                  if (!(65533 === 65533)) {
                    var c_17 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_18 = length;
                    length = _unary__edvuaz_18 + 1 | 0;
                    chars[_unary__edvuaz_18] = c_17;
                    var c_18 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_19 = length;
                    length = _unary__edvuaz_19 + 1 | 0;
                    chars[_unary__edvuaz_19] = c_18;
                  } else {
                    var c_19 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_20 = length;
                    length = _unary__edvuaz_20 + 1 | 0;
                    chars[_unary__edvuaz_20] = c_19;
                  }
                  tmp$ret$41 = 2;
                  break $l$block_10;
                }
                var b3 = _this__u8e3s4[tmp23 + 3 | 0];
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b3 & 192) === 128)) {
                  if (!(65533 === 65533)) {
                    var c_20 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_21 = length;
                    length = _unary__edvuaz_21 + 1 | 0;
                    chars[_unary__edvuaz_21] = c_20;
                    var c_21 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_22 = length;
                    length = _unary__edvuaz_22 + 1 | 0;
                    chars[_unary__edvuaz_22] = c_21;
                  } else {
                    var c_22 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_23 = length;
                    length = _unary__edvuaz_23 + 1 | 0;
                    chars[_unary__edvuaz_23] = c_22;
                  }
                  tmp$ret$41 = 3;
                  break $l$block_10;
                }
                var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
                if (codePoint_1 > 1114111) {
                  if (!(65533 === 65533)) {
                    var c_23 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_24 = length;
                    length = _unary__edvuaz_24 + 1 | 0;
                    chars[_unary__edvuaz_24] = c_23;
                    var c_24 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_25 = length;
                    length = _unary__edvuaz_25 + 1 | 0;
                    chars[_unary__edvuaz_25] = c_24;
                  } else {
                    var c_25 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_26 = length;
                    length = _unary__edvuaz_26 + 1 | 0;
                    chars[_unary__edvuaz_26] = c_25;
                  }
                } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                  if (!(65533 === 65533)) {
                    var c_26 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_27 = length;
                    length = _unary__edvuaz_27 + 1 | 0;
                    chars[_unary__edvuaz_27] = c_26;
                    var c_27 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_28 = length;
                    length = _unary__edvuaz_28 + 1 | 0;
                    chars[_unary__edvuaz_28] = c_27;
                  } else {
                    var c_28 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_29 = length;
                    length = _unary__edvuaz_29 + 1 | 0;
                    chars[_unary__edvuaz_29] = c_28;
                  }
                } else if (codePoint_1 < 65536) {
                  if (!(65533 === 65533)) {
                    var c_29 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_30 = length;
                    length = _unary__edvuaz_30 + 1 | 0;
                    chars[_unary__edvuaz_30] = c_29;
                    var c_30 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_31 = length;
                    length = _unary__edvuaz_31 + 1 | 0;
                    chars[_unary__edvuaz_31] = c_30;
                  } else {
                    var c_31 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_32 = length;
                    length = _unary__edvuaz_32 + 1 | 0;
                    chars[_unary__edvuaz_32] = c_31;
                  }
                } else {
                  if (!(codePoint_1 === 65533)) {
                    var c_32 = numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_33 = length;
                    length = _unary__edvuaz_33 + 1 | 0;
                    chars[_unary__edvuaz_33] = c_32;
                    var c_33 = numberToChar((codePoint_1 & 1023) + 56320 | 0);
                    var _unary__edvuaz_34 = length;
                    length = _unary__edvuaz_34 + 1 | 0;
                    chars[_unary__edvuaz_34] = c_33;
                  } else {
                    var c_34 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_35 = length;
                    length = _unary__edvuaz_35 + 1 | 0;
                    chars[_unary__edvuaz_35] = c_34;
                  }
                }
                tmp$ret$41 = 4;
              }
              index = tmp_2 + tmp$ret$41 | 0;
            } else {
              var c_35 = _Char___init__impl__6a9atx(65533);
              var _unary__edvuaz_36 = length;
              length = _unary__edvuaz_36 + 1 | 0;
              chars[_unary__edvuaz_36] = c_35;
              index = index + 1 | 0;
            }
          }
        }
      }
    }
    return concatToString(chars, 0, length);
  }
  function get_SegmentReadContextImpl() {
    _init_properties_UnsafeBufferOperations_kt__xw75gy();
    return SegmentReadContextImpl;
  }
  var SegmentReadContextImpl;
  function get_SegmentWriteContextImpl() {
    _init_properties_UnsafeBufferOperations_kt__xw75gy();
    return SegmentWriteContextImpl;
  }
  var SegmentWriteContextImpl;
  var BufferIterationContextImpl;
  function UnsafeBufferOperations() {
  }
  var UnsafeBufferOperations_instance;
  function UnsafeBufferOperations_getInstance() {
    return UnsafeBufferOperations_instance;
  }
  function SegmentReadContextImpl$1() {
  }
  protoOf(SegmentReadContextImpl$1).y1i = function (segment, offset) {
    return segment.x1h(offset);
  };
  function SegmentWriteContextImpl$1() {
  }
  protoOf(SegmentWriteContextImpl$1).y1j = function (segment, offset, value) {
    segment.r1j(offset, value);
  };
  protoOf(SegmentWriteContextImpl$1).x1j = function (segment, offset, b0, b1) {
    segment.s1j(offset, b0, b1);
  };
  protoOf(SegmentWriteContextImpl$1).w1j = function (segment, offset, b0, b1, b2) {
    segment.t1j(offset, b0, b1, b2);
  };
  protoOf(SegmentWriteContextImpl$1).v1j = function (segment, offset, b0, b1, b2, b3) {
    segment.u1j(offset, b0, b1, b2, b3);
  };
  function BufferIterationContextImpl$1() {
  }
  protoOf(BufferIterationContextImpl$1).y1i = function (segment, offset) {
    return get_SegmentReadContextImpl().y1i(segment, offset);
  };
  var properties_initialized_UnsafeBufferOperations_kt_2xfgoc;
  function _init_properties_UnsafeBufferOperations_kt__xw75gy() {
    if (!properties_initialized_UnsafeBufferOperations_kt_2xfgoc) {
      properties_initialized_UnsafeBufferOperations_kt_2xfgoc = true;
      SegmentReadContextImpl = new SegmentReadContextImpl$1();
      SegmentWriteContextImpl = new SegmentWriteContextImpl$1();
      BufferIterationContextImpl = new BufferIterationContextImpl$1();
    }
  }
  function IOException_init_$Init$($this) {
    Exception_init_$Init$($this);
    IOException.call($this);
    return $this;
  }
  function IOException_init_$Create$() {
    var tmp = IOException_init_$Init$(objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$);
    return tmp;
  }
  function IOException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    IOException.call($this);
    return $this;
  }
  function IOException_init_$Create$_0(message) {
    var tmp = IOException_init_$Init$_0(message, objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$_0);
    return tmp;
  }
  function IOException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    IOException.call($this);
    return $this;
  }
  function IOException_init_$Create$_1(message, cause) {
    var tmp = IOException_init_$Init$_1(message, cause, objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$_1);
    return tmp;
  }
  function IOException() {
    captureStack(this, IOException);
  }
  function EOFException_init_$Init$($this) {
    IOException_init_$Init$($this);
    EOFException.call($this);
    return $this;
  }
  function EOFException_init_$Create$() {
    var tmp = EOFException_init_$Init$(objectCreate(protoOf(EOFException)));
    captureStack(tmp, EOFException_init_$Create$);
    return tmp;
  }
  function EOFException_init_$Init$_0(message, $this) {
    IOException_init_$Init$_0(message, $this);
    EOFException.call($this);
    return $this;
  }
  function EOFException_init_$Create$_0(message) {
    var tmp = EOFException_init_$Init$_0(message, objectCreate(protoOf(EOFException)));
    captureStack(tmp, EOFException_init_$Create$_0);
    return tmp;
  }
  function EOFException() {
    captureStack(this, EOFException);
  }
  function SegmentPool() {
    this.h1i_1 = 0;
    this.i1i_1 = 0;
  }
  protoOf(SegmentPool).j1i = function () {
    return Companion_instance.m1j();
  };
  protoOf(SegmentPool).z1i = function (segment) {
  };
  protoOf(SegmentPool).o1j = function () {
    return AlwaysSharedCopyTracker_getInstance();
  };
  var SegmentPool_instance;
  function SegmentPool_getInstance() {
    return SegmentPool_instance;
  }
  //region block: post-declaration
  protoOf(Buffer).n1i = write$default;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  UnsafeBufferOperations_instance = new UnsafeBufferOperations();
  SegmentPool_instance = new SegmentPool();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EOFException_init_$Create$_0;
  _.$_$.b = IOException_init_$Init$_0;
  _.$_$.c = IOException_init_$Create$_0;
  _.$_$.d = IOException_init_$Init$_1;
  _.$_$.e = IOException_init_$Create$_1;
  _.$_$.f = Buffer;
  _.$_$.g = IOException;
  _.$_$.h = Source;
  _.$_$.i = readByteArray_0;
  _.$_$.j = readByteArray;
  _.$_$.k = readByteString;
  _.$_$.l = readString;
  _.$_$.m = readString_0;
  _.$_$.n = readString_1;
  _.$_$.o = writeString;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-io-kotlinx-io-core.js.map
