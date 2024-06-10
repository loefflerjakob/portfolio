<template>

    <div v-editable="blok" class="neuromorph-l max-w-3xl md:w-[30vw] w-auto rounded-xl p-5">
        <h3 class="text-2xl font-black">{{ blok.title }}</h3>

        <CvItem v-for="blok in blok.cv_item" :key="blok._uid" :blok="blok" />
    </div>

</template>



<script setup>
defineProps({ blok: Object })
</script>

<style scoped>

</style>