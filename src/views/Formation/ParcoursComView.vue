<script setup>
import temoignageGauche from '@/components/temoignage_Gauche.vue';
import temoignageDroite from '@/components/temoignage_Droite.vue';
import imgLauraBrager from '/public/ComS6Laura_Brager.webp';
import btnPageD from '@/components/btnPageD.vue';
import btnPageG from '@/components/btnPageG.vue';

</script>

<template>
    <div class="py-12">
        <h1 class="text-center text-2xl text-Blue01 font-Montserrat dark:text-white font-semibold z-10">BUT MMI</h1>
        <div class="flex justify-center items-center ">
            <h2 class="text-center text-2xl text-Blue01 font-Montserrat dark:text-white font-semibold z-10">PARCOURS STRATÉGIE DE
                COMMUNICATION NUMÉRIQUE ET DESIGN D’EXPÉRIENCE</h2>
            <div class="hidden md:block w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
        </div>
    </div>

    <!--Section 1 (S1): Qu’est-ce que le pôle Communication ? -->
    <section>
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="flex flex-col justify-center items-center font-Montserrat">
                <h3 class="text-center text-lg md:text-xl text-Blue01  dark:text-white font-semibold py-4">Qu’est-ce que le pôle
                    Communication ?</h3>
                <p class="px-10 py-2">Ce parcours s’appuie sur la compétence « <span
                        class="font-semibold">Concevoir</span> »,
                    c’est-à-dire <span class="font-semibold">concevoir la communication</span> ou le <span
                        class="font-semibold">discours</span> d’une
                    entreprise autour d’un <span class="font-semibold">axe précis</span>, sur différents supports et de
                    façon à proposer la meilleure expérience possible pour
                    l’utilisateur. Cela peut prendre la forme de posts pour les <span class="font-semibold">réseaux
                        sociaux</span>,
                    réaliser un <span class="font-semibold">cahiers des charges</span> d’un projet pour un client.
                    Ce parcours a pour but de former des community manager, assistant de communication, UX Designer,
                    chef de
                    projet digital, webmarketeur entre autres.</p>
                <p class="px-10 py-2"><span class="font-semibold">Secteurs d’activités</span> : Agences de
                    communication, agences web, agences publicitaires, services de communication des
                    grandes entreprises ou organisations.</p>
            </div>
            <div class="flex justify-center items-center ">
                <div class="bg-Jaune  z-0">
                    <img class="z-10 -translate-x-8 translate-y-5" src="/public/ComS1.webp" alt="">
                </div>
            </div>
        </div>
    </section>

    <!--Section 2 (S2): Les outils utilisés -->
    <section class="my-20">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="flex justify-center items-center">
                <img src="/public/ComS2Logos.svg" alt="">
            </div>
            <div class="flex flex-col justify-center items-center font-Montserrat">
                <h3 class="text-center text-lg md:text-xl text-Blue01 dark:text-white font-semibold py-4">Les outils utilisés</h3>
                <p class="px-10">Dans ce parcours, les logiciels utilisés sont variés, les suites Google et Microsoft
                    par exemple, sont utilisé.
                    En particulier <span class="font-semibold">Google Drive</span> qui permet de centraliser tous les
                    documents en un espace de travail partagé, très utile
                    pour un projet collectif.</p>
                <p class="px-10">Nous utilisons <span class="font-semibold">Google Docs</span>, pour pouvoir mettre en
                    forme des rendus ou encore rechercher des idées, et à plusieurs s’il
                    le faut. C’est un outil collaboratif intéressant à utiliser.</p>
                <p class="px-10">Pour faire des présentations orales, nous réalisons les diaporamas sur <span
                        class="font-semibold">Google Slides</span> qui offre un large panel d’options
                    de personnalisation, mais aussi des formats déjà préfait (templates).</p>
                <p class="px-10">Lorsque qu’il s’agit de traiter des données, <span class="font-semibold">Google
                        Sheets</span> est une excellente alternative à Excel, puisqu’elle offre
                    exactement les mêmes options avec quelques fonctionnalités supplémentaires utiles, et tout cela en
                    ligne.</p>
            </div>
        </div>
    </section>

    <!--Section 3 (S3): Un parcours utile dans tous les cas de figure -->
    <section class="my-20">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="flex flex-col justify-center items-center font-Montserrat">
                <h3 class="text-center text-lg md:text-xl text-Blue01 dark:text-white font-semibold py-4">Un parcours utile dans tous
                    les cas de figure
                </h3>
                <p class="px-10">Le parcours “<span class="font-semibold">Stratégie de communication et design
                        d’expérience</span>” sert à apprendre et concevoir des <span class="font-semibold">bases solides
                        (analyser, interprêter et planifier)</span> pour réaliser des projets dans le web.</p>
                <p class="px-10">Ce parcours est donc <span class="font-semibold">essentiel</span> dans le processus de
                    réflexion et de création de projets digitaux dans le milieu
                    professionnel.</p>
                <p class="px-10">Les équipes de communication sont donc un <span class="font-semibold">pilier
                        immuable</span> des entreprises avec lesquelles chaque département collabore.</p>
            </div>
            <div class="flex justify-center items-center py-8">
                <div class="bg-Jaune  z-0">
                    <img class="z-10 translate-x-5 -translate-y-5" src="/public/ComS3.webp" alt="">
                </div>
            </div>
        </div>
    </section>

    <!--Section 4 (S4): Enseignants -->
    <section class="my-20 bg-gradient-to-tr from-[#155799] to-[#159597] text-white">
        <div class="text-center font-Montserrat pt-8">
            <h3>Des enseignants qualifiés</h3>
            <p>Nous sommes soucieux de la qualité de l’enseignement pour nos étudiants</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-Montserrat">
            <div class="flex flex-col justify-center items-center py-4">
                <img class="w-60 h-w-60 rounded-full " src="/public/ComS4Pascal_Chatonnay.webp" alt="">
                <p class="font-bold py-2">Pascal Chatonnay</p>
                <p>Enseignant-Chercheur Numerica</p>
                <p class="py-2">25 ans d’expertise</p>
            </div>
            <div class="flex flex-col justify-center items-center py-4">
                <img class="w-60 h-w-60 rounded-full " src="/public/ComS4Jean-Claude_Domenget.webp" alt="">
                <p class="font-bold py-2">Jean-Claude Domenget</p>
                <p>Enseignant en communication numérique</p>
                <p class="py-2">11 ans d’expertise</p>
            </div>
            <div class="flex flex-col justify-center items-center py-4">
                <img class="w-60 h-w-60 rounded-full " src="/public/ComS4David_Malsot.webp" alt="">
                <p class="font-bold py-2">David Malsot</p>
                <p>Enseignant en communication</p>
                <p class="py-2">14 ans d’expertise</p>
            </div>
        </div>
    </section>

    <!--Section 5 (S5) : PROJET -->
    <section>
        <div class="flex justify-center items-center">
            <h3 class="text-center text-xl md:text-2xl text-Blue01 font-Montserrat dark:text-white font-semibold z-10">Des projets innovants</h3>
            <div class="hidden md:block w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
        </div>
        <div>
            <p class="font-Montserrat text-base px-4 py-2">Élaboration d’une stratégie de communication pour le lancement d’un restaurant</p>
            <div class="grid grid-cols-1 xl:grid-cols-2 place-items-center ">
                <img class="p-2" src="/public/ComS5projet1.webp" alt="">
                <img class="p-2" src="/public/ComS5projet2.webp" alt="">
            </div>
        </div>
    </section>

    <!--Section 6 (S6) : Témoignages-->
    <section>
        <div class="bg-[url('/public/TemoignageLogo.webp')] py-12">
            <div class="flex justify-center items-center pb-4">
                <h3 class="text-center text-xl md:text-2xl text-Blue01 font-Montserrat dark:text-white font-semibold z-10">Témoignages de nos anciens
                    étudiants</h3>
                <div class="hidden md:block w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
            </div>
            <div>
                <temoignageGauche :image="imgLauraBrager" nom="Laura Brager"
                    avis="MMI, ça a été pour moi, une de mes meilleures expériences et ça a été un vrai plus dans mon recrutement puisque MMI est reconnu comme une formation de qualité. 
                                        Aujourd’hui, je suis chargée de communication pour un groupement d’employeurs à Troyes. Par rapport à mes missions au sein de l’entreprise, je suis très polyvalente. Je me charge à la fois de l’infographie, du community management et du webmastering. Par exemple, je peux être amené à faire des affiches, l’animation des réseaux sociaux, intégrer un site sur Wordpress et parfois, j’encadre même des événements." />
            </div>
        </div>
    </section>

    <!--Bouton passage des pages parcours-->

    <div class="flex flex-col lg:flex-row justify-between items-center p-10">
        <RouterLink to="/Dev">
            <btnPageG class="my-2 lg:my-0" text="DÉCOUVREZ LE PARCOURS DÉVELOPPEMENT WEB ET DISPOSITIFS INTERACTIFS" />
        </RouterLink>
        <RouterLink to="/Design">
            <btnPageD class="my-2 lg:my-0" text="DÉCOUVREZ LE PARCOURS CRÉATION NUMÉRIQUE" />
        </RouterLink>
    </div>
</template>