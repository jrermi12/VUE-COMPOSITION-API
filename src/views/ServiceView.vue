<script setup>
    import { storeToRefs } from "pinia"; 
    import { useServiceStore } from "../store/service.store"

    const serviceStore = useServiceStore();
    const { services } = storeToRefs(serviceStore);
    const { fetchServices } = serviceStore


    fetchServices()
</script>

<template>
    <section>
        <section aria-labelledby="category-heading" class="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8">
            <div class="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
                <h2 id="category-heading" class="text-2xl font-extrabold tracking-tight text-gray-900">Upcoming eventss</h2>
                <a href="#" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">View
                    More<span aria-hidden="true"> &rarr;</span></a>
            </div>

            <div class="mt-4 flow-root">
                <div class="-my-2">
                    <div class="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                        <div
                            class="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                            <a href="#"
                                class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                                <span aria-hidden="true" class="absolute inset-0">
                                    <img src="../../../public//img/1.jpg" alt=""
                                        class="w-full h-full object-center object-cover">
                                </span>
                                <span aria-hidden="true"
                                    class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                                <!-- <span class="relative mt-auto text-center text-xl font-bold text-white">New Arrivals</span> -->
                            </a>

                            <a href="#"
                                class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                                <span aria-hidden="true" class="absolute inset-0">
                                    <img src="../../../public//img/2.jpg" alt=""
                                        class="w-full h-full object-center object-cover">
                                </span>
                                <span aria-hidden="true"
                                    class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                                <!-- <span class="relative mt-auto text-center text-xl font-bold text-white">Productivity</span> -->
                            </a>

                            <a href="#"
                                class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                                <span aria-hidden="true" class="absolute inset-0">
                                    <img src="../../../public//img/3.jpg" alt=""
                                        class="w-full h-full object-center object-cover">
                                </span>
                                <span aria-hidden="true"
                                    class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                                <!-- <span class="relative mt-auto text-center text-xl font-bold text-white">Workspace</span> -->
                            </a>

                            <a href="#"
                                class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                                <span aria-hidden="true" class="absolute inset-0">
                                    <img src="../../../public//img/4.jpg" alt=""
                                        class="w-full h-full object-center object-cover">
                                </span>
                                <span aria-hidden="true"
                                    class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                                <!-- <span class="relative mt-auto text-center text-xl font-bold text-white">Accessories</span> -->
                            </a>

                            <a to="detail"
                                class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                                <span aria-hidden="true" class="absolute inset-0">
                                    <img src="../../../public//img/5.jpg" alt=""
                                        class="w-full h-full object-center object-cover">
                                </span>
                                <span aria-hidden="true"
                                    class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"></span>
                                <!-- <span class="relative mt-auto text-center text-xl font-bold text-white">Sale</span> -->
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-8">
                <div class="inline-flex rounded-md shadow">
                    <router-link to="events"
                        class="inline-flex  px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-cyan-200 hover:bg-cyan-500">
                        View More
                        <!-- Heroicon name: solid/external-link -->
                        <svg class="-mr-1 ml-3 h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor" aria-hidden="true">
                            <path
                                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path
                                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                    </router-link>
                </div>
            </div>

            <div class="mt-6 px-4 sm:hidden">
                <a href="#" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">Browse all
                    categories<span aria-hidden="true"> &rarr;</span></a>
            </div>
        </section>
    </section>
</template>