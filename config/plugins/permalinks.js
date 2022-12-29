'use strict';

module.exports = () => ( {
  contentTypes: [
    {
      uid: 'api::page.page',
      targetField: 'slug',
      targetRelation: 'parent',
    },
  ],
} );
