<script setup>
import { defineProps } from "vue"
const props = defineProps(['image', 'title','id'])
import { RouterLink } from "vue-router";
</script>

<template>
    <RouterLink :to="'/detail/'+props.id">
        <div
            class="relative w-80 h-80 group border cursor-pointer hover:border-gray-500 rounded-3xl overflow-hidden flex flex-col items-center justify-center">
            <img class="w-64 h-full object-cover" :src="props.image" alt="Product Image">
            <div
                class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p class="text-white text-center px-4">{{ props.title }}</p>
            </div>
        </div>
    </RouterLink>
</template>