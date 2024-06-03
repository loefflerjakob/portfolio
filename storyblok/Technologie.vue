<template>
  <div class="flex items-center justify-center neuromorph-s rounded-sm-3 w-8 h-8 rounded neuromorph-s">
    <a :href="blok.link.url" target="_blank">
      <img :src="blok.technologie.filename" alt="svg">
    </a>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
