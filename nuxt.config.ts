import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2026-08-01",

  css: ["~/assets/css/main.css"],

  modules: ["@nuxt/ui", "@vueuse/nuxt", "@nuxt/test-utils/module"],

  vite: {
    plugins: [tailwindcss()],
  },
});
