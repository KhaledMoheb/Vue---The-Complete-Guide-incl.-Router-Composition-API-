const app = Vue.createApp({
    data() {
      return {
        value: '',
      };
    },
    methods: {
      showAlert() {
        alert('Button was clicked!');
      },
      onKeyDown(event) {
        this.value = event.target.value;
      },
      OnEnterPressed(event) {
        this.value = event.target.value;
      }
    }
  });
  
  app.mount('#exercise');
  