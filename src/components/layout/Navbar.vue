<script setup>
import { onMounted, ref } from "vue";
import Button from "../ui/Button.vue"; // Pastikan impor ini ada
import { useRouter } from 'vue-router';

const router = useRouter();
const handleGoToHome = () => {
  router.push('/');
}

const handleLogout = () => {
  localStorage.removeItem("token");
  console.log("click");
  router.go(0);
}

const handleButton = () => {
  if (!isLogin.value) {
    router.push('/login');
  } else {
    handleLogout();
  }
}

const isLogin = ref(false);

onMounted(() => {
  const token = localStorage.getItem("token");
  if (token) {
    isLogin.value = true; // Only set isLogin to true if token exists
    console.log("isLogin set to true due to token");
  } else {
    console.log("isLogin remains false due to no token");
  }
});
</script>

<template>
    <header class="container mx-auto px-4 py-10 text-black">
      <nav class="flex justify-between w-full items-center">
        <h1 @click="handleGoToHome" class="font-koulen text-2xl flex items-center cursor-pointer">
          <img class="w-10 h-10" src="/logo.png" alt="">
          SHOPPERY
        </h1>
        <div v-if="isLogin">
          <Button @btnclick="handleButton" class="">
            {{ !isLogin ? "Sign In" : "Sign Out" }}
          </Button>
        </div>
        <div v-if="!isLogin">
          <Button @btnclick="handleButton" class="">
            {{ isLogin ? "Sign Out" : "Sign In" }}
          </Button>
        </div>
      </nav>
    </header>
  </template>
