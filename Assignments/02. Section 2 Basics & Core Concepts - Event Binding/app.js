const app = Vue.createApp({
  data() {
    return {
        outputOnKeyDown : '',
        outputOnEnter: ''
    };
  },
  methods: {
    showAlert(){
        alert('Button pressed!');
    },
    updateOutputOnKeyDown(event){
        this.outputOnKeyDown = event.target.value;
    },
    updateOutputOnEnter(event){
        this.outputOnEnter = event.target.value;
    }
  },
});

app.mount('#assignment');
