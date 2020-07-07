import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/communicate",
    name: "Communicate",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/communicate"),
    redirect: "/communicate/props",
    children: [
      {
        path: "props",
        component: () => import("@/views/communicate/father_son/Parent.vue")
      },
      {
        path: "brother",
        component: () => import("@/views/communicate/brother.vue")
      },
      {
        path: "provide",
        component: () => import("@/views/communicate/Provide/Parent.vue")
      },
      {
        path: "dispatch&boardcast",
        component: () => import("@/views/communicate/dispatch/Parent.vue")
      },
      {
        path: "eventbus",
        component: () => import("@/views/communicate/eventbus/Parent.vue")
      },
      { path: "vuex", component: () => import("@/views/communicate/vuex.vue") }
    ]
  },
  {
    path: "/custom-component",
    name: "CustomComponenr",
    component: () => import("@/views/CustomComponent.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
