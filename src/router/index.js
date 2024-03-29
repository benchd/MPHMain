import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Features from '../views/Features.vue'
import ContactView from '../views/ContactView.vue'
import StartFreeTrial from '../views/StartFreeTrial.vue'

async function getParams(to) {  
  if (Object.keys(to.query).length){
      console.log(to.query);
      $cookies.set('cust-detail',to.query)
    return { path: to.path, query: {}, hash: to.hash }
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: function(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
    
  },
  linkActiveClass: "active",
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
    },
    {
      path: '/custmer-detail',
      name: 'customer_detail',      
      beforeEnter: getParams,
      component: StartFreeTrial
    }
  ]
})

export default router
