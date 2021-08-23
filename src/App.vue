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

  <select v-model="componentName">
    <option value="AppHome">home</option>
    <option value="AppAbout">about</option>
  </select>

  <!-- placeholder for component provided by Vue -->
  <!-- when a component is toggled out it gets unmounted -->
  <component :is="componentName"></component>

  <!-- keep-alive will make sure the component lives in memory  -->
  <!-- component won't be unmounted, unmounted() hook won't run -->
  <!-- activated() and deactivated() hooks will run instead -->
  <keep-alive>
    <component :is="componentName"></component>
  </keep-alive>

  <!-- v alias represents every property bound to the slot component -->
  <app-slot v-slot="v">
    <p>{{ v.user.name }}</p>
  </app-slot>

  <!-- destructure the object -->
  <app-slot v-slot="{ user }">
    <p>{{ user.name }}</p>
  </app-slot>

  <!-- shorthand -->
  <app-slot #="v">
    <p>{{ v.user.name }}</p>
  </app-slot>

  <!-- shorthand with setting slot name -->
  <app-slot #default="v">
    <p>{{ v.user.name }}</p>
  </app-slot>

  <app-slot #default="{ user, doom }">
    <p>{{ user.name }} {{ doom }}</p>
  </app-slot>

  <div v-append="'you'"></div>
  <div v-append.green="'you'"></div>
  <div v-append:full="'<span>full!</span>'"></div>
  <div v-append-secondary="{ tag: 'p', content: 'hey content' }"></div>
</template>

<script>
import AppGreeting from "./components/AppGreeting.vue";
import AppUser from "./components/AppUser.vue";
import AppForm from "./components/AppForm.vue";
import AppHome from "./components/AppHome.vue";
import AppAbout from "./components/AppAbout.vue";
import AppSlot from "./components/AppSlot.vue";
import appendSecondary from "./directives/appendSecondary.js";

export default {
  name: "App",

  components: {
    AppGreeting,
    AppUser,
    AppForm,
    AppHome,
    AppAbout,
    AppSlot
  },

  directives: {
    'append-secondary': appendSecondary,
  },

  data() {
    return {
      msg: "Hello World!",
      age: 112,
      formHelpMessage: "useless help message",
      componentName: "AppHome"
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
