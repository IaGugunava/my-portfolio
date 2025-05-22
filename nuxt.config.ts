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
  ],

  css: ["~/assets/css/main.css"],

  pinia: {
    storesDirs: ["./stores/**"]
  },

  typescript: {
    typeCheck: true
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NUXT_PUBLIC_SUPABASE_KEY,
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