import { createRouter, createWebHistory } from "vue-router";
import Home from "@views/Home.vue";
import NotFound from "@views/NotFound.vue";
import Login from "@views/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        //
        {
          path: "",
          name: Home,
          component: () => import("@/views/Home.vue"),
        },
        // {
        //   path: "/login",
        //   name: Login,
        //   component: () => import("@/views/Login.vue"),
        // },
      ],
    },
    {
      path: "/login",
      name: Login,
      component: () => import("@/views/Login.vue"),
      children: [
        // {
        //   path: "/altaUsuario",
        //   name: altaUsuario,
        //   component: () => import("@/views/altaUsuario.vue"),
        // },
      ],
    },
    {
      path: "/home",
      name: Home,
      component: () => import("@/views/Home.vue"),
      children: [
        // {
        //   path: "/altaUsuario",
        //   name: altaUsuario,
        //   component: () => import("@/views/altaUsuario.vue"),
        // },
      ],
    },
    // IMPORTANTE: Dejar esta ruta al final siempre, ya que si no las siguientes rutas jamas se usaran
    {
      path: "/:pathMatch(.*)*",
      name: "Notfound",
      component: NotFound,
    },
  ],
});

export default router;
