<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


</script>

<template>
  <Header></Header>

  <main class="bg-Grey03">
    <RouterView />
  </main>

  <Footer></Footer>
</template>

