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
  var Long = kotlin_kotlin.$_$.cj;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var charArrayOf = kotlin_kotlin.$_$.kc;
  var protoOf = kotlin_kotlin.$_$.be;
  var toString = kotlin_kotlin.$_$.fe;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var toShort = kotlin_kotlin.$_$.ee;
  var ensureNotNull = kotlin_kotlin.$_$.ck;
  var toLong = kotlin_kotlin.$_$.de;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q1;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var VOID = kotlin_kotlin.$_$.j;
  var UnsafeByteStringOperations_instance = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.b;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var AutoCloseable = kotlin_kotlin.$_$.qi;
  var objectCreate = kotlin_kotlin.$_$.ae;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var arrayCopy = kotlin_kotlin.$_$.g7;
  var toByte = kotlin_kotlin.$_$.ce;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.e2;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  var initMetadataForInterface = kotlin_kotlin.$_$.bd;
  var charSequenceGet = kotlin_kotlin.$_$.mc;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.t3;
  var charArray = kotlin_kotlin.$_$.lc;
  var numberToChar = kotlin_kotlin.$_$.wd;
  var concatToString = kotlin_kotlin.$_$.of;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.w1;
  var captureStack = kotlin_kotlin.$_$.jc;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.y1;
  var Exception_init_$Init$_1 = kotlin_kotlin.$_$.a2;
  var Exception = kotlin_kotlin.$_$.zi;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(Source, 'Source', VOID, VOID, [AutoCloseable]);
  function write$default(source, startIndex, endIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? source.length : endIndex;
    var tmp;
    if ($super === VOID) {
      this.y1k(source, startIndex, endIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.y1k.call(this, source, startIndex, endIndex);
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
    if (startIndex.g1(new Long(0, 0)) < 0 || endIndex.g1(size) > 0) {
      throw IndexOutOfBoundsException_init_$Create$('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
    }
    if (startIndex.g1(endIndex) > 0) {
      throw IllegalArgumentException_init_$Create$('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
    }
  }
  function checkOffsetAndCount(size, offset, byteCount) {
    _init_properties__Util_kt__g8tcl9();
    if (offset.g1(new Long(0, 0)) < 0 || offset.g1(size) > 0 || size.c3(offset).g1(byteCount) < 0 || byteCount.g1(new Long(0, 0)) < 0) {
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
    this.l1j_1 = null;
    this.m1j_1 = null;
    this.n1j_1 = new Long(0, 0);
  }
  protoOf(Buffer).s = function () {
    return this.n1j_1;
  };
  protoOf(Buffer).o1j = function () {
    return this;
  };
  protoOf(Buffer).p1j = function () {
    return this.s().equals(new Long(0, 0));
  };
  protoOf(Buffer).q1j = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount.g1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.s().g1(byteCount) < 0) {
      throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + this.s().toString() + ', required: ' + byteCount.toString() + ')');
    }
  };
  protoOf(Buffer).r1j = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount.g1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount: ' + byteCount.toString() + ' < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.s().g1(byteCount) >= 0;
  };
  protoOf(Buffer).s1j = function () {
    var tmp0_elvis_lhs = this.l1j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, new Long(1, 0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.s();
    if (segmentSize === 0) {
      this.a1k();
      return this.s1j();
    }
    var v = segment.b1k();
    this.n1j_1 = this.n1j_1.c3(new Long(1, 0));
    if (segmentSize === 1) {
      this.a1k();
    }
    return v;
  };
  protoOf(Buffer).c1k = function () {
    var tmp0_elvis_lhs = this.l1j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, new Long(2, 0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.s();
    if (segmentSize < 2) {
      this.q1j(new Long(2, 0));
      if (segmentSize === 0) {
        this.a1k();
        return this.c1k();
      }
      // Inline function 'kotlinx.io.and' call
      var tmp_0 = (this.s1j() & 255) << 8;
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$1 = this.s1j() & 255;
      return toShort(tmp_0 | tmp$ret$1);
    }
    var v = segment.d1k();
    this.n1j_1 = this.n1j_1.c3(new Long(2, 0));
    if (segmentSize === 2) {
      this.a1k();
    }
    return v;
  };
  protoOf(Buffer).e1k = function () {
    return Unit_instance;
  };
  protoOf(Buffer).f1k = function (out, startIndex, endIndex) {
    checkBounds(this.s(), startIndex, endIndex);
    if (startIndex.equals(endIndex))
      return Unit_instance;
    var currentOffset = startIndex;
    var remainingByteCount = endIndex.c3(startIndex);
    out.n1j_1 = out.n1j_1.b3(remainingByteCount);
    var s = this.l1j_1;
    while (currentOffset.g1(toLong(ensureNotNull(s).v1j_1 - s.u1j_1 | 0)) >= 0) {
      currentOffset = currentOffset.c3(toLong(s.v1j_1 - s.u1j_1 | 0));
      s = s.y1j_1;
    }
    while (remainingByteCount.g1(new Long(0, 0)) > 0) {
      var copy = ensureNotNull(s).g1k();
      copy.u1j_1 = copy.u1j_1 + currentOffset.l1() | 0;
      var tmp = copy;
      var tmp0 = copy.u1j_1 + remainingByteCount.l1() | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = copy.v1j_1;
      tmp.v1j_1 = Math.min(tmp0, b);
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (out.l1j_1 == null) {
        out.l1j_1 = copy;
        out.m1j_1 = copy;
      } else if (false) {
        out.m1j_1 = ensureNotNull(out.m1j_1).h1k(copy).i1k();
        if (ensureNotNull(out.m1j_1).z1j_1 == null) {
          out.l1j_1 = out.m1j_1;
        }
      } else {
        out.m1j_1 = ensureNotNull(out.m1j_1).h1k(copy);
      }
      remainingByteCount = remainingByteCount.c3(toLong(copy.v1j_1 - copy.u1j_1 | 0));
      currentOffset = new Long(0, 0);
      s = s.y1j_1;
    }
  };
  protoOf(Buffer).j1k = function () {
    var result = this.s();
    if (result.equals(new Long(0, 0)))
      return new Long(0, 0);
    var tail = ensureNotNull(this.m1j_1);
    if (tail.v1j_1 < 8192 && tail.x1j_1) {
      result = result.c3(toLong(tail.v1j_1 - tail.u1j_1 | 0));
    }
    return result;
  };
  protoOf(Buffer).k1k = function (position) {
    if (position.g1(new Long(0, 0)) < 0 || position.g1(this.s()) >= 0) {
      throw IndexOutOfBoundsException_init_$Create$('position (' + position.toString() + ') is not within the range [0..size(' + this.s().toString() + '))');
    }
    if (position.equals(new Long(0, 0))) {
      return ensureNotNull(this.l1j_1).l1k(0);
    }
    // Inline function 'kotlinx.io.seek' call
    if (this.l1j_1 == null) {
      var offset = new Long(-1, -1);
      return ensureNotNull(null).l1k(position.c3(offset).l1());
    }
    if (this.s().c3(position).g1(position) < 0) {
      var s = this.m1j_1;
      var offset_0 = this.s();
      $l$loop: while (!(s == null) && offset_0.g1(position) > 0) {
        offset_0 = offset_0.c3(toLong(s.v1j_1 - s.u1j_1 | 0));
        if (offset_0.g1(position) <= 0)
          break $l$loop;
        s = s.z1j_1;
      }
      var tmp4 = s;
      var offset_1 = offset_0;
      return ensureNotNull(tmp4).l1k(position.c3(offset_1).l1());
    } else {
      var s_0 = this.l1j_1;
      var offset_2 = new Long(0, 0);
      $l$loop_0: while (!(s_0 == null)) {
        var tmp0 = offset_2;
        // Inline function 'kotlin.Long.plus' call
        var other = s_0.v1j_1 - s_0.u1j_1 | 0;
        var nextOffset = tmp0.b3(toLong(other));
        if (nextOffset.g1(position) > 0)
          break $l$loop_0;
        s_0 = s_0.y1j_1;
        offset_2 = nextOffset;
      }
      var tmp6 = s_0;
      var offset_3 = offset_2;
      return ensureNotNull(tmp6).l1k(position.c3(offset_3).l1());
    }
  };
  protoOf(Buffer).g2 = function () {
    return this.m1k(this.s());
  };
  protoOf(Buffer).m1k = function (byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount.g1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount.g1(new Long(0, 0)) > 0) {
      var tmp0_elvis_lhs = this.l1j_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException_init_$Create$_0('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      var tmp1 = remainingByteCount;
      // Inline function 'kotlinx.io.minOf' call
      var b = head.v1j_1 - head.u1j_1 | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = toLong(b);
      var toSkip = (tmp1.g1(b_0) <= 0 ? tmp1 : b_0).l1();
      this.n1j_1 = this.n1j_1.c3(toLong(toSkip));
      remainingByteCount = remainingByteCount.c3(toLong(toSkip));
      head.u1j_1 = head.u1j_1 + toSkip | 0;
      if (head.u1j_1 === head.v1j_1) {
        this.a1k();
      }
    }
  };
  protoOf(Buffer).n1k = function (sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    var tmp0_elvis_lhs = this.l1j_1;
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
    s.o1k(sink, startIndex, startIndex + toCopy | 0);
    this.n1j_1 = this.n1j_1.c3(toLong(toCopy));
    if (isEmpty(s)) {
      this.a1k();
    }
    return toCopy;
  };
  protoOf(Buffer).p1k = function (sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount.g1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.s().equals(new Long(0, 0)))
      return new Long(-1, -1);
    var bytesWritten = byteCount.g1(this.s()) > 0 ? this.s() : byteCount;
    sink.q1k(this, bytesWritten);
    return bytesWritten;
  };
  protoOf(Buffer).r1k = function (sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount.g1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.s().g1(byteCount) < 0) {
      sink.q1k(this, this.s());
      throw EOFException_init_$Create$_0('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.s().toString() + ' bytes were written.');
    }
    sink.q1k(this, byteCount);
  };
  protoOf(Buffer).s1k = function (sink) {
    var byteCount = this.s();
    if (byteCount.g1(new Long(0, 0)) > 0) {
      sink.q1k(this, byteCount);
    }
    return byteCount;
  };
  protoOf(Buffer).t1k = function () {
    return buffered(new PeekSource(this));
  };
  protoOf(Buffer).u1k = function (minimumCapacity) {
    // Inline function 'kotlin.require' call
    if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
      var message = 'unexpected capacity (' + minimumCapacity + '), should be in range [1, 8192]';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.m1j_1 == null) {
      var result = SegmentPool_instance.x1k();
      this.l1j_1 = result;
      this.m1j_1 = result;
      return result;
    }
    var t = ensureNotNull(this.m1j_1);
    if ((t.v1j_1 + minimumCapacity | 0) > 8192 || !t.x1j_1) {
      var newTail = t.h1k(SegmentPool_instance.x1k());
      this.m1j_1 = newTail;
      return newTail;
    }
    return t;
  };
  protoOf(Buffer).y1k = function (source, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = source.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    var currentOffset = startIndex;
    while (currentOffset < endIndex) {
      var tail = this.u1k(1);
      var tmp3 = endIndex - currentOffset | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = tail.z1k();
      var toCopy = Math.min(tmp3, b);
      tail.a1l(source, currentOffset, currentOffset + toCopy | 0);
      currentOffset = currentOffset + toCopy | 0;
    }
    var tmp = this;
    var tmp5 = this.n1j_1;
    // Inline function 'kotlin.Long.plus' call
    var other = endIndex - startIndex | 0;
    tmp.n1j_1 = tmp5.b3(toLong(other));
  };
  protoOf(Buffer).c1l = function (source, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount.g1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var remainingByteCount = byteCount;
    while (remainingByteCount.g1(new Long(0, 0)) > 0) {
      var read = source.p1k(this, remainingByteCount);
      if (read.equals(new Long(-1, -1))) {
        throw EOFException_init_$Create$_0('Source exhausted before reading ' + byteCount.toString() + ' bytes. ' + ('Only ' + byteCount.c3(remainingByteCount).toString() + ' were read.'));
      }
      remainingByteCount = remainingByteCount.c3(read);
    }
  };
  protoOf(Buffer).q1k = function (source, byteCount) {
    // Inline function 'kotlin.require' call
    if (!!(source === this)) {
      var message = 'source == this';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    checkOffsetAndCount(source.n1j_1, new Long(0, 0), byteCount);
    var remainingByteCount = byteCount;
    while (remainingByteCount.g1(new Long(0, 0)) > 0) {
      if (remainingByteCount.g1(toLong(ensureNotNull(source.l1j_1).s())) < 0) {
        var tail = this.m1j_1;
        var tmp;
        if (!(tail == null) && tail.x1j_1) {
          var tmp1 = remainingByteCount;
          // Inline function 'kotlin.Long.plus' call
          var other = tail.v1j_1;
          var tmp3 = tmp1.b3(toLong(other));
          // Inline function 'kotlin.Long.minus' call
          var other_0 = tail.d1l() ? 0 : tail.u1j_1;
          tmp = tmp3.c3(toLong(other_0)).g1(new Long(8192, 0)) <= 0;
        } else {
          tmp = false;
        }
        if (tmp) {
          ensureNotNull(source.l1j_1).f1l(tail, remainingByteCount.l1());
          source.n1j_1 = source.n1j_1.c3(remainingByteCount);
          this.n1j_1 = this.n1j_1.b3(remainingByteCount);
          return Unit_instance;
        } else {
          source.l1j_1 = ensureNotNull(source.l1j_1).e1l(remainingByteCount.l1());
        }
      }
      var segmentToMove = ensureNotNull(source.l1j_1);
      var movedByteCount = toLong(segmentToMove.s());
      source.l1j_1 = segmentToMove.g1l();
      if (source.l1j_1 == null) {
        source.m1j_1 = null;
      }
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (this.l1j_1 == null) {
        this.l1j_1 = segmentToMove;
        this.m1j_1 = segmentToMove;
      } else if (true) {
        this.m1j_1 = ensureNotNull(this.m1j_1).h1k(segmentToMove).i1k();
        if (ensureNotNull(this.m1j_1).z1j_1 == null) {
          this.l1j_1 = this.m1j_1;
        }
      } else {
        this.m1j_1 = ensureNotNull(this.m1j_1).h1k(segmentToMove);
      }
      source.n1j_1 = source.n1j_1.c3(movedByteCount);
      this.n1j_1 = this.n1j_1.b3(movedByteCount);
      remainingByteCount = remainingByteCount.c3(movedByteCount);
    }
  };
  protoOf(Buffer).h1l = function (source) {
    var totalBytesRead = new Long(0, 0);
    $l$loop: while (true) {
      var readCount = source.p1k(this, new Long(8192, 0));
      if (readCount.equals(new Long(-1, -1)))
        break $l$loop;
      totalBytesRead = totalBytesRead.b3(readCount);
    }
    return totalBytesRead;
  };
  protoOf(Buffer).i1l = function (byte) {
    this.u1k(1).j1l(byte);
    this.n1j_1 = this.n1j_1.b3(new Long(1, 0));
  };
  protoOf(Buffer).k1l = function (short) {
    this.u1k(2).l1l(short);
    this.n1j_1 = this.n1j_1.b3(new Long(2, 0));
  };
  protoOf(Buffer).y4 = function () {
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
    var len = (a.g1(b) <= 0 ? a : b).l1();
    var builder = StringBuilder_init_$Create$(imul(len, 2) + (this.s().g1(toLong(maxPrintableBytes)) > 0 ? 1 : 0) | 0);
    var bytesWritten = 0;
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = this.l1j_1;
    while (!(curr == null)) {
      var tmp4 = get_SegmentReadContextImpl();
      var segment = curr;
      var idx = 0;
      while (bytesWritten < len && idx < segment.s()) {
        var _unary__edvuaz = idx;
        idx = _unary__edvuaz + 1 | 0;
        var b_0 = tmp4.m1l(segment, _unary__edvuaz);
        bytesWritten = bytesWritten + 1 | 0;
        var tmp = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.shr' call
        var tmp$ret$2 = b_0 >> 4;
        var tmp_0 = builder.z8(tmp[tmp$ret$2 & 15]);
        var tmp_1 = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.and' call
        var tmp$ret$3 = b_0 & 15;
        tmp_0.z8(tmp_1[tmp$ret$3]);
      }
      curr = curr.y1j_1;
    }
    if (this.s().g1(toLong(maxPrintableBytes)) > 0) {
      builder.z8(_Char___init__impl__6a9atx(8230));
    }
    return 'Buffer(size=' + this.s().toString() + ' hex=' + builder.toString() + ')';
  };
  protoOf(Buffer).a1k = function () {
    var oldHead = ensureNotNull(this.l1j_1);
    var nextHead = oldHead.y1j_1;
    this.l1j_1 = nextHead;
    if (nextHead == null) {
      this.m1j_1 = null;
    } else {
      nextHead.z1j_1 = null;
    }
    oldHead.y1j_1 = null;
    SegmentPool_instance.n1l(oldHead);
  };
  protoOf(Buffer).o1l = function () {
    var oldTail = ensureNotNull(this.m1j_1);
    var newTail = oldTail.z1j_1;
    this.m1j_1 = newTail;
    if (newTail == null) {
      this.l1j_1 = null;
    } else {
      newTail.y1j_1 = null;
    }
    oldTail.z1j_1 = null;
    SegmentPool_instance.n1l(oldTail);
  };
  function readByteString(_this__u8e3s4, byteCount) {
    return UnsafeByteStringOperations_instance.k1j(readByteArray_0(_this__u8e3s4, byteCount));
  }
  function buffered(_this__u8e3s4) {
    return new RealSource(_this__u8e3s4);
  }
  function PeekSource(upstream) {
    this.p1l_1 = upstream;
    this.q1l_1 = this.p1l_1.o1j();
    this.r1l_1 = this.q1l_1.l1j_1;
    var tmp = this;
    var tmp0_safe_receiver = this.q1l_1.l1j_1;
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1j_1;
    tmp.s1l_1 = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
    this.t1l_1 = false;
    this.u1l_1 = new Long(0, 0);
  }
  protoOf(PeekSource).p1k = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!!this.t1l_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(byteCount.g1(new Long(0, 0)) >= 0)) {
      var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    if (!(this.r1l_1 == null || (this.r1l_1 === this.q1l_1.l1j_1 && this.s1l_1 === ensureNotNull(this.q1l_1.l1j_1).u1j_1))) {
      var message_1 = 'Peek source is invalid because upstream source was used';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    if (byteCount.equals(new Long(0, 0)))
      return new Long(0, 0);
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$7 = this.u1l_1.b3(toLong(1));
    if (!this.p1l_1.r1j(tmp$ret$7))
      return new Long(-1, -1);
    if (this.r1l_1 == null && !(this.q1l_1.l1j_1 == null)) {
      this.r1l_1 = this.q1l_1.l1j_1;
      this.s1l_1 = ensureNotNull(this.q1l_1.l1j_1).u1j_1;
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.q1l_1.s().c3(this.u1l_1);
    var toCopy = byteCount.g1(b) <= 0 ? byteCount : b;
    this.q1l_1.f1k(sink, this.u1l_1, this.u1l_1.b3(toCopy));
    this.u1l_1 = this.u1l_1.b3(toCopy);
    return toCopy;
  };
  protoOf(PeekSource).y4 = function () {
    this.t1l_1 = true;
  };
  function RealSource(source) {
    this.v1l_1 = source;
    this.w1l_1 = false;
    this.x1l_1 = new Buffer();
  }
  protoOf(RealSource).o1j = function () {
    return this.x1l_1;
  };
  protoOf(RealSource).p1k = function (sink, byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.w1l_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount.g1(new Long(0, 0)) >= 0)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (this.x1l_1.s().equals(new Long(0, 0))) {
      var read = this.v1l_1.p1k(this.x1l_1, new Long(8192, 0));
      if (read.equals(new Long(-1, -1)))
        return new Long(-1, -1);
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.x1l_1.s();
    var toRead = byteCount.g1(b) <= 0 ? byteCount : b;
    return this.x1l_1.p1k(sink, toRead);
  };
  protoOf(RealSource).p1j = function () {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.w1l_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.x1l_1.p1j() && this.v1l_1.p1k(this.x1l_1, new Long(8192, 0)).equals(new Long(-1, -1));
  };
  protoOf(RealSource).q1j = function (byteCount) {
    if (!this.r1j(byteCount))
      throw EOFException_init_$Create$_0("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
  };
  protoOf(RealSource).r1j = function (byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.w1l_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(byteCount.g1(new Long(0, 0)) >= 0)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    while (this.x1l_1.s().g1(byteCount) < 0) {
      if (this.v1l_1.p1k(this.x1l_1, new Long(8192, 0)).equals(new Long(-1, -1)))
        return false;
    }
    return true;
  };
  protoOf(RealSource).s1j = function () {
    this.q1j(new Long(1, 0));
    return this.x1l_1.s1j();
  };
  protoOf(RealSource).n1k = function (sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
    if (this.x1l_1.s().equals(new Long(0, 0))) {
      var read = this.v1l_1.p1k(this.x1l_1, new Long(8192, 0));
      if (read.equals(new Long(-1, -1)))
        return -1;
    }
    var tmp3 = endIndex - startIndex | 0;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.x1l_1.s();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = toLong(tmp3);
    var toRead = (a.g1(b) <= 0 ? a : b).l1();
    return this.x1l_1.n1k(sink, startIndex, startIndex + toRead | 0);
  };
  protoOf(RealSource).r1k = function (sink, byteCount) {
    try {
      this.q1j(byteCount);
    } catch ($p) {
      if ($p instanceof EOFException) {
        var e = $p;
        sink.q1k(this.x1l_1, this.x1l_1.s());
        throw e;
      } else {
        throw $p;
      }
    }
    this.x1l_1.r1k(sink, byteCount);
  };
  protoOf(RealSource).s1k = function (sink) {
    var totalBytesWritten = new Long(0, 0);
    while (!this.v1l_1.p1k(this.x1l_1, new Long(8192, 0)).equals(new Long(-1, -1))) {
      var emitByteCount = this.x1l_1.j1k();
      if (emitByteCount.g1(new Long(0, 0)) > 0) {
        totalBytesWritten = totalBytesWritten.b3(emitByteCount);
        sink.q1k(this.x1l_1, emitByteCount);
      }
    }
    if (this.x1l_1.s().g1(new Long(0, 0)) > 0) {
      totalBytesWritten = totalBytesWritten.b3(this.x1l_1.s());
      sink.q1k(this.x1l_1, this.x1l_1.s());
    }
    return totalBytesWritten;
  };
  protoOf(RealSource).c1k = function () {
    this.q1j(new Long(2, 0));
    return this.x1l_1.c1k();
  };
  protoOf(RealSource).t1k = function () {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.w1l_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return buffered(new PeekSource(this));
  };
  protoOf(RealSource).y4 = function () {
    if (this.w1l_1)
      return Unit_instance;
    this.w1l_1 = true;
    this.v1l_1.y4();
    this.x1l_1.g2();
  };
  protoOf(RealSource).toString = function () {
    return 'buffered(' + toString(this.v1l_1) + ')';
  };
  function Segment_init_$Init$($this) {
    Segment.call($this);
    $this.t1j_1 = new Int8Array(8192);
    $this.x1j_1 = true;
    $this.w1j_1 = null;
    return $this;
  }
  function Segment_init_$Create$() {
    return Segment_init_$Init$(objectCreate(protoOf(Segment)));
  }
  function Segment_init_$Init$_0(data, pos, limit, shareToken, owner, $this) {
    Segment.call($this);
    $this.t1j_1 = data;
    $this.u1j_1 = pos;
    $this.v1j_1 = limit;
    $this.w1j_1 = shareToken;
    $this.x1j_1 = owner;
    return $this;
  }
  function Segment_init_$Create$_0(data, pos, limit, shareToken, owner) {
    return Segment_init_$Init$_0(data, pos, limit, shareToken, owner, objectCreate(protoOf(Segment)));
  }
  function Companion() {
    this.y1l_1 = 8192;
    this.z1l_1 = 1024;
  }
  protoOf(Companion).a1m = function () {
    return Segment_init_$Create$();
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  protoOf(Segment).d1l = function () {
    var tmp1_safe_receiver = this.w1j_1;
    var tmp0_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b1m();
    return tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
  };
  protoOf(Segment).g1k = function () {
    var tmp0_elvis_lhs = this.w1j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = SegmentPool_instance.c1m();
      this.w1j_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var t = tmp;
    var tmp_0 = this.u1j_1;
    var tmp_1 = this.v1j_1;
    // Inline function 'kotlin.also' call
    t.d1m();
    return Segment_init_$Create$_0(this.t1j_1, tmp_0, tmp_1, t, false);
  };
  protoOf(Segment).g1l = function () {
    var result = this.y1j_1;
    if (!(this.z1j_1 == null)) {
      ensureNotNull(this.z1j_1).y1j_1 = this.y1j_1;
    }
    if (!(this.y1j_1 == null)) {
      ensureNotNull(this.y1j_1).z1j_1 = this.z1j_1;
    }
    this.y1j_1 = null;
    this.z1j_1 = null;
    return result;
  };
  protoOf(Segment).h1k = function (segment) {
    segment.z1j_1 = this;
    segment.y1j_1 = this.y1j_1;
    if (!(this.y1j_1 == null)) {
      ensureNotNull(this.y1j_1).z1j_1 = segment;
    }
    this.y1j_1 = segment;
    return segment;
  };
  protoOf(Segment).e1l = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount > 0 && byteCount <= (this.v1j_1 - this.u1j_1 | 0))) {
      var message = 'byteCount out of range';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var prefix;
    if (byteCount >= 1024) {
      prefix = this.g1k();
    } else {
      prefix = SegmentPool_instance.x1k();
      var tmp1 = this.t1j_1;
      var tmp2 = prefix.t1j_1;
      var tmp3 = this.u1j_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.u1j_1 + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp3, endIndex);
    }
    prefix.v1j_1 = prefix.u1j_1 + byteCount | 0;
    this.u1j_1 = this.u1j_1 + byteCount | 0;
    if (!(this.z1j_1 == null)) {
      ensureNotNull(this.z1j_1).h1k(prefix);
    } else {
      prefix.y1j_1 = this;
      this.z1j_1 = prefix;
    }
    return prefix;
  };
  protoOf(Segment).i1k = function () {
    // Inline function 'kotlin.check' call
    if (!!(this.z1j_1 == null)) {
      var message = 'cannot compact';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!ensureNotNull(this.z1j_1).x1j_1)
      return this;
    var byteCount = this.v1j_1 - this.u1j_1 | 0;
    var availableByteCount = (8192 - ensureNotNull(this.z1j_1).v1j_1 | 0) + (ensureNotNull(this.z1j_1).d1l() ? 0 : ensureNotNull(this.z1j_1).u1j_1) | 0;
    if (byteCount > availableByteCount)
      return this;
    var predecessor = this.z1j_1;
    this.f1l(ensureNotNull(predecessor), byteCount);
    var successor = this.g1l();
    // Inline function 'kotlin.check' call
    if (!(successor == null)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    SegmentPool_instance.n1l(this);
    return predecessor;
  };
  protoOf(Segment).j1l = function (byte) {
    var _unary__edvuaz = this.v1j_1;
    this.v1j_1 = _unary__edvuaz + 1 | 0;
    this.t1j_1[_unary__edvuaz] = byte;
  };
  protoOf(Segment).l1l = function (short) {
    var data = this.t1j_1;
    var limit = this.v1j_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = toByte(short & 255);
    this.v1j_1 = limit;
  };
  protoOf(Segment).b1k = function () {
    var _unary__edvuaz = this.u1j_1;
    this.u1j_1 = _unary__edvuaz + 1 | 0;
    return this.t1j_1[_unary__edvuaz];
  };
  protoOf(Segment).d1k = function () {
    var data = this.t1j_1;
    var pos = this.u1j_1;
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp = (data[_unary__edvuaz] & 255) << 8;
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
    var s = toShort(tmp | tmp$ret$1);
    this.u1j_1 = pos;
    return s;
  };
  protoOf(Segment).f1l = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!sink.x1j_1) {
      var message = 'only owner can write';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if ((sink.v1j_1 + byteCount | 0) > 8192) {
      if (sink.d1l())
        throw IllegalArgumentException_init_$Create$_0();
      if (((sink.v1j_1 + byteCount | 0) - sink.u1j_1 | 0) > 8192)
        throw IllegalArgumentException_init_$Create$_0();
      var tmp1 = sink.t1j_1;
      var tmp2 = sink.t1j_1;
      var tmp3 = sink.u1j_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = sink.v1j_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp3, endIndex);
      sink.v1j_1 = sink.v1j_1 - sink.u1j_1 | 0;
      sink.u1j_1 = 0;
    }
    var tmp6 = this.t1j_1;
    var tmp7 = sink.t1j_1;
    var tmp8 = sink.v1j_1;
    var tmp9 = this.u1j_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.u1j_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp6;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, tmp7, tmp8, tmp9, endIndex_0);
    sink.v1j_1 = sink.v1j_1 + byteCount | 0;
    this.u1j_1 = this.u1j_1 + byteCount | 0;
  };
  protoOf(Segment).o1k = function (dst, dstStartOffset, dstEndOffset) {
    var len = dstEndOffset - dstStartOffset | 0;
    var tmp0 = this.t1j_1;
    var tmp3 = this.u1j_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.u1j_1 + len | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstStartOffset, tmp3, endIndex);
    this.u1j_1 = this.u1j_1 + len | 0;
  };
  protoOf(Segment).a1l = function (src, srcStartOffset, srcEndOffset) {
    var tmp1 = this.t1j_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.v1j_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp1, destinationOffset, srcStartOffset, srcEndOffset);
    this.v1j_1 = this.v1j_1 + (srcEndOffset - srcStartOffset | 0) | 0;
  };
  protoOf(Segment).s = function () {
    return this.v1j_1 - this.u1j_1 | 0;
  };
  protoOf(Segment).z1k = function () {
    return this.t1j_1.length - this.v1j_1 | 0;
  };
  protoOf(Segment).e1m = function (readOnly) {
    return this.t1j_1;
  };
  protoOf(Segment).l1k = function (index) {
    return this.t1j_1[this.u1j_1 + index | 0];
  };
  protoOf(Segment).f1m = function (index, value) {
    this.t1j_1[this.v1j_1 + index | 0] = value;
  };
  protoOf(Segment).g1m = function (index, b0, b1) {
    var d = this.t1j_1;
    var l = this.v1j_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
  };
  protoOf(Segment).h1m = function (index, b0, b1, b2) {
    var d = this.t1j_1;
    var l = this.v1j_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
  };
  protoOf(Segment).i1m = function (index, b0, b1, b2, b3) {
    var d = this.t1j_1;
    var l = this.v1j_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
    d[(l + index | 0) + 3 | 0] = b3;
  };
  function Segment() {
    this.u1j_1 = 0;
    this.v1j_1 = 0;
    this.w1j_1 = null;
    this.x1j_1 = false;
    this.y1j_1 = null;
    this.z1j_1 = null;
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
  protoOf(AlwaysSharedCopyTracker).b1m = function () {
    return true;
  };
  protoOf(AlwaysSharedCopyTracker).d1m = function () {
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
      while (_this__u8e3s4.o1j().s().g1(new Long(2147483647, 0)) < 0 && _this__u8e3s4.r1j(fetchSize)) {
        // Inline function 'kotlin.Long.times' call
        fetchSize = fetchSize.d3(toLong(2));
      }
      // Inline function 'kotlin.check' call
      if (!(_this__u8e3s4.o1j().s().g1(new Long(2147483647, 0)) < 0)) {
        var message = "Can't create an array of size " + _this__u8e3s4.o1j().s().toString();
        throw IllegalStateException_init_$Create$(toString(message));
      }
      arraySize = _this__u8e3s4.o1j().s().l1();
    } else {
      _this__u8e3s4.q1j(toLong(size));
    }
    var array = new Int8Array(arraySize);
    readTo(_this__u8e3s4.o1j(), array);
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
      var bytesRead = _this__u8e3s4.n1k(sink, offset, endIndex);
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
    if (!(byteCount_0.g1(new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return readByteArrayImpl(_this__u8e3s4, byteCount);
  }
  function readString(_this__u8e3s4) {
    _this__u8e3s4.r1j(new Long(-1, 2147483647));
    return commonReadUtf8(_this__u8e3s4.o1j(), _this__u8e3s4.o1j().s());
  }
  function readString_0(_this__u8e3s4, byteCount) {
    _this__u8e3s4.q1j(byteCount);
    return commonReadUtf8(_this__u8e3s4.o1j(), byteCount);
  }
  function readString_1(_this__u8e3s4) {
    return commonReadUtf8(_this__u8e3s4, _this__u8e3s4.s());
  }
  function commonReadUtf8(_this__u8e3s4, byteCount) {
    if (byteCount.equals(new Long(0, 0)))
      return '';
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    var curr = _this__u8e3s4.l1j_1;
    while (!(curr == null)) {
      get_SegmentReadContextImpl();
      if (toLong(curr.s()).g1(byteCount) >= 0) {
        var result = '';
        // Inline function 'kotlinx.io.unsafe.withData' call
        var tmp2 = curr.e1m(true);
        var tmp3 = curr.u1j_1;
        var tmp0 = curr.v1j_1;
        // Inline function 'kotlin.math.min' call
        var b = tmp3 + byteCount.l1() | 0;
        var tmp$ret$0 = Math.min(tmp0, b);
        result = commonToUtf8String(tmp2, tmp3, tmp$ret$0);
        _this__u8e3s4.m1k(byteCount);
        return result;
      }
      return commonToUtf8String(readByteArray_0(_this__u8e3s4, byteCount.l1()));
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
    var this_0 = _this__u8e3s4.o1j();
    var i = startIndex;
    while (i < endIndex) {
      var p0 = i;
      // Inline function 'kotlin.code' call
      var this_1 = charSequenceGet(string, p0);
      var c = Char__toInt_impl_vasixd(this_1);
      if (c < 128) {
        $l$block_0: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail = this_0.u1k(1);
          var ctx = get_SegmentWriteContextImpl();
          var segmentOffset = -i | 0;
          // Inline function 'kotlin.comparisons.minOf' call
          var b = i + tail.z1k() | 0;
          var runLimit = Math.min(endIndex, b);
          var _unary__edvuaz = i;
          i = _unary__edvuaz + 1 | 0;
          ctx.m1m(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
          $l$loop: while (i < runLimit) {
            var p0_0 = i;
            // Inline function 'kotlin.code' call
            var this_2 = charSequenceGet(string, p0_0);
            c = Char__toInt_impl_vasixd(this_2);
            if (c >= 128)
              break $l$loop;
            var _unary__edvuaz_0 = i;
            i = _unary__edvuaz_0 + 1 | 0;
            ctx.m1m(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
          }
          var bytesWritten = i + segmentOffset | 0;
          if (bytesWritten === 1) {
            tail.v1j_1 = tail.v1j_1 + bytesWritten | 0;
            var tmp = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp.n1j_1 = this_0.n1j_1.b3(toLong(bytesWritten));
            break $l$block_0;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten ? bytesWritten <= tail.z1k() : false)) {
            var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.z1k();
            throw IllegalStateException_init_$Create$(toString(message));
          }
          if (!(bytesWritten === 0)) {
            tail.v1j_1 = tail.v1j_1 + bytesWritten | 0;
            var tmp_0 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_0.n1j_1 = this_0.n1j_1.b3(toLong(bytesWritten));
            break $l$block_0;
          }
          if (isEmpty(tail)) {
            this_0.o1l();
          }
        }
      } else if (c < 2048) {
        $l$block_2: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_0 = this_0.u1k(2);
          get_SegmentWriteContextImpl().l1m(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
          var bytesWritten_0 = 2;
          if (bytesWritten_0 === 2) {
            tail_0.v1j_1 = tail_0.v1j_1 + bytesWritten_0 | 0;
            var tmp_1 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_1.n1j_1 = this_0.n1j_1.b3(toLong(bytesWritten_0));
            break $l$block_2;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.z1k() : false)) {
            var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.z1k();
            throw IllegalStateException_init_$Create$(toString(message_0));
          }
          if (!(bytesWritten_0 === 0)) {
            tail_0.v1j_1 = tail_0.v1j_1 + bytesWritten_0 | 0;
            var tmp_2 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_2.n1j_1 = this_0.n1j_1.b3(toLong(bytesWritten_0));
            break $l$block_2;
          }
          if (isEmpty(tail_0)) {
            this_0.o1l();
          }
        }
        i = i + 1 | 0;
      } else if (c < 55296 || c > 57343) {
        $l$block_4: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_1 = this_0.u1k(3);
          get_SegmentWriteContextImpl().k1m(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
          var bytesWritten_1 = 3;
          if (bytesWritten_1 === 3) {
            tail_1.v1j_1 = tail_1.v1j_1 + bytesWritten_1 | 0;
            var tmp_3 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_3.n1j_1 = this_0.n1j_1.b3(toLong(bytesWritten_1));
            break $l$block_4;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.z1k() : false)) {
            var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.z1k();
            throw IllegalStateException_init_$Create$(toString(message_1));
          }
          if (!(bytesWritten_1 === 0)) {
            tail_1.v1j_1 = tail_1.v1j_1 + bytesWritten_1 | 0;
            var tmp_4 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_4.n1j_1 = this_0.n1j_1.b3(toLong(bytesWritten_1));
            break $l$block_4;
          }
          if (isEmpty(tail_1)) {
            this_0.o1l();
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
          this_0.i1l(toByte(tmp$ret$26));
          i = i + 1 | 0;
        } else {
          var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
          $l$block_6: {
            // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
            var tail_2 = this_0.u1k(4);
            get_SegmentWriteContextImpl().j1m(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
            var bytesWritten_2 = 4;
            if (bytesWritten_2 === 4) {
              tail_2.v1j_1 = tail_2.v1j_1 + bytesWritten_2 | 0;
              var tmp_6 = this_0;
              // Inline function 'kotlin.Long.plus' call
              tmp_6.n1j_1 = this_0.n1j_1.b3(toLong(bytesWritten_2));
              break $l$block_6;
            }
            // Inline function 'kotlin.check' call
            if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.z1k() : false)) {
              var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.z1k();
              throw IllegalStateException_init_$Create$(toString(message_2));
            }
            if (!(bytesWritten_2 === 0)) {
              tail_2.v1j_1 = tail_2.v1j_1 + bytesWritten_2 | 0;
              var tmp_7 = this_0;
              // Inline function 'kotlin.Long.plus' call
              tmp_7.n1j_1 = this_0.n1j_1.b3(toLong(bytesWritten_2));
              break $l$block_6;
            }
            if (isEmpty(tail_2)) {
              this_0.o1l();
            }
          }
          i = i + 2 | 0;
        }
      }
    }
    _this__u8e3s4.e1k();
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
  protoOf(SegmentReadContextImpl$1).m1l = function (segment, offset) {
    return segment.l1k(offset);
  };
  function SegmentWriteContextImpl$1() {
  }
  protoOf(SegmentWriteContextImpl$1).m1m = function (segment, offset, value) {
    segment.f1m(offset, value);
  };
  protoOf(SegmentWriteContextImpl$1).l1m = function (segment, offset, b0, b1) {
    segment.g1m(offset, b0, b1);
  };
  protoOf(SegmentWriteContextImpl$1).k1m = function (segment, offset, b0, b1, b2) {
    segment.h1m(offset, b0, b1, b2);
  };
  protoOf(SegmentWriteContextImpl$1).j1m = function (segment, offset, b0, b1, b2, b3) {
    segment.i1m(offset, b0, b1, b2, b3);
  };
  function BufferIterationContextImpl$1() {
  }
  protoOf(BufferIterationContextImpl$1).m1l = function (segment, offset) {
    return get_SegmentReadContextImpl().m1l(segment, offset);
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
    this.v1k_1 = 0;
    this.w1k_1 = 0;
  }
  protoOf(SegmentPool).x1k = function () {
    return Companion_instance.a1m();
  };
  protoOf(SegmentPool).n1l = function (segment) {
  };
  protoOf(SegmentPool).c1m = function () {
    return AlwaysSharedCopyTracker_getInstance();
  };
  var SegmentPool_instance;
  function SegmentPool_getInstance() {
    return SegmentPool_instance;
  }
  //region block: post-declaration
  protoOf(Buffer).b1l = write$default;
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
