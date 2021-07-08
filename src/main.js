import { createApp } from "vue";
import App from "./App.vue";
// import AppGreeting from "./components/AppGreeting.vue";

const vm = createApp(App);

// register component globally
// vm.component("AppGreeting", AppGreeting);

vm.mount("#app");
