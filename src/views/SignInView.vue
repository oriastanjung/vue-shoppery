<script setup>
import Button from '@/components/ui/Button.vue';
import { useRouter } from 'vue-router';
const router = useRouter()
import { ref, onMounted } from "vue"
import axios from 'axios';

const form = ref({
    username: "",
    password: ""
})

const handleChange = (e) => {
    form.value[e.target.name] = e.target.value
}

const handleGoToHome = () => {
    router.push('/')
}
const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const resp = await axios.post('https://fakestoreapi.com/auth/login', { username: form.value.username, password: form.value.password })
        localStorage.setItem("token", JSON.stringify(resp.data.token))
        router.push("/")
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    const token = localStorage.getItem("token")
    if (token) {
        router.push("/")
    }
})

</script>

<template>
    <main>
        <section class="flex w-full items-center justify-center py-9">
            <h1 @click="handleGoToHome" class="font-koulen text-2xl flex items-center cursor-pointer">
                <img class="w-10 h-10" src="/logo.png" alt="">
                SHOPPERY
            </h1>
        </section>
        <section class="container mx-auto">
            <h1 class="font-koulen text-4xl text-center">WELCOME BACK !</h1>
            <form @submit="handleSubmit" class="flex flex-col items-center justify-center gap-8 mt-14">
                <div class="w-3/4 flex bg-zinc-300 items-center py-5 px-6 rounded-3xl gap-2 ">
                    <div>
                        <v-icon class="text-2xl text-black" name="hi-user" />
                    </div>
                    <div class="w-full">
                        <input v-model="form.username" @input="handleChange" name="username" required
                            class="outline-none bg-transparent w-full placeholder:text-zinc-500 text-black font-medium text-xl"
                            type="text" placeholder="JohnD">
                    </div>
                </div>
                <div class="w-3/4 flex bg-zinc-300 items-center py-5 px-6 rounded-3xl gap-2 ">
                    <div>
                        <v-icon class="text-2xl text-black" name="hi-key" />
                    </div>
                    <div class="w-full">
                        <input v-model="form.password" @input="handleChange" name="password" required
                            class="outline-none bg-transparent w-full placeholder:text-zinc-500 text-black font-medium text-xl"
                            type="password" placeholder="********">
                    </div>
                </div>
                <div class="w-3/4">
                    <Button type="submit" class="w-full text-2xl">Login</Button>
                    <a target="_blank" href="https://fakestoreapi.com/users"><Button type="button" class="w-full text-2xl mt-5 bg-zinc-400">Show Dummy Users Account
                        </Button></a>
                </div>
            </form>
        </section>
    </main>
</template>