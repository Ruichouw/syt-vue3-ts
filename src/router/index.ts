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
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/hospital/:id",
        name: "Hospital",
        component: () => import("@/views/Hospital/index.vue"),
        redirect: (to: any) => ({
          name: "Register",
          params: { id: to.params.id },
        }),
        children: [
          {
            path: "register",
            name: "Register",
            component: () => import("@/views/Hospital/Register/index.vue"),
          },
          {
            path: "detail",
            name: "Detail",
            component: () => import("@/views/Hospital/Detail/index.vue"),
          },
          {
            path: "info",
            name: "Info",
            component: () => import("@/views/Hospital/Info/index.vue"),
          },
          {
            path: "notice",
            name: "Notice",
            component: () => import("@/views/Hospital/Notice/index.vue"),
          },
          {
            path: "operate",
            name: "Operate",
            component: () => import("@/views/Hospital/Operate/index.vue"),
          },
        ],
      },
    ],
  },
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
