<script setup>
import temoignageGauche from '@/components/temoignage_Gauche.vue';
import temoignageDroite from '@/components/temoignage_Droite.vue';

</script>

<template>
    <div class="py-12">
        <h1 class="text-center text-xl md:text-2xl text-Blue01 font-semibold z-10">BUT MMI</h1>
        <div class="flex justify-center items-center ">
            <h2 class="text-center text-xl md:text-2xl text-Blue01 font-semibold z-10">
                PARCOURS DÉVELOPPEMENT WEB
                ET DISPOSITIFS INTERACTIFS</h2>
            <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
        </div>
    </div>

    <!--Section 1 (S1): Qu’est-ce que le pôle Développement ? -->
    <section>
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="flex flex-col justify-center items-center">
                <h3 class="text-center text-lg md:text-xl text-Blue01 font-semibold py-4">Qu’est-ce que le pôle
                    Développement ?</h3>
                <p class="px-10 py-2">Le parcours Développement web et dispositif intéractifs, regroupe toutes les
                    connaissances nécessaire à la <span class="font-semibold">mise en place
                        d’un site web</span>, à partir de sa conception, jusqu’au déploiement sur internet. Il s’appuie
                    principalement sur la
                    compétence “<span class="font-semibold">Développer</span>”, cette compétence apprendra aux élèves à
                    <span class="font-semibold">développer un site web</span>,
                    une <span class="font-semibold">application mobile</span>, et bien plus.</p>
                <p class="px-10 py-2">Ce parcours vise à former les étudiants à devenir des développeur compétents
                    (Développeur Front-end, Back-end,
                    Full-Stack) et prêt à travailler dans le milieu professionnel.</p>
                <p class="px-10 py-2"><span class="font-semibold">Secteur d’activités</span> : Agence de communication,
                    agence digitale, freelance, ESN (Entreprises de Services du Numérique),
                    entreprises privées.</p>
            </div>
            <div class="flex justify-center items-center ">
                <div class="bg-Jaune  z-0">
                    <img class="z-10 -translate-x-8 translate-y-5" src="/public/DevS1.webp" alt="">
                </div>
            </div>
        </div>
    </section>

    <!--Section 2 (S2): Les compétences enseignées -->
    <section class="my-20">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="flex justify-center items-center">
                <img src="/public/DevS2Logos.svg" alt="">
            </div>
            <div class="flex flex-col justify-center items-center">
                <h3 class="text-center text-lg md:text-xl text-Blue01 font-semibold py-4">Les compétences enseignées
                </h3>
                <p class="px-10 py-2">La formation commence par apprendre aux étudiants comment utiliser les <span
                        class="font-semibold">langages</span> de base de la <span
                        class="font-semibold">programmation</span>,
                    pour la manière de <span class="font-semibold">rédiger des contenus</span> et la <span
                        class="font-semibold">mise en forme</span> d’un site web.
                    En parallèle, les étudiants apprendront également à faire des <span
                        class="font-semibold">animations</span> d’abord basiques, puis avancés.
                    Ils apprendront également à rendre le site plus <span class="font-semibold">ergonomique et
                        accessible</span>.
                    Après que les étudiants aient maitrisés les différents langages du web, les étudiants pourront
                    découvrir des
                    outils, leurs permettant de <span class="font-semibold">faciliter et accélérer l’écriture du
                        code</span>. Un de ces outils connus qui est utilisé à la fois
                    dans la formation et dans le milieu professionnel est <span class="font-semibold">WordPress</span>.
                </p>
                <p class="px-10 py-2">Au-delà de ces outils, ce parcours permet aux étudiants de développer des <span
                        class="font-semibold">capacités humaines</span> tels que l’<span
                        class="font-semibold">autonomie</span> ou
                    encore une grande capacité d’<span class="font-semibold">adaptation</span> aux changements.</p>
            </div>
        </div>
    </section>

    <!--Section 3 (S3): Une compétence nécessaire pour le monde de demain -->
    <section class="my-20">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="flex flex-col justify-center items-center">
                <h3 class="text-center text-lg md:text-xl text-Blue01 font-semibold py-4">Une compétence nécessaire pour
                    le monde de demain
                </h3>
                <p class="px-10">Les technologies évoluent très rapidement, les développeurs web se doivent d’être <span
                        class="font-semibold">curieux</span> et être prêts à <span
                        class="font-semibold">découvrir</span> et
                    <span class="font-semibold">apprendre</span> les nouvelles connaissances, normes, relatives au web.
                    L’étudiant devra <span class="font-semibold">régulièrement</span> de façon <span
                        class="font-semibold">autonome</span> et <span class="font-semibold">rigoureuse</span> se tenir
                    à jour.
                </p>
                <p class="px-10">Ces compétences apprises tout le long de la formation, formeront l’étudiant à devenir
                    le développeur de demain. Dans une
                    ère, où les changements lié au web peuvent bouleverser le déroulement d’un projet, la formation
                    leurs apprendra les
                    bonnes pratiques à adopter pour s’adapter à cette contrainte actuelle.</p>
                <p class="px-10">Le domaine du web demande une <span class="font-semibold">réactivité</span> à toute
                    épreuve, puisque l’<span class="font-semibold">adaptation</span> est <span
                        class="font-semibold">primordiale</span> dans un domaine en
                    constante évolution.</p>
            </div>
            <div class="flex justify-center items-center ">
                <div class="bg-Jaune  z-0">
                    <img class="z-10 translate-x-5 -translate-y-5" src="/public/DevS3.webp" alt="">
                </div>
            </div>
        </div>
    </section>

    <!--Section 4 (S4): Enseignants -->
    <section class="my-20 bg-gradient-to-r from-[#D35C70] to-[#EBAA51] text-white">
        <div class="text-center pt-8">
            <h3>Des enseignants qualifiés</h3>
            <p>Nous sommes soucieux de la qualité de l’enseignement pour nos étudiants</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class="flex flex-col justify-center items-center py-4">
                <img class="w-60 h-w-60 rounded-full " src="/public/DevS4Abdallah_Makhoul.webp" alt="">
                <p class="font-bold py-2">Abdallah Makhoul</p>
                <p>Enseignant-Chercheur Femto-ST</p>
                <p class="py-2">14 ans d’expertise</p>
            </div>
            <div class="flex flex-col justify-center items-center py-4">
                <img class="w-60 h-w-60 rounded-full " src="/public/DevS4Jean-Marie_Fino.webp" alt="">
                <p class="font-bold py-2">Jean-Marie Fino</p>
                <p>Enseignant - Maitre de conférence associé</p>
                <p class="py-2">26 ans d’expertise</p>
            </div>
            <div class="flex flex-col justify-center items-center py-4">
                <img class="w-60 h-w-60 rounded-full " src="/public/DevS4Hakim_Mabed.webp" alt="">
                <p class="font-bold py-2">Hakim Mabed</p>
                <p>Enseignant-Chercheur en hébergement web</p>
                <p class="py-2">14 ans d’expertise</p>
            </div>
        </div>
    </section>

    <!--Section 5 (S5) : Lien-->
    <section>
        <div class="flex justify-center items-center">
            <h3 class="text-center text-xl md:text-2xl text-Blue01 font-semibold z-10">Des projets innovants</h3>
            <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
        </div>
        <div>
            
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
                <temoignageGauche image="/public/DesignS4Xavier_Senente.webp" nom="John Martin"
                    avis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                <temoignageDroite image="/public/DesignS4Xavier_Senente.webp" nom="John Martin"
                    avis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
            </div>
        </div>
    </section>
</template>