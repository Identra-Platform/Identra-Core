(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'error-library-error'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'error-library-error'.");
    }
    globalThis['error-library-error'] = factory(typeof globalThis['error-library-error'] === 'undefined' ? {} : globalThis['error-library-error'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Exception_init_$Init$ = kotlin_kotlin.$_$.q1;
  var protoOf = kotlin_kotlin.$_$.pc;
  var objectCreate = kotlin_kotlin.$_$.oc;
  var captureStack = kotlin_kotlin.$_$.xa;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.s1;
  var Exception = kotlin_kotlin.$_$.kg;
  var initMetadataForClass = kotlin_kotlin.$_$.lb;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(GeneralSecurityException, 'GeneralSecurityException', GeneralSecurityException_init_$Create$, Exception);
  initMetadataForClass(ShortBufferException, 'ShortBufferException', ShortBufferException_init_$Create$, GeneralSecurityException);
  //endregion
  function GeneralSecurityException_init_$Init$($this) {
    Exception_init_$Init$($this);
    GeneralSecurityException.call($this);
    return $this;
  }
  function GeneralSecurityException_init_$Create$() {
    var tmp = GeneralSecurityException_init_$Init$(objectCreate(protoOf(GeneralSecurityException)));
    captureStack(tmp, GeneralSecurityException_init_$Create$);
    return tmp;
  }
  function GeneralSecurityException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    GeneralSecurityException.call($this);
    return $this;
  }
  function GeneralSecurityException() {
    captureStack(this, GeneralSecurityException);
  }
  function ShortBufferException_init_$Init$($this) {
    GeneralSecurityException_init_$Init$($this);
    ShortBufferException.call($this);
    return $this;
  }
  function ShortBufferException_init_$Create$() {
    var tmp = ShortBufferException_init_$Init$(objectCreate(protoOf(ShortBufferException)));
    captureStack(tmp, ShortBufferException_init_$Create$);
    return tmp;
  }
  function ShortBufferException_init_$Init$_0(message, $this) {
    GeneralSecurityException_init_$Init$_0(message, $this);
    ShortBufferException.call($this);
    return $this;
  }
  function ShortBufferException_init_$Create$_0(message) {
    var tmp = ShortBufferException_init_$Init$_0(message, objectCreate(protoOf(ShortBufferException)));
    captureStack(tmp, ShortBufferException_init_$Create$_0);
    return tmp;
  }
  function ShortBufferException() {
    captureStack(this, ShortBufferException);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ShortBufferException_init_$Create$_0;
  //endregion
  return _;
}));

//# sourceMappingURL=error-library-error.js.map
