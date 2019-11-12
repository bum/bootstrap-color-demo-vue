<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <select class="form-control" :id="id">
      <option v-for="(opt, i) in options" :key="i" :value="opt">{{ opt }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['id', 'label', 'options'],
}
</script>

<style lang="scss" scoped></style>
