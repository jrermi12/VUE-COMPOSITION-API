<script setup>
import HeroView from './HeroView.vue';
import AboutView from './AboutView.vue';
import PartnerView from './PartnerView.vue';
import ServiceView from './ServiceView.vue';
import ContactView from './ContactView.vue';
import NavView from '../components/NavView.vue';
</script>
<template>
    <main>
    <NavView />
    <HeroView />
    <PartnerView />
    <AboutView />
    <ServiceView />
    <ContactView />
    </main>
</template>