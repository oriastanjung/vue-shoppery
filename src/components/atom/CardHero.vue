<script setup>
    import {defineProps} from "vue"
    const props = defineProps(['image'])
</script>

<template>
    <div class="rounded-3xl w-52 h-52 bg-black overflow-hidden mx-4 object-center flex items-center justify-center">
        <img :src="props.image" alt="" class=" w-full object-cover object-center">
    </div>
</template>