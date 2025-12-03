(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['korge-root-krypto'] = factory(typeof globalThis['korge-root-krypto'] === 'undefined' ? {} : globalThis['korge-root-krypto']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=korge-root-krypto.js.map
