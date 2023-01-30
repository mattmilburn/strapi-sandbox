'use strict';

module.exports = ( { strapi }, models ) => {
  // Ensure `slug` values are lowercased before saving.
  const transform = event => {
    const { model, params } = event;
    const { attributes } = model;
    const { data } = params;
    const shouldTransform = !! attributes.slug && !! data.slug;

    if ( ! shouldTransform ) {
      return;
    }

    event.params.data.slug = data.slug.toLowerCase();
  };

  // Subscribe to lifecycle hook.
  strapi.db.lifecycles.subscribe( {
    models,
    beforeCreate: transform,
    beforeUpdate: transform,
  } );
};
