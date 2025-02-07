<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

// Datos de las tarjetas mockeados
const itemsCard = [
  {
    img: "@images/foto-entrada.jpg",
    id: 1,
    title: "Título1",
    content: "Esto será el texto del sgcard",
  },
  {
    img: "@images/foto-entrada.jpg",
    id: 2,
    title: "Título2",
    content: "Esto será el texto del sgcard",
  },
  {
    img: "@images/foto-entrada.jpg",
    id: 3,
    title: "Título3",
    content: "Esto será el texto del sgcard",
  },
];
const cards = ref(itemsCard);

//Estilos card alinear dependiendo del dispositivo
const cardAlign = computed(() => {
  let result = "justify-start";
  if ($q.screen.lt.sm) {
    result = "justify-center";
  }
  return result;
});
</script>

<template>
  <div class="row">
    <div class="col-12 text-black">
      <h5 class="textoSeparator">Nuestra historia</h5>
      <q-separator color="orange" inset />
    </div>
  </div>

  <div class="q-pa-md row justify-center items-center rowStyle">
    <div class="col-12 col-md-7 text-center">
      <p class="styleText">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel culpa
        dicta porro quis cupiditate qui accusantium? Inventore fugit harum
        mollitia ut eveniet aliquid, obcaecati dolor autem numquam modi sit
        architecto.
      </p>
    </div>
    <div class="col-12 col-md-5 text-center">
      <img class="styleImg" src="@images/sanBlasGrande.jpg" alt="San Blas" />
    </div>
  </div>
  <div class="row">
    <div class="col-12 text-black">
      <h5 class="textoSeparator">Últimas noticias</h5>
      <q-separator color="orange" inset />
    </div>
  </div>

  <!-- CARD SECTION-->

  <div class="row q-gutter-md" :class="cardAlign">
    <div
      v-for="(card, index) in cards"
      :key="index"
      cols="12"
      sm="6"
      md="3"
      class="flex justify-center"
    >
      <q-card dark bordered class="q-my-md q-ml-md bg-grey-9">
        <q-card-section>
          <div class="text-h6">{{ card.title }}</div>
        </q-card-section>

        <!-- <q-separator dark inset /> -->

        <q-card-section>
          {{ card.content }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rowStyle {
  background-color: #f5f5f5;
  overflow: hidden;
  max-width: 100%;
}

.styleText {
  font-family: "Old Standard TT", serif;
  font-size: 1.5rem;
  line-height: 1.8;
  color: black;
  margin: 10px;
  text-align: center;
}

.styleImg {
  max-width: 100%;
  opacity: 0.8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.textoSeparator {
  margin: 0;
  margin-left: 16px;
  margin-top: 1rem;
}

.q-card {
  transition: transform 0.3s ease;
}

.q-card:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .styleText {
    font-size: 1.2rem;
  }
  .styleImg {
    opacity: 0.9;
  }

  .my-card {
    // text-align: center;
  }
}
</style>
