(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['json-schema-validator-root-json-schema-validator'] = factory(typeof globalThis['json-schema-validator-root-json-schema-validator'] === 'undefined' ? {} : globalThis['json-schema-validator-root-json-schema-validator']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=json-schema-validator-root-json-schema-validator.js.map
