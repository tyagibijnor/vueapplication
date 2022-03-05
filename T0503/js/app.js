const app = Vue.createApp({
    data() {
      return {
        counter: 10,
        inputVal: '',
        outputVal: '',
        fname: '',
        lname: '',
        fullName: ''
      };
    },
    watch: {
      fname(value){        
        // console.log(" Test ");
        if ( value === '') {
          this.fullName = '';
        } else {
          console.log("line18");
          this.fullName = value + ' ' + this.lname;
        } 
      },
      lname(value){
        // console.log(" Test 2 ");
        if ( value === '' ) {
          this.fullName = '';
        } else {
          this.fullName = this.fname + ' ' + value;
        }
      }
    },
    computed:{
      // showLog(){
      //   console.log('Running conputed code');        
      // },
      // ShowOutPut(){
      //   return this.outputVal;
      // }
    },
    methods: {  
      outputValue(event){
        this.outputVal = event.target.value;
        this.inputVal = '';

      }
    }
  });
  app.mount("#events");
  
  