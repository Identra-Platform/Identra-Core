(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['uri-kmp-uri'] = factory(typeof globalThis['uri-kmp-uri'] === 'undefined' ? {} : globalThis['uri-kmp-uri']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=uri-kmp-uri.js.map
