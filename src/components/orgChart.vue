<script setup>
import { ref } from "vue";
import OrgNode from "./orgNode.vue"; // Importamos el componente recursivo

// Datos del organigrama
const orgData = ref({
  cargo: "Hermano Mayor",
  name: "Juan Perez Fernández",
  children: [
    {
      cargo: "Hermano Medio",
      name: "Antonio Pérez Pérez",
    },
    {
      cargo: "Hermano Medio",
      name: "Mario Sanchez Sanchez",
    },
    {
      cargo: "Hermano Medio",
      name: "Juanjo Díaz Diaz",
    },
  ],
});
</script>

<template>
  <div class="tree-container">
    <OrgNode :node="orgData" />
  </div>
</template>

<style scoped>
.tree-container {
  display: flex;
  justify-content: center;
  padding: 20px;
  overflow-x: auto;
}
</style>
