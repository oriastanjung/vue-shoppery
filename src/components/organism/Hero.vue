<!-- eslint-disable vue/multi-word-component-names -->

<script setup>

import CardHero from "../atom/CardHero.vue"
import { Vue3Marquee } from 'vue3-marquee';
import Button from "../ui/Button.vue";
import { RouterLink } from "vue-router";
</script>

<template>
    <section class="relative top-0 mt-14">
        <div class="relative top-0 flex flex-col gap-4">
            <Vue3Marquee :duration="60" :clone='true'>
                <CardHero image="/hero-1.png" />
                <CardHero image="/hero-2.png" />
                <CardHero image="/hero-3.png" />
                <CardHero image="/hero-4.png" />
                <CardHero image="/hero-5.png" />
                <CardHero image="/hero-6.png" />
                <CardHero image="/hero-7.png" />
            </Vue3Marquee>
            <Vue3Marquee :direction="'reverse'" :duration="60" :clone='true'>
                <CardHero image="/hero-8.png" />
                <CardHero image="/hero-9.png" />
                <CardHero image="/hero-10.png" />
                <CardHero image="/hero-11.png" />
                <CardHero image="/hero-12.png" />
                <CardHero image="/hero-13.png" />
                <CardHero image="/hero-14.png" />
            </Vue3Marquee>
            <Vue3Marquee :duration="60" :clone='true'>
                <CardHero image="/hero-15.png" />
                <CardHero image="/hero-16.png" />
                <CardHero image="/hero-17.png" />
                <CardHero image="/hero-18.png" />
                <CardHero image="/hero-19.png" />
                <CardHero image="/hero-20.png" />
                <CardHero image="/hero-21.png" />
            </Vue3Marquee>
        </div>
        <div class="absolute top-0 flex w-full justify-center z-[1]">
            <div
                class=" shadow-2xl bg-opacity-90 shadow-white drop-shadow-2xl drop-shadow-white w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem] flex gap-8 flex-col justify-center items-center bg-white absolute top-0  translate-x-100 z-[1] rounded-full">
                <h2 class="text-2xl font-semibold text-black text-center">The Best Store <br> Is Right Here</h2>
                <a href="#latest">
                    <Button>Start Now</Button>
                </a>
            </div>

        </div>
    </section>
</template>