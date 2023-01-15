import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


import ButMMIView from '../views/Formation/ButMMIView.vue'
import ParcoursDesignView from '../views/Formation/ParcoursDesignView.vue'
import ParcoursComView from '../views/Formation/ParcoursComView.vue'
import ParcoursDevView from '../views/Formation/ParcoursDevView.vue'
import AlternanceView from '../views/Formation/AlternanceView.vue'
import InternationalView from '../views/Formation/InternationalView.vue'

import ReseauxSociauxView from '../views/ReseauxSociauxView.vue'
import ContactView from '../views/ContactView.vue'
import FAQView from '../views/FAQView.vue'

import ConnexionView from '../views/Compte/ConnexionView.vue'
import CalendrierView from '../views/Compte/CalendrierView.vue'

import MentionLegalView from '../views/MentionLegalView.vue'
import PlanView from '../views/PlanView.vue'


import Page404 from '../views/Page404.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    { path: '/ButMMI', name: 'ButMMI', component: ButMMIView },
    { path: '/Design', name: 'ParcoursDesign', component: ParcoursDesignView },
    { path: '/Com', name: 'ParcoursCom', component: ParcoursComView },
    { path: '/Dev', name: 'ParcoursDev', component: ParcoursDevView },
    { path: '/Alternance', name: 'Alternance', component: AlternanceView },
    { path: '/International', name: 'International', component: InternationalView },

    { path: '/RS', name: 'RS', component: ReseauxSociauxView },
    { path: '/Contact', name: 'Contact', component: ContactView },
    { path: '/FAQ', name: 'FAQ', component: FAQView },

    { path: '/Connexion', name: 'Connexion', component: ConnexionView },
    { path: '/Calendrier', name: 'Calendrier', component: CalendrierView },

    { path: '/ML', name: 'ML', component: MentionLegalView },
    { path: '/Plan', name: 'Plan', component: PlanView },


    {
      path: '/:pathMatch(.*)*',
      name: 'page404',
      component: Page404
    },]
})

export default router
