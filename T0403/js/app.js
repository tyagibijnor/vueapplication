const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      inputValue:'',
      confirmedName: ''
    };
  },
  methods: {    
    submitForm(event){
      alert("Form Submitted!!");
    },
    addNum(num) {
      this.counter = this.counter + num;
    },
    subNum(num) {
      this.counter = this.counter - num;
    },
    inputVal(event){
      this.inputValue = event.target.value;
    },
    confirmName(){
      this.confirmedName = this.inputValue;
    },
    resetValue(){
      this.confirmedName = '';
    }
  }
});
app.mount("#events");

