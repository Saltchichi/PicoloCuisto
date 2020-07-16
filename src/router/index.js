import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login.vue";
import Recipes from "../components/Recipes.vue";
import Register from "../components/Register.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/recipes",
      name: "Recipes",
      component: Recipes,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
  ],
});
