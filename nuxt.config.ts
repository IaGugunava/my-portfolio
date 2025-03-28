// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
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

  supabase: {
    redirect: false
    },

  components: [{ path: "./components", pathPrefix: false }],
})