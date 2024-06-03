<template>
  <div v-editable="blok" class="flex justify-center align-center mx-20 my-20 md:my-48">
    <div>
      <h2 :id="blok.anchor" class="text-3xl font-black my-5">{{ blok.title }}</h2>
      <div class="flex gap-10 flex-col md:flex-row md:w-auto w-[90vw]">
        
        <CvBlock v-for="blok in blok.sectionContent" :key="blok._uid" :blok="blok" />

      </div>
    </div>
  </div>


</template> 

<script setup>
defineProps({ blok: Object })
</script>

<style scoped>

</style>