import Vue from "vue";
import VueRouter from "vue-router";
import First from "../views/First.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "First",
    component: First
  }
];

const router = new VueRouter({
  routes
});

export default router;
