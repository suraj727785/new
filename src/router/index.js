import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import ProductDetails from "../views/ProductDetails.vue";
import Login from "../views/Login.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/product_details",
    name: "ProductDetails",
    component: ProductDetails,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/landing",
    name: "LandingPage",
    component: LandingPage,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next("/");
      } else {
        next();
      }
    },
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
