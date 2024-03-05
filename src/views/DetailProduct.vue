<script setup>
import Button from "../components/ui/Button.vue"
import Navbar from "../components/layout/Navbar.vue"
import Footer from "../components/layout/Footer.vue"
import { onMounted, ref } from "vue"
import { useRoute,useRouter } from "vue-router"
import axios from "axios"
const route = useRoute()
const router = useRouter()
const data = ref({})

const handleBuy = () => {
    const token = localStorage.getItem("token")
    if(token){
        router.push("/finish")
    }else{
        router.push("/login")
    }
}


onMounted(() => {
    const fetchData = async () => {
        const resp = await axios.get(`https://fakestoreapi.com/products/${route.params.id}`)

        data.value = resp.data
    }
    fetchData()
})
</script>

<template>
    <Navbar />
    <main v-if="data" class="container px-4 mx-auto my-20 flex flex-col lg:flex-row items-center xl:items-start w-full gap-5 xl:gap-36 text-black">
        <section class="lg:w-1/3" v-if="data">
            <img class="w-[40rem] object-cover object-center" :src="data.image" alt="">
        </section>
        <section v-if="data.id" class="lg:w-2/3">
            <h6 class="font-medium text-5xl">{{ data.title }}</h6>
            <div v-if="data" class="w-full mt-10 flex items-center lg:gap-20">
                <p class="text-3xl" v-if="data.rating">Rate : {{ data.rating.rate }}</p>
                <p class="text-3xl " v-if="data.rating">Sold : {{ data.rating.count }}</p>
                <p class="text-3xl " v-if="data.price">Price : <span class="font-bold">
                        ${{ data.price }}
                    </span>
                </p>
            </div>
            <p class="font-light text-2xl mt-10 xl:w-10/12 break-words">{{ data.description }}</p>
            <div class="mt-16 w-full">
                <Button @btnclick="handleBuy" class="w-full text-2xl">Buy Now</Button>
            </div>
        </section>
    </main>
    <Footer />
</template>