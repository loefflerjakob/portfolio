<template>
  <div v-editable="blok" class="text-center flex flex-col justify-center items-center">
    <h1 class="text-6xl font-black mb-2">{{ blok.title }}</h1>
    <h2 class="text-2xl font-black">{{ blok.subtitle }}</h2>
    <div class="m-6 flex gap-4 items-center">
      <Technologie v-for="blok in blok.technologies" :key="blok._uid" :blok="blok" />
    </div>
    <div class="w-[500px] max-w-[80vw]">
      {{ blok.description }}
    </div>

    <div v-if="blok.is_desktop" class="neuromorph-l mt-20 rounded-2xl p-4 w-[1000px] max-w-[80vw] ">
      <img :src="blok.image.filename" alt="Profile picture" class="rounded-2xl object-cover">
    </div>

    <div v-else="blok.is_desktop" class="neuromorph-l mt-20 rounded-2xl p-4 w-[350px] max-w-[100%] ">
      <img :src="blok.image.filename" alt="Profile picture" class="rounded-2xl object-cover">
    </div>


    <div class="text-left">
          <StoryblokComponent v-for="blok in blok.details" :key="blok._uid" :blok="blok" />

    </div>
  </div>


</template>

<script setup>
defineProps({ blok: Object });
</script>