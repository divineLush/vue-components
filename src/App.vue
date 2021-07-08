<template>
  <!-- we're allowed to have multiple root elements inside app -->
  <h1>Hello</h1>
  <h2>World!</h2>
  <h3>{{ msg }}</h3>
  <AppGreeting greeting="Hello World!" />
  <app-user :age="age"></app-user>
</template>

<script>
import AppGreeting from "./components/AppGreeting.vue";
import AppUser from "./components/AppUser.vue";

export default {
  name: "App",

  components: {
    AppGreeting,
    AppUser
  },

  data() {
    return {
      msg: "Hello World!",
      age: 112
    };
  }
};
</script>

<style>
#app {
  font-family: monospace;
  font-size: 1.6rem;
  text-align: center;
  color: #2c3e50;
}
</style>
