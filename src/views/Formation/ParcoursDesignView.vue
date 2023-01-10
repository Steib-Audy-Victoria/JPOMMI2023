<script setup>
import temoignageGauche from '@/components/temoignage_Gauche.vue';
import temoignageDroite from '@/components/temoignage_Droite.vue';

</script>

<template>
    <div class="py-12">
        <h1 class="text-center text-xl md:text-2xl text-Blue01 font-semibold z-10">BUT MMI</h1>
        <div class="flex justify-center items-center ">
            <h2 class="text-center text-xl md:text-2xl text-Blue01 font-semibold z-10">PARCOURS CREATION NUMERIQUE</h2>
            <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
        </div>
    </div>

    <!--Section 1 (S1): Qu’est-ce que le pôle Création ? -->
    <section>
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="flex flex-col justify-center items-center">
                <h3 class="text-center text-lg md:text-xl text-Blue01 font-semibold py-4">Qu’est-ce que le pôle Création
                    ?</h3>
                <p class="px-10 py-2">Ce parcours s’appuie sur la compétence « <span
                        class="font-semibold">Exprimer</span> », c’est-à-dire savoir <span
                        class="font-semibold">communiquer un message</span>
                    ou un <span class="font-semibold">discours</span> sur un ensemble de médias, sous la forme de <span
                        class="font-semibold">création numérique</span> et d’<span class="font-semibold">écriture
                        multimédia</span>.
                    Ce parcours a pour but de former des designers, réalisateurs, infographistes, et vidéastes et
                    d’apprendres les bases des métiers du design.</p>
                <p class="px-10 py-2">
                    <span class="font-semibold">Secteurs d’activités</span> : Agences de communication, agences web,
                    agences publicitaires, services de communication des grandes entreprises ou organisations.Secteurs
                    d’activités : Agences de communication, agences web, agences publicitaires,
                    services de communication des grandes entreprises ou organisations.
                </p>
            </div>
            <div class="flex justify-center items-center ">
                <div class="bg-Jaune  z-0">
                    <img class="z-10 -translate-x-8 translate-y-5" src="/public/DesignS1.webp" alt="">
                </div>
            </div>
        </div>
    </section>

    <!--Section 2 (S2): Les logiciels à découvrir -->
    <section class="my-20">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="flex justify-center items-center">
                <img src="/public/DesignS2Logos.svg" alt="">
            </div>
            <div class="flex flex-col justify-center items-center">
                <h3 class="text-center text-lg md:text-xl text-Blue01 font-semibold py-4">Les logiciels à découvrir</h3>
                <p class="px-10 pt-2">Dans le parcours création numérique, les étudiants sont amenés à utiliser de
                    nombreux logiciels comme la <span class="font-semibold">suite Adobe</span>
                    (notamment Illustrator et Photoshop), <span class="font-semibold">Figma</span> ou encore <span
                        class="font-semibold">DaVinci Resolve</span> :</p>
                <ul class="px-10 pb-2 list-disc">
                    <li>Adobe Photoshop est un outil de <span class="font-semibold">création</span> et de <span
                            class="font-semibold">retouche d’image</span>.</li>
                    <li>Adobe Illustrator est un logiciel de <span class="font-semibold">design graphique</span> souvent
                        utilisé pour produire des logos et icônes.</li>
                    <li>Figma est un outil de <span class="font-semibold">création</span>, <span
                            class="font-semibold">prototypage</span> pour réaliser des maquettes de site web.</li>
                    <li>DaVinci Resolve est un logiciel de <span class="font-semibold">montage audio et vidéo</span>.
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <!--Section 3 (S3): L’innovation au coeur des métiers du web -->
    <section class="my-20">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="flex flex-col justify-center items-center">
                <h3 class="text-center text-lg md:text-xl text-Blue01 font-semibold py-4">L’innovation au coeur des
                    métiers du web
                </h3>
                <p class="px-10 py-2">Le web est un domaine où les métiers et les outils sont en constante <span
                        class="font-semibold">évolution</span>
                    et sont amené à de grands <span class="font-semibold">changement</span> au fil des années.
                    La formation met un point d’honneur à se mettre à jour en même temps que le web, pour pouvoir
                    proposer
                    un enseignement de <span class="font-semibold">qualité</span> et aux <span
                        class="font-semibold">normes</span> du milieu professionnel.</p>
                <p class="px-10 py-2">Les étudiants ont la chance d’avoir la possibilité d’évoluer en même temps que le
                    web durant leur formation, et d’être
                    accompagnés tout au long de la formation.</p>
            </div>
            <div class="flex justify-center items-center ">
                <div class="bg-Jaune  z-0">
                    <img class="z-10 translate-x-5 -translate-y-5" src="/public/DesignS3Innovation.webp" alt="">
                </div>
            </div>
        </div>
    </section>

    <!--Section 4 (S4): Enseignants -->
    <section class="my-20 bg-gradient-to-bl from-[#CB3066] to-[#16BFFD] text-white">
        <div class="text-center pt-8">
            <h3>Des enseignants qualifiés</h3>
            <p>Nous sommes soucieux de la qualité de l’enseignement pour nos étudiants</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class="flex flex-col justify-center items-center py-4">
                <img class="w-60 h-w-60 rounded-full " src="/public/DesignS4Xavier_Senente.webp" alt="">
                <p class="font-bold py-2">Xavier Senente</p>
                <p>Enseignant en design graphique</p>
                <p class="py-2">22 ans d’expertise</p>
            </div>
            <div class="flex flex-col justify-center items-center py-4">
                <img class="w-60 h-w-60 rounded-full " src="/public/DesignS4Alain_Lamboux-Durand.webp" alt="">
                <p class="font-bold py-2">Alain Lamboux-Durand</p>
                <p>Chef du département MMI</p>
                <p class="py-2">19 ans d’expertise</p>
            </div>
            <div class="flex flex-col justify-center items-center py-4">
                <img class="w-60 h-w-60 rounded-full " src="/public/DesignS4Sebastien_Augier.webp" alt="">
                <p class="font-bold py-2">Sébastien Augier</p>
                <p>Professeur agrégé en audiovisuel</p>
                <p class="py-2">18 ans d’expertise</p>
            </div>
        </div>
    </section>

    <!--Section 5 (S5) : Projet-->
    <section>
        <div class="flex justify-center items-center">
            <h3 class="text-center text-xl md:text-2xl text-Blue01 font-semibold z-10">Des projets innovants</h3>
            <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
        </div>
        <div class="carousel m-6">
            <div class="carousel-item">
                <img src="/public/DesignS5Affiche_Antonin_Heuguet.webp" alt="">
            </div>
            <div class="carousel-item">
                <img src="/public/DesignS5Affiche_Eden_Bourezg.webp" alt="">
            </div>
            <div class="carousel-item">
                <img src="/public/DesignS5Affiche_Matthieu_Hoareau.webp" alt="">
            </div>
            <div class="carousel-item">
                <img src="/public/DesignS5Affiche_Paul_Tresse.webp" alt="">
            </div>
            <div class="carousel-item">
                <img src="/public/DesignS5Affiche_Sacha_Wicky.webp" alt="">
            </div>
        </div>
    </section>

    <!--Section 6 (S6) : Témoignages-->
    <section>
        <div class="bg-[url('/public/TemoignageLogo.webp')] py-12">
            <div class="flex justify-center items-center">
                <h3 class="text-center text-xl md:text-2xl text-Blue01 font-semibold z-10">Témoignages de nos anciens
                    étudiants</h3>
                <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
            </div>
            <div>
                <temoignageGauche image="@/public/DesignS6Julien_Paquier.webp" nom="Julien Paquier"
                    avis="MMI m’a apporté de solides bases dans le design, la communication et le développement web. Désormais, grâce à MMI, je suis beaucoup plus à l’aise de passer à l’oral et de présenter mes travaux. 
                                    Après MMI, j’ai rejoint l’HETIC Paris en parcours grande école. Je suis actuellement en stage en tant que digital producer à Betc fullsix. Mon rôle au sein de cette entreprise est de faire des réunions avec de grands clients comme Citroën, puis de comprendre leur demande et leurs besoins. Puis de faire un brief pour des ressources créatives. Je gère de A à Z le projet jusqu’à la livraison finale." />
                <temoignageDroite image="/public/DesignS6Alois_Bolou.webp" nom="Aloïs Bolou"
                    avis="MMI a été une parfaite porte d’entrée dans le monde des créatifs. C’est une formation qui permet de toucher à énormément de compétences différentes, autant techniques que artistiques. La quantité de projets réalisées nous donne un portfolio assez complet, et des bonnes aptitudes de travail, autant en groupe qu’individuellement pour poursuivre dans ce secteur. Durant ce cursus, le design et la communication m’ont particulièrement plu. J’ai pu réalisé un stage dans une entreprise de production audiovisuelle." />
            </div>
        </div>
    </section>
</template>