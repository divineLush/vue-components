<template>
  <!-- we're allowed to have multiple root elements inside app -->
  <h1>Hello</h1>
  <h2>World!</h2>
  <h3>{{ msg }}</h3>
  <AppGreeting greeting="Hello World!" />
</template>

<script>
import AppGreeting from "./components/AppGreeting.vue";

export default {
  name: "App",

  components: {
    AppGreeting
  },

  data() {
    return {
      msg: "Hello World!"
    };
  }
};
</script>

<style>
#app {
  font-family: monospace;
  text-align: center;
  color: #2c3e50;
}
</style>
