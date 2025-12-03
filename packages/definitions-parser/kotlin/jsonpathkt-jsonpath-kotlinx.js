(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['jsonpathkt-jsonpath-kotlinx'] = factory(typeof globalThis['jsonpathkt-jsonpath-kotlinx'] === 'undefined' ? {} : globalThis['jsonpathkt-jsonpath-kotlinx']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=jsonpathkt-jsonpath-kotlinx.js.map
