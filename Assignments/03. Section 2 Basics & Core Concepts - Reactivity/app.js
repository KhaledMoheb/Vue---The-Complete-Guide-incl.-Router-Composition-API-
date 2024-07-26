const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter(newValue) {
      if (newValue > 37) {
        const that = this;
        setTimeout(() => {
          this.counter = 0;
        }, 5000);
      }
    },
  },
  computed: {
    counterResult() {
      if (this.counter <= 37) {
        return this.counter + " Not there yet";
      } else {
        return this.counter + " Too much!";
      }
    },
  },
  methods: {
    add(num) {
      this.counter += num;
    },
  },
});

app.mount("#assignment");
