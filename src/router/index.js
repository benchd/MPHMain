import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Features from '../views/Features.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: function(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
    
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',      
      component: AboutView
    },
    {
      path: '/features',
      name: 'features',      
      component: Features
    },
    {
      path: '/contact',
      name: 'contact',      
      component: ContactView
    }
  ]
})

export default router
