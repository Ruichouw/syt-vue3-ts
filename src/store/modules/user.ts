import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => {
    return {
      loginVisible: false,
    };
  },
  actions: {
    setLoginVisible(visible: boolean) {
      this.loginVisible = visible;
    },
  },
});

export default useUserStore;
