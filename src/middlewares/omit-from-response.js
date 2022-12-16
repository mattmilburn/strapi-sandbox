'use strict';

const get = require( 'lodash/get' );
const has = require( 'lodash/has' );
const head = require( 'lodash/head' );
const isArray = require( 'lodash/isArray' );
const omit = require( 'lodash/omit' );

// Transform the response object.
const transform = ( data, config ) => {
  const generalFields = get( config, 'generalFields', [] );
  const mediaFields = get( config, 'mediaFields', [] );

  // Single entry.
  if ( has( data, 'attributes' ) ) {
    return transform( data.attributes, config );
  }

  // Array of entries.
  if ( isArray( data ) && data.length && has( head( data ), 'attributes' ) ) {
    return data.map( item => transform( item, config ) );
  }

  // Loop through properties.
  Object.entries( data ).forEach( ( [ key, value ] ) => {
    // Omit general fields.
    if ( generalFields.includes( key ) ) {
      delete data[ key ];
    }

    // Do nothing for null fields.
    if ( ! value ) {
      return;
    }

    // Single component.
    if ( has( value, 'id' ) ) {
      data[ key ] = transform( value, config );
    }

    // Media.
    if ( has( value, 'provider' ) ) {
      data[ key ] = transform( omit( value, mediaFields ), config );
    }

    // Repeatable component or dynamic zone.
    if ( isArray( value ) ) {
      const firstItem = head( value );

      if ( has( firstItem, 'id' ) ) {
        data[ key ] = value.map( item => transform( item, config ) );
      }

      // Media
      if ( has( firstItem, 'provider' ) ) {
        data[ key ] = value.map( item => transform( omit( item, mediaFields ), config ) );
      }
    }
  } );

  return data;
};

module.exports = ( config, { strapi } )=> {
  return async ( ctx, next ) => {
    await next();

    const hasConfig = has( config, 'generalFields' ) && has( config, 'mediaFields' );

    if ( ! ctx.body || ! hasConfig ) {
      return;
    }

    const isApiRequest = (
      ctx.state &&
      ctx.state.route &&
      ctx.state.route.info &&
      ctx.state.route.info.type === 'content-api'
    );

    // Determine if this request should transform the data response.
    const shouldTransform = ctx.body.data && isApiRequest;

    if ( shouldTransform ) {
      ctx.body.data = transform( ctx.body.data, config );
    }
  };
};
