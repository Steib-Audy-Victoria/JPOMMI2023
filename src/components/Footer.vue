<script setup>
import LogoMMI2 from './LogoMMI2.vue';
import tiktok from './tiktok.vue';
import youtube from './youtube.vue';
import insta from './insta.vue';
</script>
<template>
    <footer class="bg-Grey02 text-white font-Montserrat font-normal">
        <!-- Mobile -->
        <div class="grid grid-cols-2 lg:hidden py-2 bg-[url('/public/Curve_LineM.svg')] bg-no-repeat bg-right-bottom">
            <div class="flex ml-4">
                <hr class="border h-auto my-8 mx-4 border-Jaune" />
                <div class="flex flex-col gap-5 justify-center ">
                    <RouterLink to="/ButMMI">BUT MMI</RouterLink>
                    <RouterLink to="/Contact">CONTACT</RouterLink>
                    <RouterLink to="/ML">MENTIONS LÉGALES</RouterLink>
                    <RouterLink to="/Plan">PLAN DU SITE</RouterLink>
                </div>
            </div>
            <div>
                <div class="flex justify-evenly my-4">
                    <tiktok />
                    <youtube />
                    <insta />
                </div>

                <div class="grid place-items-end m-4 mt-32">
                    <LogoMMI2 class="w-20" />
                </div>
            </div>
        </div>

        <!-- Ordi -->
        <div
            class="hidden lg:grid lg:grid-cols-3 py-10 bg-[url('/public/Curve_Line.svg')] bg-no-repeat bg-right-bottom">
            <div>
                <div class="flex ml-7">
                    <hr class="border h-auto  mx-4 border-Jaune" />
                    <div class="flex flex-col gap-5 justify-center ">
                        <RouterLink to="/ButMMI">BUT MMI</RouterLink>
                        <RouterLink to="/Contact">CONTACT</RouterLink>
                        <RouterLink to="/ML">MENTIONS LÉGALES</RouterLink>
                        <RouterLink to="/Plan">PLAN DU SITE</RouterLink>
                    </div>
                </div>
                <div class="flex justify-evenly my-4">
                    <tiktok />
                    <youtube />
                    <insta />
                </div>
            </div>

            <div class=" flex flex-col justify-center items-center m-4 ">
                <LogoMMI2 />
            </div>

            <div></div>
        </div>
    </footer>
</template>