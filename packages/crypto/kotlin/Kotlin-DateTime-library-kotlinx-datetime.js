(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    globalThis['Kotlin-DateTime-library-kotlinx-datetime'] = factory(typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined' ? {} : globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['@js-joda/core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Instant = $module$_js_joda_core_gcv2k.Instant;
  var Clock = $module$_js_joda_core_gcv2k.Clock;
  var LocalDate = $module$_js_joda_core_gcv2k.LocalDate;
  var LocalDateTime = $module$_js_joda_core_gcv2k.LocalDateTime;
  var LocalTime = $module$_js_joda_core_gcv2k.LocalTime;
  var ZoneOffset = $module$_js_joda_core_gcv2k.ZoneOffset;
  var ZoneId = $module$_js_joda_core_gcv2k.ZoneId;
  var ChronoField = $module$_js_joda_core_gcv2k.ChronoField;
  var DateTimeFormatterBuilder = $module$_js_joda_core_gcv2k.DateTimeFormatterBuilder;
  var ResolverStyle = $module$_js_joda_core_gcv2k.ResolverStyle;
  var protoOf = kotlin_kotlin.$_$.pc;
  var initMetadataForObject = kotlin_kotlin.$_$.rb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.mb;
  var Long = kotlin_kotlin.$_$.ng;
  var toString = kotlin_kotlin.$_$.tc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var Unit_instance = kotlin_kotlin.$_$.v5;
  var toLong = kotlin_kotlin.$_$.rc;
  var initMetadataForClass = kotlin_kotlin.$_$.lb;
  var VOID = kotlin_kotlin.$_$.j;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.x1;
  var objectCreate = kotlin_kotlin.$_$.oc;
  var captureStack = kotlin_kotlin.$_$.xa;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.z1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.v1;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.b2;
  var IllegalArgumentException = kotlin_kotlin.$_$.lg;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.o2;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.n2;
  var RuntimeException_init_$Init$_1 = kotlin_kotlin.$_$.r2;
  var RuntimeException = kotlin_kotlin.$_$.sg;
  var getStringHashCode = kotlin_kotlin.$_$.jb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a3;
  var ensureNotNull = kotlin_kotlin.$_$.lh;
  var ArithmeticException = kotlin_kotlin.$_$.ag;
  var THROW_CCE = kotlin_kotlin.$_$.tg;
  var KMutableProperty1 = kotlin_kotlin.$_$.ed;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ib;
  var KMutableProperty0 = kotlin_kotlin.$_$.dd;
  var Enum = kotlin_kotlin.$_$.ig;
  var initMetadataForInterface = kotlin_kotlin.$_$.pb;
  var toString_0 = kotlin_kotlin.$_$.h3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var isInterface = kotlin_kotlin.$_$.ac;
  var isArray = kotlin_kotlin.$_$.sb;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var hashCode = kotlin_kotlin.$_$.kb;
  var listOf = kotlin_kotlin.$_$.k8;
  var get_indices = kotlin_kotlin.$_$.b8;
  var charSequenceLength = kotlin_kotlin.$_$.bb;
  var joinToString = kotlin_kotlin.$_$.c8;
  var equals = kotlin_kotlin.$_$.fb;
  var getBooleanHashCode = kotlin_kotlin.$_$.hb;
  var KProperty0 = kotlin_kotlin.$_$.fd;
  var lazy = kotlin_kotlin.$_$.sh;
  var padStart = kotlin_kotlin.$_$.je;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var getOrNull = kotlin_kotlin.$_$.w7;
  var listOf_0 = kotlin_kotlin.$_$.j8;
  var emptyList = kotlin_kotlin.$_$.l7;
  var toString_1 = kotlin_kotlin.$_$.yh;
  var charSequenceGet = kotlin_kotlin.$_$.ab;
  var get_lastIndex = kotlin_kotlin.$_$.ee;
  var toSet = kotlin_kotlin.$_$.t9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r6;
  var distinct = kotlin_kotlin.$_$.i7;
  var to = kotlin_kotlin.$_$.ai;
  var single = kotlin_kotlin.$_$.b9;
  var Collection = kotlin_kotlin.$_$.x5;
  var charSequenceSubSequence = kotlin_kotlin.$_$.cb;
  var numberRangeToNumber = kotlin_kotlin.$_$.jc;
  var mutableListOf = kotlin_kotlin.$_$.o8;
  var removeLastOrNull = kotlin_kotlin.$_$.v8;
  var sortWith = kotlin_kotlin.$_$.d9;
  var FunctionAdapter = kotlin_kotlin.$_$.ta;
  var Comparator = kotlin_kotlin.$_$.fg;
  var compareValues = kotlin_kotlin.$_$.x9;
  var Exception = kotlin_kotlin.$_$.kg;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.l1;
  var joinTo = kotlin_kotlin.$_$.d8;
  var plus = kotlin_kotlin.$_$.s8;
  var toMutableList = kotlin_kotlin.$_$.q9;
  var addAll = kotlin_kotlin.$_$.k6;
  var firstOrNull = kotlin_kotlin.$_$.r7;
  var drop = kotlin_kotlin.$_$.k7;
  var repeat = kotlin_kotlin.$_$.ne;
  var sortedWith = kotlin_kotlin.$_$.e9;
  var binarySearch = kotlin_kotlin.$_$.o6;
  var startsWith = kotlin_kotlin.$_$.we;
  var checkCountOverflow = kotlin_kotlin.$_$.q6;
  var compareTo = kotlin_kotlin.$_$.db;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var removePrefix = kotlin_kotlin.$_$.ke;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var Comparable = kotlin_kotlin.$_$.eg;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var numberToLong = kotlin_kotlin.$_$.nc;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.c3;
  var contains = kotlin_kotlin.$_$.pd;
  var indexOf = kotlin_kotlin.$_$.ae;
  var isCharSequence = kotlin_kotlin.$_$.wb;
  var removeRange = kotlin_kotlin.$_$.le;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var getKClass = kotlin_kotlin.$_$.g;
  var arrayOf = kotlin_kotlin.$_$.hh;
  var createKType = kotlin_kotlin.$_$.d;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.o;
  var lazy_0 = kotlin_kotlin.$_$.rh;
  var MissingFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.k5;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var KProperty1 = kotlin_kotlin.$_$.gd;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var enumEntries = kotlin_kotlin.$_$.ra;
  var _Duration___get_inWholeSeconds__impl__hpy7b3 = kotlin_kotlin.$_$.v2;
  var _Duration___get_nanosecondsComponent__impl__nh19kq = kotlin_kotlin.$_$.y2;
  var Duration__isPositive_impl_tvkkt2 = kotlin_kotlin.$_$.x2;
  var numberToInt = kotlin_kotlin.$_$.mc;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.th;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.w1;
  var numberToDouble = kotlin_kotlin.$_$.lc;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(System, 'System');
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(DateTimeUnit, 'DateTimeUnit', VOID, VOID, VOID, VOID, VOID, {0: DateTimeUnitSerializer_getInstance});
  initMetadataForClass(TimeBased, 'TimeBased', VOID, DateTimeUnit, VOID, VOID, VOID, {0: TimeBasedDateTimeUnitSerializer_getInstance});
  initMetadataForClass(DateBased, 'DateBased', VOID, DateTimeUnit, VOID, VOID, VOID, {0: DateBasedDateTimeUnitSerializer_getInstance});
  initMetadataForClass(DayBased, 'DayBased', VOID, DateBased, VOID, VOID, VOID, {0: DayBasedDateTimeUnitSerializer_getInstance});
  initMetadataForClass(MonthBased, 'MonthBased', VOID, DateBased, VOID, VOID, VOID, {0: MonthBasedDateTimeUnitSerializer_getInstance});
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(DateTimeFormatException, 'DateTimeFormatException', DateTimeFormatException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(DateTimeArithmeticException, 'DateTimeArithmeticException', DateTimeArithmeticException_init_$Create$, RuntimeException);
  initMetadataForClass(IllegalTimeZoneException, 'IllegalTimeZoneException', IllegalTimeZoneException_init_$Create$, IllegalArgumentException);
  function set_fractionOfSecond(value) {
    this.r5s(value == null ? null : value.y5y(9));
  }
  function get_fractionOfSecond() {
    var tmp0_safe_receiver = this.s5s();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = new DecimalFraction(tmp0_safe_receiver, 9);
    }
    return tmp;
  }
  initMetadataForInterface(TimeFieldContainer, 'TimeFieldContainer');
  initMetadataForInterface(UtcOffsetFieldContainer, 'UtcOffsetFieldContainer');
  initMetadataForClass(DateTimeComponentsContents, 'DateTimeComponentsContents', VOID, VOID, [TimeFieldContainer, UtcOffsetFieldContainer]);
  initMetadataForCompanion(Companion_4);
  initMetadataForObject(Formats, 'Formats');
  initMetadataForClass(DateTimeComponents, 'DateTimeComponents');
  function appendAlternativeParsingImpl(otherFormats, mainFormat) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(otherFormats.length);
    var inductionVariable = 0;
    var last = otherFormats.length;
    while (inductionVariable < last) {
      var item = otherFormats[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.also' call
      var this_0 = this.k5v();
      item(this_0);
      var tmp$ret$2 = this_0.f5v().w2u();
      destination.n(tmp$ret$2);
    }
    var others = destination;
    // Inline function 'kotlin.also' call
    var this_1 = this.k5v();
    mainFormat(this_1);
    var main = this_1.f5v().w2u();
    this.f5v().i5v(new AlternativesParsingFormatStructure(main, others));
  }
  function appendOptionalImpl(onZero, format) {
    var tmp = this.f5v();
    // Inline function 'kotlin.also' call
    var this_0 = this.k5v();
    format(this_0);
    tmp.i5v(new OptionalFormatStructure(onZero, this_0.f5v().w2u()));
  }
  function chars(value) {
    return this.f5v().i5v(new ConstantFormatStructure(value));
  }
  function build() {
    return new CachedFormatStructure(this.f5v().w2u().o5w_1);
  }
  initMetadataForInterface(AbstractDateTimeFormatBuilder, 'AbstractDateTimeFormatBuilder');
  function year$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.p5v(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.p5v.call(this, padding);
    }
    return tmp;
  }
  function monthNumber$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.q5v(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.q5v.call(this, padding);
    }
    return tmp;
  }
  function dayOfMonth$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.p5t(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.p5t.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithDate, 'WithDate');
  function year(padding) {
    return this.n5v(new BasicFormatStructure(new YearDirective(padding)));
  }
  function monthNumber(padding) {
    return this.n5v(new BasicFormatStructure(new MonthDirective(padding)));
  }
  function monthName(names) {
    return this.n5v(new BasicFormatStructure(new MonthNameDirective(names)));
  }
  function dayOfMonth(padding) {
    return this.n5v(new BasicFormatStructure(new DayDirective(padding)));
  }
  function dayOfWeek(names) {
    return this.n5v(new BasicFormatStructure(new DayOfWeekDirective(names)));
  }
  function date(format) {
    var tmp;
    if (format instanceof LocalDateFormat) {
      this.n5v(format.v5w_1);
      tmp = Unit_instance;
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithDateBuilder, 'AbstractWithDateBuilder', VOID, VOID, [WithDate]);
  function hour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.t5v(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.t5v.call(this, padding);
    }
    return tmp;
  }
  function minute$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.u5v(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.u5v.call(this, padding);
    }
    return tmp;
  }
  function second$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.v5v(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.v5v.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithTime, 'WithTime');
  function hour(padding) {
    return this.o5v(new BasicFormatStructure(new HourDirective(padding)));
  }
  function minute(padding) {
    return this.o5v(new BasicFormatStructure(new MinuteDirective(padding)));
  }
  function second(padding) {
    return this.o5v(new BasicFormatStructure(new SecondDirective(padding)));
  }
  function secondFraction(minLength, maxLength) {
    return this.o5v(new BasicFormatStructure(new FractionalSecondDirective(minLength, maxLength)));
  }
  function time(format) {
    var tmp;
    if (format instanceof LocalTimeFormat) {
      this.o5v(format.b5z_1);
      tmp = Unit_instance;
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithTimeBuilder, 'AbstractWithTimeBuilder', VOID, VOID, [WithTime]);
  function addFormatStructureForDate(structure) {
    this.g5v(structure);
  }
  function addFormatStructureForTime(structure) {
    this.g5v(structure);
  }
  initMetadataForInterface(AbstractWithDateTimeBuilder, 'AbstractWithDateTimeBuilder', VOID, VOID, [AbstractWithDateBuilder, AbstractWithTimeBuilder, WithTime, WithDate]);
  function offsetHours$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.x5v(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.x5v.call(this, padding);
    }
    return tmp;
  }
  function offsetMinutesOfHour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.y5v(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.y5v.call(this, padding);
    }
    return tmp;
  }
  function offsetSecondsOfMinute$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.a5w(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.a5w.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithUtcOffset, 'WithUtcOffset');
  function offsetHours(padding) {
    return this.j5v(new SignedFormatStructure(new BasicFormatStructure(new UtcOffsetWholeHoursDirective(padding)), true));
  }
  function offsetMinutesOfHour(padding) {
    return this.j5v(new BasicFormatStructure(new UtcOffsetMinuteOfHourDirective(padding)));
  }
  function offsetSecondsOfMinute(padding) {
    return this.j5v(new BasicFormatStructure(new UtcOffsetSecondOfMinuteDirective(padding)));
  }
  function offset(format) {
    var tmp;
    if (format instanceof UtcOffsetFormat) {
      this.j5v(format.v60_1);
      tmp = Unit_instance;
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithOffsetBuilder, 'AbstractWithOffsetBuilder', VOID, VOID, [WithUtcOffset]);
  initMetadataForClass(Builder, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateTimeBuilder, AbstractWithOffsetBuilder, WithTime, WithUtcOffset, WithDate]);
  initMetadataForClass(AbstractDateTimeFormat, 'AbstractDateTimeFormat');
  initMetadataForClass(DateTimeComponentsFormat, 'DateTimeComponentsFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(TwoDigitNumber, 'TwoDigitNumber');
  initMetadataForClass(ThreeDigitNumber, 'ThreeDigitNumber');
  initMetadataForClass(Padding, 'Padding', VOID, Enum);
  initMetadataForClass(IncompleteLocalDate, 'IncompleteLocalDate', IncompleteLocalDate);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(MonthNames, 'MonthNames');
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(DayOfWeekNames, 'DayOfWeekNames');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(Builder_0, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateBuilder]);
  initMetadataForClass(LocalDateFormat, 'LocalDateFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(SignedIntFieldFormatDirective, 'SignedIntFieldFormatDirective');
  initMetadataForClass(YearDirective, 'YearDirective', VOID, SignedIntFieldFormatDirective);
  initMetadataForClass(UnsignedIntFieldFormatDirective, 'UnsignedIntFieldFormatDirective');
  initMetadataForClass(MonthDirective, 'MonthDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(NamedUnsignedIntFieldFormatDirective, 'NamedUnsignedIntFieldFormatDirective');
  initMetadataForClass(MonthNameDirective, 'MonthNameDirective', VOID, NamedUnsignedIntFieldFormatDirective);
  initMetadataForClass(DayDirective, 'DayDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(DayOfWeekDirective, 'DayOfWeekDirective', VOID, NamedUnsignedIntFieldFormatDirective);
  initMetadataForObject(DateFields, 'DateFields');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(Builder_1, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateTimeBuilder]);
  initMetadataForClass(LocalDateTimeFormat, 'LocalDateTimeFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(IncompleteLocalDateTime, 'IncompleteLocalDateTime', IncompleteLocalDateTime, VOID, [TimeFieldContainer]);
  initMetadataForClass(IncompleteLocalTime, 'IncompleteLocalTime', IncompleteLocalTime, VOID, [TimeFieldContainer]);
  initMetadataForClass(AmPmMarker, 'AmPmMarker', VOID, Enum);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(Builder_2, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithTimeBuilder]);
  initMetadataForClass(LocalTimeFormat, 'LocalTimeFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(HourDirective, 'HourDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(MinuteDirective, 'MinuteDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(SecondDirective, 'SecondDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(DecimalFractionFieldFormatDirective, 'DecimalFractionFieldFormatDirective');
  initMetadataForClass(FractionalSecondDirective, 'FractionalSecondDirective', VOID, DecimalFractionFieldFormatDirective);
  initMetadataForObject(TimeFields, 'TimeFields');
  initMetadataForClass(IncompleteUtcOffset, 'IncompleteUtcOffset', IncompleteUtcOffset, VOID, [UtcOffsetFieldContainer]);
  initMetadataForClass(UtcOffsetWholeHoursDirective, 'UtcOffsetWholeHoursDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(Builder_3, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithOffsetBuilder]);
  initMetadataForClass(UtcOffsetFormat, 'UtcOffsetFormat', VOID, AbstractDateTimeFormat);
  initMetadataForClass(OffsetFields$sign$1);
  initMetadataForObject(OffsetFields, 'OffsetFields');
  initMetadataForClass(UtcOffsetMinuteOfHourDirective, 'UtcOffsetMinuteOfHourDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(UtcOffsetSecondOfMinuteDirective, 'UtcOffsetSecondOfMinuteDirective', VOID, UnsignedIntFieldFormatDirective);
  initMetadataForClass(AppendableFormatStructure, 'AppendableFormatStructure', AppendableFormatStructure);
  initMetadataForClass(AssignableString, 'AssignableString');
  initMetadataForClass(AbstractFieldSpec, 'AbstractFieldSpec');
  initMetadataForClass(GenericFieldSpec, 'GenericFieldSpec', VOID, AbstractFieldSpec);
  function getterNotNull(container) {
    var tmp0_elvis_lhs = this.e62(container);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Field ' + this.s2() + ' is not set');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  initMetadataForInterface(Accessor, 'Accessor');
  initMetadataForClass(PropertyAccessor, 'PropertyAccessor', VOID, VOID, [Accessor]);
  initMetadataForClass(UnsignedFieldSpec, 'UnsignedFieldSpec', VOID, AbstractFieldSpec);
  initMetadataForClass(ConcatenatedFormatStructure, 'ConcatenatedFormatStructure');
  initMetadataForClass(CachedFormatStructure, 'CachedFormatStructure', VOID, ConcatenatedFormatStructure);
  initMetadataForInterface(NonConcatenatedFormatStructure, 'NonConcatenatedFormatStructure');
  initMetadataForClass(BasicFormatStructure, 'BasicFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(ConstantFormatStructure, 'ConstantFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(SignedFormatStructure, 'SignedFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(PropertyWithDefault, 'PropertyWithDefault');
  initMetadataForClass(OptionalFormatStructure, 'OptionalFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(AlternativesParsingFormatStructure, 'AlternativesParsingFormatStructure', VOID, VOID, [NonConcatenatedFormatStructure]);
  initMetadataForClass(ComparisonPredicate, 'ComparisonPredicate');
  initMetadataForObject(Truth, 'Truth');
  initMetadataForClass(ConjunctionPredicate, 'ConjunctionPredicate');
  initMetadataForClass(SpacePaddedFormatter, 'SpacePaddedFormatter');
  initMetadataForClass(SignedFormatter, 'SignedFormatter');
  initMetadataForClass(ConditionalFormatter, 'ConditionalFormatter');
  initMetadataForClass(ConcatenatedFormatter, 'ConcatenatedFormatter');
  initMetadataForClass(SignedIntFormatterStructure, 'SignedIntFormatterStructure');
  initMetadataForClass(UnsignedIntFormatterStructure, 'UnsignedIntFormatterStructure');
  initMetadataForClass(StringFormatterStructure, 'StringFormatterStructure');
  initMetadataForClass(DecimalFractionFormatterStructure, 'DecimalFractionFormatterStructure');
  initMetadataForClass(ConstantStringFormatterStructure, 'ConstantStringFormatterStructure');
  initMetadataForClass(NumberConsumer, 'NumberConsumer');
  initMetadataForClass(FractionPartConsumer, 'FractionPartConsumer', VOID, NumberConsumer);
  initMetadataForClass(ConstantNumberConsumer, 'ConstantNumberConsumer', VOID, NumberConsumer);
  initMetadataForObject(ExpectedInt, 'ExpectedInt');
  initMetadataForClass(TooManyDigits, 'TooManyDigits');
  initMetadataForClass(TooFewDigits, 'TooFewDigits');
  initMetadataForClass(WrongConstant, 'WrongConstant');
  initMetadataForClass(Conflicting, 'Conflicting');
  initMetadataForClass(UnsignedIntConsumer, 'UnsignedIntConsumer', VOID, NumberConsumer);
  initMetadataForClass(ParseError, 'ParseError');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(ParserState, 'ParserState');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(Parser, 'Parser');
  initMetadataForClass(ParserStructure, 'ParserStructure');
  initMetadataForClass(ParseException, 'ParseException', VOID, Exception);
  initMetadataForClass(TrieNode, 'TrieNode', TrieNode);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(StringSetParserOperation, 'StringSetParserOperation');
  initMetadataForClass(NumberSpanParserOperation, 'NumberSpanParserOperation');
  initMetadataForClass(PlainStringParserOperation, 'PlainStringParserOperation');
  initMetadataForClass(SignParser, 'SignParser');
  initMetadataForClass(UnconditionalModification, 'UnconditionalModification');
  initMetadataForClass(DecimalFraction, 'DecimalFraction', VOID, VOID, [Comparable]);
  initMetadataForClass(DivRemResult, 'DivRemResult');
  initMetadataForObject(TimeBasedDateTimeUnitSerializer, 'TimeBasedDateTimeUnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DateBasedDateTimeUnitSerializer, 'DateBasedDateTimeUnitSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForObject(DayBasedDateTimeUnitSerializer, 'DayBasedDateTimeUnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(MonthBasedDateTimeUnitSerializer, 'MonthBasedDateTimeUnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DateTimeUnitSerializer, 'DateTimeUnitSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForObject(InstantIso8601Serializer, 'InstantIso8601Serializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LocalDateIso8601Serializer, 'LocalDateIso8601Serializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LocalDateTimeIso8601Serializer, 'LocalDateTimeIso8601Serializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LocalTimeIso8601Serializer, 'LocalTimeIso8601Serializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UtcOffsetSerializer, 'UtcOffsetSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(TimeZoneSerializer, 'TimeZoneSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FixedOffsetTimeZoneSerializer, 'FixedOffsetTimeZoneSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(DayOfWeek_0, 'DayOfWeek', VOID, Enum);
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(Instant_0, 'Instant', VOID, VOID, [Comparable], VOID, VOID, {0: InstantIso8601Serializer_getInstance});
  initMetadataForCompanion(Companion_15);
  initMetadataForObject(Formats_0, 'Formats');
  initMetadataForClass(LocalDate_0, 'LocalDate', VOID, VOID, [Comparable], VOID, VOID, {0: LocalDateIso8601Serializer_getInstance});
  initMetadataForCompanion(Companion_16);
  initMetadataForObject(Formats_1, 'Formats');
  initMetadataForClass(LocalDateTime_0, 'LocalDateTime', VOID, VOID, [Comparable], VOID, VOID, {0: LocalDateTimeIso8601Serializer_getInstance});
  initMetadataForCompanion(Companion_17);
  initMetadataForObject(Formats_2, 'Formats');
  initMetadataForClass(LocalTime_0, 'LocalTime', VOID, VOID, [Comparable], VOID, VOID, {0: LocalTimeIso8601Serializer_getInstance});
  initMetadataForClass(Month_0, 'Month', VOID, Enum);
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(TimeZone, 'TimeZone', VOID, VOID, VOID, VOID, VOID, {0: TimeZoneSerializer_getInstance});
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(FixedOffsetTimeZone, 'FixedOffsetTimeZone', VOID, TimeZone, VOID, VOID, VOID, {0: FixedOffsetTimeZoneSerializer_getInstance});
  initMetadataForCompanion(Companion_20);
  initMetadataForObject(Formats_3, 'Formats');
  initMetadataForClass(UtcOffset, 'UtcOffset', VOID, VOID, VOID, VOID, VOID, {0: UtcOffsetSerializer_getInstance});
  //endregion
  function System() {
  }
  protoOf(System).g5q = function () {
    return Companion_getInstance_14().g5q();
  };
  var System_instance;
  function System_getInstance() {
    return System_instance;
  }
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function TimeBased(nanoseconds) {
    DateTimeUnit.call(this);
    this.l5q_1 = nanoseconds;
    // Inline function 'kotlin.require' call
    if (!(this.l5q_1.e1(new Long(0, 0)) > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.l5q_1.toString() + ' ns.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.l5q_1.d3(new Long(817405952, 838)).equals(new Long(0, 0))) {
      this.m5q_1 = 'HOUR';
      this.n5q_1 = this.l5q_1.c3(new Long(817405952, 838));
    } else {
      if (this.l5q_1.d3(new Long(-129542144, 13)).equals(new Long(0, 0))) {
        this.m5q_1 = 'MINUTE';
        this.n5q_1 = this.l5q_1.c3(new Long(-129542144, 13));
      } else {
        var tmp1 = this.l5q_1;
        // Inline function 'kotlin.Long.rem' call
        var other = 1000000000;
        if (tmp1.d3(toLong(other)).equals(new Long(0, 0))) {
          this.m5q_1 = 'SECOND';
          var tmp = this;
          var tmp3 = this.l5q_1;
          // Inline function 'kotlin.Long.div' call
          var other_0 = 1000000000;
          tmp.n5q_1 = tmp3.c3(toLong(other_0));
        } else {
          // Inline function 'kotlin.Long.rem' call
          if (this.l5q_1.d3(toLong(1000000)).equals(new Long(0, 0))) {
            this.m5q_1 = 'MILLISECOND';
            var tmp_0 = this;
            // Inline function 'kotlin.Long.div' call
            tmp_0.n5q_1 = this.l5q_1.c3(toLong(1000000));
          } else {
            // Inline function 'kotlin.Long.rem' call
            if (this.l5q_1.d3(toLong(1000)).equals(new Long(0, 0))) {
              this.m5q_1 = 'MICROSECOND';
              var tmp_1 = this;
              // Inline function 'kotlin.Long.div' call
              tmp_1.n5q_1 = this.l5q_1.c3(toLong(1000));
            } else {
              this.m5q_1 = 'NANOSECOND';
              this.n5q_1 = this.l5q_1;
            }
          }
        }
      }
    }
  }
  protoOf(TimeBased).o5q = function (scalar) {
    return new TimeBased(safeMultiply(this.l5q_1, toLong(scalar)));
  };
  protoOf(TimeBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeBased) {
        tmp_0 = this.l5q_1.equals(other.l5q_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeBased).hashCode = function () {
    return this.l5q_1.j1() ^ this.l5q_1.k3(32).j1();
  };
  protoOf(TimeBased).toString = function () {
    return this.p5q(this.n5q_1, this.m5q_1);
  };
  function DateBased() {
    DateTimeUnit.call(this);
  }
  function DayBased(days) {
    DateBased.call(this);
    this.r5q_1 = days;
    // Inline function 'kotlin.require' call
    if (!(this.r5q_1 > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.r5q_1 + ' days.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DayBased).o5q = function (scalar) {
    return new DayBased(safeMultiply_0(this.r5q_1, scalar));
  };
  protoOf(DayBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof DayBased) {
        tmp_0 = this.r5q_1 === other.r5q_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(DayBased).hashCode = function () {
    return this.r5q_1 ^ 65536;
  };
  protoOf(DayBased).toString = function () {
    return (this.r5q_1 % 7 | 0) === 0 ? this.q5q(this.r5q_1 / 7 | 0, 'WEEK') : this.q5q(this.r5q_1, 'DAY');
  };
  function MonthBased(months) {
    DateBased.call(this);
    this.s5q_1 = months;
    // Inline function 'kotlin.require' call
    if (!(this.s5q_1 > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.s5q_1 + ' months.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(MonthBased).o5q = function (scalar) {
    return new MonthBased(safeMultiply_0(this.s5q_1, scalar));
  };
  protoOf(MonthBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof MonthBased) {
        tmp_0 = this.s5q_1 === other.s5q_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(MonthBased).hashCode = function () {
    return this.s5q_1 ^ 131072;
  };
  protoOf(MonthBased).toString = function () {
    return (this.s5q_1 % 1200 | 0) === 0 ? this.q5q(this.s5q_1 / 1200 | 0, 'CENTURY') : (this.s5q_1 % 12 | 0) === 0 ? this.q5q(this.s5q_1 / 12 | 0, 'YEAR') : (this.s5q_1 % 3 | 0) === 0 ? this.q5q(this.s5q_1 / 3 | 0, 'QUARTER') : this.q5q(this.s5q_1, 'MONTH');
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.t5q_1 = new TimeBased(new Long(1, 0));
    this.u5q_1 = this.t5q_1.o5q(1000);
    this.v5q_1 = this.u5q_1.o5q(1000);
    this.w5q_1 = this.v5q_1.o5q(1000);
    this.x5q_1 = this.w5q_1.o5q(60);
    this.y5q_1 = this.x5q_1.o5q(60);
    this.z5q_1 = new DayBased(1);
    this.a5r_1 = this.z5q_1.o5q(7);
    this.b5r_1 = new MonthBased(1);
    this.c5r_1 = this.b5r_1.o5q(3);
    this.d5r_1 = this.b5r_1.o5q(12);
    this.e5r_1 = this.d5r_1.o5q(100);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function DateTimeUnit() {
    Companion_getInstance_3();
  }
  protoOf(DateTimeUnit).q5q = function (value, unit) {
    return value === 1 ? unit : '' + value + '-' + unit;
  };
  protoOf(DateTimeUnit).p5q = function (value, unit) {
    return value.equals(new Long(1, 0)) ? unit : value.toString() + '-' + unit;
  };
  function get_isoDayNumber(_this__u8e3s4) {
    return _this__u8e3s4.r2_1 + 1 | 0;
  }
  function DayOfWeek(isoDayNumber) {
    // Inline function 'kotlin.require' call
    if (!(1 <= isoDayNumber ? isoDayNumber <= 7 : false)) {
      var message = 'Expected ISO day-of-week number in 1..7, got ' + isoDayNumber;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return get_entries().u(isoDayNumber - 1 | 0);
  }
  function DateTimeFormatException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$() {
    var tmp = DateTimeFormatException_init_$Init$(objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_0(message) {
    var tmp = DateTimeFormatException_init_$Init$_0(message, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_0);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_1(cause, $this) {
    IllegalArgumentException_init_$Init$_1(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_1(cause) {
    var tmp = DateTimeFormatException_init_$Init$_1(cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_1);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_2(message, cause, $this) {
    IllegalArgumentException_init_$Init$_2(message, cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_2(message, cause) {
    var tmp = DateTimeFormatException_init_$Init$_2(message, cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_2);
    return tmp;
  }
  function DateTimeFormatException() {
    captureStack(this, DateTimeFormatException);
  }
  function DateTimeArithmeticException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$() {
    var tmp = DateTimeArithmeticException_init_$Init$(objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_0(cause, $this) {
    RuntimeException_init_$Init$_0(cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_0(cause) {
    var tmp = DateTimeArithmeticException_init_$Init$_0(cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_0);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_1(message, cause) {
    var tmp = DateTimeArithmeticException_init_$Init$_1(message, cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_1);
    return tmp;
  }
  function DateTimeArithmeticException() {
    captureStack(this, DateTimeArithmeticException);
  }
  function IllegalTimeZoneException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$() {
    var tmp = IllegalTimeZoneException_init_$Init$(objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$);
    return tmp;
  }
  function IllegalTimeZoneException_init_$Init$_0(cause, $this) {
    IllegalArgumentException_init_$Init$_1(cause, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$_0(cause) {
    var tmp = IllegalTimeZoneException_init_$Init$_0(cause, objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$_0);
    return tmp;
  }
  function IllegalTimeZoneException() {
    captureStack(this, IllegalTimeZoneException);
  }
  function getIsoDateFormat() {
    return Formats_getInstance_0().g5r();
  }
  function getIsoDateTimeFormat() {
    return Formats_getInstance_1().h5r_1;
  }
  function getIsoTimeFormat() {
    return Formats_instance_2.g5r();
  }
  function Month(number) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(1 <= number ? number <= 12 : false)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return get_entries_0().u(number - 1 | 0);
  }
  function getIsoUtcOffsetFormat() {
    return Formats_instance_3.g5r();
  }
  function asTimeZone(_this__u8e3s4) {
    return FixedOffsetTimeZone_init_$Create$(_this__u8e3s4);
  }
  var timeZoneField;
  function get_emptyDateTimeComponentsContents() {
    _init_properties_DateTimeComponents_kt__9iimb5();
    return emptyDateTimeComponentsContents;
  }
  var emptyDateTimeComponentsContents;
  function DateTimeComponentsContents(date, time, offset, timeZoneId) {
    date = date === VOID ? new IncompleteLocalDate() : date;
    time = time === VOID ? new IncompleteLocalTime() : time;
    offset = offset === VOID ? new IncompleteUtcOffset() : offset;
    timeZoneId = timeZoneId === VOID ? null : timeZoneId;
    this.i5r_1 = date;
    this.j5r_1 = time;
    this.k5r_1 = offset;
    this.l5r_1 = timeZoneId;
  }
  protoOf(DateTimeComponentsContents).m5r = function (_set____db54di) {
    this.i5r_1.p5r_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).s5r = function () {
    return this.i5r_1.p5r_1;
  };
  protoOf(DateTimeComponentsContents).t5r = function (_set____db54di) {
    this.i5r_1.r5r_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).u5r = function () {
    return this.i5r_1.r5r_1;
  };
  protoOf(DateTimeComponentsContents).v5r = function (_set____db54di) {
    this.i5r_1.q5r_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).w5r = function () {
    return this.i5r_1.q5r_1;
  };
  protoOf(DateTimeComponentsContents).x5r = function (_set____db54di) {
    this.i5r_1.o5r_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).y5r = function () {
    return this.i5r_1.o5r_1;
  };
  protoOf(DateTimeComponentsContents).z5r = function (_set____db54di) {
    this.i5r_1.n5r_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).a5s = function () {
    return this.i5r_1.n5r_1;
  };
  protoOf(DateTimeComponentsContents).b5s = function (_set____db54di) {
    this.j5r_1.e5s_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).i5s = function () {
    return this.j5r_1.e5s_1;
  };
  protoOf(DateTimeComponentsContents).j5s = function (value) {
    this.j5r_1.j5s(value);
  };
  protoOf(DateTimeComponentsContents).k5s = function () {
    return this.j5r_1.k5s();
  };
  protoOf(DateTimeComponentsContents).l5s = function (_set____db54di) {
    this.j5r_1.c5s_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).m5s = function () {
    return this.j5r_1.c5s_1;
  };
  protoOf(DateTimeComponentsContents).n5s = function (_set____db54di) {
    this.j5r_1.d5s_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).o5s = function () {
    return this.j5r_1.d5s_1;
  };
  protoOf(DateTimeComponentsContents).p5s = function (_set____db54di) {
    this.j5r_1.f5s_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).q5s = function () {
    return this.j5r_1.f5s_1;
  };
  protoOf(DateTimeComponentsContents).r5s = function (_set____db54di) {
    this.j5r_1.h5s_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).s5s = function () {
    return this.j5r_1.h5s_1;
  };
  protoOf(DateTimeComponentsContents).t5s = function (_set____db54di) {
    this.j5r_1.g5s_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).u5s = function () {
    return this.j5r_1.g5s_1;
  };
  protoOf(DateTimeComponentsContents).v5s = function (_set____db54di) {
    this.k5r_1.w5s_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).a5t = function () {
    return this.k5r_1.w5s_1;
  };
  protoOf(DateTimeComponentsContents).b5t = function (_set____db54di) {
    this.k5r_1.y5s_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).c5t = function () {
    return this.k5r_1.y5s_1;
  };
  protoOf(DateTimeComponentsContents).d5t = function (_set____db54di) {
    this.k5r_1.z5s_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).e5t = function () {
    return this.k5r_1.z5s_1;
  };
  protoOf(DateTimeComponentsContents).f5t = function (_set____db54di) {
    this.k5r_1.x5s_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).g5t = function () {
    return this.k5r_1.x5s_1;
  };
  protoOf(DateTimeComponentsContents).h5t = function () {
    return new DateTimeComponentsContents(this.i5r_1.h5t(), this.j5r_1.h5t(), this.k5r_1.h5t(), this.l5r_1);
  };
  protoOf(DateTimeComponentsContents).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof DateTimeComponentsContents) {
      tmp_2 = other.i5r_1.equals(this.i5r_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.j5r_1.equals(this.j5r_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.k5r_1.equals(this.k5r_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.l5r_1 == this.l5r_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DateTimeComponentsContents).hashCode = function () {
    var tmp = this.i5r_1.hashCode() ^ this.j5r_1.hashCode() ^ this.k5r_1.hashCode();
    var tmp0_safe_receiver = this.l5r_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
  };
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda($this$Format) {
    $this$Format.i5t(get_ISO_DATE());
    var tmp = [DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda];
    alternativeParsing($this$Format, tmp, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_0);
    $this$Format.j5t();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.k5t();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.l5t();
    optional($this$Format, VOID, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_1);
    var tmp_0 = [DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_2];
    alternativeParsing($this$Format, tmp_0, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_3);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda($this$alternativeParsing) {
    char($this$alternativeParsing, _Char___init__impl__6a9atx(116));
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_0($this$alternativeParsing) {
    char($this$alternativeParsing, _Char___init__impl__6a9atx(84));
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_1($this$optional) {
    char($this$optional, _Char___init__impl__6a9atx(46));
    $this$optional.m5t(1, 9);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_2($this$alternativeParsing) {
    $this$alternativeParsing.n5t();
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_3($this$alternativeParsing) {
    $this$alternativeParsing.o5t(Formats_instance_3.g5r());
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda($this$Format) {
    var tmp = [DateTimeComponents$Formats$RFC_1123$lambda$lambda];
    alternativeParsing($this$Format, tmp, DateTimeComponents$Formats$RFC_1123$lambda$lambda_0);
    $this$Format.p5t(Padding_NONE_getInstance());
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.s5t(Companion_getInstance_5().r5t_1);
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.t5t();
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.j5t();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.k5t();
    optional($this$Format, VOID, DateTimeComponents$Formats$RFC_1123$lambda$lambda_1);
    $this$Format.u5t(' ');
    var tmp_0 = DateTimeComponents$Formats$RFC_1123$lambda$lambda_2;
    var tmp_1 = [tmp_0, DateTimeComponents$Formats$RFC_1123$lambda$lambda_3];
    alternativeParsing($this$Format, tmp_1, DateTimeComponents$Formats$RFC_1123$lambda$lambda_4);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda($this$alternativeParsing) {
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_0($this$alternativeParsing) {
    $this$alternativeParsing.x5t(Companion_getInstance_6().w5t_1);
    $this$alternativeParsing.u5t(', ');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_1($this$optional) {
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.l5t();
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_2($this$alternativeParsing) {
    $this$alternativeParsing.u5t('UT');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_3($this$alternativeParsing) {
    $this$alternativeParsing.u5t('Z');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_4($this$alternativeParsing) {
    optional($this$alternativeParsing, 'GMT', DateTimeComponents$Formats$RFC_1123$lambda$lambda$lambda);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda$lambda($this$optional) {
    $this$optional.o5t(Formats_instance_3.y5t());
    return Unit_instance;
  }
  function Companion_4() {
  }
  protoOf(Companion_4).z5t = function (block) {
    var builder = new Builder(new AppendableFormatStructure());
    block(builder);
    return new DateTimeComponentsFormat(builder.w2u());
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function Formats() {
    Formats_instance = this;
    var tmp = this;
    var tmp_0 = Companion_instance_4;
    tmp.a5u_1 = tmp_0.z5t(DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda);
    var tmp_1 = this;
    var tmp_2 = Companion_instance_4;
    tmp_1.b5u_1 = tmp_2.z5t(DateTimeComponents$Formats$RFC_1123$lambda);
  }
  var Formats_instance;
  function Formats_getInstance() {
    if (Formats_instance == null)
      new Formats();
    return Formats_instance;
  }
  function DateTimeComponents(contents) {
    contents = contents === VOID ? new DateTimeComponentsContents() : contents;
    this.c5u_1 = contents;
    this.d5u_1 = year$factory(this.c5u_1.i5r_1);
    this.e5u_1 = new TwoDigitNumber(monthNumber$factory(this.c5u_1.i5r_1));
    this.f5u_1 = new TwoDigitNumber(dayOfMonth$factory(this.c5u_1.i5r_1));
    this.g5u_1 = new ThreeDigitNumber(dayOfYear$factory(this.c5u_1.i5r_1));
    this.h5u_1 = new TwoDigitNumber(hour$factory(this.c5u_1.j5r_1));
    this.i5u_1 = new TwoDigitNumber(hourOfAmPm$factory(this.c5u_1.j5r_1));
    this.j5u_1 = amPm$factory(this.c5u_1.j5r_1);
    this.k5u_1 = new TwoDigitNumber(minute$factory(this.c5u_1.j5r_1));
    this.l5u_1 = new TwoDigitNumber(second$factory(this.c5u_1.j5r_1));
    this.m5u_1 = isNegative$factory(this.c5u_1.k5r_1);
    this.n5u_1 = new TwoDigitNumber(totalHoursAbs$factory(this.c5u_1.k5r_1));
    this.o5u_1 = new TwoDigitNumber(minutesOfHour$factory(this.c5u_1.k5r_1));
    this.p5u_1 = new TwoDigitNumber(secondsOfMinute$factory(this.c5u_1.k5r_1));
    this.q5u_1 = timeZoneId$factory_0(this.c5u_1);
  }
  protoOf(DateTimeComponents).z5r = function (_set____db54di) {
    var tmp0 = this.d5u_1;
    // Inline function 'kotlin.setValue' call
    year$factory_0();
    tmp0.set(_set____db54di);
    return Unit_instance;
  };
  protoOf(DateTimeComponents).a5s = function () {
    var tmp0 = this.d5u_1;
    // Inline function 'kotlin.getValue' call
    year$factory_1();
    return tmp0.get();
  };
  protoOf(DateTimeComponents).s5s = function () {
    return this.c5u_1.j5r_1.h5s_1;
  };
  protoOf(DateTimeComponents).r5u = function () {
    return this.c5u_1.k5r_1.r5u();
  };
  protoOf(DateTimeComponents).s5u = function () {
    return this.c5u_1.j5r_1.s5u();
  };
  protoOf(DateTimeComponents).t5u = function () {
    var offset = this.r5u();
    var time = this.s5u();
    var truncatedDate = this.c5u_1.i5r_1.h5t();
    truncatedDate.n5r_1 = requireParsedField(truncatedDate.n5r_1, 'year') % 10000 | 0;
    var tmp;
    try {
      var secDelta = safeMultiply(toLong(ensureNotNull(this.a5s()) / 10000 | 0), new Long(2036907392, 73));
      var epochDays = toLong(truncatedDate.u5u().w5u());
      // Inline function 'kotlin.Long.times' call
      var tmp2 = epochDays.b3(toLong(86400));
      // Inline function 'kotlin.Long.plus' call
      var other = time.y5u();
      var tmp4 = tmp2.z2(toLong(other));
      // Inline function 'kotlin.Long.minus' call
      var other_0 = offset.a5v();
      var tmp$ret$2 = tmp4.a3(toLong(other_0));
      tmp = safeAdd(secDelta, tmp$ret$2);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ArithmeticException) {
        var e = $p;
        throw DateTimeFormatException_init_$Create$_2('The parsed date is outside the range representable by Instant', e);
      } else {
        throw $p;
      }
    }
    var totalSeconds = tmp;
    if (totalSeconds.e1(Companion_getInstance_14().j5q_1.c5v()) < 0 || totalSeconds.e1(Companion_getInstance_14().k5q_1.c5v()) > 0)
      throw DateTimeFormatException_init_$Create$_0('The parsed date is outside the range representable by Instant');
    var tmp_1 = Companion_getInstance_14();
    var tmp0_elvis_lhs = this.s5s();
    return tmp_1.d5v(totalSeconds, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs);
  };
  function Builder(actualBuilder) {
    this.e5v_1 = actualBuilder;
  }
  protoOf(Builder).f5v = function () {
    return this.e5v_1;
  };
  protoOf(Builder).g5v = function (structure) {
    this.e5v_1.i5v(structure);
  };
  protoOf(Builder).j5v = function (structure) {
    this.e5v_1.i5v(structure);
  };
  protoOf(Builder).k5v = function () {
    return new Builder(new AppendableFormatStructure());
  };
  function DateTimeComponentsFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.c5w_1 = actualFormat;
  }
  protoOf(DateTimeComponentsFormat).d5w = function () {
    return this.c5w_1;
  };
  protoOf(DateTimeComponentsFormat).e5w = function (intermediate) {
    return new DateTimeComponents(intermediate);
  };
  protoOf(DateTimeComponentsFormat).f5w = function (intermediate) {
    return this.e5w(intermediate instanceof DateTimeComponentsContents ? intermediate : THROW_CCE());
  };
  protoOf(DateTimeComponentsFormat).g5w = function () {
    return get_emptyDateTimeComponentsContents();
  };
  function TwoDigitNumber(reference) {
    this.i5w_1 = reference;
  }
  function ThreeDigitNumber(reference) {
    this.j5w_1 = reference;
  }
  function timeZoneId$factory() {
    return getPropertyCallableRef('timeZoneId', 1, KMutableProperty1, function (receiver) {
      return receiver.l5r_1;
    }, function (receiver, value) {
      receiver.l5r_1 = value;
      return Unit_instance;
    });
  }
  function year$factory($b0) {
    return getPropertyCallableRef('year', 0, KMutableProperty0, function () {
      return $b0.n5r_1;
    }, function (value) {
      $b0.n5r_1 = value;
      return Unit_instance;
    });
  }
  function monthNumber$factory($b0) {
    return getPropertyCallableRef('monthNumber', 0, KMutableProperty0, function () {
      return $b0.o5r_1;
    }, function (value) {
      $b0.o5r_1 = value;
      return Unit_instance;
    });
  }
  function dayOfMonth$factory($b0) {
    return getPropertyCallableRef('dayOfMonth', 0, KMutableProperty0, function () {
      return $b0.p5r_1;
    }, function (value) {
      $b0.p5r_1 = value;
      return Unit_instance;
    });
  }
  function dayOfYear$factory($b0) {
    return getPropertyCallableRef('dayOfYear', 0, KMutableProperty0, function () {
      return $b0.r5r_1;
    }, function (value) {
      $b0.r5r_1 = value;
      return Unit_instance;
    });
  }
  function hour$factory($b0) {
    return getPropertyCallableRef('hour', 0, KMutableProperty0, function () {
      return $b0.c5s_1;
    }, function (value) {
      $b0.c5s_1 = value;
      return Unit_instance;
    });
  }
  function hourOfAmPm$factory($b0) {
    return getPropertyCallableRef('hourOfAmPm', 0, KMutableProperty0, function () {
      return $b0.d5s_1;
    }, function (value) {
      $b0.d5s_1 = value;
      return Unit_instance;
    });
  }
  function amPm$factory($b0) {
    return getPropertyCallableRef('amPm', 0, KMutableProperty0, function () {
      return $b0.e5s_1;
    }, function (value) {
      $b0.e5s_1 = value;
      return Unit_instance;
    });
  }
  function minute$factory($b0) {
    return getPropertyCallableRef('minute', 0, KMutableProperty0, function () {
      return $b0.f5s_1;
    }, function (value) {
      $b0.f5s_1 = value;
      return Unit_instance;
    });
  }
  function second$factory($b0) {
    return getPropertyCallableRef('second', 0, KMutableProperty0, function () {
      return $b0.g5s_1;
    }, function (value) {
      $b0.g5s_1 = value;
      return Unit_instance;
    });
  }
  function isNegative$factory($b0) {
    return getPropertyCallableRef('isNegative', 0, KMutableProperty0, function () {
      return $b0.w5s_1;
    }, function (value) {
      $b0.w5s_1 = value;
      return Unit_instance;
    });
  }
  function totalHoursAbs$factory($b0) {
    return getPropertyCallableRef('totalHoursAbs', 0, KMutableProperty0, function () {
      return $b0.x5s_1;
    }, function (value) {
      $b0.x5s_1 = value;
      return Unit_instance;
    });
  }
  function minutesOfHour$factory($b0) {
    return getPropertyCallableRef('minutesOfHour', 0, KMutableProperty0, function () {
      return $b0.y5s_1;
    }, function (value) {
      $b0.y5s_1 = value;
      return Unit_instance;
    });
  }
  function secondsOfMinute$factory($b0) {
    return getPropertyCallableRef('secondsOfMinute', 0, KMutableProperty0, function () {
      return $b0.z5s_1;
    }, function (value) {
      $b0.z5s_1 = value;
      return Unit_instance;
    });
  }
  function timeZoneId$factory_0($b0) {
    return getPropertyCallableRef('timeZoneId', 0, KMutableProperty0, function () {
      return $b0.l5r_1;
    }, function (value) {
      $b0.l5r_1 = value;
      return Unit_instance;
    });
  }
  function year$factory_0() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.a5s();
    }, function (receiver, value) {
      return receiver.z5r(value);
    });
  }
  function year$factory_1() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.a5s();
    }, function (receiver, value) {
      return receiver.z5r(value);
    });
  }
  var properties_initialized_DateTimeComponents_kt_io5e5;
  function _init_properties_DateTimeComponents_kt__9iimb5() {
    if (!properties_initialized_DateTimeComponents_kt_io5e5) {
      properties_initialized_DateTimeComponents_kt_io5e5 = true;
      timeZoneField = new GenericFieldSpec(new PropertyAccessor(timeZoneId$factory()));
      emptyDateTimeComponentsContents = new DateTimeComponentsContents();
    }
  }
  function AbstractDateTimeFormat() {
  }
  protoOf(AbstractDateTimeFormat).h5w = function (input) {
    var tmp;
    try {
      tmp = Parser__match$default_impl_x2xlti(_Parser___init__impl__gdyfby(this.d5w().n5w()), input, this.g5w());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof ParseException) {
        var e = $p;
        throw DateTimeFormatException_init_$Create$_2("Failed to parse value from '" + toString(input) + "'", e);
      } else {
        throw $p;
      }
    }
    var matched = tmp;
    try {
      return this.f5w(matched);
    } catch ($p) {
      if ($p instanceof IllegalArgumentException) {
        var e_0 = $p;
        var message = e_0.message;
        throw DateTimeFormatException_init_$Create$_2(message == null ? "The value parsed from '" + toString(input) + "' is invalid" : '' + message + " (when parsing '" + toString(input) + "')", e_0);
      } else {
        throw $p;
      }
    }
  };
  var Padding_NONE_instance;
  var Padding_ZERO_instance;
  var Padding_SPACE_instance;
  var Padding_entriesInitialized;
  function Padding_initEntries() {
    if (Padding_entriesInitialized)
      return Unit_instance;
    Padding_entriesInitialized = true;
    Padding_NONE_instance = new Padding('NONE', 0);
    Padding_ZERO_instance = new Padding('ZERO', 1);
    Padding_SPACE_instance = new Padding('SPACE', 2);
  }
  function Padding(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Padding_NONE_getInstance() {
    Padding_initEntries();
    return Padding_NONE_instance;
  }
  function Padding_ZERO_getInstance() {
    Padding_initEntries();
    return Padding_ZERO_instance;
  }
  function Padding_SPACE_getInstance() {
    Padding_initEntries();
    return Padding_SPACE_instance;
  }
  function WithDate() {
  }
  function WithTime() {
  }
  function WithUtcOffset() {
  }
  function char(_this__u8e3s4, value) {
    return _this__u8e3s4.u5t(toString_0(value));
  }
  function optional(_this__u8e3s4, ifZero, format) {
    ifZero = ifZero === VOID ? '' : ifZero;
    var tmp;
    if (isInterface(_this__u8e3s4, AbstractDateTimeFormatBuilder)) {
      _this__u8e3s4.m5v(ifZero, typeof format === 'function' ? format : THROW_CCE());
      tmp = Unit_instance;
    } else {
      throw IllegalStateException_init_$Create$('impossible');
    }
    return tmp;
  }
  function alternativeParsing(_this__u8e3s4, alternativeFormats, primaryFormat) {
    var tmp;
    if (isInterface(_this__u8e3s4, AbstractDateTimeFormatBuilder)) {
      var tmp_0 = (isArray(alternativeFormats) ? alternativeFormats : THROW_CCE()).slice();
      _this__u8e3s4.l5v(tmp_0, typeof primaryFormat === 'function' ? primaryFormat : THROW_CCE());
      tmp = Unit_instance;
    } else {
      throw IllegalStateException_init_$Create$('impossible');
    }
    return tmp;
  }
  function AbstractDateTimeFormatBuilder() {
  }
  function get_ISO_DATE() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0 = ISO_DATE$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_DATE$factory();
    return tmp0.z();
  }
  var ISO_DATE$delegate;
  function get_ISO_DATE_BASIC() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0 = ISO_DATE_BASIC$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_DATE_BASIC$factory();
    return tmp0.z();
  }
  var ISO_DATE_BASIC$delegate;
  function get_emptyIncompleteLocalDate() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    return emptyIncompleteLocalDate;
  }
  var emptyIncompleteLocalDate;
  function IncompleteLocalDate(year, monthNumber, dayOfMonth, isoDayOfWeek, dayOfYear) {
    year = year === VOID ? null : year;
    monthNumber = monthNumber === VOID ? null : monthNumber;
    dayOfMonth = dayOfMonth === VOID ? null : dayOfMonth;
    isoDayOfWeek = isoDayOfWeek === VOID ? null : isoDayOfWeek;
    dayOfYear = dayOfYear === VOID ? null : dayOfYear;
    this.n5r_1 = year;
    this.o5r_1 = monthNumber;
    this.p5r_1 = dayOfMonth;
    this.q5r_1 = isoDayOfWeek;
    this.r5r_1 = dayOfYear;
  }
  protoOf(IncompleteLocalDate).z5r = function (_set____db54di) {
    this.n5r_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).a5s = function () {
    return this.n5r_1;
  };
  protoOf(IncompleteLocalDate).x5r = function (_set____db54di) {
    this.o5r_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).y5r = function () {
    return this.o5r_1;
  };
  protoOf(IncompleteLocalDate).m5r = function (_set____db54di) {
    this.p5r_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).s5r = function () {
    return this.p5r_1;
  };
  protoOf(IncompleteLocalDate).v5r = function (_set____db54di) {
    this.q5r_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).w5r = function () {
    return this.q5r_1;
  };
  protoOf(IncompleteLocalDate).t5r = function (_set____db54di) {
    this.r5r_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).u5r = function () {
    return this.r5r_1;
  };
  protoOf(IncompleteLocalDate).u5u = function () {
    var year = requireParsedField(this.n5r_1, 'year');
    var dayOfYear = this.r5r_1;
    var tmp;
    if (dayOfYear == null) {
      tmp = LocalDate_init_$Create$(year, requireParsedField(this.o5r_1, 'monthNumber'), requireParsedField(this.p5r_1, 'dayOfMonth'));
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = plus_2(LocalDate_init_$Create$(year, 1, 1), dayOfYear - 1 | 0, Companion_getInstance_3().z5q_1);
      if (!(this_0.a5s() === year)) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of year is ' + dayOfYear + ', which is not a valid day of year for the year ' + year));
      }
      if (!(this.o5r_1 == null) && !(this_0.y5r() === this.o5r_1)) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of year is ' + dayOfYear + ', which is ' + this_0.p5w().toString() + ', ') + ('but ' + this.o5r_1 + ' was specified as the month number'));
      }
      if (!(this.p5r_1 == null) && !(this_0.s5r() === this.p5r_1)) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of year is ' + dayOfYear + ', which is the day ' + this_0.s5r() + ' of ' + this_0.p5w().toString() + ', ') + ('but ' + this.p5r_1 + ' was specified as the day of month'));
      }
      tmp = this_0;
    }
    var date = tmp;
    var tmp0_safe_receiver = this.q5r_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!(tmp0_safe_receiver === get_isoDayNumber(date.q5w()))) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of week is ' + DayOfWeek(tmp0_safe_receiver).toString() + ' but the date is ' + date.toString() + ', which is a ' + date.q5w().toString()));
      }
    }
    return date;
  };
  protoOf(IncompleteLocalDate).h5t = function () {
    return new IncompleteLocalDate(this.n5r_1, this.o5r_1, this.p5r_1, this.q5r_1, this.r5r_1);
  };
  protoOf(IncompleteLocalDate).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    if (other instanceof IncompleteLocalDate) {
      tmp_3 = this.n5r_1 == other.n5r_1;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = this.o5r_1 == other.o5r_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.p5r_1 == other.p5r_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.q5r_1 == other.q5r_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.r5r_1 == other.r5r_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalDate).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.n5r_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 923521);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.o5r_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    var tmp_0 = tmp + imul(tmp$ret$1, 29791) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.p5r_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp$ret$2 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    var tmp_1 = tmp_0 + imul(tmp$ret$2, 961) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.q5r_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    var tmp$ret$3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    var tmp_2 = tmp_1 + imul(tmp$ret$3, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_3 = this.r5r_1;
    var tmp1_elvis_lhs_3 = tmp0_safe_receiver_3 == null ? null : hashCode(tmp0_safe_receiver_3);
    return tmp_2 + (tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3) | 0;
  };
  protoOf(IncompleteLocalDate).toString = function () {
    var tmp0_elvis_lhs = this.n5r_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.o5r_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.p5r_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.q5r_1;
    return tmp + '-' + tmp_0 + '-' + tmp_1 + ' (day of week is ' + toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs) + ')';
  };
  function Companion_5() {
    Companion_instance_5 = this;
    this.q5t_1 = new MonthNames(listOf(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']));
    this.r5t_1 = new MonthNames(listOf(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']));
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function String$toString$ref() {
    var l = function (p0) {
      return toString(p0);
    };
    l.callableName = 'toString';
    return l;
  }
  function MonthNames(names) {
    Companion_getInstance_5();
    this.r5w_1 = names;
    // Inline function 'kotlin.require' call
    if (!(this.r5w_1.s() === 12)) {
      var message = 'Month names must contain exactly 12 elements';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var progression = get_indices(this.r5w_1);
    var inductionVariable = progression.f1_1;
    var last = progression.g1_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ix = element;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = this.r5w_1.u(ix);
        // Inline function 'kotlin.require' call
        if (!(charSequenceLength(this_0) > 0)) {
          var message_0 = 'A month name can not be empty';
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < ix)
          do {
            var ix2 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.require' call
            if (!!(this.r5w_1.u(ix) === this.r5w_1.u(ix2))) {
              var message_1 = "Month names must be unique, but '" + this.r5w_1.u(ix) + "' was repeated";
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
          }
           while (inductionVariable_0 < ix);
      }
       while (!(element === last));
  }
  protoOf(MonthNames).toString = function () {
    return joinToString(this.r5w_1, ', ', 'MonthNames(', ')', VOID, VOID, String$toString$ref());
  };
  protoOf(MonthNames).equals = function (other) {
    var tmp;
    if (other instanceof MonthNames) {
      tmp = equals(this.r5w_1, other.r5w_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthNames).hashCode = function () {
    return hashCode(this.r5w_1);
  };
  function Companion_6() {
    Companion_instance_6 = this;
    this.v5t_1 = new DayOfWeekNames(listOf(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']));
    this.w5t_1 = new DayOfWeekNames(listOf(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']));
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function String$toString$ref_0() {
    var l = function (p0) {
      return toString(p0);
    };
    l.callableName = 'toString';
    return l;
  }
  function DayOfWeekNames(names) {
    Companion_getInstance_6();
    this.s5w_1 = names;
    // Inline function 'kotlin.require' call
    if (!(this.s5w_1.s() === 7)) {
      var message = 'Day of week names must contain exactly 7 elements';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var progression = get_indices(this.s5w_1);
    var inductionVariable = progression.f1_1;
    var last = progression.g1_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ix = element;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = this.s5w_1.u(ix);
        // Inline function 'kotlin.require' call
        if (!(charSequenceLength(this_0) > 0)) {
          var message_0 = 'A day-of-week name can not be empty';
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < ix)
          do {
            var ix2 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.require' call
            if (!!(this.s5w_1.u(ix) === this.s5w_1.u(ix2))) {
              var message_1 = "Day-of-week names must be unique, but '" + this.s5w_1.u(ix) + "' was repeated";
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
          }
           while (inductionVariable_0 < ix);
      }
       while (!(element === last));
  }
  protoOf(DayOfWeekNames).toString = function () {
    return joinToString(this.s5w_1, ', ', 'DayOfWeekNames(', ')', VOID, VOID, String$toString$ref_0());
  };
  protoOf(DayOfWeekNames).equals = function (other) {
    var tmp;
    if (other instanceof DayOfWeekNames) {
      tmp = equals(this.s5w_1, other.s5w_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayOfWeekNames).hashCode = function () {
    return hashCode(this.s5w_1);
  };
  function Companion_7() {
  }
  protoOf(Companion_7).t5w = function (block) {
    var builder = new Builder_0(new AppendableFormatStructure());
    block(builder);
    return new LocalDateFormat(builder.w2u());
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function Builder_0(actualBuilder) {
    this.u5w_1 = actualBuilder;
  }
  protoOf(Builder_0).f5v = function () {
    return this.u5w_1;
  };
  protoOf(Builder_0).n5v = function (structure) {
    return this.u5w_1.i5v(structure);
  };
  protoOf(Builder_0).k5v = function () {
    return new Builder_0(new AppendableFormatStructure());
  };
  function LocalDateFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.v5w_1 = actualFormat;
  }
  protoOf(LocalDateFormat).d5w = function () {
    return this.v5w_1;
  };
  protoOf(LocalDateFormat).w5w = function (intermediate) {
    return intermediate.u5u();
  };
  protoOf(LocalDateFormat).f5w = function (intermediate) {
    return this.w5w(intermediate instanceof IncompleteLocalDate ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateFormat).g5w = function () {
    return get_emptyIncompleteLocalDate();
  };
  function requireParsedField(field, name) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    if (field == null) {
      throw DateTimeFormatException_init_$Create$_0('Can not create a ' + name + ' from the given input: the field ' + name + ' is missing');
    }
    return field;
  }
  function AbstractWithDateBuilder() {
  }
  function YearDirective(padding, isYearOfEra) {
    isYearOfEra = isYearOfEra === VOID ? false : isYearOfEra;
    var tmp = DateFields_getInstance().x5w_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 4 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 4 : null;
    SignedIntFieldFormatDirective.call(this, tmp, tmp_0, null, tmp$ret$1, 4);
    this.h5x_1 = padding;
    this.i5x_1 = isYearOfEra;
  }
  protoOf(YearDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof YearDirective) {
      tmp_0 = this.h5x_1.equals(other.h5x_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.i5x_1 === other.i5x_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(YearDirective).hashCode = function () {
    return imul(this.h5x_1.hashCode(), 31) + getBooleanHashCode(this.i5x_1) | 0;
  };
  function MonthDirective(padding) {
    var tmp = DateFields_getInstance().y5w_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.u5x_1 = padding;
  }
  protoOf(MonthDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthDirective) {
      tmp = this.u5x_1.equals(other.u5x_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthDirective).hashCode = function () {
    return this.u5x_1.hashCode();
  };
  function MonthNameDirective(names) {
    NamedUnsignedIntFieldFormatDirective.call(this, DateFields_getInstance().y5w_1, names.r5w_1, 'monthName');
    this.c5y_1 = names;
  }
  protoOf(MonthNameDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthNameDirective) {
      tmp = equals(this.c5y_1.r5w_1, other.c5y_1.r5w_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthNameDirective).hashCode = function () {
    return hashCode(this.c5y_1.r5w_1);
  };
  function DayDirective(padding) {
    var tmp = DateFields_getInstance().z5w_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.k5y_1 = padding;
  }
  protoOf(DayDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayDirective) {
      tmp = this.k5y_1.equals(other.k5y_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayDirective).hashCode = function () {
    return this.k5y_1.hashCode();
  };
  function DayOfWeekDirective(names) {
    NamedUnsignedIntFieldFormatDirective.call(this, DateFields_getInstance().a5x_1, names.s5w_1, 'dayOfWeekName');
    this.o5y_1 = names;
  }
  protoOf(DayOfWeekDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayOfWeekDirective) {
      tmp = equals(this.o5y_1.s5w_1, other.o5y_1.s5w_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayOfWeekDirective).hashCode = function () {
    return hashCode(this.o5y_1.s5w_1);
  };
  function DateFields() {
    DateFields_instance = this;
    this.x5w_1 = new GenericFieldSpec(new PropertyAccessor(year$factory_2()));
    this.y5w_1 = new UnsignedFieldSpec(new PropertyAccessor(monthNumber$factory_0()), 1, 12);
    this.z5w_1 = new UnsignedFieldSpec(new PropertyAccessor(dayOfMonth$factory_0()), 1, 31);
    this.a5x_1 = new UnsignedFieldSpec(new PropertyAccessor(isoDayOfWeek$factory()), 1, 7);
    this.b5x_1 = new UnsignedFieldSpec(new PropertyAccessor(dayOfYear$factory_0()), 1, 366);
  }
  var DateFields_instance;
  function DateFields_getInstance() {
    if (DateFields_instance == null)
      new DateFields();
    return DateFields_instance;
  }
  function ISO_DATE$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_instance_7;
    return tmp.t5w(ISO_DATE$delegate$lambda$lambda);
  }
  function ISO_DATE$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.t5t();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.r5v();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.s5v();
    return Unit_instance;
  }
  function ISO_DATE_BASIC$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_instance_7;
    return tmp.t5w(ISO_DATE_BASIC$delegate$lambda$lambda);
  }
  function ISO_DATE_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.t5t();
    $this$build.r5v();
    $this$build.s5v();
    return Unit_instance;
  }
  function ISO_DATE$factory() {
    return getPropertyCallableRef('ISO_DATE', 0, KProperty0, function () {
      return get_ISO_DATE();
    }, null);
  }
  function ISO_DATE_BASIC$factory() {
    return getPropertyCallableRef('ISO_DATE_BASIC', 0, KProperty0, function () {
      return get_ISO_DATE_BASIC();
    }, null);
  }
  function year$factory_2() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.a5s();
    }, function (receiver, value) {
      return receiver.z5r(value);
    });
  }
  function monthNumber$factory_0() {
    return getPropertyCallableRef('monthNumber', 1, KMutableProperty1, function (receiver) {
      return receiver.y5r();
    }, function (receiver, value) {
      return receiver.x5r(value);
    });
  }
  function dayOfMonth$factory_0() {
    return getPropertyCallableRef('dayOfMonth', 1, KMutableProperty1, function (receiver) {
      return receiver.s5r();
    }, function (receiver, value) {
      return receiver.m5r(value);
    });
  }
  function isoDayOfWeek$factory() {
    return getPropertyCallableRef('isoDayOfWeek', 1, KMutableProperty1, function (receiver) {
      return receiver.w5r();
    }, function (receiver, value) {
      return receiver.v5r(value);
    });
  }
  function dayOfYear$factory_0() {
    return getPropertyCallableRef('dayOfYear', 1, KMutableProperty1, function (receiver) {
      return receiver.u5r();
    }, function (receiver, value) {
      return receiver.t5r(value);
    });
  }
  var properties_initialized_LocalDateFormat_kt_fmnlhc;
  function _init_properties_LocalDateFormat_kt__k1uk9u() {
    if (!properties_initialized_LocalDateFormat_kt_fmnlhc) {
      properties_initialized_LocalDateFormat_kt_fmnlhc = true;
      ISO_DATE$delegate = lazy(ISO_DATE$delegate$lambda);
      ISO_DATE_BASIC$delegate = lazy(ISO_DATE_BASIC$delegate$lambda);
      emptyIncompleteLocalDate = new IncompleteLocalDate();
    }
  }
  function get_ISO_DATETIME() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    var tmp0 = ISO_DATETIME$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_DATETIME$factory();
    return tmp0.z();
  }
  var ISO_DATETIME$delegate;
  function get_emptyIncompleteLocalDateTime() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    return emptyIncompleteLocalDateTime;
  }
  var emptyIncompleteLocalDateTime;
  function Companion_8() {
  }
  protoOf(Companion_8).p5y = function (block) {
    var builder = new Builder_1(new AppendableFormatStructure());
    block(builder);
    return new LocalDateTimeFormat(builder.w2u());
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function Builder_1(actualBuilder) {
    this.q5y_1 = actualBuilder;
  }
  protoOf(Builder_1).f5v = function () {
    return this.q5y_1;
  };
  protoOf(Builder_1).g5v = function (structure) {
    this.q5y_1.i5v(structure);
  };
  protoOf(Builder_1).k5v = function () {
    return new Builder_1(new AppendableFormatStructure());
  };
  function LocalDateTimeFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.r5y_1 = actualFormat;
  }
  protoOf(LocalDateTimeFormat).d5w = function () {
    return this.r5y_1;
  };
  protoOf(LocalDateTimeFormat).s5y = function (intermediate) {
    return intermediate.v5y();
  };
  protoOf(LocalDateTimeFormat).f5w = function (intermediate) {
    return this.s5y(intermediate instanceof IncompleteLocalDateTime ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateTimeFormat).g5w = function () {
    return get_emptyIncompleteLocalDateTime();
  };
  function IncompleteLocalDateTime(date, time) {
    date = date === VOID ? new IncompleteLocalDate() : date;
    time = time === VOID ? new IncompleteLocalTime() : time;
    this.t5y_1 = date;
    this.u5y_1 = time;
  }
  protoOf(IncompleteLocalDateTime).m5r = function (_set____db54di) {
    this.t5y_1.p5r_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).s5r = function () {
    return this.t5y_1.p5r_1;
  };
  protoOf(IncompleteLocalDateTime).t5r = function (_set____db54di) {
    this.t5y_1.r5r_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).u5r = function () {
    return this.t5y_1.r5r_1;
  };
  protoOf(IncompleteLocalDateTime).v5r = function (_set____db54di) {
    this.t5y_1.q5r_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).w5r = function () {
    return this.t5y_1.q5r_1;
  };
  protoOf(IncompleteLocalDateTime).x5r = function (_set____db54di) {
    this.t5y_1.o5r_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).y5r = function () {
    return this.t5y_1.o5r_1;
  };
  protoOf(IncompleteLocalDateTime).z5r = function (_set____db54di) {
    this.t5y_1.n5r_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).a5s = function () {
    return this.t5y_1.n5r_1;
  };
  protoOf(IncompleteLocalDateTime).b5s = function (_set____db54di) {
    this.u5y_1.e5s_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).i5s = function () {
    return this.u5y_1.e5s_1;
  };
  protoOf(IncompleteLocalDateTime).j5s = function (value) {
    this.u5y_1.j5s(value);
  };
  protoOf(IncompleteLocalDateTime).k5s = function () {
    return this.u5y_1.k5s();
  };
  protoOf(IncompleteLocalDateTime).l5s = function (_set____db54di) {
    this.u5y_1.c5s_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).m5s = function () {
    return this.u5y_1.c5s_1;
  };
  protoOf(IncompleteLocalDateTime).n5s = function (_set____db54di) {
    this.u5y_1.d5s_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).o5s = function () {
    return this.u5y_1.d5s_1;
  };
  protoOf(IncompleteLocalDateTime).p5s = function (_set____db54di) {
    this.u5y_1.f5s_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).q5s = function () {
    return this.u5y_1.f5s_1;
  };
  protoOf(IncompleteLocalDateTime).r5s = function (_set____db54di) {
    this.u5y_1.h5s_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).s5s = function () {
    return this.u5y_1.h5s_1;
  };
  protoOf(IncompleteLocalDateTime).t5s = function (_set____db54di) {
    this.u5y_1.g5s_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).u5s = function () {
    return this.u5y_1.g5s_1;
  };
  protoOf(IncompleteLocalDateTime).v5y = function () {
    return LocalDateTime_init_$Create$(this.t5y_1.u5u(), this.u5y_1.s5u());
  };
  protoOf(IncompleteLocalDateTime).h5t = function () {
    return new IncompleteLocalDateTime(this.t5y_1.h5t(), this.u5y_1.h5t());
  };
  function AbstractWithDateTimeBuilder() {
  }
  function ISO_DATETIME$delegate$lambda() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    var tmp = Companion_instance_8;
    return tmp.p5y(ISO_DATETIME$delegate$lambda$lambda);
  }
  function ISO_DATETIME$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    $this$build.i5t(get_ISO_DATE());
    var tmp = [ISO_DATETIME$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_DATETIME$delegate$lambda$lambda$lambda_0);
    $this$build.w5v(get_ISO_TIME());
    return Unit_instance;
  }
  function ISO_DATETIME$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(116));
    return Unit_instance;
  }
  function ISO_DATETIME$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(84));
    return Unit_instance;
  }
  function ISO_DATETIME$factory() {
    return getPropertyCallableRef('ISO_DATETIME', 0, KProperty0, function () {
      return get_ISO_DATETIME();
    }, null);
  }
  var properties_initialized_LocalDateTimeFormat_kt_67ys6r;
  function _init_properties_LocalDateTimeFormat_kt__aloigl() {
    if (!properties_initialized_LocalDateTimeFormat_kt_67ys6r) {
      properties_initialized_LocalDateTimeFormat_kt_67ys6r = true;
      ISO_DATETIME$delegate = lazy(ISO_DATETIME$delegate$lambda);
      emptyIncompleteLocalDateTime = new IncompleteLocalDateTime();
    }
  }
  function get_ISO_TIME() {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    var tmp0 = ISO_TIME$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_TIME$factory();
    return tmp0.z();
  }
  var ISO_TIME$delegate;
  function get_emptyIncompleteLocalTime() {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    return emptyIncompleteLocalTime;
  }
  var emptyIncompleteLocalTime;
  function TimeFieldContainer() {
  }
  function IncompleteLocalTime(hour, hourOfAmPm, amPm, minute, second, nanosecond) {
    hour = hour === VOID ? null : hour;
    hourOfAmPm = hourOfAmPm === VOID ? null : hourOfAmPm;
    amPm = amPm === VOID ? null : amPm;
    minute = minute === VOID ? null : minute;
    second = second === VOID ? null : second;
    nanosecond = nanosecond === VOID ? null : nanosecond;
    this.c5s_1 = hour;
    this.d5s_1 = hourOfAmPm;
    this.e5s_1 = amPm;
    this.f5s_1 = minute;
    this.g5s_1 = second;
    this.h5s_1 = nanosecond;
  }
  protoOf(IncompleteLocalTime).l5s = function (_set____db54di) {
    this.c5s_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).m5s = function () {
    return this.c5s_1;
  };
  protoOf(IncompleteLocalTime).n5s = function (_set____db54di) {
    this.d5s_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).o5s = function () {
    return this.d5s_1;
  };
  protoOf(IncompleteLocalTime).b5s = function (_set____db54di) {
    this.e5s_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).i5s = function () {
    return this.e5s_1;
  };
  protoOf(IncompleteLocalTime).p5s = function (_set____db54di) {
    this.f5s_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).q5s = function () {
    return this.f5s_1;
  };
  protoOf(IncompleteLocalTime).t5s = function (_set____db54di) {
    this.g5s_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).u5s = function () {
    return this.g5s_1;
  };
  protoOf(IncompleteLocalTime).r5s = function (_set____db54di) {
    this.h5s_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).s5s = function () {
    return this.h5s_1;
  };
  protoOf(IncompleteLocalTime).s5u = function () {
    var tmp0_safe_receiver = this.c5s_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = this.d5s_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.require' call
        if (!((((tmp0_safe_receiver + 11 | 0) % 12 | 0) + 1 | 0) === tmp0_safe_receiver_0)) {
          var message = 'Inconsistent hour and hour-of-am-pm: hour is ' + tmp0_safe_receiver + ', but hour-of-am-pm is ' + tmp0_safe_receiver_0;
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
      }
      var tmp1_safe_receiver = this.e5s_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.require' call
        if (!(tmp1_safe_receiver.equals(AmPmMarker_PM_getInstance()) === tmp0_safe_receiver >= 12)) {
          var message_0 = 'Inconsistent hour and the AM/PM marker: hour is ' + tmp0_safe_receiver + ', but the AM/PM marker is ' + tmp1_safe_receiver.toString();
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
      }
      tmp = tmp0_safe_receiver;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver_0 = this.d5s_1;
      var tmp_1;
      if (tmp1_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp0_safe_receiver_1 = this.e5s_1;
        var tmp_2;
        if (tmp0_safe_receiver_1 == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.let' call
          tmp_2 = (tmp1_safe_receiver_0 === 12 ? 0 : tmp1_safe_receiver_0) + (tmp0_safe_receiver_1.equals(AmPmMarker_PM_getInstance()) ? 12 : 0) | 0;
        }
        tmp_1 = tmp_2;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_0;
    var tmp_3;
    if (tmp3_elvis_lhs == null) {
      throw DateTimeFormatException_init_$Create$_0('Incomplete time: missing hour');
    } else {
      tmp_3 = tmp3_elvis_lhs;
    }
    var hour = tmp_3;
    var tmp_4 = requireParsedField(this.f5s_1, 'minute');
    var tmp4_elvis_lhs = this.g5s_1;
    var tmp_5 = tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = this.h5s_1;
    return LocalTime_init_$Create$(hour, tmp_4, tmp_5, tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs);
  };
  protoOf(IncompleteLocalTime).h5t = function () {
    return new IncompleteLocalTime(this.c5s_1, this.d5s_1, this.e5s_1, this.f5s_1, this.g5s_1, this.h5s_1);
  };
  protoOf(IncompleteLocalTime).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    if (other instanceof IncompleteLocalTime) {
      tmp_4 = this.c5s_1 == other.c5s_1;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = this.d5s_1 == other.d5s_1;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = equals(this.e5s_1, other.e5s_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.f5s_1 == other.f5s_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.g5s_1 == other.g5s_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.h5s_1 == other.h5s_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalTime).hashCode = function () {
    var tmp6_elvis_lhs = this.c5s_1;
    var tmp = imul(tmp6_elvis_lhs == null ? 0 : tmp6_elvis_lhs, 31);
    var tmp5_elvis_lhs = this.d5s_1;
    var tmp_0 = tmp + imul(tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs, 31) | 0;
    var tmp3_safe_receiver = this.e5s_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.hashCode();
    var tmp_1 = tmp_0 + imul(tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs, 31) | 0;
    var tmp2_elvis_lhs = this.f5s_1;
    var tmp_2 = tmp_1 + imul(tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs, 31) | 0;
    var tmp1_elvis_lhs = this.g5s_1;
    var tmp_3 = tmp_2 + imul(tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, 31) | 0;
    var tmp0_elvis_lhs = this.h5s_1;
    return tmp_3 + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
  };
  protoOf(IncompleteLocalTime).toString = function () {
    var tmp0_elvis_lhs = this.c5s_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.f5s_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.g5s_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_safe_receiver = this.h5s_1;
    var tmp_2;
    if (tmp3_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.let' call
      var it = tmp3_safe_receiver.toString();
      tmp_2 = padStart(it, 9 - it.length | 0, _Char___init__impl__6a9atx(48));
    }
    var tmp4_elvis_lhs = tmp_2;
    return tmp + ':' + tmp_0 + ':' + tmp_1 + '.' + (tmp4_elvis_lhs == null ? '???' : tmp4_elvis_lhs);
  };
  var AmPmMarker_AM_instance;
  var AmPmMarker_PM_instance;
  var AmPmMarker_entriesInitialized;
  function AmPmMarker_initEntries() {
    if (AmPmMarker_entriesInitialized)
      return Unit_instance;
    AmPmMarker_entriesInitialized = true;
    AmPmMarker_AM_instance = new AmPmMarker('AM', 0);
    AmPmMarker_PM_instance = new AmPmMarker('PM', 1);
  }
  function AmPmMarker(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_9() {
  }
  protoOf(Companion_9).z5y = function (block) {
    var builder = new Builder_2(new AppendableFormatStructure());
    block(builder);
    return new LocalTimeFormat(builder.w2u());
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function Builder_2(actualBuilder) {
    this.a5z_1 = actualBuilder;
  }
  protoOf(Builder_2).f5v = function () {
    return this.a5z_1;
  };
  protoOf(Builder_2).o5v = function (structure) {
    this.a5z_1.i5v(structure);
  };
  protoOf(Builder_2).k5v = function () {
    return new Builder_2(new AppendableFormatStructure());
  };
  function LocalTimeFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.b5z_1 = actualFormat;
  }
  protoOf(LocalTimeFormat).d5w = function () {
    return this.b5z_1;
  };
  protoOf(LocalTimeFormat).c5z = function (intermediate) {
    return intermediate.s5u();
  };
  protoOf(LocalTimeFormat).f5w = function (intermediate) {
    return this.c5z(intermediate instanceof IncompleteLocalTime ? intermediate : THROW_CCE());
  };
  protoOf(LocalTimeFormat).g5w = function () {
    return get_emptyIncompleteLocalTime();
  };
  function AbstractWithTimeBuilder() {
  }
  function HourDirective(padding) {
    var tmp = TimeFields_getInstance().d5z_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.n5z_1 = padding;
  }
  protoOf(HourDirective).equals = function (other) {
    var tmp;
    if (other instanceof HourDirective) {
      tmp = this.n5z_1.equals(other.n5z_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HourDirective).hashCode = function () {
    return this.n5z_1.hashCode();
  };
  function MinuteDirective(padding) {
    var tmp = TimeFields_getInstance().e5z_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.s5z_1 = padding;
  }
  protoOf(MinuteDirective).equals = function (other) {
    var tmp;
    if (other instanceof MinuteDirective) {
      tmp = this.s5z_1.equals(other.s5z_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MinuteDirective).hashCode = function () {
    return this.s5z_1.hashCode();
  };
  function SecondDirective(padding) {
    var tmp = TimeFields_getInstance().f5z_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.x5z_1 = padding;
  }
  protoOf(SecondDirective).equals = function (other) {
    var tmp;
    if (other instanceof SecondDirective) {
      tmp = this.x5z_1.equals(other.x5z_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SecondDirective).hashCode = function () {
    return this.x5z_1.hashCode();
  };
  function Companion_10() {
    Companion_instance_10 = this;
    this.y5z_1 = listOf([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    this.z5z_1 = listOf([2, 1, 0, 2, 1, 0, 2, 1, 0]);
  }
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function FractionalSecondDirective(minDigits, maxDigits, zerosToAdd) {
    Companion_getInstance_10();
    zerosToAdd = zerosToAdd === VOID ? Companion_getInstance_10().y5z_1 : zerosToAdd;
    DecimalFractionFieldFormatDirective.call(this, TimeFields_getInstance().g5z_1, minDigits, maxDigits, zerosToAdd);
    this.e60_1 = minDigits;
    this.f60_1 = maxDigits;
  }
  protoOf(FractionalSecondDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof FractionalSecondDirective) {
      tmp_0 = this.e60_1 === other.e60_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.f60_1 === other.f60_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(FractionalSecondDirective).hashCode = function () {
    return imul(31, this.e60_1) + this.f60_1 | 0;
  };
  function TimeFields() {
    TimeFields_instance = this;
    this.d5z_1 = new UnsignedFieldSpec(new PropertyAccessor(hour$factory_0()), 0, 23);
    this.e5z_1 = new UnsignedFieldSpec(new PropertyAccessor(minute$factory_0()), 0, 59);
    this.f5z_1 = new UnsignedFieldSpec(new PropertyAccessor(second$factory_0()), 0, 59, VOID, 0);
    this.g5z_1 = new GenericFieldSpec(new PropertyAccessor(fractionOfSecond$factory()), VOID, new DecimalFraction(0, 9));
    this.h5z_1 = new GenericFieldSpec(new PropertyAccessor(amPm$factory_0()));
    this.i5z_1 = new UnsignedFieldSpec(new PropertyAccessor(hourOfAmPm$factory_0()), 1, 12);
  }
  var TimeFields_instance;
  function TimeFields_getInstance() {
    if (TimeFields_instance == null)
      new TimeFields();
    return TimeFields_instance;
  }
  function ISO_TIME$delegate$lambda() {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    var tmp = Companion_instance_9;
    return tmp.z5y(ISO_TIME$delegate$lambda$lambda);
  }
  function ISO_TIME$delegate$lambda$lambda($this$build) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    $this$build.j5t();
    char($this$build, _Char___init__impl__6a9atx(58));
    $this$build.k5t();
    var tmp = [ISO_TIME$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_TIME$delegate$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function ISO_TIME$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    return Unit_instance;
  }
  function ISO_TIME$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    char($this$alternativeParsing, _Char___init__impl__6a9atx(58));
    $this$alternativeParsing.l5t();
    optional($this$alternativeParsing, VOID, ISO_TIME$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_TIME$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    char($this$optional, _Char___init__impl__6a9atx(46));
    $this$optional.m5t(1, 9);
    return Unit_instance;
  }
  function AmPmMarker_PM_getInstance() {
    AmPmMarker_initEntries();
    return AmPmMarker_PM_instance;
  }
  function ISO_TIME$factory() {
    return getPropertyCallableRef('ISO_TIME', 0, KProperty0, function () {
      return get_ISO_TIME();
    }, null);
  }
  function hour$factory_0() {
    return getPropertyCallableRef('hour', 1, KMutableProperty1, function (receiver) {
      return receiver.m5s();
    }, function (receiver, value) {
      return receiver.l5s(value);
    });
  }
  function minute$factory_0() {
    return getPropertyCallableRef('minute', 1, KMutableProperty1, function (receiver) {
      return receiver.q5s();
    }, function (receiver, value) {
      return receiver.p5s(value);
    });
  }
  function second$factory_0() {
    return getPropertyCallableRef('second', 1, KMutableProperty1, function (receiver) {
      return receiver.u5s();
    }, function (receiver, value) {
      return receiver.t5s(value);
    });
  }
  function fractionOfSecond$factory() {
    return getPropertyCallableRef('fractionOfSecond', 1, KMutableProperty1, function (receiver) {
      return receiver.k5s();
    }, function (receiver, value) {
      return receiver.j5s(value);
    });
  }
  function amPm$factory_0() {
    return getPropertyCallableRef('amPm', 1, KMutableProperty1, function (receiver) {
      return receiver.i5s();
    }, function (receiver, value) {
      return receiver.b5s(value);
    });
  }
  function hourOfAmPm$factory_0() {
    return getPropertyCallableRef('hourOfAmPm', 1, KMutableProperty1, function (receiver) {
      return receiver.o5s();
    }, function (receiver, value) {
      return receiver.n5s(value);
    });
  }
  var properties_initialized_LocalTimeFormat_kt_l1b0w1;
  function _init_properties_LocalTimeFormat_kt__5i3lfh() {
    if (!properties_initialized_LocalTimeFormat_kt_l1b0w1) {
      properties_initialized_LocalTimeFormat_kt_l1b0w1 = true;
      ISO_TIME$delegate = lazy(ISO_TIME$delegate$lambda);
      emptyIncompleteLocalTime = new IncompleteLocalTime();
    }
  }
  function get_ISO_OFFSET() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp0 = ISO_OFFSET$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_OFFSET$factory();
    return tmp0.z();
  }
  var ISO_OFFSET$delegate;
  function get_ISO_OFFSET_BASIC() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp0 = ISO_OFFSET_BASIC$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_OFFSET_BASIC$factory();
    return tmp0.z();
  }
  var ISO_OFFSET_BASIC$delegate;
  function get_FOUR_DIGIT_OFFSET() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp0 = FOUR_DIGIT_OFFSET$delegate;
    // Inline function 'kotlin.getValue' call
    FOUR_DIGIT_OFFSET$factory();
    return tmp0.z();
  }
  var FOUR_DIGIT_OFFSET$delegate;
  function get_emptyIncompleteUtcOffset() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    return emptyIncompleteUtcOffset;
  }
  var emptyIncompleteUtcOffset;
  function UtcOffsetFieldContainer() {
  }
  function IncompleteUtcOffset(isNegative, totalHoursAbs, minutesOfHour, secondsOfMinute) {
    isNegative = isNegative === VOID ? null : isNegative;
    totalHoursAbs = totalHoursAbs === VOID ? null : totalHoursAbs;
    minutesOfHour = minutesOfHour === VOID ? null : minutesOfHour;
    secondsOfMinute = secondsOfMinute === VOID ? null : secondsOfMinute;
    this.w5s_1 = isNegative;
    this.x5s_1 = totalHoursAbs;
    this.y5s_1 = minutesOfHour;
    this.z5s_1 = secondsOfMinute;
  }
  protoOf(IncompleteUtcOffset).v5s = function (_set____db54di) {
    this.w5s_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).a5t = function () {
    return this.w5s_1;
  };
  protoOf(IncompleteUtcOffset).f5t = function (_set____db54di) {
    this.x5s_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).g5t = function () {
    return this.x5s_1;
  };
  protoOf(IncompleteUtcOffset).b5t = function (_set____db54di) {
    this.y5s_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).c5t = function () {
    return this.y5s_1;
  };
  protoOf(IncompleteUtcOffset).d5t = function (_set____db54di) {
    this.z5s_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).e5t = function () {
    return this.z5s_1;
  };
  protoOf(IncompleteUtcOffset).r5u = function () {
    var sign = this.w5s_1 === true ? -1 : 1;
    var tmp0_safe_receiver = this.x5s_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = imul(tmp0_safe_receiver, sign);
    }
    var tmp_0 = tmp;
    var tmp1_safe_receiver = this.y5s_1;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = imul(tmp1_safe_receiver, sign);
    }
    var tmp_2 = tmp_1;
    var tmp2_safe_receiver = this.z5s_1;
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = imul(tmp2_safe_receiver, sign);
    }
    return UtcOffset_0(tmp_0, tmp_2, tmp_3);
  };
  protoOf(IncompleteUtcOffset).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof IncompleteUtcOffset) {
      tmp_2 = this.w5s_1 == other.w5s_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.x5s_1 == other.x5s_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.y5s_1 == other.y5s_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.z5s_1 == other.z5s_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteUtcOffset).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.w5s_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.x5s_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp_0 = tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.y5s_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp_1 = tmp_0 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.z5s_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    return tmp_1 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
  };
  protoOf(IncompleteUtcOffset).h5t = function () {
    return new IncompleteUtcOffset(this.w5s_1, this.x5s_1, this.y5s_1, this.z5s_1);
  };
  protoOf(IncompleteUtcOffset).toString = function () {
    var tmp0_safe_receiver = this.w5s_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = tmp0_safe_receiver ? '-' : '+';
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0 = tmp1_elvis_lhs == null ? ' ' : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.x5s_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.y5s_1;
    var tmp_2 = toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs);
    var tmp4_elvis_lhs = this.z5s_1;
    return tmp_0 + tmp_1 + ':' + tmp_2 + ':' + toString(tmp4_elvis_lhs == null ? '??' : tmp4_elvis_lhs);
  };
  function UtcOffsetWholeHoursDirective(padding) {
    var tmp = OffsetFields_getInstance().l60_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.s60_1 = padding;
  }
  protoOf(UtcOffsetWholeHoursDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetWholeHoursDirective) {
      tmp = this.s60_1.equals(other.s60_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetWholeHoursDirective).hashCode = function () {
    return this.s60_1.hashCode();
  };
  function Companion_11() {
  }
  protoOf(Companion_11).t60 = function (block) {
    var builder = new Builder_3(new AppendableFormatStructure());
    block(builder);
    return new UtcOffsetFormat(builder.w2u());
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function Builder_3(actualBuilder) {
    this.u60_1 = actualBuilder;
  }
  protoOf(Builder_3).f5v = function () {
    return this.u60_1;
  };
  protoOf(Builder_3).j5v = function (structure) {
    this.u60_1.i5v(structure);
  };
  protoOf(Builder_3).k5v = function () {
    return new Builder_3(new AppendableFormatStructure());
  };
  function UtcOffsetFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.v60_1 = actualFormat;
  }
  protoOf(UtcOffsetFormat).d5w = function () {
    return this.v60_1;
  };
  protoOf(UtcOffsetFormat).w60 = function (intermediate) {
    return intermediate.r5u();
  };
  protoOf(UtcOffsetFormat).f5w = function (intermediate) {
    return this.w60(intermediate instanceof IncompleteUtcOffset ? intermediate : THROW_CCE());
  };
  protoOf(UtcOffsetFormat).g5w = function () {
    return get_emptyIncompleteUtcOffset();
  };
  function OffsetFields$sign$1() {
    this.x60_1 = new PropertyAccessor(isNegative$factory_0());
  }
  protoOf(OffsetFields$sign$1).a5t = function () {
    return this.x60_1;
  };
  protoOf(OffsetFields$sign$1).y60 = function (obj) {
    var tmp;
    var tmp_0;
    var tmp0_elvis_lhs = obj.g5t();
    if ((tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) === 0) {
      var tmp1_elvis_lhs = obj.c5t();
      tmp_0 = (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) === 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp2_elvis_lhs = obj.e5t();
      tmp = (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OffsetFields$sign$1).z60 = function (obj) {
    return this.y60((!(obj == null) ? isInterface(obj, UtcOffsetFieldContainer) : false) ? obj : THROW_CCE());
  };
  function OffsetFields() {
    OffsetFields_instance = this;
    var tmp = this;
    tmp.k60_1 = new OffsetFields$sign$1();
    var tmp_0 = this;
    var tmp0_accessor = new PropertyAccessor(totalHoursAbs$factory_0());
    var tmp1_sign = this.k60_1;
    tmp_0.l60_1 = new UnsignedFieldSpec(tmp0_accessor, 0, 18, VOID, 0, tmp1_sign);
    var tmp_1 = this;
    var tmp0_accessor_0 = new PropertyAccessor(minutesOfHour$factory_0());
    var tmp1_sign_0 = this.k60_1;
    tmp_1.m60_1 = new UnsignedFieldSpec(tmp0_accessor_0, 0, 59, VOID, 0, tmp1_sign_0);
    var tmp_2 = this;
    var tmp0_accessor_1 = new PropertyAccessor(secondsOfMinute$factory_0());
    var tmp1_sign_1 = this.k60_1;
    tmp_2.n60_1 = new UnsignedFieldSpec(tmp0_accessor_1, 0, 59, VOID, 0, tmp1_sign_1);
  }
  var OffsetFields_instance;
  function OffsetFields_getInstance() {
    if (OffsetFields_instance == null)
      new OffsetFields();
    return OffsetFields_instance;
  }
  function AbstractWithOffsetBuilder() {
  }
  function UtcOffsetMinuteOfHourDirective(padding) {
    var tmp = OffsetFields_getInstance().m60_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.e61_1 = padding;
  }
  protoOf(UtcOffsetMinuteOfHourDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetMinuteOfHourDirective) {
      tmp = this.e61_1.equals(other.e61_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetMinuteOfHourDirective).hashCode = function () {
    return this.e61_1.hashCode();
  };
  function UtcOffsetSecondOfMinuteDirective(padding) {
    var tmp = OffsetFields_getInstance().n60_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.j61_1 = padding;
  }
  protoOf(UtcOffsetSecondOfMinuteDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetSecondOfMinuteDirective) {
      tmp = this.j61_1.equals(other.j61_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetSecondOfMinuteDirective).hashCode = function () {
    return this.j61_1.hashCode();
  };
  function ISO_OFFSET$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_11;
    return tmp.t60(ISO_OFFSET$delegate$lambda$lambda);
  }
  function ISO_OFFSET$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = [ISO_OFFSET$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_OFFSET$delegate$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$alternativeParsing.u5t('z');
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    optional($this$alternativeParsing, 'Z', ISO_OFFSET$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.n5t();
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.z5v();
    optional($this$optional, VOID, ISO_OFFSET$delegate$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.b5w();
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_11;
    return tmp.t60(ISO_OFFSET_BASIC$delegate$lambda$lambda);
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = [ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$alternativeParsing.u5t('z');
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    optional($this$alternativeParsing, 'Z', ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.n5t();
    optional($this$optional, VOID, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.z5v();
    optional($this$optional, VOID, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.b5w();
    return Unit_instance;
  }
  function FOUR_DIGIT_OFFSET$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_11;
    return tmp.t60(FOUR_DIGIT_OFFSET$delegate$lambda$lambda);
  }
  function FOUR_DIGIT_OFFSET$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$build.n5t();
    $this$build.z5v();
    return Unit_instance;
  }
  function ISO_OFFSET$factory() {
    return getPropertyCallableRef('ISO_OFFSET', 0, KProperty0, function () {
      return get_ISO_OFFSET();
    }, null);
  }
  function ISO_OFFSET_BASIC$factory() {
    return getPropertyCallableRef('ISO_OFFSET_BASIC', 0, KProperty0, function () {
      return get_ISO_OFFSET_BASIC();
    }, null);
  }
  function FOUR_DIGIT_OFFSET$factory() {
    return getPropertyCallableRef('FOUR_DIGIT_OFFSET', 0, KProperty0, function () {
      return get_FOUR_DIGIT_OFFSET();
    }, null);
  }
  function totalHoursAbs$factory_0() {
    return getPropertyCallableRef('totalHoursAbs', 1, KMutableProperty1, function (receiver) {
      return receiver.g5t();
    }, function (receiver, value) {
      return receiver.f5t(value);
    });
  }
  function minutesOfHour$factory_0() {
    return getPropertyCallableRef('minutesOfHour', 1, KMutableProperty1, function (receiver) {
      return receiver.c5t();
    }, function (receiver, value) {
      return receiver.b5t(value);
    });
  }
  function secondsOfMinute$factory_0() {
    return getPropertyCallableRef('secondsOfMinute', 1, KMutableProperty1, function (receiver) {
      return receiver.e5t();
    }, function (receiver, value) {
      return receiver.d5t(value);
    });
  }
  function isNegative$factory_0() {
    return getPropertyCallableRef('isNegative', 1, KMutableProperty1, function (receiver) {
      return receiver.a5t();
    }, function (receiver, value) {
      return receiver.v5s(value);
    });
  }
  var properties_initialized_UtcOffsetFormat_kt_6y9jku;
  function _init_properties_UtcOffsetFormat_kt__9r9ddw() {
    if (!properties_initialized_UtcOffsetFormat_kt_6y9jku) {
      properties_initialized_UtcOffsetFormat_kt_6y9jku = true;
      ISO_OFFSET$delegate = lazy(ISO_OFFSET$delegate$lambda);
      ISO_OFFSET_BASIC$delegate = lazy(ISO_OFFSET_BASIC$delegate$lambda);
      FOUR_DIGIT_OFFSET$delegate = lazy(FOUR_DIGIT_OFFSET$delegate$lambda);
      emptyIncompleteUtcOffset = new IncompleteUtcOffset();
    }
  }
  function AppendableFormatStructure() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.h5v_1 = ArrayList_init_$Create$_0();
  }
  protoOf(AppendableFormatStructure).w2u = function () {
    return new ConcatenatedFormatStructure(this.h5v_1);
  };
  protoOf(AppendableFormatStructure).i5v = function (format) {
    if (isInterface(format, NonConcatenatedFormatStructure)) {
      this.h5v_1.n(format);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.o5w_1.p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
          this.h5v_1.n(element);
        }
      }
    }
  };
  function Accessor$getterNotNull$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.k61(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function SignedIntFieldFormatDirective(field, minDigits, maxDigits, spacePadding, outputPlusOnExceededWidth) {
    this.j5x_1 = field;
    this.k5x_1 = minDigits;
    this.l5x_1 = maxDigits;
    this.m5x_1 = spacePadding;
    this.n5x_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.k5x_1 == null || this.k5x_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.k5x_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.l5x_1 == null || this.k5x_1 == null || this.l5x_1 >= this.k5x_1)) {
      var message_0 = 'The maximum number of digits (' + this.l5x_1 + ') is less than the minimum number of digits (' + this.k5x_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(SignedIntFieldFormatDirective).o5x = function () {
    return this.j5x_1;
  };
  protoOf(SignedIntFieldFormatDirective).p5x = function () {
    var tmp = Accessor$getterNotNull$ref(this.j5x_1.l61());
    var tmp0_elvis_lhs = this.k5x_1;
    var formatter = new SignedIntFormatterStructure(tmp, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs, this.n5x_1);
    return !(this.m5x_1 == null) ? new SpacePaddedFormatter(formatter, this.m5x_1) : formatter;
  };
  protoOf(SignedIntFieldFormatDirective).n5w = function () {
    return SignedIntParser(this.k5x_1, this.l5x_1, this.m5x_1, this.j5x_1.l61(), this.j5x_1.s2(), this.n5x_1);
  };
  function Accessor$getterNotNull$ref_0($boundThis) {
    var l = function (p0) {
      return $boundThis.k61(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function UnsignedIntFieldFormatDirective(field, minDigits, spacePadding) {
    this.v5x_1 = field;
    this.w5x_1 = minDigits;
    this.x5x_1 = spacePadding;
    this.y5x_1 = this.v5x_1.s61_1;
    // Inline function 'kotlin.require' call
    if (!(this.w5x_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.w5x_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.y5x_1 >= this.w5x_1)) {
      var message_0 = 'The maximum number of digits (' + this.y5x_1 + ') is less than the minimum number of digits (' + this.w5x_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (!(this.x5x_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.x5x_1 > this.w5x_1)) {
        var message_1 = 'The space padding (' + this.x5x_1 + ') should be more than the minimum number of digits (' + this.w5x_1 + ')';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  protoOf(UnsignedIntFieldFormatDirective).o5x = function () {
    return this.v5x_1;
  };
  protoOf(UnsignedIntFieldFormatDirective).p5x = function () {
    var formatter = new UnsignedIntFormatterStructure(Accessor$getterNotNull$ref_0(this.v5x_1.m61_1), this.w5x_1);
    return !(this.x5x_1 == null) ? new SpacePaddedFormatter(formatter, this.x5x_1) : formatter;
  };
  protoOf(UnsignedIntFieldFormatDirective).n5w = function () {
    return spaceAndZeroPaddedUnsignedInt(this.w5x_1, this.y5x_1, this.x5x_1, this.v5x_1.m61_1, this.v5x_1.p61_1);
  };
  function getStringValue($this, target) {
    // Inline function 'kotlin.let' call
    var it = $this.d5y_1.m61_1.k61(target);
    var tmp0_elvis_lhs = getOrNull($this.e5y_1, it - $this.d5y_1.n61_1 | 0);
    return tmp0_elvis_lhs == null ? 'The value ' + it + ' of ' + $this.d5y_1.p61_1 + ' does not have a corresponding string representation' : tmp0_elvis_lhs;
  }
  function AssignableString($outer) {
    this.t61_1 = $outer;
  }
  protoOf(AssignableString).u61 = function (container, newValue) {
    var tmp0_safe_receiver = this.t61_1.d5y_1.m61_1.v61(container, this.t61_1.e5y_1.z1(newValue) + this.t61_1.d5y_1.n61_1 | 0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.t61_1.e5y_1.u(tmp0_safe_receiver - this.t61_1.d5y_1.n61_1 | 0);
    }
    return tmp;
  };
  protoOf(AssignableString).v61 = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.u61(tmp, (!(newValue == null) ? typeof newValue === 'string' : false) ? newValue : THROW_CCE());
  };
  protoOf(AssignableString).s2 = function () {
    return this.t61_1.f5y_1;
  };
  function NamedUnsignedIntFieldFormatDirective$getStringValue$ref($boundThis) {
    var l = function (p0) {
      return getStringValue($boundThis, p0);
    };
    l.callableName = 'getStringValue';
    return l;
  }
  function NamedUnsignedIntFieldFormatDirective(field, values, name) {
    this.d5y_1 = field;
    this.e5y_1 = values;
    this.f5y_1 = name;
    // Inline function 'kotlin.require' call
    if (!(this.e5y_1.s() === ((this.d5y_1.o61_1 - this.d5y_1.n61_1 | 0) + 1 | 0))) {
      var message = 'The number of values (' + this.e5y_1.s() + ') in ' + toString(this.e5y_1) + ' does not match the range of the field (' + ((this.d5y_1.o61_1 - this.d5y_1.n61_1 | 0) + 1 | 0) + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(NamedUnsignedIntFieldFormatDirective).o5x = function () {
    return this.d5y_1;
  };
  protoOf(NamedUnsignedIntFieldFormatDirective).p5x = function () {
    return new StringFormatterStructure(NamedUnsignedIntFieldFormatDirective$getStringValue$ref(this));
  };
  protoOf(NamedUnsignedIntFieldFormatDirective).n5w = function () {
    return new ParserStructure(listOf_0(new StringSetParserOperation(this.e5y_1, new AssignableString(this), 'one of ' + toString(this.e5y_1) + ' for ' + this.f5y_1)), emptyList());
  };
  function Accessor$getterNotNull$ref_1($boundThis) {
    var l = function (p0) {
      return $boundThis.k61(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function DecimalFractionFieldFormatDirective(field, minDigits, maxDigits, zerosToAdd) {
    this.g60_1 = field;
    this.h60_1 = minDigits;
    this.i60_1 = maxDigits;
    this.j60_1 = zerosToAdd;
  }
  protoOf(DecimalFractionFieldFormatDirective).o5x = function () {
    return this.g60_1;
  };
  protoOf(DecimalFractionFieldFormatDirective).p5x = function () {
    return new DecimalFractionFormatterStructure(Accessor$getterNotNull$ref_1(this.g60_1.l61()), this.h60_1, this.i60_1, this.j60_1);
  };
  protoOf(DecimalFractionFieldFormatDirective).n5w = function () {
    return new ParserStructure(listOf_0(new NumberSpanParserOperation(listOf_0(new FractionPartConsumer(this.h60_1, this.i60_1, this.g60_1.l61(), this.g60_1.s2())))), emptyList());
  };
  function GenericFieldSpec(accessor, name, defaultValue, sign) {
    name = name === VOID ? accessor.s2() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.w61_1 = accessor;
    this.x61_1 = name;
    this.y61_1 = defaultValue;
    this.z61_1 = sign;
  }
  protoOf(GenericFieldSpec).l61 = function () {
    return this.w61_1;
  };
  protoOf(GenericFieldSpec).s2 = function () {
    return this.x61_1;
  };
  protoOf(GenericFieldSpec).a62 = function () {
    return this.y61_1;
  };
  protoOf(GenericFieldSpec).b62 = function () {
    return this.z61_1;
  };
  function PropertyAccessor(property) {
    this.c62_1 = property;
  }
  protoOf(PropertyAccessor).s2 = function () {
    return this.c62_1.callableName;
  };
  protoOf(PropertyAccessor).d62 = function (container, newValue) {
    var oldValue = this.c62_1.get(container);
    var tmp;
    if (oldValue === null) {
      this.c62_1.set(container, newValue);
      tmp = null;
    } else if (equals(oldValue, newValue)) {
      tmp = null;
    } else {
      tmp = oldValue;
    }
    return tmp;
  };
  protoOf(PropertyAccessor).v61 = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.d62(tmp, (newValue == null ? true : !(newValue == null)) ? newValue : THROW_CCE());
  };
  protoOf(PropertyAccessor).e62 = function (container) {
    return this.c62_1.get(container);
  };
  function UnsignedFieldSpec(accessor, minValue, maxValue, name, defaultValue, sign) {
    name = name === VOID ? accessor.s2() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.m61_1 = accessor;
    this.n61_1 = minValue;
    this.o61_1 = maxValue;
    this.p61_1 = name;
    this.q61_1 = defaultValue;
    this.r61_1 = sign;
    var tmp = this;
    var tmp_0;
    if (this.o61_1 < 10) {
      tmp_0 = 1;
    } else if (this.o61_1 < 100) {
      tmp_0 = 2;
    } else if (this.o61_1 < 1000) {
      tmp_0 = 3;
    } else {
      throw IllegalArgumentException_init_$Create$('Max value ' + this.o61_1 + ' is too large');
    }
    tmp.s61_1 = tmp_0;
  }
  protoOf(UnsignedFieldSpec).l61 = function () {
    return this.m61_1;
  };
  protoOf(UnsignedFieldSpec).s2 = function () {
    return this.p61_1;
  };
  protoOf(UnsignedFieldSpec).a62 = function () {
    return this.q61_1;
  };
  protoOf(UnsignedFieldSpec).b62 = function () {
    return this.r61_1;
  };
  function Accessor() {
  }
  function AbstractFieldSpec() {
  }
  protoOf(AbstractFieldSpec).toString = function () {
    return 'The field ' + this.s2() + ' (default value is ' + toString_1(this.a62()) + ')';
  };
  function CachedFormatStructure(formats) {
    ConcatenatedFormatStructure.call(this, formats);
    this.l5w_1 = protoOf(ConcatenatedFormatStructure).p5x.call(this);
    this.m5w_1 = protoOf(ConcatenatedFormatStructure).n5w.call(this);
  }
  protoOf(CachedFormatStructure).p5x = function () {
    return this.l5w_1;
  };
  protoOf(CachedFormatStructure).n5w = function () {
    return this.m5w_1;
  };
  function BasicFormatStructure(directive) {
    this.f62_1 = directive;
  }
  protoOf(BasicFormatStructure).toString = function () {
    return 'BasicFormatStructure(' + toString(this.f62_1) + ')';
  };
  protoOf(BasicFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof BasicFormatStructure) {
      tmp = equals(this.f62_1, other.f62_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(BasicFormatStructure).hashCode = function () {
    return hashCode(this.f62_1);
  };
  protoOf(BasicFormatStructure).n5w = function () {
    return this.f62_1.n5w();
  };
  protoOf(BasicFormatStructure).p5x = function () {
    return this.f62_1.p5x();
  };
  function ConstantFormatStructure(string) {
    this.g62_1 = string;
  }
  protoOf(ConstantFormatStructure).toString = function () {
    return 'ConstantFormatStructure(' + this.g62_1 + ')';
  };
  protoOf(ConstantFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConstantFormatStructure) {
      tmp = this.g62_1 === other.g62_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConstantFormatStructure).hashCode = function () {
    return getStringHashCode(this.g62_1);
  };
  protoOf(ConstantFormatStructure).n5w = function () {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.g62_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = emptyList();
    } else {
      // Inline function 'kotlin.collections.buildList' call
      // Inline function 'kotlin.collections.buildListInternal' call
      // Inline function 'kotlin.apply' call
      var this_1 = ArrayList_init_$Create$_0();
      var tmp_0;
      if (isAsciiDigit(charSequenceGet(this.g62_1, 0))) {
        var tmp0 = this.g62_1;
        var tmp$ret$4;
        $l$block: {
          // Inline function 'kotlin.text.takeWhile' call
          var inductionVariable = 0;
          var last = tmp0.length;
          if (inductionVariable < last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var it = charSequenceGet(tmp0, index);
              if (!isAsciiDigit(it)) {
                // Inline function 'kotlin.text.substring' call
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$4 = tmp0.substring(0, index);
                break $l$block;
              }
            }
             while (inductionVariable < last);
          tmp$ret$4 = tmp0;
        }
        this_1.n(new NumberSpanParserOperation(listOf_0(new ConstantNumberConsumer(tmp$ret$4))));
        var tmp2 = this.g62_1;
        var tmp$ret$8;
        $l$block_0: {
          // Inline function 'kotlin.text.dropWhile' call
          var inductionVariable_0 = 0;
          var last_0 = charSequenceLength(tmp2) - 1 | 0;
          if (inductionVariable_0 <= last_0)
            do {
              var index_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var it_0 = charSequenceGet(tmp2, index_0);
              if (!isAsciiDigit(it_0)) {
                // Inline function 'kotlin.text.substring' call
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$8 = tmp2.substring(index_0);
                break $l$block_0;
              }
            }
             while (inductionVariable_0 <= last_0);
          tmp$ret$8 = '';
        }
        tmp_0 = tmp$ret$8;
      } else {
        tmp_0 = this.g62_1;
      }
      var suffix = tmp_0;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(suffix) > 0) {
        if (isAsciiDigit(charSequenceGet(suffix, suffix.length - 1 | 0))) {
          var tmp$ret$13;
          $l$block_1: {
            // Inline function 'kotlin.text.dropLastWhile' call
            var inductionVariable_1 = get_lastIndex(suffix);
            if (0 <= inductionVariable_1)
              do {
                var index_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + -1 | 0;
                var it_1 = charSequenceGet(suffix, index_1);
                if (!isAsciiDigit(it_1)) {
                  // Inline function 'kotlin.text.substring' call
                  var endIndex = index_1 + 1 | 0;
                  // Inline function 'kotlin.js.asDynamic' call
                  tmp$ret$13 = suffix.substring(0, endIndex);
                  break $l$block_1;
                }
              }
               while (0 <= inductionVariable_1);
            tmp$ret$13 = '';
          }
          this_1.n(new PlainStringParserOperation(tmp$ret$13));
          var tmp$ret$17;
          $l$block_2: {
            // Inline function 'kotlin.text.takeLastWhile' call
            var inductionVariable_2 = get_lastIndex(suffix);
            if (0 <= inductionVariable_2)
              do {
                var index_2 = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + -1 | 0;
                var it_2 = charSequenceGet(suffix, index_2);
                if (!isAsciiDigit(it_2)) {
                  // Inline function 'kotlin.text.substring' call
                  var startIndex = index_2 + 1 | 0;
                  // Inline function 'kotlin.js.asDynamic' call
                  tmp$ret$17 = suffix.substring(startIndex);
                  break $l$block_2;
                }
              }
               while (0 <= inductionVariable_2);
            tmp$ret$17 = suffix;
          }
          this_1.n(new NumberSpanParserOperation(listOf_0(new ConstantNumberConsumer(tmp$ret$17))));
        } else {
          this_1.n(new PlainStringParserOperation(suffix));
        }
      }
      tmp = this_1.v3();
    }
    return new ParserStructure(tmp, emptyList());
  };
  protoOf(ConstantFormatStructure).p5x = function () {
    return new ConstantStringFormatterStructure(this.g62_1);
  };
  function formatter$checkIfAllNegative(this$0, value) {
    var seenNonZero = false;
    var tmp0_iterator = this$0.j62_1.p();
    $l$loop: while (tmp0_iterator.q()) {
      var check = tmp0_iterator.r();
      if (check.a5t().e62(value) === true)
        seenNonZero = true;
      else if (check.z60(value))
        continue $l$loop;
      else
        return false;
    }
    return seenNonZero;
  }
  function SignedFormatStructure$parser$lambda(this$0) {
    return function (value, isNegative) {
      var tmp0_iterator = this$0.j62_1.p();
      while (tmp0_iterator.q()) {
        var field = tmp0_iterator.r();
        var wasNegative = field.a5t().e62(value) === true;
        field.a5t().v61(value, !(isNegative === wasNegative));
      }
      return Unit_instance;
    };
  }
  function SignedFormatStructure$formatter$checkIfAllNegative$ref(this$0) {
    var l = function (p0) {
      return formatter$checkIfAllNegative(this$0, p0);
    };
    l.callableName = 'checkIfAllNegative';
    return l;
  }
  function SignedFormatStructure(format, withPlusSign) {
    this.h62_1 = format;
    this.i62_1 = withPlusSign;
    var tmp = this;
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0 = basicFormats(this.h62_1);
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = tmp0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp0_safe_receiver = element.o5x().b62();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.n(tmp0_safe_receiver);
      }
    }
    tmp.j62_1 = toSet(destination);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.j62_1.h()) {
      var message = 'Signed format must contain at least one field with a sign';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(SignedFormatStructure).toString = function () {
    return 'SignedFormatStructure(' + toString(this.h62_1) + ')';
  };
  protoOf(SignedFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof SignedFormatStructure) {
      tmp_0 = equals(this.h62_1, other.h62_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.i62_1 === other.i62_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SignedFormatStructure).hashCode = function () {
    return imul(31, hashCode(this.h62_1)) + getBooleanHashCode(this.i62_1) | 0;
  };
  protoOf(SignedFormatStructure).n5w = function () {
    return concat(listOf([new ParserStructure(listOf_0(new SignParser(SignedFormatStructure$parser$lambda(this), this.i62_1, 'sign for ' + toString(this.j62_1))), emptyList()), this.h62_1.n5w()]));
  };
  protoOf(SignedFormatStructure).p5x = function () {
    var innerFormat = this.h62_1.p5x();
    return new SignedFormatter(innerFormat, SignedFormatStructure$formatter$checkIfAllNegative$ref(this), this.i62_1);
  };
  function Companion_12() {
  }
  protoOf(Companion_12).k62 = function (field) {
    var default_0 = field.a62();
    // Inline function 'kotlin.require' call
    if (!!(default_0 == null)) {
      var message = "The field '" + field.s2() + "' does not define a default value";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new PropertyWithDefault(field.l61(), default_0);
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function access$_get_accessor__yxxs4k($this) {
    return $this.l62_1;
  }
  function access$_get_defaultValue__8tt04b($this) {
    return $this.m62_1;
  }
  function PropertyWithDefault(accessor, defaultValue) {
    this.l62_1 = accessor;
    this.m62_1 = defaultValue;
  }
  function OptionalFormatStructure$parser$lambda(this$0) {
    return function (it) {
      var tmp0_iterator = this$0.p62_1.p();
      while (tmp0_iterator.q()) {
        var field = tmp0_iterator.r();
        // Inline function 'kotlinx.datetime.internal.format.PropertyWithDefault.assignDefault' call
        access$_get_accessor__yxxs4k(field).v61(it, access$_get_defaultValue__8tt04b(field));
      }
      return Unit_instance;
    };
  }
  function Accessor$getter$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.e62(p0);
    };
    l.callableName = 'getter';
    return l;
  }
  function Predicate$test$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.q62(p0);
    };
    l.callableName = 'test';
    return l;
  }
  function Truth$test$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.r62(p0);
    };
    l.callableName = 'test';
    return l;
  }
  function OptionalFormatStructure(onZero, format) {
    this.n62_1 = onZero;
    this.o62_1 = format;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = basicFormats(this.o62_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = item.o5x();
      destination.n(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.map' call
    var this_1 = distinct(destination);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s_0 = this_1.p();
    while (_iterator__ex2g4s_0.q()) {
      var item_0 = _iterator__ex2g4s_0.r();
      var tmp$ret$3 = Companion_instance_12.k62(item_0);
      destination_0.n(tmp$ret$3);
    }
    tmp.p62_1 = destination_0;
  }
  protoOf(OptionalFormatStructure).toString = function () {
    return 'Optional(' + this.n62_1 + ', ' + toString(this.o62_1) + ')';
  };
  protoOf(OptionalFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof OptionalFormatStructure) {
      tmp_0 = this.n62_1 === other.n62_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.o62_1, other.o62_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OptionalFormatStructure).hashCode = function () {
    return imul(31, getStringHashCode(this.n62_1)) + hashCode(this.o62_1) | 0;
  };
  protoOf(OptionalFormatStructure).n5w = function () {
    var tmp = emptyList();
    var tmp_0 = this.o62_1.n5w();
    var tmp_1 = (new ConstantFormatStructure(this.n62_1)).n5w();
    var tmp_2;
    if (this.p62_1.h()) {
      tmp_2 = emptyList();
    } else {
      tmp_2 = listOf_0(new UnconditionalModification(OptionalFormatStructure$parser$lambda(this)));
    }
    return new ParserStructure(tmp, listOf([tmp_0, concat(listOf([tmp_1, new ParserStructure(tmp_2, emptyList())]))]));
  };
  protoOf(OptionalFormatStructure).p5x = function () {
    var formatter = this.o62_1.p5x();
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.p62_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      // Inline function 'kotlinx.datetime.internal.format.PropertyWithDefault.isDefaultComparisonPredicate' call
      var tmp = access$_get_defaultValue__8tt04b(item);
      var tmp$ret$1 = new ComparisonPredicate(tmp, Accessor$getter$ref(access$_get_accessor__yxxs4k(item)));
      destination.n(tmp$ret$1);
    }
    var predicate = conjunctionPredicate(destination);
    var tmp_0;
    if (predicate instanceof Truth) {
      tmp_0 = new ConstantStringFormatterStructure(this.n62_1);
    } else {
      var tmp_1 = to(Predicate$test$ref(predicate), new ConstantStringFormatterStructure(this.n62_1));
      tmp_0 = new ConditionalFormatter(listOf([tmp_1, to(Truth$test$ref(Truth_instance), formatter)]));
    }
    return tmp_0;
  };
  function AlternativesParsingFormatStructure(mainFormat, formats) {
    this.s62_1 = mainFormat;
    this.t62_1 = formats;
  }
  protoOf(AlternativesParsingFormatStructure).toString = function () {
    return 'AlternativesParsing(' + toString(this.t62_1) + ')';
  };
  protoOf(AlternativesParsingFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AlternativesParsingFormatStructure) {
      tmp_0 = equals(this.s62_1, other.s62_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.t62_1, other.t62_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AlternativesParsingFormatStructure).hashCode = function () {
    return imul(31, hashCode(this.s62_1)) + hashCode(this.t62_1) | 0;
  };
  protoOf(AlternativesParsingFormatStructure).n5w = function () {
    var tmp = emptyList();
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    this_0.n(this.s62_1.n5w());
    var tmp0_iterator = this.t62_1.p();
    while (tmp0_iterator.q()) {
      var format = tmp0_iterator.r();
      this_0.n(format.n5w());
    }
    var tmp$ret$3 = this_0.v3();
    return new ParserStructure(tmp, tmp$ret$3);
  };
  protoOf(AlternativesParsingFormatStructure).p5x = function () {
    return this.s62_1.p5x();
  };
  function ConcatenatedFormatStructure(formats) {
    this.o5w_1 = formats;
  }
  protoOf(ConcatenatedFormatStructure).toString = function () {
    return 'ConcatenatedFormatStructure(' + joinToString(this.o5w_1, ', ') + ')';
  };
  protoOf(ConcatenatedFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConcatenatedFormatStructure) {
      tmp = equals(this.o5w_1, other.o5w_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConcatenatedFormatStructure).hashCode = function () {
    return hashCode(this.o5w_1);
  };
  protoOf(ConcatenatedFormatStructure).n5w = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.o5w_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = item.n5w();
      destination.n(tmp$ret$0);
    }
    return concat(destination);
  };
  protoOf(ConcatenatedFormatStructure).p5x = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.o5w_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = item.p5x();
      destination.n(tmp$ret$0);
    }
    var formatters = destination;
    var tmp;
    if (formatters.s() === 1) {
      tmp = single(formatters);
    } else {
      tmp = new ConcatenatedFormatter(formatters);
    }
    return tmp;
  };
  function NonConcatenatedFormatStructure() {
  }
  function basicFormats(format) {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    basicFormats$_anonymous_$rec_hkf0lf(this_0, format);
    return this_0.v3();
  }
  function basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format) {
    if (format instanceof BasicFormatStructure) {
      $this_buildList.n(format.f62_1);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.o5w_1.p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
          basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element);
        }
      } else {
        if (!(format instanceof ConstantFormatStructure)) {
          if (format instanceof SignedFormatStructure) {
            basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.h62_1);
          } else {
            if (format instanceof AlternativesParsingFormatStructure) {
              basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.s62_1);
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_0 = format.t62_1.p();
              while (_iterator__ex2g4s_0.q()) {
                var element_0 = _iterator__ex2g4s_0.r();
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element_0);
              }
            } else {
              if (format instanceof OptionalFormatStructure) {
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.o62_1);
              }
            }
          }
        }
      }
    }
  }
  function conjunctionPredicate(predicates) {
    return predicates.h() ? Truth_instance : predicates.s() === 1 ? single(predicates) : new ConjunctionPredicate(predicates);
  }
  function ComparisonPredicate(expectedValue, getter) {
    this.u62_1 = expectedValue;
    this.v62_1 = getter;
  }
  protoOf(ComparisonPredicate).q62 = function (value) {
    return equals(this.v62_1(value), this.u62_1);
  };
  function Truth() {
  }
  protoOf(Truth).r62 = function (value) {
    return true;
  };
  protoOf(Truth).q62 = function (value) {
    return this.r62((value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  var Truth_instance;
  function Truth_getInstance() {
    return Truth_instance;
  }
  function ConjunctionPredicate(predicates) {
    this.w62_1 = predicates;
  }
  protoOf(ConjunctionPredicate).q62 = function (value) {
    var tmp0 = this.w62_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        if (!element.q62(value)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function SpacePaddedFormatter(formatter, padding) {
    this.x62_1 = formatter;
    this.y62_1 = padding;
  }
  function SignedFormatter(formatter, allSubFormatsNegative, alwaysOutputSign) {
    this.z62_1 = formatter;
    this.a63_1 = allSubFormatsNegative;
    this.b63_1 = alwaysOutputSign;
  }
  function ConditionalFormatter(formatters) {
    this.c63_1 = formatters;
  }
  function ConcatenatedFormatter(formatters) {
    this.d63_1 = formatters;
  }
  function SignedIntFormatterStructure(number, zeroPadding, outputPlusOnExceededWidth) {
    this.e63_1 = number;
    this.f63_1 = zeroPadding;
    this.g63_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.f63_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.f63_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.f63_1 <= 9)) {
      var message_0 = 'The minimum number of digits (' + this.f63_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function UnsignedIntFormatterStructure(number, zeroPadding) {
    this.h63_1 = number;
    this.i63_1 = zeroPadding;
    // Inline function 'kotlin.require' call
    if (!(this.i63_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.i63_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.i63_1 <= 9)) {
      var message_0 = 'The minimum number of digits (' + this.i63_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function StringFormatterStructure(string) {
    this.j63_1 = string;
  }
  function DecimalFractionFormatterStructure(number, minDigits, maxDigits, zerosToAdd) {
    this.k63_1 = number;
    this.l63_1 = minDigits;
    this.m63_1 = maxDigits;
    this.n63_1 = zerosToAdd;
    var containsArg = this.l63_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      var message = 'The minimum number of digits (' + this.l63_1 + ') is not in range 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsLower = this.l63_1;
    var containsArg_0 = this.m63_1;
    // Inline function 'kotlin.require' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      var message_0 = 'The maximum number of digits (' + this.m63_1 + ') is not in range ' + this.l63_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function ConstantStringFormatterStructure(string) {
    this.o63_1 = string;
  }
  function FractionPartConsumer(minLength, maxLength, setter, name) {
    NumberConsumer.call(this, minLength === maxLength ? minLength : null, name);
    this.r63_1 = minLength;
    this.s63_1 = maxLength;
    this.t63_1 = setter;
    var containsArg = this.r63_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      var message = 'Invalid minimum length ' + this.r63_1 + ' for field ' + this.v63_1 + ': expected 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsLower = this.r63_1;
    var containsArg_0 = this.s63_1;
    // Inline function 'kotlin.require' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      var message_0 = 'Invalid maximum length ' + this.s63_1 + ' for field ' + this.v63_1 + ': expected ' + this.r63_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(FractionPartConsumer).w63 = function (storage, input, start, end) {
    return (end - start | 0) < this.r63_1 ? new TooFewDigits(this.r63_1) : (end - start | 0) > this.s63_1 ? new TooManyDigits(this.s63_1) : setWithoutReassigning(this.t63_1, storage, new DecimalFraction(parseAsciiInt(input, start, end), end - start | 0));
  };
  function ConstantNumberConsumer(expected) {
    NumberConsumer.call(this, expected.length, 'the predefined string ' + expected);
    this.z63_1 = expected;
  }
  protoOf(ConstantNumberConsumer).w63 = function (storage, input, start, end) {
    var tmp;
    // Inline function 'kotlin.text.substring' call
    if (toString(charSequenceSubSequence(input, start, end)) === this.z63_1) {
      tmp = null;
    } else {
      tmp = new WrongConstant(this.z63_1);
    }
    return tmp;
  };
  function NumberConsumer(length, whatThisExpects) {
    this.u63_1 = length;
    this.v63_1 = whatThisExpects;
  }
  protoOf(NumberConsumer).a = function () {
    return this.u63_1;
  };
  function ExpectedInt() {
  }
  protoOf(ExpectedInt).a64 = function () {
    return 'expected an Int value';
  };
  var ExpectedInt_instance;
  function ExpectedInt_getInstance() {
    return ExpectedInt_instance;
  }
  function TooManyDigits(maxDigits) {
    this.b64_1 = maxDigits;
  }
  protoOf(TooManyDigits).a64 = function () {
    return 'expected at most ' + this.b64_1 + ' digits';
  };
  function TooFewDigits(minDigits) {
    this.c64_1 = minDigits;
  }
  protoOf(TooFewDigits).a64 = function () {
    return 'expected at least ' + this.c64_1 + ' digits';
  };
  function WrongConstant(expected) {
    this.d64_1 = expected;
  }
  protoOf(WrongConstant).a64 = function () {
    return "expected '" + this.d64_1 + "'";
  };
  function Conflicting(conflicting) {
    this.e64_1 = conflicting;
  }
  protoOf(Conflicting).a64 = function () {
    return "attempted to overwrite the existing value '" + toString(this.e64_1) + "'";
  };
  function setWithoutReassigning(_this__u8e3s4, receiver, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.v61(receiver, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var conflictingValue = tmp;
    return new Conflicting(conflictingValue);
  }
  function parseAsciiInt(_this__u8e3s4, start, end) {
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = charSequenceGet(_this__u8e3s4, i);
        result = imul(result, 10) + asciiDigitToInt(digit) | 0;
      }
       while (inductionVariable < end);
    return result;
  }
  function UnsignedIntConsumer(minLength, maxLength, setter, name, multiplyByMinus1) {
    multiplyByMinus1 = multiplyByMinus1 === VOID ? false : multiplyByMinus1;
    NumberConsumer.call(this, minLength == maxLength ? minLength : null, name);
    this.h64_1 = minLength;
    this.i64_1 = maxLength;
    this.j64_1 = setter;
    this.k64_1 = multiplyByMinus1;
    // Inline function 'kotlin.require' call
    if (!(this.a() == null || numberRangeToNumber(1, 9).al(this.a()))) {
      var message = 'Invalid length for field ' + this.v63_1 + ': ' + this.a();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(UnsignedIntConsumer).w63 = function (storage, input, start, end) {
    var tmp;
    if (!(this.i64_1 == null) && (end - start | 0) > this.i64_1) {
      tmp = new TooManyDigits(this.i64_1);
    } else if (!(this.h64_1 == null) && (end - start | 0) < this.h64_1) {
      tmp = new TooFewDigits(this.h64_1);
    } else {
      var result = parseAsciiIntOrNull(input, start, end);
      tmp = result == null ? ExpectedInt_instance : setWithoutReassigning(this.j64_1, storage, this.k64_1 ? -result | 0 : result);
    }
    return tmp;
  };
  function parseAsciiIntOrNull(_this__u8e3s4, start, end) {
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = charSequenceGet(_this__u8e3s4, i);
        result = imul(result, 10) + asciiDigitToInt(digit) | 0;
        if (result < 0)
          return null;
      }
       while (inductionVariable < end);
    return result;
  }
  function ParseError(position, message) {
    this.l64_1 = position;
    this.m64_1 = message;
  }
  function _ParseResult___init__impl__gvz3cn(value) {
    return value;
  }
  function _ParseResult___get_value__impl__86mnxf($this) {
    return $this;
  }
  function Companion_13() {
  }
  protoOf(Companion_13).n64 = function (indexOfNextUnparsed) {
    return _ParseResult___init__impl__gvz3cn(indexOfNextUnparsed);
  };
  protoOf(Companion_13).o64 = function (position, message) {
    return _ParseResult___init__impl__gvz3cn(new ParseError(position, message));
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    return Companion_instance_13;
  }
  function _Parser___init__impl__gdyfby(commands) {
    return commands;
  }
  function _get_commands__a20n1($this) {
    return $this;
  }
  function Parser__match_impl_nzt83d($this, input, initialContainer, startIndex) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var errors = ArrayList_init_$Create$_0();
    // Inline function 'kotlinx.datetime.internal.format.parser.Parser.parse' call
    var parseOptions = mutableListOf([new ParserState(initialContainer, _get_commands__a20n1($this), startIndex)]);
    iterate_over_alternatives: while (true) {
      var tmp0_elvis_lhs = removeLastOrNull(parseOptions);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break iterate_over_alternatives;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var state = tmp;
      var output = state.p64_1.h5t();
      var inputPosition = state.r64_1;
      var parserStructure = state.q64_1;
      // Inline function 'kotlin.run' call
      $l$block: {
        var inductionVariable = 0;
        var last = parserStructure.t64_1.s() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var ix = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlinx.datetime.internal.format.parser.ParseResult.match' call
            var this_0 = parserStructure.t64_1.u(ix).v64(output, input, inputPosition);
            var tmp0_subject = _ParseResult___get_value__impl__86mnxf(this_0);
            if (typeof tmp0_subject === 'number') {
              inputPosition = _ParseResult___get_value__impl__86mnxf(this_0);
            } else {
              if (tmp0_subject instanceof ParseError) {
                var it = _ParseResult___get_value__impl__86mnxf(this_0);
                errors.n(it);
                break $l$block;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected parse result: ' + toString(_ParseResult___get_value__impl__86mnxf(this_0));
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
           while (inductionVariable <= last);
        if (parserStructure.u64_1.h()) {
          if (false || inputPosition === charSequenceLength(input)) {
            return output;
          } else {
            var tmp_0 = inputPosition;
            var it_0 = new ParseError(tmp_0, Parser$match$lambda);
            errors.n(it_0);
          }
        } else {
          var inductionVariable_0 = parserStructure.u64_1.s() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var ix_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              parseOptions.n(new ParserState(output, parserStructure.u64_1.u(ix_0), inputPosition));
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    // Inline function 'kotlin.collections.sortByDescending' call
    if (errors.s() > 1) {
      // Inline function 'kotlin.comparisons.compareByDescending' call
      var tmp_1 = Parser$match$lambda_0;
      var tmp$ret$8 = new sam$kotlin_Comparator$0(tmp_1);
      sortWith(errors, tmp$ret$8);
    }
    throw new ParseException(errors);
  }
  function Parser__match$default_impl_x2xlti($this, input, initialContainer, startIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    var tmp;
    if ($super === VOID) {
      tmp = Parser__match_impl_nzt83d($this, input, initialContainer, startIndex);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Parser(tmp_0)).w64.call(new Parser($this), input, initialContainer, startIndex);
    }
    return tmp;
  }
  function ParserState(output, parserStructure, inputPosition) {
    this.p64_1 = output;
    this.q64_1 = parserStructure;
    this.r64_1 = inputPosition;
  }
  function Parser__toString_impl_x33iea($this) {
    return 'Parser(commands=' + $this.toString() + ')';
  }
  function Parser__hashCode_impl_bbxllf($this) {
    return hashCode($this);
  }
  function Parser__equals_impl_djxokv($this, other) {
    if (!(other instanceof Parser))
      return false;
    var tmp0_other_with_cast = other instanceof Parser ? other.s64_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.x64_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).kf = function (a, b) {
    return this.x64_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.kf(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).s3 = function () {
    return this.x64_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.s3(), other.s3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.s3());
  };
  function Parser$match$lambda() {
    return 'There is more input to consume';
  }
  function Parser$match$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.l64_1;
    var tmp$ret$1 = a.l64_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Parser(commands) {
    this.s64_1 = commands;
  }
  protoOf(Parser).toString = function () {
    return Parser__toString_impl_x33iea(this.s64_1);
  };
  protoOf(Parser).hashCode = function () {
    return Parser__hashCode_impl_bbxllf(this.s64_1);
  };
  protoOf(Parser).equals = function (other) {
    return Parser__equals_impl_djxokv(this.s64_1, other);
  };
  function ParserStructure(operations, followedBy) {
    this.t64_1 = operations;
    this.u64_1 = followedBy;
  }
  protoOf(ParserStructure).toString = function () {
    return joinToString(this.t64_1, ', ') + '(' + joinToString(this.u64_1, ';') + ')';
  };
  function ParseException(errors) {
    Exception_init_$Init$(formatError(errors), this);
    captureStack(this, ParseException);
  }
  function concat(_this__u8e3s4) {
    // Inline function 'kotlin.collections.foldRight' call
    var accumulator = new ParserStructure(emptyList(), emptyList());
    if (!_this__u8e3s4.h()) {
      var iterator = _this__u8e3s4.v(_this__u8e3s4.s());
      while (iterator.b5()) {
        var tmp2 = iterator.d5();
        var acc = accumulator;
        accumulator = concat$append(tmp2, acc);
      }
    }
    var naiveParser = accumulator;
    return concat$simplify(naiveParser, emptyList());
  }
  function formatError(errors) {
    if (errors.s() === 1) {
      return 'Position ' + errors.u(0).l64_1 + ': ' + errors.u(0).m64_1();
    }
    var averageMessageLength = 33;
    var tmp0_buffer = StringBuilder_init_$Create$(imul(averageMessageLength, errors.s()));
    return joinTo(errors, tmp0_buffer, ', ', 'Errors: ', VOID, VOID, VOID, formatError$lambda).toString();
  }
  function concat$append(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4.u64_1.h()) {
      tmp = new ParserStructure(plus(_this__u8e3s4.t64_1, other.t64_1), other.u64_1);
    } else {
      // Inline function 'kotlin.collections.map' call
      var this_0 = _this__u8e3s4.u64_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.p();
      while (_iterator__ex2g4s.q()) {
        var item = _iterator__ex2g4s.r();
        var tmp$ret$0 = concat$append(item, other);
        destination.n(tmp$ret$0);
      }
      tmp = new ParserStructure(_this__u8e3s4.t64_1, destination);
    }
    return tmp;
  }
  function concat$simplify(_this__u8e3s4, unconditionalModifications) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var newOperations = ArrayList_init_$Create$_0();
    var currentNumberSpan = null;
    var unconditionalModificationsForTails = toMutableList(unconditionalModifications);
    var tmp0_iterator = _this__u8e3s4.t64_1.p();
    while (tmp0_iterator.q()) {
      var op = tmp0_iterator.r();
      if (op instanceof NumberSpanParserOperation) {
        if (!(currentNumberSpan == null)) {
          currentNumberSpan.t(op.y64_1);
        } else {
          currentNumberSpan = toMutableList(op.y64_1);
        }
      } else {
        if (op instanceof UnconditionalModification) {
          unconditionalModificationsForTails.n(op);
        } else {
          if (!(currentNumberSpan == null)) {
            newOperations.n(new NumberSpanParserOperation(currentNumberSpan));
            currentNumberSpan = null;
          }
          newOperations.n(op);
        }
      }
    }
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = _this__u8e3s4.u64_1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var simplified = concat$simplify(element, unconditionalModificationsForTails);
      var tmp;
      if (simplified.t64_1.h()) {
        // Inline function 'kotlin.collections.ifEmpty' call
        var this_0 = simplified.u64_1;
        var tmp_0;
        if (this_0.h()) {
          tmp_0 = listOf_0(simplified);
        } else {
          tmp_0 = this_0;
        }
        tmp = tmp_0;
      } else {
        tmp = listOf_0(simplified);
      }
      var list = tmp;
      addAll(destination, list);
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (destination.h()) {
      tmp_1 = listOf_0(new ParserStructure(unconditionalModificationsForTails, emptyList()));
    } else {
      tmp_1 = destination;
    }
    var mergedTails = tmp_1;
    var tmp_2;
    if (currentNumberSpan == null) {
      tmp_2 = new ParserStructure(newOperations, mergedTails);
    } else {
      var tmp$ret$8;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var tmp_3;
        if (isInterface(mergedTails, Collection)) {
          tmp_3 = mergedTails.h();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
        var _iterator__ex2g4s_0 = mergedTails.p();
        while (_iterator__ex2g4s_0.q()) {
          var element_0 = _iterator__ex2g4s_0.r();
          var tmp0_safe_receiver = firstOrNull(element_0.t64_1);
          var tmp_4;
          if (tmp0_safe_receiver == null) {
            tmp_4 = null;
          } else {
            // Inline function 'kotlin.let' call
            tmp_4 = tmp0_safe_receiver instanceof NumberSpanParserOperation;
          }
          if (tmp_4 === true) {
            tmp$ret$8 = false;
            break $l$block_0;
          }
        }
        tmp$ret$8 = true;
      }
      if (tmp$ret$8) {
        newOperations.n(new NumberSpanParserOperation(currentNumberSpan));
        tmp_2 = new ParserStructure(newOperations, mergedTails);
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(mergedTails, 10));
        var _iterator__ex2g4s_1 = mergedTails.p();
        while (_iterator__ex2g4s_1.q()) {
          var item = _iterator__ex2g4s_1.r();
          var firstOperation = firstOrNull(item.t64_1);
          var tmp_5;
          if (firstOperation instanceof NumberSpanParserOperation) {
            tmp_5 = new ParserStructure(plus(listOf_0(new NumberSpanParserOperation(plus(currentNumberSpan, firstOperation.y64_1))), drop(item.t64_1, 1)), item.u64_1);
          } else {
            if (firstOperation == null) {
              tmp_5 = new ParserStructure(listOf_0(new NumberSpanParserOperation(currentNumberSpan)), item.u64_1);
            } else {
              tmp_5 = new ParserStructure(plus(listOf_0(new NumberSpanParserOperation(currentNumberSpan)), item.t64_1), item.u64_1);
            }
          }
          var tmp$ret$12 = tmp_5;
          destination_0.n(tmp$ret$12);
        }
        var newTails = destination_0;
        tmp_2 = new ParserStructure(newOperations, newTails);
      }
    }
    return tmp_2;
  }
  function formatError$lambda(it) {
    return 'position ' + it.l64_1 + ": '" + it.m64_1() + "'";
  }
  function SignedIntParser(minDigits, maxDigits, spacePadding, setter, name, plusOnExceedsWidth) {
    var parsers = mutableListOf([spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name, true)]);
    if (!(plusOnExceedsWidth == null)) {
      parsers.n(spaceAndZeroPaddedUnsignedInt(minDigits, plusOnExceedsWidth, spacePadding, setter, name));
      parsers.n(new ParserStructure(listOf([new PlainStringParserOperation('+'), new NumberSpanParserOperation(listOf_0(new UnsignedIntConsumer(plusOnExceedsWidth + 1 | 0, maxDigits, setter, name, false)))]), emptyList()));
    } else {
      parsers.n(spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name));
    }
    return new ParserStructure(emptyList(), parsers);
  }
  function spaceAndZeroPaddedUnsignedInt(minDigits, maxDigits, spacePadding, setter, name, withMinus) {
    withMinus = withMinus === VOID ? false : withMinus;
    var minNumberLength = (minDigits == null ? 1 : minDigits) + (withMinus ? 1 : 0) | 0;
    var tmp;
    if (maxDigits == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = withMinus ? maxDigits + 1 | 0 : maxDigits;
    }
    var tmp2_elvis_lhs = tmp;
    var maxNumberLength = tmp2_elvis_lhs == null ? 2147483647 : tmp2_elvis_lhs;
    var spacePadding_0 = spacePadding == null ? 0 : spacePadding;
    // Inline function 'kotlin.comparisons.minOf' call
    var maxPaddedNumberLength = Math.min(maxNumberLength, spacePadding_0);
    if (minNumberLength >= maxPaddedNumberLength)
      return spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, minNumberLength, maxNumberLength);
    var accumulated = spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, minNumberLength, minNumberLength);
    var inductionVariable = minNumberLength;
    if (inductionVariable < maxPaddedNumberLength)
      do {
        var accumulatedWidth = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        accumulated = new ParserStructure(emptyList(), listOf([spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, accumulatedWidth + 1 | 0, accumulatedWidth + 1 | 0), concat(listOf([new ParserStructure(listOf_0(new PlainStringParserOperation(' ')), emptyList()), accumulated]))]));
      }
       while (inductionVariable < maxPaddedNumberLength);
    var tmp_0;
    if (spacePadding_0 > maxNumberLength) {
      var prepadding = new PlainStringParserOperation(repeat(' ', spacePadding_0 - maxNumberLength | 0));
      tmp_0 = concat(listOf([new ParserStructure(listOf_0(prepadding), emptyList()), accumulated]));
    } else if (spacePadding_0 === maxNumberLength) {
      tmp_0 = accumulated;
    } else {
      var r = new ParserStructure(emptyList(), listOf([spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths(withMinus, setter, name, spacePadding_0 + 1 | 0, maxNumberLength), accumulated]));
      tmp_0 = r;
    }
    return tmp_0;
  }
  function TrieNode(children, isTerminal) {
    var tmp;
    if (children === VOID) {
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp = ArrayList_init_$Create$_0();
    } else {
      tmp = children;
    }
    children = tmp;
    isTerminal = isTerminal === VOID ? false : isTerminal;
    this.b65_1 = children;
    this.c65_1 = isTerminal;
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.d65_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).kf = function (a, b) {
    return this.d65_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.kf(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).s3 = function () {
    return this.d65_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.s3(), other.s3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
    return hashCode(this.s3());
  };
  function _init_$reduceTrie(trie) {
    var tmp0_iterator = trie.b65_1.p();
    while (tmp0_iterator.q()) {
      var child = tmp0_iterator.r().cc();
      _init_$reduceTrie(child);
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var newChildren = ArrayList_init_$Create$_0();
    var tmp2_iterator = trie.b65_1.p();
    while (tmp2_iterator.q()) {
      var tmp3_loop_parameter = tmp2_iterator.r();
      var key = tmp3_loop_parameter.bc();
      var child_0 = tmp3_loop_parameter.cc();
      if (!child_0.c65_1 && child_0.b65_1.s() === 1) {
        var tmp4_container = single(child_0.b65_1);
        var grandChildKey = tmp4_container.bc();
        var grandChild = tmp4_container.cc();
        newChildren.n(to(key + grandChildKey, grandChild));
      } else {
        newChildren.n(to(key, child_0));
      }
    }
    trie.b65_1.e2();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = StringSetParserOperation$reduceTrie$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
    var tmp$ret$2 = sortedWith(newChildren, tmp$ret$1);
    trie.b65_1.t(tmp$ret$2);
  }
  function StringSetParserOperation$lambda($key) {
    return function (it) {
      var tmp$ret$0 = it.zb_1;
      return compareValues(tmp$ret$0, $key);
    };
  }
  function StringSetParserOperation$consume$lambda(this$0, $input, $startIndex, $index) {
    return function () {
      var tmp0 = $input;
      var tmp1 = $startIndex;
      // Inline function 'kotlin.text.substring' call
      var endIndex = $index._v;
      var tmp$ret$0 = toString(charSequenceSubSequence(tmp0, tmp1, endIndex));
      return 'Expected ' + this$0.f65_1 + ' but got ' + tmp$ret$0;
    };
  }
  function StringSetParserOperation$reduceTrie$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.zb_1;
    var tmp$ret$1 = b.zb_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function StringSetParserOperation(strings, setter, whatThisExpects) {
    this.e65_1 = setter;
    this.f65_1 = whatThisExpects;
    this.g65_1 = new TrieNode();
    var tmp0_iterator = strings.p();
    while (tmp0_iterator.q()) {
      var string = tmp0_iterator.r();
      // Inline function 'kotlin.text.isNotEmpty' call
      // Inline function 'kotlin.require' call
      if (!(charSequenceLength(string) > 0)) {
        var message = 'Found an empty string in ' + this.f65_1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var node = this.g65_1;
      var inductionVariable = 0;
      var last = string.length;
      while (inductionVariable < last) {
        var char = charSequenceGet(string, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        var tmp2 = node.b65_1;
        // Inline function 'kotlin.collections.binarySearchBy' call
        var key = toString_0(char);
        var toIndex = tmp2.s();
        var searchResult = binarySearch(tmp2, 0, toIndex, StringSetParserOperation$lambda(key));
        var tmp;
        if (searchResult < 0) {
          // Inline function 'kotlin.also' call
          var this_0 = new TrieNode();
          node.b65_1.g2((-searchResult | 0) - 1 | 0, to(toString_0(char), this_0));
          tmp = this_0;
        } else {
          tmp = node.b65_1.u(searchResult).ac_1;
        }
        node = tmp;
      }
      // Inline function 'kotlin.require' call
      if (!!node.c65_1) {
        var message_0 = "The string '" + string + "' was passed several times";
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      node.c65_1 = true;
    }
    _init_$reduceTrie(this.g65_1);
  }
  protoOf(StringSetParserOperation).v64 = function (storage, input, startIndex) {
    var node = this.g65_1;
    var index = {_v: startIndex};
    var lastMatch = null;
    loop: while (index._v <= charSequenceLength(input)) {
      if (node.c65_1)
        lastMatch = index._v;
      var tmp0_iterator = node.b65_1.p();
      while (tmp0_iterator.q()) {
        var tmp1_loop_parameter = tmp0_iterator.r();
        var key = tmp1_loop_parameter.bc();
        var child = tmp1_loop_parameter.cc();
        if (startsWith(input, key, index._v)) {
          node = child;
          index._v = index._v + key.length | 0;
          continue loop;
        }
      }
      break loop;
    }
    var tmp;
    if (!(lastMatch == null)) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = lastMatch;
      var tmp$ret$0 = toString(charSequenceSubSequence(input, startIndex, endIndex));
      tmp = setWithoutReassigning_0(this.e65_1, storage, tmp$ret$0, startIndex, lastMatch);
    } else {
      var tmp_0 = Companion_instance_13;
      tmp = tmp_0.o64(startIndex, StringSetParserOperation$consume$lambda(this, input, startIndex, index));
    }
    return tmp;
  };
  function _get_whatThisExpects__4pg11j($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.y64_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var length = item.a();
      var tmp$ret$0 = (length == null ? 'at least one digit' : '' + length + ' digits') + (' for ' + item.v63_1);
      destination.n(tmp$ret$0);
    }
    var consumerLengths = destination;
    var tmp;
    if ($this.a65_1) {
      tmp = 'a number with at least ' + $this.z64_1 + ' digits: ' + toString(consumerLengths);
    } else {
      tmp = 'a number with exactly ' + $this.z64_1 + ' digits: ' + toString(consumerLengths);
    }
    return tmp;
  }
  function NumberSpanParserOperation$consume$lambda(this$0) {
    return function () {
      return 'Unexpected end of input: yet to parse ' + _get_whatThisExpects__4pg11j(this$0);
    };
  }
  function NumberSpanParserOperation$consume$lambda_0($digitsInRow, this$0) {
    return function () {
      return 'Only found ' + $digitsInRow._v + ' digits in a row, but need to parse ' + _get_whatThisExpects__4pg11j(this$0);
    };
  }
  function NumberSpanParserOperation$consume$lambda_1($numberString, this$0, $i, $error) {
    return function () {
      return "Can not interpret the string '" + $numberString + "' as " + this$0.y64_1.u($i).v63_1 + ': ' + $error.a64();
    };
  }
  function NumberSpanParserOperation(consumers) {
    this.y64_1 = consumers;
    var tmp = this;
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = this.y64_1.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp_0 = sum;
      var tmp0_elvis_lhs = element.a();
      sum = tmp_0 + (tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs) | 0;
    }
    tmp.z64_1 = sum;
    var tmp_1 = this;
    var tmp0 = this.y64_1;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_2;
      if (isInterface(tmp0, Collection)) {
        tmp_2 = tmp0.h();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$2 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0.p();
      while (_iterator__ex2g4s_0.q()) {
        var element_0 = _iterator__ex2g4s_0.r();
        if (element_0.a() == null) {
          tmp$ret$2 = true;
          break $l$block_0;
        }
      }
      tmp$ret$2 = false;
    }
    tmp_1.a65_1 = tmp$ret$2;
    var tmp0_0 = this.y64_1;
    var tmp$ret$4;
    $l$block_2: {
      // Inline function 'kotlin.collections.all' call
      var tmp_3;
      if (isInterface(tmp0_0, Collection)) {
        tmp_3 = tmp0_0.h();
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        tmp$ret$4 = true;
        break $l$block_2;
      }
      var _iterator__ex2g4s_1 = tmp0_0.p();
      while (_iterator__ex2g4s_1.q()) {
        var element_1 = _iterator__ex2g4s_1.r();
        var tmp0_elvis_lhs_0 = element_1.a();
        if (!((tmp0_elvis_lhs_0 == null ? 2147483647 : tmp0_elvis_lhs_0) > 0)) {
          tmp$ret$4 = false;
          break $l$block_2;
        }
      }
      tmp$ret$4 = true;
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!tmp$ret$4) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp3 = this.y64_1;
    var tmp$ret$9;
    $l$block_3: {
      // Inline function 'kotlin.collections.count' call
      var tmp_4;
      if (isInterface(tmp3, Collection)) {
        tmp_4 = tmp3.h();
      } else {
        tmp_4 = false;
      }
      if (tmp_4) {
        tmp$ret$9 = 0;
        break $l$block_3;
      }
      var count = 0;
      var _iterator__ex2g4s_2 = tmp3.p();
      while (_iterator__ex2g4s_2.q()) {
        var element_2 = _iterator__ex2g4s_2.r();
        if (element_2.a() == null) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$9 = count;
    }
    // Inline function 'kotlin.require' call
    if (!(tmp$ret$9 <= 1)) {
      // Inline function 'kotlin.collections.filter' call
      var tmp0_1 = this.y64_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s_3 = tmp0_1.p();
      while (_iterator__ex2g4s_3.q()) {
        var element_3 = _iterator__ex2g4s_3.r();
        if (element_3.a() == null) {
          destination.n(element_3);
        }
      }
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
      var _iterator__ex2g4s_4 = destination.p();
      while (_iterator__ex2g4s_4.q()) {
        var item = _iterator__ex2g4s_4.r();
        var tmp$ret$14 = item.v63_1;
        destination_0.n(tmp$ret$14);
      }
      var fieldNames = destination_0;
      var message_0 = 'At most one variable-length numeric field in a row is allowed, but got several: ' + toString(fieldNames) + '. ' + 'Parsing is undefined: for example, with variable-length month number ' + "and variable-length day of month, '111' can be parsed as Jan 11th or Nov 1st.";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(NumberSpanParserOperation).v64 = function (storage, input, startIndex) {
    if ((startIndex + this.z64_1 | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_13;
      return tmp.o64(startIndex, NumberSpanParserOperation$consume$lambda(this));
    }
    var digitsInRow = {_v: 0};
    while ((startIndex + digitsInRow._v | 0) < charSequenceLength(input) && isAsciiDigit(charSequenceGet(input, startIndex + digitsInRow._v | 0))) {
      digitsInRow._v = digitsInRow._v + 1 | 0;
      digitsInRow._v;
    }
    if (digitsInRow._v < this.z64_1) {
      var tmp_0 = Companion_instance_13;
      return tmp_0.o64(startIndex, NumberSpanParserOperation$consume$lambda_0(digitsInRow, this));
    }
    var index = startIndex;
    var inductionVariable = 0;
    var last = this.y64_1.s() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_elvis_lhs = this.y64_1.u(i).a();
        var length = tmp1_elvis_lhs == null ? (digitsInRow._v - this.z64_1 | 0) + 1 | 0 : tmp1_elvis_lhs;
        var error = this.y64_1.u(i).w63(storage, input, index, index + length | 0);
        if (!(error == null)) {
          var tmp1 = index;
          // Inline function 'kotlin.text.substring' call
          var endIndex = index + length | 0;
          var numberString = toString(charSequenceSubSequence(input, tmp1, endIndex));
          var tmp_1 = Companion_instance_13;
          var tmp_2 = index;
          return tmp_1.o64(tmp_2, NumberSpanParserOperation$consume$lambda_1(numberString, this, i, error));
        }
        index = index + length | 0;
      }
       while (inductionVariable <= last);
    return Companion_instance_13.n64(index);
  };
  protoOf(NumberSpanParserOperation).toString = function () {
    return _get_whatThisExpects__4pg11j(this);
  };
  function PlainStringParserOperation$consume$lambda(this$0) {
    return function () {
      return "Unexpected end of input: yet to parse '" + this$0.h65_1 + "'";
    };
  }
  function PlainStringParserOperation$consume$lambda_0(this$0, $input, $startIndex, $i) {
    return function () {
      var tmp0 = $input;
      var tmp1 = $startIndex;
      // Inline function 'kotlin.text.substring' call
      var endIndex = ($startIndex + $i | 0) + 1 | 0;
      var tmp$ret$0 = toString(charSequenceSubSequence(tmp0, tmp1, endIndex));
      return 'Expected ' + this$0.h65_1 + ' but got ' + tmp$ret$0;
    };
  }
  function PlainStringParserOperation(string) {
    this.h65_1 = string;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.h65_1;
    // Inline function 'kotlin.require' call
    if (!(charSequenceLength(this_0) > 0)) {
      var message = 'Empty string is not allowed';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.h65_1, 0))) {
      var message_0 = "String '" + this.h65_1 + "' starts with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.h65_1, this.h65_1.length - 1 | 0))) {
      var message_1 = "String '" + this.h65_1 + "' ends with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  protoOf(PlainStringParserOperation).v64 = function (storage, input, startIndex) {
    if ((startIndex + this.h65_1.length | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_13;
      return tmp.o64(startIndex, PlainStringParserOperation$consume$lambda(this));
    }
    var inductionVariable = 0;
    var last = charSequenceLength(this.h65_1) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet(input, startIndex + i | 0) === charSequenceGet(this.h65_1, i))) {
          var tmp_0 = Companion_instance_13;
          return tmp_0.o64(startIndex, PlainStringParserOperation$consume$lambda_0(this, input, startIndex, i));
        }
      }
       while (inductionVariable <= last);
    return Companion_instance_13.n64(startIndex + this.h65_1.length | 0);
  };
  protoOf(PlainStringParserOperation).toString = function () {
    return "'" + this.h65_1 + "'";
  };
  function SignParser$consume$lambda(this$0, $char) {
    return function () {
      return 'Expected ' + this$0.k65_1 + ' but got ' + toString_0($char);
    };
  }
  function SignParser(isNegativeSetter, withPlusSign, whatThisExpects) {
    this.i65_1 = isNegativeSetter;
    this.j65_1 = withPlusSign;
    this.k65_1 = whatThisExpects;
  }
  protoOf(SignParser).v64 = function (storage, input, startIndex) {
    if (startIndex >= charSequenceLength(input))
      return Companion_instance_13.n64(startIndex);
    var char = charSequenceGet(input, startIndex);
    if (char === _Char___init__impl__6a9atx(45)) {
      this.i65_1(storage, true);
      return Companion_instance_13.n64(startIndex + 1 | 0);
    }
    if (char === _Char___init__impl__6a9atx(43) && this.j65_1) {
      this.i65_1(storage, false);
      return Companion_instance_13.n64(startIndex + 1 | 0);
    }
    var tmp = Companion_instance_13;
    return tmp.o64(startIndex, SignParser$consume$lambda(this, char));
  };
  protoOf(SignParser).toString = function () {
    return this.k65_1;
  };
  function UnconditionalModification(operation) {
    this.l65_1 = operation;
  }
  protoOf(UnconditionalModification).v64 = function (storage, input, startIndex) {
    this.l65_1(storage);
    return Companion_instance_13.n64(startIndex);
  };
  function setWithoutReassigning_0(_this__u8e3s4, receiver, value, position, nextIndex) {
    var conflictingValue = _this__u8e3s4.v61(receiver, value);
    var tmp;
    if (conflictingValue === null) {
      tmp = Companion_instance_13.n64(nextIndex);
    } else {
      var tmp_0 = Companion_instance_13;
      tmp = tmp_0.o64(position, setWithoutReassigning$lambda(conflictingValue, value, _this__u8e3s4));
    }
    return tmp;
  }
  function spaceAndZeroPaddedUnsignedInt$numberOfRequiredLengths($withMinus, $setter, $name, minNumberLength, maxNumberLength) {
    // Inline function 'kotlin.check' call
    if (!(maxNumberLength >= (1 + ($withMinus ? 1 : 0) | 0))) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    if ($withMinus) {
      this_0.n(new PlainStringParserOperation('-'));
    }
    this_0.n(new NumberSpanParserOperation(listOf_0(new UnsignedIntConsumer(minNumberLength - ($withMinus ? 1 : 0) | 0, maxNumberLength - ($withMinus ? 1 : 0) | 0, $setter, $name, $withMinus))));
    var tmp$ret$4 = this_0.v3();
    return new ParserStructure(tmp$ret$4, emptyList());
  }
  function setWithoutReassigning$lambda($conflictingValue, $value, $this_setWithoutReassigning) {
    return function () {
      return "Attempting to assign conflicting values '" + toString_1($conflictingValue) + "' and '" + toString_1($value) + "' to field '" + $this_setWithoutReassigning.s2() + "'";
    };
  }
  function get_POWERS_OF_TEN() {
    _init_properties_math_kt__tgcmt4();
    return POWERS_OF_TEN;
  }
  var POWERS_OF_TEN;
  function DecimalFraction(fractionalPart, digits) {
    this.w5y_1 = fractionalPart;
    this.x5y_1 = digits;
    // Inline function 'kotlin.require' call
    if (!(this.x5y_1 >= 0)) {
      var message = 'Digits must be non-negative, but was ' + this.x5y_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DecimalFraction).y5y = function (newDigits) {
    return newDigits === this.x5y_1 ? this.w5y_1 : newDigits > this.x5y_1 ? imul(this.w5y_1, get_POWERS_OF_TEN()[newDigits - this.x5y_1 | 0]) : this.w5y_1 / get_POWERS_OF_TEN()[this.x5y_1 - newDigits | 0] | 0;
  };
  protoOf(DecimalFraction).m65 = function (other) {
    var tmp0 = this.x5y_1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = other.x5y_1;
    // Inline function 'kotlin.let' call
    var maxPrecision = Math.max(tmp0, b);
    return compareTo(this.y5y(maxPrecision), other.y5y(maxPrecision));
  };
  protoOf(DecimalFraction).d = function (other) {
    return this.m65(other instanceof DecimalFraction ? other : THROW_CCE());
  };
  protoOf(DecimalFraction).equals = function (other) {
    var tmp;
    if (other instanceof DecimalFraction) {
      tmp = this.m65(other) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DecimalFraction).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    var denominator = get_POWERS_OF_TEN()[this.x5y_1];
    this_0.yd(this.w5y_1 / denominator | 0);
    this_0.x8(_Char___init__impl__6a9atx(46));
    this_0.w8(removePrefix((denominator + (this.w5y_1 % denominator | 0) | 0).toString(), '1'));
    return this_0.toString();
  };
  protoOf(DecimalFraction).hashCode = function () {
    throw UnsupportedOperationException_init_$Create$('DecimalFraction is not supposed to be used as a hash key');
  };
  function DivRemResult(q, r) {
    this.n65_1 = q;
    this.o65_1 = r;
  }
  protoOf(DivRemResult).bc = function () {
    return this.n65_1;
  };
  protoOf(DivRemResult).cc = function () {
    return this.o65_1;
  };
  function multiplyAndDivide(a, b, c) {
    _init_properties_math_kt__tgcmt4();
    if (a.equals(new Long(0, 0)) || b.equals(new Long(0, 0)))
      return new DivRemResult(new Long(0, 0), new Long(0, 0));
    var ab = safeMultiplyOrZero(a, b);
    if (!ab.equals(new Long(0, 0)))
      return new DivRemResult(ab.c3(c), ab.d3(c));
    if (b.equals(c))
      return new DivRemResult(a, new Long(0, 0));
    if (a.equals(c))
      return new DivRemResult(b, new Long(0, 0));
    var ae = a.e1(new Long(0, 0)) >= 0 ? new Long(0, 0) : new Long(-1, -1);
    var be = b.e1(new Long(0, 0)) >= 0 ? new Long(0, 0) : new Long(-1, -1);
    // Inline function 'kotlinx.datetime.internal.low' call
    var al = a.m3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.high' call
    var ah = a.k3(32).m3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.low' call
    var bl = b.m3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.high' call
    var bh = b.k3(32).m3(new Long(-1, 0));
    var w = ae.b3(bh).z2(ah.b3(be));
    var x = ae.b3(bl).z2(ah.b3(bh)).z2(al.b3(be));
    var y1 = ah.b3(bl);
    var y2 = al.b3(bh);
    var z = al.b3(bl);
    // Inline function 'kotlinx.datetime.internal.low' call
    var r4 = z.m3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.low' call
    var tmp = y1.m3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.low' call
    var tmp$ret$6 = y2.m3(new Long(-1, 0));
    var tmp_0 = tmp.z2(tmp$ret$6);
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp$ret$7 = z.k3(32).m3(new Long(-1, 0));
    var r3c = tmp_0.z2(tmp$ret$7);
    // Inline function 'kotlinx.datetime.internal.low' call
    var r3 = r3c.m3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp_1 = r3c.k3(32).m3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.low' call
    var tmp$ret$10 = x.m3(new Long(-1, 0));
    var tmp_2 = tmp_1.z2(tmp$ret$10);
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp$ret$11 = y1.k3(32).m3(new Long(-1, 0));
    var tmp_3 = tmp_2.z2(tmp$ret$11);
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp$ret$12 = y2.k3(32).m3(new Long(-1, 0));
    var r2c = tmp_3.z2(tmp$ret$12);
    // Inline function 'kotlinx.datetime.internal.low' call
    var r2 = r2c.m3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp_4 = r2c.k3(32).m3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp$ret$15 = x.k3(32).m3(new Long(-1, 0));
    var tmp_5 = tmp_4.z2(tmp$ret$15);
    // Inline function 'kotlinx.datetime.internal.low' call
    var tmp$ret$16 = w.m3(new Long(-1, 0));
    var r1 = tmp_5.z2(tmp$ret$16);
    var abl = r3.j3(32).n3(r4);
    var abh = r1.j3(32).n3(r2);
    var tmp_6;
    // Inline function 'kotlinx.datetime.internal.indexBit' call
    if (abh.k3(63).m3(new Long(1, 0)).equals(new Long(1, 0))) {
      tmp_6 = -1;
    } else {
      tmp_6 = 1;
    }
    var sign = tmp_6;
    if (sign === -1) {
      // Inline function 'kotlin.Long.plus' call
      abl = abl.h3().z2(toLong(1));
      abh = abh.h3();
      if (abl.equals(new Long(0, 0))) {
        // Inline function 'kotlin.Long.plus' call
        abh = abh.z2(toLong(1));
      }
    }
    var q = new Long(0, 0);
    var r = new Long(0, 0);
    var inductionVariable = 127;
    if (0 <= inductionVariable)
      do {
        var bitNo = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_7;
        if (bitNo < 64) {
          // Inline function 'kotlinx.datetime.internal.indexBit' call
          tmp_7 = abl.k3(bitNo).m3(new Long(1, 0));
        } else {
          var tmp21 = abh;
          // Inline function 'kotlinx.datetime.internal.indexBit' call
          var bit = bitNo - 64 | 0;
          tmp_7 = tmp21.k3(bit).m3(new Long(1, 0));
        }
        var nextBit = tmp_7;
        r = r.j3(1).n3(nextBit);
        if (r.e1(c) >= 0 || r.e1(new Long(0, 0)) < 0) {
          r = r.a3(c);
          if (bitNo < 63)
            q = q.n3((new Long(1, 0)).j3(bitNo));
          else
            throw ArithmeticException_init_$Create$('The result of a multiplication followed by division overflows a long');
        }
      }
       while (0 <= inductionVariable);
    return new DivRemResult(numberToLong(sign).b3(q), numberToLong(sign).b3(r));
  }
  function safeMultiplyOrZero(a, b) {
    _init_properties_math_kt__tgcmt4();
    if (b.equals(new Long(-1, -1))) {
      if (a.equals(new Long(0, -2147483648))) {
        return new Long(0, 0);
      }
      return a.g3();
    } else if (b.equals(new Long(1, 0)))
      return a;
    var total = a.b3(b);
    if (!total.c3(b).equals(a)) {
      return new Long(0, 0);
    }
    return total;
  }
  var properties_initialized_math_kt_amm9wq;
  function _init_properties_math_kt__tgcmt4() {
    if (!properties_initialized_math_kt_amm9wq) {
      properties_initialized_math_kt_amm9wq = true;
      // Inline function 'kotlin.intArrayOf' call
      POWERS_OF_TEN = new Int32Array([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]);
    }
  }
  function isAsciiDigit(_this__u8e3s4) {
    return _Char___init__impl__6a9atx(48) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(57) : false;
  }
  function asciiDigitToInt(_this__u8e3s4) {
    return Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(48));
  }
  function removeLeadingZerosFromLongYearFormLocalDate(input) {
    return removeLeadingZerosFromLongYearForm(toString(input), 6);
  }
  function removeLeadingZerosFromLongYearFormLocalDateTime(input) {
    return removeLeadingZerosFromLongYearForm(toString(input), 12);
  }
  function removeLeadingZerosFromLongYearForm(input, minStringLengthAfterYear) {
    var failingYearStringLength = 12;
    if (input.length < (failingYearStringLength + minStringLengthAfterYear | 0) || !contains('+-', charSequenceGet(input, 0)))
      return input;
    var yearEnd = indexOf(input, _Char___init__impl__6a9atx(45), 1);
    if (yearEnd < failingYearStringLength)
      return input;
    var leadingZeros = 0;
    while (charSequenceGet(input, 1 + leadingZeros | 0) === _Char___init__impl__6a9atx(48)) {
      leadingZeros = leadingZeros + 1 | 0;
    }
    if ((yearEnd - leadingZeros | 0) >= failingYearStringLength)
      return input;
    // Inline function 'kotlin.text.removeRange' call
    var endIndex = (yearEnd - failingYearStringLength | 0) + 2 | 0;
    return toString(removeRange(isCharSequence(input) ? input : THROW_CCE(), 1, endIndex));
  }
  function TimeBasedDateTimeUnitSerializer$descriptor$delegate$lambda() {
    return buildClassSerialDescriptor('kotlinx.datetime.TimeBased', [], TimeBasedDateTimeUnitSerializer$descriptor$delegate$lambda$lambda);
  }
  function TimeBasedDateTimeUnitSerializer$descriptor$delegate$lambda$lambda($this$buildClassSerialDescriptor) {
    // Inline function 'kotlinx.serialization.descriptors.element' call
    var elementName = 'nanoseconds';
    var annotations = emptyList();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(getKClass(Long), arrayOf([]), false));
    var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).u1x();
    $this$buildClassSerialDescriptor.d20(elementName, descriptor, annotations, false);
    return Unit_instance;
  }
  function TimeBasedDateTimeUnitSerializer() {
    TimeBasedDateTimeUnitSerializer_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.p65_1 = lazy_0(tmp_0, TimeBasedDateTimeUnitSerializer$descriptor$delegate$lambda);
  }
  protoOf(TimeBasedDateTimeUnitSerializer).u1x = function () {
    var tmp0 = this.p65_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.z();
  };
  protoOf(TimeBasedDateTimeUnitSerializer).q65 = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.u1x();
    var composite = encoder.h21(descriptor);
    composite.s22(TimeBasedDateTimeUnitSerializer_getInstance().u1x(), 0, value.l5q_1);
    composite.i21(descriptor);
  };
  protoOf(TimeBasedDateTimeUnitSerializer).v1x = function (encoder, value) {
    return this.q65(encoder, value instanceof TimeBased ? value : THROW_CCE());
  };
  protoOf(TimeBasedDateTimeUnitSerializer).w1x = function (decoder) {
    var seen = {_v: false};
    var nanoseconds = {_v: new Long(0, 0)};
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.u1x();
    var composite = decoder.h21(descriptor);
    if (composite.x21()) {
      nanoseconds._v = composite.n21(TimeBasedDateTimeUnitSerializer_getInstance().u1x(), 0);
      seen._v = true;
    } else {
      loop: while (true) {
        var elementIndex = composite.y21(TimeBasedDateTimeUnitSerializer_getInstance().u1x());
        switch (elementIndex) {
          case 0:
            nanoseconds._v = composite.n21(TimeBasedDateTimeUnitSerializer_getInstance().u1x(), 0);
            seen._v = true;
            break;
          case -1:
            break loop;
          default:
            throwUnknownIndexException(elementIndex);
            break;
        }
      }
    }
    var result = Unit_instance;
    composite.i21(descriptor);
    if (!seen._v)
      throw MissingFieldException_init_$Create$('nanoseconds', this.u1x().v1y());
    return new TimeBased(nanoseconds._v);
  };
  var TimeBasedDateTimeUnitSerializer_instance;
  function TimeBasedDateTimeUnitSerializer_getInstance() {
    if (TimeBasedDateTimeUnitSerializer_instance == null)
      new TimeBasedDateTimeUnitSerializer();
    return TimeBasedDateTimeUnitSerializer_instance;
  }
  function _get_impl__d88w17($this) {
    var tmp0 = $this.r65_1;
    // Inline function 'kotlin.getValue' call
    impl$factory();
    return tmp0.z();
  }
  function DateBasedDateTimeUnitSerializer$impl$delegate$lambda() {
    var tmp = getKClass(DateBased);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(DayBased), getKClass(MonthBased)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [DayBasedDateTimeUnitSerializer_getInstance(), MonthBasedDateTimeUnitSerializer_getInstance()];
    return new SealedClassSerializer('kotlinx.datetime.DateTimeUnit.DateBased', tmp, tmp_0, tmp$ret$5);
  }
  function DateBasedDateTimeUnitSerializer() {
    DateBasedDateTimeUnitSerializer_instance = this;
    AbstractPolymorphicSerializer.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.r65_1 = lazy_0(tmp_0, DateBasedDateTimeUnitSerializer$impl$delegate$lambda);
  }
  protoOf(DateBasedDateTimeUnitSerializer).l1y = function (decoder, klassName) {
    return _get_impl__d88w17(this).l1y(decoder, klassName);
  };
  protoOf(DateBasedDateTimeUnitSerializer).s65 = function (encoder, value) {
    return _get_impl__d88w17(this).m1y(encoder, value);
  };
  protoOf(DateBasedDateTimeUnitSerializer).m1y = function (encoder, value) {
    return this.s65(encoder, value instanceof DateBased ? value : THROW_CCE());
  };
  protoOf(DateBasedDateTimeUnitSerializer).j1y = function () {
    return getKClass(DateBased);
  };
  protoOf(DateBasedDateTimeUnitSerializer).u1x = function () {
    return _get_impl__d88w17(this).u1x();
  };
  var DateBasedDateTimeUnitSerializer_instance;
  function DateBasedDateTimeUnitSerializer_getInstance() {
    if (DateBasedDateTimeUnitSerializer_instance == null)
      new DateBasedDateTimeUnitSerializer();
    return DateBasedDateTimeUnitSerializer_instance;
  }
  function DayBasedDateTimeUnitSerializer$descriptor$delegate$lambda() {
    return buildClassSerialDescriptor('kotlinx.datetime.DayBased', [], DayBasedDateTimeUnitSerializer$descriptor$delegate$lambda$lambda);
  }
  function DayBasedDateTimeUnitSerializer$descriptor$delegate$lambda$lambda($this$buildClassSerialDescriptor) {
    // Inline function 'kotlinx.serialization.descriptors.element' call
    var annotations = emptyList();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(PrimitiveClasses_getInstance().hd(), arrayOf([]), false));
    var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).u1x();
    $this$buildClassSerialDescriptor.d20('days', descriptor, annotations, false);
    return Unit_instance;
  }
  function DayBasedDateTimeUnitSerializer() {
    DayBasedDateTimeUnitSerializer_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.t65_1 = lazy_0(tmp_0, DayBasedDateTimeUnitSerializer$descriptor$delegate$lambda);
  }
  protoOf(DayBasedDateTimeUnitSerializer).u1x = function () {
    var tmp0 = this.t65_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return tmp0.z();
  };
  protoOf(DayBasedDateTimeUnitSerializer).u65 = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.u1x();
    var composite = encoder.h21(descriptor);
    composite.r22(DayBasedDateTimeUnitSerializer_getInstance().u1x(), 0, value.r5q_1);
    composite.i21(descriptor);
  };
  protoOf(DayBasedDateTimeUnitSerializer).v1x = function (encoder, value) {
    return this.u65(encoder, value instanceof DayBased ? value : THROW_CCE());
  };
  protoOf(DayBasedDateTimeUnitSerializer).w1x = function (decoder) {
    var seen = {_v: false};
    var days = {_v: 0};
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.u1x();
    var composite = decoder.h21(descriptor);
    if (composite.x21()) {
      days._v = composite.m21(DayBasedDateTimeUnitSerializer_getInstance().u1x(), 0);
      seen._v = true;
    } else {
      loop: while (true) {
        var elementIndex = composite.y21(DayBasedDateTimeUnitSerializer_getInstance().u1x());
        switch (elementIndex) {
          case 0:
            days._v = composite.m21(DayBasedDateTimeUnitSerializer_getInstance().u1x(), 0);
            seen._v = true;
            break;
          case -1:
            break loop;
          default:
            throwUnknownIndexException(elementIndex);
            break;
        }
      }
    }
    var result = Unit_instance;
    composite.i21(descriptor);
    if (!seen._v)
      throw MissingFieldException_init_$Create$('days', this.u1x().v1y());
    return new DayBased(days._v);
  };
  var DayBasedDateTimeUnitSerializer_instance;
  function DayBasedDateTimeUnitSerializer_getInstance() {
    if (DayBasedDateTimeUnitSerializer_instance == null)
      new DayBasedDateTimeUnitSerializer();
    return DayBasedDateTimeUnitSerializer_instance;
  }
  function MonthBasedDateTimeUnitSerializer$descriptor$delegate$lambda() {
    return buildClassSerialDescriptor('kotlinx.datetime.MonthBased', [], MonthBasedDateTimeUnitSerializer$descriptor$delegate$lambda$lambda);
  }
  function MonthBasedDateTimeUnitSerializer$descriptor$delegate$lambda$lambda($this$buildClassSerialDescriptor) {
    // Inline function 'kotlinx.serialization.descriptors.element' call
    var annotations = emptyList();
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer(createKType(PrimitiveClasses_getInstance().hd(), arrayOf([]), false));
    var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).u1x();
    $this$buildClassSerialDescriptor.d20('months', descriptor, annotations, false);
    return Unit_instance;
  }
  function MonthBasedDateTimeUnitSerializer() {
    MonthBasedDateTimeUnitSerializer_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.v65_1 = lazy_0(tmp_0, MonthBasedDateTimeUnitSerializer$descriptor$delegate$lambda);
  }
  protoOf(MonthBasedDateTimeUnitSerializer).u1x = function () {
    var tmp0 = this.v65_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_1();
    return tmp0.z();
  };
  protoOf(MonthBasedDateTimeUnitSerializer).w65 = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.u1x();
    var composite = encoder.h21(descriptor);
    composite.r22(MonthBasedDateTimeUnitSerializer_getInstance().u1x(), 0, value.s5q_1);
    composite.i21(descriptor);
  };
  protoOf(MonthBasedDateTimeUnitSerializer).v1x = function (encoder, value) {
    return this.w65(encoder, value instanceof MonthBased ? value : THROW_CCE());
  };
  protoOf(MonthBasedDateTimeUnitSerializer).w1x = function (decoder) {
    var seen = {_v: false};
    var months = {_v: 0};
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.u1x();
    var composite = decoder.h21(descriptor);
    if (composite.x21()) {
      months._v = composite.m21(MonthBasedDateTimeUnitSerializer_getInstance().u1x(), 0);
      seen._v = true;
    } else {
      loop: while (true) {
        var elementIndex = composite.y21(MonthBasedDateTimeUnitSerializer_getInstance().u1x());
        switch (elementIndex) {
          case 0:
            months._v = composite.m21(MonthBasedDateTimeUnitSerializer_getInstance().u1x(), 0);
            seen._v = true;
            break;
          case -1:
            break loop;
          default:
            throwUnknownIndexException(elementIndex);
            break;
        }
      }
    }
    var result = Unit_instance;
    composite.i21(descriptor);
    if (!seen._v)
      throw MissingFieldException_init_$Create$('months', this.u1x().v1y());
    return new MonthBased(months._v);
  };
  var MonthBasedDateTimeUnitSerializer_instance;
  function MonthBasedDateTimeUnitSerializer_getInstance() {
    if (MonthBasedDateTimeUnitSerializer_instance == null)
      new MonthBasedDateTimeUnitSerializer();
    return MonthBasedDateTimeUnitSerializer_instance;
  }
  function _get_impl__d88w17_0($this) {
    var tmp0 = $this.x65_1;
    // Inline function 'kotlin.getValue' call
    impl$factory_0();
    return tmp0.z();
  }
  function DateTimeUnitSerializer$impl$delegate$lambda() {
    var tmp = getKClass(DateTimeUnit);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(DayBased), getKClass(MonthBased), getKClass(TimeBased)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [DayBasedDateTimeUnitSerializer_getInstance(), MonthBasedDateTimeUnitSerializer_getInstance(), TimeBasedDateTimeUnitSerializer_getInstance()];
    return new SealedClassSerializer('kotlinx.datetime.DateTimeUnit', tmp, tmp_0, tmp$ret$5);
  }
  function DateTimeUnitSerializer() {
    DateTimeUnitSerializer_instance = this;
    AbstractPolymorphicSerializer.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.x65_1 = lazy_0(tmp_0, DateTimeUnitSerializer$impl$delegate$lambda);
  }
  protoOf(DateTimeUnitSerializer).l1y = function (decoder, klassName) {
    return _get_impl__d88w17_0(this).l1y(decoder, klassName);
  };
  protoOf(DateTimeUnitSerializer).y65 = function (encoder, value) {
    return _get_impl__d88w17_0(this).m1y(encoder, value);
  };
  protoOf(DateTimeUnitSerializer).m1y = function (encoder, value) {
    return this.y65(encoder, value instanceof DateTimeUnit ? value : THROW_CCE());
  };
  protoOf(DateTimeUnitSerializer).j1y = function () {
    return getKClass(DateTimeUnit);
  };
  protoOf(DateTimeUnitSerializer).u1x = function () {
    return _get_impl__d88w17_0(this).u1x();
  };
  var DateTimeUnitSerializer_instance;
  function DateTimeUnitSerializer_getInstance() {
    if (DateTimeUnitSerializer_instance == null)
      new DateTimeUnitSerializer();
    return DateTimeUnitSerializer_instance;
  }
  function throwUnknownIndexException(index) {
    throw SerializationException_init_$Create$('An unknown field for index ' + index);
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.u1x();
    }, null);
  }
  function impl$factory() {
    return getPropertyCallableRef('impl', 1, KProperty1, function (receiver) {
      return _get_impl__d88w17(receiver);
    }, null);
  }
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.u1x();
    }, null);
  }
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.u1x();
    }, null);
  }
  function impl$factory_0() {
    return getPropertyCallableRef('impl', 1, KProperty1, function (receiver) {
      return _get_impl__d88w17_0(receiver);
    }, null);
  }
  function InstantIso8601Serializer() {
    InstantIso8601Serializer_instance = this;
    this.z65_1 = PrimitiveSerialDescriptor('kotlinx.datetime.Instant', STRING_getInstance());
  }
  protoOf(InstantIso8601Serializer).u1x = function () {
    return this.z65_1;
  };
  protoOf(InstantIso8601Serializer).w1x = function (decoder) {
    return Companion_getInstance_14().a66(decoder.c21());
  };
  protoOf(InstantIso8601Serializer).b66 = function (encoder, value) {
    encoder.l22(value.toString());
  };
  protoOf(InstantIso8601Serializer).v1x = function (encoder, value) {
    return this.b66(encoder, value instanceof Instant_0 ? value : THROW_CCE());
  };
  var InstantIso8601Serializer_instance;
  function InstantIso8601Serializer_getInstance() {
    if (InstantIso8601Serializer_instance == null)
      new InstantIso8601Serializer();
    return InstantIso8601Serializer_instance;
  }
  function LocalDateIso8601Serializer() {
    LocalDateIso8601Serializer_instance = this;
    this.c66_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalDate', STRING_getInstance());
  }
  protoOf(LocalDateIso8601Serializer).u1x = function () {
    return this.c66_1;
  };
  protoOf(LocalDateIso8601Serializer).w1x = function (decoder) {
    return Companion_getInstance_15().f66(decoder.c21());
  };
  protoOf(LocalDateIso8601Serializer).g66 = function (encoder, value) {
    encoder.l22(value.toString());
  };
  protoOf(LocalDateIso8601Serializer).v1x = function (encoder, value) {
    return this.g66(encoder, value instanceof LocalDate_0 ? value : THROW_CCE());
  };
  var LocalDateIso8601Serializer_instance;
  function LocalDateIso8601Serializer_getInstance() {
    if (LocalDateIso8601Serializer_instance == null)
      new LocalDateIso8601Serializer();
    return LocalDateIso8601Serializer_instance;
  }
  function LocalDateTimeIso8601Serializer() {
    LocalDateTimeIso8601Serializer_instance = this;
    this.h66_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalDateTime', STRING_getInstance());
  }
  protoOf(LocalDateTimeIso8601Serializer).u1x = function () {
    return this.h66_1;
  };
  protoOf(LocalDateTimeIso8601Serializer).w1x = function (decoder) {
    return Companion_getInstance_16().k66(decoder.c21());
  };
  protoOf(LocalDateTimeIso8601Serializer).l66 = function (encoder, value) {
    encoder.l22(value.toString());
  };
  protoOf(LocalDateTimeIso8601Serializer).v1x = function (encoder, value) {
    return this.l66(encoder, value instanceof LocalDateTime_0 ? value : THROW_CCE());
  };
  var LocalDateTimeIso8601Serializer_instance;
  function LocalDateTimeIso8601Serializer_getInstance() {
    if (LocalDateTimeIso8601Serializer_instance == null)
      new LocalDateTimeIso8601Serializer();
    return LocalDateTimeIso8601Serializer_instance;
  }
  function LocalTimeIso8601Serializer() {
    LocalTimeIso8601Serializer_instance = this;
    this.m66_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalTime', STRING_getInstance());
  }
  protoOf(LocalTimeIso8601Serializer).u1x = function () {
    return this.m66_1;
  };
  protoOf(LocalTimeIso8601Serializer).w1x = function (decoder) {
    return Companion_getInstance_17().p66(decoder.c21());
  };
  protoOf(LocalTimeIso8601Serializer).q66 = function (encoder, value) {
    encoder.l22(value.toString());
  };
  protoOf(LocalTimeIso8601Serializer).v1x = function (encoder, value) {
    return this.q66(encoder, value instanceof LocalTime_0 ? value : THROW_CCE());
  };
  var LocalTimeIso8601Serializer_instance;
  function LocalTimeIso8601Serializer_getInstance() {
    if (LocalTimeIso8601Serializer_instance == null)
      new LocalTimeIso8601Serializer();
    return LocalTimeIso8601Serializer_instance;
  }
  function UtcOffsetSerializer() {
    UtcOffsetSerializer_instance = this;
    this.r66_1 = PrimitiveSerialDescriptor('kotlinx.datetime.UtcOffset', STRING_getInstance());
  }
  protoOf(UtcOffsetSerializer).u1x = function () {
    return this.r66_1;
  };
  protoOf(UtcOffsetSerializer).w1x = function (decoder) {
    return Companion_getInstance_20().t66(decoder.c21());
  };
  protoOf(UtcOffsetSerializer).u66 = function (encoder, value) {
    encoder.l22(value.toString());
  };
  protoOf(UtcOffsetSerializer).v1x = function (encoder, value) {
    return this.u66(encoder, value instanceof UtcOffset ? value : THROW_CCE());
  };
  var UtcOffsetSerializer_instance;
  function UtcOffsetSerializer_getInstance() {
    if (UtcOffsetSerializer_instance == null)
      new UtcOffsetSerializer();
    return UtcOffsetSerializer_instance;
  }
  function TimeZoneSerializer() {
    TimeZoneSerializer_instance = this;
    this.v66_1 = PrimitiveSerialDescriptor('kotlinx.datetime.TimeZone', STRING_getInstance());
  }
  protoOf(TimeZoneSerializer).u1x = function () {
    return this.v66_1;
  };
  protoOf(TimeZoneSerializer).w1x = function (decoder) {
    return Companion_getInstance_18().x66(decoder.c21());
  };
  protoOf(TimeZoneSerializer).y66 = function (encoder, value) {
    encoder.l22(value.a67());
  };
  protoOf(TimeZoneSerializer).v1x = function (encoder, value) {
    return this.y66(encoder, value instanceof TimeZone ? value : THROW_CCE());
  };
  var TimeZoneSerializer_instance;
  function TimeZoneSerializer_getInstance() {
    if (TimeZoneSerializer_instance == null)
      new TimeZoneSerializer();
    return TimeZoneSerializer_instance;
  }
  function FixedOffsetTimeZoneSerializer() {
    FixedOffsetTimeZoneSerializer_instance = this;
    this.b67_1 = PrimitiveSerialDescriptor('kotlinx.datetime.FixedOffsetTimeZone', STRING_getInstance());
  }
  protoOf(FixedOffsetTimeZoneSerializer).u1x = function () {
    return this.b67_1;
  };
  protoOf(FixedOffsetTimeZoneSerializer).w1x = function (decoder) {
    var zone = Companion_getInstance_18().x66(decoder.c21());
    if (zone instanceof FixedOffsetTimeZone) {
      return zone;
    } else {
      throw SerializationException_init_$Create$("Timezone identifier '" + zone.toString() + "' does not correspond to a fixed-offset timezone");
    }
  };
  protoOf(FixedOffsetTimeZoneSerializer).c67 = function (encoder, value) {
    encoder.l22(value.a67());
  };
  protoOf(FixedOffsetTimeZoneSerializer).v1x = function (encoder, value) {
    return this.c67(encoder, value instanceof FixedOffsetTimeZone ? value : THROW_CCE());
  };
  var FixedOffsetTimeZoneSerializer_instance;
  function FixedOffsetTimeZoneSerializer_getInstance() {
    if (FixedOffsetTimeZoneSerializer_instance == null)
      new FixedOffsetTimeZoneSerializer();
    return FixedOffsetTimeZoneSerializer_instance;
  }
  var DayOfWeek_MONDAY_instance;
  var DayOfWeek_TUESDAY_instance;
  var DayOfWeek_WEDNESDAY_instance;
  var DayOfWeek_THURSDAY_instance;
  var DayOfWeek_FRIDAY_instance;
  var DayOfWeek_SATURDAY_instance;
  var DayOfWeek_SUNDAY_instance;
  function values() {
    return [DayOfWeek_MONDAY_getInstance(), DayOfWeek_TUESDAY_getInstance(), DayOfWeek_WEDNESDAY_getInstance(), DayOfWeek_THURSDAY_getInstance(), DayOfWeek_FRIDAY_getInstance(), DayOfWeek_SATURDAY_getInstance(), DayOfWeek_SUNDAY_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var DayOfWeek_entriesInitialized;
  function DayOfWeek_initEntries() {
    if (DayOfWeek_entriesInitialized)
      return Unit_instance;
    DayOfWeek_entriesInitialized = true;
    DayOfWeek_MONDAY_instance = new DayOfWeek_0('MONDAY', 0);
    DayOfWeek_TUESDAY_instance = new DayOfWeek_0('TUESDAY', 1);
    DayOfWeek_WEDNESDAY_instance = new DayOfWeek_0('WEDNESDAY', 2);
    DayOfWeek_THURSDAY_instance = new DayOfWeek_0('THURSDAY', 3);
    DayOfWeek_FRIDAY_instance = new DayOfWeek_0('FRIDAY', 4);
    DayOfWeek_SATURDAY_instance = new DayOfWeek_0('SATURDAY', 5);
    DayOfWeek_SUNDAY_instance = new DayOfWeek_0('SUNDAY', 6);
  }
  var $ENTRIES;
  function DayOfWeek_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toDayOfWeek(_this__u8e3s4) {
    return DayOfWeek(_this__u8e3s4.value());
  }
  function DayOfWeek_MONDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_MONDAY_instance;
  }
  function DayOfWeek_TUESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_TUESDAY_instance;
  }
  function DayOfWeek_WEDNESDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_WEDNESDAY_instance;
  }
  function DayOfWeek_THURSDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_THURSDAY_instance;
  }
  function DayOfWeek_FRIDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_FRIDAY_instance;
  }
  function DayOfWeek_SATURDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SATURDAY_instance;
  }
  function DayOfWeek_SUNDAY_getInstance() {
    DayOfWeek_initEntries();
    return DayOfWeek_SUNDAY_instance;
  }
  function Companion_14() {
    Companion_instance_14 = this;
    var tmp = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    var tmp$ret$1 = Instant.ofEpochSecond((new Long(-931914497, -750)).r3(), 999999999);
    tmp.h5q_1 = new Instant_0(tmp$ret$1);
    var tmp_0 = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    var tmp$ret$3 = Instant.ofEpochSecond((new Long(1151527680, 720)).r3(), 0);
    tmp_0.i5q_1 = new Instant_0(tmp$ret$3);
    this.j5q_1 = new Instant_0(Instant.MIN);
    this.k5q_1 = new Instant_0(Instant.MAX);
  }
  protoOf(Companion_14).g5q = function () {
    return new Instant_0(Clock.systemUTC().instant());
  };
  protoOf(Companion_14).d67 = function (input, format) {
    var tmp;
    try {
      tmp = format.h5w(input).t5u();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof IllegalArgumentException) {
        var e = $p;
        throw DateTimeFormatException_init_$Create$_2("Failed to parse an instant from '" + toString(input) + "'", e);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  protoOf(Companion_14).a66 = function (input, format, $super) {
    format = format === VOID ? Formats_getInstance().a5u_1 : format;
    return $super === VOID ? this.d67(input, format) : $super.d67.call(this, input, format);
  };
  protoOf(Companion_14).d5v = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      var tmp$ret$1 = Instant.ofEpochSecond(epochSeconds.r3(), nanosecondAdjustment);
      tmp = new Instant_0(tmp$ret$1);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_0 = epochSeconds.e1(new Long(0, 0)) > 0 ? this.k5q_1 : this.j5q_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function Instant_0(value) {
    Companion_getInstance_14();
    this.b5v_1 = value;
  }
  protoOf(Instant_0).c5v = function () {
    return numberToLong(this.b5v_1.epochSecond());
  };
  protoOf(Instant_0).eo = function (duration) {
    // Inline function 'kotlin.time.Duration.toComponents' call
    var tmp1 = _Duration___get_inWholeSeconds__impl__hpy7b3(duration);
    var nanoseconds = _Duration___get_nanosecondsComponent__impl__nh19kq(duration);
    var tmp;
    try {
      tmp = new Instant_0(this.e67(tmp1.r3(), nanoseconds));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_0 = Duration__isPositive_impl_tvkkt2(duration) ? Companion_getInstance_14().k5q_1 : Companion_getInstance_14().j5q_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).e67 = function (seconds, nanos) {
    var newSeconds = this.b5v_1.epochSecond() + seconds;
    var newNanos = this.b5v_1.nano() + nanos;
    // Inline function 'kotlinx.datetime.jsTry' call
    return Instant.ofEpochSecond(newSeconds, numberToInt(newNanos));
  };
  protoOf(Instant_0).f67 = function (other) {
    return this.b5v_1.compareTo(other.b5v_1);
  };
  protoOf(Instant_0).d = function (other) {
    return this.f67(other instanceof Instant_0 ? other : THROW_CCE());
  };
  protoOf(Instant_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = this.b5v_1 === other.b5v_1 || this.b5v_1.equals(other.b5v_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).hashCode = function () {
    return this.b5v_1.hashCode();
  };
  protoOf(Instant_0).toString = function () {
    return this.b5v_1.toString();
  };
  function plus_0(_this__u8e3s4, value, unit, timeZone) {
    var tmp;
    try {
      var thisZdt = atZone(_this__u8e3s4, timeZone);
      var tmp_0;
      if (unit instanceof TimeBased) {
        tmp_0 = checkZone(plus_1(_this__u8e3s4, toLong(value), unit).b5v_1, timeZone);
      } else {
        if (unit instanceof DayBased) {
          // Inline function 'kotlinx.datetime.jsTry' call
          tmp_0 = thisZdt.plusDays(value * unit.r5q_1).toInstant();
        } else {
          if (unit instanceof MonthBased) {
            // Inline function 'kotlinx.datetime.jsTry' call
            tmp_0 = thisZdt.plusMonths(value * unit.s5q_1).toInstant();
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      // Inline function 'kotlin.let' call
      var p0 = tmp_0;
      tmp = new Instant_0(p0);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function atZone(_this__u8e3s4, zone) {
    // Inline function 'kotlinx.datetime.jsTry' call
    return _this__u8e3s4.b5v_1.atZone(zone.z66_1);
  }
  function checkZone(_this__u8e3s4, zone) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlinx.datetime.jsTry' call
    _this__u8e3s4.atZone(zone.z66_1);
    return _this__u8e3s4;
  }
  function plus_1(_this__u8e3s4, value, unit) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var name_for_destructuring_parameter_0_fjsvno = multiplyAndDivide(value, unit.l5q_1, new Long(1000000000, 0));
      var d = name_for_destructuring_parameter_0_fjsvno.bc();
      var r = name_for_destructuring_parameter_0_fjsvno.cc();
      tmp = new Instant_0(_this__u8e3s4.e67(d.r3(), r.j1()));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e)) {
          throw e;
        }
        tmp_0 = value.e1(new Long(0, 0)) > 0 ? Companion_getInstance_14().k5q_1 : Companion_getInstance_14().j5q_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function isJodaDateTimeParseException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeParseException');
  }
  function isJodaDateTimeException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'DateTimeException');
  }
  function isJodaArithmeticException(_this__u8e3s4) {
    return hasJsExceptionName(_this__u8e3s4, 'ArithmeticException');
  }
  function Companion_15() {
    Companion_instance_15 = this;
    this.d66_1 = new LocalDate_0(LocalDate.MIN);
    this.e66_1 = new LocalDate_0(LocalDate.MAX);
  }
  protoOf(Companion_15).g67 = function (input, format) {
    var tmp;
    if (format === Formats_getInstance_0().g5r()) {
      var tmp_0;
      try {
        var sanitizedInput = removeLeadingZerosFromLongYearFormLocalDate(toString(input));
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlin.let' call
        var p0 = LocalDate.parse(toString(sanitizedInput));
        tmp_0 = new LocalDate_0(p0);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          if (isJodaDateTimeParseException(e))
            throw DateTimeFormatException_init_$Create$_1(e);
          throw e;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    } else {
      tmp = format.h5w(input);
    }
    return tmp;
  };
  protoOf(Companion_15).f66 = function (input, format, $super) {
    format = format === VOID ? getIsoDateFormat() : format;
    return $super === VOID ? this.g67(input, format) : $super.g67.call(this, input, format);
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function Formats_0() {
    Formats_instance_0 = this;
    this.f5r_1 = get_ISO_DATE_BASIC();
  }
  protoOf(Formats_0).g5r = function () {
    return get_ISO_DATE();
  };
  var Formats_instance_0;
  function Formats_getInstance_0() {
    if (Formats_instance_0 == null)
      new Formats_0();
    return Formats_instance_0;
  }
  function LocalDate_init_$Init$(year, monthNumber, dayOfMonth, $this) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      tmp = LocalDate.of(year, monthNumber, dayOfMonth);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    LocalDate_0.call($this, tmp);
    return $this;
  }
  function LocalDate_init_$Create$(year, monthNumber, dayOfMonth) {
    return LocalDate_init_$Init$(year, monthNumber, dayOfMonth, objectCreate(protoOf(LocalDate_0)));
  }
  function LocalDate_0(value) {
    Companion_getInstance_15();
    this.v5u_1 = value;
  }
  protoOf(LocalDate_0).a5s = function () {
    return this.v5u_1.year();
  };
  protoOf(LocalDate_0).y5r = function () {
    return this.v5u_1.monthValue();
  };
  protoOf(LocalDate_0).p5w = function () {
    return toMonth(this.v5u_1.month());
  };
  protoOf(LocalDate_0).s5r = function () {
    return this.v5u_1.dayOfMonth();
  };
  protoOf(LocalDate_0).q5w = function () {
    return toDayOfWeek(this.v5u_1.dayOfWeek());
  };
  protoOf(LocalDate_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDate_0) {
        tmp_0 = this.v5u_1 === other.v5u_1 || this.v5u_1.equals(other.v5u_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDate_0).hashCode = function () {
    return this.v5u_1.hashCode();
  };
  protoOf(LocalDate_0).toString = function () {
    return this.v5u_1.toString();
  };
  protoOf(LocalDate_0).h67 = function (other) {
    return this.v5u_1.compareTo(other.v5u_1);
  };
  protoOf(LocalDate_0).d = function (other) {
    return this.h67(other instanceof LocalDate_0 ? other : THROW_CCE());
  };
  protoOf(LocalDate_0).w5u = function () {
    return numberToInt(this.v5u_1.toEpochDay());
  };
  function plus_2(_this__u8e3s4, value, unit) {
    return plusNumber(_this__u8e3s4, value, unit);
  }
  function plusNumber(_this__u8e3s4, value, unit) {
    var tmp;
    try {
      var tmp_0;
      if (unit instanceof DayBased) {
        // Inline function 'kotlinx.datetime.jsTry' call
        tmp_0 = _this__u8e3s4.v5u_1.plusDays(numberToInt(numberToDouble(value) * unit.r5q_1));
      } else {
        if (unit instanceof MonthBased) {
          // Inline function 'kotlinx.datetime.jsTry' call
          tmp_0 = _this__u8e3s4.v5u_1.plusMonths(numberToInt(numberToDouble(value) * unit.s5q_1));
        } else {
          noWhenBranchMatchedException();
        }
      }
      // Inline function 'kotlin.let' call
      var p0 = tmp_0;
      tmp = new LocalDate_0(p0);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e) && !isJodaArithmeticException(e))
          throw e;
        throw DateTimeArithmeticException_init_$Create$_1('The result of adding ' + toString(value) + ' of ' + toString(unit) + ' to ' + _this__u8e3s4.toString() + ' is out of LocalDate range.', e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function LocalDateTime_init_$Init$(date, time, $this) {
    // Inline function 'kotlinx.datetime.jsTry' call
    var tmp$ret$1 = LocalDateTime.of(date.v5u_1, time.x5u_1);
    LocalDateTime_0.call($this, tmp$ret$1);
    return $this;
  }
  function LocalDateTime_init_$Create$(date, time) {
    return LocalDateTime_init_$Init$(date, time, objectCreate(protoOf(LocalDateTime_0)));
  }
  function Companion_16() {
    Companion_instance_16 = this;
    this.i66_1 = new LocalDateTime_0(LocalDateTime.MIN);
    this.j66_1 = new LocalDateTime_0(LocalDateTime.MAX);
  }
  protoOf(Companion_16).i67 = function (input, format) {
    var tmp;
    if (format === Formats_getInstance_1().h5r_1) {
      var tmp_0;
      try {
        var sanitizedInput = removeLeadingZerosFromLongYearFormLocalDateTime(toString(input));
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlin.let' call
        var p0 = LocalDateTime.parse(toString(sanitizedInput));
        tmp_0 = new LocalDateTime_0(p0);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          if (isJodaDateTimeParseException(e))
            throw DateTimeFormatException_init_$Create$_1(e);
          throw e;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    } else {
      tmp = format.h5w(input);
    }
    return tmp;
  };
  protoOf(Companion_16).k66 = function (input, format, $super) {
    format = format === VOID ? getIsoDateTimeFormat() : format;
    return $super === VOID ? this.i67(input, format) : $super.i67.call(this, input, format);
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function Formats_1() {
    Formats_instance_1 = this;
    this.h5r_1 = get_ISO_DATETIME();
  }
  var Formats_instance_1;
  function Formats_getInstance_1() {
    if (Formats_instance_1 == null)
      new Formats_1();
    return Formats_instance_1;
  }
  function LocalDateTime_0(value) {
    Companion_getInstance_16();
    this.j67_1 = value;
  }
  protoOf(LocalDateTime_0).k67 = function () {
    return new LocalDate_0(this.j67_1.toLocalDate());
  };
  protoOf(LocalDateTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDateTime_0) {
        tmp_0 = this.j67_1 === other.j67_1 || this.j67_1.equals(other.j67_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDateTime_0).hashCode = function () {
    return this.j67_1.hashCode();
  };
  protoOf(LocalDateTime_0).toString = function () {
    return this.j67_1.toString();
  };
  protoOf(LocalDateTime_0).l67 = function (other) {
    return this.j67_1.compareTo(other.j67_1);
  };
  protoOf(LocalDateTime_0).d = function (other) {
    return this.l67(other instanceof LocalDateTime_0 ? other : THROW_CCE());
  };
  function LocalTime_init_$Init$(hour, minute, second, nanosecond, $this) {
    second = second === VOID ? 0 : second;
    nanosecond = nanosecond === VOID ? 0 : nanosecond;
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      tmp = LocalTime.of(hour, minute, second, nanosecond);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalArgumentException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    LocalTime_0.call($this, tmp);
    return $this;
  }
  function LocalTime_init_$Create$(hour, minute, second, nanosecond) {
    return LocalTime_init_$Init$(hour, minute, second, nanosecond, objectCreate(protoOf(LocalTime_0)));
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.n66_1 = new LocalTime_0(LocalTime.MIN);
    this.o66_1 = new LocalTime_0(LocalTime.MAX);
  }
  protoOf(Companion_17).m67 = function (input, format) {
    var tmp;
    if (format === Formats_instance_2.g5r()) {
      var tmp_0;
      try {
        // Inline function 'kotlinx.datetime.jsTry' call
        // Inline function 'kotlin.let' call
        var p0 = LocalTime.parse(toString(input));
        tmp_0 = new LocalTime_0(p0);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          if (isJodaDateTimeParseException(e))
            throw DateTimeFormatException_init_$Create$_1(e);
          throw e;
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    } else {
      tmp = format.h5w(input);
    }
    return tmp;
  };
  protoOf(Companion_17).p66 = function (input, format, $super) {
    format = format === VOID ? getIsoTimeFormat() : format;
    return $super === VOID ? this.m67(input, format) : $super.m67.call(this, input, format);
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function Formats_2() {
  }
  protoOf(Formats_2).g5r = function () {
    return get_ISO_TIME();
  };
  var Formats_instance_2;
  function Formats_getInstance_2() {
    return Formats_instance_2;
  }
  function LocalTime_0(value) {
    Companion_getInstance_17();
    this.x5u_1 = value;
  }
  protoOf(LocalTime_0).y5u = function () {
    return this.x5u_1.toSecondOfDay();
  };
  protoOf(LocalTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalTime_0) {
        tmp_0 = this.x5u_1 === other.x5u_1 || this.x5u_1.equals(other.x5u_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalTime_0).hashCode = function () {
    return this.x5u_1.hashCode();
  };
  protoOf(LocalTime_0).toString = function () {
    return this.x5u_1.toString();
  };
  protoOf(LocalTime_0).n67 = function (other) {
    return this.x5u_1.compareTo(other.x5u_1);
  };
  protoOf(LocalTime_0).d = function (other) {
    return this.n67(other instanceof LocalTime_0 ? other : THROW_CCE());
  };
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_instance;
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month_0('JANUARY', 0);
    Month_FEBRUARY_instance = new Month_0('FEBRUARY', 1);
    Month_MARCH_instance = new Month_0('MARCH', 2);
    Month_APRIL_instance = new Month_0('APRIL', 3);
    Month_MAY_instance = new Month_0('MAY', 4);
    Month_JUNE_instance = new Month_0('JUNE', 5);
    Month_JULY_instance = new Month_0('JULY', 6);
    Month_AUGUST_instance = new Month_0('AUGUST', 7);
    Month_SEPTEMBER_instance = new Month_0('SEPTEMBER', 8);
    Month_OCTOBER_instance = new Month_0('OCTOBER', 9);
    Month_NOVEMBER_instance = new Month_0('NOVEMBER', 10);
    Month_DECEMBER_instance = new Month_0('DECEMBER', 11);
  }
  var $ENTRIES_0;
  function Month_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toMonth(_this__u8e3s4) {
    return Month(_this__u8e3s4.value());
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  function ofZone($this, zoneId) {
    var tmp;
    if (zoneId instanceof ZoneOffset) {
      tmp = FixedOffsetTimeZone_init_$Create$(new UtcOffset(zoneId));
    } else {
      if (zoneId.rules().isFixedOffset()) {
        var tmp_0 = zoneId.normalized();
        tmp = new FixedOffsetTimeZone(new UtcOffset(tmp_0 instanceof ZoneOffset ? tmp_0 : THROW_CCE()), zoneId);
      } else {
        tmp = new TimeZone(zoneId);
      }
    }
    return tmp;
  }
  function Companion_18() {
    Companion_instance_18 = this;
    this.w66_1 = asTimeZone(new UtcOffset(ZoneOffset.UTC));
  }
  protoOf(Companion_18).o67 = function () {
    return ofZone(this, ZoneId.systemDefault());
  };
  protoOf(Companion_18).x66 = function (zoneId) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      var tmp$ret$1 = ZoneId.of(zoneId);
      tmp = ofZone(this, tmp$ret$1);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalTimeZoneException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function TimeZone(zoneId) {
    Companion_getInstance_18();
    this.z66_1 = zoneId;
  }
  protoOf(TimeZone).a67 = function () {
    return this.z66_1.id();
  };
  protoOf(TimeZone).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeZone) {
        tmp_0 = this.z66_1 === other.z66_1 || this.z66_1.equals(other.z66_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeZone).hashCode = function () {
    return this.z66_1.hashCode();
  };
  protoOf(TimeZone).toString = function () {
    return this.z66_1.toString();
  };
  function toLocalDateTime(_this__u8e3s4, timeZone) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlin.let' call
      var p0 = LocalDateTime.ofInstant(_this__u8e3s4.b5v_1, timeZone.z66_1);
      tmp = new LocalDateTime_0(p0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function toInstant(_this__u8e3s4, timeZone) {
    // Inline function 'kotlin.let' call
    var p0 = _this__u8e3s4.j67_1.atZone(timeZone.z66_1).toInstant();
    return new Instant_0(p0);
  }
  function FixedOffsetTimeZone_init_$Init$(offset, $this) {
    FixedOffsetTimeZone.call($this, offset, offset.z5u_1);
    return $this;
  }
  function FixedOffsetTimeZone_init_$Create$(offset) {
    return FixedOffsetTimeZone_init_$Init$(offset, objectCreate(protoOf(FixedOffsetTimeZone)));
  }
  function Companion_19() {
  }
  var Companion_instance_19;
  function Companion_getInstance_19() {
    return Companion_instance_19;
  }
  function FixedOffsetTimeZone(offset, zoneId) {
    TimeZone.call(this, zoneId);
    this.q67_1 = offset;
  }
  function get_isoFormat() {
    _init_properties_UtcOffset_kt__93zod7();
    var tmp0 = isoFormat$delegate;
    // Inline function 'kotlin.getValue' call
    isoFormat$factory();
    return tmp0.z();
  }
  var isoFormat$delegate;
  function get_isoBasicFormat() {
    _init_properties_UtcOffset_kt__93zod7();
    var tmp0 = isoBasicFormat$delegate;
    // Inline function 'kotlin.getValue' call
    isoBasicFormat$factory();
    return tmp0.z();
  }
  var isoBasicFormat$delegate;
  function get_fourDigitsFormat() {
    _init_properties_UtcOffset_kt__93zod7();
    var tmp0 = fourDigitsFormat$delegate;
    // Inline function 'kotlin.getValue' call
    fourDigitsFormat$factory();
    return tmp0.z();
  }
  var fourDigitsFormat$delegate;
  function Companion_20() {
    Companion_instance_20 = this;
    this.s66_1 = new UtcOffset(ZoneOffset.UTC);
  }
  protoOf(Companion_20).r67 = function (input, format) {
    return format === Formats_instance_3.g5r() ? parseWithFormat(input, get_isoFormat()) : format === Formats_instance_3.s67() ? parseWithFormat(input, get_isoBasicFormat()) : format === Formats_instance_3.y5t() ? parseWithFormat(input, get_fourDigitsFormat()) : format.h5w(input);
  };
  protoOf(Companion_20).t66 = function (input, format, $super) {
    format = format === VOID ? getIsoUtcOffsetFormat() : format;
    return $super === VOID ? this.r67(input, format) : $super.r67.call(this, input, format);
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function Formats_3() {
  }
  protoOf(Formats_3).g5r = function () {
    return get_ISO_OFFSET();
  };
  protoOf(Formats_3).s67 = function () {
    return get_ISO_OFFSET_BASIC();
  };
  protoOf(Formats_3).y5t = function () {
    return get_FOUR_DIGIT_OFFSET();
  };
  var Formats_instance_3;
  function Formats_getInstance_3() {
    return Formats_instance_3;
  }
  function UtcOffset(zoneOffset) {
    Companion_getInstance_20();
    this.z5u_1 = zoneOffset;
  }
  protoOf(UtcOffset).a5v = function () {
    return this.z5u_1.totalSeconds();
  };
  protoOf(UtcOffset).hashCode = function () {
    return this.z5u_1.hashCode();
  };
  protoOf(UtcOffset).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffset) {
      tmp = this.z5u_1 === other.z5u_1 || this.z5u_1.equals(other.z5u_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffset).toString = function () {
    return this.z5u_1.toString();
  };
  function UtcOffset_0(hours, minutes, seconds) {
    hours = hours === VOID ? null : hours;
    minutes = minutes === VOID ? null : minutes;
    seconds = seconds === VOID ? null : seconds;
    _init_properties_UtcOffset_kt__93zod7();
    var tmp;
    try {
      var tmp_0;
      if (!(hours == null)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        var tmp_1 = ZoneOffset;
        var tmp_2 = minutes == null ? 0 : minutes;
        var tmp$ret$1 = tmp_1.ofHoursMinutesSeconds(hours, tmp_2, seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$1);
      } else if (!(minutes == null)) {
        // Inline function 'kotlinx.datetime.jsTry' call
        var tmp_3 = ZoneOffset;
        var tmp_4 = minutes / 60 | 0;
        var tmp_5 = minutes % 60 | 0;
        var tmp$ret$3 = tmp_3.ofHoursMinutesSeconds(tmp_4, tmp_5, seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$3);
      } else {
        // Inline function 'kotlinx.datetime.jsTry' call
        var tmp_6 = ZoneOffset;
        var tmp$ret$5 = tmp_6.ofTotalSeconds(seconds == null ? 0 : seconds);
        tmp_0 = new UtcOffset(tmp$ret$5);
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_7;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_8;
        if (isJodaDateTimeException(e)) {
          throw IllegalArgumentException_init_$Create$_0(e);
        } else {
          throw e;
        }
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function parseWithFormat(input, format) {
    _init_properties_UtcOffset_kt__93zod7();
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      tmp = format.parse(toString(input)).get(ChronoField.OFFSET_SECONDS);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        if (isJodaDateTimeException(e))
          throw DateTimeFormatException_init_$Create$_1(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return UtcOffset_0(VOID, VOID, tmp);
  }
  function isoFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffsetId().toFormatter(ResolverStyle.STRICT);
  }
  function isoBasicFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffset('+HHmmss', 'Z').toFormatter(ResolverStyle.STRICT);
  }
  function fourDigitsFormat$delegate$lambda() {
    _init_properties_UtcOffset_kt__93zod7();
    return (new DateTimeFormatterBuilder()).parseCaseInsensitive().appendOffset('+HHMM', '+0000').toFormatter(ResolverStyle.STRICT);
  }
  function isoFormat$factory() {
    return getPropertyCallableRef('isoFormat', 0, KProperty0, function () {
      return get_isoFormat();
    }, null);
  }
  function isoBasicFormat$factory() {
    return getPropertyCallableRef('isoBasicFormat', 0, KProperty0, function () {
      return get_isoBasicFormat();
    }, null);
  }
  function fourDigitsFormat$factory() {
    return getPropertyCallableRef('fourDigitsFormat', 0, KProperty0, function () {
      return get_fourDigitsFormat();
    }, null);
  }
  var properties_initialized_UtcOffset_kt_4gxffr;
  function _init_properties_UtcOffset_kt__93zod7() {
    if (!properties_initialized_UtcOffset_kt_4gxffr) {
      properties_initialized_UtcOffset_kt_4gxffr = true;
      isoFormat$delegate = lazy(isoFormat$delegate$lambda);
      isoBasicFormat$delegate = lazy(isoBasicFormat$delegate$lambda);
      fourDigitsFormat$delegate = lazy(fourDigitsFormat$delegate$lambda);
    }
  }
  function safeMultiply(a, b) {
    if (b.equals(new Long(-1, -1))) {
      if (a.equals(new Long(0, -2147483648))) {
        throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
      }
      return a.g3();
    } else if (b.equals(new Long(0, 0)))
      return new Long(0, 0);
    else if (b.equals(new Long(1, 0)))
      return a;
    var total = a.b3(b);
    if (!total.c3(b).equals(a)) {
      throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
    }
    return total;
  }
  function safeAdd(a, b) {
    var sum = a.z2(b);
    if (a.o3(sum).e1(new Long(0, 0)) < 0 && a.o3(b).e1(new Long(0, 0)) >= 0) {
      throw ArithmeticException_init_$Create$('Addition overflows a long: ' + a.toString() + ' + ' + b.toString());
    }
    return sum;
  }
  function safeMultiply_0(a, b) {
    // Inline function 'kotlin.Long.times' call
    var result = toLong(a).b3(toLong(b));
    if (result.e1(new Long(2147483647, 0)) > 0 || result.e1(new Long(-2147483648, -1)) < 0)
      throw ArithmeticException_init_$Create$('Multiplication overflows Int range: ' + a + ' * ' + b + '.');
    return result.j1();
  }
  function hasJsExceptionName(_this__u8e3s4, name) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == name;
  }
  //region block: post-declaration
  protoOf(Builder).l5v = appendAlternativeParsingImpl;
  protoOf(Builder).m5v = appendOptionalImpl;
  protoOf(Builder).u5t = chars;
  protoOf(Builder).w2u = build;
  protoOf(Builder).n5v = addFormatStructureForDate;
  protoOf(Builder).o5v = addFormatStructureForTime;
  protoOf(Builder).p5v = year;
  protoOf(Builder).t5t = year$default;
  protoOf(Builder).q5v = monthNumber;
  protoOf(Builder).r5v = monthNumber$default;
  protoOf(Builder).s5t = monthName;
  protoOf(Builder).p5t = dayOfMonth;
  protoOf(Builder).s5v = dayOfMonth$default;
  protoOf(Builder).x5t = dayOfWeek;
  protoOf(Builder).i5t = date;
  protoOf(Builder).t5v = hour;
  protoOf(Builder).j5t = hour$default;
  protoOf(Builder).u5v = minute;
  protoOf(Builder).k5t = minute$default;
  protoOf(Builder).v5v = second;
  protoOf(Builder).l5t = second$default;
  protoOf(Builder).m5t = secondFraction;
  protoOf(Builder).w5v = time;
  protoOf(Builder).x5v = offsetHours;
  protoOf(Builder).n5t = offsetHours$default;
  protoOf(Builder).y5v = offsetMinutesOfHour;
  protoOf(Builder).z5v = offsetMinutesOfHour$default;
  protoOf(Builder).a5w = offsetSecondsOfMinute;
  protoOf(Builder).b5w = offsetSecondsOfMinute$default;
  protoOf(Builder).o5t = offset;
  protoOf(Builder_0).l5v = appendAlternativeParsingImpl;
  protoOf(Builder_0).m5v = appendOptionalImpl;
  protoOf(Builder_0).u5t = chars;
  protoOf(Builder_0).w2u = build;
  protoOf(Builder_0).p5v = year;
  protoOf(Builder_0).t5t = year$default;
  protoOf(Builder_0).q5v = monthNumber;
  protoOf(Builder_0).r5v = monthNumber$default;
  protoOf(Builder_0).p5t = dayOfMonth;
  protoOf(Builder_0).s5v = dayOfMonth$default;
  protoOf(Builder_1).l5v = appendAlternativeParsingImpl;
  protoOf(Builder_1).m5v = appendOptionalImpl;
  protoOf(Builder_1).u5t = chars;
  protoOf(Builder_1).w2u = build;
  protoOf(Builder_1).n5v = addFormatStructureForDate;
  protoOf(Builder_1).o5v = addFormatStructureForTime;
  protoOf(Builder_1).p5v = year;
  protoOf(Builder_1).t5t = year$default;
  protoOf(Builder_1).q5v = monthNumber;
  protoOf(Builder_1).r5v = monthNumber$default;
  protoOf(Builder_1).p5t = dayOfMonth;
  protoOf(Builder_1).s5v = dayOfMonth$default;
  protoOf(Builder_1).i5t = date;
  protoOf(Builder_1).t5v = hour;
  protoOf(Builder_1).j5t = hour$default;
  protoOf(Builder_1).u5v = minute;
  protoOf(Builder_1).k5t = minute$default;
  protoOf(Builder_1).v5v = second;
  protoOf(Builder_1).l5t = second$default;
  protoOf(Builder_1).m5t = secondFraction;
  protoOf(Builder_1).w5v = time;
  protoOf(IncompleteLocalTime).j5s = set_fractionOfSecond;
  protoOf(IncompleteLocalTime).k5s = get_fractionOfSecond;
  protoOf(Builder_2).l5v = appendAlternativeParsingImpl;
  protoOf(Builder_2).m5v = appendOptionalImpl;
  protoOf(Builder_2).u5t = chars;
  protoOf(Builder_2).w2u = build;
  protoOf(Builder_2).t5v = hour;
  protoOf(Builder_2).j5t = hour$default;
  protoOf(Builder_2).u5v = minute;
  protoOf(Builder_2).k5t = minute$default;
  protoOf(Builder_2).v5v = second;
  protoOf(Builder_2).l5t = second$default;
  protoOf(Builder_2).m5t = secondFraction;
  protoOf(Builder_3).l5v = appendAlternativeParsingImpl;
  protoOf(Builder_3).m5v = appendOptionalImpl;
  protoOf(Builder_3).u5t = chars;
  protoOf(Builder_3).w2u = build;
  protoOf(Builder_3).x5v = offsetHours;
  protoOf(Builder_3).n5t = offsetHours$default;
  protoOf(Builder_3).y5v = offsetMinutesOfHour;
  protoOf(Builder_3).z5v = offsetMinutesOfHour$default;
  protoOf(Builder_3).a5w = offsetSecondsOfMinute;
  protoOf(Builder_3).b5w = offsetSecondsOfMinute$default;
  protoOf(PropertyAccessor).k61 = getterNotNull;
  //endregion
  //region block: init
  System_instance = new System();
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_4 = new Companion_4();
  Companion_instance_7 = new Companion_7();
  Companion_instance_8 = new Companion_8();
  Companion_instance_9 = new Companion_9();
  Companion_instance_11 = new Companion_11();
  Companion_instance_12 = new Companion_12();
  Truth_instance = new Truth();
  ExpectedInt_instance = new ExpectedInt();
  Companion_instance_13 = new Companion_13();
  Formats_instance_2 = new Formats_2();
  Companion_instance_19 = new Companion_19();
  Formats_instance_3 = new Formats_3();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = InstantIso8601Serializer_getInstance;
  _.$_$.b = System_instance;
  _.$_$.c = Companion_getInstance_3;
  _.$_$.d = Companion_getInstance_18;
  _.$_$.e = plus_0;
  _.$_$.f = toInstant;
  _.$_$.g = toLocalDateTime;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime.js.map
