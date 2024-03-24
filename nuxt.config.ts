// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: [
    "@nuxt/ui",
    "nuxt-graphql-client",
    "@nuxt-alt/markdown-it",
    "@nuxtjs/i18n",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "DM Sans": "400..800",
          download: true,
          inject: true,
        },
        display: "swap",
      },
    ],
  ],
  app: {
    head: {
      title: "Rekaforma",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "og:site_name", property: "og:site_name", content: "Rekaforma" },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: "@fajarafriansh",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  runtimeConfig: {
    public: {
      "graphql-client": {
        clients: {
          blog: process.env.HYGRAPH_BLOG_ENDPOINT,
          website: process.env.HYGRAPH_WEB_ENDPOINT,
        },
      },
    },
  },
  colorMode: {
    preference: "light",
  },
  i18n: {
    locales: [
      {
        code: "en",
        name: "EN",
        iso: "en-GB",
        file: "en.ts",
      },
      {
        code: "id",
        name: "ID",
        iso: "id-ID",
        file: "id.ts",
      },
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "lang",
    strategy: "prefix_except_default",
    detectBrowserLanguage: false,
    // skipSettingLocaleOnNavigate: true,
    vueI18n: "./i18n.config.ts",
  },
  // routeRules: {
  //   "/": { redirect: "/en" },
  // },
});
