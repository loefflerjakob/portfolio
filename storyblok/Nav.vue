<template>
  <div v-editable="blok" class="m-8 flex flex-wrap md:justify-between items-center gap-8 justify-center">
    <div><h2 class="word-breaker name font-black text-3xl leading-none">jakob löffler</h2></div>
    <div>
      <NavItem v-for="blok in blok.navItems" :key="blok._uid" :blok="blok" />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
</style>