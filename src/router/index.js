import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VisiteVirtuelleView from '../views/VisiteVirtuelleView.vue'


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
import InscriptionView from '../views/Compte/InscriptionView.vue'
import CompteView from '../views/Compte/CompteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    { path: '/visiteVirtuelle', name: 'visiteVirtuelle', component: VisiteVirtuelleView },

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
    { path: '/Inscription', name: 'Inscription', component: InscriptionView },
    { path: '/Compte', name: 'Compte', component: CompteView },
  ]
})

export default router
