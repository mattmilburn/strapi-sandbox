'use strict';

module.exports = ( { env } ) => ( {
  injectListViewColumn: false,
  openTarget: 'StrapiPreview',
  contentTypes: [
    {
      uid: 'api::page.page',
      draft: {
        url: env( 'STRAPI_PREVIEW_DRAFT_URL' ),
        query: {
          secret: env( 'STRAPI_PREVIEW_SECRET' ),
          slug: '{slug}',
          type: 'page',
        },
      },
      published: {
        url: `${env( 'STRAPI_PREVIEW_PUBLISHED_URL' )}/{slug}`,
      },
    },
    {
      uid: 'api::post.post',
      draft: {
        url: env( 'STRAPI_PREVIEW_DRAFT_URL' ),
        query: {
          secret: env( 'STRAPI_PREVIEW_SECRET' ),
          slug: '{slug}',
          type: 'post',
        },
      },
      published: {
        url: `${env( 'STRAPI_PREVIEW_PUBLISHED_URL' )}/blog/{slug}`,
      },
    },
  ],
} );
