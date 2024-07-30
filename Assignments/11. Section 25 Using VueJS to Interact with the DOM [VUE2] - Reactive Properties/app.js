const app = Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    result() {
      if (this.value <= 37) {
        return "not there yet";
      }
      setTimeout(() => {
        this.value = 0;
      }, 5000);
      return "done";
    },
  },
});
app.mount("#exercise");
