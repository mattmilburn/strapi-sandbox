'use strict';

module.exports = ( { env } ) => ( {
  lowercase: true,
  contentTypes: [
    {
      uids: [ 'api::page.page', 'api::example.example' ],
      url: `${env( 'STRAPI_PERMALINKS_BASE_URL' )}/{slug}`,
      copy: false,
    },
    {
      uids: [ 'api::post.post' ],
      url: `${env( 'STRAPI_PERMALINKS_BASE_URL' )}/blog/{slug}`,
    },
  ],
} );
