import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2026-03-01",
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui", "@pinia/nuxt", "@vueuse/nuxt"],
  vite: {
    plugins: [
      // @ts-expect-error
      tailwindcss(),
    ],
  },
});
