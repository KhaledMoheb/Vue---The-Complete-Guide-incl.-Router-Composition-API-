const app = Vue.createApp({
  data() {
    return {
        myName: "Khaled",
        myAge: 30,
        imageUrl: 'https://www.google.com/logos/doodles/2024/paris-games-opening-ceremony-6753651837110444-la202124.gif',
        inputValue: 'enter text'
    };
  },
  methods:{
    myAgePlus5(){
        return this.myAge + 5;
    },
    favoriteRandomNumber(){
        return Math.random();
    },
    inputDefaultValue(){
      return this.myName
    }
  }
});

app.mount('#assignment');
