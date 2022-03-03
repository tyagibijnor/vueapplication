const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      inputValue:''
    };
  },
  methods: {
    addNum(num) {
      this.counter = this.counter + num;
    },
    subNum(num) {
      this.counter = this.counter - num;
    },
    inputVal(event){
      this.inputValue = event.target.value;
    }
  }
});
app.mount("#events");
