<script setup>
import { onMounted, ref, watch } from "vue";
import axios from "axios";
import CardProduct from '@/components/atom/CardProduct.vue';
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
const data = ref([]);
const keyword = ref('');
const filteredData = ref([]);

const fetchAllProduct = async () => {
    const resp = await axios.get('https://fakestoreapi.com/products');
    data.value = resp.data;
    filterData(); // Call filterData after data is fetched
}

const handleChange = (e) => {
    keyword.value = e.target.value;
}

const filterData = () => {
    if (!keyword.value) {
        filteredData.value = data.value;
    } else {
        filteredData.value = data.value.filter((item) => (
            String(item.title).toLowerCase().includes(String(keyword.value).toLowerCase())
        ));
    }
}

onMounted(() => {
    fetchAllProduct();
});

watch(keyword, filterData);
</script>


<template>
    <Navbar />
    <main class="container mx-auto my-20 ">
        <section class="px-4 flex w-full flex-col justify-center items-center gap-5">
            <h3 class="text-center text-black font-medium text-5xl">Search your product</h3>
            <form class="w-full flex bg-zinc-300 items-center py-5 px-6 rounded-3xl gap-2 ">
                <div>
                    <v-icon class="text-2xl text-black" name="hi-search" />
                </div>
                <div class="w-full">
                    <input v-model="keyword" @input="handleChange"
                        class="outline-none bg-transparent w-full placeholder:text-zinc-500 text-black font-medium text-xl"
                        type="text" placeholder="Myrista Lorem Ipsum">
                </div>
            </form>
        </section>
        <section class="mt-32 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-20 place-items-center">
            <CardProduct v-for="(item, idx) of filteredData" :key="idx" :id="item.id" :title="item.title"
                :image="item.image" :price="item.price" :sold="item.rating.count" />
        </section>
    </main>
    <Footer />
</template>