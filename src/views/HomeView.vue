<script setup>
import LogoMMIHome from '@/components/LogoMMIHome.vue';
import btnConnexion from '@/components/btnConnexion.vue';
import BtnEvenement from '@/components/btnEvenement.vue';

</script>

<template>
  <div class="bg-[url('/public/HomeLine.svg')]">
    <!--Section 1 (S1) : Présentation-->
    <section class="bg-[url('/public/HomeS1iut.svg')] bg-no-repeat bg-cover">
      <div class="flex flex-col justify-center items-center py-80 xl:py-96">
        <LogoMMIHome class="w-80 lg:w-auto mb-20 mt-6" />
        <h1 class="text-center text-white text-xl md:text-3xl font-Montserrat font-semibold my-4">JOURNÉES PORTES
          OUVERTES
          <br>
          SAMEDI 28 JANVIER 2023
          <br>
          DE 9H à 17H
        </h1>
        
      </div>
    </section>

    <!--Section 2 (S2) : Lien-->
    <section>
      <div class="flex justify-center items-center">
        <h2 class="text-center text-xl md:text-2xl text-Blue01 dark:text-white font-semibold font-Montserrat z-10">DÉCOUVREZ LA FORMATION MMI</h2>
        <div class="hidden md:block w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 m-4 lg:m-16">
        <div>
          <RouterLink to="/ButMMI">
            <div
              class=" bg-[url('/public/HomeS2ButMMI.webp')] bg-no-repeat bg-cover h-96 flex justify-center items-center mb-4 md:mb-0">
              <p class="text-white font-Montserrat font-medium text-center text-xl md:text-2xl">BUT MMI</p>
            </div>
          </RouterLink>
          <RouterLink to="/FAQ">
            <div
              class="bg-[url('/public/HomeS2FAQ.webp')] bg-no-repeat bg-cover h-96 flex justify-center items-center mb-4 md:mb-0">
              <p class="text-white font-Montserrat font-medium text-center text-xl md:text-2xl">FAQ</p>
            </div>
          </RouterLink>
        </div>
        <div>
          <RouterLink to="/Alternance">
            <div
              class="bg-[url('/public/HomeS2Alternance.webp')] bg-no-repeat bg-cover h-96 flex justify-center items-center mb-4 md:mb-0">
              <p class="text-white font-Montserrat font-medium text-center text-xl md:text-2xl">ALTERNANCE</p>
            </div>
          </RouterLink>
          <RouterLink to="/International">
            <div
              class="bg-[url('/public/HomeS2internationnal.webp')] bg-no-repeat bg-cover h-96 flex justify-center items-center mb-4 md:mb-0">
              <p class="text-white font-Montserrat font-medium text-center text-xl md:text-2xl">INTERNATIONAL</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!--Section 3 (S3) : Événements de l'iut-->
    <section  class="pb-20">
      <div class="flex justify-center items-center">
        <h2 class="text-center text-xl md:text-2xl text-Blue01 font-Montserrat dark:text-white font-semibold z-10">ÉVÉNEMENTS DU DÉPARTEMENT</h2>
        <div class="hidden md:block w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
      </div>
      <p class="text-center my-6 font-Montserrat">Retrouvez ici tous les événements du département !</p>
      <!--Carousel-->
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <!--Posts insta MMI 25 ans -->
        <div class="flex justify-center">
          <div>
            <!--Images-->
            <div class="w-96 carousel rounded-box">
              <div id="postMMI25ans1" class="w-full carousel-item relative">
                <img src="/public/postMMI25ans1.png" class="w-full" alt="Post Instagram de l'événement MMI 25 ans - Titre MMI 25 ans">
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#postMMI25ans4" class="btn btn-md btn-circle btn-ghost text-white">❮</a>
                  <a href="#postMMI25ans2" class="btn btn-md btn-circle btn-ghost text-white">❯</a>
                </div>
              </div>
              <div id="postMMI25ans2" class="w-full carousel-item relative">
                <img src="/public/postMMI25ans2.png" class="w-full" alt="Post Instagram de l'événement MMI 25 ans - Illustration">
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#postMMI25ans1" class="btn btn-md btn-circle btn-ghost text-white">❮</a>
                  <a href="#postMMI25ans3" class="btn btn-md btn-circle btn-ghost text-white">❯</a>
                </div>
              </div>
              <div id="postMMI25ans3" class="w-full carousel-item relative">
                <img src="/public/postMMI25ans3.png" class="w-full" alt="Post Instagram de l'événement MMI 25 ans - Participe en créant une oeuvre numérique">
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#postMMI25ans2" class="btn btn-md btn-circle btn-ghost text-white">❮</a>
                  <a href="#postMMI25ans4" class="btn btn-md btn-circle btn-ghost text-white">❯</a>
                </div>
              </div>
              <div id="postMMI25ans4" class="w-full carousel-item relative">
                <img src="/public/postMMI25ans4.png" class="w-full" alt="Post Instagram de l'événement MMI 25 ans - Laisse ton empreinte dans l'histoire de MMI">
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#postMMI25ans3" class="btn btn-md btn-circle btn-ghost text-white">❮</a>
                  <a href="#postMMI25ans1" class="btn btn-md btn-circle btn-ghost text-white">❯</a>
                </div>
              </div>
            </div>
            <!--btn passage des images-->
            <div class="flex justify-center w-full py-1 gap-2">
              <a href="#postMMI25ans1" class="btn btn-xs btn-circle"></a>
              <a href="#postMMI25ans2" class="btn btn-xs btn-circle"></a>
              <a href="#postMMI25ans3" class="btn btn-xs btn-circle"></a>
              <a href="#postMMI25ans4" class="btn btn-xs btn-circle"></a>
            </div>
            <!--btn lien vers l'événement-->
            <div>
              <a href="https://www.instagram.com/mmi25ans/" target="_blank">
              <BtnEvenement nom="MMI 25 ANS"></BtnEvenement></a>
            </div>
          </div>
        </div>
        <!--Posts insta Défi 24 H -->
        <div class="flex justify-center">
          <div>
            <!--Images-->
            <div class="w-96 carousel rounded-box">
              <div id="postDéfi24h1" class="w-full carousel-item relative">
                <img src="/public/postDéfi24h1.png" class="w-full" alt="Post Instagram de l'événement Défi 24h - Titre Le défi 24h">
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#postDéfi24h4" class="btn btn-md btn-circle btn-ghost text-white">❮</a>
                  <a href="#postDéfi24h2" class="btn btn-md btn-circle btn-ghost text-white">❯</a>
                </div>
              </div>
              <div id="postDéfi24h2" class="w-full carousel-item relative">
                <img src="/public/postDéfi24h2.png" class="w-full" alt="Post Instagram de l'événement Défi 24h - Le défi 24h revient le 11 et 12 mars 2023 à partir de 9h">
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#postDéfi24h1" class="btn btn-md btn-circle btn-ghost text-white">❮</a>
                  <a href="#postDéfi24h3" class="btn btn-md btn-circle btn-ghost text-white">❯</a>
                </div>
              </div>
              <div id="postDéfi24h3" class="w-full carousel-item relative">
                <img src="/public/postDéfi24h3.png" class="w-full" alt="Post Instagram de l'événement Défi 24h - au département MMI du campus de Montbéliard">
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#postDéfi24h2" class="btn btn-md btn-circle btn-ghost text-white">❮</a>
                  <a href="#postDéfi24h4" class="btn btn-md btn-circle btn-ghost text-white">❯</a>
                </div>
              </div>
              <div id="postDéfi24h4" class="w-full carousel-item relative">
                <img src="/public/postDéfi24h4.png" class="w-full" alt="Post Instagram de l'événement Défi 24h - Venez participer à un défi unique en MMI">
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#postDéfi24h3" class="btn btn-md btn-circle btn-ghost text-white">❮</a>
                  <a href="#postDéfi24h1" class="btn btn-md btn-circle btn-ghost text-white">❯</a>
                </div>
              </div>
            </div>
            <!--btn passage des images-->
            <div class="flex justify-center w-full py-1 gap-2">
              <a href="#postDéfi24h1" class="btn btn-xs btn-circle"></a>
              <a href="#postDéfi24h2" class="btn btn-xs btn-circle"></a>
              <a href="#postDéfi24h3" class="btn btn-xs btn-circle"></a>
              <a href="#postDéfi24h4" class="btn btn-xs btn-circle"></a>
            </div>
            <!--btn lien vers l'événement-->
            <div>
              <a href="https://www.instagram.com/defi24h_mmi/" target="_blank">
              <BtnEvenement nom="DÉFI 24H"></BtnEvenement></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Section 4 (S4) : Connexion prof / étudiants-->
    <section class="bg-[url('/public/HomeS4Connexion.webp')] bg-no-repeat bg-cover flex flex-col justify-center items-center pb-36">
      <LogoMMIHome class="w-80 lg:w-auto my-28" />
      <h2 class="text-center text-xl md:text-2xl font-Montserrat font-semibold text-white my-6">VOUS ÊTES PROFESSEUR / ÉTUDIANT DU
        DÉPARTEMENT ?</h2>
      <div class="flex flex-col lg:flex-row justify-around items-center gap-12 my-12  m-4 lg:m-0 lg:my-12">
        <p class="text-white font-Montserrat w-full lg:w-3/6 text-xl">Inscrivez-vous pour pouvoir accéder au planning de la journée et
          vous attribuer une activité !</p>
        <RouterLink to="/Connexion">
          <btnConnexion></btnConnexion>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
