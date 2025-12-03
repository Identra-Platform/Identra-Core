(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['karacteristics-root-karacteristics'] = factory(typeof globalThis['karacteristics-root-karacteristics'] === 'undefined' ? {} : globalThis['karacteristics-root-karacteristics']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=karacteristics-root-karacteristics.js.map
