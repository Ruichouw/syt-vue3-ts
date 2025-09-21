import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/index.vue";
import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/detail/:id",
        name: "Detail",
        component: () => import("@/views/Detail/index.vue"),
      },
    ],
  },
  { path: "/login", name: "Login", component: Login },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/NotFound/index.vue"),
  }, // 404路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
