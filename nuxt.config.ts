// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'DT Engineering',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'DT ENGINEERING' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@fajarafriansh' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap',
        },
      ],
    }
  }
})
