import { defineStore } from "pinia";

export const useMyGlobalStore = defineStore({
  id: "myGlobalStore",
  state: () => ({
    language: "",
    currencyDropdown: false,
    languageDropdown: false,
    sidebar: false,
    selections: false,
    currencySelectoins: false,
  }),
  actions: {
    detectLang() {
      let lang = null;
      if (navigator.language.includes("ar")) {
        this.language = "ar";
      }
      if (navigator.language.includes("en")) {
        this.language = "en";
      }
    },
  },
  getters: {},
});
