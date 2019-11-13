<template>
  <div class="form-group">
    <label v-if="label" :for="id">{{ label }}</label>
    <div class="input-group">
      <template v-if="type">
        <div v-if="prepend" class="input-group-prepend" :id="`${id}-prefix`">
          <span class="input-group-text">{{ prepend }}</span>
        </div>
        <input
          class="form-control"
          :id="id"
          :type="type"
          :aria-describedby="`${id}-prefix`"
          :placeholder="hint"
        />
        <div v-if="append" class="input-group-append" :id="`${id}-suffix`">
          <span class="input-group-text">{{ append }}</span>
        </div>
      </template>
      <template v-else>
        <div v-if="prepend" class="input-group-prepend">
          <span class="input-group-text">{{ prepend }}</span>
        </div>
        <slot />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'id', 'label', 'prepend', 'append', 'hint'],
}
</script>

<style lang="scss" scoped></style>
