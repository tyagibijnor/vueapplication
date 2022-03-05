const app = Vue.createApp({
    data() {
      return {
        counter: 10,
        inputVal: '',
        outputVal:''
      };
    },
    computed:{
      showLog(){
        console.log('Running conputed code');
      }
    },
    methods: {  
      outputValue(event){
        this.outputVal = event.target.value;
        this.inputVal = '';

      }
    }
  });
  app.mount("#events");
  
  