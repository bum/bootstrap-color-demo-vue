<template>
  <div class="container mb-3">
    <h1 class="text-center">{{ activeTheme }}</h1>
    <div class="accordion">
      <div class="d-flex justify-content-center mb-2">
        <a class="btn btn-primary btn-sm mr-2" :href="themeCssUrl" target="_bs-css">Download CSS →</a>
        <a class="btn btn-primary btn-sm" :href="themeCssUrlMin" target="_bs-css">Download Minified CSS →</a>
      </div>

      <Sample />
    </div>
  </div>
</template>

<script>
import { activeTheme, themeCssUrl } from '@/plugins'
import { computed } from '@vue/composition-api'
import Sample from '@/components/Sample'
export default {
  components: {
    Sample,
  },
  setup() {
    return {
      activeTheme: computed(() => activeTheme.value),
      themeCssUrl: computed(() => themeCssUrl()),
      themeCssUrlMin: computed(() => themeCssUrl(true)),
    }
  },
}
</script>
