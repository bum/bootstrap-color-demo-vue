<template>
  <div class="container pt-3">
    <field-set legend="Progress">
      <div v-for="(ctx, i) in contextuals" :key="i" class="progress mb-2">
        <div :class="`progress-bar bg-${ctx}`" role="progressbar" :style="`width:${15 + i * 11}%`"></div>
      </div>
    </field-set>

    <field-set legend="Progress with Label">
      <div v-for="(ctx, i) in contextuals" :key="i" class="progress mb-2">
        <div :class="`progress-bar bg-${ctx} text-white`" role="progressbar" :style="`width:${15 + i * 11}%`">
          {{ `${15 + i * 11}%` }}
        </div>
      </div>
    </field-set>

    <field-set legend="Multiple bars">
      <div class="progress mb-2">
        <div
          v-for="(ctx, i) in contextuals"
          :key="i"
          :class="`progress-bar bg-${ctx}`"
          role="progressbar"
          :style="`width:${7 + i * 1}%`"
        ></div>
      </div>
    </field-set>

    <field-set legend="Striped Progress">
      <div v-for="(ctx, i) in contextuals" :key="i" class="progress mb-2">
        <div
          :class="`progress-bar progress-bar-striped bg-${ctx} text-white`"
          role="progressbar"
          :style="`width:${15 + i * 11}%`"
        >
          {{ `${15 + i * 11}%` }}
        </div>
      </div>
    </field-set>

    <field-set legend="Animated stripes">
      <div v-for="(ctx, i) in contextuals" :key="i" class="progress mb-2">
        <div
          :class="`progress-bar progress-bar-striped progress-bar-animated bg-${ctx} text-white`"
          role="progressbar"
          :style="`width:${15 + i * 11}%`"
        >
          {{ `${15 + i * 11}%` }}
        </div>
      </div>
    </field-set>
  </div>
</template>

<script>
import FieldSet from '@/components/controls/FieldSet'
import { contextuals } from '@/plugins'
export default {
  components: {
    FieldSet,
  },
  computed: {
    contextuals: () => contextuals,
  },
}
</script>
