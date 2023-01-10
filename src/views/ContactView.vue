<script setup>
import LogoMMI2 from '@/components/LogoMMI2.vue';
import tiktok from '@/components/tiktok.vue';
import youtube from '@/components/youtube.vue';
import insta from '@/components/insta.vue';
import Marker from '@/components/marker.vue';
import Tel from '@/components/tel.vue';
import Mail from '@/components/mail.vue';



// Import éléments de vue
import { onMounted, ref, reactive } from 'vue'
// Import leaflet
import * as Leaflet from 'leaflet'
// css leaflet
import 'leaflet/dist/leaflet.css'

// Canevas leaflet pour la carte
let tileLayer = Leaflet.tileLayer
// Initialisation de la carte sous forme de ref
let map = ref()

// Lorsque le composant est monté dans la vue
// On affiche la carte
onMounted(async () => {
    // Caractéristiques visuelle de la carte
    tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }
    );

    // Création de la carte sur la div ayant : id='map'
    map = Leaflet.map('map',
        {
            zoomControl: true,    // Contrôle du Zoom
            layers: [tileLayer],  // Canevas pour dessiner la carte
            maxZoom: 18,          // Zoom maxi autorié
            minZoom: 6            // Zomm mini autorisé
        })
        // projection de la carte avec centrage aux coordonnées indiquées, avec facteur d'agrandissemet 
        .setView([47.495328, 6.8044455], 17)

    // Création d'un icone
    let myIcon = Leaflet.icon({
        iconUrl: '/public/marker-icon-3x.png', // Image de l'icône
        shadowUrl: '/public/marker-shadow.png', // Image de l'ombre0
        iconSize: [25, 41], // taille de l'icône
        shadowSize: [25, 41], // taille de l'ombre
        iconAnchor: [0, 0], // point de position de l'icône
        shadowAnchor: [-10, -10],  // point de position de l'ombre
        popupAnchor: [0, 0] // point de position popup si elle existe, relativement à l'icône
    });

    // Ajout d'un marqueur
    let marker = Leaflet.marker([47.495328, 6.8044455], { icon: myIcon }).addTo(map)

    // Ajout d'une infobulle
    marker.bindPopup("Département MMI")

    // Recentrage de la carte au bout de 5 secondes
    // à une autre position
    // setTimeout(function () { 
    //   map.panTo([47.50133850064826, 6.807621746718467])
    // }, 5000);

    // // Ajout d'un marqueur
    // // à la position de centrage
    // let marker2 = Leaflet.marker(
    //     [47.50133850064826, 6.807621746718467], 
    //     {icon: myIcon}
    //   ).addTo(map)

    // // Ajout d'une infobulle
    // marker2.bindPopup("Je suis la gendarmerie nationale")

})
</script>

<template>
    <section>
        <div class="flex justify-center items-center py-12">
            <h1 class="text-center text-xl md:text-2xl text-Blue01 font-semibold z-10">CONTACT</h1>
            <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
        </div>
        <div>
            <div class="hidden lg:block">
                <div class="absolute">
                    <img src="/public/ContactS1.webp" alt="">
                </div>
            </div>
            <div class="relative">
                <div class="flex justify-center lg:py-24 xl:py-36">
                    <div class="grid lg:grid-cols-3 w-10/12">
                        <div class="lg:col-span-2 bg-Gris pt-6">
                            <p class="text-center">Si vous souhaitez nous contacter, veuillez remplir le formulaire
                                ci-dessous</p>
                            <div class="flex flex-col gap-10 mx-4 pt-8">
                                <input class="bg-Gris text-black border-b border-black " type="text" id="prenom"
                                    name="prenom" placeholder="Votre prénom">
                                <input class="bg-Gris text-black border-b border-black" type="text" id="nom" name="nom"
                                    placeholder="Votre nom">
                                <input class="bg-Gris text-black border-b border-black" type="email" id="mail"
                                    name="mail" placeholder="Votre adresse-mail">
                                <textarea class="bg-Gris text-black border-b border-black" name="message" id="message"
                                    placeholder="Votre message"></textarea>
                            </div>
                            <div class="flex justify-end">
                                <input class="bg-Blue02 text-white p-1 px-4 rounded-lg m-4" type="submit"
                                    value="ENVOYER">
                            </div>
                        </div>
                        <div class="bg-GrisF py-6">
                            <div class="grid grid-cols-2 place-items-center py-4">
                                <Mail></Mail>
                                <p class="text-white">but-mmi-montbéliard@univ-fcomte.fr</p>
                            </div>
                            <div class="grid grid-cols-2 place-items-center py-4">
                                <Tel></Tel>
                                <p class="text-white">03 81 99 47 34</p>
                            </div>
                            <div class="grid grid-cols-2 place-items-center py-4">
                                <Marker></Marker>
                                <p class="text-white">4 Place Tharradin <br />
                                    25200 Montbéliard</p>
                            </div>
                            <div class="flex justify-evenly py-4">
                                <insta />
                                <tiktok />
                                <youtube />
                            </div>
                            <div class="flex justify-center items-center">
                                <LogoMMI2 class="w-14"></LogoMMI2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="flex justify-center items-center py-12">
            <h1 class="text-center text-xl md:text-2xl text-Blue01 font-semibold z-10">OÙ NOUS RETROUVER ?</h1>
            <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
        </div>
        <div class="flex justify-center items-center">
            <div class="container">
                <div id="map">
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="flex justify-center items-center py-12">
            <h1 class="text-center text-xl md:text-2xl text-Blue01 font-semibold z-10">NEWSLETTER</h1>
            <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
        </div>
        <div>
            <p class="text-center">Vous souhaitez être au courant des dernières actualités ?
                Inscrivez-vous à la newsletter !</p>

            <div class="flex justify-center items-center py-8">
                <input class="border border-black p-2" type="email" placeholder="Votre email">
                <input class="border border-black bg-Rouge p-2 text-white" type="submit" value="S’INSCRIRE">
            </div>
        </div>
    </section>
</template>

<style scoped>
#map {
    width: 100%;
    height: 70vh;
}
</style>