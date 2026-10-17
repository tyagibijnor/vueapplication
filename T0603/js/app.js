const app = Vue.createApp({
  data() {
    return {
      outputVal: '',
      fname: '',
      lname: '',
    };
  },
  computed: {
    UserFullName() {
      if (!this.fname || !this.lname) {
        return '';
      }
      return `${this.fname} ${this.lname}`;
    },
  },
  methods: {
    outputValue(event) {
      this.outputVal = event.target.value;
    },
  },
});

app.mount('#events');
