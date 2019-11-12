<template>
  <div class="d-flex">
    <nav class="sidebar bg-primary navbar-dark">
      <ul class="sidebar-nav navbar-nav">
        <router-link v-for="(route, idx) in routes" :key="idx" :to="route.path" class="nav-item" tag="li">
          <a class="nav-link">{{ route.label }}</a>
        </router-link>
      </ul>
    </nav>
    <div class="sidebar-page flex-fill">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ['routes'],
}
</script>

<style lang="scss"></style>
