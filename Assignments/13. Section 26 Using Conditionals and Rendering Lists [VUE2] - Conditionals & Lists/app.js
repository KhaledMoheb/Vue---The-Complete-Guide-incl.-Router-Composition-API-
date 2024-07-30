const app = Vue.createApp({
  data() {
    return {
      isTask1P1Enabled: true,
      names: ['Max', 'Anna', 'Chris', 'Manu'],
      array: ['Max', 'Anna', 'Chris', 'Manu'],
      myObject: {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkiens',
        books: '3'
      },
      testData: {
        name: 'TESTOBJECT', 
        id: 10,
        data: [1.67, 1.33, 0.98, 2.21]
      }
    };
  },
  methods:{
    toggleIsTask1P1Enabled(){
      this.isTask1P1Enabled = !this.isTask1P1Enabled;
    }
  }
});

app.mount("#exercise");