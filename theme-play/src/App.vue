<template>
  <Sidebar :routes="routes">
    <router-view />
  </Sidebar>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import { routes } from "@/router";
export default {
  components: {
    Sidebar,
  },
  computed: {
    routes: () => routes
  },
}
</script>

<style lang="scss"></style>
