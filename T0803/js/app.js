let resetTimeout;

const app = Vue.createApp({
  data() {
    return {
      Result: 0,
    };
  },
  computed: {
    res() {
      if (this.Result < 37) {
        return "Not Yet";
      } else if (this.Result === 37) {
        return this.Result;
      } else {
        return "Too much";
      }
    },
  },
  watch: {
    Result() {
      clearTimeout(resetTimeout);
      resetTimeout = setTimeout(() => {
        this.Result = 0;
        resetTimeout = undefined;
      }, 5000);
    },
  },
  methods: {
    ShowHello() {
      alert("Hello Navneet");
    },
    addNum(num) {
      this.Result = this.Result + num;
    },
  },
  beforeUnmount() {
    clearTimeout(resetTimeout);
  },
});
app.mount("#events");
