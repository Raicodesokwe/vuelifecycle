const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userTxt.value;
      // console.dir(this.$refs.userTxt)
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  },
});

app.mount('#app');

setTimeout(
  function () {
    app.unmount('#app');
  }, 3000
);

const nyap = Vue.createApp({
  template: `<p>{{ favoriteMeal }}</p>`,
  data() {
    return {
      favoriteMeal: 'ugalee'
    }
  }
});

nyap.mount('#app2')

//....

const data = {
  message: 'hello bruh!!',
  longMesso: 'hello quan!!'
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMesso = value + 'dunia'
    }
    target.message = value;
  }
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello wagwan!!!'

// console.log(proxy.longMesso)