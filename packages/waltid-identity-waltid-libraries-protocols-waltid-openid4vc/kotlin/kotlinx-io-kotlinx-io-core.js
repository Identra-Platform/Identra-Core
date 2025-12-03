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
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var Long = kotlin_kotlin.$_$.fj;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var charArrayOf = kotlin_kotlin.$_$.lc;
  var protoOf = kotlin_kotlin.$_$.ce;
  var toString = kotlin_kotlin.$_$.ge;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var toShort = kotlin_kotlin.$_$.fe;
  var ensureNotNull = kotlin_kotlin.$_$.fk;
  var toLong = kotlin_kotlin.$_$.ee;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q1;
  var initMetadataForClass = kotlin_kotlin.$_$.yc;
  var VOID = kotlin_kotlin.$_$.j;
  var UnsafeByteStringOperations_instance = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.b;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var AutoCloseable = kotlin_kotlin.$_$.ti;
  var objectCreate = kotlin_kotlin.$_$.be;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zc;
  var arrayCopy = kotlin_kotlin.$_$.g7;
  var toByte = kotlin_kotlin.$_$.de;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.e2;
  var initMetadataForObject = kotlin_kotlin.$_$.ed;
  var initMetadataForInterface = kotlin_kotlin.$_$.cd;
  var charSequenceGet = kotlin_kotlin.$_$.nc;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.t3;
  var charArray = kotlin_kotlin.$_$.mc;
  var numberToChar = kotlin_kotlin.$_$.xd;
  var concatToString = kotlin_kotlin.$_$.qf;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.w1;
  var captureStack = kotlin_kotlin.$_$.kc;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.y1;
  var Exception_init_$Init$_1 = kotlin_kotlin.$_$.a2;
  var Exception = kotlin_kotlin.$_$.cj;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(Source, 'Source', VOID, VOID, [AutoCloseable]);
  function write$default(source, startIndex, endIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? source.length : endIndex;
    var tmp;
    if ($super === VOID) {
      this.a1l(source, startIndex, endIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.a1l.call(this, source, startIndex, endIndex);
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
    if (startIndex.h1(new Long(0, 0)) < 0 || endIndex.h1(size) > 0) {
      throw IndexOutOfBoundsException_init_$Create$('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
    }
    if (startIndex.h1(endIndex) > 0) {
      throw IllegalArgumentException_init_$Create$('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
    }
  }
  function checkOffsetAndCount(size, offset, byteCount) {
    _init_properties__Util_kt__g8tcl9();
    if (offset.h1(new Long(0, 0)) < 0 || offset.h1(size) > 0 || size.d3(offset).h1(byteCount) < 0 || byteCount.h1(new Long(0, 0)) < 0) {
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
    throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + $this.t().toString() + ', required: ' + byteCount.toString() + ')');
  }
  function Buffer() {
    this.n1j_1 = null;
    this.o1j_1 = null;
    this.p1j_1 = new Long(0, 0);
  }
  protoOf(Buffer).t = function () {
    return this.p1j_1;
  };
  protoOf(Buffer).q1j = function () {
    return this;
  };
  protoOf(Buffer).r1j = function () {
    return this.t().equals(new Long(0, 0));
  };
  protoOf(Buffer).s1j = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount.h1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.t().h1(byteCount) < 0) {
      throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + this.t().toString() + ', required: ' + byteCount.toString() + ')');
    }
  };
  protoOf(Buffer).t1j = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount.h1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount: ' + byteCount.toString() + ' < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.t().h1(byteCount) >= 0;
  };
  protoOf(Buffer).u1j = function () {
    var tmp0_elvis_lhs = this.n1j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, new Long(1, 0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.t();
    if (segmentSize === 0) {
      this.c1k();
      return this.u1j();
    }
    var v = segment.d1k();
    this.p1j_1 = this.p1j_1.d3(new Long(1, 0));
    if (segmentSize === 1) {
      this.c1k();
    }
    return v;
  };
  protoOf(Buffer).e1k = function () {
    var tmp0_elvis_lhs = this.n1j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, new Long(2, 0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.t();
    if (segmentSize < 2) {
      this.s1j(new Long(2, 0));
      if (segmentSize === 0) {
        this.c1k();
        return this.e1k();
      }
      // Inline function 'kotlinx.io.and' call
      var tmp_0 = (this.u1j() & 255) << 8;
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$1 = this.u1j() & 255;
      return toShort(tmp_0 | tmp$ret$1);
    }
    var v = segment.f1k();
    this.p1j_1 = this.p1j_1.d3(new Long(2, 0));
    if (segmentSize === 2) {
      this.c1k();
    }
    return v;
  };
  protoOf(Buffer).g1k = function () {
    return Unit_instance;
  };
  protoOf(Buffer).h1k = function (out, startIndex, endIndex) {
    checkBounds(this.t(), startIndex, endIndex);
    if (startIndex.equals(endIndex))
      return Unit_instance;
    var currentOffset = startIndex;
    var remainingByteCount = endIndex.d3(startIndex);
    out.p1j_1 = out.p1j_1.c3(remainingByteCount);
    var s = this.n1j_1;
    while (currentOffset.h1(toLong(ensureNotNull(s).x1j_1 - s.w1j_1 | 0)) >= 0) {
      currentOffset = currentOffset.d3(toLong(s.x1j_1 - s.w1j_1 | 0));
      s = s.a1k_1;
    }
    while (remainingByteCount.h1(new Long(0, 0)) > 0) {
      var copy = ensureNotNull(s).i1k();
      copy.w1j_1 = copy.w1j_1 + currentOffset.m1() | 0;
      var tmp = copy;
      var tmp0 = copy.w1j_1 + remainingByteCount.m1() | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = copy.x1j_1;
      tmp.x1j_1 = Math.min(tmp0, b);
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (out.n1j_1 == null) {
        out.n1j_1 = copy;
        out.o1j_1 = copy;
      } else if (false) {
        out.o1j_1 = ensureNotNull(out.o1j_1).j1k(copy).k1k();
        if (ensureNotNull(out.o1j_1).b1k_1 == null) {
          out.n1j_1 = out.o1j_1;
        }
      } else {
        out.o1j_1 = ensureNotNull(out.o1j_1).j1k(copy);
      }
      remainingByteCount = remainingByteCount.d3(toLong(copy.x1j_1 - copy.w1j_1 | 0));
      currentOffset = new Long(0, 0);
      s = s.a1k_1;
    }
  };
  protoOf(Buffer).l1k = function () {
    var result = this.t();
    if (result.equals(new Long(0, 0)))
      return new Long(0, 0);
    var tail = ensureNotNull(this.o1j_1);
    if (tail.x1j_1 < 8192 && tail.z1j_1) {
      result = result.d3(toLong(tail.x1j_1 - tail.w1j_1 | 0));
    }
    return result;
  };
  protoOf(Buffer).m1k = function (position) {
    if (position.h1(new Long(0, 0)) < 0 || position.h1(this.t()) >= 0) {
      throw IndexOutOfBoundsException_init_$Create$('position (' + position.toString() + ') is not within the range [0..size(' + this.t().toString() + '))');
    }
    if (position.equals(new Long(0, 0))) {
      return ensureNotNull(this.n1j_1).n1k(0);
    }
    // Inline function 'kotlinx.io.seek' call
    if (this.n1j_1 == null) {
      var offset = new Long(-1, -1);
      return ensureNotNull(null).n1k(position.d3(offset).m1());
    }
    if (this.t().d3(position).h1(position) < 0) {
      var s = this.o1j_1;
      var offset_0 = this.t();
      $l$loop: while (!(s == null) && offset_0.h1(position) > 0) {
        offset_0 = offset_0.d3(toLong(s.x1j_1 - s.w1j_1 | 0));
        if (offset_0.h1(position) <= 0)
          break $l$loop;
        s = s.b1k_1;
      }
      var tmp4 = s;
      var offset_1 = offset_0;
      return ensureNotNull(tmp4).n1k(position.d3(offset_1).m1());
    } else {
      var s_0 = this.n1j_1;
      var offset_2 = new Long(0, 0);
      $l$loop_0: while (!(s_0 == null)) {
        var tmp0 = offset_2;
        // Inline function 'kotlin.Long.plus' call
        var other = s_0.x1j_1 - s_0.w1j_1 | 0;
        var nextOffset = tmp0.c3(toLong(other));
        if (nextOffset.h1(position) > 0)
          break $l$loop_0;
        s_0 = s_0.a1k_1;
        offset_2 = nextOffset;
      }
      var tmp6 = s_0;
      var offset_3 = offset_2;
      return ensureNotNull(tmp6).n1k(position.d3(offset_3).m1());
    }
  };
  protoOf(Buffer).h2 = function () {
    return this.o1k(this.t());
  };
  protoOf(Buffer).o1k = function (byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount.h1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount.h1(new Long(0, 0)) > 0) {
      var tmp0_elvis_lhs = this.n1j_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException_init_$Create$_0('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      var tmp1 = remainingByteCount;
      // Inline function 'kotlinx.io.minOf' call
      var b = head.x1j_1 - head.w1j_1 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = toLong(b);
      var toSkip = (tmp1.h1(b_0) <= 0 ? tmp1 : b_0).m1();
      this.p1j_1 = this.p1j_1.d3(toLong(toSkip));
      remainingByteCount = remainingByteCount.d3(toLong(toSkip));
      head.w1j_1 = head.w1j_1 + toSkip | 0;
      if (head.w1j_1 === head.x1j_1) {
        this.c1k();
      }
    }
  };
  protoOf(Buffer).p1k = function (sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    var tmp0_elvis_lhs = this.n1j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return -1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    var tmp3 = endIndex - startIndex | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = s.t();
    var toCopy = Math.min(tmp3, b);
    s.q1k(sink, startIndex, startIndex + toCopy | 0);
    this.p1j_1 = this.p1j_1.d3(toLong(toCopy));
    if (isEmpty(s)) {
      this.c1k();
    }
    return toCopy;
  };
  protoOf(Buffer).r1k = function (sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount.h1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.t().equals(new Long(0, 0)))
      return new Long(-1, -1);
    var bytesWritten = byteCount.h1(this.t()) > 0 ? this.t() : byteCount;
    sink.s1k(this, bytesWritten);
    return bytesWritten;
  };
  protoOf(Buffer).t1k = function (sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount.h1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.t().h1(byteCount) < 0) {
      sink.s1k(this, this.t());
      throw EOFException_init_$Create$_0('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.t().toString() + ' bytes were written.');
    }
    sink.s1k(this, byteCount);
  };
  protoOf(Buffer).u1k = function (sink) {
    var byteCount = this.t();
    if (byteCount.h1(new Long(0, 0)) > 0) {
      sink.s1k(this, byteCount);
    }
    return byteCount;
  };
  protoOf(Buffer).v1k = function () {
    return buffered(new PeekSource(this));
  };
  protoOf(Buffer).w1k = function (minimumCapacity) {
    // Inline function 'kotlin.require' call
    if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
      var message = 'unexpected capacity (' + minimumCapacity + '), should be in range [1, 8192]';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.o1j_1 == null) {
      var result = SegmentPool_instance.z1k();
      this.n1j_1 = result;
      this.o1j_1 = result;
      return result;
    }
    var t = ensureNotNull(this.o1j_1);
    if ((t.x1j_1 + minimumCapacity | 0) > 8192 || !t.z1j_1) {
      var newTail = t.j1k(SegmentPool_instance.z1k());
      this.o1j_1 = newTail;
      return newTail;
    }
    return t;
  };
  protoOf(Buffer).a1l = function (source, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = source.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    var currentOffset = startIndex;
    while (currentOffset < endIndex) {
      var tail = this.w1k(1);
      var tmp3 = endIndex - currentOffset | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = tail.b1l();
      var toCopy = Math.min(tmp3, b);
      tail.c1l(source, currentOffset, currentOffset + toCopy | 0);
      currentOffset = currentOffset + toCopy | 0;
    }
    var tmp = this;
    var tmp5 = this.p1j_1;
    // Inline function 'kotlin.Long.plus' call
    var other = endIndex - startIndex | 0;
    tmp.p1j_1 = tmp5.c3(toLong(other));
  };
  protoOf(Buffer).e1l = function (source, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount.h1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount.h1(new Long(0, 0)) > 0) {
      var read = source.r1k(this, remainingByteCount);
      if (read.equals(new Long(-1, -1))) {
        throw EOFException_init_$Create$_0('Source exhausted before reading ' + byteCount.toString() + ' bytes. ' + ('Only ' + byteCount.d3(remainingByteCount).toString() + ' were read.'));
      }
      remainingByteCount = remainingByteCount.d3(read);
    }
  };
  protoOf(Buffer).s1k = function (source, byteCount) {
    // Inline function 'kotlin.require' call
    if (!!(source === this)) {
      var message = 'source == this';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    checkOffsetAndCount(source.p1j_1, new Long(0, 0), byteCount);
    var remainingByteCount = byteCount;
    while (remainingByteCount.h1(new Long(0, 0)) > 0) {
      if (remainingByteCount.h1(toLong(ensureNotNull(source.n1j_1).t())) < 0) {
        var tail = this.o1j_1;
        var tmp;
        if (!(tail == null) && tail.z1j_1) {
          var tmp1 = remainingByteCount;
          // Inline function 'kotlin.Long.plus' call
          var other = tail.x1j_1;
          var tmp3 = tmp1.c3(toLong(other));
          // Inline function 'kotlin.Long.minus' call
          var other_0 = tail.f1l() ? 0 : tail.w1j_1;
          tmp = tmp3.d3(toLong(other_0)).h1(new Long(8192, 0)) <= 0;
        } else {
          tmp = false;
        }
        if (tmp) {
          ensureNotNull(source.n1j_1).h1l(tail, remainingByteCount.m1());
          source.p1j_1 = source.p1j_1.d3(remainingByteCount);
          this.p1j_1 = this.p1j_1.c3(remainingByteCount);
          return Unit_instance;
        } else {
          source.n1j_1 = ensureNotNull(source.n1j_1).g1l(remainingByteCount.m1());
        }
      }
      var segmentToMove = ensureNotNull(source.n1j_1);
      var movedByteCount = toLong(segmentToMove.t());
      source.n1j_1 = segmentToMove.i1l();
      if (source.n1j_1 == null) {
        source.o1j_1 = null;
      }
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (this.n1j_1 == null) {
        this.n1j_1 = segmentToMove;
        this.o1j_1 = segmentToMove;
      } else if (true) {
        this.o1j_1 = ensureNotNull(this.o1j_1).j1k(segmentToMove).k1k();
        if (ensureNotNull(this.o1j_1).b1k_1 == null) {
          this.n1j_1 = this.o1j_1;
        }
      } else {
        this.o1j_1 = ensureNotNull(this.o1j_1).j1k(segmentToMove);
      }
      source.p1j_1 = source.p1j_1.d3(movedByteCount);
      this.p1j_1 = this.p1j_1.c3(movedByteCount);
      remainingByteCount = remainingByteCount.d3(movedByteCount);
    }
  };
  protoOf(Buffer).j1l = function (source) {
    var totalBytesRead = new Long(0, 0);
    $l$loop: while (true) {
      var readCount = source.r1k(this, new Long(8192, 0));
      if (readCount.equals(new Long(-1, -1)))
        break $l$loop;
      totalBytesRead = totalBytesRead.c3(readCount);
    }
    return totalBytesRead;
  };
  protoOf(Buffer).k1l = function (byte) {
    this.w1k(1).l1l(byte);
    this.p1j_1 = this.p1j_1.c3(new Long(1, 0));
  };
  protoOf(Buffer).m1l = function (short) {
    this.w1k(2).n1l(short);
    this.p1j_1 = this.p1j_1.c3(new Long(2, 0));
  };
  protoOf(Buffer).z4 = function () {
    return Unit_instance;
  };
  protoOf(Buffer).toString = function () {
    if (this.t().equals(new Long(0, 0)))
      return 'Buffer(size=0)';
    var maxPrintableBytes = 64;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.t();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = toLong(maxPrintableBytes);
    var len = (a.h1(b) <= 0 ? a : b).m1();
    var builder = StringBuilder_init_$Create$(imul(len, 2) + (this.t().h1(toLong(maxPrintableBytes)) > 0 ? 1 : 0) | 0);
    var bytesWritten = 0;
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = this.n1j_1;
    while (!(curr == null)) {
      var tmp4 = get_SegmentReadContextImpl();
      var segment = curr;
      var idx = 0;
      while (bytesWritten < len && idx < segment.t()) {
        var _unary__edvuaz = idx;
        idx = _unary__edvuaz + 1 | 0;
        var b_0 = tmp4.o1l(segment, _unary__edvuaz);
        bytesWritten = bytesWritten + 1 | 0;
        var tmp = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.shr' call
        var tmp$ret$2 = b_0 >> 4;
        var tmp_0 = builder.p(tmp[tmp$ret$2 & 15]);
        var tmp_1 = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.and' call
        var tmp$ret$3 = b_0 & 15;
        tmp_0.p(tmp_1[tmp$ret$3]);
      }
      curr = curr.a1k_1;
    }
    if (this.t().h1(toLong(maxPrintableBytes)) > 0) {
      builder.p(_Char___init__impl__6a9atx(8230));
    }
    return 'Buffer(size=' + this.t().toString() + ' hex=' + builder.toString() + ')';
  };
  protoOf(Buffer).c1k = function () {
    var oldHead = ensureNotNull(this.n1j_1);
    var nextHead = oldHead.a1k_1;
    this.n1j_1 = nextHead;
    if (nextHead == null) {
      this.o1j_1 = null;
    } else {
      nextHead.b1k_1 = null;
    }
    oldHead.a1k_1 = null;
    SegmentPool_instance.p1l(oldHead);
  };
  protoOf(Buffer).q1l = function () {
    var oldTail = ensureNotNull(this.o1j_1);
    var newTail = oldTail.b1k_1;
    this.o1j_1 = newTail;
    if (newTail == null) {
      this.n1j_1 = null;
    } else {
      newTail.a1k_1 = null;
    }
    oldTail.b1k_1 = null;
    SegmentPool_instance.p1l(oldTail);
  };
  function readByteString(_this__u8e3s4, byteCount) {
    return UnsafeByteStringOperations_instance.m1j(readByteArray_0(_this__u8e3s4, byteCount));
  }
  function buffered(_this__u8e3s4) {
    return new RealSource(_this__u8e3s4);
  }
  function PeekSource(upstream) {
    this.r1l_1 = upstream;
    this.s1l_1 = this.r1l_1.q1j();
    this.t1l_1 = this.s1l_1.n1j_1;
    var tmp = this;
    var tmp0_safe_receiver = this.s1l_1.n1j_1;
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w1j_1;
    tmp.u1l_1 = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
    this.v1l_1 = false;
    this.w1l_1 = new Long(0, 0);
  }
  protoOf(PeekSource).r1k = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!!this.v1l_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount.h1(new Long(0, 0)) >= 0)) {
      var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    if (!(this.t1l_1 == null || (this.t1l_1 === this.s1l_1.n1j_1 && this.u1l_1 === ensureNotNull(this.s1l_1.n1j_1).w1j_1))) {
      var message_1 = 'Peek source is invalid because upstream source was used';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    if (byteCount.equals(new Long(0, 0)))
      return new Long(0, 0);
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$7 = this.w1l_1.c3(toLong(1));
    if (!this.r1l_1.t1j(tmp$ret$7))
      return new Long(-1, -1);
    if (this.t1l_1 == null && !(this.s1l_1.n1j_1 == null)) {
      this.t1l_1 = this.s1l_1.n1j_1;
      this.u1l_1 = ensureNotNull(this.s1l_1.n1j_1).w1j_1;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.s1l_1.t().d3(this.w1l_1);
    var toCopy = byteCount.h1(b) <= 0 ? byteCount : b;
    this.s1l_1.h1k(sink, this.w1l_1, this.w1l_1.c3(toCopy));
    this.w1l_1 = this.w1l_1.c3(toCopy);
    return toCopy;
  };
  protoOf(PeekSource).z4 = function () {
    this.v1l_1 = true;
  };
  function RealSource(source) {
    this.x1l_1 = source;
    this.y1l_1 = false;
    this.z1l_1 = new Buffer();
  }
  protoOf(RealSource).q1j = function () {
    return this.z1l_1;
  };
  protoOf(RealSource).r1k = function (sink, byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.y1l_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount.h1(new Long(0, 0)) >= 0)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (this.z1l_1.t().equals(new Long(0, 0))) {
      var read = this.x1l_1.r1k(this.z1l_1, new Long(8192, 0));
      if (read.equals(new Long(-1, -1)))
        return new Long(-1, -1);
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.z1l_1.t();
    var toRead = byteCount.h1(b) <= 0 ? byteCount : b;
    return this.z1l_1.r1k(sink, toRead);
  };
  protoOf(RealSource).r1j = function () {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.y1l_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.z1l_1.r1j() && this.x1l_1.r1k(this.z1l_1, new Long(8192, 0)).equals(new Long(-1, -1));
  };
  protoOf(RealSource).s1j = function (byteCount) {
    if (!this.t1j(byteCount))
      throw EOFException_init_$Create$_0("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
  };
  protoOf(RealSource).t1j = function (byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.y1l_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount.h1(new Long(0, 0)) >= 0)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    while (this.z1l_1.t().h1(byteCount) < 0) {
      if (this.x1l_1.r1k(this.z1l_1, new Long(8192, 0)).equals(new Long(-1, -1)))
        return false;
    }
    return true;
  };
  protoOf(RealSource).u1j = function () {
    this.s1j(new Long(1, 0));
    return this.z1l_1.u1j();
  };
  protoOf(RealSource).p1k = function (sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    if (this.z1l_1.t().equals(new Long(0, 0))) {
      var read = this.x1l_1.r1k(this.z1l_1, new Long(8192, 0));
      if (read.equals(new Long(-1, -1)))
        return -1;
    }
    var tmp3 = endIndex - startIndex | 0;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.z1l_1.t();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = toLong(tmp3);
    var toRead = (a.h1(b) <= 0 ? a : b).m1();
    return this.z1l_1.p1k(sink, startIndex, startIndex + toRead | 0);
  };
  protoOf(RealSource).t1k = function (sink, byteCount) {
    try {
      this.s1j(byteCount);
    } catch ($p) {
      if ($p instanceof EOFException) {
        var e = $p;
        sink.s1k(this.z1l_1, this.z1l_1.t());
        throw e;
      } else {
        throw $p;
      }
    }
    this.z1l_1.t1k(sink, byteCount);
  };
  protoOf(RealSource).u1k = function (sink) {
    var totalBytesWritten = new Long(0, 0);
    while (!this.x1l_1.r1k(this.z1l_1, new Long(8192, 0)).equals(new Long(-1, -1))) {
      var emitByteCount = this.z1l_1.l1k();
      if (emitByteCount.h1(new Long(0, 0)) > 0) {
        totalBytesWritten = totalBytesWritten.c3(emitByteCount);
        sink.s1k(this.z1l_1, emitByteCount);
      }
    }
    if (this.z1l_1.t().h1(new Long(0, 0)) > 0) {
      totalBytesWritten = totalBytesWritten.c3(this.z1l_1.t());
      sink.s1k(this.z1l_1, this.z1l_1.t());
    }
    return totalBytesWritten;
  };
  protoOf(RealSource).e1k = function () {
    this.s1j(new Long(2, 0));
    return this.z1l_1.e1k();
  };
  protoOf(RealSource).v1k = function () {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.y1l_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return buffered(new PeekSource(this));
  };
  protoOf(RealSource).z4 = function () {
    if (this.y1l_1)
      return Unit_instance;
    this.y1l_1 = true;
    this.x1l_1.z4();
    this.z1l_1.h2();
  };
  protoOf(RealSource).toString = function () {
    return 'buffered(' + toString(this.x1l_1) + ')';
  };
  function Segment_init_$Init$($this) {
    Segment.call($this);
    $this.v1j_1 = new Int8Array(8192);
    $this.z1j_1 = true;
    $this.y1j_1 = null;
    return $this;
  }
  function Segment_init_$Create$() {
    return Segment_init_$Init$(objectCreate(protoOf(Segment)));
  }
  function Segment_init_$Init$_0(data, pos, limit, shareToken, owner, $this) {
    Segment.call($this);
    $this.v1j_1 = data;
    $this.w1j_1 = pos;
    $this.x1j_1 = limit;
    $this.y1j_1 = shareToken;
    $this.z1j_1 = owner;
    return $this;
  }
  function Segment_init_$Create$_0(data, pos, limit, shareToken, owner) {
    return Segment_init_$Init$_0(data, pos, limit, shareToken, owner, objectCreate(protoOf(Segment)));
  }
  function Companion() {
    this.a1m_1 = 8192;
    this.b1m_1 = 1024;
  }
  protoOf(Companion).c1m = function () {
    return Segment_init_$Create$();
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  protoOf(Segment).f1l = function () {
    var tmp1_safe_receiver = this.y1j_1;
    var tmp0_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.d1m();
    return tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
  };
  protoOf(Segment).i1k = function () {
    var tmp0_elvis_lhs = this.y1j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = SegmentPool_instance.e1m();
      this.y1j_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var t = tmp;
    var tmp_0 = this.w1j_1;
    var tmp_1 = this.x1j_1;
    // Inline function 'kotlin.also' call
    t.f1m();
    return Segment_init_$Create$_0(this.v1j_1, tmp_0, tmp_1, t, false);
  };
  protoOf(Segment).i1l = function () {
    var result = this.a1k_1;
    if (!(this.b1k_1 == null)) {
      ensureNotNull(this.b1k_1).a1k_1 = this.a1k_1;
    }
    if (!(this.a1k_1 == null)) {
      ensureNotNull(this.a1k_1).b1k_1 = this.b1k_1;
    }
    this.a1k_1 = null;
    this.b1k_1 = null;
    return result;
  };
  protoOf(Segment).j1k = function (segment) {
    segment.b1k_1 = this;
    segment.a1k_1 = this.a1k_1;
    if (!(this.a1k_1 == null)) {
      ensureNotNull(this.a1k_1).b1k_1 = segment;
    }
    this.a1k_1 = segment;
    return segment;
  };
  protoOf(Segment).g1l = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount > 0 && byteCount <= (this.x1j_1 - this.w1j_1 | 0))) {
      var message = 'byteCount out of range';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var prefix;
    if (byteCount >= 1024) {
      prefix = this.i1k();
    } else {
      prefix = SegmentPool_instance.z1k();
      var tmp1 = this.v1j_1;
      var tmp2 = prefix.v1j_1;
      var tmp3 = this.w1j_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.w1j_1 + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp3, endIndex);
    }
    prefix.x1j_1 = prefix.w1j_1 + byteCount | 0;
    this.w1j_1 = this.w1j_1 + byteCount | 0;
    if (!(this.b1k_1 == null)) {
      ensureNotNull(this.b1k_1).j1k(prefix);
    } else {
      prefix.a1k_1 = this;
      this.b1k_1 = prefix;
    }
    return prefix;
  };
  protoOf(Segment).k1k = function () {
    // Inline function 'kotlin.check' call
    if (!!(this.b1k_1 == null)) {
      var message = 'cannot compact';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!ensureNotNull(this.b1k_1).z1j_1)
      return this;
    var byteCount = this.x1j_1 - this.w1j_1 | 0;
    var availableByteCount = (8192 - ensureNotNull(this.b1k_1).x1j_1 | 0) + (ensureNotNull(this.b1k_1).f1l() ? 0 : ensureNotNull(this.b1k_1).w1j_1) | 0;
    if (byteCount > availableByteCount)
      return this;
    var predecessor = this.b1k_1;
    this.h1l(ensureNotNull(predecessor), byteCount);
    var successor = this.i1l();
    // Inline function 'kotlin.check' call
    if (!(successor == null)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    SegmentPool_instance.p1l(this);
    return predecessor;
  };
  protoOf(Segment).l1l = function (byte) {
    var _unary__edvuaz = this.x1j_1;
    this.x1j_1 = _unary__edvuaz + 1 | 0;
    this.v1j_1[_unary__edvuaz] = byte;
  };
  protoOf(Segment).n1l = function (short) {
    var data = this.v1j_1;
    var limit = this.x1j_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = toByte(short & 255);
    this.x1j_1 = limit;
  };
  protoOf(Segment).d1k = function () {
    var _unary__edvuaz = this.w1j_1;
    this.w1j_1 = _unary__edvuaz + 1 | 0;
    return this.v1j_1[_unary__edvuaz];
  };
  protoOf(Segment).f1k = function () {
    var data = this.v1j_1;
    var pos = this.w1j_1;
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp = (data[_unary__edvuaz] & 255) << 8;
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
    var s = toShort(tmp | tmp$ret$1);
    this.w1j_1 = pos;
    return s;
  };
  protoOf(Segment).h1l = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!sink.z1j_1) {
      var message = 'only owner can write';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if ((sink.x1j_1 + byteCount | 0) > 8192) {
      if (sink.f1l())
        throw IllegalArgumentException_init_$Create$_0();
      if (((sink.x1j_1 + byteCount | 0) - sink.w1j_1 | 0) > 8192)
        throw IllegalArgumentException_init_$Create$_0();
      var tmp1 = sink.v1j_1;
      var tmp2 = sink.v1j_1;
      var tmp3 = sink.w1j_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = sink.x1j_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp3, endIndex);
      sink.x1j_1 = sink.x1j_1 - sink.w1j_1 | 0;
      sink.w1j_1 = 0;
    }
    var tmp6 = this.v1j_1;
    var tmp7 = sink.v1j_1;
    var tmp8 = sink.x1j_1;
    var tmp9 = this.w1j_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.w1j_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp6;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, tmp7, tmp8, tmp9, endIndex_0);
    sink.x1j_1 = sink.x1j_1 + byteCount | 0;
    this.w1j_1 = this.w1j_1 + byteCount | 0;
  };
  protoOf(Segment).q1k = function (dst, dstStartOffset, dstEndOffset) {
    var len = dstEndOffset - dstStartOffset | 0;
    var tmp0 = this.v1j_1;
    var tmp3 = this.w1j_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.w1j_1 + len | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstStartOffset, tmp3, endIndex);
    this.w1j_1 = this.w1j_1 + len | 0;
  };
  protoOf(Segment).c1l = function (src, srcStartOffset, srcEndOffset) {
    var tmp1 = this.v1j_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.x1j_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp1, destinationOffset, srcStartOffset, srcEndOffset);
    this.x1j_1 = this.x1j_1 + (srcEndOffset - srcStartOffset | 0) | 0;
  };
  protoOf(Segment).t = function () {
    return this.x1j_1 - this.w1j_1 | 0;
  };
  protoOf(Segment).b1l = function () {
    return this.v1j_1.length - this.x1j_1 | 0;
  };
  protoOf(Segment).g1m = function (readOnly) {
    return this.v1j_1;
  };
  protoOf(Segment).n1k = function (index) {
    return this.v1j_1[this.w1j_1 + index | 0];
  };
  protoOf(Segment).h1m = function (index, value) {
    this.v1j_1[this.x1j_1 + index | 0] = value;
  };
  protoOf(Segment).i1m = function (index, b0, b1) {
    var d = this.v1j_1;
    var l = this.x1j_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
  };
  protoOf(Segment).j1m = function (index, b0, b1, b2) {
    var d = this.v1j_1;
    var l = this.x1j_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
  };
  protoOf(Segment).k1m = function (index, b0, b1, b2, b3) {
    var d = this.v1j_1;
    var l = this.x1j_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
    d[(l + index | 0) + 3 | 0] = b3;
  };
  function Segment() {
    this.w1j_1 = 0;
    this.x1j_1 = 0;
    this.y1j_1 = null;
    this.z1j_1 = false;
    this.a1k_1 = null;
    this.b1k_1 = null;
  }
  function SegmentCopyTracker() {
  }
  function isEmpty(_this__u8e3s4) {
    return _this__u8e3s4.t() === 0;
  }
  function AlwaysSharedCopyTracker() {
    AlwaysSharedCopyTracker_instance = this;
    SegmentCopyTracker.call(this);
  }
  protoOf(AlwaysSharedCopyTracker).d1m = function () {
    return true;
  };
  protoOf(AlwaysSharedCopyTracker).f1m = function () {
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
      while (_this__u8e3s4.q1j().t().h1(new Long(2147483647, 0)) < 0 && _this__u8e3s4.t1j(fetchSize)) {
        // Inline function 'kotlin.Long.times' call
        fetchSize = fetchSize.e3(toLong(2));
      }
      // Inline function 'kotlin.check' call
      if (!(_this__u8e3s4.q1j().t().h1(new Long(2147483647, 0)) < 0)) {
        var message = "Can't create an array of size " + _this__u8e3s4.q1j().t().toString();
        throw IllegalStateException_init_$Create$(toString(message));
      }
      arraySize = _this__u8e3s4.q1j().t().m1();
    } else {
      _this__u8e3s4.s1j(toLong(size));
    }
    var array = new Int8Array(arraySize);
    readTo(_this__u8e3s4.q1j(), array);
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
      var bytesRead = _this__u8e3s4.p1k(sink, offset, endIndex);
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
    if (!(byteCount_0.h1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return readByteArrayImpl(_this__u8e3s4, byteCount);
  }
  function readString(_this__u8e3s4) {
    _this__u8e3s4.t1j(new Long(-1, 2147483647));
    return commonReadUtf8(_this__u8e3s4.q1j(), _this__u8e3s4.q1j().t());
  }
  function readString_0(_this__u8e3s4, byteCount) {
    _this__u8e3s4.s1j(byteCount);
    return commonReadUtf8(_this__u8e3s4.q1j(), byteCount);
  }
  function readString_1(_this__u8e3s4) {
    return commonReadUtf8(_this__u8e3s4, _this__u8e3s4.t());
  }
  function commonReadUtf8(_this__u8e3s4, byteCount) {
    if (byteCount.equals(new Long(0, 0)))
      return '';
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = _this__u8e3s4.n1j_1;
    while (!(curr == null)) {
      get_SegmentReadContextImpl();
      if (toLong(curr.t()).h1(byteCount) >= 0) {
        var result = '';
        // Inline function 'kotlinx.io.unsafe.withData' call
        var tmp2 = curr.g1m(true);
        var tmp3 = curr.w1j_1;
        var tmp0 = curr.x1j_1;
        // Inline function 'kotlin.math.min' call
        var b = tmp3 + byteCount.m1() | 0;
        var tmp$ret$0 = Math.min(tmp0, b);
        result = commonToUtf8String(tmp2, tmp3, tmp$ret$0);
        _this__u8e3s4.o1k(byteCount);
        return result;
      }
      return commonToUtf8String(readByteArray_0(_this__u8e3s4, byteCount.m1()));
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
    var this_0 = _this__u8e3s4.q1j();
    var i = startIndex;
    while (i < endIndex) {
      var p0 = i;
      // Inline function 'kotlin.code' call
      var this_1 = charSequenceGet(string, p0);
      var c = Char__toInt_impl_vasixd(this_1);
      if (c < 128) {
        $l$block_0: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail = this_0.w1k(1);
          var ctx = get_SegmentWriteContextImpl();
          var segmentOffset = -i | 0;
          // Inline function 'kotlin.comparisons.minOf' call
          var b = i + tail.b1l() | 0;
          var runLimit = Math.min(endIndex, b);
          var _unary__edvuaz = i;
          i = _unary__edvuaz + 1 | 0;
          ctx.o1m(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
          $l$loop: while (i < runLimit) {
            var p0_0 = i;
            // Inline function 'kotlin.code' call
            var this_2 = charSequenceGet(string, p0_0);
            c = Char__toInt_impl_vasixd(this_2);
            if (c >= 128)
              break $l$loop;
            var _unary__edvuaz_0 = i;
            i = _unary__edvuaz_0 + 1 | 0;
            ctx.o1m(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
          }
          var bytesWritten = i + segmentOffset | 0;
          if (bytesWritten === 1) {
            tail.x1j_1 = tail.x1j_1 + bytesWritten | 0;
            var tmp = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp.p1j_1 = this_0.p1j_1.c3(toLong(bytesWritten));
            break $l$block_0;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten ? bytesWritten <= tail.b1l() : false)) {
            var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.b1l();
            throw IllegalStateException_init_$Create$(toString(message));
          }
          if (!(bytesWritten === 0)) {
            tail.x1j_1 = tail.x1j_1 + bytesWritten | 0;
            var tmp_0 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_0.p1j_1 = this_0.p1j_1.c3(toLong(bytesWritten));
            break $l$block_0;
          }
          if (isEmpty(tail)) {
            this_0.q1l();
          }
        }
      } else if (c < 2048) {
        $l$block_2: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_0 = this_0.w1k(2);
          get_SegmentWriteContextImpl().n1m(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
          var bytesWritten_0 = 2;
          if (bytesWritten_0 === 2) {
            tail_0.x1j_1 = tail_0.x1j_1 + bytesWritten_0 | 0;
            var tmp_1 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_1.p1j_1 = this_0.p1j_1.c3(toLong(bytesWritten_0));
            break $l$block_2;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.b1l() : false)) {
            var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.b1l();
            throw IllegalStateException_init_$Create$(toString(message_0));
          }
          if (!(bytesWritten_0 === 0)) {
            tail_0.x1j_1 = tail_0.x1j_1 + bytesWritten_0 | 0;
            var tmp_2 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_2.p1j_1 = this_0.p1j_1.c3(toLong(bytesWritten_0));
            break $l$block_2;
          }
          if (isEmpty(tail_0)) {
            this_0.q1l();
          }
        }
        i = i + 1 | 0;
      } else if (c < 55296 || c > 57343) {
        $l$block_4: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_1 = this_0.w1k(3);
          get_SegmentWriteContextImpl().m1m(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
          var bytesWritten_1 = 3;
          if (bytesWritten_1 === 3) {
            tail_1.x1j_1 = tail_1.x1j_1 + bytesWritten_1 | 0;
            var tmp_3 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_3.p1j_1 = this_0.p1j_1.c3(toLong(bytesWritten_1));
            break $l$block_4;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.b1l() : false)) {
            var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.b1l();
            throw IllegalStateException_init_$Create$(toString(message_1));
          }
          if (!(bytesWritten_1 === 0)) {
            tail_1.x1j_1 = tail_1.x1j_1 + bytesWritten_1 | 0;
            var tmp_4 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_4.p1j_1 = this_0.p1j_1.c3(toLong(bytesWritten_1));
            break $l$block_4;
          }
          if (isEmpty(tail_1)) {
            this_0.q1l();
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
          this_0.k1l(toByte(tmp$ret$26));
          i = i + 1 | 0;
        } else {
          var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
          $l$block_6: {
            // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
            var tail_2 = this_0.w1k(4);
            get_SegmentWriteContextImpl().l1m(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
            var bytesWritten_2 = 4;
            if (bytesWritten_2 === 4) {
              tail_2.x1j_1 = tail_2.x1j_1 + bytesWritten_2 | 0;
              var tmp_6 = this_0;
              // Inline function 'kotlin.Long.plus' call
              tmp_6.p1j_1 = this_0.p1j_1.c3(toLong(bytesWritten_2));
              break $l$block_6;
            }
            // Inline function 'kotlin.check' call
            if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.b1l() : false)) {
              var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.b1l();
              throw IllegalStateException_init_$Create$(toString(message_2));
            }
            if (!(bytesWritten_2 === 0)) {
              tail_2.x1j_1 = tail_2.x1j_1 + bytesWritten_2 | 0;
              var tmp_7 = this_0;
              // Inline function 'kotlin.Long.plus' call
              tmp_7.p1j_1 = this_0.p1j_1.c3(toLong(bytesWritten_2));
              break $l$block_6;
            }
            if (isEmpty(tail_2)) {
              this_0.q1l();
            }
          }
          i = i + 2 | 0;
        }
      }
    }
    _this__u8e3s4.g1k();
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
  protoOf(SegmentReadContextImpl$1).o1l = function (segment, offset) {
    return segment.n1k(offset);
  };
  function SegmentWriteContextImpl$1() {
  }
  protoOf(SegmentWriteContextImpl$1).o1m = function (segment, offset, value) {
    segment.h1m(offset, value);
  };
  protoOf(SegmentWriteContextImpl$1).n1m = function (segment, offset, b0, b1) {
    segment.i1m(offset, b0, b1);
  };
  protoOf(SegmentWriteContextImpl$1).m1m = function (segment, offset, b0, b1, b2) {
    segment.j1m(offset, b0, b1, b2);
  };
  protoOf(SegmentWriteContextImpl$1).l1m = function (segment, offset, b0, b1, b2, b3) {
    segment.k1m(offset, b0, b1, b2, b3);
  };
  function BufferIterationContextImpl$1() {
  }
  protoOf(BufferIterationContextImpl$1).o1l = function (segment, offset) {
    return get_SegmentReadContextImpl().o1l(segment, offset);
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
    this.x1k_1 = 0;
    this.y1k_1 = 0;
  }
  protoOf(SegmentPool).z1k = function () {
    return Companion_instance.c1m();
  };
  protoOf(SegmentPool).p1l = function (segment) {
  };
  protoOf(SegmentPool).e1m = function () {
    return AlwaysSharedCopyTracker_getInstance();
  };
  var SegmentPool_instance;
  function SegmentPool_getInstance() {
    return SegmentPool_instance;
  }
  //region block: post-declaration
  protoOf(Buffer).d1l = write$default;
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
