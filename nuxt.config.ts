// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon','@pinia/nuxt',],
  css: ['~/assets/styles/main.scss'],
})
