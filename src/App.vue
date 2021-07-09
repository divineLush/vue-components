<template>
  <!-- we're allowed to have multiple root elements inside app -->
  <h1>Hello</h1>
  <h2>World!</h2>
  <h3>{{ msg }}</h3>
  <AppGreeting greeting="Hello World!" />
  <app-user
    :age="age"
    :ageCallback="updateAgeWithCallback"
    @update-age="updateAge"
  ></app-user>
  <app-form>
    <p>this is useless</p>
    <p>help text</p>
  </app-form>
  <app-form></app-form>
</template>

<script>
import AppGreeting from "./components/AppGreeting.vue";
import AppUser from "./components/AppUser.vue";
import AppForm from "./components/AppForm.vue";

export default {
  name: "App",

  components: {
    AppGreeting,
    AppUser,
    AppForm
  },

  data() {
    return {
      msg: "Hello World!",
      age: 112
    };
  },

  methods: {
    updateAge(num) {
      this.age += +num;
    },
    updateAgeWithCallback(num) {
      this.age += +num;
    }
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

button {
  margin: 1rem;
  padding: 0.5rem;
  font: inherit;
  background: transparent;
  border: 2px solid #ce0056;
  cursor: pointer;
}

form {
  margin: 5rem 0;
}

input {
  display: block;
  margin: 1rem;
  padding: 0.5rem;
  font: inherit;
  border: 2px solid #ce0056;
}
</style>
