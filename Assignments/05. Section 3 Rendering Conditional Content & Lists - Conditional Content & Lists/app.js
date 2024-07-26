const app = Vue.createApp({
  data() {
    return {
      insertedTask: "",
      tasks: [],
      isVisible: true
    };
  },
  computed: {
    toggleListVisibilityText(){
        return (this.isVisible ? "Hide" : "Show") + " List"; 
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.insertedTask);
    },
    toggleListVisibility(){
        this.isVisible = !this.isVisible;
    }
  },
});

app.mount("#assignment");
