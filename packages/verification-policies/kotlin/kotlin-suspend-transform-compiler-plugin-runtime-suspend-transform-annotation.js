(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-annotation'] = factory(typeof globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-annotation'] === 'undefined' ? {} : globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-annotation']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-annotation.js.map
