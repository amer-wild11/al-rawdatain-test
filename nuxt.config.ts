// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  app: {
    head: {
      title: "",
      meta: [{ name: "description", content: "Alrawdatayn" }],
    },
  },

  css: ["~/assets/css/main.css", "~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/scss/vars/_colors.scss" as *;
          @use "~/assets/scss/vars/_sizes.scss" as *;
          `,
        },
      },
    },
  },
  gsap: {
    autoImport: true,
    composables: true,
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true,
    },
  },

  modules: [
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@hypernym/nuxt-gsap",
  ],
});
