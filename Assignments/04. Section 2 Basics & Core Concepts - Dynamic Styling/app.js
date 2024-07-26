const app = Vue.createApp({
  data() {
    return {
      insertedClass: "",
      isParagraphVisible: true,
      paragraphClasses: [],
      insertedBackgroundColor: ''
    };
  },
  watch: {
    insertedClass(newValue) {
      this.paragraphClasses = [
        newValue,
        this.isParagraphVisible ? "visible" : "hidden",
      ];
    },
    isParagraphVisible(newValue) {
      this.paragraphClasses = [
        this.insertedClass,
        newValue ? "visible" : "hidden",
      ];
    },
  },
  computed: {
    backgroundColor(){
        return "background-color: " + this.insertedBackgroundColor;
    }
  },
  methods: {
    toggleParagraph() {
      this.isParagraphVisible = !this.isParagraphVisible;
    },
  },
});

app.mount("#assignment");
