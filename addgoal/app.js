const app = Vue.createApp({
    data() {
      return { 
          enteredValue:'',
          goals: [] 
        };
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue='';
        },
        removeGoal(indx){
            this.goals.splice(indx, 1);
        }
    },
  });
  
  app.mount('#user-goals');
  