<template>
  <nav class="navbar navbar-expand navbar-dark bg-primary">
    <router-link to="/" class="navbar-brand">Theme Switchable</router-link>
    <div class="collapse navbar-collapse">
      <div class="navbar-nav mr-auto">
        <router-link to="/about" class="nav-item nav-link">About</router-link>
      </div>
      <ThemeSwitcher />
    </div>
  </nav>
</template>

<script>
import ThemeSwitcher from '@/components/ThemeSwitcher'
export default {
  components: {
    ThemeSwitcher,
  },
}
</script>

<style lang="scss" scoped></style>
