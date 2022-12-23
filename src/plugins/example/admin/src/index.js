export default {
  register( app ) {
    app.registerPlugin( {
      id: 'example',
      name: 'example',
    } );
  },

  bootstrap( app ) {
    app.registerHook( 'plugin/preview-button/before-build-url', ( { state, data } ) => {
      console.log( 'BEFORE BUILD PREVIEW URL', state, data );

      /**
       * @NOTE - Modify `state` and use `data` to make decisions. The `state` is
       * just the original config object from `config/plugins.js`.
       */

      return {
        state: {
          ...state,
          example: 'EXAMPLE',
        },
      };
    } );
  },
};
