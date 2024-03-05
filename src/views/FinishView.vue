<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue';
import Footer from '@/components/layout/Footer.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Set a redirect URL and desired redirect time in seconds
const redirectUrl = '/';
const redirectTime = 5; // Adjust this value to your desired time

const router = useRouter();
const counter = ref(redirectTime); // Initialize counter with redirect time

onMounted(() => {
  // Start the countdown timer
  const intervalId = setInterval(() => {
    if (counter.value > 0) {
      counter.value--;
    } else {
      clearInterval(intervalId); // Stop timer when counter reaches 0
      router.push(redirectUrl); // Redirect after timer ends
    }
  }, 1000); // Update timer every second

  // Optionally, clear the interval on component unmount
  return () => clearInterval(intervalId);
});
</script>

<template>
  <Navbar />
  <main class="min-h-[68vh]">
    <section class="mt-10 mb-40 text-black">
      <h6 class="font-koulen text-center text-9xl">Thanks for trying!</h6>
      <p class="font-medium text-5xl text-center mt-10">Redirecting at {{ counter }} seconds</p>
    </section>
  </main>
  <Footer />
</template>
