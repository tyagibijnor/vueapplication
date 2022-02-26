const app = Vue.createApp({
  data() {
    return {
      name: "Kuhu",
      age: 4,
      favnumber: "1",
      enteredName: "",
      img: "test.jpg"
    };
  },
  methods: {
    myfavnumber() {
      const randomNumber = Math.round(Math.random());
      return randomNumber;
    },

    ageadd() {
      return this.age + 5;
    },
  },
});
app.mount("#user-goal");
