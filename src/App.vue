
<script setup>
import PromoBar from './components/PromoBar.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ToastContainer from './components/ToastContainer.vue'
</script>


<template>
  <PromoBar />
  <Navbar />
  <RouterView />
  <Footer />
  <ToastContainer />
</template>