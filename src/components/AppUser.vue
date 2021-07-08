<template>
  <p>the user is {{ age }} years young</p>
</template>

<script>
export default {
  name: "AppUser",

  props: ["age"]
};
</script>
