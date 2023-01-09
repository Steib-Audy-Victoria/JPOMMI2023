<script>

</script>

<template>
    <div class="bg-[url('/public/HomeLine.svg')]">
        <div class="flex justify-center items-center py-12">
            <h1 class="text-center text-xl md:text-2xl text-Blue01 font-semibold z-10">BUT MMI</h1>
            <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
        </div>

        <!--Section 1 (S1): Qu’est ce que le BUT MMI ? -->
        <section>
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="flex flex-col justify-center items-center">
                    <h2 class="text-center text-lg md:text-xl text-Blue01 font-semibold py-4">Qu’est ce que le BUT MMI ?
                    </h2>
                    <p class="px-10 py-2">Le BUT Métiers du Multimédia et de l’Internet, est une formation, qui vise à
                        former des <span class="font-semibold">professionnels du web</span> en
                        proposant une formation qui initie aux bases de la communication, de la création et du
                        développement sur le web.
                        Elle propose différents parcours en fonction des compétences que l’étudiant souhaite acquérir
                        dans la <span class="font-semibold">réalisation de supports web</span>
                        ou <span class="font-semibold">multimédia</span>.</p>
                    <p class="px-10 py-2">Le BUT MMI se déroule en <span class="font-semibold">3 ans</span> et propose
                        des stages en 2ème et 3ème années de la formation.
                        Ces stages ont pour but d’<span class="font-semibold">appliquer</span> et <span
                            class="font-semibold">valider</span> les connaissances acquises pendant la formation.
                        Ces stages durent <span class="font-semibold">10 semaines</span> et permettent aux étudiants de
                        pouvoir <span class="font-semibold">travailler en entreprise</span> durant cette période.
                        C’est donc l’occasion pour eux de pouvoir <span class="font-semibold">mettre en pratique</span>
                        leurs connaissances dans des conditions réelles.</p>
                    <p class="px-10 py-2">De plus, la formation donne la possibilité de suivre le cursus tout en
                        travaillant en <span class="font-semibold">alternance</span>,
                        cela consiste à alterner entre des périodes de cours et des périodes de travail en entreprise.
                        L’alternance est disponible <span class="font-semibold">à partir de la 2ème année</span>.
                        Pour avoir des informations plus complètes, rendez-vous sur la page <span
                            class="font-semibold italic underline text-violet-700">
                            <RouterLink to="/alternance">Alternance</RouterLink>
                        </span> de notre site.</p>
                </div>
                <div class="flex justify-center items-center">
                    <div class="bg-Jaune  z-0">
                        <img class="z-10 -translate-x-8 -translate-y-4 " src="/public/ButMMIS1.webp" alt="">
                    </div>
                </div>
            </div>
        </section>

        <!--Section 2 (S2): Découvre le nouveau B.U.T. -->
        <section class="my-20">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="flex flex-col justify-center items-center">
                    <h2 class="text-center text-lg md:text-xl text-Blue01 font-semibold py-4">Découvre le nouveau B.U.T.
                    </h2>
                    <p class="px-10 py-2">Contrairement au DUT, le BUT propose une <span class="font-semibold">année de
                            formation supplémentaire</span> pour permettre aux étudiants de mieux
                        assimiler les connaissances de bases, puis de se <span class="font-semibold">spécialiser</span>
                        dans un domaine précis.</p>
                    <p class="px-10 py-2">La première année se concentre sur les bases de chaque compétences, grâce à
                        des cours en <span class="font-semibold">tronc commun</span> durant toute
                        l’année. Les 5 compétences sont <span class="font-semibold">Comprendre</span>, <span
                            class="font-semibold">Concevoir</span>, <span class="font-semibold">Exprimer</span>, <span
                            class="font-semibold">Développer</span> et <span class="font-semibold">Entreprendre</span>.
                        Chacune d’entre elles représente un aspect essentiel de la formation, et s’apprennent à travers
                        différentes matières que l’on nomme <span class="font-semibold">ressources</span>.</p>
                    <p class="px-10 py-2">À l’issue de cette année, les étudiants devront choisir un des trois parcours
                        qui leurs seront proposés : le parcours
                        <span class="font-semibold">Stratégie de communication numérique et design d’expérience</span>,
                        le parcours <span class="font-semibold">Création numérique</span>
                        et le parcours <span class="font-semibold">Développement web et dispositifs interactifs</span>.
                        Nous avons dédié une page à chacun de ces parcours, n’hésitez pas à les consulter pour
                        avoir plus de détails sur chaque parcours et leurs particularitées !
                    </p>
                    <p class="px-10 py-2">Durant la 2ème année, les cours continue à être en <span
                            class="font-semibold">tronc commun</span> durant le premier semestre (3ème semestre), puis à
                        partir du 4ème semestre, les cours enseignés changent en <span class="font-semibold">fonction du
                            parcours choisis</span> par l’étudiant. Cependant certains
                        cours restent communs aux trois parcours.</p>
                    <p class="px-10 pt-2">À partir de la 3eme année, <span class="font-semibold">trois des cinq
                            compétences</span> ne seront plus enseignées aux étudiants, selon le parcours qu’ils
                        ont décidé d’emprunter en deuxième année. La compétence <span
                            class="font-semibold">Entreprendre</span> est la seule à encore être enseignée à tous les
                        parcours, tandis que la compétence <span class="font-semibold">Comprendre</span> n’est <span
                            class="font-semibold">plus du tout enseignée</span>, car cette compétence est considéré
                        comme
                        acquise par les étudiants. Les compétences restantes sont enseignées selon cet ordre :</p>
                    <ul class="px-10 pb-2 list-disc">
                        <li><span class="font-semibold">Concevoir</span> pour le parcours Stratégie de communication et
                            design d’expérience ;</li>
                        <li><span class="font-semibold">Exprimer</span> pour le parcours Création numérique ;</li>
                        <li><span class="font-semibold">Développer</span> pour le parcours Développement web et
                            dispositifs interactifs</li>
                    </ul>
                </div>
                <div class="flex justify-center items-center">
                    <img src="/public/ButMMIS2NewBut.svg" alt="">
                </div>
            </div>
        </section>

        <!--Section 3 (S3): Les attendus Parcoursup -->
        <section class="my-20">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="flex flex-col justify-center items-center">
                    <h2 class="text-center text-lg md:text-xl text-Blue01 font-semibold py-4">Les attendus Parcoursup
                    </h2>
                    <div class="px-10">
                        <p>ATTENDUS NATIONAUX DE LA PLATEFORME D'INSCRIPTION DANS L'ENSEIGNEMENT SUPÉRIEUR PARCOURSUP
                        </p>
                        <div class="pt-4">
                            <p>COMPÉTENCES TECHNIQUES ET SCIENTIFIQUES</p>
                            <p>Avoir un intérêt pour les techniques associées à la communication numérique (culture
                                scientifique, conception et
                                programmation Web),
                                Avoir une curiosité et de l'intérêt pour la création de site web, réalisations de
                                vidéos, animation d'un réseau social,
                                Avoir un usage courant d'Internet et du numérique,
                                Savoir mobiliser ses connaissances pour répondre à une résolution de problème,
                                Savoir élaborer un raisonnement scientifique/logique structuré et adapté à une
                                situation.</p>
                        </div>
                        <div class="pt-4">
                            <p>QUALITÉS HUMAINES</p>
                            <p>Avoir une première réflexion sur son projet professionnel,
                                Avoir l'esprit d'équipe et savoir s'intégrer dans les travaux de groupe via les projets
                                et les travaux pratiques,
                                Avoir le sens pratique, être attentif et rigoureux,
                                Montrer son intérêt et sa motivation dans les matières relevant de la technique et/ou de
                                la créativité (programmation,
                                audiovisuel, communication, graphisme, etc.),
                                Savoir s'impliquer et s'organiser dans ses études (ou gérer sa charge de travail) pour
                                fournir le travail nécessaire à
                                sa réussite en autonomie.</p>
                        </div>

                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <img src="/public/ButMMIS3parcoursup.webp" alt="">
                </div>
            </div>
            <div class="px-10">
                <div class="pt-4">
                    <p>COMPETENCES GENERALES</p>
                    <p>Avoir une maitrise du français permettant de communiquer à l'écrit et à l'oral de façon adaptée,
                        de comprendre un
                        énoncé, de l'analyser et de rédiger une solution,
                        Avoir de la créativité et une curiosité pour le design ou les outils utilisés (dessin,
                        graphisme, infographie,
                        conception, prototypage…),
                        Avoir une connaissance suffisante d'une langue vivante étrangère de préférence l'anglais
                        permettant de
                        progresser
                        pendant la formation : échanger à l'oral, lire et comprendre un texte, répondre aux questions
                        écrites et orales,
                        Savoir mobiliser ses connaissances et développer un sens critique,
                        Être capable d'évoluer dans un environnement numérique et détenir des connaissances de base en
                        bureautique.</p>
                </div>
            </div>
        </section>

        <!--Section 4 (S4): Parcours -->
        <section class="py-20">
            <div class="flex justify-center items-center pb-12">
                <h1 class="text-center text-xl md:text-2xl text-Blue01 font-semibold z-10">Découvrez nos pôles MMI</h1>
                <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div class="text-center mx-5 ">
                    <p class="text-base md:text-xl text-Blue01 font-semibold py-4">Développement</p>
                    <div class="bg-gradient-to-r from-[#D35C70] to-[#EBAA51] text-white px-10 py-8 h-5/6 ">
                        <h2 class="textxl md:text-2xl pb-6">Etudier et concevoir</h2>
                        <p class="text-justify mx-4">Apprenez la base du développement et approfondissez vos connaissances dans
                            les différents langages de programmation, en
                            utilisant toutes sortes d’outils numériques pensés pour simplifier l’intégration de sites et le
                            développement
                            d’applications web fonctionnels</p>
                    </div>
                </div>
                <div class="text-center mx-5">
                    <p class="text-base md:text-xl text-Blue01 font-semibold py-4">Communication</p>
                    <div class="bg-gradient-to-tr from-[#155799] to-[#159597] text-white px-10 py-8 h-5/6">
                        <h2 class="text-lg md:text-2xl pb-6">Comprendre et exploiter...</h2>
                        <p class="text-justify mx-4">Découvrez comment construire la communication autour d’un projet digital et
                            comment exploiter les données, pour créer un
                            cahier des charges sur mesure pour un client. Apprenez à maitriser les fondamentaux de la
                            communication sur le web,
                            depuis les dossiers de communication à gêrer les réseaux sociaux d’une entreprise en fonction de ses
                            besoins.</p>
                    </div>
                </div>
                <div class="text-center mx-5">
                    <p class="text-base md:text-xl text-Blue01 font-semibold py-4">Design</p>
                    <div class="bg-gradient-to-bl from-[#CB3066] to-[#16BFFD] text-white px-10 py-8 h-5/6">
                        <h2 class="text-lg md:text-2xl pb-6">S’inspirer et créer</h2>
                        <p class="text-justify mx-4">Apprenez à utiliser les logiciels de création numérique, de montage et de
                            prototypage, tout en élargissant votre culture
                            artistique. Utilisez ces connaissances pour créer des maquettes de sites web, des visuels pour les
                            réseaux sociaux ou
                            des supports physiques pour des êvenements. Filmez, tournez et montez des vidéos, reportages de
                            qualité professionnelle.</p>
                    </div>
                </div>
        
            </div>
        </section>
    </div>
</template>