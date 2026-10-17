const app = Vue.createApp({
    data() {
      return { 
          enteredValue:'',
          goals: [] 
        };
    },
    methods: {
        addGoal(){
            const goal = this.enteredValue.trim();
            if (!goal) {
                return;
            }
            this.goals.push(goal);
            this.enteredValue='';
        },
        removeGoal(indx){
            this.goals.splice(indx, 1);
        }
    },
  });
  
  app.mount('#user-goals');
  