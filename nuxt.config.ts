// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {enabled: true},
  modules: ["@nuxt/eslint", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  alias: {
    "@": "./",
  },
  components: {
    "dirs": ["~/components"],
  },
  // ssr: false,
});
