import { createApp } from "vue";
import App from "./App.vue";
import append from "./directives/append.js";
// import AppGreeting from "./components/AppGreeting.vue";

const vm = createApp(App);
vm.directive('append', append);

// register component globally
// vm.component("AppGreeting", AppGreeting);

vm.mount("#app");
