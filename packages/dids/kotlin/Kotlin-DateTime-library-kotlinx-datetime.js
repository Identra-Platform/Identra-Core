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
  var protoOf = kotlin_kotlin.$_$.wc;
  var initMetadataForObject = kotlin_kotlin.$_$.yb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.tb;
  var Long = kotlin_kotlin.$_$.ch;
  var toString = kotlin_kotlin.$_$.ad;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var Unit_instance = kotlin_kotlin.$_$.w5;
  var toLong = kotlin_kotlin.$_$.yc;
  var initMetadataForClass = kotlin_kotlin.$_$.sb;
  var VOID = kotlin_kotlin.$_$.j;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.x1;
  var objectCreate = kotlin_kotlin.$_$.vc;
  var captureStack = kotlin_kotlin.$_$.eb;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.z1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.v1;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.b2;
  var IllegalArgumentException = kotlin_kotlin.$_$.ah;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.o2;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.n2;
  var RuntimeException_init_$Init$_1 = kotlin_kotlin.$_$.r2;
  var RuntimeException = kotlin_kotlin.$_$.hh;
  var getStringHashCode = kotlin_kotlin.$_$.qb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a3;
  var ensureNotNull = kotlin_kotlin.$_$.ai;
  var ArithmeticException = kotlin_kotlin.$_$.pg;
  var THROW_CCE = kotlin_kotlin.$_$.ih;
  var KMutableProperty1 = kotlin_kotlin.$_$.md;
  var getPropertyCallableRef = kotlin_kotlin.$_$.pb;
  var KMutableProperty0 = kotlin_kotlin.$_$.ld;
  var Enum = kotlin_kotlin.$_$.xg;
  var initMetadataForInterface = kotlin_kotlin.$_$.wb;
  var toString_0 = kotlin_kotlin.$_$.h3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var isInterface = kotlin_kotlin.$_$.hc;
  var isArray = kotlin_kotlin.$_$.zb;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r;
  var hashCode = kotlin_kotlin.$_$.rb;
  var listOf = kotlin_kotlin.$_$.p8;
  var get_indices = kotlin_kotlin.$_$.g8;
  var charSequenceLength = kotlin_kotlin.$_$.ib;
  var joinToString = kotlin_kotlin.$_$.h8;
  var equals = kotlin_kotlin.$_$.mb;
  var getBooleanHashCode = kotlin_kotlin.$_$.ob;
  var KProperty0 = kotlin_kotlin.$_$.nd;
  var lazy = kotlin_kotlin.$_$.hi;
  var padStart = kotlin_kotlin.$_$.we;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var getOrNull = kotlin_kotlin.$_$.b8;
  var listOf_0 = kotlin_kotlin.$_$.o8;
  var emptyList = kotlin_kotlin.$_$.o7;
  var toString_1 = kotlin_kotlin.$_$.ni;
  var charSequenceGet = kotlin_kotlin.$_$.hb;
  var get_lastIndex = kotlin_kotlin.$_$.re;
  var toSet = kotlin_kotlin.$_$.z9;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t6;
  var distinct = kotlin_kotlin.$_$.k7;
  var to = kotlin_kotlin.$_$.pi;
  var single = kotlin_kotlin.$_$.g9;
  var Collection = kotlin_kotlin.$_$.y5;
  var charSequenceSubSequence = kotlin_kotlin.$_$.jb;
  var numberRangeToNumber = kotlin_kotlin.$_$.qc;
  var mutableListOf = kotlin_kotlin.$_$.t8;
  var removeLastOrNull = kotlin_kotlin.$_$.a9;
  var sortWith = kotlin_kotlin.$_$.i9;
  var FunctionAdapter = kotlin_kotlin.$_$.ab;
  var Comparator = kotlin_kotlin.$_$.ug;
  var compareValues = kotlin_kotlin.$_$.da;
  var Exception = kotlin_kotlin.$_$.zg;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.l1;
  var joinTo = kotlin_kotlin.$_$.i8;
  var plus = kotlin_kotlin.$_$.x8;
  var toMutableList = kotlin_kotlin.$_$.v9;
  var addAll = kotlin_kotlin.$_$.m6;
  var firstOrNull = kotlin_kotlin.$_$.u7;
  var drop = kotlin_kotlin.$_$.m7;
  var repeat = kotlin_kotlin.$_$.af;
  var sortedWith = kotlin_kotlin.$_$.j9;
  var binarySearch = kotlin_kotlin.$_$.q6;
  var startsWith = kotlin_kotlin.$_$.jf;
  var checkCountOverflow = kotlin_kotlin.$_$.s6;
  var compareTo = kotlin_kotlin.$_$.kb;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var removePrefix = kotlin_kotlin.$_$.xe;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var Comparable = kotlin_kotlin.$_$.tg;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var numberToLong = kotlin_kotlin.$_$.uc;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.c3;
  var contains = kotlin_kotlin.$_$.yd;
  var indexOf = kotlin_kotlin.$_$.ke;
  var isCharSequence = kotlin_kotlin.$_$.dc;
  var removeRange = kotlin_kotlin.$_$.ye;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var getKClass = kotlin_kotlin.$_$.g;
  var arrayOf = kotlin_kotlin.$_$.wh;
  var createKType = kotlin_kotlin.$_$.d;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.o;
  var lazy_0 = kotlin_kotlin.$_$.gi;
  var MissingFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.l5;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var KProperty1 = kotlin_kotlin.$_$.od;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var enumEntries = kotlin_kotlin.$_$.ya;
  var _Duration___get_inWholeSeconds__impl__hpy7b3 = kotlin_kotlin.$_$.v2;
  var _Duration___get_nanosecondsComponent__impl__nh19kq = kotlin_kotlin.$_$.y2;
  var Duration__isPositive_impl_tvkkt2 = kotlin_kotlin.$_$.x2;
  var numberToInt = kotlin_kotlin.$_$.tc;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ii;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.w1;
  var numberToDouble = kotlin_kotlin.$_$.sc;
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
    this.y5u(value == null ? null : value.f61(9));
  }
  function get_fractionOfSecond() {
    var tmp0_safe_receiver = this.z5u();
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
      var this_0 = this.r5x();
      item(this_0);
      var tmp$ret$2 = this_0.m5x().j2v();
      destination.n(tmp$ret$2);
    }
    var others = destination;
    // Inline function 'kotlin.also' call
    var this_1 = this.r5x();
    mainFormat(this_1);
    var main = this_1.m5x().j2v();
    this.m5x().p5x(new AlternativesParsingFormatStructure(main, others));
  }
  function appendOptionalImpl(onZero, format) {
    var tmp = this.m5x();
    // Inline function 'kotlin.also' call
    var this_0 = this.r5x();
    format(this_0);
    tmp.p5x(new OptionalFormatStructure(onZero, this_0.m5x().j2v()));
  }
  function chars(value) {
    return this.m5x().p5x(new ConstantFormatStructure(value));
  }
  function build() {
    return new CachedFormatStructure(this.m5x().j2v().v5y_1);
  }
  initMetadataForInterface(AbstractDateTimeFormatBuilder, 'AbstractDateTimeFormatBuilder');
  function year$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.w5x(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.w5x.call(this, padding);
    }
    return tmp;
  }
  function monthNumber$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.x5x(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.x5x.call(this, padding);
    }
    return tmp;
  }
  function dayOfMonth$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.w5v(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.w5v.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithDate, 'WithDate');
  function year(padding) {
    return this.u5x(new BasicFormatStructure(new YearDirective(padding)));
  }
  function monthNumber(padding) {
    return this.u5x(new BasicFormatStructure(new MonthDirective(padding)));
  }
  function monthName(names) {
    return this.u5x(new BasicFormatStructure(new MonthNameDirective(names)));
  }
  function dayOfMonth(padding) {
    return this.u5x(new BasicFormatStructure(new DayDirective(padding)));
  }
  function dayOfWeek(names) {
    return this.u5x(new BasicFormatStructure(new DayOfWeekDirective(names)));
  }
  function date(format) {
    var tmp;
    if (format instanceof LocalDateFormat) {
      this.u5x(format.c5z_1);
      tmp = Unit_instance;
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithDateBuilder, 'AbstractWithDateBuilder', VOID, VOID, [WithDate]);
  function hour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.a5y(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.a5y.call(this, padding);
    }
    return tmp;
  }
  function minute$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.b5y(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.b5y.call(this, padding);
    }
    return tmp;
  }
  function second$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.c5y(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.c5y.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithTime, 'WithTime');
  function hour(padding) {
    return this.v5x(new BasicFormatStructure(new HourDirective(padding)));
  }
  function minute(padding) {
    return this.v5x(new BasicFormatStructure(new MinuteDirective(padding)));
  }
  function second(padding) {
    return this.v5x(new BasicFormatStructure(new SecondDirective(padding)));
  }
  function secondFraction(minLength, maxLength) {
    return this.v5x(new BasicFormatStructure(new FractionalSecondDirective(minLength, maxLength)));
  }
  function time(format) {
    var tmp;
    if (format instanceof LocalTimeFormat) {
      this.v5x(format.i61_1);
      tmp = Unit_instance;
    }
    return tmp;
  }
  initMetadataForInterface(AbstractWithTimeBuilder, 'AbstractWithTimeBuilder', VOID, VOID, [WithTime]);
  function addFormatStructureForDate(structure) {
    this.n5x(structure);
  }
  function addFormatStructureForTime(structure) {
    this.n5x(structure);
  }
  initMetadataForInterface(AbstractWithDateTimeBuilder, 'AbstractWithDateTimeBuilder', VOID, VOID, [AbstractWithDateBuilder, AbstractWithTimeBuilder, WithTime, WithDate]);
  function offsetHours$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.e5y(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.e5y.call(this, padding);
    }
    return tmp;
  }
  function offsetMinutesOfHour$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.f5y(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.f5y.call(this, padding);
    }
    return tmp;
  }
  function offsetSecondsOfMinute$default(padding, $super) {
    padding = padding === VOID ? Padding_ZERO_getInstance() : padding;
    var tmp;
    if ($super === VOID) {
      this.h5y(padding);
      tmp = Unit_instance;
    } else {
      tmp = $super.h5y.call(this, padding);
    }
    return tmp;
  }
  initMetadataForInterface(WithUtcOffset, 'WithUtcOffset');
  function offsetHours(padding) {
    return this.q5x(new SignedFormatStructure(new BasicFormatStructure(new UtcOffsetWholeHoursDirective(padding)), true));
  }
  function offsetMinutesOfHour(padding) {
    return this.q5x(new BasicFormatStructure(new UtcOffsetMinuteOfHourDirective(padding)));
  }
  function offsetSecondsOfMinute(padding) {
    return this.q5x(new BasicFormatStructure(new UtcOffsetSecondOfMinuteDirective(padding)));
  }
  function offset(format) {
    var tmp;
    if (format instanceof UtcOffsetFormat) {
      this.q5x(format.c63_1);
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
    var tmp0_elvis_lhs = this.l64(container);
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
  protoOf(System).n5s = function () {
    return Companion_getInstance_14().n5s();
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
    this.s5s_1 = nanoseconds;
    // Inline function 'kotlin.require' call
    if (!(this.s5s_1.e1(new Long(0, 0)) > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.s5s_1.toString() + ' ns.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.s5s_1.d3(new Long(817405952, 838)).equals(new Long(0, 0))) {
      this.t5s_1 = 'HOUR';
      this.u5s_1 = this.s5s_1.c3(new Long(817405952, 838));
    } else {
      if (this.s5s_1.d3(new Long(-129542144, 13)).equals(new Long(0, 0))) {
        this.t5s_1 = 'MINUTE';
        this.u5s_1 = this.s5s_1.c3(new Long(-129542144, 13));
      } else {
        var tmp1 = this.s5s_1;
        // Inline function 'kotlin.Long.rem' call
        var other = 1000000000;
        if (tmp1.d3(toLong(other)).equals(new Long(0, 0))) {
          this.t5s_1 = 'SECOND';
          var tmp = this;
          var tmp3 = this.s5s_1;
          // Inline function 'kotlin.Long.div' call
          var other_0 = 1000000000;
          tmp.u5s_1 = tmp3.c3(toLong(other_0));
        } else {
          // Inline function 'kotlin.Long.rem' call
          if (this.s5s_1.d3(toLong(1000000)).equals(new Long(0, 0))) {
            this.t5s_1 = 'MILLISECOND';
            var tmp_0 = this;
            // Inline function 'kotlin.Long.div' call
            tmp_0.u5s_1 = this.s5s_1.c3(toLong(1000000));
          } else {
            // Inline function 'kotlin.Long.rem' call
            if (this.s5s_1.d3(toLong(1000)).equals(new Long(0, 0))) {
              this.t5s_1 = 'MICROSECOND';
              var tmp_1 = this;
              // Inline function 'kotlin.Long.div' call
              tmp_1.u5s_1 = this.s5s_1.c3(toLong(1000));
            } else {
              this.t5s_1 = 'NANOSECOND';
              this.u5s_1 = this.s5s_1;
            }
          }
        }
      }
    }
  }
  protoOf(TimeBased).v5s = function (scalar) {
    return new TimeBased(safeMultiply(this.s5s_1, toLong(scalar)));
  };
  protoOf(TimeBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeBased) {
        tmp_0 = this.s5s_1.equals(other.s5s_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeBased).hashCode = function () {
    return this.s5s_1.j1() ^ this.s5s_1.k3(32).j1();
  };
  protoOf(TimeBased).toString = function () {
    return this.w5s(this.u5s_1, this.t5s_1);
  };
  function DateBased() {
    DateTimeUnit.call(this);
  }
  function DayBased(days) {
    DateBased.call(this);
    this.y5s_1 = days;
    // Inline function 'kotlin.require' call
    if (!(this.y5s_1 > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.y5s_1 + ' days.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DayBased).v5s = function (scalar) {
    return new DayBased(safeMultiply_0(this.y5s_1, scalar));
  };
  protoOf(DayBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof DayBased) {
        tmp_0 = this.y5s_1 === other.y5s_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(DayBased).hashCode = function () {
    return this.y5s_1 ^ 65536;
  };
  protoOf(DayBased).toString = function () {
    return (this.y5s_1 % 7 | 0) === 0 ? this.x5s(this.y5s_1 / 7 | 0, 'WEEK') : this.x5s(this.y5s_1, 'DAY');
  };
  function MonthBased(months) {
    DateBased.call(this);
    this.z5s_1 = months;
    // Inline function 'kotlin.require' call
    if (!(this.z5s_1 > 0)) {
      var message = 'Unit duration must be positive, but was ' + this.z5s_1 + ' months.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(MonthBased).v5s = function (scalar) {
    return new MonthBased(safeMultiply_0(this.z5s_1, scalar));
  };
  protoOf(MonthBased).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof MonthBased) {
        tmp_0 = this.z5s_1 === other.z5s_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(MonthBased).hashCode = function () {
    return this.z5s_1 ^ 131072;
  };
  protoOf(MonthBased).toString = function () {
    return (this.z5s_1 % 1200 | 0) === 0 ? this.x5s(this.z5s_1 / 1200 | 0, 'CENTURY') : (this.z5s_1 % 12 | 0) === 0 ? this.x5s(this.z5s_1 / 12 | 0, 'YEAR') : (this.z5s_1 % 3 | 0) === 0 ? this.x5s(this.z5s_1 / 3 | 0, 'QUARTER') : this.x5s(this.z5s_1, 'MONTH');
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.a5t_1 = new TimeBased(new Long(1, 0));
    this.b5t_1 = this.a5t_1.v5s(1000);
    this.c5t_1 = this.b5t_1.v5s(1000);
    this.d5t_1 = this.c5t_1.v5s(1000);
    this.e5t_1 = this.d5t_1.v5s(60);
    this.f5t_1 = this.e5t_1.v5s(60);
    this.g5t_1 = new DayBased(1);
    this.h5t_1 = this.g5t_1.v5s(7);
    this.i5t_1 = new MonthBased(1);
    this.j5t_1 = this.i5t_1.v5s(3);
    this.k5t_1 = this.i5t_1.v5s(12);
    this.l5t_1 = this.k5t_1.v5s(100);
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
  protoOf(DateTimeUnit).x5s = function (value, unit) {
    return value === 1 ? unit : '' + value + '-' + unit;
  };
  protoOf(DateTimeUnit).w5s = function (value, unit) {
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
    return Formats_getInstance_0().n5t();
  }
  function getIsoDateTimeFormat() {
    return Formats_getInstance_1().o5t_1;
  }
  function getIsoTimeFormat() {
    return Formats_instance_2.n5t();
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
    return Formats_instance_3.n5t();
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
    this.p5t_1 = date;
    this.q5t_1 = time;
    this.r5t_1 = offset;
    this.s5t_1 = timeZoneId;
  }
  protoOf(DateTimeComponentsContents).t5t = function (_set____db54di) {
    this.p5t_1.w5t_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).z5t = function () {
    return this.p5t_1.w5t_1;
  };
  protoOf(DateTimeComponentsContents).a5u = function (_set____db54di) {
    this.p5t_1.y5t_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).b5u = function () {
    return this.p5t_1.y5t_1;
  };
  protoOf(DateTimeComponentsContents).c5u = function (_set____db54di) {
    this.p5t_1.x5t_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).d5u = function () {
    return this.p5t_1.x5t_1;
  };
  protoOf(DateTimeComponentsContents).e5u = function (_set____db54di) {
    this.p5t_1.v5t_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).f5u = function () {
    return this.p5t_1.v5t_1;
  };
  protoOf(DateTimeComponentsContents).g5u = function (_set____db54di) {
    this.p5t_1.u5t_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).h5u = function () {
    return this.p5t_1.u5t_1;
  };
  protoOf(DateTimeComponentsContents).i5u = function (_set____db54di) {
    this.q5t_1.l5u_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).p5u = function () {
    return this.q5t_1.l5u_1;
  };
  protoOf(DateTimeComponentsContents).q5u = function (value) {
    this.q5t_1.q5u(value);
  };
  protoOf(DateTimeComponentsContents).r5u = function () {
    return this.q5t_1.r5u();
  };
  protoOf(DateTimeComponentsContents).s5u = function (_set____db54di) {
    this.q5t_1.j5u_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).t5u = function () {
    return this.q5t_1.j5u_1;
  };
  protoOf(DateTimeComponentsContents).u5u = function (_set____db54di) {
    this.q5t_1.k5u_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).v5u = function () {
    return this.q5t_1.k5u_1;
  };
  protoOf(DateTimeComponentsContents).w5u = function (_set____db54di) {
    this.q5t_1.m5u_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).x5u = function () {
    return this.q5t_1.m5u_1;
  };
  protoOf(DateTimeComponentsContents).y5u = function (_set____db54di) {
    this.q5t_1.o5u_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).z5u = function () {
    return this.q5t_1.o5u_1;
  };
  protoOf(DateTimeComponentsContents).a5v = function (_set____db54di) {
    this.q5t_1.n5u_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).b5v = function () {
    return this.q5t_1.n5u_1;
  };
  protoOf(DateTimeComponentsContents).c5v = function (_set____db54di) {
    this.r5t_1.d5v_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).h5v = function () {
    return this.r5t_1.d5v_1;
  };
  protoOf(DateTimeComponentsContents).i5v = function (_set____db54di) {
    this.r5t_1.f5v_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).j5v = function () {
    return this.r5t_1.f5v_1;
  };
  protoOf(DateTimeComponentsContents).k5v = function (_set____db54di) {
    this.r5t_1.g5v_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).l5v = function () {
    return this.r5t_1.g5v_1;
  };
  protoOf(DateTimeComponentsContents).m5v = function (_set____db54di) {
    this.r5t_1.e5v_1 = _set____db54di;
  };
  protoOf(DateTimeComponentsContents).n5v = function () {
    return this.r5t_1.e5v_1;
  };
  protoOf(DateTimeComponentsContents).o5v = function () {
    return new DateTimeComponentsContents(this.p5t_1.o5v(), this.q5t_1.o5v(), this.r5t_1.o5v(), this.s5t_1);
  };
  protoOf(DateTimeComponentsContents).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof DateTimeComponentsContents) {
      tmp_2 = other.p5t_1.equals(this.p5t_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.q5t_1.equals(this.q5t_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.r5t_1.equals(this.r5t_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.s5t_1 == this.s5t_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DateTimeComponentsContents).hashCode = function () {
    var tmp = this.p5t_1.hashCode() ^ this.q5t_1.hashCode() ^ this.r5t_1.hashCode();
    var tmp0_safe_receiver = this.s5t_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
  };
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda($this$Format) {
    $this$Format.p5v(get_ISO_DATE());
    var tmp = [DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda];
    alternativeParsing($this$Format, tmp, DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_0);
    $this$Format.q5v();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.r5v();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.s5v();
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
    $this$optional.t5v(1, 9);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_2($this$alternativeParsing) {
    $this$alternativeParsing.u5v();
    return Unit_instance;
  }
  function DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda$lambda_3($this$alternativeParsing) {
    $this$alternativeParsing.v5v(Formats_instance_3.n5t());
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda($this$Format) {
    var tmp = [DateTimeComponents$Formats$RFC_1123$lambda$lambda];
    alternativeParsing($this$Format, tmp, DateTimeComponents$Formats$RFC_1123$lambda$lambda_0);
    $this$Format.w5v(Padding_NONE_getInstance());
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.z5v(Companion_getInstance_5().y5v_1);
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.a5w();
    char($this$Format, _Char___init__impl__6a9atx(32));
    $this$Format.q5v();
    char($this$Format, _Char___init__impl__6a9atx(58));
    $this$Format.r5v();
    optional($this$Format, VOID, DateTimeComponents$Formats$RFC_1123$lambda$lambda_1);
    $this$Format.b5w(' ');
    var tmp_0 = DateTimeComponents$Formats$RFC_1123$lambda$lambda_2;
    var tmp_1 = [tmp_0, DateTimeComponents$Formats$RFC_1123$lambda$lambda_3];
    alternativeParsing($this$Format, tmp_1, DateTimeComponents$Formats$RFC_1123$lambda$lambda_4);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda($this$alternativeParsing) {
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_0($this$alternativeParsing) {
    $this$alternativeParsing.e5w(Companion_getInstance_6().d5w_1);
    $this$alternativeParsing.b5w(', ');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_1($this$optional) {
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.s5v();
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_2($this$alternativeParsing) {
    $this$alternativeParsing.b5w('UT');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_3($this$alternativeParsing) {
    $this$alternativeParsing.b5w('Z');
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda_4($this$alternativeParsing) {
    optional($this$alternativeParsing, 'GMT', DateTimeComponents$Formats$RFC_1123$lambda$lambda$lambda);
    return Unit_instance;
  }
  function DateTimeComponents$Formats$RFC_1123$lambda$lambda$lambda($this$optional) {
    $this$optional.v5v(Formats_instance_3.f5w());
    return Unit_instance;
  }
  function Companion_4() {
  }
  protoOf(Companion_4).g5w = function (block) {
    var builder = new Builder(new AppendableFormatStructure());
    block(builder);
    return new DateTimeComponentsFormat(builder.j2v());
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function Formats() {
    Formats_instance = this;
    var tmp = this;
    var tmp_0 = Companion_instance_4;
    tmp.h5w_1 = tmp_0.g5w(DateTimeComponents$Formats$ISO_DATE_TIME_OFFSET$lambda);
    var tmp_1 = this;
    var tmp_2 = Companion_instance_4;
    tmp_1.i5w_1 = tmp_2.g5w(DateTimeComponents$Formats$RFC_1123$lambda);
  }
  var Formats_instance;
  function Formats_getInstance() {
    if (Formats_instance == null)
      new Formats();
    return Formats_instance;
  }
  function DateTimeComponents(contents) {
    contents = contents === VOID ? new DateTimeComponentsContents() : contents;
    this.j5w_1 = contents;
    this.k5w_1 = year$factory(this.j5w_1.p5t_1);
    this.l5w_1 = new TwoDigitNumber(monthNumber$factory(this.j5w_1.p5t_1));
    this.m5w_1 = new TwoDigitNumber(dayOfMonth$factory(this.j5w_1.p5t_1));
    this.n5w_1 = new ThreeDigitNumber(dayOfYear$factory(this.j5w_1.p5t_1));
    this.o5w_1 = new TwoDigitNumber(hour$factory(this.j5w_1.q5t_1));
    this.p5w_1 = new TwoDigitNumber(hourOfAmPm$factory(this.j5w_1.q5t_1));
    this.q5w_1 = amPm$factory(this.j5w_1.q5t_1);
    this.r5w_1 = new TwoDigitNumber(minute$factory(this.j5w_1.q5t_1));
    this.s5w_1 = new TwoDigitNumber(second$factory(this.j5w_1.q5t_1));
    this.t5w_1 = isNegative$factory(this.j5w_1.r5t_1);
    this.u5w_1 = new TwoDigitNumber(totalHoursAbs$factory(this.j5w_1.r5t_1));
    this.v5w_1 = new TwoDigitNumber(minutesOfHour$factory(this.j5w_1.r5t_1));
    this.w5w_1 = new TwoDigitNumber(secondsOfMinute$factory(this.j5w_1.r5t_1));
    this.x5w_1 = timeZoneId$factory_0(this.j5w_1);
  }
  protoOf(DateTimeComponents).g5u = function (_set____db54di) {
    var tmp0 = this.k5w_1;
    // Inline function 'kotlin.setValue' call
    year$factory_0();
    tmp0.set(_set____db54di);
    return Unit_instance;
  };
  protoOf(DateTimeComponents).h5u = function () {
    var tmp0 = this.k5w_1;
    // Inline function 'kotlin.getValue' call
    year$factory_1();
    return tmp0.get();
  };
  protoOf(DateTimeComponents).z5u = function () {
    return this.j5w_1.q5t_1.o5u_1;
  };
  protoOf(DateTimeComponents).y5w = function () {
    return this.j5w_1.r5t_1.y5w();
  };
  protoOf(DateTimeComponents).z5w = function () {
    return this.j5w_1.q5t_1.z5w();
  };
  protoOf(DateTimeComponents).a5x = function () {
    var offset = this.y5w();
    var time = this.z5w();
    var truncatedDate = this.j5w_1.p5t_1.o5v();
    truncatedDate.u5t_1 = requireParsedField(truncatedDate.u5t_1, 'year') % 10000 | 0;
    var tmp;
    try {
      var secDelta = safeMultiply(toLong(ensureNotNull(this.h5u()) / 10000 | 0), new Long(2036907392, 73));
      var epochDays = toLong(truncatedDate.b5x().d5x());
      // Inline function 'kotlin.Long.times' call
      var tmp2 = epochDays.b3(toLong(86400));
      // Inline function 'kotlin.Long.plus' call
      var other = time.f5x();
      var tmp4 = tmp2.z2(toLong(other));
      // Inline function 'kotlin.Long.minus' call
      var other_0 = offset.h5x();
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
    if (totalSeconds.e1(Companion_getInstance_14().q5s_1.j5x()) < 0 || totalSeconds.e1(Companion_getInstance_14().r5s_1.j5x()) > 0)
      throw DateTimeFormatException_init_$Create$_0('The parsed date is outside the range representable by Instant');
    var tmp_1 = Companion_getInstance_14();
    var tmp0_elvis_lhs = this.z5u();
    return tmp_1.k5x(totalSeconds, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs);
  };
  function Builder(actualBuilder) {
    this.l5x_1 = actualBuilder;
  }
  protoOf(Builder).m5x = function () {
    return this.l5x_1;
  };
  protoOf(Builder).n5x = function (structure) {
    this.l5x_1.p5x(structure);
  };
  protoOf(Builder).q5x = function (structure) {
    this.l5x_1.p5x(structure);
  };
  protoOf(Builder).r5x = function () {
    return new Builder(new AppendableFormatStructure());
  };
  function DateTimeComponentsFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.j5y_1 = actualFormat;
  }
  protoOf(DateTimeComponentsFormat).k5y = function () {
    return this.j5y_1;
  };
  protoOf(DateTimeComponentsFormat).l5y = function (intermediate) {
    return new DateTimeComponents(intermediate);
  };
  protoOf(DateTimeComponentsFormat).m5y = function (intermediate) {
    return this.l5y(intermediate instanceof DateTimeComponentsContents ? intermediate : THROW_CCE());
  };
  protoOf(DateTimeComponentsFormat).n5y = function () {
    return get_emptyDateTimeComponentsContents();
  };
  function TwoDigitNumber(reference) {
    this.p5y_1 = reference;
  }
  function ThreeDigitNumber(reference) {
    this.q5y_1 = reference;
  }
  function timeZoneId$factory() {
    return getPropertyCallableRef('timeZoneId', 1, KMutableProperty1, function (receiver) {
      return receiver.s5t_1;
    }, function (receiver, value) {
      receiver.s5t_1 = value;
      return Unit_instance;
    });
  }
  function year$factory($b0) {
    return getPropertyCallableRef('year', 0, KMutableProperty0, function () {
      return $b0.u5t_1;
    }, function (value) {
      $b0.u5t_1 = value;
      return Unit_instance;
    });
  }
  function monthNumber$factory($b0) {
    return getPropertyCallableRef('monthNumber', 0, KMutableProperty0, function () {
      return $b0.v5t_1;
    }, function (value) {
      $b0.v5t_1 = value;
      return Unit_instance;
    });
  }
  function dayOfMonth$factory($b0) {
    return getPropertyCallableRef('dayOfMonth', 0, KMutableProperty0, function () {
      return $b0.w5t_1;
    }, function (value) {
      $b0.w5t_1 = value;
      return Unit_instance;
    });
  }
  function dayOfYear$factory($b0) {
    return getPropertyCallableRef('dayOfYear', 0, KMutableProperty0, function () {
      return $b0.y5t_1;
    }, function (value) {
      $b0.y5t_1 = value;
      return Unit_instance;
    });
  }
  function hour$factory($b0) {
    return getPropertyCallableRef('hour', 0, KMutableProperty0, function () {
      return $b0.j5u_1;
    }, function (value) {
      $b0.j5u_1 = value;
      return Unit_instance;
    });
  }
  function hourOfAmPm$factory($b0) {
    return getPropertyCallableRef('hourOfAmPm', 0, KMutableProperty0, function () {
      return $b0.k5u_1;
    }, function (value) {
      $b0.k5u_1 = value;
      return Unit_instance;
    });
  }
  function amPm$factory($b0) {
    return getPropertyCallableRef('amPm', 0, KMutableProperty0, function () {
      return $b0.l5u_1;
    }, function (value) {
      $b0.l5u_1 = value;
      return Unit_instance;
    });
  }
  function minute$factory($b0) {
    return getPropertyCallableRef('minute', 0, KMutableProperty0, function () {
      return $b0.m5u_1;
    }, function (value) {
      $b0.m5u_1 = value;
      return Unit_instance;
    });
  }
  function second$factory($b0) {
    return getPropertyCallableRef('second', 0, KMutableProperty0, function () {
      return $b0.n5u_1;
    }, function (value) {
      $b0.n5u_1 = value;
      return Unit_instance;
    });
  }
  function isNegative$factory($b0) {
    return getPropertyCallableRef('isNegative', 0, KMutableProperty0, function () {
      return $b0.d5v_1;
    }, function (value) {
      $b0.d5v_1 = value;
      return Unit_instance;
    });
  }
  function totalHoursAbs$factory($b0) {
    return getPropertyCallableRef('totalHoursAbs', 0, KMutableProperty0, function () {
      return $b0.e5v_1;
    }, function (value) {
      $b0.e5v_1 = value;
      return Unit_instance;
    });
  }
  function minutesOfHour$factory($b0) {
    return getPropertyCallableRef('minutesOfHour', 0, KMutableProperty0, function () {
      return $b0.f5v_1;
    }, function (value) {
      $b0.f5v_1 = value;
      return Unit_instance;
    });
  }
  function secondsOfMinute$factory($b0) {
    return getPropertyCallableRef('secondsOfMinute', 0, KMutableProperty0, function () {
      return $b0.g5v_1;
    }, function (value) {
      $b0.g5v_1 = value;
      return Unit_instance;
    });
  }
  function timeZoneId$factory_0($b0) {
    return getPropertyCallableRef('timeZoneId', 0, KMutableProperty0, function () {
      return $b0.s5t_1;
    }, function (value) {
      $b0.s5t_1 = value;
      return Unit_instance;
    });
  }
  function year$factory_0() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.h5u();
    }, function (receiver, value) {
      return receiver.g5u(value);
    });
  }
  function year$factory_1() {
    return getPropertyCallableRef('year', 1, KMutableProperty1, function (receiver) {
      return receiver.h5u();
    }, function (receiver, value) {
      return receiver.g5u(value);
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
  protoOf(AbstractDateTimeFormat).o5y = function (input) {
    var tmp;
    try {
      tmp = Parser__match$default_impl_x2xlti(_Parser___init__impl__gdyfby(this.k5y().u5y()), input, this.n5y());
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
      return this.m5y(matched);
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
    return _this__u8e3s4.b5w(toString_0(value));
  }
  function optional(_this__u8e3s4, ifZero, format) {
    ifZero = ifZero === VOID ? '' : ifZero;
    var tmp;
    if (isInterface(_this__u8e3s4, AbstractDateTimeFormatBuilder)) {
      _this__u8e3s4.t5x(ifZero, typeof format === 'function' ? format : THROW_CCE());
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
      _this__u8e3s4.s5x(tmp_0, typeof primaryFormat === 'function' ? primaryFormat : THROW_CCE());
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
    this.u5t_1 = year;
    this.v5t_1 = monthNumber;
    this.w5t_1 = dayOfMonth;
    this.x5t_1 = isoDayOfWeek;
    this.y5t_1 = dayOfYear;
  }
  protoOf(IncompleteLocalDate).g5u = function (_set____db54di) {
    this.u5t_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).h5u = function () {
    return this.u5t_1;
  };
  protoOf(IncompleteLocalDate).e5u = function (_set____db54di) {
    this.v5t_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).f5u = function () {
    return this.v5t_1;
  };
  protoOf(IncompleteLocalDate).t5t = function (_set____db54di) {
    this.w5t_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).z5t = function () {
    return this.w5t_1;
  };
  protoOf(IncompleteLocalDate).c5u = function (_set____db54di) {
    this.x5t_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).d5u = function () {
    return this.x5t_1;
  };
  protoOf(IncompleteLocalDate).a5u = function (_set____db54di) {
    this.y5t_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDate).b5u = function () {
    return this.y5t_1;
  };
  protoOf(IncompleteLocalDate).b5x = function () {
    var year = requireParsedField(this.u5t_1, 'year');
    var dayOfYear = this.y5t_1;
    var tmp;
    if (dayOfYear == null) {
      tmp = LocalDate_init_$Create$(year, requireParsedField(this.v5t_1, 'monthNumber'), requireParsedField(this.w5t_1, 'dayOfMonth'));
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = plus_2(LocalDate_init_$Create$(year, 1, 1), dayOfYear - 1 | 0, Companion_getInstance_3().g5t_1);
      if (!(this_0.h5u() === year)) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of year is ' + dayOfYear + ', which is not a valid day of year for the year ' + year));
      }
      if (!(this.v5t_1 == null) && !(this_0.f5u() === this.v5t_1)) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of year is ' + dayOfYear + ', which is ' + this_0.w5y().toString() + ', ') + ('but ' + this.v5t_1 + ' was specified as the month number'));
      }
      if (!(this.w5t_1 == null) && !(this_0.z5t() === this.w5t_1)) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of year is ' + dayOfYear + ', which is the day ' + this_0.z5t() + ' of ' + this_0.w5y().toString() + ', ') + ('but ' + this.w5t_1 + ' was specified as the day of month'));
      }
      tmp = this_0;
    }
    var date = tmp;
    var tmp0_safe_receiver = this.x5t_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!(tmp0_safe_receiver === get_isoDayNumber(date.x5y()))) {
        throw DateTimeFormatException_init_$Create$_0('Can not create a LocalDate from the given input: ' + ('the day of week is ' + DayOfWeek(tmp0_safe_receiver).toString() + ' but the date is ' + date.toString() + ', which is a ' + date.x5y().toString()));
      }
    }
    return date;
  };
  protoOf(IncompleteLocalDate).o5v = function () {
    return new IncompleteLocalDate(this.u5t_1, this.v5t_1, this.w5t_1, this.x5t_1, this.y5t_1);
  };
  protoOf(IncompleteLocalDate).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    if (other instanceof IncompleteLocalDate) {
      tmp_3 = this.u5t_1 == other.u5t_1;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = this.v5t_1 == other.v5t_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.w5t_1 == other.w5t_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.x5t_1 == other.x5t_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.y5t_1 == other.y5t_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalDate).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.u5t_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 923521);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.v5t_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    var tmp_0 = tmp + imul(tmp$ret$1, 29791) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.w5t_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp$ret$2 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    var tmp_1 = tmp_0 + imul(tmp$ret$2, 961) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.x5t_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    var tmp$ret$3 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    var tmp_2 = tmp_1 + imul(tmp$ret$3, 31) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_3 = this.y5t_1;
    var tmp1_elvis_lhs_3 = tmp0_safe_receiver_3 == null ? null : hashCode(tmp0_safe_receiver_3);
    return tmp_2 + (tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3) | 0;
  };
  protoOf(IncompleteLocalDate).toString = function () {
    var tmp0_elvis_lhs = this.u5t_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.v5t_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.w5t_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.x5t_1;
    return tmp + '-' + tmp_0 + '-' + tmp_1 + ' (day of week is ' + toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs) + ')';
  };
  function Companion_5() {
    Companion_instance_5 = this;
    this.x5v_1 = new MonthNames(listOf(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']));
    this.y5v_1 = new MonthNames(listOf(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']));
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
    this.y5y_1 = names;
    // Inline function 'kotlin.require' call
    if (!(this.y5y_1.s() === 12)) {
      var message = 'Month names must contain exactly 12 elements';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var progression = get_indices(this.y5y_1);
    var inductionVariable = progression.f1_1;
    var last = progression.g1_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ix = element;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = this.y5y_1.u(ix);
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
            if (!!(this.y5y_1.u(ix) === this.y5y_1.u(ix2))) {
              var message_1 = "Month names must be unique, but '" + this.y5y_1.u(ix) + "' was repeated";
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
          }
           while (inductionVariable_0 < ix);
      }
       while (!(element === last));
  }
  protoOf(MonthNames).toString = function () {
    return joinToString(this.y5y_1, ', ', 'MonthNames(', ')', VOID, VOID, String$toString$ref());
  };
  protoOf(MonthNames).equals = function (other) {
    var tmp;
    if (other instanceof MonthNames) {
      tmp = equals(this.y5y_1, other.y5y_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthNames).hashCode = function () {
    return hashCode(this.y5y_1);
  };
  function Companion_6() {
    Companion_instance_6 = this;
    this.c5w_1 = new DayOfWeekNames(listOf(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']));
    this.d5w_1 = new DayOfWeekNames(listOf(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']));
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
    this.z5y_1 = names;
    // Inline function 'kotlin.require' call
    if (!(this.z5y_1.s() === 7)) {
      var message = 'Day of week names must contain exactly 7 elements';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var progression = get_indices(this.z5y_1);
    var inductionVariable = progression.f1_1;
    var last = progression.g1_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ix = element;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = this.z5y_1.u(ix);
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
            if (!!(this.z5y_1.u(ix) === this.z5y_1.u(ix2))) {
              var message_1 = "Day-of-week names must be unique, but '" + this.z5y_1.u(ix) + "' was repeated";
              throw IllegalArgumentException_init_$Create$(toString(message_1));
            }
          }
           while (inductionVariable_0 < ix);
      }
       while (!(element === last));
  }
  protoOf(DayOfWeekNames).toString = function () {
    return joinToString(this.z5y_1, ', ', 'DayOfWeekNames(', ')', VOID, VOID, String$toString$ref_0());
  };
  protoOf(DayOfWeekNames).equals = function (other) {
    var tmp;
    if (other instanceof DayOfWeekNames) {
      tmp = equals(this.z5y_1, other.z5y_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayOfWeekNames).hashCode = function () {
    return hashCode(this.z5y_1);
  };
  function Companion_7() {
  }
  protoOf(Companion_7).a5z = function (block) {
    var builder = new Builder_0(new AppendableFormatStructure());
    block(builder);
    return new LocalDateFormat(builder.j2v());
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function Builder_0(actualBuilder) {
    this.b5z_1 = actualBuilder;
  }
  protoOf(Builder_0).m5x = function () {
    return this.b5z_1;
  };
  protoOf(Builder_0).u5x = function (structure) {
    return this.b5z_1.p5x(structure);
  };
  protoOf(Builder_0).r5x = function () {
    return new Builder_0(new AppendableFormatStructure());
  };
  function LocalDateFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.c5z_1 = actualFormat;
  }
  protoOf(LocalDateFormat).k5y = function () {
    return this.c5z_1;
  };
  protoOf(LocalDateFormat).d5z = function (intermediate) {
    return intermediate.b5x();
  };
  protoOf(LocalDateFormat).m5y = function (intermediate) {
    return this.d5z(intermediate instanceof IncompleteLocalDate ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateFormat).n5y = function () {
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
    var tmp = DateFields_getInstance().e5z_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 4 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 4 : null;
    SignedIntFieldFormatDirective.call(this, tmp, tmp_0, null, tmp$ret$1, 4);
    this.o5z_1 = padding;
    this.p5z_1 = isYearOfEra;
  }
  protoOf(YearDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof YearDirective) {
      tmp_0 = this.o5z_1.equals(other.o5z_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.p5z_1 === other.p5z_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(YearDirective).hashCode = function () {
    return imul(this.o5z_1.hashCode(), 31) + getBooleanHashCode(this.p5z_1) | 0;
  };
  function MonthDirective(padding) {
    var tmp = DateFields_getInstance().f5z_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.b60_1 = padding;
  }
  protoOf(MonthDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthDirective) {
      tmp = this.b60_1.equals(other.b60_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthDirective).hashCode = function () {
    return this.b60_1.hashCode();
  };
  function MonthNameDirective(names) {
    NamedUnsignedIntFieldFormatDirective.call(this, DateFields_getInstance().f5z_1, names.y5y_1, 'monthName');
    this.j60_1 = names;
  }
  protoOf(MonthNameDirective).equals = function (other) {
    var tmp;
    if (other instanceof MonthNameDirective) {
      tmp = equals(this.j60_1.y5y_1, other.j60_1.y5y_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MonthNameDirective).hashCode = function () {
    return hashCode(this.j60_1.y5y_1);
  };
  function DayDirective(padding) {
    var tmp = DateFields_getInstance().g5z_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.r60_1 = padding;
  }
  protoOf(DayDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayDirective) {
      tmp = this.r60_1.equals(other.r60_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayDirective).hashCode = function () {
    return this.r60_1.hashCode();
  };
  function DayOfWeekDirective(names) {
    NamedUnsignedIntFieldFormatDirective.call(this, DateFields_getInstance().h5z_1, names.z5y_1, 'dayOfWeekName');
    this.v60_1 = names;
  }
  protoOf(DayOfWeekDirective).equals = function (other) {
    var tmp;
    if (other instanceof DayOfWeekDirective) {
      tmp = equals(this.v60_1.z5y_1, other.v60_1.z5y_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DayOfWeekDirective).hashCode = function () {
    return hashCode(this.v60_1.z5y_1);
  };
  function DateFields() {
    DateFields_instance = this;
    this.e5z_1 = new GenericFieldSpec(new PropertyAccessor(year$factory_2()));
    this.f5z_1 = new UnsignedFieldSpec(new PropertyAccessor(monthNumber$factory_0()), 1, 12);
    this.g5z_1 = new UnsignedFieldSpec(new PropertyAccessor(dayOfMonth$factory_0()), 1, 31);
    this.h5z_1 = new UnsignedFieldSpec(new PropertyAccessor(isoDayOfWeek$factory()), 1, 7);
    this.i5z_1 = new UnsignedFieldSpec(new PropertyAccessor(dayOfYear$factory_0()), 1, 366);
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
    return tmp.a5z(ISO_DATE$delegate$lambda$lambda);
  }
  function ISO_DATE$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.a5w();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.y5x();
    char($this$build, _Char___init__impl__6a9atx(45));
    $this$build.z5x();
    return Unit_instance;
  }
  function ISO_DATE_BASIC$delegate$lambda() {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    var tmp = Companion_instance_7;
    return tmp.a5z(ISO_DATE_BASIC$delegate$lambda$lambda);
  }
  function ISO_DATE_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateFormat_kt__k1uk9u();
    $this$build.a5w();
    $this$build.y5x();
    $this$build.z5x();
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
      return receiver.h5u();
    }, function (receiver, value) {
      return receiver.g5u(value);
    });
  }
  function monthNumber$factory_0() {
    return getPropertyCallableRef('monthNumber', 1, KMutableProperty1, function (receiver) {
      return receiver.f5u();
    }, function (receiver, value) {
      return receiver.e5u(value);
    });
  }
  function dayOfMonth$factory_0() {
    return getPropertyCallableRef('dayOfMonth', 1, KMutableProperty1, function (receiver) {
      return receiver.z5t();
    }, function (receiver, value) {
      return receiver.t5t(value);
    });
  }
  function isoDayOfWeek$factory() {
    return getPropertyCallableRef('isoDayOfWeek', 1, KMutableProperty1, function (receiver) {
      return receiver.d5u();
    }, function (receiver, value) {
      return receiver.c5u(value);
    });
  }
  function dayOfYear$factory_0() {
    return getPropertyCallableRef('dayOfYear', 1, KMutableProperty1, function (receiver) {
      return receiver.b5u();
    }, function (receiver, value) {
      return receiver.a5u(value);
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
  protoOf(Companion_8).w60 = function (block) {
    var builder = new Builder_1(new AppendableFormatStructure());
    block(builder);
    return new LocalDateTimeFormat(builder.j2v());
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function Builder_1(actualBuilder) {
    this.x60_1 = actualBuilder;
  }
  protoOf(Builder_1).m5x = function () {
    return this.x60_1;
  };
  protoOf(Builder_1).n5x = function (structure) {
    this.x60_1.p5x(structure);
  };
  protoOf(Builder_1).r5x = function () {
    return new Builder_1(new AppendableFormatStructure());
  };
  function LocalDateTimeFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.y60_1 = actualFormat;
  }
  protoOf(LocalDateTimeFormat).k5y = function () {
    return this.y60_1;
  };
  protoOf(LocalDateTimeFormat).z60 = function (intermediate) {
    return intermediate.c61();
  };
  protoOf(LocalDateTimeFormat).m5y = function (intermediate) {
    return this.z60(intermediate instanceof IncompleteLocalDateTime ? intermediate : THROW_CCE());
  };
  protoOf(LocalDateTimeFormat).n5y = function () {
    return get_emptyIncompleteLocalDateTime();
  };
  function IncompleteLocalDateTime(date, time) {
    date = date === VOID ? new IncompleteLocalDate() : date;
    time = time === VOID ? new IncompleteLocalTime() : time;
    this.a61_1 = date;
    this.b61_1 = time;
  }
  protoOf(IncompleteLocalDateTime).t5t = function (_set____db54di) {
    this.a61_1.w5t_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).z5t = function () {
    return this.a61_1.w5t_1;
  };
  protoOf(IncompleteLocalDateTime).a5u = function (_set____db54di) {
    this.a61_1.y5t_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).b5u = function () {
    return this.a61_1.y5t_1;
  };
  protoOf(IncompleteLocalDateTime).c5u = function (_set____db54di) {
    this.a61_1.x5t_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).d5u = function () {
    return this.a61_1.x5t_1;
  };
  protoOf(IncompleteLocalDateTime).e5u = function (_set____db54di) {
    this.a61_1.v5t_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).f5u = function () {
    return this.a61_1.v5t_1;
  };
  protoOf(IncompleteLocalDateTime).g5u = function (_set____db54di) {
    this.a61_1.u5t_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).h5u = function () {
    return this.a61_1.u5t_1;
  };
  protoOf(IncompleteLocalDateTime).i5u = function (_set____db54di) {
    this.b61_1.l5u_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).p5u = function () {
    return this.b61_1.l5u_1;
  };
  protoOf(IncompleteLocalDateTime).q5u = function (value) {
    this.b61_1.q5u(value);
  };
  protoOf(IncompleteLocalDateTime).r5u = function () {
    return this.b61_1.r5u();
  };
  protoOf(IncompleteLocalDateTime).s5u = function (_set____db54di) {
    this.b61_1.j5u_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).t5u = function () {
    return this.b61_1.j5u_1;
  };
  protoOf(IncompleteLocalDateTime).u5u = function (_set____db54di) {
    this.b61_1.k5u_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).v5u = function () {
    return this.b61_1.k5u_1;
  };
  protoOf(IncompleteLocalDateTime).w5u = function (_set____db54di) {
    this.b61_1.m5u_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).x5u = function () {
    return this.b61_1.m5u_1;
  };
  protoOf(IncompleteLocalDateTime).y5u = function (_set____db54di) {
    this.b61_1.o5u_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).z5u = function () {
    return this.b61_1.o5u_1;
  };
  protoOf(IncompleteLocalDateTime).a5v = function (_set____db54di) {
    this.b61_1.n5u_1 = _set____db54di;
  };
  protoOf(IncompleteLocalDateTime).b5v = function () {
    return this.b61_1.n5u_1;
  };
  protoOf(IncompleteLocalDateTime).c61 = function () {
    return LocalDateTime_init_$Create$(this.a61_1.b5x(), this.b61_1.z5w());
  };
  protoOf(IncompleteLocalDateTime).o5v = function () {
    return new IncompleteLocalDateTime(this.a61_1.o5v(), this.b61_1.o5v());
  };
  function AbstractWithDateTimeBuilder() {
  }
  function ISO_DATETIME$delegate$lambda() {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    var tmp = Companion_instance_8;
    return tmp.w60(ISO_DATETIME$delegate$lambda$lambda);
  }
  function ISO_DATETIME$delegate$lambda$lambda($this$build) {
    _init_properties_LocalDateTimeFormat_kt__aloigl();
    $this$build.p5v(get_ISO_DATE());
    var tmp = [ISO_DATETIME$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_DATETIME$delegate$lambda$lambda$lambda_0);
    $this$build.d5y(get_ISO_TIME());
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
    this.j5u_1 = hour;
    this.k5u_1 = hourOfAmPm;
    this.l5u_1 = amPm;
    this.m5u_1 = minute;
    this.n5u_1 = second;
    this.o5u_1 = nanosecond;
  }
  protoOf(IncompleteLocalTime).s5u = function (_set____db54di) {
    this.j5u_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).t5u = function () {
    return this.j5u_1;
  };
  protoOf(IncompleteLocalTime).u5u = function (_set____db54di) {
    this.k5u_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).v5u = function () {
    return this.k5u_1;
  };
  protoOf(IncompleteLocalTime).i5u = function (_set____db54di) {
    this.l5u_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).p5u = function () {
    return this.l5u_1;
  };
  protoOf(IncompleteLocalTime).w5u = function (_set____db54di) {
    this.m5u_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).x5u = function () {
    return this.m5u_1;
  };
  protoOf(IncompleteLocalTime).a5v = function (_set____db54di) {
    this.n5u_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).b5v = function () {
    return this.n5u_1;
  };
  protoOf(IncompleteLocalTime).y5u = function (_set____db54di) {
    this.o5u_1 = _set____db54di;
  };
  protoOf(IncompleteLocalTime).z5u = function () {
    return this.o5u_1;
  };
  protoOf(IncompleteLocalTime).z5w = function () {
    var tmp0_safe_receiver = this.j5u_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = this.k5u_1;
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
      var tmp1_safe_receiver = this.l5u_1;
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
      var tmp1_safe_receiver_0 = this.k5u_1;
      var tmp_1;
      if (tmp1_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp0_safe_receiver_1 = this.l5u_1;
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
    var tmp_4 = requireParsedField(this.m5u_1, 'minute');
    var tmp4_elvis_lhs = this.n5u_1;
    var tmp_5 = tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs;
    var tmp5_elvis_lhs = this.o5u_1;
    return LocalTime_init_$Create$(hour, tmp_4, tmp_5, tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs);
  };
  protoOf(IncompleteLocalTime).o5v = function () {
    return new IncompleteLocalTime(this.j5u_1, this.k5u_1, this.l5u_1, this.m5u_1, this.n5u_1, this.o5u_1);
  };
  protoOf(IncompleteLocalTime).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    if (other instanceof IncompleteLocalTime) {
      tmp_4 = this.j5u_1 == other.j5u_1;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = this.k5u_1 == other.k5u_1;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = equals(this.l5u_1, other.l5u_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.m5u_1 == other.m5u_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.n5u_1 == other.n5u_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.o5u_1 == other.o5u_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteLocalTime).hashCode = function () {
    var tmp6_elvis_lhs = this.j5u_1;
    var tmp = imul(tmp6_elvis_lhs == null ? 0 : tmp6_elvis_lhs, 31);
    var tmp5_elvis_lhs = this.k5u_1;
    var tmp_0 = tmp + imul(tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs, 31) | 0;
    var tmp3_safe_receiver = this.l5u_1;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.hashCode();
    var tmp_1 = tmp_0 + imul(tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs, 31) | 0;
    var tmp2_elvis_lhs = this.m5u_1;
    var tmp_2 = tmp_1 + imul(tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs, 31) | 0;
    var tmp1_elvis_lhs = this.n5u_1;
    var tmp_3 = tmp_2 + imul(tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, 31) | 0;
    var tmp0_elvis_lhs = this.o5u_1;
    return tmp_3 + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
  };
  protoOf(IncompleteLocalTime).toString = function () {
    var tmp0_elvis_lhs = this.j5u_1;
    var tmp = toString(tmp0_elvis_lhs == null ? '??' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = this.m5u_1;
    var tmp_0 = toString(tmp1_elvis_lhs == null ? '??' : tmp1_elvis_lhs);
    var tmp2_elvis_lhs = this.n5u_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_safe_receiver = this.o5u_1;
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
  protoOf(Companion_9).g61 = function (block) {
    var builder = new Builder_2(new AppendableFormatStructure());
    block(builder);
    return new LocalTimeFormat(builder.j2v());
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function Builder_2(actualBuilder) {
    this.h61_1 = actualBuilder;
  }
  protoOf(Builder_2).m5x = function () {
    return this.h61_1;
  };
  protoOf(Builder_2).v5x = function (structure) {
    this.h61_1.p5x(structure);
  };
  protoOf(Builder_2).r5x = function () {
    return new Builder_2(new AppendableFormatStructure());
  };
  function LocalTimeFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.i61_1 = actualFormat;
  }
  protoOf(LocalTimeFormat).k5y = function () {
    return this.i61_1;
  };
  protoOf(LocalTimeFormat).j61 = function (intermediate) {
    return intermediate.z5w();
  };
  protoOf(LocalTimeFormat).m5y = function (intermediate) {
    return this.j61(intermediate instanceof IncompleteLocalTime ? intermediate : THROW_CCE());
  };
  protoOf(LocalTimeFormat).n5y = function () {
    return get_emptyIncompleteLocalTime();
  };
  function AbstractWithTimeBuilder() {
  }
  function HourDirective(padding) {
    var tmp = TimeFields_getInstance().k61_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.u61_1 = padding;
  }
  protoOf(HourDirective).equals = function (other) {
    var tmp;
    if (other instanceof HourDirective) {
      tmp = this.u61_1.equals(other.u61_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HourDirective).hashCode = function () {
    return this.u61_1.hashCode();
  };
  function MinuteDirective(padding) {
    var tmp = TimeFields_getInstance().l61_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.z61_1 = padding;
  }
  protoOf(MinuteDirective).equals = function (other) {
    var tmp;
    if (other instanceof MinuteDirective) {
      tmp = this.z61_1.equals(other.z61_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MinuteDirective).hashCode = function () {
    return this.z61_1.hashCode();
  };
  function SecondDirective(padding) {
    var tmp = TimeFields_getInstance().m61_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.e62_1 = padding;
  }
  protoOf(SecondDirective).equals = function (other) {
    var tmp;
    if (other instanceof SecondDirective) {
      tmp = this.e62_1.equals(other.e62_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SecondDirective).hashCode = function () {
    return this.e62_1.hashCode();
  };
  function Companion_10() {
    Companion_instance_10 = this;
    this.f62_1 = listOf([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    this.g62_1 = listOf([2, 1, 0, 2, 1, 0, 2, 1, 0]);
  }
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function FractionalSecondDirective(minDigits, maxDigits, zerosToAdd) {
    Companion_getInstance_10();
    zerosToAdd = zerosToAdd === VOID ? Companion_getInstance_10().f62_1 : zerosToAdd;
    DecimalFractionFieldFormatDirective.call(this, TimeFields_getInstance().n61_1, minDigits, maxDigits, zerosToAdd);
    this.l62_1 = minDigits;
    this.m62_1 = maxDigits;
  }
  protoOf(FractionalSecondDirective).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof FractionalSecondDirective) {
      tmp_0 = this.l62_1 === other.l62_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.m62_1 === other.m62_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(FractionalSecondDirective).hashCode = function () {
    return imul(31, this.l62_1) + this.m62_1 | 0;
  };
  function TimeFields() {
    TimeFields_instance = this;
    this.k61_1 = new UnsignedFieldSpec(new PropertyAccessor(hour$factory_0()), 0, 23);
    this.l61_1 = new UnsignedFieldSpec(new PropertyAccessor(minute$factory_0()), 0, 59);
    this.m61_1 = new UnsignedFieldSpec(new PropertyAccessor(second$factory_0()), 0, 59, VOID, 0);
    this.n61_1 = new GenericFieldSpec(new PropertyAccessor(fractionOfSecond$factory()), VOID, new DecimalFraction(0, 9));
    this.o61_1 = new GenericFieldSpec(new PropertyAccessor(amPm$factory_0()));
    this.p61_1 = new UnsignedFieldSpec(new PropertyAccessor(hourOfAmPm$factory_0()), 1, 12);
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
    return tmp.g61(ISO_TIME$delegate$lambda$lambda);
  }
  function ISO_TIME$delegate$lambda$lambda($this$build) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    $this$build.q5v();
    char($this$build, _Char___init__impl__6a9atx(58));
    $this$build.r5v();
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
    $this$alternativeParsing.s5v();
    optional($this$alternativeParsing, VOID, ISO_TIME$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_TIME$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_LocalTimeFormat_kt__5i3lfh();
    char($this$optional, _Char___init__impl__6a9atx(46));
    $this$optional.t5v(1, 9);
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
      return receiver.t5u();
    }, function (receiver, value) {
      return receiver.s5u(value);
    });
  }
  function minute$factory_0() {
    return getPropertyCallableRef('minute', 1, KMutableProperty1, function (receiver) {
      return receiver.x5u();
    }, function (receiver, value) {
      return receiver.w5u(value);
    });
  }
  function second$factory_0() {
    return getPropertyCallableRef('second', 1, KMutableProperty1, function (receiver) {
      return receiver.b5v();
    }, function (receiver, value) {
      return receiver.a5v(value);
    });
  }
  function fractionOfSecond$factory() {
    return getPropertyCallableRef('fractionOfSecond', 1, KMutableProperty1, function (receiver) {
      return receiver.r5u();
    }, function (receiver, value) {
      return receiver.q5u(value);
    });
  }
  function amPm$factory_0() {
    return getPropertyCallableRef('amPm', 1, KMutableProperty1, function (receiver) {
      return receiver.p5u();
    }, function (receiver, value) {
      return receiver.i5u(value);
    });
  }
  function hourOfAmPm$factory_0() {
    return getPropertyCallableRef('hourOfAmPm', 1, KMutableProperty1, function (receiver) {
      return receiver.v5u();
    }, function (receiver, value) {
      return receiver.u5u(value);
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
    this.d5v_1 = isNegative;
    this.e5v_1 = totalHoursAbs;
    this.f5v_1 = minutesOfHour;
    this.g5v_1 = secondsOfMinute;
  }
  protoOf(IncompleteUtcOffset).c5v = function (_set____db54di) {
    this.d5v_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).h5v = function () {
    return this.d5v_1;
  };
  protoOf(IncompleteUtcOffset).m5v = function (_set____db54di) {
    this.e5v_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).n5v = function () {
    return this.e5v_1;
  };
  protoOf(IncompleteUtcOffset).i5v = function (_set____db54di) {
    this.f5v_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).j5v = function () {
    return this.f5v_1;
  };
  protoOf(IncompleteUtcOffset).k5v = function (_set____db54di) {
    this.g5v_1 = _set____db54di;
  };
  protoOf(IncompleteUtcOffset).l5v = function () {
    return this.g5v_1;
  };
  protoOf(IncompleteUtcOffset).y5w = function () {
    var sign = this.d5v_1 === true ? -1 : 1;
    var tmp0_safe_receiver = this.e5v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = imul(tmp0_safe_receiver, sign);
    }
    var tmp_0 = tmp;
    var tmp1_safe_receiver = this.f5v_1;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = imul(tmp1_safe_receiver, sign);
    }
    var tmp_2 = tmp_1;
    var tmp2_safe_receiver = this.g5v_1;
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
      tmp_2 = this.d5v_1 == other.d5v_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.e5v_1 == other.e5v_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.f5v_1 == other.f5v_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.g5v_1 == other.g5v_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IncompleteUtcOffset).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.d5v_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.e5v_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp_0 = tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.f5v_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp_1 = tmp_0 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.g5v_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    return tmp_1 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
  };
  protoOf(IncompleteUtcOffset).o5v = function () {
    return new IncompleteUtcOffset(this.d5v_1, this.e5v_1, this.f5v_1, this.g5v_1);
  };
  protoOf(IncompleteUtcOffset).toString = function () {
    var tmp0_safe_receiver = this.d5v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = tmp0_safe_receiver ? '-' : '+';
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0 = tmp1_elvis_lhs == null ? ' ' : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = this.e5v_1;
    var tmp_1 = toString(tmp2_elvis_lhs == null ? '??' : tmp2_elvis_lhs);
    var tmp3_elvis_lhs = this.f5v_1;
    var tmp_2 = toString(tmp3_elvis_lhs == null ? '??' : tmp3_elvis_lhs);
    var tmp4_elvis_lhs = this.g5v_1;
    return tmp_0 + tmp_1 + ':' + tmp_2 + ':' + toString(tmp4_elvis_lhs == null ? '??' : tmp4_elvis_lhs);
  };
  function UtcOffsetWholeHoursDirective(padding) {
    var tmp = OffsetFields_getInstance().s62_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.z62_1 = padding;
  }
  protoOf(UtcOffsetWholeHoursDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetWholeHoursDirective) {
      tmp = this.z62_1.equals(other.z62_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetWholeHoursDirective).hashCode = function () {
    return this.z62_1.hashCode();
  };
  function Companion_11() {
  }
  protoOf(Companion_11).a63 = function (block) {
    var builder = new Builder_3(new AppendableFormatStructure());
    block(builder);
    return new UtcOffsetFormat(builder.j2v());
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function Builder_3(actualBuilder) {
    this.b63_1 = actualBuilder;
  }
  protoOf(Builder_3).m5x = function () {
    return this.b63_1;
  };
  protoOf(Builder_3).q5x = function (structure) {
    this.b63_1.p5x(structure);
  };
  protoOf(Builder_3).r5x = function () {
    return new Builder_3(new AppendableFormatStructure());
  };
  function UtcOffsetFormat(actualFormat) {
    AbstractDateTimeFormat.call(this);
    this.c63_1 = actualFormat;
  }
  protoOf(UtcOffsetFormat).k5y = function () {
    return this.c63_1;
  };
  protoOf(UtcOffsetFormat).d63 = function (intermediate) {
    return intermediate.y5w();
  };
  protoOf(UtcOffsetFormat).m5y = function (intermediate) {
    return this.d63(intermediate instanceof IncompleteUtcOffset ? intermediate : THROW_CCE());
  };
  protoOf(UtcOffsetFormat).n5y = function () {
    return get_emptyIncompleteUtcOffset();
  };
  function OffsetFields$sign$1() {
    this.e63_1 = new PropertyAccessor(isNegative$factory_0());
  }
  protoOf(OffsetFields$sign$1).h5v = function () {
    return this.e63_1;
  };
  protoOf(OffsetFields$sign$1).f63 = function (obj) {
    var tmp;
    var tmp_0;
    var tmp0_elvis_lhs = obj.n5v();
    if ((tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) === 0) {
      var tmp1_elvis_lhs = obj.j5v();
      tmp_0 = (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) === 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp2_elvis_lhs = obj.l5v();
      tmp = (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OffsetFields$sign$1).g63 = function (obj) {
    return this.f63((!(obj == null) ? isInterface(obj, UtcOffsetFieldContainer) : false) ? obj : THROW_CCE());
  };
  function OffsetFields() {
    OffsetFields_instance = this;
    var tmp = this;
    tmp.r62_1 = new OffsetFields$sign$1();
    var tmp_0 = this;
    var tmp0_accessor = new PropertyAccessor(totalHoursAbs$factory_0());
    var tmp1_sign = this.r62_1;
    tmp_0.s62_1 = new UnsignedFieldSpec(tmp0_accessor, 0, 18, VOID, 0, tmp1_sign);
    var tmp_1 = this;
    var tmp0_accessor_0 = new PropertyAccessor(minutesOfHour$factory_0());
    var tmp1_sign_0 = this.r62_1;
    tmp_1.t62_1 = new UnsignedFieldSpec(tmp0_accessor_0, 0, 59, VOID, 0, tmp1_sign_0);
    var tmp_2 = this;
    var tmp0_accessor_1 = new PropertyAccessor(secondsOfMinute$factory_0());
    var tmp1_sign_1 = this.r62_1;
    tmp_2.u62_1 = new UnsignedFieldSpec(tmp0_accessor_1, 0, 59, VOID, 0, tmp1_sign_1);
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
    var tmp = OffsetFields_getInstance().t62_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.l63_1 = padding;
  }
  protoOf(UtcOffsetMinuteOfHourDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetMinuteOfHourDirective) {
      tmp = this.l63_1.equals(other.l63_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetMinuteOfHourDirective).hashCode = function () {
    return this.l63_1.hashCode();
  };
  function UtcOffsetSecondOfMinuteDirective(padding) {
    var tmp = OffsetFields_getInstance().u62_1;
    // Inline function 'kotlinx.datetime.format.minDigits' call
    var tmp_0 = padding.equals(Padding_ZERO_getInstance()) ? 2 : 1;
    // Inline function 'kotlinx.datetime.format.spaces' call
    var tmp$ret$1 = padding.equals(Padding_SPACE_getInstance()) ? 2 : null;
    UnsignedIntFieldFormatDirective.call(this, tmp, tmp_0, tmp$ret$1);
    this.q63_1 = padding;
  }
  protoOf(UtcOffsetSecondOfMinuteDirective).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffsetSecondOfMinuteDirective) {
      tmp = this.q63_1.equals(other.q63_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffsetSecondOfMinuteDirective).hashCode = function () {
    return this.q63_1.hashCode();
  };
  function ISO_OFFSET$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_11;
    return tmp.a63(ISO_OFFSET$delegate$lambda$lambda);
  }
  function ISO_OFFSET$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = [ISO_OFFSET$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_OFFSET$delegate$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$alternativeParsing.b5w('z');
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    optional($this$alternativeParsing, 'Z', ISO_OFFSET$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.u5v();
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.g5y();
    optional($this$optional, VOID, ISO_OFFSET$delegate$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET$delegate$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    char($this$optional, _Char___init__impl__6a9atx(58));
    $this$optional.i5y();
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_11;
    return tmp.a63(ISO_OFFSET_BASIC$delegate$lambda$lambda);
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = [ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda];
    alternativeParsing($this$build, tmp, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda_0);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$alternativeParsing.b5w('z');
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda_0($this$alternativeParsing) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    optional($this$alternativeParsing, 'Z', ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.u5v();
    optional($this$optional, VOID, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.g5y();
    optional($this$optional, VOID, ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit_instance;
  }
  function ISO_OFFSET_BASIC$delegate$lambda$lambda$lambda$lambda$lambda$lambda($this$optional) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$optional.i5y();
    return Unit_instance;
  }
  function FOUR_DIGIT_OFFSET$delegate$lambda() {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    var tmp = Companion_instance_11;
    return tmp.a63(FOUR_DIGIT_OFFSET$delegate$lambda$lambda);
  }
  function FOUR_DIGIT_OFFSET$delegate$lambda$lambda($this$build) {
    _init_properties_UtcOffsetFormat_kt__9r9ddw();
    $this$build.u5v();
    $this$build.g5y();
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
      return receiver.n5v();
    }, function (receiver, value) {
      return receiver.m5v(value);
    });
  }
  function minutesOfHour$factory_0() {
    return getPropertyCallableRef('minutesOfHour', 1, KMutableProperty1, function (receiver) {
      return receiver.j5v();
    }, function (receiver, value) {
      return receiver.i5v(value);
    });
  }
  function secondsOfMinute$factory_0() {
    return getPropertyCallableRef('secondsOfMinute', 1, KMutableProperty1, function (receiver) {
      return receiver.l5v();
    }, function (receiver, value) {
      return receiver.k5v(value);
    });
  }
  function isNegative$factory_0() {
    return getPropertyCallableRef('isNegative', 1, KMutableProperty1, function (receiver) {
      return receiver.h5v();
    }, function (receiver, value) {
      return receiver.c5v(value);
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
    tmp.o5x_1 = ArrayList_init_$Create$_0();
  }
  protoOf(AppendableFormatStructure).j2v = function () {
    return new ConcatenatedFormatStructure(this.o5x_1);
  };
  protoOf(AppendableFormatStructure).p5x = function (format) {
    if (isInterface(format, NonConcatenatedFormatStructure)) {
      this.o5x_1.n(format);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.v5y_1.p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
          this.o5x_1.n(element);
        }
      }
    }
  };
  function Accessor$getterNotNull$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.r63(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function SignedIntFieldFormatDirective(field, minDigits, maxDigits, spacePadding, outputPlusOnExceededWidth) {
    this.q5z_1 = field;
    this.r5z_1 = minDigits;
    this.s5z_1 = maxDigits;
    this.t5z_1 = spacePadding;
    this.u5z_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.r5z_1 == null || this.r5z_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.r5z_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.s5z_1 == null || this.r5z_1 == null || this.s5z_1 >= this.r5z_1)) {
      var message_0 = 'The maximum number of digits (' + this.s5z_1 + ') is less than the minimum number of digits (' + this.r5z_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(SignedIntFieldFormatDirective).v5z = function () {
    return this.q5z_1;
  };
  protoOf(SignedIntFieldFormatDirective).w5z = function () {
    var tmp = Accessor$getterNotNull$ref(this.q5z_1.s63());
    var tmp0_elvis_lhs = this.r5z_1;
    var formatter = new SignedIntFormatterStructure(tmp, tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs, this.u5z_1);
    return !(this.t5z_1 == null) ? new SpacePaddedFormatter(formatter, this.t5z_1) : formatter;
  };
  protoOf(SignedIntFieldFormatDirective).u5y = function () {
    return SignedIntParser(this.r5z_1, this.s5z_1, this.t5z_1, this.q5z_1.s63(), this.q5z_1.s2(), this.u5z_1);
  };
  function Accessor$getterNotNull$ref_0($boundThis) {
    var l = function (p0) {
      return $boundThis.r63(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function UnsignedIntFieldFormatDirective(field, minDigits, spacePadding) {
    this.c60_1 = field;
    this.d60_1 = minDigits;
    this.e60_1 = spacePadding;
    this.f60_1 = this.c60_1.z63_1;
    // Inline function 'kotlin.require' call
    if (!(this.d60_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.d60_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.f60_1 >= this.d60_1)) {
      var message_0 = 'The maximum number of digits (' + this.f60_1 + ') is less than the minimum number of digits (' + this.d60_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (!(this.e60_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!(this.e60_1 > this.d60_1)) {
        var message_1 = 'The space padding (' + this.e60_1 + ') should be more than the minimum number of digits (' + this.d60_1 + ')';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
  }
  protoOf(UnsignedIntFieldFormatDirective).v5z = function () {
    return this.c60_1;
  };
  protoOf(UnsignedIntFieldFormatDirective).w5z = function () {
    var formatter = new UnsignedIntFormatterStructure(Accessor$getterNotNull$ref_0(this.c60_1.t63_1), this.d60_1);
    return !(this.e60_1 == null) ? new SpacePaddedFormatter(formatter, this.e60_1) : formatter;
  };
  protoOf(UnsignedIntFieldFormatDirective).u5y = function () {
    return spaceAndZeroPaddedUnsignedInt(this.d60_1, this.f60_1, this.e60_1, this.c60_1.t63_1, this.c60_1.w63_1);
  };
  function getStringValue($this, target) {
    // Inline function 'kotlin.let' call
    var it = $this.k60_1.t63_1.r63(target);
    var tmp0_elvis_lhs = getOrNull($this.l60_1, it - $this.k60_1.u63_1 | 0);
    return tmp0_elvis_lhs == null ? 'The value ' + it + ' of ' + $this.k60_1.w63_1 + ' does not have a corresponding string representation' : tmp0_elvis_lhs;
  }
  function AssignableString($outer) {
    this.a64_1 = $outer;
  }
  protoOf(AssignableString).b64 = function (container, newValue) {
    var tmp0_safe_receiver = this.a64_1.k60_1.t63_1.c64(container, this.a64_1.l60_1.z1(newValue) + this.a64_1.k60_1.u63_1 | 0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.a64_1.l60_1.u(tmp0_safe_receiver - this.a64_1.k60_1.u63_1 | 0);
    }
    return tmp;
  };
  protoOf(AssignableString).c64 = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.b64(tmp, (!(newValue == null) ? typeof newValue === 'string' : false) ? newValue : THROW_CCE());
  };
  protoOf(AssignableString).s2 = function () {
    return this.a64_1.m60_1;
  };
  function NamedUnsignedIntFieldFormatDirective$getStringValue$ref($boundThis) {
    var l = function (p0) {
      return getStringValue($boundThis, p0);
    };
    l.callableName = 'getStringValue';
    return l;
  }
  function NamedUnsignedIntFieldFormatDirective(field, values, name) {
    this.k60_1 = field;
    this.l60_1 = values;
    this.m60_1 = name;
    // Inline function 'kotlin.require' call
    if (!(this.l60_1.s() === ((this.k60_1.v63_1 - this.k60_1.u63_1 | 0) + 1 | 0))) {
      var message = 'The number of values (' + this.l60_1.s() + ') in ' + toString(this.l60_1) + ' does not match the range of the field (' + ((this.k60_1.v63_1 - this.k60_1.u63_1 | 0) + 1 | 0) + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(NamedUnsignedIntFieldFormatDirective).v5z = function () {
    return this.k60_1;
  };
  protoOf(NamedUnsignedIntFieldFormatDirective).w5z = function () {
    return new StringFormatterStructure(NamedUnsignedIntFieldFormatDirective$getStringValue$ref(this));
  };
  protoOf(NamedUnsignedIntFieldFormatDirective).u5y = function () {
    return new ParserStructure(listOf_0(new StringSetParserOperation(this.l60_1, new AssignableString(this), 'one of ' + toString(this.l60_1) + ' for ' + this.m60_1)), emptyList());
  };
  function Accessor$getterNotNull$ref_1($boundThis) {
    var l = function (p0) {
      return $boundThis.r63(p0);
    };
    l.callableName = 'getterNotNull';
    return l;
  }
  function DecimalFractionFieldFormatDirective(field, minDigits, maxDigits, zerosToAdd) {
    this.n62_1 = field;
    this.o62_1 = minDigits;
    this.p62_1 = maxDigits;
    this.q62_1 = zerosToAdd;
  }
  protoOf(DecimalFractionFieldFormatDirective).v5z = function () {
    return this.n62_1;
  };
  protoOf(DecimalFractionFieldFormatDirective).w5z = function () {
    return new DecimalFractionFormatterStructure(Accessor$getterNotNull$ref_1(this.n62_1.s63()), this.o62_1, this.p62_1, this.q62_1);
  };
  protoOf(DecimalFractionFieldFormatDirective).u5y = function () {
    return new ParserStructure(listOf_0(new NumberSpanParserOperation(listOf_0(new FractionPartConsumer(this.o62_1, this.p62_1, this.n62_1.s63(), this.n62_1.s2())))), emptyList());
  };
  function GenericFieldSpec(accessor, name, defaultValue, sign) {
    name = name === VOID ? accessor.s2() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.d64_1 = accessor;
    this.e64_1 = name;
    this.f64_1 = defaultValue;
    this.g64_1 = sign;
  }
  protoOf(GenericFieldSpec).s63 = function () {
    return this.d64_1;
  };
  protoOf(GenericFieldSpec).s2 = function () {
    return this.e64_1;
  };
  protoOf(GenericFieldSpec).h64 = function () {
    return this.f64_1;
  };
  protoOf(GenericFieldSpec).i64 = function () {
    return this.g64_1;
  };
  function PropertyAccessor(property) {
    this.j64_1 = property;
  }
  protoOf(PropertyAccessor).s2 = function () {
    return this.j64_1.callableName;
  };
  protoOf(PropertyAccessor).k64 = function (container, newValue) {
    var oldValue = this.j64_1.get(container);
    var tmp;
    if (oldValue === null) {
      this.j64_1.set(container, newValue);
      tmp = null;
    } else if (equals(oldValue, newValue)) {
      tmp = null;
    } else {
      tmp = oldValue;
    }
    return tmp;
  };
  protoOf(PropertyAccessor).c64 = function (container, newValue) {
    var tmp = (container == null ? true : !(container == null)) ? container : THROW_CCE();
    return this.k64(tmp, (newValue == null ? true : !(newValue == null)) ? newValue : THROW_CCE());
  };
  protoOf(PropertyAccessor).l64 = function (container) {
    return this.j64_1.get(container);
  };
  function UnsignedFieldSpec(accessor, minValue, maxValue, name, defaultValue, sign) {
    name = name === VOID ? accessor.s2() : name;
    defaultValue = defaultValue === VOID ? null : defaultValue;
    sign = sign === VOID ? null : sign;
    AbstractFieldSpec.call(this);
    this.t63_1 = accessor;
    this.u63_1 = minValue;
    this.v63_1 = maxValue;
    this.w63_1 = name;
    this.x63_1 = defaultValue;
    this.y63_1 = sign;
    var tmp = this;
    var tmp_0;
    if (this.v63_1 < 10) {
      tmp_0 = 1;
    } else if (this.v63_1 < 100) {
      tmp_0 = 2;
    } else if (this.v63_1 < 1000) {
      tmp_0 = 3;
    } else {
      throw IllegalArgumentException_init_$Create$('Max value ' + this.v63_1 + ' is too large');
    }
    tmp.z63_1 = tmp_0;
  }
  protoOf(UnsignedFieldSpec).s63 = function () {
    return this.t63_1;
  };
  protoOf(UnsignedFieldSpec).s2 = function () {
    return this.w63_1;
  };
  protoOf(UnsignedFieldSpec).h64 = function () {
    return this.x63_1;
  };
  protoOf(UnsignedFieldSpec).i64 = function () {
    return this.y63_1;
  };
  function Accessor() {
  }
  function AbstractFieldSpec() {
  }
  protoOf(AbstractFieldSpec).toString = function () {
    return 'The field ' + this.s2() + ' (default value is ' + toString_1(this.h64()) + ')';
  };
  function CachedFormatStructure(formats) {
    ConcatenatedFormatStructure.call(this, formats);
    this.s5y_1 = protoOf(ConcatenatedFormatStructure).w5z.call(this);
    this.t5y_1 = protoOf(ConcatenatedFormatStructure).u5y.call(this);
  }
  protoOf(CachedFormatStructure).w5z = function () {
    return this.s5y_1;
  };
  protoOf(CachedFormatStructure).u5y = function () {
    return this.t5y_1;
  };
  function BasicFormatStructure(directive) {
    this.m64_1 = directive;
  }
  protoOf(BasicFormatStructure).toString = function () {
    return 'BasicFormatStructure(' + toString(this.m64_1) + ')';
  };
  protoOf(BasicFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof BasicFormatStructure) {
      tmp = equals(this.m64_1, other.m64_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(BasicFormatStructure).hashCode = function () {
    return hashCode(this.m64_1);
  };
  protoOf(BasicFormatStructure).u5y = function () {
    return this.m64_1.u5y();
  };
  protoOf(BasicFormatStructure).w5z = function () {
    return this.m64_1.w5z();
  };
  function ConstantFormatStructure(string) {
    this.n64_1 = string;
  }
  protoOf(ConstantFormatStructure).toString = function () {
    return 'ConstantFormatStructure(' + this.n64_1 + ')';
  };
  protoOf(ConstantFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConstantFormatStructure) {
      tmp = this.n64_1 === other.n64_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConstantFormatStructure).hashCode = function () {
    return getStringHashCode(this.n64_1);
  };
  protoOf(ConstantFormatStructure).u5y = function () {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.n64_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = emptyList();
    } else {
      // Inline function 'kotlin.collections.buildList' call
      // Inline function 'kotlin.collections.buildListInternal' call
      // Inline function 'kotlin.apply' call
      var this_1 = ArrayList_init_$Create$_0();
      var tmp_0;
      if (isAsciiDigit(charSequenceGet(this.n64_1, 0))) {
        var tmp0 = this.n64_1;
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
        var tmp2 = this.n64_1;
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
        tmp_0 = this.n64_1;
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
  protoOf(ConstantFormatStructure).w5z = function () {
    return new ConstantStringFormatterStructure(this.n64_1);
  };
  function formatter$checkIfAllNegative(this$0, value) {
    var seenNonZero = false;
    var tmp0_iterator = this$0.q64_1.p();
    $l$loop: while (tmp0_iterator.q()) {
      var check = tmp0_iterator.r();
      if (check.h5v().l64(value) === true)
        seenNonZero = true;
      else if (check.g63(value))
        continue $l$loop;
      else
        return false;
    }
    return seenNonZero;
  }
  function SignedFormatStructure$parser$lambda(this$0) {
    return function (value, isNegative) {
      var tmp0_iterator = this$0.q64_1.p();
      while (tmp0_iterator.q()) {
        var field = tmp0_iterator.r();
        var wasNegative = field.h5v().l64(value) === true;
        field.h5v().c64(value, !(isNegative === wasNegative));
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
    this.o64_1 = format;
    this.p64_1 = withPlusSign;
    var tmp = this;
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0 = basicFormats(this.o64_1);
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = tmp0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp0_safe_receiver = element.v5z().i64();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.n(tmp0_safe_receiver);
      }
    }
    tmp.q64_1 = toSet(destination);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.q64_1.h()) {
      var message = 'Signed format must contain at least one field with a sign';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(SignedFormatStructure).toString = function () {
    return 'SignedFormatStructure(' + toString(this.o64_1) + ')';
  };
  protoOf(SignedFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof SignedFormatStructure) {
      tmp_0 = equals(this.o64_1, other.o64_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.p64_1 === other.p64_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SignedFormatStructure).hashCode = function () {
    return imul(31, hashCode(this.o64_1)) + getBooleanHashCode(this.p64_1) | 0;
  };
  protoOf(SignedFormatStructure).u5y = function () {
    return concat(listOf([new ParserStructure(listOf_0(new SignParser(SignedFormatStructure$parser$lambda(this), this.p64_1, 'sign for ' + toString(this.q64_1))), emptyList()), this.o64_1.u5y()]));
  };
  protoOf(SignedFormatStructure).w5z = function () {
    var innerFormat = this.o64_1.w5z();
    return new SignedFormatter(innerFormat, SignedFormatStructure$formatter$checkIfAllNegative$ref(this), this.p64_1);
  };
  function Companion_12() {
  }
  protoOf(Companion_12).r64 = function (field) {
    var default_0 = field.h64();
    // Inline function 'kotlin.require' call
    if (!!(default_0 == null)) {
      var message = "The field '" + field.s2() + "' does not define a default value";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new PropertyWithDefault(field.s63(), default_0);
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function access$_get_accessor__yxxs4k($this) {
    return $this.s64_1;
  }
  function access$_get_defaultValue__8tt04b($this) {
    return $this.t64_1;
  }
  function PropertyWithDefault(accessor, defaultValue) {
    this.s64_1 = accessor;
    this.t64_1 = defaultValue;
  }
  function OptionalFormatStructure$parser$lambda(this$0) {
    return function (it) {
      var tmp0_iterator = this$0.w64_1.p();
      while (tmp0_iterator.q()) {
        var field = tmp0_iterator.r();
        // Inline function 'kotlinx.datetime.internal.format.PropertyWithDefault.assignDefault' call
        access$_get_accessor__yxxs4k(field).c64(it, access$_get_defaultValue__8tt04b(field));
      }
      return Unit_instance;
    };
  }
  function Accessor$getter$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.l64(p0);
    };
    l.callableName = 'getter';
    return l;
  }
  function Predicate$test$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.x64(p0);
    };
    l.callableName = 'test';
    return l;
  }
  function Truth$test$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.y64(p0);
    };
    l.callableName = 'test';
    return l;
  }
  function OptionalFormatStructure(onZero, format) {
    this.u64_1 = onZero;
    this.v64_1 = format;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = basicFormats(this.v64_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = item.v5z();
      destination.n(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.map' call
    var this_1 = distinct(destination);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var _iterator__ex2g4s_0 = this_1.p();
    while (_iterator__ex2g4s_0.q()) {
      var item_0 = _iterator__ex2g4s_0.r();
      var tmp$ret$3 = Companion_instance_12.r64(item_0);
      destination_0.n(tmp$ret$3);
    }
    tmp.w64_1 = destination_0;
  }
  protoOf(OptionalFormatStructure).toString = function () {
    return 'Optional(' + this.u64_1 + ', ' + toString(this.v64_1) + ')';
  };
  protoOf(OptionalFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof OptionalFormatStructure) {
      tmp_0 = this.u64_1 === other.u64_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.v64_1, other.v64_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OptionalFormatStructure).hashCode = function () {
    return imul(31, getStringHashCode(this.u64_1)) + hashCode(this.v64_1) | 0;
  };
  protoOf(OptionalFormatStructure).u5y = function () {
    var tmp = emptyList();
    var tmp_0 = this.v64_1.u5y();
    var tmp_1 = (new ConstantFormatStructure(this.u64_1)).u5y();
    var tmp_2;
    if (this.w64_1.h()) {
      tmp_2 = emptyList();
    } else {
      tmp_2 = listOf_0(new UnconditionalModification(OptionalFormatStructure$parser$lambda(this)));
    }
    return new ParserStructure(tmp, listOf([tmp_0, concat(listOf([tmp_1, new ParserStructure(tmp_2, emptyList())]))]));
  };
  protoOf(OptionalFormatStructure).w5z = function () {
    var formatter = this.v64_1.w5z();
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.w64_1;
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
      tmp_0 = new ConstantStringFormatterStructure(this.u64_1);
    } else {
      var tmp_1 = to(Predicate$test$ref(predicate), new ConstantStringFormatterStructure(this.u64_1));
      tmp_0 = new ConditionalFormatter(listOf([tmp_1, to(Truth$test$ref(Truth_instance), formatter)]));
    }
    return tmp_0;
  };
  function AlternativesParsingFormatStructure(mainFormat, formats) {
    this.z64_1 = mainFormat;
    this.a65_1 = formats;
  }
  protoOf(AlternativesParsingFormatStructure).toString = function () {
    return 'AlternativesParsing(' + toString(this.a65_1) + ')';
  };
  protoOf(AlternativesParsingFormatStructure).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AlternativesParsingFormatStructure) {
      tmp_0 = equals(this.z64_1, other.z64_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.a65_1, other.a65_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AlternativesParsingFormatStructure).hashCode = function () {
    return imul(31, hashCode(this.z64_1)) + hashCode(this.a65_1) | 0;
  };
  protoOf(AlternativesParsingFormatStructure).u5y = function () {
    var tmp = emptyList();
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$_0();
    this_0.n(this.z64_1.u5y());
    var tmp0_iterator = this.a65_1.p();
    while (tmp0_iterator.q()) {
      var format = tmp0_iterator.r();
      this_0.n(format.u5y());
    }
    var tmp$ret$3 = this_0.v3();
    return new ParserStructure(tmp, tmp$ret$3);
  };
  protoOf(AlternativesParsingFormatStructure).w5z = function () {
    return this.z64_1.w5z();
  };
  function ConcatenatedFormatStructure(formats) {
    this.v5y_1 = formats;
  }
  protoOf(ConcatenatedFormatStructure).toString = function () {
    return 'ConcatenatedFormatStructure(' + joinToString(this.v5y_1, ', ') + ')';
  };
  protoOf(ConcatenatedFormatStructure).equals = function (other) {
    var tmp;
    if (other instanceof ConcatenatedFormatStructure) {
      tmp = equals(this.v5y_1, other.v5y_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ConcatenatedFormatStructure).hashCode = function () {
    return hashCode(this.v5y_1);
  };
  protoOf(ConcatenatedFormatStructure).u5y = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.v5y_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = item.u5y();
      destination.n(tmp$ret$0);
    }
    return concat(destination);
  };
  protoOf(ConcatenatedFormatStructure).w5z = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.v5y_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = item.w5z();
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
      $this_buildList.n(format.m64_1);
    } else {
      if (format instanceof ConcatenatedFormatStructure) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = format.v5y_1.p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
          basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element);
        }
      } else {
        if (!(format instanceof ConstantFormatStructure)) {
          if (format instanceof SignedFormatStructure) {
            basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.o64_1);
          } else {
            if (format instanceof AlternativesParsingFormatStructure) {
              basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.z64_1);
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_0 = format.a65_1.p();
              while (_iterator__ex2g4s_0.q()) {
                var element_0 = _iterator__ex2g4s_0.r();
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, element_0);
              }
            } else {
              if (format instanceof OptionalFormatStructure) {
                basicFormats$_anonymous_$rec_hkf0lf($this_buildList, format.v64_1);
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
    this.b65_1 = expectedValue;
    this.c65_1 = getter;
  }
  protoOf(ComparisonPredicate).x64 = function (value) {
    return equals(this.c65_1(value), this.b65_1);
  };
  function Truth() {
  }
  protoOf(Truth).y64 = function (value) {
    return true;
  };
  protoOf(Truth).x64 = function (value) {
    return this.y64((value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  var Truth_instance;
  function Truth_getInstance() {
    return Truth_instance;
  }
  function ConjunctionPredicate(predicates) {
    this.d65_1 = predicates;
  }
  protoOf(ConjunctionPredicate).x64 = function (value) {
    var tmp0 = this.d65_1;
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
        if (!element.x64(value)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function SpacePaddedFormatter(formatter, padding) {
    this.e65_1 = formatter;
    this.f65_1 = padding;
  }
  function SignedFormatter(formatter, allSubFormatsNegative, alwaysOutputSign) {
    this.g65_1 = formatter;
    this.h65_1 = allSubFormatsNegative;
    this.i65_1 = alwaysOutputSign;
  }
  function ConditionalFormatter(formatters) {
    this.j65_1 = formatters;
  }
  function ConcatenatedFormatter(formatters) {
    this.k65_1 = formatters;
  }
  function SignedIntFormatterStructure(number, zeroPadding, outputPlusOnExceededWidth) {
    this.l65_1 = number;
    this.m65_1 = zeroPadding;
    this.n65_1 = outputPlusOnExceededWidth;
    // Inline function 'kotlin.require' call
    if (!(this.m65_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.m65_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.m65_1 <= 9)) {
      var message_0 = 'The minimum number of digits (' + this.m65_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function UnsignedIntFormatterStructure(number, zeroPadding) {
    this.o65_1 = number;
    this.p65_1 = zeroPadding;
    // Inline function 'kotlin.require' call
    if (!(this.p65_1 >= 0)) {
      var message = 'The minimum number of digits (' + this.p65_1 + ') is negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.p65_1 <= 9)) {
      var message_0 = 'The minimum number of digits (' + this.p65_1 + ') exceeds the length of an Int';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function StringFormatterStructure(string) {
    this.q65_1 = string;
  }
  function DecimalFractionFormatterStructure(number, minDigits, maxDigits, zerosToAdd) {
    this.r65_1 = number;
    this.s65_1 = minDigits;
    this.t65_1 = maxDigits;
    this.u65_1 = zerosToAdd;
    var containsArg = this.s65_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      var message = 'The minimum number of digits (' + this.s65_1 + ') is not in range 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsLower = this.s65_1;
    var containsArg_0 = this.t65_1;
    // Inline function 'kotlin.require' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      var message_0 = 'The maximum number of digits (' + this.t65_1 + ') is not in range ' + this.s65_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function ConstantStringFormatterStructure(string) {
    this.v65_1 = string;
  }
  function FractionPartConsumer(minLength, maxLength, setter, name) {
    NumberConsumer.call(this, minLength === maxLength ? minLength : null, name);
    this.y65_1 = minLength;
    this.z65_1 = maxLength;
    this.a66_1 = setter;
    var containsArg = this.y65_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 9 : false)) {
      var message = 'Invalid minimum length ' + this.y65_1 + ' for field ' + this.c66_1 + ': expected 1..9';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsLower = this.y65_1;
    var containsArg_0 = this.z65_1;
    // Inline function 'kotlin.require' call
    if (!(containsLower <= containsArg_0 ? containsArg_0 <= 9 : false)) {
      var message_0 = 'Invalid maximum length ' + this.z65_1 + ' for field ' + this.c66_1 + ': expected ' + this.y65_1 + '..9';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(FractionPartConsumer).d66 = function (storage, input, start, end) {
    return (end - start | 0) < this.y65_1 ? new TooFewDigits(this.y65_1) : (end - start | 0) > this.z65_1 ? new TooManyDigits(this.z65_1) : setWithoutReassigning(this.a66_1, storage, new DecimalFraction(parseAsciiInt(input, start, end), end - start | 0));
  };
  function ConstantNumberConsumer(expected) {
    NumberConsumer.call(this, expected.length, 'the predefined string ' + expected);
    this.g66_1 = expected;
  }
  protoOf(ConstantNumberConsumer).d66 = function (storage, input, start, end) {
    var tmp;
    // Inline function 'kotlin.text.substring' call
    if (toString(charSequenceSubSequence(input, start, end)) === this.g66_1) {
      tmp = null;
    } else {
      tmp = new WrongConstant(this.g66_1);
    }
    return tmp;
  };
  function NumberConsumer(length, whatThisExpects) {
    this.b66_1 = length;
    this.c66_1 = whatThisExpects;
  }
  protoOf(NumberConsumer).a = function () {
    return this.b66_1;
  };
  function ExpectedInt() {
  }
  protoOf(ExpectedInt).h66 = function () {
    return 'expected an Int value';
  };
  var ExpectedInt_instance;
  function ExpectedInt_getInstance() {
    return ExpectedInt_instance;
  }
  function TooManyDigits(maxDigits) {
    this.i66_1 = maxDigits;
  }
  protoOf(TooManyDigits).h66 = function () {
    return 'expected at most ' + this.i66_1 + ' digits';
  };
  function TooFewDigits(minDigits) {
    this.j66_1 = minDigits;
  }
  protoOf(TooFewDigits).h66 = function () {
    return 'expected at least ' + this.j66_1 + ' digits';
  };
  function WrongConstant(expected) {
    this.k66_1 = expected;
  }
  protoOf(WrongConstant).h66 = function () {
    return "expected '" + this.k66_1 + "'";
  };
  function Conflicting(conflicting) {
    this.l66_1 = conflicting;
  }
  protoOf(Conflicting).h66 = function () {
    return "attempted to overwrite the existing value '" + toString(this.l66_1) + "'";
  };
  function setWithoutReassigning(_this__u8e3s4, receiver, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.c64(receiver, value);
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
    this.o66_1 = minLength;
    this.p66_1 = maxLength;
    this.q66_1 = setter;
    this.r66_1 = multiplyByMinus1;
    // Inline function 'kotlin.require' call
    if (!(this.a() == null || numberRangeToNumber(1, 9).el(this.a()))) {
      var message = 'Invalid length for field ' + this.c66_1 + ': ' + this.a();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(UnsignedIntConsumer).d66 = function (storage, input, start, end) {
    var tmp;
    if (!(this.p66_1 == null) && (end - start | 0) > this.p66_1) {
      tmp = new TooManyDigits(this.p66_1);
    } else if (!(this.o66_1 == null) && (end - start | 0) < this.o66_1) {
      tmp = new TooFewDigits(this.o66_1);
    } else {
      var result = parseAsciiIntOrNull(input, start, end);
      tmp = result == null ? ExpectedInt_instance : setWithoutReassigning(this.q66_1, storage, this.r66_1 ? -result | 0 : result);
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
    this.s66_1 = position;
    this.t66_1 = message;
  }
  function _ParseResult___init__impl__gvz3cn(value) {
    return value;
  }
  function _ParseResult___get_value__impl__86mnxf($this) {
    return $this;
  }
  function Companion_13() {
  }
  protoOf(Companion_13).u66 = function (indexOfNextUnparsed) {
    return _ParseResult___init__impl__gvz3cn(indexOfNextUnparsed);
  };
  protoOf(Companion_13).v66 = function (position, message) {
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
      var output = state.w66_1.o5v();
      var inputPosition = state.y66_1;
      var parserStructure = state.x66_1;
      // Inline function 'kotlin.run' call
      $l$block: {
        var inductionVariable = 0;
        var last = parserStructure.a67_1.s() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var ix = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlinx.datetime.internal.format.parser.ParseResult.match' call
            var this_0 = parserStructure.a67_1.u(ix).c67(output, input, inputPosition);
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
        if (parserStructure.b67_1.h()) {
          if (false || inputPosition === charSequenceLength(input)) {
            return output;
          } else {
            var tmp_0 = inputPosition;
            var it_0 = new ParseError(tmp_0, Parser$match$lambda);
            errors.n(it_0);
          }
        } else {
          var inductionVariable_0 = parserStructure.b67_1.s() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var ix_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              parseOptions.n(new ParserState(output, parserStructure.b67_1.u(ix_0), inputPosition));
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
      tmp = (tmp_0 == null ? null : new Parser(tmp_0)).d67.call(new Parser($this), input, initialContainer, startIndex);
    }
    return tmp;
  }
  function ParserState(output, parserStructure, inputPosition) {
    this.w66_1 = output;
    this.x66_1 = parserStructure;
    this.y66_1 = inputPosition;
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
    var tmp0_other_with_cast = other instanceof Parser ? other.z66_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.e67_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).of = function (a, b) {
    return this.e67_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.of(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).s3 = function () {
    return this.e67_1;
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
    var tmp = b.s66_1;
    var tmp$ret$1 = a.s66_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Parser(commands) {
    this.z66_1 = commands;
  }
  protoOf(Parser).toString = function () {
    return Parser__toString_impl_x33iea(this.z66_1);
  };
  protoOf(Parser).hashCode = function () {
    return Parser__hashCode_impl_bbxllf(this.z66_1);
  };
  protoOf(Parser).equals = function (other) {
    return Parser__equals_impl_djxokv(this.z66_1, other);
  };
  function ParserStructure(operations, followedBy) {
    this.a67_1 = operations;
    this.b67_1 = followedBy;
  }
  protoOf(ParserStructure).toString = function () {
    return joinToString(this.a67_1, ', ') + '(' + joinToString(this.b67_1, ';') + ')';
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
      while (iterator.c5()) {
        var tmp2 = iterator.e5();
        var acc = accumulator;
        accumulator = concat$append(tmp2, acc);
      }
    }
    var naiveParser = accumulator;
    return concat$simplify(naiveParser, emptyList());
  }
  function formatError(errors) {
    if (errors.s() === 1) {
      return 'Position ' + errors.u(0).s66_1 + ': ' + errors.u(0).t66_1();
    }
    var averageMessageLength = 33;
    var tmp0_buffer = StringBuilder_init_$Create$(imul(averageMessageLength, errors.s()));
    return joinTo(errors, tmp0_buffer, ', ', 'Errors: ', VOID, VOID, VOID, formatError$lambda).toString();
  }
  function concat$append(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4.b67_1.h()) {
      tmp = new ParserStructure(plus(_this__u8e3s4.a67_1, other.a67_1), other.b67_1);
    } else {
      // Inline function 'kotlin.collections.map' call
      var this_0 = _this__u8e3s4.b67_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.p();
      while (_iterator__ex2g4s.q()) {
        var item = _iterator__ex2g4s.r();
        var tmp$ret$0 = concat$append(item, other);
        destination.n(tmp$ret$0);
      }
      tmp = new ParserStructure(_this__u8e3s4.a67_1, destination);
    }
    return tmp;
  }
  function concat$simplify(_this__u8e3s4, unconditionalModifications) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var newOperations = ArrayList_init_$Create$_0();
    var currentNumberSpan = null;
    var unconditionalModificationsForTails = toMutableList(unconditionalModifications);
    var tmp0_iterator = _this__u8e3s4.a67_1.p();
    while (tmp0_iterator.q()) {
      var op = tmp0_iterator.r();
      if (op instanceof NumberSpanParserOperation) {
        if (!(currentNumberSpan == null)) {
          currentNumberSpan.t(op.f67_1);
        } else {
          currentNumberSpan = toMutableList(op.f67_1);
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
    var tmp0 = _this__u8e3s4.b67_1;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var simplified = concat$simplify(element, unconditionalModificationsForTails);
      var tmp;
      if (simplified.a67_1.h()) {
        // Inline function 'kotlin.collections.ifEmpty' call
        var this_0 = simplified.b67_1;
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
          var tmp0_safe_receiver = firstOrNull(element_0.a67_1);
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
          var firstOperation = firstOrNull(item.a67_1);
          var tmp_5;
          if (firstOperation instanceof NumberSpanParserOperation) {
            tmp_5 = new ParserStructure(plus(listOf_0(new NumberSpanParserOperation(plus(currentNumberSpan, firstOperation.f67_1))), drop(item.a67_1, 1)), item.b67_1);
          } else {
            if (firstOperation == null) {
              tmp_5 = new ParserStructure(listOf_0(new NumberSpanParserOperation(currentNumberSpan)), item.b67_1);
            } else {
              tmp_5 = new ParserStructure(plus(listOf_0(new NumberSpanParserOperation(currentNumberSpan)), item.a67_1), item.b67_1);
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
    return 'position ' + it.s66_1 + ": '" + it.t66_1() + "'";
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
    this.i67_1 = children;
    this.j67_1 = isTerminal;
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.k67_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).of = function (a, b) {
    return this.k67_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.of(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).s3 = function () {
    return this.k67_1;
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
    var tmp0_iterator = trie.i67_1.p();
    while (tmp0_iterator.q()) {
      var child = tmp0_iterator.r().ec();
      _init_$reduceTrie(child);
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var newChildren = ArrayList_init_$Create$_0();
    var tmp2_iterator = trie.i67_1.p();
    while (tmp2_iterator.q()) {
      var tmp3_loop_parameter = tmp2_iterator.r();
      var key = tmp3_loop_parameter.dc();
      var child_0 = tmp3_loop_parameter.ec();
      if (!child_0.j67_1 && child_0.i67_1.s() === 1) {
        var tmp4_container = single(child_0.i67_1);
        var grandChildKey = tmp4_container.dc();
        var grandChild = tmp4_container.ec();
        newChildren.n(to(key + grandChildKey, grandChild));
      } else {
        newChildren.n(to(key, child_0));
      }
    }
    trie.i67_1.e2();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = StringSetParserOperation$reduceTrie$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
    var tmp$ret$2 = sortedWith(newChildren, tmp$ret$1);
    trie.i67_1.t(tmp$ret$2);
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
      return 'Expected ' + this$0.m67_1 + ' but got ' + tmp$ret$0;
    };
  }
  function StringSetParserOperation$reduceTrie$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.bc_1;
    var tmp$ret$1 = b.bc_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function StringSetParserOperation(strings, setter, whatThisExpects) {
    this.l67_1 = setter;
    this.m67_1 = whatThisExpects;
    this.n67_1 = new TrieNode();
    var tmp0_iterator = strings.p();
    while (tmp0_iterator.q()) {
      var string = tmp0_iterator.r();
      // Inline function 'kotlin.text.isNotEmpty' call
      // Inline function 'kotlin.require' call
      if (!(charSequenceLength(string) > 0)) {
        var message = 'Found an empty string in ' + this.m67_1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var node = this.n67_1;
      var inductionVariable = 0;
      var last = string.length;
      while (inductionVariable < last) {
        var char = charSequenceGet(string, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        var tmp2 = node.i67_1;
        // Inline function 'kotlin.collections.binarySearchBy' call
        var key = toString_0(char);
        var toIndex = tmp2.s();
        var searchResult = binarySearch(tmp2, 0, toIndex, StringSetParserOperation$lambda(key));
        var tmp;
        if (searchResult < 0) {
          // Inline function 'kotlin.also' call
          var this_0 = new TrieNode();
          node.i67_1.g2((-searchResult | 0) - 1 | 0, to(toString_0(char), this_0));
          tmp = this_0;
        } else {
          tmp = node.i67_1.u(searchResult).cc_1;
        }
        node = tmp;
      }
      // Inline function 'kotlin.require' call
      if (!!node.j67_1) {
        var message_0 = "The string '" + string + "' was passed several times";
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      node.j67_1 = true;
    }
    _init_$reduceTrie(this.n67_1);
  }
  protoOf(StringSetParserOperation).c67 = function (storage, input, startIndex) {
    var node = this.n67_1;
    var index = {_v: startIndex};
    var lastMatch = null;
    loop: while (index._v <= charSequenceLength(input)) {
      if (node.j67_1)
        lastMatch = index._v;
      var tmp0_iterator = node.i67_1.p();
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
      tmp = setWithoutReassigning_0(this.l67_1, storage, tmp$ret$0, startIndex, lastMatch);
    } else {
      var tmp_0 = Companion_instance_13;
      tmp = tmp_0.v66(startIndex, StringSetParserOperation$consume$lambda(this, input, startIndex, index));
    }
    return tmp;
  };
  function _get_whatThisExpects__4pg11j($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.f67_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var length = item.a();
      var tmp$ret$0 = (length == null ? 'at least one digit' : '' + length + ' digits') + (' for ' + item.c66_1);
      destination.n(tmp$ret$0);
    }
    var consumerLengths = destination;
    var tmp;
    if ($this.h67_1) {
      tmp = 'a number with at least ' + $this.g67_1 + ' digits: ' + toString(consumerLengths);
    } else {
      tmp = 'a number with exactly ' + $this.g67_1 + ' digits: ' + toString(consumerLengths);
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
      return "Can not interpret the string '" + $numberString + "' as " + this$0.f67_1.u($i).c66_1 + ': ' + $error.h66();
    };
  }
  function NumberSpanParserOperation(consumers) {
    this.f67_1 = consumers;
    var tmp = this;
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s = this.f67_1.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp_0 = sum;
      var tmp0_elvis_lhs = element.a();
      sum = tmp_0 + (tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs) | 0;
    }
    tmp.g67_1 = sum;
    var tmp_1 = this;
    var tmp0 = this.f67_1;
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
    tmp_1.h67_1 = tmp$ret$2;
    var tmp0_0 = this.f67_1;
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
    var tmp3 = this.f67_1;
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
      var tmp0_1 = this.f67_1;
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
        var tmp$ret$14 = item.c66_1;
        destination_0.n(tmp$ret$14);
      }
      var fieldNames = destination_0;
      var message_0 = 'At most one variable-length numeric field in a row is allowed, but got several: ' + toString(fieldNames) + '. ' + 'Parsing is undefined: for example, with variable-length month number ' + "and variable-length day of month, '111' can be parsed as Jan 11th or Nov 1st.";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(NumberSpanParserOperation).c67 = function (storage, input, startIndex) {
    if ((startIndex + this.g67_1 | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_13;
      return tmp.v66(startIndex, NumberSpanParserOperation$consume$lambda(this));
    }
    var digitsInRow = {_v: 0};
    while ((startIndex + digitsInRow._v | 0) < charSequenceLength(input) && isAsciiDigit(charSequenceGet(input, startIndex + digitsInRow._v | 0))) {
      digitsInRow._v = digitsInRow._v + 1 | 0;
      digitsInRow._v;
    }
    if (digitsInRow._v < this.g67_1) {
      var tmp_0 = Companion_instance_13;
      return tmp_0.v66(startIndex, NumberSpanParserOperation$consume$lambda_0(digitsInRow, this));
    }
    var index = startIndex;
    var inductionVariable = 0;
    var last = this.f67_1.s() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_elvis_lhs = this.f67_1.u(i).a();
        var length = tmp1_elvis_lhs == null ? (digitsInRow._v - this.g67_1 | 0) + 1 | 0 : tmp1_elvis_lhs;
        var error = this.f67_1.u(i).d66(storage, input, index, index + length | 0);
        if (!(error == null)) {
          var tmp1 = index;
          // Inline function 'kotlin.text.substring' call
          var endIndex = index + length | 0;
          var numberString = toString(charSequenceSubSequence(input, tmp1, endIndex));
          var tmp_1 = Companion_instance_13;
          var tmp_2 = index;
          return tmp_1.v66(tmp_2, NumberSpanParserOperation$consume$lambda_1(numberString, this, i, error));
        }
        index = index + length | 0;
      }
       while (inductionVariable <= last);
    return Companion_instance_13.u66(index);
  };
  protoOf(NumberSpanParserOperation).toString = function () {
    return _get_whatThisExpects__4pg11j(this);
  };
  function PlainStringParserOperation$consume$lambda(this$0) {
    return function () {
      return "Unexpected end of input: yet to parse '" + this$0.o67_1 + "'";
    };
  }
  function PlainStringParserOperation$consume$lambda_0(this$0, $input, $startIndex, $i) {
    return function () {
      var tmp0 = $input;
      var tmp1 = $startIndex;
      // Inline function 'kotlin.text.substring' call
      var endIndex = ($startIndex + $i | 0) + 1 | 0;
      var tmp$ret$0 = toString(charSequenceSubSequence(tmp0, tmp1, endIndex));
      return 'Expected ' + this$0.o67_1 + ' but got ' + tmp$ret$0;
    };
  }
  function PlainStringParserOperation(string) {
    this.o67_1 = string;
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = this.o67_1;
    // Inline function 'kotlin.require' call
    if (!(charSequenceLength(this_0) > 0)) {
      var message = 'Empty string is not allowed';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.o67_1, 0))) {
      var message_0 = "String '" + this.o67_1 + "' starts with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!!isAsciiDigit(charSequenceGet(this.o67_1, this.o67_1.length - 1 | 0))) {
      var message_1 = "String '" + this.o67_1 + "' ends with a digit";
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
  }
  protoOf(PlainStringParserOperation).c67 = function (storage, input, startIndex) {
    if ((startIndex + this.o67_1.length | 0) > charSequenceLength(input)) {
      var tmp = Companion_instance_13;
      return tmp.v66(startIndex, PlainStringParserOperation$consume$lambda(this));
    }
    var inductionVariable = 0;
    var last = charSequenceLength(this.o67_1) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet(input, startIndex + i | 0) === charSequenceGet(this.o67_1, i))) {
          var tmp_0 = Companion_instance_13;
          return tmp_0.v66(startIndex, PlainStringParserOperation$consume$lambda_0(this, input, startIndex, i));
        }
      }
       while (inductionVariable <= last);
    return Companion_instance_13.u66(startIndex + this.o67_1.length | 0);
  };
  protoOf(PlainStringParserOperation).toString = function () {
    return "'" + this.o67_1 + "'";
  };
  function SignParser$consume$lambda(this$0, $char) {
    return function () {
      return 'Expected ' + this$0.r67_1 + ' but got ' + toString_0($char);
    };
  }
  function SignParser(isNegativeSetter, withPlusSign, whatThisExpects) {
    this.p67_1 = isNegativeSetter;
    this.q67_1 = withPlusSign;
    this.r67_1 = whatThisExpects;
  }
  protoOf(SignParser).c67 = function (storage, input, startIndex) {
    if (startIndex >= charSequenceLength(input))
      return Companion_instance_13.u66(startIndex);
    var char = charSequenceGet(input, startIndex);
    if (char === _Char___init__impl__6a9atx(45)) {
      this.p67_1(storage, true);
      return Companion_instance_13.u66(startIndex + 1 | 0);
    }
    if (char === _Char___init__impl__6a9atx(43) && this.q67_1) {
      this.p67_1(storage, false);
      return Companion_instance_13.u66(startIndex + 1 | 0);
    }
    var tmp = Companion_instance_13;
    return tmp.v66(startIndex, SignParser$consume$lambda(this, char));
  };
  protoOf(SignParser).toString = function () {
    return this.r67_1;
  };
  function UnconditionalModification(operation) {
    this.s67_1 = operation;
  }
  protoOf(UnconditionalModification).c67 = function (storage, input, startIndex) {
    this.s67_1(storage);
    return Companion_instance_13.u66(startIndex);
  };
  function setWithoutReassigning_0(_this__u8e3s4, receiver, value, position, nextIndex) {
    var conflictingValue = _this__u8e3s4.c64(receiver, value);
    var tmp;
    if (conflictingValue === null) {
      tmp = Companion_instance_13.u66(nextIndex);
    } else {
      var tmp_0 = Companion_instance_13;
      tmp = tmp_0.v66(position, setWithoutReassigning$lambda(conflictingValue, value, _this__u8e3s4));
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
    this.d61_1 = fractionalPart;
    this.e61_1 = digits;
    // Inline function 'kotlin.require' call
    if (!(this.e61_1 >= 0)) {
      var message = 'Digits must be non-negative, but was ' + this.e61_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(DecimalFraction).f61 = function (newDigits) {
    return newDigits === this.e61_1 ? this.d61_1 : newDigits > this.e61_1 ? imul(this.d61_1, get_POWERS_OF_TEN()[newDigits - this.e61_1 | 0]) : this.d61_1 / get_POWERS_OF_TEN()[this.e61_1 - newDigits | 0] | 0;
  };
  protoOf(DecimalFraction).t67 = function (other) {
    var tmp0 = this.e61_1;
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = other.e61_1;
    // Inline function 'kotlin.let' call
    var maxPrecision = Math.max(tmp0, b);
    return compareTo(this.f61(maxPrecision), other.f61(maxPrecision));
  };
  protoOf(DecimalFraction).d = function (other) {
    return this.t67(other instanceof DecimalFraction ? other : THROW_CCE());
  };
  protoOf(DecimalFraction).equals = function (other) {
    var tmp;
    if (other instanceof DecimalFraction) {
      tmp = this.t67(other) === 0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(DecimalFraction).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    var denominator = get_POWERS_OF_TEN()[this.e61_1];
    this_0.ae(this.d61_1 / denominator | 0);
    this_0.y8(_Char___init__impl__6a9atx(46));
    this_0.x8(removePrefix((denominator + (this.d61_1 % denominator | 0) | 0).toString(), '1'));
    return this_0.toString();
  };
  protoOf(DecimalFraction).hashCode = function () {
    throw UnsupportedOperationException_init_$Create$('DecimalFraction is not supposed to be used as a hash key');
  };
  function DivRemResult(q, r) {
    this.u67_1 = q;
    this.v67_1 = r;
  }
  protoOf(DivRemResult).dc = function () {
    return this.u67_1;
  };
  protoOf(DivRemResult).ec = function () {
    return this.v67_1;
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
    var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).g1y();
    $this$buildClassSerialDescriptor.p20(elementName, descriptor, annotations, false);
    return Unit_instance;
  }
  function TimeBasedDateTimeUnitSerializer() {
    TimeBasedDateTimeUnitSerializer_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.w67_1 = lazy_0(tmp_0, TimeBasedDateTimeUnitSerializer$descriptor$delegate$lambda);
  }
  protoOf(TimeBasedDateTimeUnitSerializer).g1y = function () {
    var tmp0 = this.w67_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.z();
  };
  protoOf(TimeBasedDateTimeUnitSerializer).x67 = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.g1y();
    var composite = encoder.t21(descriptor);
    composite.e23(TimeBasedDateTimeUnitSerializer_getInstance().g1y(), 0, value.s5s_1);
    composite.u21(descriptor);
  };
  protoOf(TimeBasedDateTimeUnitSerializer).h1y = function (encoder, value) {
    return this.x67(encoder, value instanceof TimeBased ? value : THROW_CCE());
  };
  protoOf(TimeBasedDateTimeUnitSerializer).i1y = function (decoder) {
    var seen = {_v: false};
    var nanoseconds = {_v: new Long(0, 0)};
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.g1y();
    var composite = decoder.t21(descriptor);
    if (composite.j22()) {
      nanoseconds._v = composite.z21(TimeBasedDateTimeUnitSerializer_getInstance().g1y(), 0);
      seen._v = true;
    } else {
      loop: while (true) {
        var elementIndex = composite.k22(TimeBasedDateTimeUnitSerializer_getInstance().g1y());
        switch (elementIndex) {
          case 0:
            nanoseconds._v = composite.z21(TimeBasedDateTimeUnitSerializer_getInstance().g1y(), 0);
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
    composite.u21(descriptor);
    if (!seen._v)
      throw MissingFieldException_init_$Create$('nanoseconds', this.g1y().h1z());
    return new TimeBased(nanoseconds._v);
  };
  var TimeBasedDateTimeUnitSerializer_instance;
  function TimeBasedDateTimeUnitSerializer_getInstance() {
    if (TimeBasedDateTimeUnitSerializer_instance == null)
      new TimeBasedDateTimeUnitSerializer();
    return TimeBasedDateTimeUnitSerializer_instance;
  }
  function _get_impl__d88w17($this) {
    var tmp0 = $this.y67_1;
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
    tmp.y67_1 = lazy_0(tmp_0, DateBasedDateTimeUnitSerializer$impl$delegate$lambda);
  }
  protoOf(DateBasedDateTimeUnitSerializer).x1y = function (decoder, klassName) {
    return _get_impl__d88w17(this).x1y(decoder, klassName);
  };
  protoOf(DateBasedDateTimeUnitSerializer).z67 = function (encoder, value) {
    return _get_impl__d88w17(this).y1y(encoder, value);
  };
  protoOf(DateBasedDateTimeUnitSerializer).y1y = function (encoder, value) {
    return this.z67(encoder, value instanceof DateBased ? value : THROW_CCE());
  };
  protoOf(DateBasedDateTimeUnitSerializer).v1y = function () {
    return getKClass(DateBased);
  };
  protoOf(DateBasedDateTimeUnitSerializer).g1y = function () {
    return _get_impl__d88w17(this).g1y();
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
    var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).g1y();
    $this$buildClassSerialDescriptor.p20('days', descriptor, annotations, false);
    return Unit_instance;
  }
  function DayBasedDateTimeUnitSerializer() {
    DayBasedDateTimeUnitSerializer_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.a68_1 = lazy_0(tmp_0, DayBasedDateTimeUnitSerializer$descriptor$delegate$lambda);
  }
  protoOf(DayBasedDateTimeUnitSerializer).g1y = function () {
    var tmp0 = this.a68_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return tmp0.z();
  };
  protoOf(DayBasedDateTimeUnitSerializer).b68 = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.g1y();
    var composite = encoder.t21(descriptor);
    composite.d23(DayBasedDateTimeUnitSerializer_getInstance().g1y(), 0, value.y5s_1);
    composite.u21(descriptor);
  };
  protoOf(DayBasedDateTimeUnitSerializer).h1y = function (encoder, value) {
    return this.b68(encoder, value instanceof DayBased ? value : THROW_CCE());
  };
  protoOf(DayBasedDateTimeUnitSerializer).i1y = function (decoder) {
    var seen = {_v: false};
    var days = {_v: 0};
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.g1y();
    var composite = decoder.t21(descriptor);
    if (composite.j22()) {
      days._v = composite.y21(DayBasedDateTimeUnitSerializer_getInstance().g1y(), 0);
      seen._v = true;
    } else {
      loop: while (true) {
        var elementIndex = composite.k22(DayBasedDateTimeUnitSerializer_getInstance().g1y());
        switch (elementIndex) {
          case 0:
            days._v = composite.y21(DayBasedDateTimeUnitSerializer_getInstance().g1y(), 0);
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
    composite.u21(descriptor);
    if (!seen._v)
      throw MissingFieldException_init_$Create$('days', this.g1y().h1z());
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
    var descriptor = (isInterface(this_0, KSerializer) ? this_0 : THROW_CCE()).g1y();
    $this$buildClassSerialDescriptor.p20('months', descriptor, annotations, false);
    return Unit_instance;
  }
  function MonthBasedDateTimeUnitSerializer() {
    MonthBasedDateTimeUnitSerializer_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.c68_1 = lazy_0(tmp_0, MonthBasedDateTimeUnitSerializer$descriptor$delegate$lambda);
  }
  protoOf(MonthBasedDateTimeUnitSerializer).g1y = function () {
    var tmp0 = this.c68_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_1();
    return tmp0.z();
  };
  protoOf(MonthBasedDateTimeUnitSerializer).d68 = function (encoder, value) {
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.g1y();
    var composite = encoder.t21(descriptor);
    composite.d23(MonthBasedDateTimeUnitSerializer_getInstance().g1y(), 0, value.z5s_1);
    composite.u21(descriptor);
  };
  protoOf(MonthBasedDateTimeUnitSerializer).h1y = function (encoder, value) {
    return this.d68(encoder, value instanceof MonthBased ? value : THROW_CCE());
  };
  protoOf(MonthBasedDateTimeUnitSerializer).i1y = function (decoder) {
    var seen = {_v: false};
    var months = {_v: 0};
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.g1y();
    var composite = decoder.t21(descriptor);
    if (composite.j22()) {
      months._v = composite.y21(MonthBasedDateTimeUnitSerializer_getInstance().g1y(), 0);
      seen._v = true;
    } else {
      loop: while (true) {
        var elementIndex = composite.k22(MonthBasedDateTimeUnitSerializer_getInstance().g1y());
        switch (elementIndex) {
          case 0:
            months._v = composite.y21(MonthBasedDateTimeUnitSerializer_getInstance().g1y(), 0);
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
    composite.u21(descriptor);
    if (!seen._v)
      throw MissingFieldException_init_$Create$('months', this.g1y().h1z());
    return new MonthBased(months._v);
  };
  var MonthBasedDateTimeUnitSerializer_instance;
  function MonthBasedDateTimeUnitSerializer_getInstance() {
    if (MonthBasedDateTimeUnitSerializer_instance == null)
      new MonthBasedDateTimeUnitSerializer();
    return MonthBasedDateTimeUnitSerializer_instance;
  }
  function _get_impl__d88w17_0($this) {
    var tmp0 = $this.e68_1;
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
    tmp.e68_1 = lazy_0(tmp_0, DateTimeUnitSerializer$impl$delegate$lambda);
  }
  protoOf(DateTimeUnitSerializer).x1y = function (decoder, klassName) {
    return _get_impl__d88w17_0(this).x1y(decoder, klassName);
  };
  protoOf(DateTimeUnitSerializer).f68 = function (encoder, value) {
    return _get_impl__d88w17_0(this).y1y(encoder, value);
  };
  protoOf(DateTimeUnitSerializer).y1y = function (encoder, value) {
    return this.f68(encoder, value instanceof DateTimeUnit ? value : THROW_CCE());
  };
  protoOf(DateTimeUnitSerializer).v1y = function () {
    return getKClass(DateTimeUnit);
  };
  protoOf(DateTimeUnitSerializer).g1y = function () {
    return _get_impl__d88w17_0(this).g1y();
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
      return receiver.g1y();
    }, null);
  }
  function impl$factory() {
    return getPropertyCallableRef('impl', 1, KProperty1, function (receiver) {
      return _get_impl__d88w17(receiver);
    }, null);
  }
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.g1y();
    }, null);
  }
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.g1y();
    }, null);
  }
  function impl$factory_0() {
    return getPropertyCallableRef('impl', 1, KProperty1, function (receiver) {
      return _get_impl__d88w17_0(receiver);
    }, null);
  }
  function InstantIso8601Serializer() {
    InstantIso8601Serializer_instance = this;
    this.g68_1 = PrimitiveSerialDescriptor('kotlinx.datetime.Instant', STRING_getInstance());
  }
  protoOf(InstantIso8601Serializer).g1y = function () {
    return this.g68_1;
  };
  protoOf(InstantIso8601Serializer).i1y = function (decoder) {
    return Companion_getInstance_14().h68(decoder.o21());
  };
  protoOf(InstantIso8601Serializer).i68 = function (encoder, value) {
    encoder.x22(value.toString());
  };
  protoOf(InstantIso8601Serializer).h1y = function (encoder, value) {
    return this.i68(encoder, value instanceof Instant_0 ? value : THROW_CCE());
  };
  var InstantIso8601Serializer_instance;
  function InstantIso8601Serializer_getInstance() {
    if (InstantIso8601Serializer_instance == null)
      new InstantIso8601Serializer();
    return InstantIso8601Serializer_instance;
  }
  function LocalDateIso8601Serializer() {
    LocalDateIso8601Serializer_instance = this;
    this.j68_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalDate', STRING_getInstance());
  }
  protoOf(LocalDateIso8601Serializer).g1y = function () {
    return this.j68_1;
  };
  protoOf(LocalDateIso8601Serializer).i1y = function (decoder) {
    return Companion_getInstance_15().m68(decoder.o21());
  };
  protoOf(LocalDateIso8601Serializer).n68 = function (encoder, value) {
    encoder.x22(value.toString());
  };
  protoOf(LocalDateIso8601Serializer).h1y = function (encoder, value) {
    return this.n68(encoder, value instanceof LocalDate_0 ? value : THROW_CCE());
  };
  var LocalDateIso8601Serializer_instance;
  function LocalDateIso8601Serializer_getInstance() {
    if (LocalDateIso8601Serializer_instance == null)
      new LocalDateIso8601Serializer();
    return LocalDateIso8601Serializer_instance;
  }
  function LocalDateTimeIso8601Serializer() {
    LocalDateTimeIso8601Serializer_instance = this;
    this.o68_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalDateTime', STRING_getInstance());
  }
  protoOf(LocalDateTimeIso8601Serializer).g1y = function () {
    return this.o68_1;
  };
  protoOf(LocalDateTimeIso8601Serializer).i1y = function (decoder) {
    return Companion_getInstance_16().r68(decoder.o21());
  };
  protoOf(LocalDateTimeIso8601Serializer).s68 = function (encoder, value) {
    encoder.x22(value.toString());
  };
  protoOf(LocalDateTimeIso8601Serializer).h1y = function (encoder, value) {
    return this.s68(encoder, value instanceof LocalDateTime_0 ? value : THROW_CCE());
  };
  var LocalDateTimeIso8601Serializer_instance;
  function LocalDateTimeIso8601Serializer_getInstance() {
    if (LocalDateTimeIso8601Serializer_instance == null)
      new LocalDateTimeIso8601Serializer();
    return LocalDateTimeIso8601Serializer_instance;
  }
  function LocalTimeIso8601Serializer() {
    LocalTimeIso8601Serializer_instance = this;
    this.t68_1 = PrimitiveSerialDescriptor('kotlinx.datetime.LocalTime', STRING_getInstance());
  }
  protoOf(LocalTimeIso8601Serializer).g1y = function () {
    return this.t68_1;
  };
  protoOf(LocalTimeIso8601Serializer).i1y = function (decoder) {
    return Companion_getInstance_17().w68(decoder.o21());
  };
  protoOf(LocalTimeIso8601Serializer).x68 = function (encoder, value) {
    encoder.x22(value.toString());
  };
  protoOf(LocalTimeIso8601Serializer).h1y = function (encoder, value) {
    return this.x68(encoder, value instanceof LocalTime_0 ? value : THROW_CCE());
  };
  var LocalTimeIso8601Serializer_instance;
  function LocalTimeIso8601Serializer_getInstance() {
    if (LocalTimeIso8601Serializer_instance == null)
      new LocalTimeIso8601Serializer();
    return LocalTimeIso8601Serializer_instance;
  }
  function UtcOffsetSerializer() {
    UtcOffsetSerializer_instance = this;
    this.y68_1 = PrimitiveSerialDescriptor('kotlinx.datetime.UtcOffset', STRING_getInstance());
  }
  protoOf(UtcOffsetSerializer).g1y = function () {
    return this.y68_1;
  };
  protoOf(UtcOffsetSerializer).i1y = function (decoder) {
    return Companion_getInstance_20().a69(decoder.o21());
  };
  protoOf(UtcOffsetSerializer).b69 = function (encoder, value) {
    encoder.x22(value.toString());
  };
  protoOf(UtcOffsetSerializer).h1y = function (encoder, value) {
    return this.b69(encoder, value instanceof UtcOffset ? value : THROW_CCE());
  };
  var UtcOffsetSerializer_instance;
  function UtcOffsetSerializer_getInstance() {
    if (UtcOffsetSerializer_instance == null)
      new UtcOffsetSerializer();
    return UtcOffsetSerializer_instance;
  }
  function TimeZoneSerializer() {
    TimeZoneSerializer_instance = this;
    this.c69_1 = PrimitiveSerialDescriptor('kotlinx.datetime.TimeZone', STRING_getInstance());
  }
  protoOf(TimeZoneSerializer).g1y = function () {
    return this.c69_1;
  };
  protoOf(TimeZoneSerializer).i1y = function (decoder) {
    return Companion_getInstance_18().e69(decoder.o21());
  };
  protoOf(TimeZoneSerializer).f69 = function (encoder, value) {
    encoder.x22(value.h69());
  };
  protoOf(TimeZoneSerializer).h1y = function (encoder, value) {
    return this.f69(encoder, value instanceof TimeZone ? value : THROW_CCE());
  };
  var TimeZoneSerializer_instance;
  function TimeZoneSerializer_getInstance() {
    if (TimeZoneSerializer_instance == null)
      new TimeZoneSerializer();
    return TimeZoneSerializer_instance;
  }
  function FixedOffsetTimeZoneSerializer() {
    FixedOffsetTimeZoneSerializer_instance = this;
    this.i69_1 = PrimitiveSerialDescriptor('kotlinx.datetime.FixedOffsetTimeZone', STRING_getInstance());
  }
  protoOf(FixedOffsetTimeZoneSerializer).g1y = function () {
    return this.i69_1;
  };
  protoOf(FixedOffsetTimeZoneSerializer).i1y = function (decoder) {
    var zone = Companion_getInstance_18().e69(decoder.o21());
    if (zone instanceof FixedOffsetTimeZone) {
      return zone;
    } else {
      throw SerializationException_init_$Create$("Timezone identifier '" + zone.toString() + "' does not correspond to a fixed-offset timezone");
    }
  };
  protoOf(FixedOffsetTimeZoneSerializer).j69 = function (encoder, value) {
    encoder.x22(value.h69());
  };
  protoOf(FixedOffsetTimeZoneSerializer).h1y = function (encoder, value) {
    return this.j69(encoder, value instanceof FixedOffsetTimeZone ? value : THROW_CCE());
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
    tmp.o5s_1 = new Instant_0(tmp$ret$1);
    var tmp_0 = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    var tmp$ret$3 = Instant.ofEpochSecond((new Long(1151527680, 720)).r3(), 0);
    tmp_0.p5s_1 = new Instant_0(tmp$ret$3);
    this.q5s_1 = new Instant_0(Instant.MIN);
    this.r5s_1 = new Instant_0(Instant.MAX);
  }
  protoOf(Companion_14).n5s = function () {
    return new Instant_0(Clock.systemUTC().instant());
  };
  protoOf(Companion_14).k69 = function (input, format) {
    var tmp;
    try {
      tmp = format.o5y(input).a5x();
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
  protoOf(Companion_14).h68 = function (input, format, $super) {
    format = format === VOID ? Formats_getInstance().h5w_1 : format;
    return $super === VOID ? this.k69(input, format) : $super.k69.call(this, input, format);
  };
  protoOf(Companion_14).k5x = function (epochSeconds, nanosecondAdjustment) {
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
        tmp_0 = epochSeconds.e1(new Long(0, 0)) > 0 ? this.r5s_1 : this.q5s_1;
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
    this.i5x_1 = value;
  }
  protoOf(Instant_0).j5x = function () {
    return numberToLong(this.i5x_1.epochSecond());
  };
  protoOf(Instant_0).io = function (duration) {
    // Inline function 'kotlin.time.Duration.toComponents' call
    var tmp1 = _Duration___get_inWholeSeconds__impl__hpy7b3(duration);
    var nanoseconds = _Duration___get_nanosecondsComponent__impl__nh19kq(duration);
    var tmp;
    try {
      tmp = new Instant_0(this.l69(tmp1.r3(), nanoseconds));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e))
          throw e;
        tmp_0 = Duration__isPositive_impl_tvkkt2(duration) ? Companion_getInstance_14().r5s_1 : Companion_getInstance_14().q5s_1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).l69 = function (seconds, nanos) {
    var newSeconds = this.i5x_1.epochSecond() + seconds;
    var newNanos = this.i5x_1.nano() + nanos;
    // Inline function 'kotlinx.datetime.jsTry' call
    return Instant.ofEpochSecond(newSeconds, numberToInt(newNanos));
  };
  protoOf(Instant_0).m69 = function (other) {
    return this.i5x_1.compareTo(other.i5x_1);
  };
  protoOf(Instant_0).d = function (other) {
    return this.m69(other instanceof Instant_0 ? other : THROW_CCE());
  };
  protoOf(Instant_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = this.i5x_1 === other.i5x_1 || this.i5x_1.equals(other.i5x_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).hashCode = function () {
    return this.i5x_1.hashCode();
  };
  protoOf(Instant_0).toString = function () {
    return this.i5x_1.toString();
  };
  function plus_0(_this__u8e3s4, value, unit, timeZone) {
    var tmp;
    try {
      var thisZdt = atZone(_this__u8e3s4, timeZone);
      var tmp_0;
      if (unit instanceof TimeBased) {
        tmp_0 = checkZone(plus_1(_this__u8e3s4, toLong(value), unit).i5x_1, timeZone);
      } else {
        if (unit instanceof DayBased) {
          // Inline function 'kotlinx.datetime.jsTry' call
          tmp_0 = thisZdt.plusDays(value * unit.y5s_1).toInstant();
        } else {
          if (unit instanceof MonthBased) {
            // Inline function 'kotlinx.datetime.jsTry' call
            tmp_0 = thisZdt.plusMonths(value * unit.z5s_1).toInstant();
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
    return _this__u8e3s4.i5x_1.atZone(zone.g69_1);
  }
  function checkZone(_this__u8e3s4, zone) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlinx.datetime.jsTry' call
    _this__u8e3s4.atZone(zone.g69_1);
    return _this__u8e3s4;
  }
  function plus_1(_this__u8e3s4, value, unit) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var name_for_destructuring_parameter_0_fjsvno = multiplyAndDivide(value, unit.s5s_1, new Long(1000000000, 0));
      var d = name_for_destructuring_parameter_0_fjsvno.dc();
      var r = name_for_destructuring_parameter_0_fjsvno.ec();
      tmp = new Instant_0(_this__u8e3s4.l69(d.r3(), r.j1()));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (!isJodaDateTimeException(e)) {
          throw e;
        }
        tmp_0 = value.e1(new Long(0, 0)) > 0 ? Companion_getInstance_14().r5s_1 : Companion_getInstance_14().q5s_1;
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
    this.k68_1 = new LocalDate_0(LocalDate.MIN);
    this.l68_1 = new LocalDate_0(LocalDate.MAX);
  }
  protoOf(Companion_15).n69 = function (input, format) {
    var tmp;
    if (format === Formats_getInstance_0().n5t()) {
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
      tmp = format.o5y(input);
    }
    return tmp;
  };
  protoOf(Companion_15).m68 = function (input, format, $super) {
    format = format === VOID ? getIsoDateFormat() : format;
    return $super === VOID ? this.n69(input, format) : $super.n69.call(this, input, format);
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function Formats_0() {
    Formats_instance_0 = this;
    this.m5t_1 = get_ISO_DATE_BASIC();
  }
  protoOf(Formats_0).n5t = function () {
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
    this.c5x_1 = value;
  }
  protoOf(LocalDate_0).h5u = function () {
    return this.c5x_1.year();
  };
  protoOf(LocalDate_0).f5u = function () {
    return this.c5x_1.monthValue();
  };
  protoOf(LocalDate_0).w5y = function () {
    return toMonth(this.c5x_1.month());
  };
  protoOf(LocalDate_0).z5t = function () {
    return this.c5x_1.dayOfMonth();
  };
  protoOf(LocalDate_0).x5y = function () {
    return toDayOfWeek(this.c5x_1.dayOfWeek());
  };
  protoOf(LocalDate_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDate_0) {
        tmp_0 = this.c5x_1 === other.c5x_1 || this.c5x_1.equals(other.c5x_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDate_0).hashCode = function () {
    return this.c5x_1.hashCode();
  };
  protoOf(LocalDate_0).toString = function () {
    return this.c5x_1.toString();
  };
  protoOf(LocalDate_0).o69 = function (other) {
    return this.c5x_1.compareTo(other.c5x_1);
  };
  protoOf(LocalDate_0).d = function (other) {
    return this.o69(other instanceof LocalDate_0 ? other : THROW_CCE());
  };
  protoOf(LocalDate_0).d5x = function () {
    return numberToInt(this.c5x_1.toEpochDay());
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
        tmp_0 = _this__u8e3s4.c5x_1.plusDays(numberToInt(numberToDouble(value) * unit.y5s_1));
      } else {
        if (unit instanceof MonthBased) {
          // Inline function 'kotlinx.datetime.jsTry' call
          tmp_0 = _this__u8e3s4.c5x_1.plusMonths(numberToInt(numberToDouble(value) * unit.z5s_1));
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
    var tmp$ret$1 = LocalDateTime.of(date.c5x_1, time.e5x_1);
    LocalDateTime_0.call($this, tmp$ret$1);
    return $this;
  }
  function LocalDateTime_init_$Create$(date, time) {
    return LocalDateTime_init_$Init$(date, time, objectCreate(protoOf(LocalDateTime_0)));
  }
  function Companion_16() {
    Companion_instance_16 = this;
    this.p68_1 = new LocalDateTime_0(LocalDateTime.MIN);
    this.q68_1 = new LocalDateTime_0(LocalDateTime.MAX);
  }
  protoOf(Companion_16).p69 = function (input, format) {
    var tmp;
    if (format === Formats_getInstance_1().o5t_1) {
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
      tmp = format.o5y(input);
    }
    return tmp;
  };
  protoOf(Companion_16).r68 = function (input, format, $super) {
    format = format === VOID ? getIsoDateTimeFormat() : format;
    return $super === VOID ? this.p69(input, format) : $super.p69.call(this, input, format);
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function Formats_1() {
    Formats_instance_1 = this;
    this.o5t_1 = get_ISO_DATETIME();
  }
  var Formats_instance_1;
  function Formats_getInstance_1() {
    if (Formats_instance_1 == null)
      new Formats_1();
    return Formats_instance_1;
  }
  function LocalDateTime_0(value) {
    Companion_getInstance_16();
    this.q69_1 = value;
  }
  protoOf(LocalDateTime_0).r69 = function () {
    return new LocalDate_0(this.q69_1.toLocalDate());
  };
  protoOf(LocalDateTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDateTime_0) {
        tmp_0 = this.q69_1 === other.q69_1 || this.q69_1.equals(other.q69_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDateTime_0).hashCode = function () {
    return this.q69_1.hashCode();
  };
  protoOf(LocalDateTime_0).toString = function () {
    return this.q69_1.toString();
  };
  protoOf(LocalDateTime_0).s69 = function (other) {
    return this.q69_1.compareTo(other.q69_1);
  };
  protoOf(LocalDateTime_0).d = function (other) {
    return this.s69(other instanceof LocalDateTime_0 ? other : THROW_CCE());
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
    this.u68_1 = new LocalTime_0(LocalTime.MIN);
    this.v68_1 = new LocalTime_0(LocalTime.MAX);
  }
  protoOf(Companion_17).t69 = function (input, format) {
    var tmp;
    if (format === Formats_instance_2.n5t()) {
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
      tmp = format.o5y(input);
    }
    return tmp;
  };
  protoOf(Companion_17).w68 = function (input, format, $super) {
    format = format === VOID ? getIsoTimeFormat() : format;
    return $super === VOID ? this.t69(input, format) : $super.t69.call(this, input, format);
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function Formats_2() {
  }
  protoOf(Formats_2).n5t = function () {
    return get_ISO_TIME();
  };
  var Formats_instance_2;
  function Formats_getInstance_2() {
    return Formats_instance_2;
  }
  function LocalTime_0(value) {
    Companion_getInstance_17();
    this.e5x_1 = value;
  }
  protoOf(LocalTime_0).f5x = function () {
    return this.e5x_1.toSecondOfDay();
  };
  protoOf(LocalTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalTime_0) {
        tmp_0 = this.e5x_1 === other.e5x_1 || this.e5x_1.equals(other.e5x_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalTime_0).hashCode = function () {
    return this.e5x_1.hashCode();
  };
  protoOf(LocalTime_0).toString = function () {
    return this.e5x_1.toString();
  };
  protoOf(LocalTime_0).u69 = function (other) {
    return this.e5x_1.compareTo(other.e5x_1);
  };
  protoOf(LocalTime_0).d = function (other) {
    return this.u69(other instanceof LocalTime_0 ? other : THROW_CCE());
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
    this.d69_1 = asTimeZone(new UtcOffset(ZoneOffset.UTC));
  }
  protoOf(Companion_18).v69 = function () {
    return ofZone(this, ZoneId.systemDefault());
  };
  protoOf(Companion_18).e69 = function (zoneId) {
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
    this.g69_1 = zoneId;
  }
  protoOf(TimeZone).h69 = function () {
    return this.g69_1.id();
  };
  protoOf(TimeZone).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeZone) {
        tmp_0 = this.g69_1 === other.g69_1 || this.g69_1.equals(other.g69_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeZone).hashCode = function () {
    return this.g69_1.hashCode();
  };
  protoOf(TimeZone).toString = function () {
    return this.g69_1.toString();
  };
  function toLocalDateTime(_this__u8e3s4, timeZone) {
    var tmp;
    try {
      // Inline function 'kotlinx.datetime.jsTry' call
      // Inline function 'kotlin.let' call
      var p0 = LocalDateTime.ofInstant(_this__u8e3s4.i5x_1, timeZone.g69_1);
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
    var p0 = _this__u8e3s4.q69_1.atZone(timeZone.g69_1).toInstant();
    return new Instant_0(p0);
  }
  function FixedOffsetTimeZone_init_$Init$(offset, $this) {
    FixedOffsetTimeZone.call($this, offset, offset.g5x_1);
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
    this.x69_1 = offset;
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
    this.z68_1 = new UtcOffset(ZoneOffset.UTC);
  }
  protoOf(Companion_20).y69 = function (input, format) {
    return format === Formats_instance_3.n5t() ? parseWithFormat(input, get_isoFormat()) : format === Formats_instance_3.z69() ? parseWithFormat(input, get_isoBasicFormat()) : format === Formats_instance_3.f5w() ? parseWithFormat(input, get_fourDigitsFormat()) : format.o5y(input);
  };
  protoOf(Companion_20).a69 = function (input, format, $super) {
    format = format === VOID ? getIsoUtcOffsetFormat() : format;
    return $super === VOID ? this.y69(input, format) : $super.y69.call(this, input, format);
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function Formats_3() {
  }
  protoOf(Formats_3).n5t = function () {
    return get_ISO_OFFSET();
  };
  protoOf(Formats_3).z69 = function () {
    return get_ISO_OFFSET_BASIC();
  };
  protoOf(Formats_3).f5w = function () {
    return get_FOUR_DIGIT_OFFSET();
  };
  var Formats_instance_3;
  function Formats_getInstance_3() {
    return Formats_instance_3;
  }
  function UtcOffset(zoneOffset) {
    Companion_getInstance_20();
    this.g5x_1 = zoneOffset;
  }
  protoOf(UtcOffset).h5x = function () {
    return this.g5x_1.totalSeconds();
  };
  protoOf(UtcOffset).hashCode = function () {
    return this.g5x_1.hashCode();
  };
  protoOf(UtcOffset).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffset) {
      tmp = this.g5x_1 === other.g5x_1 || this.g5x_1.equals(other.g5x_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffset).toString = function () {
    return this.g5x_1.toString();
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
  protoOf(Builder).s5x = appendAlternativeParsingImpl;
  protoOf(Builder).t5x = appendOptionalImpl;
  protoOf(Builder).b5w = chars;
  protoOf(Builder).j2v = build;
  protoOf(Builder).u5x = addFormatStructureForDate;
  protoOf(Builder).v5x = addFormatStructureForTime;
  protoOf(Builder).w5x = year;
  protoOf(Builder).a5w = year$default;
  protoOf(Builder).x5x = monthNumber;
  protoOf(Builder).y5x = monthNumber$default;
  protoOf(Builder).z5v = monthName;
  protoOf(Builder).w5v = dayOfMonth;
  protoOf(Builder).z5x = dayOfMonth$default;
  protoOf(Builder).e5w = dayOfWeek;
  protoOf(Builder).p5v = date;
  protoOf(Builder).a5y = hour;
  protoOf(Builder).q5v = hour$default;
  protoOf(Builder).b5y = minute;
  protoOf(Builder).r5v = minute$default;
  protoOf(Builder).c5y = second;
  protoOf(Builder).s5v = second$default;
  protoOf(Builder).t5v = secondFraction;
  protoOf(Builder).d5y = time;
  protoOf(Builder).e5y = offsetHours;
  protoOf(Builder).u5v = offsetHours$default;
  protoOf(Builder).f5y = offsetMinutesOfHour;
  protoOf(Builder).g5y = offsetMinutesOfHour$default;
  protoOf(Builder).h5y = offsetSecondsOfMinute;
  protoOf(Builder).i5y = offsetSecondsOfMinute$default;
  protoOf(Builder).v5v = offset;
  protoOf(Builder_0).s5x = appendAlternativeParsingImpl;
  protoOf(Builder_0).t5x = appendOptionalImpl;
  protoOf(Builder_0).b5w = chars;
  protoOf(Builder_0).j2v = build;
  protoOf(Builder_0).w5x = year;
  protoOf(Builder_0).a5w = year$default;
  protoOf(Builder_0).x5x = monthNumber;
  protoOf(Builder_0).y5x = monthNumber$default;
  protoOf(Builder_0).w5v = dayOfMonth;
  protoOf(Builder_0).z5x = dayOfMonth$default;
  protoOf(Builder_1).s5x = appendAlternativeParsingImpl;
  protoOf(Builder_1).t5x = appendOptionalImpl;
  protoOf(Builder_1).b5w = chars;
  protoOf(Builder_1).j2v = build;
  protoOf(Builder_1).u5x = addFormatStructureForDate;
  protoOf(Builder_1).v5x = addFormatStructureForTime;
  protoOf(Builder_1).w5x = year;
  protoOf(Builder_1).a5w = year$default;
  protoOf(Builder_1).x5x = monthNumber;
  protoOf(Builder_1).y5x = monthNumber$default;
  protoOf(Builder_1).w5v = dayOfMonth;
  protoOf(Builder_1).z5x = dayOfMonth$default;
  protoOf(Builder_1).p5v = date;
  protoOf(Builder_1).a5y = hour;
  protoOf(Builder_1).q5v = hour$default;
  protoOf(Builder_1).b5y = minute;
  protoOf(Builder_1).r5v = minute$default;
  protoOf(Builder_1).c5y = second;
  protoOf(Builder_1).s5v = second$default;
  protoOf(Builder_1).t5v = secondFraction;
  protoOf(Builder_1).d5y = time;
  protoOf(IncompleteLocalTime).q5u = set_fractionOfSecond;
  protoOf(IncompleteLocalTime).r5u = get_fractionOfSecond;
  protoOf(Builder_2).s5x = appendAlternativeParsingImpl;
  protoOf(Builder_2).t5x = appendOptionalImpl;
  protoOf(Builder_2).b5w = chars;
  protoOf(Builder_2).j2v = build;
  protoOf(Builder_2).a5y = hour;
  protoOf(Builder_2).q5v = hour$default;
  protoOf(Builder_2).b5y = minute;
  protoOf(Builder_2).r5v = minute$default;
  protoOf(Builder_2).c5y = second;
  protoOf(Builder_2).s5v = second$default;
  protoOf(Builder_2).t5v = secondFraction;
  protoOf(Builder_3).s5x = appendAlternativeParsingImpl;
  protoOf(Builder_3).t5x = appendOptionalImpl;
  protoOf(Builder_3).b5w = chars;
  protoOf(Builder_3).j2v = build;
  protoOf(Builder_3).e5y = offsetHours;
  protoOf(Builder_3).u5v = offsetHours$default;
  protoOf(Builder_3).f5y = offsetMinutesOfHour;
  protoOf(Builder_3).g5y = offsetMinutesOfHour$default;
  protoOf(Builder_3).h5y = offsetSecondsOfMinute;
  protoOf(Builder_3).i5y = offsetSecondsOfMinute$default;
  protoOf(PropertyAccessor).r63 = getterNotNull;
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
