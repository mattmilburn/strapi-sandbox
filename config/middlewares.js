module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'global::omit-from-response',
    config: {
      generalFields: [ 'createdAt', 'updatedAt' ],
      mediaFields: [
        'caption',
        'formats',
        'hash',
        'name',
        'previewUrl',
        'provider',
        'provider_metadata',
        'size',
      ],
    },
  },
];
