<script setup>
import { defineProps } from "vue"
const props = defineProps(['image', 'title', 'price', 'sold','id'])
import { RouterLink } from "vue-router";
</script>

<template>
    <RouterLink :to="`/detail/${props.id}`">
        <div
            class="group border w-96 h-[35rem] cursor-pointer rounded-3xl py-5 overflow-hidden flex flex-col items-start justify-between">
            <div class="w-full flex pt-20 justify-center items-center mb-10">
                <img class="w-40 object-cover object-center group-hover:scale-125 transition-all transform ease-in-out duration-300"
                    :src="props.image" alt="Product Image">
            </div>
            <div class="w-full">
                <div class="px-7">
                    <p
                        class="text-left line-clamp-2 break-words font-medium text-black text-xl group-hover:underline transition-all duration-500 ease-in-out">
                        {{ props.title }}</p>
                </div>
                <div class="flex flex-row items-center justify-between px-7 w-full mt-8">
                    <p class="text-xl  text-black">${{ props.price }}</p>
                    <p class="text-xl font-bold text-black">Sold : {{ props.sold }}</p>
                </div>
            </div>
        </div>
    </RouterLink>
</template>