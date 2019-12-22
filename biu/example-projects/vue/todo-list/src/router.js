import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import FormView from "./views/FormView";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, footer: MainFooter },
      props: {
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/form",
      name: "form",
      components: { default: FormView, footer: MainFooter },
      props: {
        footer: { backgroundColor: "black" }
      }
    }
  ]
});
