<script setup>
import { useMainStore } from "@store/index.js";
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import { storeToRefs } from "pinia"; // Permite extraer propiedades reactivas

const $q = useQuasar();
const drawer = ref(false); // Estado del menú lateral

const mainStore = useMainStore(); // Obtiene la store

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
  { label: "Galería", icon: "image", link: "/galeria" },
  { label: "Contacto", icon: "mail", link: "/contacto" },
];

if (nombre) {
  menuItems.push({ label: nombre.value, icon: "login", link: "/datosUsuario" });
} else {
  menuItems.push({ label: nombre.value, icon: "login", link: "/datosUsuario" });
}
</script>

<template>
  <!-- Header -->
  <q-header elevated class="bg-black text-white">
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
      <q-toolbar-title :class="textAlign">
        Hermandad de San Blas - Buenasbodas</q-toolbar-title
      >

      <!-- Menú horizontal en escritorio -->
      <div v-if="$q.screen.gt.sm">
        <q-btn
          v-for="item in menuItems"
          :key="item.label"
          flat
          :icon="item.icon"
          :label="item.label"
          :to="item.link"
        />
      </div>
    </q-toolbar>
  </q-header>

  <!-- Menú lateral para móviles -->
  <q-drawer v-model="drawer" side="left" overlay class="bg-grey-2">
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
</template>
<style scoped>
.alignToolbarTitleDesktop {
  text-align: left;
}
.alignToolbarTitleMovil {
  text-align: center;
}
</style>
