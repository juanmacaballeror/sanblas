<script setup>
import { ref } from "vue";

// const count = ref(0);
const slide = ref(1);
</script>

<template>
  <!-- <h1>Página Home</h1>
  <button @click="count++">You clicked me {{ count }} times.</button>
  <br />
  <q-btn color="primary" label="¡Hola Quasar!" /> -->
  <div class="carousel-container">
    <q-carousel v-model="slide" swipeable animated thumbnails infinite autoplay>
      <q-carousel-slide
        :name="1"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://cdn.quasar.dev/img/quasar.jpg"
      />
    </q-carousel>
  </div>
</template>
<style scoped>
.carousel-container {
  width: 100%;
  max-width: 800px; /* Ajusta el ancho máximo si es necesario */
  margin: auto; /* Centra el carrusel */
}
</style>
