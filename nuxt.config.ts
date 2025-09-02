// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0"
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@primevue/nuxt-module',
    'nuxt-swiper',
    '@nuxtjs/turnstile',
  ],

  css: ["~/assets/css/main.css"],

  pinia: {
    storesDirs: ["./stores/**"]
  },

  typescript: {
    typeCheck: true
  },

  turnstile: {
    siteKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
  },
  
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NUXT_PUBLIC_SUPABASE_KEY,
      turnstileKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY,
      NUXT_PUBLIC_BASE_URL: process.env.NUXT_PUBLIC_BASE_URL,
      NUXT_PUBLIC_WEBSITE_URL: process.env.NUXT_PUBLIC_WEBSITE_URL
    }
  },
  
  swiper: {
    //@ts-ignore
    modules: ["pagination"]
  },

  supabase: {
    redirect: false
  },

  //@ts-ignore
  primevue: {
    usePrimeVue: true,
    autoImport: true
  },

  components: [{ path: "./components", pathPrefix: false }],
})