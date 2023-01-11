<template>
    <div class="flex justify-center items-center py-12">
        <h1 class="text-center text-xl md:text-2xl text-Blue01 font-semibold font-Montserrat z-10">MON COMPTE</h1>
        <div class="w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
    </div>

    <div>
        <div class="flex flex-col  gap-4 m-10">
            <input class="border p-2 placeholder:text-black placeholder:font-thin placeholder:font-Montserrat"
                type="email" name="email" placeholder="E-mail">
            <input class="border p-2 placeholder:text-black placeholder:font-thin placeholder:font-Montserrat"
                type="text" name="nom" placeholder="Nom">
            <input class="border p-2 placeholder:text-black placeholder:font-thin placeholder:font-Montserrat"
                type="text" name="prenom" placeholder="Prénom">
            <input class="border p-2 placeholder:text-black placeholder:font-thin placeholder:font-Montserrat"
                type="password" name="password" placeholder="Mot de passe">
        </div>

        <div class=" flex justify-evenly pb-10">
            <button class="uppercase border border-black  p-2 px-8 bg-Rouge text-white font-Montserrat">Valider</button>
            <button
                class="uppercase border border-black  p-2 px-8 bg-Rouge text-white font-Montserrat">Déconnexion</button>
        </div>
    </div>
</template>