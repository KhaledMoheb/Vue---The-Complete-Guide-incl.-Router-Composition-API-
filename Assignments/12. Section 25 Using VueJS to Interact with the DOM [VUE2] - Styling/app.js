const app = Vue.createApp({
  data() {
    return {
      effectClass: "",
      effectClassInterval: null,
      task2Class1: "task2Class1",
      task2Class2: "task2Class2",
      task3Class: "",
      task4Class1: '',
      isTask4Class2EnabledInput: "",
      isTask4Class2Enabled: false,
      task5Styles: '',
      task6Width: 0,
      task6Interval: null
    };
  },
  watch:{
    isTask4Class2EnabledInput(newValue){
      if (newValue.toLowerCase() === "true") {
        this.isTask4Class2Enabled = true;
      } else if (newValue.toLowerCase() === "false") {
        this.isTask4Class2Enabled = false;
      }
    }
  },
  computed: {
    task4Classes(){
      return [this.task4Class1, this.isTask4Class2Enabled? 'task4Class2' : '']
    },
    task6Style(){
      return `width: ${this.task6Width}px`;
    }
  },
  methods: {
    startTask6Progress(){
      clearInterval(this.task6Interval);
      this.task6Width = 0;
      this.task6Interval = setInterval(()=> {
        this.task6Width += 10;
        if(this.task6Width > 500){
          clearInterval(this.task6Interval);
        }
      }, 50);
    },
    startEffect() {
      clearInterval(this.effectClassInterval);
      this.effectClassInterval = setInterval(() => {
        if (this.effectClass === "highlight") {
          this.effectClass = "shrink";
        } else {
          this.effectClass = "highlight";
        }
      }, 1000);
    },
  },
});
app.mount("#exercise");
