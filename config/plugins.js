'use strict';

const menusConfig = require( './plugins/menus' );
const previewButtonConfig = require( './plugins/preview-button' );
const transformerConfig = require( './plugins/transformer' );

module.exports = params => ( {
  'example': {
    enabled: true,
    resolve: './src/plugins/example',
  },
  'menus': {
    config: menusConfig( params ),
  },
  'preview-button': {
    config: previewButtonConfig( params ),
  },
  'transformer': {
    config: transformerConfig( params ),
  },
} );
