<template>
  <div class="form-group form-check">
    <input class="form-check-input" :id="id" type="checkbox" />
    <label class="form-check-label" :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: ['id', 'label'],
}
</script>
