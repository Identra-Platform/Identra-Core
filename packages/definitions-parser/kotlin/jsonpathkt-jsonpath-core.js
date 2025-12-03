(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['jsonpathkt-jsonpath-core'] = factory(typeof globalThis['jsonpathkt-jsonpath-core'] === 'undefined' ? {} : globalThis['jsonpathkt-jsonpath-core']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=jsonpathkt-jsonpath-core.js.map
