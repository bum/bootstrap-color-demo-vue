<template>
  <div class="container">
    <div class="mt-3">
      <field-set legend="Button">
        <button v-for="(ctx, i) in contextuals" :key="i" :class="`btn btn-${ctx} mr-2`">{{ ctx }}</button>
      </field-set>

      <field-set legend="Button outline">
        <button v-for="(ctx, i) in contextuals" :key="i" :class="`btn btn-outline-${ctx} mr-2`">{{ ctx }}</button>
      </field-set>

      <field-set legend="Button group">
        <div v-for="(ctx, i) in contextuals" :key="i" class="btn-group mr-2 mb-3" role="group" aria-label="Menu">
          <button v-for="(label, j) in labels" :key="j" :class="`btn btn-${ctx}`">
            {{ label }}
          </button>
        </div>
      </field-set>

      <field-set legend="Button radio & Checkbox">
        <div v-for="(ctx, i) in contextuals" :key="i">
          <div class="mr-3 mb-2 btn-group btn-group-toggle" data-toggle="buttons">
            <label v-for="i in 3" :key="i" :class="[`btn btn-${ctx}`, { active: i == 1 }]">
              <input type="radio" name="options" :checked="i === 1" /> Radio
            </label>
          </div>
          <div class="mr-3 mb-2 btn-group btn-group-toggle" data-toggle="buttons">
            <label v-for="i in 3" :key="i" :class="[`btn btn-${ctx}`, { active: i == 1 }]">
              <input type="checkbox" name="options" :checked="i === 1" /> Checkbox
            </label>
          </div>
        </div>
      </field-set>

      <field-set legend="Badge">
        <div v-for="(ctx, i) in contextuals" :key="i" :class="`badge badge-${ctx} mr-2`">{{ ctx }}</div>
      </field-set>

      <field-set legend="Alert">
        <div v-for="(ctx, i) in contextuals" :key="i" :class="`alert alert-${ctx}  fade in alert-dismissible show`">
          <button class="close" type="button" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <strong> {{ ctx }}! </strong>
          This alert box indicates a successful or positive action.
        </div>
      </field-set>

      <field-set legend="Navbar">
        <nav
          v-for="(ctx, i) in contextuals"
          :key="i"
          class="navbar navbar-expand-sm  mb-3"
          :class="[`bg-${ctx}`, ctx === 'light' ? 'navbar-light' : 'navbar-dark']"
        >
          <a class="navbar-brand" href="#"> Brand </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-0"
            aria-controls="navbar-0"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span class="navbar-toggler-icon"> </span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-0">
            <div class="navbar-nav">
              <a v-for="(label, j) in labels" :key="j" class="nav-item nav-link" :class="{ active: j == 1 }" href="#">
                {{ label }}
              </a>
            </div>
            <div class="navbar-nav ml-auto">
              <a class="nav-item nav-link" href="#"> Contact Us </a>
            </div>
          </div>
        </nav>
      </field-set>

      
    </div>
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
    labels: () => 'File Edit View History Help'.split(' '),
  },
}
</script>
