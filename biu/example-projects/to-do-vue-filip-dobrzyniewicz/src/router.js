import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import FormView from "./views/FormView";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 55 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/form",
      name: "form",
      components: { default: FormView, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 55 },
        footer: { backgroundColor: "black" }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
