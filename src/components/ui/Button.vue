<script setup>

import { defineProps, defineEmits } from "vue"

const props = defineProps(['class','type'])
const emit = defineEmits(['btnclick'])
const handleClick = () => {
    emit('btnclick')
}
</script>

<template>
    <button :type="props.type" @click="handleClick" :class="props.class" class="py-2 px-4 text-center text-white bg-black rounded-xl font-bold">
        <slot></slot>
    </button>
</template>