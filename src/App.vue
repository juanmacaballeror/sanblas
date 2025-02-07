<script setup>
import headerComponent from "@components/headerComponent.vue";
import footerComponent from "@components/footerComponent.vue";
</script>

<template>
  <div id="app">
    <q-layout view="lHh lpr lFf" class="no-scroll">
      <header-component />
      <q-page-container>
        <router-view />
      </q-page-container>
      <footer-component />
    </q-layout>
  </div>
</template>

<style scoped>
.no-scroll {
  /* overflow: hidden;
  height: 100vh; */
}
</style>

<!-- <style scoped></style> -->
