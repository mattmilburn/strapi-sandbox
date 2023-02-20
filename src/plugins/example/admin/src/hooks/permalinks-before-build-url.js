export default ( { state, data } ) => {
  console.log( 'BEFORE BUILD PERMALINKS URL', state, data );

  /**
   * @NOTE - Modify `state` and use `data` to make decisions. The `state` just
   * contains a URL from `config/plugins.js`.
   */

  return {
    state: {
      ...state,
      url: `${state.url}/EXAMPLE`,
    },
  };
};
