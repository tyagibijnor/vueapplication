const app = Vue.createApp({
    data() {
      return { userInput: '', confirmedInput: '' };
    },
    methods: {
      showAlert() {
        alert('Working Fine!');
      },
      saveInput(event) {
        this.userInput = event.target.value;
      },
      confirmInput() {
        this.confirmedInput = this.userInput;
      }
    }
  });
  
  app.mount('#a2');