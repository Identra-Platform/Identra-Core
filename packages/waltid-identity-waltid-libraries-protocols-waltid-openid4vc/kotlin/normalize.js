(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'normalize'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'normalize'.");
    }
    globalThis.normalize = factory(typeof normalize === 'undefined' ? {} : normalize, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var Enum = kotlin_kotlin.$_$.aj;
  var protoOf = kotlin_kotlin.$_$.ce;
  var initMetadataForClass = kotlin_kotlin.$_$.yc;
  var VOID = kotlin_kotlin.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.nj;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Form, 'Form', VOID, Enum);
  //endregion
  var Form_NFC_instance;
  var Form_NFD_instance;
  var Form_NFKC_instance;
  var Form_NFKD_instance;
  var Form_entriesInitialized;
  function Form_initEntries() {
    if (Form_entriesInitialized)
      return Unit_instance;
    Form_entriesInitialized = true;
    Form_NFC_instance = new Form('NFC', 0);
    Form_NFD_instance = new Form('NFD', 1);
    Form_NFKC_instance = new Form('NFKC', 2);
    Form_NFKD_instance = new Form('NFKD', 3);
  }
  function Form(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Form_NFC_getInstance() {
    Form_initEntries();
    return Form_NFC_instance;
  }
  function normalize(_this__u8e3s4, form) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = _this__u8e3s4.normalize(form.t2_1);
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = normalize;
  _.$_$.b = Form_NFC_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=normalize.js.map
