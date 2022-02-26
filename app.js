const app = Vue.createApp({
  data() {

      return {
      learn: "Learning Vue!",
      master: "Mastering Vue!",
      mylink: "https://navneettyagi.com",
    };
  },
  methods: {
    outputMsg() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.learn;
      } else {
        return this.master;
      }
    },
  },
});

app.mount("#user-goal");
