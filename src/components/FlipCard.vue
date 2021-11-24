<template>
  <div class="card-wrapper">
    <div class="card-container">
      <div class="front card-content">
        <slot></slot>
      </div>
      <div class="back card-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: transparent !important;
}
.card-wrapper {
  height: 25vh;
  width: 50vw;
  margin: 0;
  margin: 0 0 0 0;
}

.card-container {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s linear;
  text-align: center;
  margin: 0 auto;
}
.card-wrapper:hover .card-container {
  transform: rotateY(180deg);
}
.card-content {
  position: fixed;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 5px;
}
.front {
  background-color: navy;
  border: 7.7px solid #cf0;
}
.back {
  transform: rotateY(180deg);
  background-color: black;
}
</style>
