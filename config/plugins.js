module.exports = ({ env }) => {
  return {
    ckeditor: {
      enable: true,
    },
    transformer: {
      enabled: true,
      config: {
        responseTransforms: {
          removeAttributesKey: true,
          removeDataKey: true,
        },
        requestTransforms: {
          wrapBodyWithDataKey: true,
        },
      },
    },
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: env("CLOUDINARY_NAME"),
          api_key: env("CLOUDINARY_KEY"),
          api_secret: env("CLOUDINARY_SECRET"),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    sitemap: {
      enabled: true,
      config: {
        cron: "0 0 0 * * *",
        limit: 45000,
        xsl: true,
        autoGenerate: false,
        caching: true,
        allowedFields: ["id", "uid"],
        excludedTypes: [],
      },
    },
  };
};
