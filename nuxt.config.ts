// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", '@nuxtjs/color-mode'],
  css: ["~/assets/css/styles.css"],
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
  },
  ui: {
    theme: {
      colors: ['primary', 'accent', 'error', 'warning', 'success']
    }
  }
});
