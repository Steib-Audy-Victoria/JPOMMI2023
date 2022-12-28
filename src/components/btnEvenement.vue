<template>
    <div class="border-2 border-black p-2 my-4">
        <p class="font-Montserrat font-semibold text-center uppercase">VOIR {{ nom }} SUR INSTAGRAM</p>
    </div>
</template>

<script setup>
defineProps({
    nom: { type: String, default: '...' },
})
</script>