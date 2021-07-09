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
    <!-- i can still access component data -->
    <p>{{ formHelpMessage }}</p>
    <p>this is useless</p>
    <p>help text</p>
    <template v-slot:fields>
      <input type="text" placeholder="login" />
    </template>
  </app-form>
  <app-form>
    <template v-slot:fields>
      <input type="password" placeholder="password" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </app-form>
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
      age: 112,
      formHelpMessage: "useless help message"
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
