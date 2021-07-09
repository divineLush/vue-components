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
      <slot name="fields"></slot>
    </div>
    <div class="buttons">
      <slot name="buttons"></slot>
    </div>
  </form>
</template>

<script>
export default {
  name: "AppForm"
};
</script>
