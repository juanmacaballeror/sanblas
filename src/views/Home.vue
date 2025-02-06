<template>
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
</template>

<style scoped>
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
  /* height: auto; */
  opacity: 0.8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .styleText {
    font-size: 1.2rem;
  }
  .styleImg {
    opacity: 0.9;
  }
}
</style>
