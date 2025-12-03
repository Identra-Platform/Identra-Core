(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kotlinx-uuid-kotlinx-uuid-core'] = factory(typeof globalThis['kotlinx-uuid-kotlinx-uuid-core'] === 'undefined' ? {} : globalThis['kotlinx-uuid-kotlinx-uuid-core']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-uuid-kotlinx-uuid-core.js.map
