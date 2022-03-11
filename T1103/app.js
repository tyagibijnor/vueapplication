const app = Vue.createApp({
    data(){
        return{
            enteredValue:'',
            tasks:[],
            flag: true
        }
    },
    computed:{
        buttonToggle(){
            return this.flag ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.enteredValue);
        },
        hideShow(){
            this.flag = !this.flag;
        }
    },

});
app.mount("#assignment");