import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Features from "../views/Features.vue";
import ContactView from "../views/ContactView.vue";
import StartFreeTrial from "../views/StartFreeTrial.vue";
import NotFound from "../views/NotFound.vue";
import FAQ from "../views/FAQ.vue";

async function getParams(to) {
  if (Object.keys(to.query).length) {    
    $cookies.set("MPHQR1", to.query);
    return { path: to.path, query: {}, hash: to.hash };
  }
}

async function getGuid(to) {
  const guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (to.query.g && guidRegex.test(to.query.g)) {
    $cookies.set("guid", to.query.g);
    return { path: to.path, query: {}, hash: to.hash };
  }  
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: function (to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      beforeEnter: getGuid,
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/features",
      name: "features",
      component: Features,
    },
    {
      path: "/faq",
      name: "faq",
      component: FAQ,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    // {
    //   path: "/customer-detail",
    //   name: "customer_detail",
    //   beforeEnter: getParams,
    //   component: StartFreeTrial,
    // },
    // Catch all 404 - this must be the last route
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound
    }
  ],
});

export default router;
