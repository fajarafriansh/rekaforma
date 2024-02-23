// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'vue3-carousel-nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        'Manrope': '400..800',
        download: true,
        inject: true
      },
      display: 'swap'
    }]
  ],
  app: {
    head: {
      title: 'Rekaforma',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Rekaforma' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@fajarafriansh' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  }
})
