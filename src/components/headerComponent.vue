<script setup>
import { useMainStore } from "@store/index.js";
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import { storeToRefs } from "pinia";

const $q = useQuasar();
const drawer = ref(false);

const mainStore = useMainStore();

// Extraer `token  nombre` de la store (para mantener reactividad)
const { token, nombre } = storeToRefs(mainStore);

//TODO: Si tiene token puede acceder a la ruta datosUsuario, sino no puede

const textAlign = computed(() => {
  let result = "alignToolbarTitleDesktop";
  if ($q.screen.lt.md) {
    result = "alignToolbarTitleMovil";
  }
  return result;
});

// Menú de navegación
const menuItems = [
  { label: "Inicio", icon: "home", link: "/" },
  { label: "Organigrama", icon: "mail", link: "/organigrama" },
  { label: "Galería", icon: "image", link: "/galeria" },
  // { label: "Contacto", icon: "mail", link: "/contacto" },
];

if (nombre?.value) {
  menuItems.push({ label: "Gestión", icon: "list", link: "/gestion" });
  menuItems.push({ label: nombre.value, icon: "login", link: "/datosUsuario" });
} else {
  menuItems.push({ label: "Login", icon: "login", link: "/login" });
}

const activeLink = ref(null);
const setActive = (link) => {
  activeLink.value = link;
};
</script>

<template>
  <div class="fontHeader">
    <!-- Header -->
    <q-header elevated class="backGroundColor text-white">
      <q-toolbar>
        <!-- Menú lateral solo en móvil -->
        <q-btn
          v-if="$q.screen.lt.md"
          flat
          dense
          round
          icon="menu"
          @click="drawer = !drawer"
        />
        <img
          v-if="$q.screen.gt.sm"
          alt="sanBlas"
          src="@images/sanblas.jpg"
          class="q-mr-xs q-my-sm styleImageToolbar"
        />
        <q-toolbar-title :class="textAlign">
          Hermandad de San Blas - Buenasbodas</q-toolbar-title
        >

        <!-- Menú horizontal en escritorio -->
        <div class="q-mt-xs" v-if="$q.screen.gt.sm">
          <q-btn
            v-for="(item, index) in menuItems"
            :key="item.label"
            flat
            :icon="item.icon"
            :label="item.label"
            :to="item.link"
            class="custom-link"
            :class="{ active: activeLink === index }"
            @click="setActive(index)"
          />
        </div>
      </q-toolbar>
    </q-header>

    <!-- Menú lateral para móviles -->
    <q-drawer v-model="drawer" side="left" overlay class="bg-black text-white">
      <q-list>
        <q-item
          v-for="item in menuItems"
          :key="item.label"
          clickable
          v-ripple
          :to="item.link"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </div>
</template>
<style scoped>
.alignToolbarTitleDesktop {
  text-align: left;
  white-space: normal;
  word-break: break-word;
}
.alignToolbarTitleMovil {
  white-space: normal;
  word-break: break-word;
  text-align: center;
  max-width: 100%;
}

.backGroundColor {
  background-image: linear-gradient(to right, black, grey);
}

.fontHeader {
  font-family: Cursive;
}

.styleImageToolbar {
  width: 4%;
  border-radius: 50%;
  aspect-ratio: 1; /* Se ajusta al mismo valor que el width */
  object-fit: cover;
}

.custom-link.active {
  background-color: orange;
  color: white;
  font-weight: bold;
}
</style>
