<template>
    <a class="active:bg-gray-100 m-3 py-2 px-4 rounded neuromorph-s" :href="blok.Anchor">
        {{ blok.Name }}
    </a>
  


</template> 

<script setup>
defineProps({ blok: Object })
</script>

<style scoped>

</style>