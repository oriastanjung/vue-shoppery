<script setup>
import Button from "../ui/Button.vue";
import CardLatest from "../atom/CardLatest.vue"
import { onMounted,ref } from "vue";
import axios from "axios";

const data = ref([])

const fetchAllProduct = async () => {
    const resp = await axios.get('https://fakestoreapi.com/products')

    data.value=resp.data.slice(0,8)
}
onMounted(() => {
    fetchAllProduct()
})
</script>

<template>
    <section class="mt-28 container mx-auto mb-96">
        <h3 class="w-full text-center font-medium text-5xl mb-12">Trendsetting innovations, our latest products</h3>
        <div v-if="data.length > 0" class="flex flex-row gap-4 justify-center items-center flex-wrap">
            <CardLatest v-for="(item,idx) of data" :key="idx" :title="item.title" :image="item.image"/>
        
        </div>

        <div class="flex justify-center items-center w-full mt-8">
            <Button>See More</Button>
        </div>
    </section>
</template>