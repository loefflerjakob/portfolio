<template>

    <div v-editable="blok" class="project-box p-10 flex flex-col md:flex-row gap-5 justify-center items-center neuromorph-l rounded-xl p-5">
        <div class="flex gap-5 flex-col ">
            <div>
                <h3 class="text-2xl font-black">{{ blok.title }}</h3>
                <h4 class="text-lg font-light">{{ blok.subtitle }}</h4>
            </div>
            <div class="flex gap-4 items-center">
                <Technologie v-for="blok in blok.technologies" :key="blok._uid" :blok="blok" />
            </div>
            <a class="active:bg-gray-100 py-2 px-4 w-fit rounded neuromorph-s" :href="blok.Anchor">
                Cooler Button
            </a>
        </div>
        <img v-if="blok.is_desktop" :src="blok.image.filename" alt="project image" class="md:max-w-[60%] max-w-[100%] rounded-2xl object-cover">
        <img v-else :src="blok.image.filename" alt="project image" class="md:ml-[5vw] max-h-[45vh] sm:max-h-[30vh] md:max-h-[40vh] rounded-2xl object-cover">


    </div>

</template>



<script setup>
import Technologie from './Technologie.vue';

defineProps({ blok: Object })
</script>

<style scoped>

@media screen and (min-width: 767px) {
    .project-box {
        max-width: calc(60vw + 2.5rem);
    }
}
    


</style>