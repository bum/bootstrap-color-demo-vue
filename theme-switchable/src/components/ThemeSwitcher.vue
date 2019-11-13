<template>
  <div class="form-inline navbar-text">
    <select v-model="activeTheme" class="custom-select">
      <option v-for="(theme, i) in ColorThemes" :key="i" :value="theme">{{ theme }}</option>
    </select>
  </div>
</template>

<script>
import { ColorThemes, switchTheme, activeTheme } from '@/plugins'
import { computed, watch } from '@vue/composition-api'
export default {
  setup() {
    watch(
      () => activeTheme.value,
      () => switchTheme(),
      { lazy: true }
    )
    return { activeTheme, ColorThemes: computed(() => ColorThemes) }
  },
}
</script>
