<script setup>
import Hero from '../components/Hero.vue'
import MenCollection from '../components/MenCollection.vue'
import WomenCollection from '../components/WomenCollection.vue'
import TrustStrip from '../components/TrustStrip.vue' 

import womenShoes from '../data/women.json'
import menShoes from '../data/men.json'

</script>

<template>
  <main>
    <Hero />
    <MenCollection :shoes="menShoes" />
    <WomenCollection :shoes="womenShoes" />
    <TrustStrip /> 
  </main>
</template>
