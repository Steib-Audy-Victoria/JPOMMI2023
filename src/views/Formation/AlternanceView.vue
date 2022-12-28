<script setup>
import temoignageGauche from '@/components/temoignage_Gauche.vue';
import temoignageDroite from '@/components/temoignage_Droite.vue';

</script>

<template>
    <div class="flex justify-center items-center py-12">
        <h1 class="text-center text-xl md:text-2xl text-Blue01 font-semibold z-10">ALTERNANCE</h1>
        <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>

    </div>
    <!--Section 1 (S1): Qu’est ce que l’alternance en MMI? -->
    <section>
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="flex flex-col justify-center items-center">
                <h2 class="text-center text-lg md:text-xl text-Blue01 font-semibold py-4">Qu’est ce que l’alternance en
                    MMI ?</h2>
                <p class="px-10">L’alternance laisse la possibilité à l’étudiant, en parallèle du suivi des cours, de
                    <span class="font-semibold">travailler en entreprise</span> sur des
                    périodes définies. Dans la formation MMI de Montbéliard, ces périodes correspondent aux périodes
                    dédiées aux <span class="font-semibold">SAÉ</span> et les
                    périodes de <span class="font-semibold">vacances scolaires</span> (vacances d’été comprises).</p>
                <p class="px-10 py-2">L’alternance est possible à partir de la <span class="font-semibold">2e année de
                        BUT</span>, sachant qu’il faudra au préalable avoir un <span class="font-semibold">contrat de 2
                        ans</span>
                    avec une entreprise qui propose un poste <span class="font-semibold">en relation avec le domaine de
                        la formation</span>.</p>
                <p class="px-10 py-2">L’étudiant peut réaliser son alternance <span class="font-semibold">partout en
                        France</span>, tant qu’il peut se rendre suivre la formation dans les mêmes
                    conditions qu’un étudiant qui n’est pas en alternance.</p>

            </div>
            <div class="flex justify-center items-center ">
                <div class="bg-Jaune  z-0">
                    <img class="z-10 -translate-x-8 translate-y-5" src="/public/AlternanceS1.webp" alt="">
                </div>
            </div>
        </div>
    </section>

    <!--Section 2 (S2): Découvrez l’alternance au sein de l’IUT -->
    <section class="mb-4 mt-10">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="flex justify-center items-center ">
                <iframe width="610" height="343" src="https://www.youtube.com/embed/rcoTCRK1WFk"
                    title="L'alternance et la professionnalisation en IUT" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <div class="flex flex-col justify-center items-center">
                <h2 class="text-center text-lg md:text-xl text-Blue01 font-semibold py-4">Découvrez l’alternance au sein
                    de l’IUT
                </h2>
                <p class="px-10">Découvrez un des points forts des IUT : l'acquisition d'une expérience professionnelle
                    unique
                    permettant une meilleure
                    insertion dans le monde socio-économique.</p>
                <p class="px-10">Avec David Markezic, responsable alternance département GACO de l'IUT
                    Une émission en live, présentée par Laura Brager, étudiante en 2ème année de DUT MMI.</p>
            </div>
        </div>
    </section>
    <!--Section 3 (S3) : Témoignages-->
    <section>
        <div class=" py-12">
            <div class="flex justify-center items-center">
                <h2 class="text-center text-xl md:text-2xl text-Blue01 font-semibold z-10">Témoignages de nos anciens
                    étudiants</h2>
                <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
            </div>
            <div>
                <temoignageGauche image="/public/.webp" nom="John Martin"
                    avis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                <temoignageDroite image="/public/.webp" nom="John Martin"
                    avis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
            </div>
        </div>
    </section>
</template>
