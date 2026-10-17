let resetTimeout;

const app = Vue.createApp({
    data() {
      return {
        number: 0
      };
    },
    computed: {
      result() {
        if (this.number < 37) {
          return 'Not there yet!';
        } else if (this.number === 37) {
          return this.number;
        } else {
          return 'Too much!';
        }
      }
    },
    watch: {
      number() {
        console.log('Watcher executing....');
        clearTimeout(resetTimeout);
        resetTimeout = setTimeout(() => {
          this.number = 0;
          resetTimeout = undefined;
        }, 5000);
      }
    },
    methods: {
      addNumber(num) {
        this.number = this.number + num;
      },
    },
    beforeUnmount() {
      clearTimeout(resetTimeout);
    },
  });
  
  app.mount('#a3');