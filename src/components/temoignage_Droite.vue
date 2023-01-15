<template>
    <div class="flex flex-col lg:flex-row justify-around items-center">
        <div class="mx-4 lg:mx-0 lg:w-2/3 bg-Blue04 rounded-l-3xl rounded-br-3xl">
            <p class="text-white font-Montserrat p-4">{{avis}}</p>
        </div>
        <div class="flex flex-col justify-center items-center">
            <img class="rounded-full w-72  h-72" :src="image" alt="Image de l'étudiant(e)">
            <p class="mt-2 font-Montserrat">{{nom}}</p>
        </div>

    </div>
</template>

<script setup>
defineProps({
    image: { type: String, default: '...' },
    nom: { type: String, default: '...' },
    avis: { type: String, default: '...' },
})
</script>