<template>
  <p>about component</p>
</template>

<script>
export default {
  name: "AppAbout",

  unmounted() {
    console.log("about unmounted!");
  },

  activated() {
    console.log("about activated");
  },

  deactivated() {
    console.log("about deactivated");
  }
};
</script>
