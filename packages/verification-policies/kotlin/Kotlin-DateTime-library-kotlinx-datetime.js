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
  var Duration = $module$_js_joda_core_gcv2k.Duration;
  var LocalDate = $module$_js_joda_core_gcv2k.LocalDate;
  var LocalDateTime = $module$_js_joda_core_gcv2k.LocalDateTime;
  var LocalTime = $module$_js_joda_core_gcv2k.LocalTime;
  var ZoneOffset = $module$_js_joda_core_gcv2k.ZoneOffset;
  var ZoneId = $module$_js_joda_core_gcv2k.ZoneId;
  var ChronoField = $module$_js_joda_core_gcv2k.ChronoField;
  var DateTimeFormatterBuilder = $module$_js_joda_core_gcv2k.DateTimeFormatterBuilder;
  var ResolverStyle = $module$_js_joda_core_gcv2k.ResolverStyle;
  var protoOf = kotlin_kotlin.$_$.be;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var Long = kotlin_kotlin.$_$.cj;
  var toString = kotlin_kotlin.$_$.fe;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var toLong = kotlin_kotlin.$_$.de;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var VOID = kotlin_kotlin.$_$.j;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.d2;
  var objectCreate = kotlin_kotlin.$_$.ae;
  var captureStack = kotlin_kotlin.$_$.jc;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.f2;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.b2;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.h2;
  var IllegalArgumentException = kotlin_kotlin.$_$.aj;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.v2;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.u2;
  var RuntimeException_init_$Init$_1 = kotlin_kotlin.$_$.y2;
  var RuntimeException = kotlin_kotlin.$_$.jj;
  var getStringHashCode = kotlin_kotlin.$_$.vc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var ensureNotNull = kotlin_kotlin.$_$.ck;
  var ArithmeticException = kotlin_kotlin.$_$.pi;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var KMutableProperty1 = kotlin_kotlin.$_$.ue;
  var getPropertyCallableRef = kotlin_kotlin.$_$.uc;
  var KMutableProperty0 = kotlin_kotlin.$_$.te;
  var Enum = kotlin_kotlin.$_$.xi;
  var initMetadataForInterface = kotlin_kotlin.$_$.bd;
  var toString_0 = kotlin_kotlin.$_$.u3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var isInterface = kotlin_kotlin.$_$.md;
  var isArray = kotlin_kotlin.$_$.ed;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var hashCode = kotlin_kotlin.$_$.wc;
  var listOf = kotlin_kotlin.$_$.r9;
  var get_indices = kotlin_kotlin.$_$.d9;
  var charSequenceLength = kotlin_kotlin.$_$.nc;
  var joinToString = kotlin_kotlin.$_$.e9;
  var equals = kotlin_kotlin.$_$.rc;
  var getBooleanHashCode = kotlin_kotlin.$_$.tc;
  var KProperty0 = kotlin_kotlin.$_$.ve;
  var lazy = kotlin_kotlin.$_$.jk;
  var padStart = kotlin_kotlin.$_$.tg;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var getOrNull = kotlin_kotlin.$_$.x8;
  var listOf_0 = kotlin_kotlin.$_$.q9;
  var emptyList = kotlin_kotlin.$_$.k8;
  var toString_1 = kotlin_kotlin.$_$.pk;
  var charSequenceGet = kotlin_kotlin.$_$.mc;
  var get_lastIndex = kotlin_kotlin.$_$.ng;
  var toSet = kotlin_kotlin.$_$.fb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o7;
  var distinct = kotlin_kotlin.$_$.g8;
  var to = kotlin_kotlin.$_$.rk;
  var single = kotlin_kotlin.$_$.la;
  var Collection = kotlin_kotlin.$_$.o6;
  var charSequenceSubSequence = kotlin_kotlin.$_$.oc;
  var numberRangeToNumber = kotlin_kotlin.$_$.vd;
  var mutableListOf = kotlin_kotlin.$_$.v9;
  var removeLastOrNull = kotlin_kotlin.$_$.fa;
  var sortWith = kotlin_kotlin.$_$.na;
  var FunctionAdapter = kotlin_kotlin.$_$.fc;
  var Comparator = kotlin_kotlin.$_$.ui;
  var compareValues = kotlin_kotlin.$_$.jb;
  var Exception = kotlin_kotlin.$_$.zi;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.y1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q1;
  var joinTo = kotlin_kotlin.$_$.g9;
  var plus = kotlin_kotlin.$_$.ca;
  var toMutableList = kotlin_kotlin.$_$.bb;
  var addAll = kotlin_kotlin.$_$.f7;
  var firstOrNull = kotlin_kotlin.$_$.q8;
  var drop = kotlin_kotlin.$_$.i8;
  var repeat = kotlin_kotlin.$_$.yg;
  var sortedWith = kotlin_kotlin.$_$.oa;
  var binarySearch = kotlin_kotlin.$_$.k7;
  var startsWith = kotlin_kotlin.$_$.hh;
  var checkCountOverflow = kotlin_kotlin.$_$.m7;
  var compareTo = kotlin_kotlin.$_$.pc;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var removePrefix = kotlin_kotlin.$_$.vg;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b3;
  var Comparable = kotlin_kotlin.$_$.ti;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var numberToLong = kotlin_kotlin.$_$.zd;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.o3;
  var contains = kotlin_kotlin.$_$.qf;
  var indexOf = kotlin_kotlin.$_$.fg;
  var isCharSequence = kotlin_kotlin.$_$.id;
  var removeRange = kotlin_kotlin.$_$.wg;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var getKClass = kotlin_kotlin.$_$.g;
  var arrayOf = kotlin_kotlin.$_$.yj;
  var createKType = kotlin_kotlin.$_$.d;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b3;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.r;
  var lazy_0 = kotlin_kotlin.$_$.ik;
  var MissingFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.a6;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var KProperty1 = kotlin_kotlin.$_$.we;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var enumEntries = kotlin_kotlin.$_$.dc;
  var _Duration___get_inWholeSeconds__impl__hpy7b3 = kotlin_kotlin.$_$.d3;
  var _Duration___get_nanosecondsComponent__impl__nh19kq = kotlin_kotlin.$_$.g3;
  var Duration__isPositive_impl_tvkkt2 = kotlin_kotlin.$_$.f3;
  var numberToInt = kotlin_kotlin.$_$.yd;
  var Duration__unaryMinus_impl_x2k1y0 = kotlin_kotlin.$_$.k3;
  var Companion_getInstance = kotlin_kotlin.$_$.b6;
  var DurationUnit_SECONDS_getInstance = kotlin_kotlin.$_$.p;
  var toDuration = kotlin_kotlin.$_$.mi;
  var DurationUnit_NANOSECONDS_getInstance = kotlin_kotlin.$_$.o;
  var Duration__plus_impl_yu9v8f = kotlin_kotlin.$_$.h3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.kk;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.c2;
  var numberToDouble = kotlin_kotlin.$_$.xd;
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
    this.o5x(value == null ? null : value.v63(9));
  }
  function get_fractionOfSecond() {
    var tmp0_safe_receiver = this.p5x();
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
      var this_0 = this.h60();
      item(this_0);
      var tmp$ret$2 = this_0.c60().x2x();
      destination.n(tmp$ret$2);
    }
    var others = destination;
    // Inline function 'kotlin.also' call
    var this_1 = this.h60();
    mainFormat(this_1);
    var main = this_1.c60().x2x();
    this.c60().f60(new AlternativesParsingFormatStructure(main, others));
  }
  function appendOptionalImpl(onZero, format) {
    var tmp = this.c60();
    // Inline function 'kotlin.also' call
    var this_0 = this.h60();
    format(this_0);
    tmp.f60(new OptionalFormatStructure(onZero, this_0.c60().x2x()));
  }
  function chars(value) {
    return this.c60().f60(new ConstantFormatStructure(value));
  }
  function build() {
    return new CachedFormatStructure(this.c60().x2x().l61_1);
  }
  initMetadataForInterface(AbstractDateTimeFormatBuilder, 'AbstractDateTimeFormatBuilder');
  function year$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.m60(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.m60.call(this, padding);
    }
    return tmp;
  }
  function monthNumber$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.n60(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.n60.call(this, padding);
    }
    return tmp;
  }
  function dayOfMonth$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.m5y(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.m5y.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithDate, 'WithDate');
  function year(padding) {
    return this.k60(new BasicFormatStructure(new YearDirective(padding)));
  }
  function monthNumber(padding) {
    return this.k60(new BasicFormatStructure(new MonthDirective(padding)));
  }
  function monthName(names) {
    return this.k60(new BasicFormatStructure(new MonthNameDirective(names)));
  }
  function dayOfMonth(padding) {
    return this.k60(new BasicFormatStructure(new DayDirective(padding)));
  }
  function dayOfWeek(names) {
    return this.k60(new BasicFormatStructure(new DayOfWeekDirective(names)));
  }
  function date(format) {
    var tmp;
    if (format instanceof LocalDateFormat) {
      this.k60(format.s61_1);
      tmp = Unit_instance;
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithDateBuilder, 'AbstractWithDateBuilder', VOID, VOID, [WithDate]);
  function hour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.q60(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.q60.call(this, padding);
    }
    return tmp;
  }
  function minute$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.r60(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.r60.call(this, padding);
    }
    return tmp;
  }
  function second$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.s60(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.s60.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithTime, 'WithTime');
  function hour(padding) {
    return this.l60(new BasicFormatStructure(new HourDirective(padding)));
  }
  function minute(padding) {
    return this.l60(new BasicFormatStructure(new MinuteDirective(padding)));
  }
  function second(padding) {
    return this.l60(new BasicFormatStructure(new SecondDirective(padding)));
  }
  function secondFraction(minLength, maxLength) {
    return this.l60(new BasicFormatStructure(new FractionalSecondDirective(minLength, maxLength)));
  }
  function time(format) {
    var tmp;
    if (format instanceof LocalTimeFormat) {
      this.l60(format.y63_1);
      tmp = Unit_instance;
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithTimeBuilder, 'AbstractWithTimeBuilder', VOID, VOID, [WithTime]);
  function addFormatStructureForDate(structure) {
    this.d60(structure);
  }
  function addFormatStructureForTime(structure) {
    this.d60(structure);
  }
  initMetadataForInterface(AbstractWithDateTimeBuilder, 'AbstractWithDateTimeBuilder', VOID, VOID, [AbstractWithDateBuilder, AbstractWithTimeBuilder, WithDate, WithTime]);
  function offsetHours$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.u60(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.u60.call(this, padding);
    }
    return tmp;
  }
  function offsetMinutesOfHour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.v60(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.v60.call(this, padding);
    }
    return tmp;
  }
  function offsetSecondsOfMinute$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.x60(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.x60.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithUtcOffset, 'WithUtcOffset');
  function offsetHours(padding) {
    return this.g60(new SignedFormatStructure(new BasicFormatStructure(new UtcOffsetWholeHoursDirective(padding)), true));
  }
  function offsetMinutesOfHour(padding) {
    return this.g60(new BasicFormatStructure(new UtcOffsetMinuteOfHourDirective(padding)));
  }
  function offsetSecondsOfMinute(padding) {
    return this.g60(new BasicFormatStructure(new UtcOffsetSecondOfMinuteDirective(padding)));
  }
  function offset(format) {
    var tmp;
    if (format instanceof UtcOffsetFormat) {
      this.g60(format.s65_1);
      tmp = Unit_instance;
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithOffsetBuilder, 'AbstractWithOffsetBuilder', VOID, VOID, [WithUtcOffset]);
  initMetadataForClass(Builder, 'Builder', VOID, VOID, [AbstractDateTimeFormatBuilder, AbstractWithDateTimeBuilder, AbstractWithOffsetBuilder, WithUtcOffset, WithTime, WithDate]);
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
    var tmp0_elvis_lhs = this.b67(container);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Field ' + this.u2() + ' is not set');
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
  protoOf(System).d5v = function () {
    return Companion_getInstance_15().d5v();
  };
  var System_instance;
  function System_getInstance() {
    return System_instance;
  }
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function TimeBased(nanoseconds) {
    DateTimeUnit.call(this);
    this.i5v_1 = nanoseconds;
    // Inline function 'kotlin.require' call
    if (!(this.i5v_1.g1(new Long(0, 0)) > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.i5v_1.toString() + ' ns.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.i5v_1.f3(new Long(817405952, 838)).equals(new Long(0, 0))) {
      this.j5v_1 = 'HOUR';
      this.k5v_1 = this.i5v_1.e3(new Long(817405952, 838));
    } else {
      if (this.i5v_1.f3(new Long(-129542144, 13)).equals(new Long(0, 0))) {
        this.j5v_1 = 'MINUTE';
        this.k5v_1 = this.i5v_1.e3(new Long(-129542144, 13));
      } else {
        var tmp1 = this.i5v_1;
        // Inline function 'kotlin.Long.rem' call
        var other = 1000000000;
        if (tmp1.f3(toLong(other)).equals(new Long(0, 0))) {
          this.j5v_1 = 'SECOND';
          var tmp = this;
          var tmp3 = this.i5v_1;
          // Inline function 'kotlin.Long.div' call
          var other_0 = 1000000000;
          tmp.k5v_1 = tmp3.e3(toLong(other_0));
        } else {
          // Inline function 'kotlin.Long.rem' call
          if (this.i5v_1.f3(toLong(1000000)).equals(new Long(0, 0))) {
            this.j5v_1 = 'MILLISECOND';
            var tmp_0 = this;
            // Inline function 'kotlin.Long.div' call
            tmp_0.k5v_1 = this.i5v_1.e3(toLong(1000000));
          } else {
            // Inline function 'kotlin.Long.rem' call
            if (this.i5v_1.f3(toLong(1000)).equals(new Long(0, 0))) {
              this.j5v_1 = 'MICROSECOND';
              var tmp_1 = this;
              // Inline function 'kotlin.Long.div' call
              tmp_1.k5v_1 = this.i5v_1.e3(toLong(1000));
            } else {
              this.j5v_1 = 'NANOSECOND';
              this.k5v_1 = this.i5v_1;
            }
          }
        }
      }
    }
  }
  protoOf(TimeBased).l5v = function (scalar) {
    return new TimeBased(safeMultiply(this.i5v_1, toLong(scalar)));
  };
  protoOf(TimeBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeBased) {
        tmp_0 = this.i5v_1.equals(other.i5v_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeBased).hashCode = function () {
    return this.i5v_1.l1() ^ this.i5v_1.m3(32).l1();
  };
  protoOf(TimeBased).toString = function () {
    return this.m5v(this.k5v_1, this.j5v_1);
  };
  function DateBased() {
    DateTimeUnit.call(this);
  }
  function DayBased(days) {
    DateBased.call(this);
    this.o5v_1 = days;
    // Inline function 'kotlin.require' call
    if (!(this.o5v_1 > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.o5v_1 + ' days.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DayBased).l5v = function (scalar) {
    return new DayBased(safeMultiply_0(this.o5v_1, scalar));
  };
  protoOf(DayBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof DayBased) {
        tmp_0 = this.o5v_1 === other.o5v_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(DayBased).hashCode = function () {
    return this.o5v_1 ^ 65536;
  };
  protoOf(DayBased).toString = function () {
    return (this.o5v_1 % 7 | 0) === 0 ? this.n5v(this.o5v_1 / 7 | 0, 'WEEK') : this.n5v(this.o5v_1, 'DAY');
  };
  function MonthBased(months) {
    DateBased.call(this);
    this.p5v_1 = months;
    // Inline function 'kotlin.require' call
    if (!(this.p5v_1 > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.p5v_1 + ' months.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(MonthBased).l5v = function (scalar) {
    return new MonthBased(safeMultiply_0(this.p5v_1, scalar));
  };
  protoOf(MonthBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof MonthBased) {
        tmp_0 = this.p5v_1 === other.p5v_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(MonthBased).hashCode = function () {
    return this.p5v_1 ^ 131072;
  };
  protoOf(MonthBased).toString = function () {
    return (this.p5v_1 % 1200 | 0) === 0 ? this.n5v(this.p5v_1 / 1200 | 0, 'CENTURY') : (this.p5v_1 % 12 | 0) === 0 ? this.n5v(this.p5v_1 / 12 | 0, 'YEAR') : (this.p5v_1 % 3 | 0) === 0 ? this.n5v(this.p5v_1 / 3 | 0, 'QUARTER') : this.n5v(this.p5v_1, 'MONTH');
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.q5v_1 = new TimeBased(new Long(1, 0));
    this.r5v_1 = this.q5v_1.l5v(1000);
    this.s5v_1 = this.r5v_1.l5v(1000);
    this.t5v_1 = this.s5v_1.l5v(1000);
    this.u5v_1 = this.t5v_1.l5v(60);
    this.v5v_1 = this.u5v_1.l5v(60);
    this.w5v_1 = new DayBased(1);
    this.x5v_1 = this.w5v_1.l5v(7);
    this.y5v_1 = new MonthBased(1);
    this.z5v_1 = this.y5v_1.l5v(3);
    this.a5w_1 = this.y5v_1.l5v(12);
    this.b5w_1 = this.a5w_1.l5v(100);
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function DateTimeUnit() {
    Companion_getInstance_4();
  }
  protoOf(DateTimeUnit).n5v = function (value, unit) {
    return value === 1 ? unit : '' + value + '-' + unit;
  };
  protoOf(DateTimeUnit).m5v = function (value, unit) {
    return value.equals(new Long(1, 0)) ? unit : value.toString() + '-' + unit;
  };
  function get_isoDayNumber(_this__u8e3s4) {
    return _this__u8e3s4.t2_1 + 1 | 0;
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
    return Formats_getInstance_0().d5w();
  }
  function getIsoDateTimeFormat() {
    return Formats_getInstance_1().e5w_1;
  }
  function getIsoTimeFormat() {
    return Formats_instance_2.d5w();
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
    return Formats_instance_3.d5w();
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
    this.f5w_1 = date;
    this.g5w_1 = time;
    this.h5w_1 = offset;
    this.i5w_1 = timeZoneId;
  }
  protoOf(DateTimeComponentsContents).j5w = function (_set____db54di) {
    this.f5w_1.m5w_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).p5w = function () {
    return this.f5w_1.m5w_1;
  };
  protoOf(DateTimeComponentsContents).q5w = function (_set____db54di) {
    this.f5w_1.o5w_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).r5w = function () {
    return this.f5w_1.o5w_1;
  };
  protoOf(DateTimeComponentsContents).s5w = function (_set____db54di) {
    this.f5w_1.n5w_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).t5w = function () {
    return this.f5w_1.n5w_1;
  };
  protoOf(DateTimeComponentsContents).u5w = function (_set____db54di) {
    this.f5w_1.l5w_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).v5w = function () {
    return this.f5w_1.l5w_1;
  };
  protoOf(DateTimeComponentsContents).w5w = function (_set____db54di) {
    this.f5w_1.k5w_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).x5w = function () {
    return this.f5w_1.k5w_1;
  };
  protoOf(DateTimeComponentsContents).y5w = function (_set____db54di) {
    this.g5w_1.b5x_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).f5x = function () {
    return this.g5w_1.b5x_1;
  };
  protoOf(DateTimeComponentsContents).g5x = function (value) {
    this.g5w_1.g5x(value);
  };
  protoOf(DateTimeComponentsContents).h5x = function () {
    return this.g5w_1.h5x();
  };
  protoOf(DateTimeComponentsContents).i5x = function (_set____db54di) {
    this.g5w_1.z5w_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).j5x = function () {
    return this.g5w_1.z5w_1;
  };
  protoOf(DateTimeComponentsContents).k5x = function (_set____db54di) {
    this.g5w_1.a5x_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).l5x = function () {
    return this.g5w_1.a5x_1;
  };
  protoOf(DateTimeComponentsContents).m5x = function (_set____db54di) {
    this.g5w_1.c5x_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).n5x = function () {
    return this.g5w_1.c5x_1;
  };
  protoOf(DateTimeComponentsContents).o5x = function (_set____db54di) {
    this.g5w_1.e5x_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).p5x = function () {
    return this.g5w_1.e5x_1;
  };
  protoOf(DateTimeComponentsContents).q5x = function (_set____db54di) {
    this.g5w_1.d5x_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).r5x = function () {
    return this.g5w_1.d5x_1;
  };
  protoOf(DateTimeComponentsContents).s5x = function (_set____db54di) {
    this.h5w_1.t5x_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).x5x = function () {
    return this.h5w_1.t5x_1;
  };
  protoOf(DateTimeComponentsContents).y5x = function (_set____db54di) {
    this.h5w_1.v5x_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).z5x = function () {
    return this.h5w_1.v5x_1;
  };
  protoOf(DateTimeComponentsContents).a5y = function (_set____db54di) {
    this.h5w_1.w5x_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).b5y = function () {
    return this.h5w_1.w5x_1;
  };
  protoOf(DateTimeComponentsContents).c5y = function (_set____db54di) {
    this.h5w_1.u5x_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).d5y = function () {
    return this.h5w_1.u5x_1;
  };
  protoOf(DateTimeComponentsContents).e5y = function () {
    return new DateTimeComponentsContents(this.f5w_1.e5y(), this.g5w_1.e5y(), this.h5w_1.e5y(), this.i5w_1);
  };
  protoOf(DateTimeComponentsContents).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof DateTimeComponentsContents) {
      tmp_2 = other.f5w_1.equals(this.f5w_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.g5w_1.equals(this.g5w_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.h5w_1.equals(this.h5w_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.i5w_1 == this.i5w_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DateTimeComponentsContents).hashCode = function () {
    var tmp = this.f5w_1.hashCode() ^ this.g5w_1.hashCode() ^ this.h5w_1.hashCode();
    var tmp0_safe_receiver = this.i5w_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
  };
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda($this$Format) {
    $this$Format.f5y(get_ISO_DATE());
    var tmp = [DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda];
    alternativeParsing($this$Format, tmp, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_0);
    $this$Format.g5y();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.h5y();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.i5y();
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
    $this$optional.j5y(1, 9);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_2($this$alternativeParsing) {
    $this$alternativeParsing.k5y();
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_3($this$alternativeParsing) {
    $this$alternativeParsing.l5y(Formats_instance_3.d5w());
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda($this$Format) {
    var tmp = [DateTimeComponents$Formats$RFC_1123$lambda$lambda];
    alternativeParsing($this$Format, tmp, DateTimeComponents$Formats$RFC_1123$lambda$lambda_0);
    $this$Format.m5y(Padding_NONE_getInstance());
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.p5y(Companion_getInstance_6().o5y_1);
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.q5y();
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.g5y();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.h5y();
    optional($this$Format, VOID, DateTimeComponents$Formats$RFC_1123$lambda$lambda_1);
    $this$Format.r5y(' ');
    var tmp_0 = DateTimeComponents$Formats$RFC_1123$lambda$lambda_2;
    var tmp_1 = [tmp_0, DateTimeComponents$Formats$RFC_1123$lambda$lambda_3];
    alternativeParsing($this$Format, tmp_1, DateTimeComponents$Formats$RFC_1123$lambda$lambda_4);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda($this$alternativeParsing) {
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_0($this$alternativeParsing) {
    $this$alternativeParsing.u5y(Companion_getInstance_7().t5y_1);
    $this$alternativeParsing.r5y(', ');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_1($this$optional) {
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.i5y();
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_2($this$alternativeParsing) {
    $this$alternativeParsing.r5y('UT');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_3($this$alternativeParsing) {
    $this$alternativeParsing.r5y('Z');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_4($this$alternativeParsing) {
    optional($this$alternativeParsing, 'GMT', DateTimeComponents$Formats$RFC_1123$lambda$lambda$lambda);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda$lambda($this$optional) {
    $this$optional.l5y(Formats_instance_3.v5y());
    return Unit_instance;
  }
  function Companion_4() {
  }
  protoOf(Companion_4).w5y = function (block) {
    var builder = new Builder(new AppendableFormatStructure());
    block(builder);
    return new DateTimeComponentsFormat(builder.x2x());
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function Formats() {
    Formats_instance = this;
    var tmp = this;
    var tmp_0 = Companion_instance_4;
    tmp.x5y_1 = tmp_0.w5y(DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda);
    var tmp_1 = this;
    var tmp_2 = Companion_instance_4;
    tmp_1.y5y_1 = tmp_2.w5y(DateTimeComponents$Formats$RFC_1123$lambda);
  }
  var Formats_instance;
  function Formats_getInstance() {
    if (Formats_instance == null)
      new Formats();
    return Formats_instance;
  }
  function DateTimeComponents(contents) {
    contents = contents === VOID ? new DateTimeComponentsContents() : contents;
    this.z5y_1 = contents;
    this.a5z_1 = year$factory(this.z5y_1.f5w_1);
    this.b5z_1 = new TwoDigitNumber(monthNumber$factory(this.z5y_1.f5w_1));
    this.c5z_1 = new TwoDigitNumber(dayOfMonth$factory(this.z5y_1.f5w_1));
    this.d5z_1 = new ThreeDigitNumber(dayOfYear$factory(this.z5y_1.f5w_1));
    this.e5z_1 = new TwoDigitNumber(hour$factory(this.z5y_1.g5w_1));
    this.f5z_1 = new TwoDigitNumber(hourOfAmPm$factory(this.z5y_1.g5w_1));
    this.g5z_1 = amPm$factory(this.z5y_1.g5w_1);
    this.h5z_1 = new TwoDigitNumber(minute$factory(this.z5y_1.g5w_1));
    this.i5z_1 = new TwoDigitNumber(second$factory(this.z5y_1.g5w_1));
    this.j5z_1 = isNegative$factory(this.z5y_1.h5w_1);
    this.k5z_1 = new TwoDigitNumber(totalHoursAbs$factory(this.z5y_1.h5w_1));
    this.l5z_1 = new TwoDigitNumber(minutesOfHour$factory(this.z5y_1.h5w_1));
    this.m5z_1 = new TwoDigitNumber(secondsOfMinute$factory(this.z5y_1.h5w_1));
    this.n5z_1 = timeZoneId$factory_0(this.z5y_1);
  }
  protoOf(DateTimeComponents).w5w = function (_set____db54di) {
    var tmp0 = this.a5z_1;
    // Inline function 'kotlin.setValue' call
    year$factory_0();
    tmp0.set(_set____db54di);
    return Unit_instance;
  };
  protoOf(DateTimeComponents).x5w = function () {
    var tmp0 = this.a5z_1;
    // Inline function 'kotlin.getValue' call
    year$factory_1();
    return tmp0.get();
  };
  protoOf(DateTimeComponents).p5x = function () {
    return this.z5y_1.g5w_1.e5x_1;
  };
  protoOf(DateTimeComponents).o5z = function () {
    return this.z5y_1.h5w_1.o5z();
  };
  protoOf(DateTimeComponents).p5z = function () {
    return this.z5y_1.g5w_1.p5z();
  };
  protoOf(DateTimeComponents).q5z = function () {
    var offset = this.o5z();
    var time = this.p5z();
    var truncatedDate = this.z5y_1.f5w_1.e5y();
    truncatedDate.k5w_1 = requireParsedField(truncatedDate.k5w_1, 'year') % 10000 | 0;
    var tmp;
    try {
      var secDelta = safeMultiply(toLong(ensureNotNull(this.x5w()) / 10000 | 0), new Long(2036907392, 73));
      var epochDays = toLong(truncatedDate.r5z().t5z());
      // Inline function 'kotlin.Long.times' call
      var tmp2 = epochDays.d3(toLong(86400));
      // Inline function 'kotlin.Long.plus' call
      var other = time.v5z();
      var tmp4 = tmp2.b3(toLong(other));
      // Inline function 'kotlin.Long.minus' call
      var other_0 = offset.x5z();
      var tmp$ret$2 = tmp4.c3(toLong(other_0));
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
    if (totalSeconds.g1(Companion_getInstance_15().g5v_1.z5z()) < 0 || totalSeconds.g1(Companion_getInstance_15().h5v_1.z5z()) > 0)
      throw DateTimeFormatException_init_$Create$_0('The parsed date is outside the range representable by Instant');
    var tmp_1 = Companion_getInstance_15();
    var tmp0_elvis_lhs = this.p5x();
    return tmp_1.a60(totalSeconds, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs);
  };
  function Builder(actualBuilder) {
    this.b60_1 = actualBuilder;
  }
  protoOf(Builder).c60 = function () {
    return this.b60_1;
  };
  protoOf(Builder).d60 = function (structure) {
    this.b60_1.f60(structure);
  };
  protoOf(Builder).g60 = function (structure) {
    this.b60_1.f60(structure);
  };
  protoOf(Builder).h60 = function () {
    return new Builder(new AppendableFormatStructure());
  };
  function DateTimeComponentsFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.z60_1 = actualFormat;
  }
  protoOf(DateTimeComponentsFormat).a61 = function () {
    return this.z60_1;
  };
  protoOf(DateTimeComponentsFormat).b61 = function (intermediate) {
    return new DateTimeComponents(intermediate);
  };
  protoOf(DateTimeComponentsFormat).c61 = function (intermediate) {
    return this.b61(intermediate instanceof DateTimeComponentsContents ? intermediate : THROW_CCE());
  };
  protoOf(DateTimeComponentsFormat).d61 = function () {
    return get_emptyDateTimeComponentsContents();
  };
  function TwoDigitNumber(reference) {
    this.f61_1 = reference;
  }
  function ThreeDigitNumber(reference) {
    this.g61_1 = reference;
  }
  function timeZoneId$factory() {
    return getPropertyCallableRef('timeZoneId', 1, KMutableProperty1, function (receiver) {
      return receiver.i5w_1;
    }, function (receiver, value) {
      receiver.i5w_1 = value;
      return Unit_instance;
    });
  }
  function year$factory($b0) {
    return getPropertyCallableRef('year', 0, KMutableProperty0, function () {
      return $b0.k5w_1;
    }, function (value) {
      $b0.k5w_1 = value;
      return Unit_instance;
    });
  }
  function monthNumber$factory($b0) {
    return getPropertyCallableRef('monthNumber', 0, KMutableProperty0, function () {
      return $b0.l5w_1;
    }, function (value) {
      $b0.l5w_1 = value;
      return Unit_instance;
    });
  }
  function dayOfMonth$factory($b0) {
    return getPropertyCallableRef('dayOfMonth', 0, KMutableProperty0, function () {
      return $b0.m5w_1;
    }, function (value) {
      $b0.m5w_1 = value;
      return Unit_instance;
    });
  }
  function dayOfYear$factory($b0) {
    return getPropertyCallableRef('dayOfYear', 0, KMutableProperty0, function () {
      return $b0.o5w_1;
    }, function (value) {
      $b0.o5w_1 = value;
      return Unit_instance;
    });
  }
  function hour$factory($b0) {
    return getPropertyCallableRef('hour', 0, KMutableProperty0, function () {
      return $b0.z5w_1;
    }, function (value) {
      $b0.z5w_1 = value;
      return Unit_instance;
    });
  }
  function hourOfAmPm$factory($b0) {
    return getPropertyCallableRef('hourOfAmPm', 0, KMutableProperty0, function () {
      return $b0.a5x_1;
    }, function (value) {
      $b0.a5x_1 = value;
      return Unit_instance;
    });
  }
  function amPm$factory($b0) {
    return getPropertyCallableRef('amPm', 0, KMutableProperty0, function () {
      return $b0.b5x_1;
    }, function (value) {
      $b0.b5x_1 = value;
      return Unit_instance;
    });
  }
  function minute$factory($b0) {
    return getPropertyCallableRef('minute', 0, KMutableProperty0, function () {
      return $b0.c5x_1;
    }, function (value) {
      $b0.c5x_1 = value;
      return Unit_instance;
    });
  }
  function second$factory($b0) {
    return getPropertyCallableRef('second', 0, KMutableProperty0, function () {
      return $b0.d5x_1;
    }, function (value) {
      $b0.d5x_1 = value;
      return Unit_instance;
    });
  }
  function isNegative$factory($b0) {
    return getPropertyCallableRef('isNegative', 0, KMutableProperty0, function () {
      return $b0.t5x_1;
    }, function (value) {
      $b0.t5x_1 = value;
      return Unit_instance;
    });
  }
  function totalHoursAbs$factory($b0) {
    return getPropertyCallableRef('totalHoursAbs', 0, KMutableProperty0, function () {
      return $b0.u5x_1;
    }, function (value) {
      $b0.u5x_1 = value;
      return Unit_instance;
    });
  }
  function minutesOfHour$factory($b0) {
    return getPropertyCallableRef('minutesOfHour', 0, KMutableProperty0, function () {
      return $b0.v5x_1;
    }, function (value) {
      $b0.v5x_1 = value;
      return Unit_instance;
    });
  }
  function secondsOfMinute$factory($b0) {
    return getPropertyCallableRef('secondsOfMinute', 0, KMutableProperty0, function () {
      return $b0.w5x_1;
    }, function (value) {
      $b0.w5x_1 = value;
      return Unit_instance;
    });
  }
  function timeZoneId$factory_0($b0) {
    return getPropertyCallableRef('timeZoneId', 0, KMutableProperty0, function () {
      return $b0.i5w_1;
    }, function (value) {
      $b0.i5w_1 = value;
      return Unit_instance;
    });
  }
  function year$factory_0() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.x5w();
    }, function (receiver, value) {
      return receiver.w5w(value);
    });
  }
  function year$factory_1() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.x5w();
    }, function (receiver, value) {
      return receiver.w5w(value);
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
  protoOf(AbstractDateTimeFormat).e61 = function (input) {
    var tmp;
    try {
      tmp = Parser__match$default_impl_x2xlti(_Parser___init__impl__gdyfby(this.a61().k61()), input, this.d61());
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
      return this.c61(matched);
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
    return _this__u8e3s4.r5y(toString_0(value));
  }
  function optional(_this__u8e3s4, ifZero, format) {
    ifZero = ifZero === VOID ? '' : ifZero;
    var tmp;
    if (isInterface(_this__u8e3s4, AbstractDateTimeFormatBuilder)) {
      _this__u8e3s4.j60(ifZero, typeof format === 'function' ? format : THROW_CCE());
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
      _this__u8e3s4.i60(tmp_0, typeof primaryFormat === 'function' ? primaryFormat : THROW_CCE());
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
    return tmp0.b1();
  }
  var ISO_DATE$delegate;
  function get_ISO_DATE_BASIC() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp0 = ISO_DATE_BASIC$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_DATE_BASIC$factory();
    return tmp0.b1();
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
    this.k5w_1 = year;
    this.l5w_1 = monthNumber;
    this.m5w_1 = dayOfMonth;
    this.n5w_1 = isoDayOfWeek;
    this.o5w_1 = dayOfYear;
  }
  protoOf(IncompleteLocalDate).w5w = function (_set____db54di) {
    this.k5w_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).x5w = function () {
    return this.k5w_1;
  };
  protoOf(IncompleteLocalDate).u5w = function (_set____db54di) {
    this.l5w_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).v5w = function () {
    return this.l5w_1;
  };
  protoOf(IncompleteLocalDate).j5w = function (_set____db54di) {
    this.m5w_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).p5w = function () {
    return this.m5w_1;
  };
  protoOf(IncompleteLocalDate).s5w = function (_set____db54di) {
    this.n5w_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).t5w = function () {
    return this.n5w_1;
  };
  protoOf(IncompleteLocalDate).q5w = function (_set____db54di) {
    this.o5w_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).r5w = function () {
    return this.o5w_1;
  };
  protoOf(IncompleteLocalDate).r5z = function () {
    var year = requireParsedField(this.k5w_1, 'year');
    var dayOfYear = this.o5w_1;
    var tmp;
    if (dayOfYear == null) {
      tmp = LocalDate_init_$Create$(year, requireParsedField(this.l5w_1, 'monthNumber'), requireParsedField(this.m5w_1, 'dayOfMonth'));
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = plus_2(LocalDate_init_$Create$(year, 1, 1), dayOfYear - 1 | 0, Companion_getInstance_4().w5v_1);
      if (!(this_0.x5w() === year)) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of year is ' + dayOfYear + ', which is not a valid day of year for the year ' + year));
      }
      if (!(this.l5w_1 == null) && !(this_0.v5w() === this.l5w_1)) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of year is ' + dayOfYear + ', which is ' + this_0.m61().toString() + ', ') + ('but ' + this.l5w_1 + ' was specified as the month number'));
      }
      if (!(this.m5w_1 == null) && !(this_0.p5w() === this.m5w_1)) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of year is ' + dayOfYear + ', which is the day ' + this_0.p5w() + ' of ' + this_0.m61().toString() + ', ') + ('but ' + this.m5w_1 + ' was specified as the day of month'));
      }
      tmp = this_0;
    }
    var date = tmp;
    var tmp0_safe_receiver = this.n5w_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!(tmp0_safe_receiver === get_isoDayNumber(date.n61()))) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of week is ' + DayOfWeek(tmp0_safe_receiver).toString() + ' but the date is ' + date.toString() + ', which is a ' + date.n61().toString()));
      }
    }
    return date;
  };
  protoOf(IncompleteLocalDate).e5y = function () {
    return new IncompleteLocalDate(this.k5w_1, this.l5w_1, this.m5w_1, this.n5w_1, this.o5w_1);
  };
  protoOf(IncompleteLocalDate).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    if (other instanceof IncompleteLocalDate) {
      tmp_3 = this.k5w_1 == other.k5w_1;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = this.l5w_1 == other.l5w_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.m5w_1 == other.m5w_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.n5w_1 == other.n5w_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.o5w_1 == other.o5w_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalDate).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.k5w_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 923521);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.l5w_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    var tmp_0 = tmp + imul(tmp$ret$1, 29791) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.m5w_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp$ret$2 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    var tmp_1 = tmp_0 + imul(tmp$ret$2, 961) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.n5w_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    var tmp$ret$3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    var tmp_2 = tmp_1 + imul(tmp$ret$3, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_3 = this.o5w_1;
    var tmp1_elvis_lhs_3 = tmp0_safe_receiver_3 == null ? null : hashCode(tmp0_safe_receiver_3);
    return tmp_2 + (tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3) | 0;
  };
  protoOf(IncompleteLocalDate).toString = function () {
    var tmp0_elvis_lhs = this.k5w_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.l5w_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.m5w_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.n5w_1;
    return tmp + '-' + tmp_0 + '-' + tmp_1 + ' (day of week is ' + toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs) + ')';
  };
  function Companion_5() {
    Companion_instance_5 = this;
    this.n5y_1 = new MonthNames(listOf(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']));
    this.o5y_1 = new MonthNames(listOf(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']));
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
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
    Companion_getInstance_6();
    this.o61_1 = names;
    // Inline function 'kotlin.require' call
    if (!(this.o61_1.s() === 12)) {
      var message = 'Month names must contain exactly 12 elements';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var progression = get_indices(this.o61_1);
    var inductionVariable = progression.h1_1;
    var last = progression.i1_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ix = element;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = this.o61_1.u(ix);
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
            if (!!(this.o61_1.u(ix) === this.o61_1.u(ix2))) {
              var message_1 = "Month names must be unique, but '" + this.o61_1.u(ix) + "' was repeated";
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
          }
           while (inductionVariable_0 < ix);
      }
       while (!(element === last));
  }
  protoOf(MonthNames).toString = function () {
    return joinToString(this.o61_1, ', ', 'MonthNames(', ')', VOID, VOID, String$toString$ref());
  };
  protoOf(MonthNames).equals = function (other) {
    var tmp;
    if (other instanceof MonthNames) {
      tmp = equals(this.o61_1, other.o61_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthNames).hashCode = function () {
    return hashCode(this.o61_1);
  };
  function Companion_6() {
    Companion_instance_6 = this;
    this.s5y_1 = new DayOfWeekNames(listOf(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']));
    this.t5y_1 = new DayOfWeekNames(listOf(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']));
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
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
    Companion_getInstance_7();
    this.p61_1 = names;
    // Inline function 'kotlin.require' call
    if (!(this.p61_1.s() === 7)) {
      var message = 'Day of week names must contain exactly 7 elements';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var progression = get_indices(this.p61_1);
    var inductionVariable = progression.h1_1;
    var last = progression.i1_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ix = element;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = this.p61_1.u(ix);
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
            if (!!(this.p61_1.u(ix) === this.p61_1.u(ix2))) {
              var message_1 = "Day-of-week names must be unique, but '" + this.p61_1.u(ix) + "' was repeated";
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
          }
           while (inductionVariable_0 < ix);
      }
       while (!(element === last));
  }
  protoOf(DayOfWeekNames).toString = function () {
    return joinToString(this.p61_1, ', ', 'DayOfWeekNames(', ')', VOID, VOID, String$toString$ref_0());
  };
  protoOf(DayOfWeekNames).equals = function (other) {
    var tmp;
    if (other instanceof DayOfWeekNames) {
      tmp = equals(this.p61_1, other.p61_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayOfWeekNames).hashCode = function () {
    return hashCode(this.p61_1);
  };
  function Companion_7() {
  }
  protoOf(Companion_7).q61 = function (block) {
    var builder = new Builder_0(new AppendableFormatStructure());
    block(builder);
    return new LocalDateFormat(builder.x2x());
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function Builder_0(actualBuilder) {
    this.r61_1 = actualBuilder;
  }
  protoOf(Builder_0).c60 = function () {
    return this.r61_1;
  };
  protoOf(Builder_0).k60 = function (structure) {
    return this.r61_1.f60(structure);
  };
  protoOf(Builder_0).h60 = function () {
    return new Builder_0(new AppendableFormatStructure());
  };
  function LocalDateFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.s61_1 = actualFormat;
  }
  protoOf(LocalDateFormat).a61 = function () {
    return this.s61_1;
  };
  protoOf(LocalDateFormat).t61 = function (intermediate) {
    return intermediate.r5z();
  };
  protoOf(LocalDateFormat).c61 = function (intermediate) {
    return this.t61(intermediate instanceof IncompleteLocalDate ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateFormat).d61 = function () {
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
    var tmp = DateFields_getInstance().u61_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 4 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 4 : null;
    SignedIntFieldFormatDirective.call(this, tmp, tmp_0, null, tmp$ret$1, 4);
    this.e62_1 = padding;
    this.f62_1 = isYearOfEra;
  }
  protoOf(YearDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof YearDirective) {
      tmp_0 = this.e62_1.equals(other.e62_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.f62_1 === other.f62_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(YearDirective).hashCode = function () {
    return imul(this.e62_1.hashCode(), 31) + getBooleanHashCode(this.f62_1) | 0;
  };
  function MonthDirective(padding) {
    var tmp = DateFields_getInstance().v61_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.r62_1 = padding;
  }
  protoOf(MonthDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthDirective) {
      tmp = this.r62_1.equals(other.r62_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthDirective).hashCode = function () {
    return this.r62_1.hashCode();
  };
  function MonthNameDirective(names) {
    NamedUnsignedIntFieldFormatDirective.call(this, DateFields_getInstance().v61_1, names.o61_1, 'monthName');
    this.z62_1 = names;
  }
  protoOf(MonthNameDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthNameDirective) {
      tmp = equals(this.z62_1.o61_1, other.z62_1.o61_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthNameDirective).hashCode = function () {
    return hashCode(this.z62_1.o61_1);
  };
  function DayDirective(padding) {
    var tmp = DateFields_getInstance().w61_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.h63_1 = padding;
  }
  protoOf(DayDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayDirective) {
      tmp = this.h63_1.equals(other.h63_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayDirective).hashCode = function () {
    return this.h63_1.hashCode();
  };
  function DayOfWeekDirective(names) {
    NamedUnsignedIntFieldFormatDirective.call(this, DateFields_getInstance().x61_1, names.p61_1, 'dayOfWeekName');
    this.l63_1 = names;
  }
  protoOf(DayOfWeekDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayOfWeekDirective) {
      tmp = equals(this.l63_1.p61_1, other.l63_1.p61_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayOfWeekDirective).hashCode = function () {
    return hashCode(this.l63_1.p61_1);
  };
  function DateFields() {
    DateFields_instance = this;
    this.u61_1 = new GenericFieldSpec(new PropertyAccessor(year$factory_2()));
    this.v61_1 = new UnsignedFieldSpec(new PropertyAccessor(monthNumber$factory_0()), 1, 12);
    this.w61_1 = new UnsignedFieldSpec(new PropertyAccessor(dayOfMonth$factory_0()), 1, 31);
    this.x61_1 = new UnsignedFieldSpec(new PropertyAccessor(isoDayOfWeek$factory()), 1, 7);
    this.y61_1 = new UnsignedFieldSpec(new PropertyAccessor(dayOfYear$factory_0()), 1, 366);
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
    return tmp.q61(ISO_DATE$delegate$lambda$lambda);
  }
  function ISO_DATE$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.q5y();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.o60();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.p60();
    return Unit_instance;
  }
  function ISO_DATE_BASIC$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_instance_7;
    return tmp.q61(ISO_DATE_BASIC$delegate$lambda$lambda);
  }
  function ISO_DATE_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.q5y();
    $this$build.o60();
    $this$build.p60();
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
      return receiver.x5w();
    }, function (receiver, value) {
      return receiver.w5w(value);
    });
  }
  function monthNumber$factory_0() {
    return getPropertyCallableRef('monthNumber', 1, KMutableProperty1, function (receiver) {
      return receiver.v5w();
    }, function (receiver, value) {
      return receiver.u5w(value);
    });
  }
  function dayOfMonth$factory_0() {
    return getPropertyCallableRef('dayOfMonth', 1, KMutableProperty1, function (receiver) {
      return receiver.p5w();
    }, function (receiver, value) {
      return receiver.j5w(value);
    });
  }
  function isoDayOfWeek$factory() {
    return getPropertyCallableRef('isoDayOfWeek', 1, KMutableProperty1, function (receiver) {
      return receiver.t5w();
    }, function (receiver, value) {
      return receiver.s5w(value);
    });
  }
  function dayOfYear$factory_0() {
    return getPropertyCallableRef('dayOfYear', 1, KMutableProperty1, function (receiver) {
      return receiver.r5w();
    }, function (receiver, value) {
      return receiver.q5w(value);
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
    return tmp0.b1();
  }
  var ISO_DATETIME$delegate;
  function get_emptyIncompleteLocalDateTime() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    return emptyIncompleteLocalDateTime;
  }
  var emptyIncompleteLocalDateTime;
  function Companion_8() {
  }
  protoOf(Companion_8).m63 = function (block) {
    var builder = new Builder_1(new AppendableFormatStructure());
    block(builder);
    return new LocalDateTimeFormat(builder.x2x());
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    return Companion_instance_8;
  }
  function Builder_1(actualBuilder) {
    this.n63_1 = actualBuilder;
  }
  protoOf(Builder_1).c60 = function () {
    return this.n63_1;
  };
  protoOf(Builder_1).d60 = function (structure) {
    this.n63_1.f60(structure);
  };
  protoOf(Builder_1).h60 = function () {
    return new Builder_1(new AppendableFormatStructure());
  };
  function LocalDateTimeFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.o63_1 = actualFormat;
  }
  protoOf(LocalDateTimeFormat).a61 = function () {
    return this.o63_1;
  };
  protoOf(LocalDateTimeFormat).p63 = function (intermediate) {
    return intermediate.s63();
  };
  protoOf(LocalDateTimeFormat).c61 = function (intermediate) {
    return this.p63(intermediate instanceof IncompleteLocalDateTime ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateTimeFormat).d61 = function () {
    return get_emptyIncompleteLocalDateTime();
  };
  function IncompleteLocalDateTime(date, time) {
    date = date === VOID ? new IncompleteLocalDate() : date;
    time = time === VOID ? new IncompleteLocalTime() : time;
    this.q63_1 = date;
    this.r63_1 = time;
  }
  protoOf(IncompleteLocalDateTime).j5w = function (_set____db54di) {
    this.q63_1.m5w_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).p5w = function () {
    return this.q63_1.m5w_1;
  };
  protoOf(IncompleteLocalDateTime).q5w = function (_set____db54di) {
    this.q63_1.o5w_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).r5w = function () {
    return this.q63_1.o5w_1;
  };
  protoOf(IncompleteLocalDateTime).s5w = function (_set____db54di) {
    this.q63_1.n5w_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).t5w = function () {
    return this.q63_1.n5w_1;
  };
  protoOf(IncompleteLocalDateTime).u5w = function (_set____db54di) {
    this.q63_1.l5w_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).v5w = function () {
    return this.q63_1.l5w_1;
  };
  protoOf(IncompleteLocalDateTime).w5w = function (_set____db54di) {
    this.q63_1.k5w_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).x5w = function () {
    return this.q63_1.k5w_1;
  };
  protoOf(IncompleteLocalDateTime).y5w = function (_set____db54di) {
    this.r63_1.b5x_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).f5x = function () {
    return this.r63_1.b5x_1;
  };
  protoOf(IncompleteLocalDateTime).g5x = function (value) {
    this.r63_1.g5x(value);
  };
  protoOf(IncompleteLocalDateTime).h5x = function () {
    return this.r63_1.h5x();
  };
  protoOf(IncompleteLocalDateTime).i5x = function (_set____db54di) {
    this.r63_1.z5w_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).j5x = function () {
    return this.r63_1.z5w_1;
  };
  protoOf(IncompleteLocalDateTime).k5x = function (_set____db54di) {
    this.r63_1.a5x_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).l5x = function () {
    return this.r63_1.a5x_1;
  };
  protoOf(IncompleteLocalDateTime).m5x = function (_set____db54di) {
    this.r63_1.c5x_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).n5x = function () {
    return this.r63_1.c5x_1;
  };
  protoOf(IncompleteLocalDateTime).o5x = function (_set____db54di) {
    this.r63_1.e5x_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).p5x = function () {
    return this.r63_1.e5x_1;
  };
  protoOf(IncompleteLocalDateTime).q5x = function (_set____db54di) {
    this.r63_1.d5x_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).r5x = function () {
    return this.r63_1.d5x_1;
  };
  protoOf(IncompleteLocalDateTime).s63 = function () {
    return LocalDateTime_init_$Create$(this.q63_1.r5z(), this.r63_1.p5z());
  };
  protoOf(IncompleteLocalDateTime).e5y = function () {
    return new IncompleteLocalDateTime(this.q63_1.e5y(), this.r63_1.e5y());
  };
  function AbstractWithDateTimeBuilder() {
  }
  function ISO_DATETIME$delegate$lambda() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    var tmp = Companion_instance_8;
    return tmp.m63(ISO_DATETIME$delegate$lambda$lambda);
  }
  function ISO_DATETIME$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    $this$build.f5y(get_ISO_DATE());
    var tmp = [ISO_DATETIME$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_DATETIME$delegate$lambda$lambda$lambda_0);
    $this$build.t60(get_ISO_TIME());
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
    return tmp0.b1();
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
    this.z5w_1 = hour;
    this.a5x_1 = hourOfAmPm;
    this.b5x_1 = amPm;
    this.c5x_1 = minute;
    this.d5x_1 = second;
    this.e5x_1 = nanosecond;
  }
  protoOf(IncompleteLocalTime).i5x = function (_set____db54di) {
    this.z5w_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).j5x = function () {
    return this.z5w_1;
  };
  protoOf(IncompleteLocalTime).k5x = function (_set____db54di) {
    this.a5x_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).l5x = function () {
    return this.a5x_1;
  };
  protoOf(IncompleteLocalTime).y5w = function (_set____db54di) {
    this.b5x_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).f5x = function () {
    return this.b5x_1;
  };
  protoOf(IncompleteLocalTime).m5x = function (_set____db54di) {
    this.c5x_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).n5x = function () {
    return this.c5x_1;
  };
  protoOf(IncompleteLocalTime).q5x = function (_set____db54di) {
    this.d5x_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).r5x = function () {
    return this.d5x_1;
  };
  protoOf(IncompleteLocalTime).o5x = function (_set____db54di) {
    this.e5x_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).p5x = function () {
    return this.e5x_1;
  };
  protoOf(IncompleteLocalTime).p5z = function () {
    var tmp0_safe_receiver = this.z5w_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = this.a5x_1;
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
      var tmp1_safe_receiver = this.b5x_1;
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
      var tmp1_safe_receiver_0 = this.a5x_1;
      var tmp_1;
      if (tmp1_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp0_safe_receiver_1 = this.b5x_1;
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
    var tmp_4 = requireParsedField(this.c5x_1, 'minute');
    var tmp4_elvis_lhs = this.d5x_1;
    var tmp_5 = tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = this.e5x_1;
    return LocalTime_init_$Create$(hour, tmp_4, tmp_5, tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs);
  };
  protoOf(IncompleteLocalTime).e5y = function () {
    return new IncompleteLocalTime(this.z5w_1, this.a5x_1, this.b5x_1, this.c5x_1, this.d5x_1, this.e5x_1);
  };
  protoOf(IncompleteLocalTime).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    if (other instanceof IncompleteLocalTime) {
      tmp_4 = this.z5w_1 == other.z5w_1;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = this.a5x_1 == other.a5x_1;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = equals(this.b5x_1, other.b5x_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.c5x_1 == other.c5x_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.d5x_1 == other.d5x_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.e5x_1 == other.e5x_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalTime).hashCode = function () {
    var tmp6_elvis_lhs = this.z5w_1;
    var tmp = imul(tmp6_elvis_lhs == null ? 0 : tmp6_elvis_lhs, 31);
    var tmp5_elvis_lhs = this.a5x_1;
    var tmp_0 = tmp + imul(tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs, 31) | 0;
    var tmp3_safe_receiver = this.b5x_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.hashCode();
    var tmp_1 = tmp_0 + imul(tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs, 31) | 0;
    var tmp2_elvis_lhs = this.c5x_1;
    var tmp_2 = tmp_1 + imul(tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs, 31) | 0;
    var tmp1_elvis_lhs = this.d5x_1;
    var tmp_3 = tmp_2 + imul(tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, 31) | 0;
    var tmp0_elvis_lhs = this.e5x_1;
    return tmp_3 + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
  };
  protoOf(IncompleteLocalTime).toString = function () {
    var tmp0_elvis_lhs = this.z5w_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.c5x_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.d5x_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_safe_receiver = this.e5x_1;
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
  protoOf(Companion_9).w63 = function (block) {
    var builder = new Builder_2(new AppendableFormatStructure());
    block(builder);
    return new LocalTimeFormat(builder.x2x());
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    return Companion_instance_9;
  }
  function Builder_2(actualBuilder) {
    this.x63_1 = actualBuilder;
  }
  protoOf(Builder_2).c60 = function () {
    return this.x63_1;
  };
  protoOf(Builder_2).l60 = function (structure) {
    this.x63_1.f60(structure);
  };
  protoOf(Builder_2).h60 = function () {
    return new Builder_2(new AppendableFormatStructure());
  };
  function LocalTimeFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.y63_1 = actualFormat;
  }
  protoOf(LocalTimeFormat).a61 = function () {
    return this.y63_1;
  };
  protoOf(LocalTimeFormat).z63 = function (intermediate) {
    return intermediate.p5z();
  };
  protoOf(LocalTimeFormat).c61 = function (intermediate) {
    return this.z63(intermediate instanceof IncompleteLocalTime ? intermediate : THROW_CCE());
  };
  protoOf(LocalTimeFormat).d61 = function () {
    return get_emptyIncompleteLocalTime();
  };
  function AbstractWithTimeBuilder() {
  }
  function HourDirective(padding) {
    var tmp = TimeFields_getInstance().a64_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.k64_1 = padding;
  }
  protoOf(HourDirective).equals = function (other) {
    var tmp;
    if (other instanceof HourDirective) {
      tmp = this.k64_1.equals(other.k64_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HourDirective).hashCode = function () {
    return this.k64_1.hashCode();
  };
  function MinuteDirective(padding) {
    var tmp = TimeFields_getInstance().b64_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.p64_1 = padding;
  }
  protoOf(MinuteDirective).equals = function (other) {
    var tmp;
    if (other instanceof MinuteDirective) {
      tmp = this.p64_1.equals(other.p64_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MinuteDirective).hashCode = function () {
    return this.p64_1.hashCode();
  };
  function SecondDirective(padding) {
    var tmp = TimeFields_getInstance().c64_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.u64_1 = padding;
  }
  protoOf(SecondDirective).equals = function (other) {
    var tmp;
    if (other instanceof SecondDirective) {
      tmp = this.u64_1.equals(other.u64_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SecondDirective).hashCode = function () {
    return this.u64_1.hashCode();
  };
  function Companion_10() {
    Companion_instance_10 = this;
    this.v64_1 = listOf([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    this.w64_1 = listOf([2, 1, 0, 2, 1, 0, 2, 1, 0]);
  }
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function FractionalSecondDirective(minDigits, maxDigits, zerosToAdd) {
    Companion_getInstance_11();
    zerosToAdd = zerosToAdd === VOID ? Companion_getInstance_11().v64_1 : zerosToAdd;
    DecimalFractionFieldFormatDirective.call(this, TimeFields_getInstance().d64_1, minDigits, maxDigits, zerosToAdd);
    this.b65_1 = minDigits;
    this.c65_1 = maxDigits;
  }
  protoOf(FractionalSecondDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof FractionalSecondDirective) {
      tmp_0 = this.b65_1 === other.b65_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.c65_1 === other.c65_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(FractionalSecondDirective).hashCode = function () {
    return imul(31, this.b65_1) + this.c65_1 | 0;
  };
  function TimeFields() {
    TimeFields_instance = this;
    this.a64_1 = new UnsignedFieldSpec(new PropertyAccessor(hour$factory_0()), 0, 23);
    this.b64_1 = new UnsignedFieldSpec(new PropertyAccessor(minute$factory_0()), 0, 59);
    this.c64_1 = new UnsignedFieldSpec(new PropertyAccessor(second$factory_0()), 0, 59, VOID, 0);
    this.d64_1 = new GenericFieldSpec(new PropertyAccessor(fractionOfSecond$factory()), VOID, new DecimalFraction(0, 9));
    this.e64_1 = new GenericFieldSpec(new PropertyAccessor(amPm$factory_0()));
    this.f64_1 = new UnsignedFieldSpec(new PropertyAccessor(hourOfAmPm$factory_0()), 1, 12);
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
    return tmp.w63(ISO_TIME$delegate$lambda$lambda);
  }
  function ISO_TIME$delegate$lambda$lambda($this$build) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    $this$build.g5y();
    char($this$build, _Char___init__impl__6a9atx(58));
    $this$build.h5y();
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
    $this$alternativeParsing.i5y();
    optional($this$alternativeParsing, VOID, ISO_TIME$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_TIME$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    char($this$optional, _Char___init__impl__6a9atx(46));
    $this$optional.j5y(1, 9);
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
      return receiver.j5x();
    }, function (receiver, value) {
      return receiver.i5x(value);
    });
  }
  function minute$factory_0() {
    return getPropertyCallableRef('minute', 1, KMutableProperty1, function (receiver) {
      return receiver.n5x();
    }, function (receiver, value) {
      return receiver.m5x(value);
    });
  }
  function second$factory_0() {
    return getPropertyCallableRef('second', 1, KMutableProperty1, function (receiver) {
      return receiver.r5x();
    }, function (receiver, value) {
      return receiver.q5x(value);
    });
  }
  function fractionOfSecond$factory() {
    return getPropertyCallableRef('fractionOfSecond', 1, KMutableProperty1, function (receiver) {
      return receiver.h5x();
    }, function (receiver, value) {
      return receiver.g5x(value);
    });
  }
  function amPm$factory_0() {
    return getPropertyCallableRef('amPm', 1, KMutableProperty1, function (receiver) {
      return receiver.f5x();
    }, function (receiver, value) {
      return receiver.y5w(value);
    });
  }
  function hourOfAmPm$factory_0() {
    return getPropertyCallableRef('hourOfAmPm', 1, KMutableProperty1, function (receiver) {
      return receiver.l5x();
    }, function (receiver, value) {
      return receiver.k5x(value);
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
    return tmp0.b1();
  }
  var ISO_OFFSET$delegate;
  function get_ISO_OFFSET_BASIC() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp0 = ISO_OFFSET_BASIC$delegate;
    // Inline function 'kotlin.getValue' call
    ISO_OFFSET_BASIC$factory();
    return tmp0.b1();
  }
  var ISO_OFFSET_BASIC$delegate;
  function get_FOUR_DIGIT_OFFSET() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp0 = FOUR_DIGIT_OFFSET$delegate;
    // Inline function 'kotlin.getValue' call
    FOUR_DIGIT_OFFSET$factory();
    return tmp0.b1();
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
    this.t5x_1 = isNegative;
    this.u5x_1 = totalHoursAbs;
    this.v5x_1 = minutesOfHour;
    this.w5x_1 = secondsOfMinute;
  }
  protoOf(IncompleteUtcOffset).s5x = function (_set____db54di) {
    this.t5x_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).x5x = function () {
    return this.t5x_1;
  };
  protoOf(IncompleteUtcOffset).c5y = function (_set____db54di) {
    this.u5x_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).d5y = function () {
    return this.u5x_1;
  };
  protoOf(IncompleteUtcOffset).y5x = function (_set____db54di) {
    this.v5x_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).z5x = function () {
    return this.v5x_1;
  };
  protoOf(IncompleteUtcOffset).a5y = function (_set____db54di) {
    this.w5x_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).b5y = function () {
    return this.w5x_1;
  };
  protoOf(IncompleteUtcOffset).o5z = function () {
    var sign = this.t5x_1 === true ? -1 : 1;
    var tmp0_safe_receiver = this.u5x_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = imul(tmp0_safe_receiver, sign);
    }
    var tmp_0 = tmp;
    var tmp1_safe_receiver = this.v5x_1;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = imul(tmp1_safe_receiver, sign);
    }
    var tmp_2 = tmp_1;
    var tmp2_safe_receiver = this.w5x_1;
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
      tmp_2 = this.t5x_1 == other.t5x_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.u5x_1 == other.u5x_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.v5x_1 == other.v5x_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.w5x_1 == other.w5x_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteUtcOffset).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.t5x_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.u5x_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp_0 = tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.v5x_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp_1 = tmp_0 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.w5x_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    return tmp_1 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
  };
  protoOf(IncompleteUtcOffset).e5y = function () {
    return new IncompleteUtcOffset(this.t5x_1, this.u5x_1, this.v5x_1, this.w5x_1);
  };
  protoOf(IncompleteUtcOffset).toString = function () {
    var tmp0_safe_receiver = this.t5x_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = tmp0_safe_receiver ? '-' : '+';
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0 = tmp1_elvis_lhs == null ? ' ' : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.u5x_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.v5x_1;
    var tmp_2 = toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs);
    var tmp4_elvis_lhs = this.w5x_1;
    return tmp_0 + tmp_1 + ':' + tmp_2 + ':' + toString(tmp4_elvis_lhs == null ? '??' : tmp4_elvis_lhs);
  };
  function UtcOffsetWholeHoursDirective(padding) {
    var tmp = OffsetFields_getInstance().i65_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.p65_1 = padding;
  }
  protoOf(UtcOffsetWholeHoursDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetWholeHoursDirective) {
      tmp = this.p65_1.equals(other.p65_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetWholeHoursDirective).hashCode = function () {
    return this.p65_1.hashCode();
  };
  function Companion_11() {
  }
  protoOf(Companion_11).q65 = function (block) {
    var builder = new Builder_3(new AppendableFormatStructure());
    block(builder);
    return new UtcOffsetFormat(builder.x2x());
  };
  var Companion_instance_11;
  function Companion_getInstance_12() {
    return Companion_instance_11;
  }
  function Builder_3(actualBuilder) {
    this.r65_1 = actualBuilder;
  }
  protoOf(Builder_3).c60 = function () {
    return this.r65_1;
  };
  protoOf(Builder_3).g60 = function (structure) {
    this.r65_1.f60(structure);
  };
  protoOf(Builder_3).h60 = function () {
    return new Builder_3(new AppendableFormatStructure());
  };
  function UtcOffsetFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.s65_1 = actualFormat;
  }
  protoOf(UtcOffsetFormat).a61 = function () {
    return this.s65_1;
  };
  protoOf(UtcOffsetFormat).t65 = function (intermediate) {
    return intermediate.o5z();
  };
  protoOf(UtcOffsetFormat).c61 = function (intermediate) {
    return this.t65(intermediate instanceof IncompleteUtcOffset ? intermediate : THROW_CCE());
  };
  protoOf(UtcOffsetFormat).d61 = function () {
    return get_emptyIncompleteUtcOffset();
  };
  function OffsetFields$sign$1() {
    this.u65_1 = new PropertyAccessor(isNegative$factory_0());
  }
  protoOf(OffsetFields$sign$1).x5x = function () {
    return this.u65_1;
  };
  protoOf(OffsetFields$sign$1).v65 = function (obj) {
    var tmp;
    var tmp_0;
    var tmp0_elvis_lhs = obj.d5y();
    if ((tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) === 0) {
      var tmp1_elvis_lhs = obj.z5x();
      tmp_0 = (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) === 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp2_elvis_lhs = obj.b5y();
      tmp = (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OffsetFields$sign$1).w65 = function (obj) {
    return this.v65((!(obj == null) ? isInterface(obj, UtcOffsetFieldContainer) : false) ? obj : THROW_CCE());
  };
  function OffsetFields() {
    OffsetFields_instance = this;
    var tmp = this;
    tmp.h65_1 = new OffsetFields$sign$1();
    var tmp_0 = this;
    var tmp0_accessor = new PropertyAccessor(totalHoursAbs$factory_0());
    var tmp1_sign = this.h65_1;
    tmp_0.i65_1 = new UnsignedFieldSpec(tmp0_accessor, 0, 18, VOID, 0, tmp1_sign);
    var tmp_1 = this;
    var tmp0_accessor_0 = new PropertyAccessor(minutesOfHour$factory_0());
    var tmp1_sign_0 = this.h65_1;
    tmp_1.j65_1 = new UnsignedFieldSpec(tmp0_accessor_0, 0, 59, VOID, 0, tmp1_sign_0);
    var tmp_2 = this;
    var tmp0_accessor_1 = new PropertyAccessor(secondsOfMinute$factory_0());
    var tmp1_sign_1 = this.h65_1;
    tmp_2.k65_1 = new UnsignedFieldSpec(tmp0_accessor_1, 0, 59, VOID, 0, tmp1_sign_1);
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
    var tmp = OffsetFields_getInstance().j65_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.b66_1 = padding;
  }
  protoOf(UtcOffsetMinuteOfHourDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetMinuteOfHourDirective) {
      tmp = this.b66_1.equals(other.b66_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetMinuteOfHourDirective).hashCode = function () {
    return this.b66_1.hashCode();
  };
  function UtcOffsetSecondOfMinuteDirective(padding) {
    var tmp = OffsetFields_getInstance().k65_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.g66_1 = padding;
  }
  protoOf(UtcOffsetSecondOfMinuteDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetSecondOfMinuteDirective) {
      tmp = this.g66_1.equals(other.g66_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetSecondOfMinuteDirective).hashCode = function () {
    return this.g66_1.hashCode();
  };
  function ISO_OFFSET$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_11;
    return tmp.q65(ISO_OFFSET$delegate$lambda$lambda);
  }
  function ISO_OFFSET$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = [ISO_OFFSET$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_OFFSET$delegate$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$alternativeParsing.r5y('z');
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    optional($this$alternativeParsing, 'Z', ISO_OFFSET$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.k5y();
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.w60();
    optional($this$optional, VOID, ISO_OFFSET$delegate$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.y60();
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_11;
    return tmp.q65(ISO_OFFSET_BASIC$delegate$lambda$lambda);
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = [ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$alternativeParsing.r5y('z');
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    optional($this$alternativeParsing, 'Z', ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.k5y();
    optional($this$optional, VOID, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.w60();
    optional($this$optional, VOID, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.y60();
    return Unit_instance;
  }
  function FOUR_DIGIT_OFFSET$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_11;
    return tmp.q65(FOUR_DIGIT_OFFSET$delegate$lambda$lambda);
  }
  function FOUR_DIGIT_OFFSET$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$build.k5y();
    $this$build.w60();
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
      return receiver.d5y();
    }, function (receiver, value) {
      return receiver.c5y(value);
    });
  }
  function minutesOfHour$factory_0() {
    return getPropertyCallableRef('minutesOfHour', 1, KMutableProperty1, function (receiver) {
      return receiver.z5x();
    }, function (receiver, value) {
      return receiver.y5x(value);
    });
  }
  function secondsOfMinute$factory_0() {
    return getPropertyCallableRef('secondsOfMinute', 1, KMutableProperty1, function (receiver) {
      return receiver.b5y();
    }, function (receiver, value) {
      return receiver.a5y(value);
    });
  }
  function isNegative$factory_0() {
    return getPropertyCallableRef('isNegative', 1, KMutableProperty1, function (receiver) {
      return receiver.x5x();
    }, function (receiver, value) {
      return receiver.s5x(value);
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
    tmp.e60_1 = ArrayList_init_$Create$_0();
  }
  protoOf(AppendableFormatStructure).x2x = function () {
    return new ConcatenatedFormatStructure(this.e60_1);
  };
  protoOf(AppendableFormatStructure).f60 = function (format) {
    if (isInterface(format, NonConcatenatedFormatStructure)) {
      this.e60_1.n(format);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.l61_1.p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
          this.e60_1.n(element);
        }
      }
    }
  };
  function Accessor$getterNotNull$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.h66(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function SignedIntFieldFormatDirective(field, minDigits, maxDigits, spacePadding, outputPlusOnExceededWidth) {
    this.g62_1 = field;
    this.h62_1 = minDigits;
    this.i62_1 = maxDigits;
    this.j62_1 = spacePadding;
    this.k62_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.h62_1 == null || this.h62_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.h62_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.i62_1 == null || this.h62_1 == null || this.i62_1 >= this.h62_1)) {
      var message_0 = 'The maximum number of digits (' + this.i62_1 + ') is less than the minimum number of digits (' + this.h62_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(SignedIntFieldFormatDirective).l62 = function () {
    return this.g62_1;
  };
  protoOf(SignedIntFieldFormatDirective).m62 = function () {
    var tmp = Accessor$getterNotNull$ref(this.g62_1.i66());
    var tmp0_elvis_lhs = this.h62_1;
    var formatter = new SignedIntFormatterStructure(tmp, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs, this.k62_1);
    return !(this.j62_1 == null) ? new SpacePaddedFormatter(formatter, this.j62_1) : formatter;
  };
  protoOf(SignedIntFieldFormatDirective).k61 = function () {
    return SignedIntParser(this.h62_1, this.i62_1, this.j62_1, this.g62_1.i66(), this.g62_1.u2(), this.k62_1);
  };
  function Accessor$getterNotNull$ref_0($boundThis) {
    var l = function (p0) {
      return $boundThis.h66(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function UnsignedIntFieldFormatDirective(field, minDigits, spacePadding) {
    this.s62_1 = field;
    this.t62_1 = minDigits;
    this.u62_1 = spacePadding;
    this.v62_1 = this.s62_1.p66_1;
    // Inline function 'kotlin.require' call
    if (!(this.t62_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.t62_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.v62_1 >= this.t62_1)) {
      var message_0 = 'The maximum number of digits (' + this.v62_1 + ') is less than the minimum number of digits (' + this.t62_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (!(this.u62_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.u62_1 > this.t62_1)) {
        var message_1 = 'The space padding (' + this.u62_1 + ') should be more than the minimum number of digits (' + this.t62_1 + ')';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  protoOf(UnsignedIntFieldFormatDirective).l62 = function () {
    return this.s62_1;
  };
  protoOf(UnsignedIntFieldFormatDirective).m62 = function () {
    var formatter = new UnsignedIntFormatterStructure(Accessor$getterNotNull$ref_0(this.s62_1.j66_1), this.t62_1);
    return !(this.u62_1 == null) ? new SpacePaddedFormatter(formatter, this.u62_1) : formatter;
  };
  protoOf(UnsignedIntFieldFormatDirective).k61 = function () {
    return spaceAndZeroPaddedUnsignedInt(this.t62_1, this.v62_1, this.u62_1, this.s62_1.j66_1, this.s62_1.m66_1);
  };
  function getStringValue($this, target) {
    // Inline function 'kotlin.let' call
    var it = $this.a63_1.j66_1.h66(target);
    var tmp0_elvis_lhs = getOrNull($this.b63_1, it - $this.a63_1.k66_1 | 0);
    return tmp0_elvis_lhs == null ? 'The value ' + it + ' of ' + $this.a63_1.m66_1 + ' does not have a corresponding string representation' : tmp0_elvis_lhs;
  }
  function AssignableString($outer) {
    this.q66_1 = $outer;
  }
  protoOf(AssignableString).r66 = function (container, newValue) {
    var tmp0_safe_receiver = this.q66_1.a63_1.j66_1.s66(container, this.q66_1.b63_1.x(newValue) + this.q66_1.a63_1.k66_1 | 0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.q66_1.b63_1.u(tmp0_safe_receiver - this.q66_1.a63_1.k66_1 | 0);
    }
    return tmp;
  };
  protoOf(AssignableString).s66 = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.r66(tmp, (!(newValue == null) ? typeof newValue === 'string' : false) ? newValue : THROW_CCE());
  };
  protoOf(AssignableString).u2 = function () {
    return this.q66_1.c63_1;
  };
  function NamedUnsignedIntFieldFormatDirective$getStringValue$ref($boundThis) {
    var l = function (p0) {
      return getStringValue($boundThis, p0);
    };
    l.callableName = 'getStringValue';
    return l;
  }
  function NamedUnsignedIntFieldFormatDirective(field, values, name) {
    this.a63_1 = field;
    this.b63_1 = values;
    this.c63_1 = name;
    // Inline function 'kotlin.require' call
    if (!(this.b63_1.s() === ((this.a63_1.l66_1 - this.a63_1.k66_1 | 0) + 1 | 0))) {
      var message = 'The number of values (' + this.b63_1.s() + ') in ' + toString(this.b63_1) + ' does not match the range of the field (' + ((this.a63_1.l66_1 - this.a63_1.k66_1 | 0) + 1 | 0) + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(NamedUnsignedIntFieldFormatDirective).l62 = function () {
    return this.a63_1;
  };
  protoOf(NamedUnsignedIntFieldFormatDirective).m62 = function () {
    return new StringFormatterStructure(NamedUnsignedIntFieldFormatDirective$getStringValue$ref(this));
  };
  protoOf(NamedUnsignedIntFieldFormatDirective).k61 = function () {
    return new ParserStructure(listOf_0(new StringSetParserOperation(this.b63_1, new AssignableString(this), 'one of ' + toString(this.b63_1) + ' for ' + this.c63_1)), emptyList());
  };
  function Accessor$getterNotNull$ref_1($boundThis) {
    var l = function (p0) {
      return $boundThis.h66(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function DecimalFractionFieldFormatDirective(field, minDigits, maxDigits, zerosToAdd) {
    this.d65_1 = field;
    this.e65_1 = minDigits;
    this.f65_1 = maxDigits;
    this.g65_1 = zerosToAdd;
  }
  protoOf(DecimalFractionFieldFormatDirective).l62 = function () {
    return this.d65_1;
  };
  protoOf(DecimalFractionFieldFormatDirective).m62 = function () {
    return new DecimalFractionFormatterStructure(Accessor$getterNotNull$ref_1(this.d65_1.i66()), this.e65_1, this.f65_1, this.g65_1);
  };
  protoOf(DecimalFractionFieldFormatDirective).k61 = function () {
    return new ParserStructure(listOf_0(new NumberSpanParserOperation(listOf_0(new FractionPartConsumer(this.e65_1, this.f65_1, this.d65_1.i66(), this.d65_1.u2())))), emptyList());
  };
  function GenericFieldSpec(accessor, name, defaultValue, sign) {
    name = name === VOID ? accessor.u2() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.t66_1 = accessor;
    this.u66_1 = name;
    this.v66_1 = defaultValue;
    this.w66_1 = sign;
  }
  protoOf(GenericFieldSpec).i66 = function () {
    return this.t66_1;
  };
  protoOf(GenericFieldSpec).u2 = function () {
    return this.u66_1;
  };
  protoOf(GenericFieldSpec).x66 = function () {
    return this.v66_1;
  };
  protoOf(GenericFieldSpec).y66 = function () {
    return this.w66_1;
  };
  function PropertyAccessor(property) {
    this.z66_1 = property;
  }
  protoOf(PropertyAccessor).u2 = function () {
    return this.z66_1.callableName;
  };
  protoOf(PropertyAccessor).a67 = function (container, newValue) {
    var oldValue = this.z66_1.get(container);
    var tmp;
    if (oldValue === null) {
      this.z66_1.set(container, newValue);
      tmp = null;
    } else if (equals(oldValue, newValue)) {
      tmp = null;
    } else {
      tmp = oldValue;
    }
    return tmp;
  };
  protoOf(PropertyAccessor).s66 = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.a67(tmp, (newValue == null ? true : !(newValue == null)) ? newValue : THROW_CCE());
  };
  protoOf(PropertyAccessor).b67 = function (container) {
    return this.z66_1.get(container);
  };
  function UnsignedFieldSpec(accessor, minValue, maxValue, name, defaultValue, sign) {
    name = name === VOID ? accessor.u2() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.j66_1 = accessor;
    this.k66_1 = minValue;
    this.l66_1 = maxValue;
    this.m66_1 = name;
    this.n66_1 = defaultValue;
    this.o66_1 = sign;
    var tmp = this;
    var tmp_0;
    if (this.l66_1 < 10) {
      tmp_0 = 1;
    } else if (this.l66_1 < 100) {
      tmp_0 = 2;
    } else if (this.l66_1 < 1000) {
      tmp_0 = 3;
    } else {
      throw IllegalArgumentException_init_$Create$('Max value ' + this.l66_1 + ' is too large');
    }
    tmp.p66_1 = tmp_0;
  }
  protoOf(UnsignedFieldSpec).i66 = function () {
    return this.j66_1;
  };
  protoOf(UnsignedFieldSpec).u2 = function () {
    return this.m66_1;
  };
  protoOf(UnsignedFieldSpec).x66 = function () {
    return this.n66_1;
  };
  protoOf(UnsignedFieldSpec).y66 = function () {
    return this.o66_1;
  };
  function Accessor() {
  }
  function AbstractFieldSpec() {
  }
  protoOf(AbstractFieldSpec).toString = function () {
    return 'The field ' + this.u2() + ' (default value is ' + toString_1(this.x66()) + ')';
  };
  function CachedFormatStructure(formats) {
    ConcatenatedFormatStructure.call(this, formats);
    this.i61_1 = protoOf(ConcatenatedFormatStructure).m62.call(this);
    this.j61_1 = protoOf(ConcatenatedFormatStructure).k61.call(this);
  }
  protoOf(CachedFormatStructure).m62 = function () {
    return this.i61_1;
  };
  protoOf(CachedFormatStructure).k61 = function () {
    return this.j61_1;
  };
  function BasicFormatStructure(directive) {
    this.c67_1 = directive;
  }
  protoOf(BasicFormatStructure).toString = function () {
    return 'BasicFormatStructure(' + toString(this.c67_1) + ')';
  };
  protoOf(BasicFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof BasicFormatStructure) {
      tmp = equals(this.c67_1, other.c67_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(BasicFormatStructure).hashCode = function () {
    return hashCode(this.c67_1);
  };
  protoOf(BasicFormatStructure).k61 = function () {
    return this.c67_1.k61();
  };
  protoOf(BasicFormatStructure).m62 = function () {
    return this.c67_1.m62();
  };
  function ConstantFormatStructure(string) {
    this.d67_1 = string;
  }
  protoOf(ConstantFormatStructure).toString = function () {
    return 'ConstantFormatStructure(' + this.d67_1 + ')';
  };
  protoOf(ConstantFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConstantFormatStructure) {
      tmp = this.d67_1 === other.d67_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConstantFormatStructure).hashCode = function () {
    return getStringHashCode(this.d67_1);
  };
  protoOf(ConstantFormatStructure).k61 = function () {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.d67_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = emptyList();
    } else {
      // Inline function 'kotlin.collections.buildList' call
      // Inline function 'kotlin.collections.buildListInternal' call
      // Inline function 'kotlin.apply' call
      var this_1 = ArrayList_init_$Create$_0();
      var tmp_0;
      if (isAsciiDigit(charSequenceGet(this.d67_1, 0))) {
        var tmp0 = this.d67_1;
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
        var tmp2 = this.d67_1;
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
        tmp_0 = this.d67_1;
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
      tmp = this_1.x3();
    }
    return new ParserStructure(tmp, emptyList());
  };
  protoOf(ConstantFormatStructure).m62 = function () {
    return new ConstantStringFormatterStructure(this.d67_1);
  };
  function formatter$checkIfAllNegative(this$0, value) {
    var seenNonZero = false;
    var tmp0_iterator = this$0.g67_1.p();
    $l$loop: while (tmp0_iterator.q()) {
      var check = tmp0_iterator.r();
      if (check.x5x().b67(value) === true)
        seenNonZero = true;
      else if (check.w65(value))
        continue $l$loop;
      else
        return false;
    }
    return seenNonZero;
  }
  function SignedFormatStructure$parser$lambda(this$0) {
    return function (value, isNegative) {
      var tmp0_iterator = this$0.g67_1.p();
      while (tmp0_iterator.q()) {
        var field = tmp0_iterator.r();
        var wasNegative = field.x5x().b67(value) === true;
        field.x5x().s66(value, !(isNegative === wasNegative));
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
    this.e67_1 = format;
    this.f67_1 = withPlusSign;
    var tmp = this;
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0 = basicFormats(this.e67_1);
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = tmp0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp0_safe_receiver = element.l62().y66();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.n(tmp0_safe_receiver);
      }
    }
    tmp.g67_1 = toSet(destination);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.g67_1.h()) {
      var message = 'Signed format must contain at least one field with a sign';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(SignedFormatStructure).toString = function () {
    return 'SignedFormatStructure(' + toString(this.e67_1) + ')';
  };
  protoOf(SignedFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof SignedFormatStructure) {
      tmp_0 = equals(this.e67_1, other.e67_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.f67_1 === other.f67_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SignedFormatStructure).hashCode = function () {
    return imul(31, hashCode(this.e67_1)) + getBooleanHashCode(this.f67_1) | 0;
  };
  protoOf(SignedFormatStructure).k61 = function () {
    return concat(listOf([new ParserStructure(listOf_0(new SignParser(SignedFormatStructure$parser$lambda(this), this.f67_1, 'sign for ' + toString(this.g67_1))), emptyList()), this.e67_1.k61()]));
  };
  protoOf(SignedFormatStructure).m62 = function () {
    var innerFormat = this.e67_1.m62();
    return new SignedFormatter(innerFormat, SignedFormatStructure$formatter$checkIfAllNegative$ref(this), this.f67_1);
  };
  function Companion_12() {
  }
  protoOf(Companion_12).h67 = function (field) {
    var default_0 = field.x66();
    // Inline function 'kotlin.require' call
    if (!!(default_0 == null)) {
      var message = "The field '" + field.u2() + "' does not define a default value";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new PropertyWithDefault(field.i66(), default_0);
  };
  var Companion_instance_12;
  function Companion_getInstance_13() {
    return Companion_instance_12;
  }
  function access$_get_accessor__yxxs4k($this) {
    return $this.i67_1;
  }
  function access$_get_defaultValue__8tt04b($this) {
    return $this.j67_1;
  }
  function PropertyWithDefault(accessor, defaultValue) {
    this.i67_1 = accessor;
    this.j67_1 = defaultValue;
  }
  function OptionalFormatStructure$parser$lambda(this$0) {
    return function (it) {
      var tmp0_iterator = this$0.m67_1.p();
      while (tmp0_iterator.q()) {
        var field = tmp0_iterator.r();
        // Inline function 'kotlinx.datetime.internal.format.PropertyWithDefault.assignDefault' call
        access$_get_accessor__yxxs4k(field).s66(it, access$_get_defaultValue__8tt04b(field));
      }
      return Unit_instance;
    };
  }
  function Accessor$getter$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.b67(p0);
    };
    l.callableName = 'getter';
    return l;
  }
  function Predicate$test$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.n67(p0);
    };
    l.callableName = 'test';
    return l;
  }
  function Truth$test$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.o67(p0);
    };
    l.callableName = 'test';
    return l;
  }
  function OptionalFormatStructure(onZero, format) {
    this.k67_1 = onZero;
    this.l67_1 = format;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = basicFormats(this.l67_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = item.l62();
      destination.n(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.map' call
    var this_1 = distinct(destination);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s_0 = this_1.p();
    while (_iterator__ex2g4s_0.q()) {
      var item_0 = _iterator__ex2g4s_0.r();
      var tmp$ret$3 = Companion_instance_12.h67(item_0);
      destination_0.n(tmp$ret$3);
    }
    tmp.m67_1 = destination_0;
  }
  protoOf(OptionalFormatStructure).toString = function () {
    return 'Optional(' + this.k67_1 + ', ' + toString(this.l67_1) + ')';
  };
  protoOf(OptionalFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof OptionalFormatStructure) {
      tmp_0 = this.k67_1 === other.k67_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.l67_1, other.l67_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OptionalFormatStructure).hashCode = function () {
    return imul(31, getStringHashCode(this.k67_1)) + hashCode(this.l67_1) | 0;
  };
  protoOf(OptionalFormatStructure).k61 = function () {
    var tmp = emptyList();
    var tmp_0 = this.l67_1.k61();
    var tmp_1 = (new ConstantFormatStructure(this.k67_1)).k61();
    var tmp_2;
    if (this.m67_1.h()) {
      tmp_2 = emptyList();
    } else {
      tmp_2 = listOf_0(new UnconditionalModification(OptionalFormatStructure$parser$lambda(this)));
    }
    return new ParserStructure(tmp, listOf([tmp_0, concat(listOf([tmp_1, new ParserStructure(tmp_2, emptyList())]))]));
  };
  protoOf(OptionalFormatStructure).m62 = function () {
    var formatter = this.l67_1.m62();
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.m67_1;
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
      tmp_0 = new ConstantStringFormatterStructure(this.k67_1);
    } else {
      var tmp_1 = to(Predicate$test$ref(predicate), new ConstantStringFormatterStructure(this.k67_1));
      tmp_0 = new ConditionalFormatter(listOf([tmp_1, to(Truth$test$ref(Truth_instance), formatter)]));
    }
    return tmp_0;
  };
  function AlternativesParsingFormatStructure(mainFormat, formats) {
    this.p67_1 = mainFormat;
    this.q67_1 = formats;
  }
  protoOf(AlternativesParsingFormatStructure).toString = function () {
    return 'AlternativesParsing(' + toString(this.q67_1) + ')';
  };
  protoOf(AlternativesParsingFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AlternativesParsingFormatStructure) {
      tmp_0 = equals(this.p67_1, other.p67_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.q67_1, other.q67_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AlternativesParsingFormatStructure).hashCode = function () {
    return imul(31, hashCode(this.p67_1)) + hashCode(this.q67_1) | 0;
  };
  protoOf(AlternativesParsingFormatStructure).k61 = function () {
    var tmp = emptyList();
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    this_0.n(this.p67_1.k61());
    var tmp0_iterator = this.q67_1.p();
    while (tmp0_iterator.q()) {
      var format = tmp0_iterator.r();
      this_0.n(format.k61());
    }
    var tmp$ret$3 = this_0.x3();
    return new ParserStructure(tmp, tmp$ret$3);
  };
  protoOf(AlternativesParsingFormatStructure).m62 = function () {
    return this.p67_1.m62();
  };
  function ConcatenatedFormatStructure(formats) {
    this.l61_1 = formats;
  }
  protoOf(ConcatenatedFormatStructure).toString = function () {
    return 'ConcatenatedFormatStructure(' + joinToString(this.l61_1, ', ') + ')';
  };
  protoOf(ConcatenatedFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConcatenatedFormatStructure) {
      tmp = equals(this.l61_1, other.l61_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConcatenatedFormatStructure).hashCode = function () {
    return hashCode(this.l61_1);
  };
  protoOf(ConcatenatedFormatStructure).k61 = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.l61_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = item.k61();
      destination.n(tmp$ret$0);
    }
    return concat(destination);
  };
  protoOf(ConcatenatedFormatStructure).m62 = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.l61_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = item.m62();
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
    return this_0.x3();
  }
  function basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format) {
    if (format instanceof BasicFormatStructure) {
      $this_buildList.n(format.c67_1);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.l61_1.p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
          basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element);
        }
      } else {
        if (!(format instanceof ConstantFormatStructure)) {
          if (format instanceof SignedFormatStructure) {
            basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.e67_1);
          } else {
            if (format instanceof AlternativesParsingFormatStructure) {
              basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.p67_1);
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_0 = format.q67_1.p();
              while (_iterator__ex2g4s_0.q()) {
                var element_0 = _iterator__ex2g4s_0.r();
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element_0);
              }
            } else {
              if (format instanceof OptionalFormatStructure) {
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.l67_1);
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
    this.r67_1 = expectedValue;
    this.s67_1 = getter;
  }
  protoOf(ComparisonPredicate).n67 = function (value) {
    return equals(this.s67_1(value), this.r67_1);
  };
  function Truth() {
  }
  protoOf(Truth).o67 = function (value) {
    return true;
  };
  protoOf(Truth).n67 = function (value) {
    return this.o67((value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  var Truth_instance;
  function Truth_getInstance() {
    return Truth_instance;
  }
  function ConjunctionPredicate(predicates) {
    this.t67_1 = predicates;
  }
  protoOf(ConjunctionPredicate).n67 = function (value) {
    var tmp0 = this.t67_1;
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
        if (!element.n67(value)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function SpacePaddedFormatter(formatter, padding) {
    this.u67_1 = formatter;
    this.v67_1 = padding;
  }
  function SignedFormatter(formatter, allSubFormatsNegative, alwaysOutputSign) {
    this.w67_1 = formatter;
    this.x67_1 = allSubFormatsNegative;
    this.y67_1 = alwaysOutputSign;
  }
  function ConditionalFormatter(formatters) {
    this.z67_1 = formatters;
  }
  function ConcatenatedFormatter(formatters) {
    this.a68_1 = formatters;
  }
  function SignedIntFormatterStructure(number, zeroPadding, outputPlusOnExceededWidth) {
    this.b68_1 = number;
    this.c68_1 = zeroPadding;
    this.d68_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.c68_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.c68_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.c68_1 <= 9)) {
      var message_0 = 'The minimum number of digits (' + this.c68_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function UnsignedIntFormatterStructure(number, zeroPadding) {
    this.e68_1 = number;
    this.f68_1 = zeroPadding;
    // Inline function 'kotlin.require' call
    if (!(this.f68_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.f68_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.f68_1 <= 9)) {
      var message_0 = 'The minimum number of digits (' + this.f68_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function StringFormatterStructure(string) {
    this.g68_1 = string;
  }
  function DecimalFractionFormatterStructure(number, minDigits, maxDigits, zerosToAdd) {
    this.h68_1 = number;
    this.i68_1 = minDigits;
    this.j68_1 = maxDigits;
    this.k68_1 = zerosToAdd;
    var containsArg = this.i68_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      var message = 'The minimum number of digits (' + this.i68_1 + ') is not in range 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsLower = this.i68_1;
    var containsArg_0 = this.j68_1;
    // Inline function 'kotlin.require' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      var message_0 = 'The maximum number of digits (' + this.j68_1 + ') is not in range ' + this.i68_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function ConstantStringFormatterStructure(string) {
    this.l68_1 = string;
  }
  function FractionPartConsumer(minLength, maxLength, setter, name) {
    NumberConsumer.call(this, minLength === maxLength ? minLength : null, name);
    this.o68_1 = minLength;
    this.p68_1 = maxLength;
    this.q68_1 = setter;
    var containsArg = this.o68_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      var message = 'Invalid minimum length ' + this.o68_1 + ' for field ' + this.s68_1 + ': expected 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsLower = this.o68_1;
    var containsArg_0 = this.p68_1;
    // Inline function 'kotlin.require' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      var message_0 = 'Invalid maximum length ' + this.p68_1 + ' for field ' + this.s68_1 + ': expected ' + this.o68_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(FractionPartConsumer).t68 = function (storage, input, start, end) {
    return (end - start | 0) < this.o68_1 ? new TooFewDigits(this.o68_1) : (end - start | 0) > this.p68_1 ? new TooManyDigits(this.p68_1) : setWithoutReassigning(this.q68_1, storage, new DecimalFraction(parseAsciiInt(input, start, end), end - start | 0));
  };
  function ConstantNumberConsumer(expected) {
    NumberConsumer.call(this, expected.length, 'the predefined string ' + expected);
    this.w68_1 = expected;
  }
  protoOf(ConstantNumberConsumer).t68 = function (storage, input, start, end) {
    var tmp;
    // Inline function 'kotlin.text.substring' call
    if (toString(charSequenceSubSequence(input, start, end)) === this.w68_1) {
      tmp = null;
    } else {
      tmp = new WrongConstant(this.w68_1);
    }
    return tmp;
  };
  function NumberConsumer(length, whatThisExpects) {
    this.r68_1 = length;
    this.s68_1 = whatThisExpects;
  }
  protoOf(NumberConsumer).a = function () {
    return this.r68_1;
  };
  function ExpectedInt() {
  }
  protoOf(ExpectedInt).x68 = function () {
    return 'expected an Int value';
  };
  var ExpectedInt_instance;
  function ExpectedInt_getInstance() {
    return ExpectedInt_instance;
  }
  function TooManyDigits(maxDigits) {
    this.y68_1 = maxDigits;
  }
  protoOf(TooManyDigits).x68 = function () {
    return 'expected at most ' + this.y68_1 + ' digits';
  };
  function TooFewDigits(minDigits) {
    this.z68_1 = minDigits;
  }
  protoOf(TooFewDigits).x68 = function () {
    return 'expected at least ' + this.z68_1 + ' digits';
  };
  function WrongConstant(expected) {
    this.a69_1 = expected;
  }
  protoOf(WrongConstant).x68 = function () {
    return "expected '" + this.a69_1 + "'";
  };
  function Conflicting(conflicting) {
    this.b69_1 = conflicting;
  }
  protoOf(Conflicting).x68 = function () {
    return "attempted to overwrite the existing value '" + toString(this.b69_1) + "'";
  };
  function setWithoutReassigning(_this__u8e3s4, receiver, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.s66(receiver, value);
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
    this.e69_1 = minLength;
    this.f69_1 = maxLength;
    this.g69_1 = setter;
    this.h69_1 = multiplyByMinus1;
    // Inline function 'kotlin.require' call
    if (!(this.a() == null || numberRangeToNumber(1, 9).yl(this.a()))) {
      var message = 'Invalid length for field ' + this.s68_1 + ': ' + this.a();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(UnsignedIntConsumer).t68 = function (storage, input, start, end) {
    var tmp;
    if (!(this.f69_1 == null) && (end - start | 0) > this.f69_1) {
      tmp = new TooManyDigits(this.f69_1);
    } else if (!(this.e69_1 == null) && (end - start | 0) < this.e69_1) {
      tmp = new TooFewDigits(this.e69_1);
    } else {
      var result = parseAsciiIntOrNull(input, start, end);
      tmp = result == null ? ExpectedInt_instance : setWithoutReassigning(this.g69_1, storage, this.h69_1 ? -result | 0 : result);
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
    this.i69_1 = position;
    this.j69_1 = message;
  }
  function _ParseResult___init__impl__gvz3cn(value) {
    return value;
  }
  function _ParseResult___get_value__impl__86mnxf($this) {
    return $this;
  }
  function Companion_13() {
  }
  protoOf(Companion_13).k69 = function (indexOfNextUnparsed) {
    return _ParseResult___init__impl__gvz3cn(indexOfNextUnparsed);
  };
  protoOf(Companion_13).l69 = function (position, message) {
    return _ParseResult___init__impl__gvz3cn(new ParseError(position, message));
  };
  var Companion_instance_13;
  function Companion_getInstance_14() {
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
      var output = state.m69_1.e5y();
      var inputPosition = state.o69_1;
      var parserStructure = state.n69_1;
      // Inline function 'kotlin.run' call
      $l$block: {
        var inductionVariable = 0;
        var last = parserStructure.q69_1.s() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var ix = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlinx.datetime.internal.format.parser.ParseResult.match' call
            var this_0 = parserStructure.q69_1.u(ix).s69(output, input, inputPosition);
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
        if (parserStructure.r69_1.h()) {
          if (false || inputPosition === charSequenceLength(input)) {
            return output;
          } else {
            var tmp_0 = inputPosition;
            var it_0 = new ParseError(tmp_0, Parser$match$lambda);
            errors.n(it_0);
          }
        } else {
          var inductionVariable_0 = parserStructure.r69_1.s() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var ix_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              parseOptions.n(new ParserState(output, parserStructure.r69_1.u(ix_0), inputPosition));
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
      tmp = (tmp_0 == null ? null : new Parser(tmp_0)).t69.call(new Parser($this), input, initialContainer, startIndex);
    }
    return tmp;
  }
  function ParserState(output, parserStructure, inputPosition) {
    this.m69_1 = output;
    this.n69_1 = parserStructure;
    this.o69_1 = inputPosition;
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
    var tmp0_other_with_cast = other instanceof Parser ? other.p69_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.u69_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).pf = function (a, b) {
    return this.u69_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.pf(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).u3 = function () {
    return this.u69_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u3(), other.u3());
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
    return hashCode(this.u3());
  };
  function Parser$match$lambda() {
    return 'There is more input to consume';
  }
  function Parser$match$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.i69_1;
    var tmp$ret$1 = a.i69_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Parser(commands) {
    this.p69_1 = commands;
  }
  protoOf(Parser).toString = function () {
    return Parser__toString_impl_x33iea(this.p69_1);
  };
  protoOf(Parser).hashCode = function () {
    return Parser__hashCode_impl_bbxllf(this.p69_1);
  };
  protoOf(Parser).equals = function (other) {
    return Parser__equals_impl_djxokv(this.p69_1, other);
  };
  function ParserStructure(operations, followedBy) {
    this.q69_1 = operations;
    this.r69_1 = followedBy;
  }
  protoOf(ParserStructure).toString = function () {
    return joinToString(this.q69_1, ', ') + '(' + joinToString(this.r69_1, ';') + ')';
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
      while (iterator.k5()) {
        var tmp2 = iterator.m5();
        var acc = accumulator;
        accumulator = concat$append(tmp2, acc);
      }
    }
    var naiveParser = accumulator;
    return concat$simplify(naiveParser, emptyList());
  }
  function formatError(errors) {
    if (errors.s() === 1) {
      return 'Position ' + errors.u(0).i69_1 + ': ' + errors.u(0).j69_1();
    }
    var averageMessageLength = 33;
    var tmp0_buffer = StringBuilder_init_$Create$(imul(averageMessageLength, errors.s()));
    return joinTo(errors, tmp0_buffer, ', ', 'Errors: ', VOID, VOID, VOID, formatError$lambda).toString();
  }
  function concat$append(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4.r69_1.h()) {
      tmp = new ParserStructure(plus(_this__u8e3s4.q69_1, other.q69_1), other.r69_1);
    } else {
      // Inline function 'kotlin.collections.map' call
      var this_0 = _this__u8e3s4.r69_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.p();
      while (_iterator__ex2g4s.q()) {
        var item = _iterator__ex2g4s.r();
        var tmp$ret$0 = concat$append(item, other);
        destination.n(tmp$ret$0);
      }
      tmp = new ParserStructure(_this__u8e3s4.q69_1, destination);
    }
    return tmp;
  }
  function concat$simplify(_this__u8e3s4, unconditionalModifications) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var newOperations = ArrayList_init_$Create$_0();
    var currentNumberSpan = null;
    var unconditionalModificationsForTails = toMutableList(unconditionalModifications);
    var tmp0_iterator = _this__u8e3s4.q69_1.p();
    while (tmp0_iterator.q()) {
      var op = tmp0_iterator.r();
      if (op instanceof NumberSpanParserOperation) {
        if (!(currentNumberSpan == null)) {
          currentNumberSpan.t(op.v69_1);
        } else {
          currentNumberSpan = toMutableList(op.v69_1);
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
    var tmp0 = _this__u8e3s4.r69_1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var simplified = concat$simplify(element, unconditionalModificationsForTails);
      var tmp;
      if (simplified.q69_1.h()) {
        // Inline function 'kotlin.collections.ifEmpty' call
        var this_0 = simplified.r69_1;
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
          var tmp0_safe_receiver = firstOrNull(element_0.q69_1);
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
          var firstOperation = firstOrNull(item.q69_1);
          var tmp_5;
          if (firstOperation instanceof NumberSpanParserOperation) {
            tmp_5 = new ParserStructure(plus(listOf_0(new NumberSpanParserOperation(plus(currentNumberSpan, firstOperation.v69_1))), drop(item.q69_1, 1)), item.r69_1);
          } else {
            if (firstOperation == null) {
              tmp_5 = new ParserStructure(listOf_0(new NumberSpanParserOperation(currentNumberSpan)), item.r69_1);
            } else {
              tmp_5 = new ParserStructure(plus(listOf_0(new NumberSpanParserOperation(currentNumberSpan)), item.q69_1), item.r69_1);
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
    return 'position ' + it.i69_1 + ": '" + it.j69_1() + "'";
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
    this.y69_1 = children;
    this.z69_1 = isTerminal;
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.a6a_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).pf = function (a, b) {
    return this.a6a_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.pf(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).u3 = function () {
    return this.a6a_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u3(), other.u3());
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
    return hashCode(this.u3());
  };
  function _init_$reduceTrie(trie) {
    var tmp0_iterator = trie.y69_1.p();
    while (tmp0_iterator.q()) {
      var child = tmp0_iterator.r().ec();
      _init_$reduceTrie(child);
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var newChildren = ArrayList_init_$Create$_0();
    var tmp2_iterator = trie.y69_1.p();
    while (tmp2_iterator.q()) {
      var tmp3_loop_parameter = tmp2_iterator.r();
      var key = tmp3_loop_parameter.dc();
      var child_0 = tmp3_loop_parameter.ec();
      if (!child_0.z69_1 && child_0.y69_1.s() === 1) {
        var tmp4_container = single(child_0.y69_1);
        var grandChildKey = tmp4_container.dc();
        var grandChild = tmp4_container.ec();
        newChildren.n(to(key + grandChildKey, grandChild));
      } else {
        newChildren.n(to(key, child_0));
      }
    }
    trie.y69_1.g2();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = StringSetParserOperation$reduceTrie$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
    var tmp$ret$2 = sortedWith(newChildren, tmp$ret$1);
    trie.y69_1.t(tmp$ret$2);
  }
  function StringSetParserOperation$lambda($key) {
    return function (it) {
      var tmp$ret$0 = it.bc_1;
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
      return 'Expected ' + this$0.c6a_1 + ' but got ' + tmp$ret$0;
    };
  }
  function StringSetParserOperation$reduceTrie$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.bc_1;
    var tmp$ret$1 = b.bc_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function StringSetParserOperation(strings, setter, whatThisExpects) {
    this.b6a_1 = setter;
    this.c6a_1 = whatThisExpects;
    this.d6a_1 = new TrieNode();
    var tmp0_iterator = strings.p();
    while (tmp0_iterator.q()) {
      var string = tmp0_iterator.r();
      // Inline function 'kotlin.text.isNotEmpty' call
      // Inline function 'kotlin.require' call
      if (!(charSequenceLength(string) > 0)) {
        var message = 'Found an empty string in ' + this.c6a_1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var node = this.d6a_1;
      var inductionVariable = 0;
      var last = string.length;
      while (inductionVariable < last) {
        var char = charSequenceGet(string, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        var tmp2 = node.y69_1;
        // Inline function 'kotlin.collections.binarySearchBy' call
        var key = toString_0(char);
        var toIndex = tmp2.s();
        var searchResult = binarySearch(tmp2, 0, toIndex, StringSetParserOperation$lambda(key));
        var tmp;
        if (searchResult < 0) {
          // Inline function 'kotlin.also' call
          var this_0 = new TrieNode();
          node.y69_1.i2((-searchResult | 0) - 1 | 0, to(toString_0(char), this_0));
          tmp = this_0;
        } else {
          tmp = node.y69_1.u(searchResult).cc_1;
        }
        node = tmp;
      }
      // Inline function 'kotlin.require' call
      if (!!node.z69_1) {
        var message_0 = "The string '" + string + "' was passed several times";
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      node.z69_1 = true;
    }
    _init_$reduceTrie(this.d6a_1);
  }
  protoOf(StringSetParserOperation).s69 = function (storage, input, startIndex) {
    var node = this.d6a_1;
    var index = {_v: startIndex};
    var lastMatch = null;
    loop: while (index._v <= charSequenceLength(input)) {
      if (node.z69_1)
        lastMatch = index._v;
      var tmp0_iterator = node.y69_1.p();
      while (tmp0_iterator.q()) {
        var tmp1_loop_parameter = tmp0_iterator.r();
        var key = tmp1_loop_parameter.dc();
        var child = tmp1_loop_parameter.ec();
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
      tmp = setWithoutReassigning_0(this.b6a_1, storage, tmp$ret$0, startIndex, lastMatch);
    } else {
      var tmp_0 = Companion_instance_13;
      tmp = tmp_0.l69(startIndex, StringSetParserOperation$consume$lambda(this, input, startIndex, index));
    }
    return tmp;
  };
  function _get_whatThisExpects__4pg11j($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.v69_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var length = item.a();
      var tmp$ret$0 = (length == null ? 'at least one digit' : '' + length + ' digits') + (' for ' + item.s68_1);
      destination.n(tmp$ret$0);
    }
    var consumerLengths = destination;
    var tmp;
    if ($this.x69_1) {
      tmp = 'a number with at least ' + $this.w69_1 + ' digits: ' + toString(consumerLengths);
    } else {
      tmp = 'a number with exactly ' + $this.w69_1 + ' digits: ' + toString(consumerLengths);
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
      return "Can not interpret the string '" + $numberString + "' as " + this$0.v69_1.u($i).s68_1 + ': ' + $error.x68();
    };
  }
  function NumberSpanParserOperation(consumers) {
    this.v69_1 = consumers;
    var tmp = this;
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = this.v69_1.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp_0 = sum;
      var tmp0_elvis_lhs = element.a();
      sum = tmp_0 + (tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs) | 0;
    }
    tmp.w69_1 = sum;
    var tmp_1 = this;
    var tmp0 = this.v69_1;
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
    tmp_1.x69_1 = tmp$ret$2;
    var tmp0_0 = this.v69_1;
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
    var tmp3 = this.v69_1;
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
      var tmp0_1 = this.v69_1;
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
        var tmp$ret$14 = item.s68_1;
        destination_0.n(tmp$ret$14);
      }
      var fieldNames = destination_0;
      var message_0 = 'At most one variable-length numeric field in a row is allowed, but got several: ' + toString(fieldNames) + '. ' + 'Parsing is undefined: for example, with variable-length month number ' + "and variable-length day of month, '111' can be parsed as Jan 11th or Nov 1st.";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(NumberSpanParserOperation).s69 = function (storage, input, startIndex) {
    if ((startIndex + this.w69_1 | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_13;
      return tmp.l69(startIndex, NumberSpanParserOperation$consume$lambda(this));
    }
    var digitsInRow = {_v: 0};
    while ((startIndex + digitsInRow._v | 0) < charSequenceLength(input) && isAsciiDigit(charSequenceGet(input, startIndex + digitsInRow._v | 0))) {
      digitsInRow._v = digitsInRow._v + 1 | 0;
      digitsInRow._v;
    }
    if (digitsInRow._v < this.w69_1) {
      var tmp_0 = Companion_instance_13;
      return tmp_0.l69(startIndex, NumberSpanParserOperation$consume$lambda_0(digitsInRow, this));
    }
    var index = startIndex;
    var inductionVariable = 0;
    var last = this.v69_1.s() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_elvis_lhs = this.v69_1.u(i).a();
        var length = tmp1_elvis_lhs == null ? (digitsInRow._v - this.w69_1 | 0) + 1 | 0 : tmp1_elvis_lhs;
        var error = this.v69_1.u(i).t68(storage, input, index, index + length | 0);
        if (!(error == null)) {
          var tmp1 = index;
          // Inline function 'kotlin.text.substring' call
          var endIndex = index + length | 0;
          var numberString = toString(charSequenceSubSequence(input, tmp1, endIndex));
          var tmp_1 = Companion_instance_13;
          var tmp_2 = index;
          return tmp_1.l69(tmp_2, NumberSpanParserOperation$consume$lambda_1(numberString, this, i, error));
        }
        index = index + length | 0;
      }
       while (inductionVariable <= last);
    return Companion_instance_13.k69(index);
  };
  protoOf(NumberSpanParserOperation).toString = function () {
    return _get_whatThisExpects__4pg11j(this);
  };
  function PlainStringParserOperation$consume$lambda(this$0) {
    return function () {
      return "Unexpected end of input: yet to parse '" + this$0.e6a_1 + "'";
    };
  }
  function PlainStringParserOperation$consume$lambda_0(this$0, $input, $startIndex, $i) {
    return function () {
      var tmp0 = $input;
      var tmp1 = $startIndex;
      // Inline function 'kotlin.text.substring' call
      var endIndex = ($startIndex + $i | 0) + 1 | 0;
      var tmp$ret$0 = toString(charSequenceSubSequence(tmp0, tmp1, endIndex));
      return 'Expected ' + this$0.e6a_1 + ' but got ' + tmp$ret$0;
    };
  }
  function PlainStringParserOperation(string) {
    this.e6a_1 = string;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.e6a_1;
    // Inline function 'kotlin.require' call
    if (!(charSequenceLength(this_0) > 0)) {
      var message = 'Empty string is not allowed';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.e6a_1, 0))) {
      var message_0 = "String '" + this.e6a_1 + "' starts with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.e6a_1, this.e6a_1.length - 1 | 0))) {
      var message_1 = "String '" + this.e6a_1 + "' ends with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  protoOf(PlainStringParserOperation).s69 = function (storage, input, startIndex) {
    if ((startIndex + this.e6a_1.length | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_13;
      return tmp.l69(startIndex, PlainStringParserOperation$consume$lambda(this));
    }
    var inductionVariable = 0;
    var last = charSequenceLength(this.e6a_1) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet(input, startIndex + i | 0) === charSequenceGet(this.e6a_1, i))) {
          var tmp_0 = Companion_instance_13;
          return tmp_0.l69(startIndex, PlainStringParserOperation$consume$lambda_0(this, input, startIndex, i));
        }
      }
       while (inductionVariable <= last);
    return Companion_instance_13.k69(startIndex + this.e6a_1.length | 0);
  };
  protoOf(PlainStringParserOperation).toString = function () {
    return "'" + this.e6a_1 + "'";
  };
  function SignParser$consume$lambda(this$0, $char) {
    return function () {
      return 'Expected ' + this$0.h6a_1 + ' but got ' + toString_0($char);
    };
  }
  function SignParser(isNegativeSetter, withPlusSign, whatThisExpects) {
    this.f6a_1 = isNegativeSetter;
    this.g6a_1 = withPlusSign;
    this.h6a_1 = whatThisExpects;
  }
  protoOf(SignParser).s69 = function (storage, input, startIndex) {
    if (startIndex >= charSequenceLength(input))
      return Companion_instance_13.k69(startIndex);
    var char = charSequenceGet(input, startIndex);
    if (char === _Char___init__impl__6a9atx(45)) {
      this.f6a_1(storage, true);
      return Companion_instance_13.k69(startIndex + 1 | 0);
    }
    if (char === _Char___init__impl__6a9atx(43) && this.g6a_1) {
      this.f6a_1(storage, false);
      return Companion_instance_13.k69(startIndex + 1 | 0);
    }
    var tmp = Companion_instance_13;
    return tmp.l69(startIndex, SignParser$consume$lambda(this, char));
  };
  protoOf(SignParser).toString = function () {
    return this.h6a_1;
  };
  function UnconditionalModification(operation) {
    this.i6a_1 = operation;
  }
  protoOf(UnconditionalModification).s69 = function (storage, input, startIndex) {
    this.i6a_1(storage);
    return Companion_instance_13.k69(startIndex);
  };
  function setWithoutReassigning_0(_this__u8e3s4, receiver, value, position, nextIndex) {
    var conflictingValue = _this__u8e3s4.s66(receiver, value);
    var tmp;
    if (conflictingValue === null) {
      tmp = Companion_instance_13.k69(nextIndex);
    } else {
      var tmp_0 = Companion_instance_13;
      tmp = tmp_0.l69(position, setWithoutReassigning$lambda(conflictingValue, value, _this__u8e3s4));
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
    var tmp$ret$4 = this_0.x3();
    return new ParserStructure(tmp$ret$4, emptyList());
  }
  function setWithoutReassigning$lambda($conflictingValue, $value, $this_setWithoutReassigning) {
    return function () {
      return "Attempting to assign conflicting values '" + toString_1($conflictingValue) + "' and '" + toString_1($value) + "' to field '" + $this_setWithoutReassigning.u2() + "'";
    };
  }
  function get_POWERS_OF_TEN() {
    _init_properties_math_kt__tgcmt4();
    return POWERS_OF_TEN;
  }
  var POWERS_OF_TEN;
  function DecimalFraction(fractionalPart, digits) {
    this.t63_1 = fractionalPart;
    this.u63_1 = digits;
    // Inline function 'kotlin.require' call
    if (!(this.u63_1 >= 0)) {
      var message = 'Digits must be non-negative, but was ' + this.u63_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DecimalFraction).v63 = function (newDigits) {
    return newDigits === this.u63_1 ? this.t63_1 : newDigits > this.u63_1 ? imul(this.t63_1, get_POWERS_OF_TEN()[newDigits - this.u63_1 | 0]) : this.t63_1 / get_POWERS_OF_TEN()[this.u63_1 - newDigits | 0] | 0;
  };
  protoOf(DecimalFraction).j6a = function (other) {
    var tmp0 = this.u63_1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = other.u63_1;
    // Inline function 'kotlin.let' call
    var maxPrecision = Math.max(tmp0, b);
    return compareTo(this.v63(maxPrecision), other.v63(maxPrecision));
  };
  protoOf(DecimalFraction).d = function (other) {
    return this.j6a(other instanceof DecimalFraction ? other : THROW_CCE());
  };
  protoOf(DecimalFraction).equals = function (other) {
    var tmp;
    if (other instanceof DecimalFraction) {
      tmp = this.j6a(other) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DecimalFraction).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    var denominator = get_POWERS_OF_TEN()[this.u63_1];
    this_0.ae(this.t63_1 / denominator | 0);
    this_0.z8(_Char___init__impl__6a9atx(46));
    this_0.y8(removePrefix((denominator + (this.t63_1 % denominator | 0) | 0).toString(), '1'));
    return this_0.toString();
  };
  protoOf(DecimalFraction).hashCode = function () {
    throw UnsupportedOperationException_init_$Create$('DecimalFraction is not supposed to be used as a hash key');
  };
  function DivRemResult(q, r) {
    this.k6a_1 = q;
    this.l6a_1 = r;
  }
  protoOf(DivRemResult).dc = function () {
    return this.k6a_1;
  };
  protoOf(DivRemResult).ec = function () {
    return this.l6a_1;
  };
  function multiplyAndDivide(a, b, c) {
    _init_properties_math_kt__tgcmt4();
    if (a.equals(new Long(0, 0)) || b.equals(new Long(0, 0)))
      return new DivRemResult(new Long(0, 0), new Long(0, 0));
    var ab = safeMultiplyOrZero(a, b);
    if (!ab.equals(new Long(0, 0)))
      return new DivRemResult(ab.e3(c), ab.f3(c));
    if (b.equals(c))
      return new DivRemResult(a, new Long(0, 0));
    if (a.equals(c))
      return new DivRemResult(b, new Long(0, 0));
    var ae = a.g1(new Long(0, 0)) >= 0 ? new Long(0, 0) : new Long(-1, -1);
    var be = b.g1(new Long(0, 0)) >= 0 ? new Long(0, 0) : new Long(-1, -1);
    // Inline function 'kotlinx.datetime.internal.low' call
    var al = a.o3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.high' call
    var ah = a.m3(32).o3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.low' call
    var bl = b.o3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.high' call
    var bh = b.m3(32).o3(new Long(-1, 0));
    var w = ae.d3(bh).b3(ah.d3(be));
    var x = ae.d3(bl).b3(ah.d3(bh)).b3(al.d3(be));
    var y1 = ah.d3(bl);
    var y2 = al.d3(bh);
    var z = al.d3(bl);
    // Inline function 'kotlinx.datetime.internal.low' call
    var r4 = z.o3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.low' call
    var tmp = y1.o3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.low' call
    var tmp$ret$6 = y2.o3(new Long(-1, 0));
    var tmp_0 = tmp.b3(tmp$ret$6);
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp$ret$7 = z.m3(32).o3(new Long(-1, 0));
    var r3c = tmp_0.b3(tmp$ret$7);
    // Inline function 'kotlinx.datetime.internal.low' call
    var r3 = r3c.o3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp_1 = r3c.m3(32).o3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.low' call
    var tmp$ret$10 = x.o3(new Long(-1, 0));
    var tmp_2 = tmp_1.b3(tmp$ret$10);
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp$ret$11 = y1.m3(32).o3(new Long(-1, 0));
    var tmp_3 = tmp_2.b3(tmp$ret$11);
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp$ret$12 = y2.m3(32).o3(new Long(-1, 0));
    var r2c = tmp_3.b3(tmp$ret$12);
    // Inline function 'kotlinx.datetime.internal.low' call
    var r2 = r2c.o3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp_4 = r2c.m3(32).o3(new Long(-1, 0));
    // Inline function 'kotlinx.datetime.internal.high' call
    var tmp$ret$15 = x.m3(32).o3(new Long(-1, 0));
    var tmp_5 = tmp_4.b3(tmp$ret$15);
    // Inline function 'kotlinx.datetime.internal.low' call
    var tmp$ret$16 = w.o3(new Long(-1, 0));
    var r1 = tmp_5.b3(tmp$ret$16);
    var abl = r3.l3(32).p3(r4);
    var abh = r1.l3(32).p3(r2);
    var tmp_6;
    // Inline function 'kotlinx.datetime.internal.indexBit' call
    if (abh.m3(63).o3(new Long(1, 0)).equals(new Long(1, 0))) {
      tmp_6 = -1;
    } else {
      tmp_6 = 1;
    }
    var sign = tmp_6;
    if (sign === -1) {
      // Inline function 'kotlin.Long.plus' call
      abl = abl.j3().b3(toLong(1));
      abh = abh.j3();
      if (abl.equals(new Long(0, 0))) {
        // Inline function 'kotlin.Long.plus' call
        abh = abh.b3(toLong(1));
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
          tmp_7 = abl.m3(bitNo).o3(new Long(1, 0));
        } else {
          var tmp21 = abh;
          // Inline function 'kotlinx.datetime.internal.indexBit' call
          var bit = bitNo - 64 | 0;
          tmp_7 = tmp21.m3(bit).o3(new Long(1, 0));
        }
        var nextBit = tmp_7;
        r = r.l3(1).p3(nextBit);
        if (r.g1(c) >= 0 || r.g1(new Long(0, 0)) < 0) {
          r = r.c3(c);
          if (bitNo < 63)
            q = q.p3((new Long(1, 0)).l3(bitNo));
          else
            throw ArithmeticException_init_$Create$('The result of a multiplication followed by division overflows a long');
        }
      }
       while (0 <= inductionVariable);
    return new DivRemResult(numberToLong(sign).d3(q), numberToLong(sign).d3(r));
  }
  function safeMultiplyOrZero(a, b) {
    _init_properties_math_kt__tgcmt4();
    if (b.equals(new Long(-1, -1))) {
      if (a.equals(new Long(0, -2147483648))) {
        return new Long(0, 0);
      }
      return a.i3();
    } else if (b.equals(new Long(1, 0)))
      return a;
    var total = a.d3(b);
    if (!total.e3(b).equals(a)) {
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
    var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).u20();
    $this$buildClassSerialDescriptor.d23(elementName, descriptor, annotations, false);
    return Unit_instance;
  }
  function TimeBasedDateTimeUnitSerializer() {
    TimeBasedDateTimeUnitSerializer_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.m6a_1 = lazy_0(tmp_0, TimeBasedDateTimeUnitSerializer$descriptor$delegate$lambda);
  }
  protoOf(TimeBasedDateTimeUnitSerializer).u20 = function () {
    var tmp0 = this.m6a_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.b1();
  };
  protoOf(TimeBasedDateTimeUnitSerializer).n6a = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.u20();
    var composite = encoder.h24(descriptor);
    composite.s25(TimeBasedDateTimeUnitSerializer_getInstance().u20(), 0, value.i5v_1);
    composite.i24(descriptor);
  };
  protoOf(TimeBasedDateTimeUnitSerializer).v20 = function (encoder, value) {
    return this.n6a(encoder, value instanceof TimeBased ? value : THROW_CCE());
  };
  protoOf(TimeBasedDateTimeUnitSerializer).w20 = function (decoder) {
    var seen = {_v: false};
    var nanoseconds = {_v: new Long(0, 0)};
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.u20();
    var composite = decoder.h24(descriptor);
    if (composite.x24()) {
      nanoseconds._v = composite.n24(TimeBasedDateTimeUnitSerializer_getInstance().u20(), 0);
      seen._v = true;
    } else {
      loop: while (true) {
        var elementIndex = composite.y24(TimeBasedDateTimeUnitSerializer_getInstance().u20());
        switch (elementIndex) {
          case 0:
            nanoseconds._v = composite.n24(TimeBasedDateTimeUnitSerializer_getInstance().u20(), 0);
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
    composite.i24(descriptor);
    if (!seen._v)
      throw MissingFieldException_init_$Create$('nanoseconds', this.u20().v21());
    return new TimeBased(nanoseconds._v);
  };
  var TimeBasedDateTimeUnitSerializer_instance;
  function TimeBasedDateTimeUnitSerializer_getInstance() {
    if (TimeBasedDateTimeUnitSerializer_instance == null)
      new TimeBasedDateTimeUnitSerializer();
    return TimeBasedDateTimeUnitSerializer_instance;
  }
  function _get_impl__d88w17($this) {
    var tmp0 = $this.o6a_1;
    // Inline function 'kotlin.getValue' call
    impl$factory();
    return tmp0.b1();
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
    tmp.o6a_1 = lazy_0(tmp_0, DateBasedDateTimeUnitSerializer$impl$delegate$lambda);
  }
  protoOf(DateBasedDateTimeUnitSerializer).l21 = function (decoder, klassName) {
    return _get_impl__d88w17(this).l21(decoder, klassName);
  };
  protoOf(DateBasedDateTimeUnitSerializer).p6a = function (encoder, value) {
    return _get_impl__d88w17(this).m21(encoder, value);
  };
  protoOf(DateBasedDateTimeUnitSerializer).m21 = function (encoder, value) {
    return this.p6a(encoder, value instanceof DateBased ? value : THROW_CCE());
  };
  protoOf(DateBasedDateTimeUnitSerializer).j21 = function () {
    return getKClass(DateBased);
  };
  protoOf(DateBasedDateTimeUnitSerializer).u20 = function () {
    return _get_impl__d88w17(this).u20();
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
    var this_0 = serializer(createKType(PrimitiveClasses_getInstance().jd(), arrayOf([]), false));
    var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).u20();
    $this$buildClassSerialDescriptor.d23('days', descriptor, annotations, false);
    return Unit_instance;
  }
  function DayBasedDateTimeUnitSerializer() {
    DayBasedDateTimeUnitSerializer_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.q6a_1 = lazy_0(tmp_0, DayBasedDateTimeUnitSerializer$descriptor$delegate$lambda);
  }
  protoOf(DayBasedDateTimeUnitSerializer).u20 = function () {
    var tmp0 = this.q6a_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return tmp0.b1();
  };
  protoOf(DayBasedDateTimeUnitSerializer).r6a = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.u20();
    var composite = encoder.h24(descriptor);
    composite.r25(DayBasedDateTimeUnitSerializer_getInstance().u20(), 0, value.o5v_1);
    composite.i24(descriptor);
  };
  protoOf(DayBasedDateTimeUnitSerializer).v20 = function (encoder, value) {
    return this.r6a(encoder, value instanceof DayBased ? value : THROW_CCE());
  };
  protoOf(DayBasedDateTimeUnitSerializer).w20 = function (decoder) {
    var seen = {_v: false};
    var days = {_v: 0};
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.u20();
    var composite = decoder.h24(descriptor);
    if (composite.x24()) {
      days._v = composite.m24(DayBasedDateTimeUnitSerializer_getInstance().u20(), 0);
      seen._v = true;
    } else {
      loop: while (true) {
        var elementIndex = composite.y24(DayBasedDateTimeUnitSerializer_getInstance().u20());
        switch (elementIndex) {
          case 0:
            days._v = composite.m24(DayBasedDateTimeUnitSerializer_getInstance().u20(), 0);
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
    composite.i24(descriptor);
    if (!seen._v)
      throw MissingFieldException_init_$Create$('days', this.u20().v21());
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
    var this_0 = serializer(createKType(PrimitiveClasses_getInstance().jd(), arrayOf([]), false));
    var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).u20();
    $this$buildClassSerialDescriptor.d23('months', descriptor, annotations, false);
    return Unit_instance;
  }
  function MonthBasedDateTimeUnitSerializer() {
    MonthBasedDateTimeUnitSerializer_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.s6a_1 = lazy_0(tmp_0, MonthBasedDateTimeUnitSerializer$descriptor$delegate$lambda);
  }
  protoOf(MonthBasedDateTimeUnitSerializer).u20 = function () {
    var tmp0 = this.s6a_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_1();
    return tmp0.b1();
  };
  protoOf(MonthBasedDateTimeUnitSerializer).t6a = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.u20();
    var composite = encoder.h24(descriptor);
    composite.r25(MonthBasedDateTimeUnitSerializer_getInstance().u20(), 0, value.p5v_1);
    composite.i24(descriptor);
  };
  protoOf(MonthBasedDateTimeUnitSerializer).v20 = function (encoder, value) {
    return this.t6a(encoder, value instanceof MonthBased ? value : THROW_CCE());
  };
  protoOf(MonthBasedDateTimeUnitSerializer).w20 = function (decoder) {
    var seen = {_v: false};
    var months = {_v: 0};
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.u20();
    var composite = decoder.h24(descriptor);
    if (composite.x24()) {
      months._v = composite.m24(MonthBasedDateTimeUnitSerializer_getInstance().u20(), 0);
      seen._v = true;
    } else {
      loop: while (true) {
        var elementIndex = composite.y24(MonthBasedDateTimeUnitSerializer_getInstance().u20());
        switch (elementIndex) {
          case 0:
            months._v = composite.m24(MonthBasedDateTimeUnitSerializer_getInstance().u20(), 0);
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
    composite.i24(descriptor);
    if (!seen._v)
      throw MissingFieldException_init_$Create$('months', this.u20().v21());
    return new MonthBased(months._v);
  };
  var MonthBasedDateTimeUnitSerializer_instance;
  function MonthBasedDateTimeUnitSerializer_getInstance() {
    if (MonthBasedDateTimeUnitSerializer_instance == null)
      new MonthBasedDateTimeUnitSerializer();
    return MonthBasedDateTimeUnitSerializer_instance;
  }
  function _get_impl__d88w17_0($this) {
    var tmp0 = $this.u6a_1;
    // Inline function 'kotlin.getValue' call
    impl$factory_0();
    return tmp0.b1();
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
    tmp.u6a_1 = lazy_0(tmp_0, DateTimeUnitSerializer$impl$delegate$lambda);
  }
  protoOf(DateTimeUnitSerializer).l21 = function (decoder, klassName) {
    return _get_impl__d88w17_0(this).l21(decoder, klassName);
  };
  protoOf(DateTimeUnitSerializer).v6a = function (encoder, value) {
    return _get_impl__d88w17_0(this).m21(encoder, value);
  };
  protoOf(DateTimeUnitSerializer).m21 = function (encoder, value) {
    return this.v6a(encoder, value instanceof DateTimeUnit ? value : THROW_CCE());
  };
  protoOf(DateTimeUnitSerializer).j21 = function () {
    return getKClass(DateTimeUnit);
  };
  protoOf(DateTimeUnitSerializer).u20 = function () {
    return _get_impl__d88w17_0(this).u20();
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
      return receiver.u20();
    }, null);
  }
  function impl$factory() {
    return getPropertyCallableRef('impl', 1, KProperty1, function (receiver) {
      return _get_impl__d88w17(receiver);
    }, null);
  }
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.u20();
    }, null);
  }
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.u20();
    }, null);
  }
  function impl$factory_0() {
    return getPropertyCallableRef('impl', 1, KProperty1, function (receiver) {
      return _get_impl__d88w17_0(receiver);
    }, null);
  }
  function InstantIso8601Serializer() {
    InstantIso8601Serializer_instance = this;
    this.w6a_1 = PrimitiveSerialDescriptor('kotlinx.datetime.Instant', STRING_getInstance());
  }
  protoOf(InstantIso8601Serializer).u20 = function () {
    return this.w6a_1;
  };
  protoOf(InstantIso8601Serializer).w20 = function (decoder) {
    return Companion_getInstance_15().x6a(decoder.c24());
  };
  protoOf(InstantIso8601Serializer).y6a = function (encoder, value) {
    encoder.l25(value.toString());
  };
  protoOf(InstantIso8601Serializer).v20 = function (encoder, value) {
    return this.y6a(encoder, value instanceof Instant_0 ? value : THROW_CCE());
  };
  var InstantIso8601Serializer_instance;
  function InstantIso8601Serializer_getInstance() {
    if (InstantIso8601Serializer_instance == null)
      new InstantIso8601Serializer();
    return InstantIso8601Serializer_instance;
  }
  function LocalDateIso8601Serializer() {
    LocalDateIso8601Serializer_instance = this;
    this.z6a_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalDate', STRING_getInstance());
  }
  protoOf(LocalDateIso8601Serializer).u20 = function () {
    return this.z6a_1;
  };
  protoOf(LocalDateIso8601Serializer).w20 = function (decoder) {
    return Companion_getInstance_16().c6b(decoder.c24());
  };
  protoOf(LocalDateIso8601Serializer).d6b = function (encoder, value) {
    encoder.l25(value.toString());
  };
  protoOf(LocalDateIso8601Serializer).v20 = function (encoder, value) {
    return this.d6b(encoder, value instanceof LocalDate_0 ? value : THROW_CCE());
  };
  var LocalDateIso8601Serializer_instance;
  function LocalDateIso8601Serializer_getInstance() {
    if (LocalDateIso8601Serializer_instance == null)
      new LocalDateIso8601Serializer();
    return LocalDateIso8601Serializer_instance;
  }
  function LocalDateTimeIso8601Serializer() {
    LocalDateTimeIso8601Serializer_instance = this;
    this.e6b_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalDateTime', STRING_getInstance());
  }
  protoOf(LocalDateTimeIso8601Serializer).u20 = function () {
    return this.e6b_1;
  };
  protoOf(LocalDateTimeIso8601Serializer).w20 = function (decoder) {
    return Companion_getInstance_17().h6b(decoder.c24());
  };
  protoOf(LocalDateTimeIso8601Serializer).i6b = function (encoder, value) {
    encoder.l25(value.toString());
  };
  protoOf(LocalDateTimeIso8601Serializer).v20 = function (encoder, value) {
    return this.i6b(encoder, value instanceof LocalDateTime_0 ? value : THROW_CCE());
  };
  var LocalDateTimeIso8601Serializer_instance;
  function LocalDateTimeIso8601Serializer_getInstance() {
    if (LocalDateTimeIso8601Serializer_instance == null)
      new LocalDateTimeIso8601Serializer();
    return LocalDateTimeIso8601Serializer_instance;
  }
  function LocalTimeIso8601Serializer() {
    LocalTimeIso8601Serializer_instance = this;
    this.j6b_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalTime', STRING_getInstance());
  }
  protoOf(LocalTimeIso8601Serializer).u20 = function () {
    return this.j6b_1;
  };
  protoOf(LocalTimeIso8601Serializer).w20 = function (decoder) {
    return Companion_getInstance_18().m6b(decoder.c24());
  };
  protoOf(LocalTimeIso8601Serializer).n6b = function (encoder, value) {
    encoder.l25(value.toString());
  };
  protoOf(LocalTimeIso8601Serializer).v20 = function (encoder, value) {
    return this.n6b(encoder, value instanceof LocalTime_0 ? value : THROW_CCE());
  };
  var LocalTimeIso8601Serializer_instance;
  function LocalTimeIso8601Serializer_getInstance() {
    if (LocalTimeIso8601Serializer_instance == null)
      new LocalTimeIso8601Serializer();
    return LocalTimeIso8601Serializer_instance;
  }
  function UtcOffsetSerializer() {
    UtcOffsetSerializer_instance = this;
    this.o6b_1 = PrimitiveSerialDescriptor('kotlinx.datetime.UtcOffset', STRING_getInstance());
  }
  protoOf(UtcOffsetSerializer).u20 = function () {
    return this.o6b_1;
  };
  protoOf(UtcOffsetSerializer).w20 = function (decoder) {
    return Companion_getInstance_21().q6b(decoder.c24());
  };
  protoOf(UtcOffsetSerializer).r6b = function (encoder, value) {
    encoder.l25(value.toString());
  };
  protoOf(UtcOffsetSerializer).v20 = function (encoder, value) {
    return this.r6b(encoder, value instanceof UtcOffset ? value : THROW_CCE());
  };
  var UtcOffsetSerializer_instance;
  function UtcOffsetSerializer_getInstance() {
    if (UtcOffsetSerializer_instance == null)
      new UtcOffsetSerializer();
    return UtcOffsetSerializer_instance;
  }
  function TimeZoneSerializer() {
    TimeZoneSerializer_instance = this;
    this.s6b_1 = PrimitiveSerialDescriptor('kotlinx.datetime.TimeZone', STRING_getInstance());
  }
  protoOf(TimeZoneSerializer).u20 = function () {
    return this.s6b_1;
  };
  protoOf(TimeZoneSerializer).w20 = function (decoder) {
    return Companion_getInstance_19().u6b(decoder.c24());
  };
  protoOf(TimeZoneSerializer).v6b = function (encoder, value) {
    encoder.l25(value.x6b());
  };
  protoOf(TimeZoneSerializer).v20 = function (encoder, value) {
    return this.v6b(encoder, value instanceof TimeZone ? value : THROW_CCE());
  };
  var TimeZoneSerializer_instance;
  function TimeZoneSerializer_getInstance() {
    if (TimeZoneSerializer_instance == null)
      new TimeZoneSerializer();
    return TimeZoneSerializer_instance;
  }
  function FixedOffsetTimeZoneSerializer() {
    FixedOffsetTimeZoneSerializer_instance = this;
    this.y6b_1 = PrimitiveSerialDescriptor('kotlinx.datetime.FixedOffsetTimeZone', STRING_getInstance());
  }
  protoOf(FixedOffsetTimeZoneSerializer).u20 = function () {
    return this.y6b_1;
  };
  protoOf(FixedOffsetTimeZoneSerializer).w20 = function (decoder) {
    var zone = Companion_getInstance_19().u6b(decoder.c24());
    if (zone instanceof FixedOffsetTimeZone) {
      return zone;
    } else {
      throw SerializationException_init_$Create$("Timezone identifier '" + zone.toString() + "' does not correspond to a fixed-offset timezone");
    }
  };
  protoOf(FixedOffsetTimeZoneSerializer).z6b = function (encoder, value) {
    encoder.l25(value.x6b());
  };
  protoOf(FixedOffsetTimeZoneSerializer).v20 = function (encoder, value) {
    return this.z6b(encoder, value instanceof FixedOffsetTimeZone ? value : THROW_CCE());
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
    var tmp$ret$1 = Instant.ofEpochSecond((new Long(-931914497, -750)).t3(), 999999999);
    tmp.e5v_1 = new Instant_0(tmp$ret$1);
    var tmp_0 = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    var tmp$ret$3 = Instant.ofEpochSecond((new Long(1151527680, 720)).t3(), 0);
    tmp_0.f5v_1 = new Instant_0(tmp$ret$3);
    this.g5v_1 = new Instant_0(Instant.MIN);
    this.h5v_1 = new Instant_0(Instant.MAX);
  }
  protoOf(Companion_14).d5v = function () {
    return new Instant_0(Clock.systemUTC().instant());
  };
  protoOf(Companion_14).a6c = function (input, format) {
    var tmp;
    try {
      tmp = format.e61(input).q5z();
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
  protoOf(Companion_14).x6a = function (input, format, $super) {
    format = format === VOID ? Formats_getInstance().x5y_1 : format;
    return $super === VOID ? this.a6c(input, format) : $super.a6c.call(this, input, format);
  };
  protoOf(Companion_14).b6c = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      // Inline function 'kotlin.floorDiv' call
      var other = new Long(1000000000, 0);
      var q = nanosecondAdjustment.e3(other);
      if (nanosecondAdjustment.q3(other).g1(new Long(0, 0)) < 0 && !q.d3(other).equals(nanosecondAdjustment)) {
        q = q.h3();
      }
      var tmp$ret$0 = q;
      var secs = safeAdd(epochSeconds, tmp$ret$0);
      // Inline function 'kotlin.mod' call
      var other_0 = new Long(1000000000, 0);
      var r = nanosecondAdjustment.f3(other_0);
      var nos = r.b3(other_0.o3(r.q3(other_0).o3(r.p3(r.i3())).m3(63))).l1();
      // Inline function 'kotlinx.datetime.jsTry' call
      var tmp$ret$3 = Instant.ofEpochSecond(secs.t3(), nos);
      tmp = new Instant_0(tmp$ret$3);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_1;
        if (!isJodaDateTimeException(e)) {
          tmp_1 = !(e instanceof ArithmeticException);
        } else {
          tmp_1 = false;
        }
        if (tmp_1)
          throw e;
        tmp_0 = epochSeconds.g1(new Long(0, 0)) > 0 ? this.h5v_1 : this.g5v_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Companion_14).c6c = function (epochSeconds, nanosecondAdjustment, $super) {
    nanosecondAdjustment = nanosecondAdjustment === VOID ? new Long(0, 0) : nanosecondAdjustment;
    return $super === VOID ? this.b6c(epochSeconds, nanosecondAdjustment) : $super.b6c.call(this, epochSeconds, nanosecondAdjustment);
  };
  protoOf(Companion_14).a60 = function (epochSeconds, nanosecondAdjustment) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      var tmp$ret$1 = Instant.ofEpochSecond(epochSeconds.t3(), nanosecondAdjustment);
      tmp = new Instant_0(tmp$ret$1);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_0 = epochSeconds.g1(new Long(0, 0)) > 0 ? this.h5v_1 : this.g5v_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function Instant_0(value) {
    Companion_getInstance_15();
    this.y5z_1 = value;
  }
  protoOf(Instant_0).z5z = function () {
    return numberToLong(this.y5z_1.epochSecond());
  };
  protoOf(Instant_0).dp = function (duration) {
    // Inline function 'kotlin.time.Duration.toComponents' call
    var tmp1 = _Duration___get_inWholeSeconds__impl__hpy7b3(duration);
    var nanoseconds = _Duration___get_nanosecondsComponent__impl__nh19kq(duration);
    var tmp;
    try {
      tmp = new Instant_0(this.d6c(tmp1.t3(), nanoseconds));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_0 = Duration__isPositive_impl_tvkkt2(duration) ? Companion_getInstance_15().h5v_1 : Companion_getInstance_15().g5v_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).d6c = function (seconds, nanos) {
    var newSeconds = this.y5z_1.epochSecond() + seconds;
    var newNanos = this.y5z_1.nano() + nanos;
    // Inline function 'kotlinx.datetime.jsTry' call
    return Instant.ofEpochSecond(newSeconds, numberToInt(newNanos));
  };
  protoOf(Instant_0).e6c = function (duration) {
    return this.dp(Duration__unaryMinus_impl_x2k1y0(duration));
  };
  protoOf(Instant_0).f6c = function (other) {
    var diff = Duration.between(other.y5z_1, this.y5z_1);
    Companion_getInstance();
    // Inline function 'kotlin.time.Companion.seconds' call
    var this_0 = diff.seconds();
    var tmp = toDuration(this_0, DurationUnit_SECONDS_getInstance());
    Companion_getInstance();
    // Inline function 'kotlin.time.Companion.nanoseconds' call
    var this_1 = diff.nano();
    var tmp$ret$1 = toDuration(this_1, DurationUnit_NANOSECONDS_getInstance());
    return Duration__plus_impl_yu9v8f(tmp, tmp$ret$1);
  };
  protoOf(Instant_0).g6c = function (other) {
    return this.y5z_1.compareTo(other.y5z_1);
  };
  protoOf(Instant_0).d = function (other) {
    return this.g6c(other instanceof Instant_0 ? other : THROW_CCE());
  };
  protoOf(Instant_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = this.y5z_1 === other.y5z_1 || this.y5z_1.equals(other.y5z_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).hashCode = function () {
    return this.y5z_1.hashCode();
  };
  protoOf(Instant_0).toString = function () {
    return this.y5z_1.toString();
  };
  function plus_0(_this__u8e3s4, value, unit, timeZone) {
    var tmp;
    try {
      var thisZdt = atZone(_this__u8e3s4, timeZone);
      var tmp_0;
      if (unit instanceof TimeBased) {
        tmp_0 = checkZone(plus_1(_this__u8e3s4, toLong(value), unit).y5z_1, timeZone);
      } else {
        if (unit instanceof DayBased) {
          // Inline function 'kotlinx.datetime.jsTry' call
          tmp_0 = thisZdt.plusDays(value * unit.o5v_1).toInstant();
        } else {
          if (unit instanceof MonthBased) {
            // Inline function 'kotlinx.datetime.jsTry' call
            tmp_0 = thisZdt.plusMonths(value * unit.p5v_1).toInstant();
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
    return _this__u8e3s4.y5z_1.atZone(zone.w6b_1);
  }
  function checkZone(_this__u8e3s4, zone) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlinx.datetime.jsTry' call
    _this__u8e3s4.atZone(zone.w6b_1);
    return _this__u8e3s4;
  }
  function plus_1(_this__u8e3s4, value, unit) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var name_for_destructuring_parameter_0_fjsvno = multiplyAndDivide(value, unit.i5v_1, new Long(1000000000, 0));
      var d = name_for_destructuring_parameter_0_fjsvno.dc();
      var r = name_for_destructuring_parameter_0_fjsvno.ec();
      tmp = new Instant_0(_this__u8e3s4.d6c(d.t3(), r.l1()));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e)) {
          throw e;
        }
        tmp_0 = value.g1(new Long(0, 0)) > 0 ? Companion_getInstance_15().h5v_1 : Companion_getInstance_15().g5v_1;
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
    this.a6b_1 = new LocalDate_0(LocalDate.MIN);
    this.b6b_1 = new LocalDate_0(LocalDate.MAX);
  }
  protoOf(Companion_15).h6c = function (input, format) {
    var tmp;
    if (format === Formats_getInstance_0().d5w()) {
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
      tmp = format.e61(input);
    }
    return tmp;
  };
  protoOf(Companion_15).c6b = function (input, format, $super) {
    format = format === VOID ? getIsoDateFormat() : format;
    return $super === VOID ? this.h6c(input, format) : $super.h6c.call(this, input, format);
  };
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function Formats_0() {
    Formats_instance_0 = this;
    this.c5w_1 = get_ISO_DATE_BASIC();
  }
  protoOf(Formats_0).d5w = function () {
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
    Companion_getInstance_16();
    this.s5z_1 = value;
  }
  protoOf(LocalDate_0).x5w = function () {
    return this.s5z_1.year();
  };
  protoOf(LocalDate_0).v5w = function () {
    return this.s5z_1.monthValue();
  };
  protoOf(LocalDate_0).m61 = function () {
    return toMonth(this.s5z_1.month());
  };
  protoOf(LocalDate_0).p5w = function () {
    return this.s5z_1.dayOfMonth();
  };
  protoOf(LocalDate_0).n61 = function () {
    return toDayOfWeek(this.s5z_1.dayOfWeek());
  };
  protoOf(LocalDate_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDate_0) {
        tmp_0 = this.s5z_1 === other.s5z_1 || this.s5z_1.equals(other.s5z_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDate_0).hashCode = function () {
    return this.s5z_1.hashCode();
  };
  protoOf(LocalDate_0).toString = function () {
    return this.s5z_1.toString();
  };
  protoOf(LocalDate_0).i6c = function (other) {
    return this.s5z_1.compareTo(other.s5z_1);
  };
  protoOf(LocalDate_0).d = function (other) {
    return this.i6c(other instanceof LocalDate_0 ? other : THROW_CCE());
  };
  protoOf(LocalDate_0).t5z = function () {
    return numberToInt(this.s5z_1.toEpochDay());
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
        tmp_0 = _this__u8e3s4.s5z_1.plusDays(numberToInt(numberToDouble(value) * unit.o5v_1));
      } else {
        if (unit instanceof MonthBased) {
          // Inline function 'kotlinx.datetime.jsTry' call
          tmp_0 = _this__u8e3s4.s5z_1.plusMonths(numberToInt(numberToDouble(value) * unit.p5v_1));
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
    var tmp$ret$1 = LocalDateTime.of(date.s5z_1, time.u5z_1);
    LocalDateTime_0.call($this, tmp$ret$1);
    return $this;
  }
  function LocalDateTime_init_$Create$(date, time) {
    return LocalDateTime_init_$Init$(date, time, objectCreate(protoOf(LocalDateTime_0)));
  }
  function Companion_16() {
    Companion_instance_16 = this;
    this.f6b_1 = new LocalDateTime_0(LocalDateTime.MIN);
    this.g6b_1 = new LocalDateTime_0(LocalDateTime.MAX);
  }
  protoOf(Companion_16).j6c = function (input, format) {
    var tmp;
    if (format === Formats_getInstance_1().e5w_1) {
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
      tmp = format.e61(input);
    }
    return tmp;
  };
  protoOf(Companion_16).h6b = function (input, format, $super) {
    format = format === VOID ? getIsoDateTimeFormat() : format;
    return $super === VOID ? this.j6c(input, format) : $super.j6c.call(this, input, format);
  };
  var Companion_instance_16;
  function Companion_getInstance_17() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function Formats_1() {
    Formats_instance_1 = this;
    this.e5w_1 = get_ISO_DATETIME();
  }
  var Formats_instance_1;
  function Formats_getInstance_1() {
    if (Formats_instance_1 == null)
      new Formats_1();
    return Formats_instance_1;
  }
  function LocalDateTime_0(value) {
    Companion_getInstance_17();
    this.k6c_1 = value;
  }
  protoOf(LocalDateTime_0).l6c = function () {
    return new LocalDate_0(this.k6c_1.toLocalDate());
  };
  protoOf(LocalDateTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDateTime_0) {
        tmp_0 = this.k6c_1 === other.k6c_1 || this.k6c_1.equals(other.k6c_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDateTime_0).hashCode = function () {
    return this.k6c_1.hashCode();
  };
  protoOf(LocalDateTime_0).toString = function () {
    return this.k6c_1.toString();
  };
  protoOf(LocalDateTime_0).m6c = function (other) {
    return this.k6c_1.compareTo(other.k6c_1);
  };
  protoOf(LocalDateTime_0).d = function (other) {
    return this.m6c(other instanceof LocalDateTime_0 ? other : THROW_CCE());
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
    this.k6b_1 = new LocalTime_0(LocalTime.MIN);
    this.l6b_1 = new LocalTime_0(LocalTime.MAX);
  }
  protoOf(Companion_17).n6c = function (input, format) {
    var tmp;
    if (format === Formats_instance_2.d5w()) {
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
      tmp = format.e61(input);
    }
    return tmp;
  };
  protoOf(Companion_17).m6b = function (input, format, $super) {
    format = format === VOID ? getIsoTimeFormat() : format;
    return $super === VOID ? this.n6c(input, format) : $super.n6c.call(this, input, format);
  };
  var Companion_instance_17;
  function Companion_getInstance_18() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function Formats_2() {
  }
  protoOf(Formats_2).d5w = function () {
    return get_ISO_TIME();
  };
  var Formats_instance_2;
  function Formats_getInstance_2() {
    return Formats_instance_2;
  }
  function LocalTime_0(value) {
    Companion_getInstance_18();
    this.u5z_1 = value;
  }
  protoOf(LocalTime_0).v5z = function () {
    return this.u5z_1.toSecondOfDay();
  };
  protoOf(LocalTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalTime_0) {
        tmp_0 = this.u5z_1 === other.u5z_1 || this.u5z_1.equals(other.u5z_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalTime_0).hashCode = function () {
    return this.u5z_1.hashCode();
  };
  protoOf(LocalTime_0).toString = function () {
    return this.u5z_1.toString();
  };
  protoOf(LocalTime_0).o6c = function (other) {
    return this.u5z_1.compareTo(other.u5z_1);
  };
  protoOf(LocalTime_0).d = function (other) {
    return this.o6c(other instanceof LocalTime_0 ? other : THROW_CCE());
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
    this.t6b_1 = asTimeZone(new UtcOffset(ZoneOffset.UTC));
  }
  protoOf(Companion_18).p6c = function () {
    return ofZone(this, ZoneId.systemDefault());
  };
  protoOf(Companion_18).u6b = function (zoneId) {
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
  function Companion_getInstance_19() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function TimeZone(zoneId) {
    Companion_getInstance_19();
    this.w6b_1 = zoneId;
  }
  protoOf(TimeZone).x6b = function () {
    return this.w6b_1.id();
  };
  protoOf(TimeZone).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeZone) {
        tmp_0 = this.w6b_1 === other.w6b_1 || this.w6b_1.equals(other.w6b_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeZone).hashCode = function () {
    return this.w6b_1.hashCode();
  };
  protoOf(TimeZone).toString = function () {
    return this.w6b_1.toString();
  };
  function toLocalDateTime(_this__u8e3s4, timeZone) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlin.let' call
      var p0 = LocalDateTime.ofInstant(_this__u8e3s4.y5z_1, timeZone.w6b_1);
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
    var p0 = _this__u8e3s4.k6c_1.atZone(timeZone.w6b_1).toInstant();
    return new Instant_0(p0);
  }
  function FixedOffsetTimeZone_init_$Init$(offset, $this) {
    FixedOffsetTimeZone.call($this, offset, offset.w5z_1);
    return $this;
  }
  function FixedOffsetTimeZone_init_$Create$(offset) {
    return FixedOffsetTimeZone_init_$Init$(offset, objectCreate(protoOf(FixedOffsetTimeZone)));
  }
  function Companion_19() {
  }
  var Companion_instance_19;
  function Companion_getInstance_20() {
    return Companion_instance_19;
  }
  function FixedOffsetTimeZone(offset, zoneId) {
    TimeZone.call(this, zoneId);
    this.r6c_1 = offset;
  }
  function get_isoFormat() {
    _init_properties_UtcOffset_kt__93zod7();
    var tmp0 = isoFormat$delegate;
    // Inline function 'kotlin.getValue' call
    isoFormat$factory();
    return tmp0.b1();
  }
  var isoFormat$delegate;
  function get_isoBasicFormat() {
    _init_properties_UtcOffset_kt__93zod7();
    var tmp0 = isoBasicFormat$delegate;
    // Inline function 'kotlin.getValue' call
    isoBasicFormat$factory();
    return tmp0.b1();
  }
  var isoBasicFormat$delegate;
  function get_fourDigitsFormat() {
    _init_properties_UtcOffset_kt__93zod7();
    var tmp0 = fourDigitsFormat$delegate;
    // Inline function 'kotlin.getValue' call
    fourDigitsFormat$factory();
    return tmp0.b1();
  }
  var fourDigitsFormat$delegate;
  function Companion_20() {
    Companion_instance_20 = this;
    this.p6b_1 = new UtcOffset(ZoneOffset.UTC);
  }
  protoOf(Companion_20).s6c = function (input, format) {
    return format === Formats_instance_3.d5w() ? parseWithFormat(input, get_isoFormat()) : format === Formats_instance_3.t6c() ? parseWithFormat(input, get_isoBasicFormat()) : format === Formats_instance_3.v5y() ? parseWithFormat(input, get_fourDigitsFormat()) : format.e61(input);
  };
  protoOf(Companion_20).q6b = function (input, format, $super) {
    format = format === VOID ? getIsoUtcOffsetFormat() : format;
    return $super === VOID ? this.s6c(input, format) : $super.s6c.call(this, input, format);
  };
  var Companion_instance_20;
  function Companion_getInstance_21() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function Formats_3() {
  }
  protoOf(Formats_3).d5w = function () {
    return get_ISO_OFFSET();
  };
  protoOf(Formats_3).t6c = function () {
    return get_ISO_OFFSET_BASIC();
  };
  protoOf(Formats_3).v5y = function () {
    return get_FOUR_DIGIT_OFFSET();
  };
  var Formats_instance_3;
  function Formats_getInstance_3() {
    return Formats_instance_3;
  }
  function UtcOffset(zoneOffset) {
    Companion_getInstance_21();
    this.w5z_1 = zoneOffset;
  }
  protoOf(UtcOffset).x5z = function () {
    return this.w5z_1.totalSeconds();
  };
  protoOf(UtcOffset).hashCode = function () {
    return this.w5z_1.hashCode();
  };
  protoOf(UtcOffset).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffset) {
      tmp = this.w5z_1 === other.w5z_1 || this.w5z_1.equals(other.w5z_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffset).toString = function () {
    return this.w5z_1.toString();
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
      return a.i3();
    } else if (b.equals(new Long(0, 0)))
      return new Long(0, 0);
    else if (b.equals(new Long(1, 0)))
      return a;
    var total = a.d3(b);
    if (!total.e3(b).equals(a)) {
      throw ArithmeticException_init_$Create$('Multiplication overflows a long: ' + a.toString() + ' * ' + b.toString());
    }
    return total;
  }
  function safeAdd(a, b) {
    var sum = a.b3(b);
    if (a.q3(sum).g1(new Long(0, 0)) < 0 && a.q3(b).g1(new Long(0, 0)) >= 0) {
      throw ArithmeticException_init_$Create$('Addition overflows a long: ' + a.toString() + ' + ' + b.toString());
    }
    return sum;
  }
  function safeMultiply_0(a, b) {
    // Inline function 'kotlin.Long.times' call
    var result = toLong(a).d3(toLong(b));
    if (result.g1(new Long(2147483647, 0)) > 0 || result.g1(new Long(-2147483648, -1)) < 0)
      throw ArithmeticException_init_$Create$('Multiplication overflows Int range: ' + a + ' * ' + b + '.');
    return result.l1();
  }
  function hasJsExceptionName(_this__u8e3s4, name) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == name;
  }
  //region block: post-declaration
  protoOf(Builder).i60 = appendAlternativeParsingImpl;
  protoOf(Builder).j60 = appendOptionalImpl;
  protoOf(Builder).r5y = chars;
  protoOf(Builder).x2x = build;
  protoOf(Builder).k60 = addFormatStructureForDate;
  protoOf(Builder).l60 = addFormatStructureForTime;
  protoOf(Builder).m60 = year;
  protoOf(Builder).q5y = year$default;
  protoOf(Builder).n60 = monthNumber;
  protoOf(Builder).o60 = monthNumber$default;
  protoOf(Builder).p5y = monthName;
  protoOf(Builder).m5y = dayOfMonth;
  protoOf(Builder).p60 = dayOfMonth$default;
  protoOf(Builder).u5y = dayOfWeek;
  protoOf(Builder).f5y = date;
  protoOf(Builder).q60 = hour;
  protoOf(Builder).g5y = hour$default;
  protoOf(Builder).r60 = minute;
  protoOf(Builder).h5y = minute$default;
  protoOf(Builder).s60 = second;
  protoOf(Builder).i5y = second$default;
  protoOf(Builder).j5y = secondFraction;
  protoOf(Builder).t60 = time;
  protoOf(Builder).u60 = offsetHours;
  protoOf(Builder).k5y = offsetHours$default;
  protoOf(Builder).v60 = offsetMinutesOfHour;
  protoOf(Builder).w60 = offsetMinutesOfHour$default;
  protoOf(Builder).x60 = offsetSecondsOfMinute;
  protoOf(Builder).y60 = offsetSecondsOfMinute$default;
  protoOf(Builder).l5y = offset;
  protoOf(Builder_0).i60 = appendAlternativeParsingImpl;
  protoOf(Builder_0).j60 = appendOptionalImpl;
  protoOf(Builder_0).r5y = chars;
  protoOf(Builder_0).x2x = build;
  protoOf(Builder_0).m60 = year;
  protoOf(Builder_0).q5y = year$default;
  protoOf(Builder_0).n60 = monthNumber;
  protoOf(Builder_0).o60 = monthNumber$default;
  protoOf(Builder_0).m5y = dayOfMonth;
  protoOf(Builder_0).p60 = dayOfMonth$default;
  protoOf(Builder_1).i60 = appendAlternativeParsingImpl;
  protoOf(Builder_1).j60 = appendOptionalImpl;
  protoOf(Builder_1).r5y = chars;
  protoOf(Builder_1).x2x = build;
  protoOf(Builder_1).k60 = addFormatStructureForDate;
  protoOf(Builder_1).l60 = addFormatStructureForTime;
  protoOf(Builder_1).m60 = year;
  protoOf(Builder_1).q5y = year$default;
  protoOf(Builder_1).n60 = monthNumber;
  protoOf(Builder_1).o60 = monthNumber$default;
  protoOf(Builder_1).m5y = dayOfMonth;
  protoOf(Builder_1).p60 = dayOfMonth$default;
  protoOf(Builder_1).f5y = date;
  protoOf(Builder_1).q60 = hour;
  protoOf(Builder_1).g5y = hour$default;
  protoOf(Builder_1).r60 = minute;
  protoOf(Builder_1).h5y = minute$default;
  protoOf(Builder_1).s60 = second;
  protoOf(Builder_1).i5y = second$default;
  protoOf(Builder_1).j5y = secondFraction;
  protoOf(Builder_1).t60 = time;
  protoOf(IncompleteLocalTime).g5x = set_fractionOfSecond;
  protoOf(IncompleteLocalTime).h5x = get_fractionOfSecond;
  protoOf(Builder_2).i60 = appendAlternativeParsingImpl;
  protoOf(Builder_2).j60 = appendOptionalImpl;
  protoOf(Builder_2).r5y = chars;
  protoOf(Builder_2).x2x = build;
  protoOf(Builder_2).q60 = hour;
  protoOf(Builder_2).g5y = hour$default;
  protoOf(Builder_2).r60 = minute;
  protoOf(Builder_2).h5y = minute$default;
  protoOf(Builder_2).s60 = second;
  protoOf(Builder_2).i5y = second$default;
  protoOf(Builder_2).j5y = secondFraction;
  protoOf(Builder_3).i60 = appendAlternativeParsingImpl;
  protoOf(Builder_3).j60 = appendOptionalImpl;
  protoOf(Builder_3).r5y = chars;
  protoOf(Builder_3).x2x = build;
  protoOf(Builder_3).u60 = offsetHours;
  protoOf(Builder_3).k5y = offsetHours$default;
  protoOf(Builder_3).v60 = offsetMinutesOfHour;
  protoOf(Builder_3).w60 = offsetMinutesOfHour$default;
  protoOf(Builder_3).x60 = offsetSecondsOfMinute;
  protoOf(Builder_3).y60 = offsetSecondsOfMinute$default;
  protoOf(PropertyAccessor).h66 = getterNotNull;
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
  _.$_$.c = Companion_getInstance_4;
  _.$_$.d = Companion_getInstance_15;
  _.$_$.e = Companion_getInstance_19;
  _.$_$.f = plus_0;
  _.$_$.g = toInstant;
  _.$_$.h = toLocalDateTime;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime.js.map
