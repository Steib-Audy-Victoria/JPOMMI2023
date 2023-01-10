<script setup>
import { RouterLink } from 'vue-router'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon } from '@heroicons/vue/24/solid'
import LogoMMI from './LogoMMI.vue';

</script>
<template>
    <header class="py-2 bg-Grey03 font-Montserrat font-semibold">
        <!--Visiteur-->
        <!--v-else-->
        <div>
            <!--Mobile-->
            <div class="lg:hidden mr-6">
                <nav class="flex justify-between">
                    <div class="mx-4">
                        <RouterLink to="/">
                            <LogoMMI />
                        </RouterLink>
                    </div>
                    <Menu>
                        <MenuButton
                            class="px-4 py-2 text-sm font-medium text-black  focus:outline-none focus:ring-2 focus:ring-Blue02 focus:ring-offset-2 focus:ring-offset-gray-100">
                            <Bars3Icon class=" w-10"></Bars3Icon>
                        </MenuButton>
                        <MenuItems style="z-index:999;"
                            class="absolute right-0 z-10 mt-16 w-full text-center  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                <RouterLink to="/"
                                    :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-lg']">
                                    ACCUEIL
                                </RouterLink>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <RouterLink to="ButMMI"
                                    :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-lg']">
                                    BUT MMI</RouterLink>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <RouterLink to="/Com"
                                    :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-lg']">
                                    PARCOURS COMMUNICATION</RouterLink>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <RouterLink to="/Design"
                                    :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-lg']">
                                    PARCOURS DESIGN</RouterLink>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <RouterLink to="/Dev"
                                    :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-lg']">
                                    PARCOURS DÉVELOPPEMENT</RouterLink>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <RouterLink to="/Alternance"
                                    :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-lg']">
                                    ALTERNANCE</RouterLink>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <RouterLink to="/International"
                                    :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-lg']">
                                    INTERNATIONAL</RouterLink>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <RouterLink to="/RS"
                                    :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-lg']">
                                    RÉSEAUX SOCIAUX</RouterLink>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <RouterLink to="/FAQ"
                                    :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-lg']">
                                    FAQ</RouterLink>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <RouterLink to="/Contact"
                                    :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-lg']">
                                    CONTACT</RouterLink>
                                </MenuItem>
                            </div>
                            <hr class="border border-Jaune mx-20" />
                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                <RouterLink to="/Connexion"
                                    :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-lg']">
                                    CONNEXION</RouterLink>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                </nav>
            </div>
            <!--Ordi-->
            <div class=" hidden lg:block  ">
                <nav class="flex justify-between">
                    <div class="mx-4">
                        <RouterLink to="/">
                            <LogoMMI />
                        </RouterLink>
                    </div>
                    <div class="flex gap-6 items-center mx-2 mr-4">
                        <Menu as="div" class="relative inline-block text-left">
                            <div>
                                <MenuButton
                                    class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-Blue02 focus:ring-offset-2 focus:ring-offset-gray-100">
                                    <span class="font-Montserrat font-semibold">FORMATION</span>
                                    <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                </MenuButton>
                            </div>

                            <transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                                <MenuItems style="z-index:999;"
                                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div class="py-1">
                                        <MenuItem v-slot="{ active }">
                                        <RouterLink to="/ButMMI"
                                            :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-sm']">
                                            BUT MMI</RouterLink>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <RouterLink to="/Com"
                                            :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-sm']">
                                            Parcours communication</RouterLink>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <RouterLink to="/Design"
                                            :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-sm']">
                                            Parcours design</RouterLink>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <RouterLink to="/Dev"
                                            :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-sm']">
                                            Parcours développement</RouterLink>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <RouterLink to="/Alternance"
                                            :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-sm']">
                                            Alternance</RouterLink>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <RouterLink to="/International"
                                            :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-sm']">
                                            International</RouterLink>
                                        </MenuItem>

                                    </div>
                                </MenuItems>
                            </transition>
                        </Menu>
                        <RouterLink to="/RS">RÉSEAUX SOCIAUX</RouterLink>
                        <RouterLink to="/FAQ">FAQ</RouterLink>
                        <RouterLink to="/Contact">CONTACT</RouterLink>
                    </div>
                </nav>
            </div>
        </div>
        <!--Si l'utilisateur est connecter-->
        <!--v-if="user"-->
        <div class="hidden">
            <!--Mobile-->
            <div class="lg:hidden mr-6">
                <nav class="flex justify-between">
                    <div class="mx-4">
                        <RouterLink to="/">
                            <LogoMMI />
                        </RouterLink>
                    </div>
                    <Menu>
                        <MenuButton
                            class="px-4 py-2 text-sm font-medium text-black  focus:outline-none focus:ring-2 focus:ring-Blue02 focus:ring-offset-2 focus:ring-offset-gray-100">
                            <Bars3Icon class=" w-10"></Bars3Icon>
                        </MenuButton>
                        <MenuItems style="z-index:999;"
                            class="absolute right-0 z-10 mt-16 w-full text-center  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <MenuItem v-slot="{ active }">
                            <RouterLink to="/"
                                :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-lg']">
                                ACCUEIL
                            </RouterLink>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <RouterLink to="#"
                                :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-lg']">
                                PLANNING</RouterLink>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <RouterLink to="#"
                                :class="[active ? 'bg-Blue02 text-white' : 'text-black', 'block px-4 py-2 text-lg']">
                                MON COMPTE</RouterLink>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </nav>
            </div>
            <!--Ordi-->
            <div class=" hidden lg:block  ">
                <nav class="flex justify-between">
                    <div class="mx-4">
                        <RouterLink to="/">
                            <LogoMMI />
                        </RouterLink>
                    </div>
                    <div class="flex gap-6 items-center mx-2">
                        <RouterLink to="#">PLANNING</RouterLink>
                        <RouterLink to="#">MON COMPTE</RouterLink>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>