<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


</script>

<template>
  <div :class="!isDark ? 'dark' : ''">
    <header>
      <Header></Header>
      <!--Bouton Darkmode-->
      <div class="flex gap-2 items-center bg-Grey03  dark:bg-Grey01">
        <p class="flex text-lg font-Montserrat dark:text-white duration-700">Dark Mode</p>
        <!-- Début Bouton Switch -->
        <label
          class="switch relative dark:border-transparent dark:hover:border-Jaune border-2 rounded-full duration-700">
          <input type="checkbox" @click="isDark = !isDark">
          <span class="slider round bg-white before:bg-[#222] dark:before:bg-Jaune"></span>
        </label>
        <!-- Fin Bouton Switch -->
      </div>
      <!--Fin Bouton Darkmode-->
    </header>

    <main class="bg-Grey03 dark:bg-Grey01 text-black dark:text-white">
      <RouterView />
    </main>

    <footer>
      <Footer></Footer>
    </footer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isDark: true,
    };
  },

};
</script>

<style scoped>
.switch {
  width: 60px;
  height: 34px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0);
  -webkit-transition: .4s;
  transition: .4s;

}

.slider:before {
  position: absolute;
  content: "";
  height: 23px;
  width: 23px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #FFF;
}

input:focus+.slider {
  box-shadow: 0 0 1px #222;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.button1 {
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  transition-duration: 300ms;
}

.v-enter-active,
.v-leave-active {
  transition: 0.6s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  translate: 0px 150px;
}
</style>




