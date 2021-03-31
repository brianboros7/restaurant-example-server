module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('brian-boros-company'),
        api_key: env('243181372749315'),
        api_secret: env('vekKkCCKZpzhb4gjbmCJvtWvF3M'),
      },
    },
    // ...
});