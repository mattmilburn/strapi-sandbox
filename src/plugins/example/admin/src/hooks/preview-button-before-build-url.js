export default ( { state, data } ) => {
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
};
