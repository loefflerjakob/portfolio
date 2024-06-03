<template>
    <div v-editable="blok" class="my-4">
        <h4 class=" text-xl font-black">{{ blok.title }}</h4>
        <p>{{ blok.text }}</p>
    </div>
</template>



<script setup>
defineProps({ blok: Object })
</script>

<style scoped>



</style>