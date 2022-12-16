'use strict';

const lowercaseSlug = require( './lifecycle-hooks/lowercase-slug' );
const publishDate = require( './lifecycle-hooks/publish-date' );

module.exports = params => {
  const pageTypes = [
    'api::page.page',
    'api::post.post',
  ];

  lowercaseSlug( params, pageTypes );
  publishDate( params, pageTypes );
};
