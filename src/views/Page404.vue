<template>
    <div class="flex flex-col gap-5 justify-center items-center h-screen">
        <div class="img text-center">
            <h1 class="font-black text-9xl bg-Grey03 dark:bg-Grey01  mix-blend-lighten uppercase">ERREUR <br /> 404</h1>
        </div>

        <p class="text-3xl text-Blue01 font-Montserrat dark:text-white  font-semibold uppercase">OUPS ! LA PAGE QUE VOUS RECHERCHEZ N’EXISTE PAS</p>

        <RouterLink to="/">
            <button class=" font-Montserrat text-Blue01 dark:text-white text-xl font-medium border border-black dark:border-Jaune p-2 px-6">Retourner à l’accueil</button>
        </RouterLink>
    </div>
</template>

<style>
.img {
    background-image: url('/public/Photo_IUT.webp');
    background-size: cover;
    background-repeat: no-repeat;
}
</style>