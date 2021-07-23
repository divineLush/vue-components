<template>
  <div>
    <slot :user="user" :doom="doom"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'John',
      },
      doom: 'emacs'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
