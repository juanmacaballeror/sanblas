<script setup>
import { ref } from "vue";
import OrgNode from "./OrgNode.vue"; // Importamos el componente recursivo

// Datos del organigrama
const orgData = ref({
  name: "CEO",
  title: "Director General",
  children: [
    {
      name: "CTO",
      title: "Director de Tecnología",
      children: [
        {
          name: "Dev Manager",
          title: "Gerente de Desarrollo",
          children: [
            { name: "Frontend Lead", title: "Líder de Frontend" },
            { name: "Backend Lead", title: "Líder de Backend" },
          ],
        },
        {
          name: "Infra Manager",
          title: "Gerente de Infraestructura",
          children: [
            { name: "DevOps", title: "Especialista DevOps" },
            { name: "CyberSec", title: "Seguridad" },
          ],
        },
      ],
    },
    {
      name: "CFO",
      title: "Director Financiero",
      children: [
        { name: "Contabilidad", title: "Jefe de Contabilidad" },
        { name: "Auditoría", title: "Jefe de Auditoría" },
      ],
    },
    {
      name: "CMO",
      title: "Director de Marketing",
      children: [
        { name: "Publicidad", title: "Director de Publicidad" },
        { name: "RRSS", title: "Director de Redes Sociales" },
      ],
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
