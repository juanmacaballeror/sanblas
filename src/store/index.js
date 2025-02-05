import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    message: "Hola desde Pinia!",
    token: "patata",
    nombre: "",
  }),
  actions: {
    setMessage(newMessage) {
      this.message = newMessage;
    },
  },
});
