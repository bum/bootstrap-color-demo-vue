<template>
  <div class="form-group">
    <label v-if="label" :for="`${id}`">{{ label }}</label>
    <input
      class="form-control"
      :class="feedback ? `is-${feedback}` : null"
      :id="id"
      :type="type"
      :placeholder="hint"
      :aria-describedby="help ? `${id}-help` : null"
    />
    <small v-if="help" :class="feedback ? `${feedback}-feedback` : 'form-text text-muted'" :id="`form-${id}-help`">
      {{ help }}
    </small>
  </div>
</template>

<script>
export default {
  props: ['id', 'type', 'label', 'hint', 'help', 'feedback'],
}
</script>
