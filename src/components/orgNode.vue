<script setup>
import { defineProps } from "vue";

// Recibir el nodo de datos como una prop
defineProps({
  node: Object,
});
</script>

<template>
  <div class="node">
    <div class="node-content">
      <div class="node-name">{{ node.name }}</div>
      <div class="node-title">{{ node.title }}</div>
    </div>
    <div v-if="node.children && node.children.length" class="children">
      <OrgNode
        v-for="(child, index) in node.children"
        :key="index"
        :node="child"
      />
    </div>
  </div>
</template>

<style scoped>
.node {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 10px;
}

.node-content {
  background: #3498db;
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  min-width: 120px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}

.node-title {
  font-size: 12px;
  opacity: 0.8;
}

.children {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: relative;
}

@media (max-width: 768px) {
  .children {
    flex-direction: column;
    align-items: center;
  }
}
</style>
