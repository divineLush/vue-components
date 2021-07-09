<template>
  <button @click="updateAge">update age</button>
  <button @click="updateAgeWithCallbck">update age with callback</button>
  <p>the user is {{ age }} years young</p>
  <p>age doubled: {{ ageDoubled }}</p>
</template>

<script>
export default {
  name: "AppUser",

  // props: ["age"],
  props: {
    age: {
      // type: Number,
      // type: [Number, String],
      // default: 0,
      validator(value) {
        // gotta return boolean
        // Vue instance hasn't been created yet
        // so data and methods are not accessible
        return typeof value === "number";
      },
      required: true
    },
    ageCallback: {
      type: Function,
      required: true
    }
  },

  // array of events emitted by component
  emits: ["update-age"],

  computed: {
    ageDoubled() {
      return this.age * 2;
    }
  },

  methods: {
    updateAge() {
      this.$emit("update-age", 3);
    },
    updateAgeWithCallbck() {
      this.ageCallback(5);
    }
  }
};
</script>
