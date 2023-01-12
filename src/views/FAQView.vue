<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
</script>

<template>
    <div class="flex justify-center items-center py-12">
        <h1 class="text-center text-xl md:text-2xl text-Blue01 dark:text-white font-semibold z-10">QUESTIONS FRÉQUENTES</h1>
        <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
    </div>
    <div class="px-4 ">
        <div class="mx-auto w-full rounded-2xl bg-Grey03 dark:bg-Grey01  p-2">
            <!--Question 1-->
            <Disclosure v-slot="{ open }">
                <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium font-Montserrat text-black  hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Qu’est-ce que le BUT MMI ?</span>
                    <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-black" />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-black font-Montserrat dark:text-white ">
                    Le BUT MMI (Métiers du Multimédia et de l’Internet) est une <span class="font-semibold">formation du
                        numérique</span> qui se déroule sur <span class="font-semibold">3 ans</span>. Pour plus
                    d’informations, consultez la page <span class="font-semibold italic underline text-violet-700 dark:text-violet-400">
                        <RouterLink to="/ButMMI">BUT MMI</RouterLink>
                    </span>.
                    <br />
                    Où se situe le BUT MMI de Belfort-Montbéliard ?
                    Le département MMI se trouve dans l’IUT Nord-Franche-Comté, sur le site de Montbéliard.
                    L’adresse exacte est : <span class="font-semibold">4 Place Tharradin, 25200 MONTBELIARD</span>
                </DisclosurePanel>
            </Disclosure>
            <!--Question 2-->
            <Disclosure v-slot="{ open }">
                <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium font-Montserrat text-black hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Quelles sont les matières enseignées dans le BUT MMI ?</span>
                    <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-black" />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-black font-Montserrat dark:text-white ">
                    Les matières, autrement nommées ressources, tournent autour de <span class="font-semibold">3 volets
                        principaux</span> : la communication, le design et le
                    développement sur le web. Certaines ressources comme l’anglais ou l’audiovisuel ne rentrent pas dans
                    ces volets, mais
                    elles ont tout de même une place primordiale dans le programme de la formation.
                </DisclosurePanel>
            </Disclosure>
            <!--Question 3-->
            <Disclosure v-slot="{ open }">
                <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium font-Montserrat text-black hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Quel est le volume horaire de la formation ?</span>
                    <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-black" />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-black font-Montserrat dark:text-white ">
                    Les cours sont répartis en <span class="font-semibold">plusieurs catégories</span> : les cours
                    magistraux (CM), les travaux dirigés (TD), les travaux
                    pratiques (TP) et les heures de projets. Le volume horaire total est de <span
                        class="font-semibold">550 heures</span> de cours <span class="font-semibold">par semestre</span>
                    en première
                    année, dont 275 dédiées aux TP et aux heures de projets.
                    Par semaine, les élèves auront entre 27 et 35 heures de cours en général, réparties sur 5 jours (le
                    jeudi après-midi
                    étant dédié aux activités extra-scolaires).
                </DisclosurePanel>
            </Disclosure>
            <!--Question 4-->
            <Disclosure v-slot="{ open }">
                <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium font-Montserrat text-black hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Quels sont les outils utilisés durant la formation ?</span>
                    <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-black" />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-black font-Montserrat dark:text-white ">
                    De nombreux outils différents seront utilisés dans les diverses ressources. Il peut s’agir de
                    logiciels de création, de
                    montage, de développement mais aussi des outils physiques tel que le matériel audiovisuel fourni par
                    l’établissement.
                    Nous conseillons aux futurs étudiants de posséder un ordinateur portable personnel, mais
                    l’établissement propose des
                    solutions aux étudiants qui ne peuvent ou n’ont pas encore d’outil de travail.
                </DisclosurePanel>
            </Disclosure>
            <!--Question 5-->
            <Disclosure v-slot="{ open }">
                <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium font-Montserrat text-black hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Quelles connaissances sont nécessaires pour pouvoir entrer dans la formation ?</span>
                    <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-black" />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-black font-Montserrat dark:text-white ">
                    Il n’est pas obligatoire d’avoir suivi un parcours particulier pour accéder à la formation, même si
                    une affinité avec le
                    développement web, le design numérique ou la communication web vous aideront à mieux appréhender les
                    cours de la
                    formation. Toutes les filières de lycée peuvent accéder au BUT MMI, bien que les filières
                    spécialisées comme STD2A ou
                    STI2D peuvent permettre d’avoir des bases plus solides que les formations plus générales.
                </DisclosurePanel>
            </Disclosure>
            <!--Question 6-->
            <Disclosure v-slot="{ open }">
                <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium font-Montserrat text-black hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Quels sont les débouchés possibles après cette formation ?</span>
                    <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-black" />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-black font-Montserrat dark:text-white ">
                    Étant une formation du domaine du numérique et du web mais tout de même éclectique, la formation
                    ouvre de nombreux
                    chemins pour les futurs bachelors. Une large partie des métiers leur seront directement accessible
                    (Community Manager,
                    Webdesigner, Développeur front-end / back-end / full-stack, etc.). Cependant, si les étudiants
                    souhaitent poursuivre
                    leurs études, ils ne seront pas en reste. Les masters du domaine du numérique, de l’audiovisuel ou
                    du web leur seront
                    aisément accessibles s’ils obtiennent les résultats adéquats.
                </DisclosurePanel>
            </Disclosure>
            <!--Question 7-->
            <Disclosure v-slot="{ open }">
                <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium font-Montserrat text-black hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Quand est-ce que la spécialisation intervient dans la formation ?</span>
                    <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-black" />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-black font-Montserrat dark:text-white ">
                    À la fin de la première année de BUT, les étudiants peuvent choisir un des 3 parcours proposés par
                    la formation. Chacun
                    d’eux se concentre sur un des volets de MMI, à savoir la communication, le design et le
                    développement sur le web. Les
                    étudiants seront alors séparés en groupes selon leur parcours et à partir du semestre 4 (2e semestre
                    de 2e année), les
                    étudiants auront des cours exclusivement dédiées à leur volet.
                </DisclosurePanel>
            </Disclosure>
            <!--Question 8-->
            <Disclosure v-slot="{ open }">
                <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium font-Montserrat text-black hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Quand aura lieu la rentrée ?</span>
                    <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-black" />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-black font-Montserrat dark:text-white ">
                    La rentrée 2023 se déroulera le jeudi 31 août et débutera par une réunion explicative en
                    amphithéâtre, permettant aux
                    élèves de prendre connaissance de toutes les informations nécessaires pour leur début d’année.
                </DisclosurePanel>
            </Disclosure>
            <!--Question 9-->
            <Disclosure v-slot="{ open }">
                <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium font-Montserrat text-black hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Que vais-je apprendre durant la formation ?</span>
                    <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-black" />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-black font-Montserrat dark:text-white ">
                    Pour faire bref, vous allez apprendre à maitriser toutes les facettes du numérique, en manipulant
                    différents outils afin
                    de les maitriser et pour faire de vous des professionnels du domaine du web.
                </DisclosurePanel>
            </Disclosure>
            <!--Question 10-->
            <Disclosure v-slot="{ open }">
                <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium font-Montserrat text-black hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Est-ce qu’il est possible de réaliser une alternance ?</span>
                    <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-black" />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-black font-Montserrat dark:text-white ">
                    Les étudiants peuvent suivre la formation en alternance à partir de la 2e année du BUT. Consultez
                    notre page <span class="font-semibold italic underline text-violet-700 dark:text-violet-400">
                        <RouterLink to="/alternance">Alternance</RouterLink>
                    </span>
                    pour avoir plus d’informations sur l’alternance.
                </DisclosurePanel>
            </Disclosure>
            <!--Question 11-->
            <Disclosure v-slot="{ open }">
                <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium font-Montserrat text-black hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Qu’est-ce qui varie entre les différents volets de la formation (communication / design /
                        développement) ?</span>
                    <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-black" />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-black font-Montserrat dark:text-white ">
                    Les 3 volets principaux sont tous liés entre eux, d’une manière à former un processus complet de
                    création et réalisation
                    d’un projet professionnel. Cependant, chacun d’eux joue un rôle bien défini au sein de la formation.
                    Pour plus de
                    précisions, rendez-vous sur les pages :
                    <br />
                    <span class="font-semibold italic underline text-violet-700 dark:text-violet-400">
                        <RouterLink to="/Com">Parcours communication</RouterLink>
                    </span>
                    <br />
                    <span class="font-semibold italic underline text-violet-700 dark:text-violet-400">
                        <RouterLink to="/Design">Parcours design</RouterLink>
                    </span>
                    <br />
                    <span class="font-semibold italic underline text-violet-700 dark:text-violet-400">
                        <RouterLink to="/Dev">Parcours dev</RouterLink>
                    </span>
                    <br />
                    Pour connaitre le programme complet de la première année de BUT MMI, consultez le document
                    gouvernemental : <a class="font-semibold italic underline text-blue-700 dark:text-blue-400" href="https://cache.media.enseignementsup-recherche.gouv.fr/file/SPE4-MESRI-17-6-2021/35/9/Annexe_19_MMI_BUT_annee_1_1411359.pdf">Annexe MMI</a> 
                </DisclosurePanel>
            </Disclosure>
            <!--Question 12-->
            <Disclosure v-slot="{ open }">
                <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium font-Montserrat text-black hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Que faire pour me préparer à la formation ?</span>
                    <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-black" />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-black font-Montserrat dark:text-white ">
                    Si vous souhaitez prendre de l’avance sur la formation, vous pouvez commencer par vous former à
                    l’intégration et au
                    développement web par vous-même afin d’assimiler les bases de la construction d’un site web. Vous
                    pouvez également
                    commencer à utiliser les outils et logiciels dont l’utilisation vous sera enseigné : la suite Adobe
                    est un bon point
                    départ, notamment Photoshop ainsi qu’Illustrator.
                </DisclosurePanel>
            </Disclosure>
            <!--Question 13-->
            <Disclosure v-slot="{ open }">
                <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium font-Montserrat text-black hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Quel volet occupe le plus de place dans la formation ?</span>
                    <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-black" />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-black font-Montserrat dark:text-white ">
                    Bien que les premiers mois de la formation soit quasi-exclusivement centré sur la communication,
                    chaque volet représente
                    un aspect essentiel de la formation de manière sensiblement égale. Cela comprend le taux horaire
                    ainsi que l’importance
                    des ressources qui la composent : aucun volet n’est plus important que l’autre.
                </DisclosurePanel>
            </Disclosure>

        </div>
    </div>
</template>