<template>
  <div class="btn_perspective">
    <button class="btn btn-3d btn-3db">Submit</button>
  </div>
  <div class="btn_perspective">
    <button class="btn btn-3d btn-3db">Submit</button>
  </div>
  <br />
  <div class="btn_perspective">
    <button class="btn btn-3d btn-3dc">Submit</button>
  </div>
  <div class="btn_perspective">
    <button class="btn btn-3d btn-3dd">Submit</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.btn {
  text-transform: uppercase;
  border: none;
  position: relative;
  background: none;
  cursor: pointer;
  padding: 60px 120px;
  display: inline-block;
  color: inherit;
  letter-spacing: 2px;
  font-size: 1em;
  outline: none;
  -moz-transition: all 0.4s;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  color: #eee;
  font-weight: bold;
  font-size: 2rem;
}

.btn:after {
  content: "";
  position: absolute;
  z-index: -1;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.btn_perspective {
  -webkit-perspective: 800px;
  -moz-perspective: 800px;
  perspective: 800px;
  display: inline-block;
}

.btn-3d {
  display: block;
  background: #5cbcf6;
  outline: 1px solid transparent;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
  margin-top: 5px;
}

.btn-3da:after {
  width: 100%;
  height: 42%;
  left: 0;
  top: -40%;
  background: #53a6d7;
  -webkit-transform-origin: 0% 100%;
  -webkit-transform: rotateX(90deg);
  -moz-transform-origin: 0% 100%;
  -moz-transform: rotateX(90deg);
  transform-origin: 0% 100%;
  transform: rotateX(90deg);
}

.btn-3da:hover {
  -webkit-transform: rotateX(-360deg);
  -moz-transform: rotateX(-360deg);
  -ms-transform: rotateX(-360deg);
  transform: rotateX(-360eg);
}

.btn-3db:after {
  width: 100%;
  height: 40%;
  left: 0;
  top: 100%;
  background: #53a6d7;
  -webkit-transform-origin: 0% 0%;
  -webkit-transform: rotateX(-90deg);
  -moz-transform-origin: 0% 0%;
  -moz-transform: rotateX(-90deg);
  -ms-transform-origin: 0% 0%;
  -ms-transform: rotateX(-90deg);
  transform-origin: 0% 0%;
  transform: rotateX(-90deg);
}

.btn-3db:hover {
  -webkit-transform: rotateX(35deg);
  -moz-transform: rotateX(35deg);
  -ms-transform: rotateX(35deg);
  transform: rotateX(35deg);
}

.btn-3dc:after {
  width: 20%;
  height: 100%;
  left: -20%;
  top: 0;
  background: #53a6d7;
  -webkit-transform-origin: 100% 0%;
  -webkit-transform: rotateY(-90deg);
  -moz-transform-origin: 100% 0%;
  -moz-transform: rotateY(-90deg);
  -ms-transform-origin: 100% 0%;
  -ms-transform: rotateY(-90deg);
  transform-origin: 100% 0%;
  transform: rotateY(-90deg);
}

.btn-3dc:hover {
  -webkit-transform: rotateY(25deg);
  -moz-transform: rotateY(25deg);
  -ms-transform: rotateY(25deg);
  transform: rotateY(25deg);
}

.btn-3dd:after {
  width: 20%;
  height: 100%;
  left: 100%;
  top: 0;
  background: #53a6d7;
  -webkit-transform-origin: 0% 0%;
  -webkit-transform: rotateY(90deg);
  -moz-transform-origin: 0% 0%;
  -moz-transform: rotateY(90deg);
  -ms-transform-origin: 0% 0%;
  -ms-transform: rotateY(90deg);
  transform-origin: 0% 0%;
  transform: rotateY(90deg);
}

.btn-3dd:hover {
  -webkit-transform: rotateY(-15deg);
  -moz-transform: rotateY(-15deg);
  -ms-transform: rotateY(-15deg);
  transform: rotateY(-15deg);
}

@media screen and (max-width: 480px) {
  .container {
    font-size: 1.2em;
  }
}
</style>

<script>
export default {
  name: "Board",
};
</script>
