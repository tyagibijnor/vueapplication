const app = Vue.createApp({
  data() {
    return {
      name: 'Navneet',
      age: 25,
      imageUrl: 'src/test.jpg'
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    }
  }
});

app.mount('#a1');
