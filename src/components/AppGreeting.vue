<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<script>
export default {
  name: "AppGreeting",

  props: {
    greeting: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
/* translates into .greeting[data-v-025ac30c] */
/* as Vue adds data-v-025ac30c attribute to selected element */
.greeting {
  color: #ce0056;
}
</style>
