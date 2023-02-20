import permalinksBeforeBuildUrl from './hooks/permalinks-before-build-url';
import previewButtonBeforeBuildUrl from './hooks/preview-button-before-build-url';

export default {
  register( app ) {
    app.registerPlugin( {
      id: 'example',
      name: 'example',
    } );
  },

  bootstrap( app ) {
    // Permalinks "before build URL" hook.
    // app.registerHook( 'plugin/permalinks/before-build-url', permalinksBeforeBuildUrl );

    // Preview Button "before build URL" hook.
    // app.registerHook( 'plugin/preview-button/before-build-url', previewButtonBeforeBuildUrl );
  },
};
