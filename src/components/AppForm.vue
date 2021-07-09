<template>
  <form method="" action="">
    <div class="help">
      <!-- passing fallback markup in case slot was not provided -->
      <slot>
        <p>
          no help message to render
        </p>
      </slot>
    </div>
    <div class="fields">
      <input type="text" name="" value="" placeholder="email" />
      <input type="text" name="" value="" placeholder="username" />
      <input type="password" name="" value="" placeholder="password" />
    </div>
    <div class="buttons"></div>
  </form>
</template>

<script>
export default {
  name: "AppForm"
};
</script>
