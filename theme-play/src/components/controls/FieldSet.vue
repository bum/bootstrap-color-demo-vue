<template>
  <fieldset class="mb-4">
    <legend v-if="legend">{{ legend }}</legend>
    <div class="control-group">
      <slot />
    </div>
  </fieldset>
</template>

<script>
export default {
  props: ['legend'],
}
</script>
