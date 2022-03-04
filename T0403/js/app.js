const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      inputValue:'',
      confirmedName: '',
      inputValueOutput:''
    };
  },
  methods: {  
    showAlert(){
      alert("Hello!!");
    },
    submitForm(event){
      alert("Form Submitted!!");
    },
    addNum(num) {
      this.counter = this.counter + num;
    },
    subNum(num) {
      this.counter = this.counter - num;
    },
    inputValOutput(event){
      this.inputValueOutput = event.target.value;
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
const assin = Vue.createApp({
  data() {
    return {
      counter: 10,
      inputValue:'',
      confirmedName: '',
      inputValueOutput:''
    };
  },
  methods: {  
    showAlert(){
      alert("Hello!!");
    },
    inputValOutput(event){
      this.inputValueOutput = event.target.value;
    },
    inputVal(event){
      this.inputValue = event.target.value;
    },
    confirmName(){
      this.confirmedName = this.inputValue;
    }
  }
});

assin.mount("#assignment");

