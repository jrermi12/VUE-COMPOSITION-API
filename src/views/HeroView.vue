<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { storeToRefs } from "pinia"
import { useHeroStore } from "../store/hero.store"

const heroStore = useHeroStore();
const { heros } = storeToRefs(heroStore)

const { fetchHeros } = heroStore

const onSwiper = () => {
    console.log("on swiper called")
}

const onSlideChange = () => {
    console.log("onSlideChange called")
}

fetchHeros()

</script>

<template>
    <section>
        <swiper :slides-per-view="1" :space-between="30" @swiper="onSwiper" @slideChange="onSlideChange"
            class="default-slider">
            <swiper-slide v-for="hero in heros" :key="hero._id">
                <!-- Hero section -->
                <div class="w-full">
                    <div class=" inset-x-0 bottom-0 "></div>
                    <div class=" ">
                        <div class="absolute inset-0">
                            <img class="h-full w-full object-cover"
                                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                                alt="">
                            <!-- <img class="h-full w-full object-cover" :src="service.files[0].url"
                                    alt="People working on laptops"> -->
                            <div class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply">
                            </div>
                        </div>
                        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                            <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                <span class="block text-white">{{ hero.title }}</span>
                                <span class="block text-indigo-200">customer support</span>
                            </h1>
                            <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">{{
                                hero.description }}
                            </p>
                            <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                    <a href="/detail"
                                        class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">
                                        Register </a>
                                    <a href="/detail"
                                        class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                                        Detail </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

        </swiper>
    </section>
</template>

<style scoped>
.default-slider .swiper-slide {
    display: flex;
    height: 100vh !important;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 24px;
    font-weight: 700;
}
</style>