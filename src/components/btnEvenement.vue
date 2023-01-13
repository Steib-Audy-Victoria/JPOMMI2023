<template>
    <div class="border-2 border-black hover:text-white hover:border-white hover:bg-Grey02 p-2 my-4 dark:border-white dark:hover:border-black dark:hover:text-black dark:hover:bg-Jaune">
        <p class="font-Montserrat font-semibold text-center uppercase">VOIR {{ nom }} SUR INSTAGRAM</p>
    </div>
</template>

<script setup>
defineProps({
    nom: { type: String, default: '...' },
})
</script>