<script setup>
import { ref } from "vue";
import OrgNode from "./orgNode.vue"; // Importamos el componente recursivo

// Datos del organigrama
const orgData = ref({
  name: "CEO",
  title: "Director General",
  children: [
    {
      name: "CTO",
      title: "Director de Tecnología",
    },
    {
      name: "CFO",
      title: "Director Financiero",
    },
    {
      name: "CMO",
      title: "Director de Marketing",
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
