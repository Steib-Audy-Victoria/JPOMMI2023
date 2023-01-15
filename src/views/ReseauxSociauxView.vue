<script  setup>
import BtnSuivre from "../components/btnSuivre.vue";
import BtnSuivre2 from "../components/btnSuivre2.vue";
import sound from "../components/iconSound.vue"


</script>

<template>
    <div class="flex justify-center items-center py-12">
        <h1 class="text-center font-Montserrat text-2xl text-Blue01 dark:text-white font-semibold z-10">RÉSEAUX SOCIAUX</h1>
        <div class="hidden lg:block w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
    </div>
    <!--Actualités-->
    <section class="pb-10">
        <div class="flex justify-center items-center mb-6">
            <iframe width="1400" height="750" src="https://www.youtube.com/embed/6g8xtzzi6aY"
                title="A la découverte du B.U.T. MMI" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
        <div>
            <div class=" flex items-center">
                <p class="px-10 font-semibold font-Montserrat">Suivez l’actualité MMI en continu</p>
                <sound></sound>
            </div>
            <p class="px-10 font-thin font-Montserrat">Suivez nos posts en temps réels depuis notre site ou suivez-nous directement sur
                nos réseaux sociaux.</p>
        </div>
    </section>
    <!--Actualités du département - Instagram-->
    <section class="bg-Blue02  pb-3">
        <h2 class="px-10 py-4 font-semibold text-white font-Montserrat">Actualités du département</h2>
        <div>
            
        </div>
        <a href="https://www.instagram.com/mmi_montbeliard/" target="_blank">
        <BtnSuivre ></BtnSuivre></a>
    </section>
    <!--Youtube-->
    <section>
        <div class="grid grid-cols-1 md:grid-cols-2 py-5">
            <div class="px-6 font-Montserrat">
                <h2 class=" text-xl md:text-3xl text-Blue01 dark:text-white font-semibold  py-4">La vie étudiante</h2>
                <p>Que serait la vie étudiante sans ses associations!
                    Laura Demougeot, étudiante en 2ème année de DUT MMI, vous présente le BDE MMI (Bureau des étudiants)
                    dont elle est la
                    vice-présidente.</p>
                <p>Avec elle, Thomas Foubert, également en 2ème année de DUT MMI, vous dit tout sur la MéMO (Maison des
                    étudiants de
                    Montbéliard) dont il est le président.</p>
                <p>Une émission présentée par Elisa Page, étudiante, elle aussi en 2ème année de DUT MMI!</p>
            </div>
            <div class="flex m-2">
                <iframe width="730" height="410" src="https://www.youtube.com/embed/wgD4pGlqWKg"
                    title="Associations étudiantes: le BDE MMI et la MéMO" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 py-5">
            <div class="flex m-2">
                <iframe width="730" height="410" src="https://www.youtube.com/embed/rmMrGLSVIAE"
                    title="Web TV 2021-Le making of" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <div class="px-6 font-Montserrat">
                <h2 class=" text-xl md:text-3xl text-Blue01 dark:text-white font-semibold py-4">Découvrez la WEB TV</h2>
                <p>Faites connaissance avec une partie de l'équipe de la Web TV de l'IUT qui vous présentera tout au
                    long de cette journée
                    (et samedi prochain) des émissions sur les formations de l'IUT et les projets étudiants!</p>
                <div class="mt-4 flex justify-end">
                    <a href="https://www.youtube.com/@comIUTBM" target="_blank">
                    <BtnSuivre2></BtnSuivre2></a>
                </div>
            </div>
        </div>
    </section>
</template>