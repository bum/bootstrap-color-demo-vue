<template>
  <div class="container pt-3">
    <field-set legend="Card Default">
      <div class="card">
        <div class="card-header">Quote</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
        </div>
        <div class="card-footer text-muted small text-right">2 days ago</div>
      </div>
    </field-set>

    <field-set legend="Card Colors">
      <div class="row">
        <div v-for="(ctx, i) in contextuals" :key="i" class="snippet col-6">
          <div class="card text-center mb-3" :class="[`bg-${ctx}`, ctx === 'light' ? 'text-dark' : 'text-white']">
            <div class="card-header">{{ ctx }} Card</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a class="btn" :class="[ctx === 'light' ? 'btn-primary' : 'btn-light']" href="#"> Do Something </a>
            </div>
            <div class="card-footer">Just Now</div>
          </div>
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
