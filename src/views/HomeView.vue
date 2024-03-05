<script setup>
import Navbar from '@/components/layout/Navbar.vue';
import Hero from "@/components/organism/Hero.vue"
import Footer from '@/components/layout/Footer.vue';
import LatestProduct from '@/components/organism/LatestProduct.vue';
</script>

<template>
  <Navbar/>
  <main>
    <Hero />
    <LatestProduct/>
  </main>
  <Footer />
</template>
