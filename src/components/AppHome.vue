<template>
  <p>home component</p>
</template>

<script>
export default {
  name: "AppHome",

  unmounted() {
    console.log("home unmounted!");
  },

  activated() {
    console.log("home activated");
  },

  deactivated() {
    console.log("home deactivated");
  }
};
</script>
