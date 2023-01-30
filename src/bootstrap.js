'use strict';

const lowercaseSlug = require( './lifecycles/lowercase-slug' );
const publishDate = require( './lifecycles/publish-date' );

module.exports = params => {
  const pageTypes = [
    'api::page.page',
    'api::post.post',
  ];

  lowercaseSlug( params, pageTypes );
  publishDate( params, pageTypes );
};
