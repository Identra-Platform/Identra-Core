(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kotlinx-serialization-kotlinx-serialization-cbor'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-cbor'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-cbor']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-cbor.js.map
