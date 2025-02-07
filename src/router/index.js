import { createRouter, createWebHistory } from "vue-router";

import { ROUTER_NAMES } from "@/utils/routerNames";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: ROUTER_NAMES.home,
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/login",
      name: ROUTER_NAMES.login,
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
      path: "/organigrama",
      name: ROUTER_NAMES.organigrama,
      component: () => import("@/views/Organigrama.vue"),
      children: [
        // {
        //   path: "/altaUsuario",
        //   name: altaUsuario,
        //   component: () => import("@/views/altaUsuario.vue"),
        // },
      ],
    },
    {
      path: "/gestion",
      name: ROUTER_NAMES.gestion,
      component: () => import("@/views/Gestion.vue"),
      children: [
        {
          path: "/listado",
          name: ROUTER_NAMES.listado,
          component: () => import("@/views/Listado.vue"),
          children: [
            {
              path: "/editarUsuario/:id",
              name: ROUTER_NAMES.editarUsuario,
              component: () => import("@/views/EditUsuario.vue"),
              props: true,
            },
            {
              path: "/altaUsuario",
              name: ROUTER_NAMES.altaUsuario,
              component: () => import("@/views/AltaUsuario.vue"),
            },
            {
              path: "/bajaUsuario/:id",
              name: ROUTER_NAMES.bajaUsuario,
              component: () => import("@/views/BajaUsuario.vue"),
              props: true,
            },
          ],
        },
        {
          path: "/noticias",
          name: ROUTER_NAMES.noticias,
          component: () => import("@/views/Noticias.vue"),
          children: [
            {
              path: "/altaNoticias",
              name: ROUTER_NAMES.altaNoticias,
              component: () => import("@/views/altaNoticias.vue"),
            },
            {
              path: "/bajaNoticias/:id",
              name: ROUTER_NAMES.bajaNoticias,
              component: () => import("@/views/bajaNoticias.vue"),
              props: true,
            },
          ],
        },
      ],
    },
    // IMPORTANTE: Dejar esta ruta al final siempre, ya que si no las siguientes rutas jamas se usaran
    {
      path: "/:pathMatch(.*)*",
      name: "Notfound",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});

export default router;
