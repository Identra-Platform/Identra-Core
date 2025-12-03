(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['Stately-stately-common'] = factory(typeof globalThis['Stately-stately-common'] === 'undefined' ? {} : globalThis['Stately-stately-common']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=Stately-stately-common.js.map
