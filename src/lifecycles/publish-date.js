'use strict';

module.exports = ( { strapi }, models ) => {
  // Provide initial value for `publish_date` for certain models upon creation.
  const transform = event => {
    const { model, params } = event;
    const { attributes } = model;
    const { data } = params;
    const shouldTransform = !! attributes.publish_date && ! data.publish_date;

    if ( ! shouldTransform ) {
      return;
    }

    // Create value for `publish_date` in the format YYYY-MM-DD.
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = `00${date.getUTCMonth() + 1}`.slice( -2 );
    const day = `00${date.getUTCDate()}`.slice( -2 );
    const publishDate = `${year}-${month}-${day}`;

    event.params.data.publish_date = publishDate;
  };

  // Subscribe to lifecycle hook.
  strapi.db.lifecycles.subscribe( {
    models,
    beforeCreate: transform,
  } );
};
