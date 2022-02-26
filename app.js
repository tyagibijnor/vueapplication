const app = Vue.createApp({
  data() {
    return {
      testmessage: "Welcome for test",
      learn: "Learning Vue!",
      master: "Mastering Vue!",
      mylink: "https://navneettyagi.com",
      boldmsg: "<b>Welcome Navneet</b>",
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
    welcome(){
      return this.boldmsg;
    }
  },
});

app.mount("#user-goal");
