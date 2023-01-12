<script setup>
import temoignageGauche from '@/components/temoignage_Gauche.vue';
import temoignageDroite from '@/components/temoignage_Droite.vue';

</script>

<template>
    <div class="flex justify-center items-center py-12">
        <h1 class="text-center text-xl md:text-2xl text-Blue01 font-Montserrat dark:text-white font-semibold z-10">INTERNATIONAL</h1>
        <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>

    </div>
    <!--Section 1 (S1): Un semestre au Canada -->
    <section class=" font-Montserrat">
        <h2 class=" text-xl md:text-2xl text-Blue01  dark:text-white font-semibold py-4 pl-10">Un semestre au Canada</h2>
        <p class="pl-10">Au cours de la formation MMI, il sera possible de partir à l’étranger. Tout d’abord au Canada
            pour un semestre, un stage
            à l’étranger, mais aussi quelques jours au festival OFFF de Barcelone.</p>
        <div class="flex justify-center items-center my-6">
            <img src="/public/InternationalS1Vanier.webp" alt="">
        </div>
        <p class="px-20 py-2">Durant la deuxième année du BUT MMI, il est possible de partir au Canada durant un
            semestre (Semestre 3 / Semestre 4).
            Il est possible de partir dans l’université de Vanier et de Matane.</p>
        <p class="px-20">Le Cégep de Vanier est situé à Montréal. Il est désormais le troisième plus grand établissement
            collégial anglophone du
            Québec. Les cours étudiés au Canada sont les mêmes qu’au sein du département MMI. C’est-à-dire des cours de
            conception
            graphique en utilisant la suite Adobe dont Photoshop, Illustrator et InDesign. Des cours de développement
            web en
            utilisant le langage HTML, CSS et Javascript. Des cours de graphismes animés et vidéos en utilisant Adobe
            Première Pro,
            Audition mais aussi After Effects. Et pour finir, des cours sur les technologies émergentes comme la vidéo
            360, la
            réalité virtuelle et l’impression 3D.</p>
    </section>

    <!--Section 2 (S2): Exemples de projets -->
    <section class="mt-12">
        <div class="flex justify-center items-center my-5">
            <h2 class="text-center text-xl md:text-2xl text-Blue01 font-Montserrat dark:text-white font-semibold z-10">Exemples de projets</h2>
            <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
        </div>
        <div>
            <p class="px-20 font-Montserrat py-2">Durant le semestre au Canada, vous allez pouvoir réaliser de nombreux projets, comme
                des couvertures de magazines.</p>
        </div>
        <div class="flex justify-center items-center">
            <img src="/public/InternationalS2.webp" alt="">
        </div>

    </section>

    <!--Section 3 (S3): La vie au Canada -->
    <section class="mt-12">
        <div class="flex justify-center items-center my-5">
            <h2 class="text-center text-xl md:text-2xl text-Blue01 font-Montserrat dark:text-white font-semibold z-10">La vie au Canada</h2>
            <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
        </div>
        <div class="flex flex-col justify-center items-center gap-3">

            <div class="flex flex-row gap-3">
                <img src="/public/InternationalS3canada.webp" alt="">
                <img src="/public/InternationalS3presentation.webp" alt="">
            </div>
            <div class="flex flex-row gap-3">
                <img src="/public/InternationalS3nuit.webp" alt="">
                <img src="/public/InternationalS3busScolaire.webp" alt="">
            </div>
        </div>

    </section>

    <!-- Section 4 (S4) : Témoignages
    <section>
        <div class="bg-[url('/public/TemoignageLogo.webp')] py-12">
            <div class="flex justify-center items-center">
                <h2 class="text-center text-xl md:text-2xl text-Blue01 font-Montserrat dark:text-white font-semibold z-10">Témoignages de nos anciens
                    étudiants</h2>
                <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
            </div>
            <div>
                <temoignageGauche image="" nom="John Martin"
                    avis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                <temoignageDroite image="" nom="John Martin"
                    avis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
            </div>
        </div>
    </section> -->

    <!--Section 5 (S5): Festival OFFF à Barcelone -->
    <section class="mt-12 pb-4">
        <div class="flex justify-center items-center my-5">
            <h2 class="text-center text-xl md:text-2xl text-Blue01 font-Montserrat dark:text-white font-semibold z-10">Quelques jours au festival OFFF à
                Barcelone</h2>
            <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="ml-10 font-Montserrat">
                <p class="px-10 pt-20">Durant les trois années au sein de MMI, il est possible de partir quelques jours
                    à Barcelone pour le festival OFFF. On
                    retrouve au sein de ce festival de nombreuses expositions de designers mais aussi des conférences de
                    graphistes qui
                    montrent leurs créations.</p>
                <p class="py-2 px-10">Grâce au festival et la ville de Barcelone, les étudiants peuvent enrichir leur
                    culture artistique et culturelle.</p>
            </div>
            <div class=" flex justify-center items-center">
                <img src="/public/InternationalS5OFF.webp" alt="">
            </div>
        </div>
        <div class="carousel rounded-box m-6">
            <div class="carousel-item">
                <img class="w-screen" src="/public/InternationalS5img1.webp" alt="">
            </div>
            <div class="carousel-item">
                <img class="w-screen" src="/public/InternationalS5img2.webp" alt="">
            </div>
            <div class="carousel-item">
                <img class="w-screen" src="/public/InternationalS5img3.webp" alt="">
            </div>
        
        </div>

    </section>
</template>
