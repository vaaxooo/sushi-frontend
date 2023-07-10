export default {
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SushiStore',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=yes' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/app.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/jquery.fancybox-1.3.4.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/page_c0b896d3012a093a4c912d65666301a4_v1.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/social.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/template_4c6de217491afd0a7499f93fe67f5527_v1.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios", ['@nuxtjs/dotenv', { systemvars: true }],
    'cookie-universal-nuxt',
  ],

  axios: {
      baseURL: process.env.API,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
