<template>
    <div class="flex justify-center items-center">
        <h2 class="text-center text-xl md:text-2xl text-Blue01 dark:text-white font-semibold font-Montserrat z-10">Plan du site</h2>
        <div class="hidden md:block w-16 h-5 bg-Jaune -translate-x-11 translate-y-2 z-0"></div>
    </div>
    <div class="py-10">
        <ul class="px-6 list-inside">
            <li>FORMATION</li>
                <ul class="px-8 list-inside">
                    <RouterLink to="/ButMMI"><li class="list-disc">But MMI</li></RouterLink>
                    <RouterLink to="/Com"><li class="list-disc">Parcours Communication</li></RouterLink>
                    <RouterLink to="/Design"><li class="list-disc">Parcours Design</li></RouterLink>
                    <RouterLink to="/Dev"><li class="list-disc">Parcours Développement</li></RouterLink>
                    <RouterLink to="/Alternance"><li class="list-disc">Alternance</li></RouterLink>
                    <RouterLink to="/International"><li class="list-disc">International</li></RouterLink>
                </ul>
            <RouterLink to="/RS" class="list-disc"><li>Réseaux Sociaux</li></RouterLink>
            <RouterLink to="/FAQ" class="list-disc"><li>FAQ</li></RouterLink>
            <RouterLink to="/Contact" class="list-disc"><li>Contact</li></RouterLink>
        </ul>
        <hr class="border border-Jaune m-2 w-1/2" /> 
        <ul class="px-6 list-inside">
            <RouterLink to="/Connexion" class="list-disc">
                <li>Connexion</li>
            </RouterLink>
        </ul>
        <hr class="border border-Jaune m-2 w-1/2" /> 
        <ul class="px-6 list-inside">
            <RouterLink to="/ML" class="list-disc">
                <li>Mentions Légales</li>
            </RouterLink>
        </ul>
    </div>

</template>