const app = Vue.createApp({
  data() {
    return {
      message1: "Welcome to Vue!",
      mylink: "https://navneettyagi.com",
    };
  },
  methods: {
    outputMsg() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn Vue!";
      } else {
        return "Master Vue";
      }
    },
  },
});

app.mount("#user-goal");
