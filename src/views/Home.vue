<template>
  <!-- <div class="q-pa-md sizeCarrousel">
    <q-carousel swipeable animated v-model="slide" thumbnails infinite>
      <q-carousel-slide :name="1" img-src="@images/foto-entrada.jpg" />
      <q-carousel-slide :name="2" img-src="@images/foto-pueblo-3.jpg" />
      <q-carousel-slide :name="3" img-src="@images/foto-pueblo-1.jpg" />
      <q-carousel-slide :name="4" img-src="@images/foto-pueblo-2.jpg" />
    </q-carousel>
  </div> -->
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
<style scoped>
.sizeCarrousel {
  width: 50%;
  margin: 0 auto;
}
</style>
