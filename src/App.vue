<template>
  <!-- we're allowed to have multiple root elements inside app -->
  <h1>Hello</h1>
  <h2>World!</h2>
  <h3>{{ msg }}</h3>
</template>

<script>
export default {
  name: "App",

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
