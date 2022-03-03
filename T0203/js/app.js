const app = Vue.createApp({
    data() {
      return {
        name: "Tyagi",
        age: 20,
        favnumber: "1",      
        img: "https://www.gstatic.com/webp/gallery/1.jpg"
      };
    },
    methods: {
      myfavnumber() {
        const randomNumber = Math.random();
        return randomNumber;
      },  
      ageadd() {
        return this.age + 5;
      },
    },
  });
  app.mount("#user-goal");
  