'use strict';

module.exports = () => ( {
  prefix: '/api/',
  responseTransforms: {
    removeAttributesKey: true,
    removeDataKey: true,
  },
} );
