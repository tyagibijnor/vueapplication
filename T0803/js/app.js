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
    res() {
      const that = this;
      console.log(that.Result);
      setTimeout(function () {
        that.Result = 0;
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
});
app.mount("#events");
