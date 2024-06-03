<template>
  <div v-editable="blok" class="flex items-center justify-center flex-col md:flex-row md:gap-40 p-6 gap-10 md:mt-40 mt-15">
    <div v-editable="blok" class="header-box">
      <h1 class="word-breaker text-6xl font-black mb-2">{{ blok.main_title }}</h1>
      <p class="text-lg font-light text-gray-600">{{ blok.subtitle }}</p>
    </div>
    <div class="flex-shrink-0 md:ml-6">
      <div class="neuromorph-l rounded-2xl p-4">
        <img :src="blok.image.filename" alt="Profile picture" class="w-72 h-80 rounded-2xl object-cover">
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style scoped>

</style>