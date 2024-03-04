<script setup>
import Button from "../ui/Button.vue"
import { useRouter } from 'vue-router';
const router = useRouter()
const handleGoToHome = () => {
    router.push('/')
}

</script>

<template>
    <header class="container mx-auto px-4  py-10 text-black">
        <nav class="flex justify-between w-full items-center">
            <h1 @click="handleGoToHome" class="font-koulen text-2xl flex items-center cursor-pointer">
                <img class="w-10 h-10" src="/logo.png" alt="">
                SHOPPERY
            </h1>
            <div>
                <Button @btnclick="()=>router.push('/login')" class="">Sign In</Button>
            </div>
        </nav>
    </header>
</template>