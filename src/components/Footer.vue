<template>
  <div class="dock">
    <div class="cube">
      <div class="front"></div>
      <div class="top"></div>
    </div>

    <div id="container">
      <span class="item">
        <i class="fa fa-envelope icon" id="mail"></i>
      </span>
      <span class="item">
        <i class="fa fa-linkedin icon" id="linkedin"></i>
      </span>
      <span class="item">
        <i class="fa fa-codepen icon" id="codepen"></i>
      </span>
      <span class="item">
        <i class="fa fa-github icon" id="github"></i>
      </span>
      <span class="item">
        <i class="fa fa-youtube icon" id="youtube"></i>
      </span>
      <span class="item">
        <i class="fa fa-whatsapp icon" id="whatsapp"></i>
      </span>
      <span class="item">
        <i class="fa fa-facebook icon" id="facebook"></i>
      </span>
      <span class="item">
        <i class="fa fa-instagram icon" id="instagram"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
span {
  margin-left: 20px;
}

.dock {
  position: absolute;
  bottom: 0;
  margin-left: 550px;
}

.cube {
  perspective: 1000px;
  perspective-origin: 140% -140px;
  width: 250px;
  position: relative;
  bottom: -15px;
}

.cube div {
  position: absolute;
  background: linear-gradient(to top, #eaeaea, #b8b8b8);
  text-align: center;
  width: 700px;
}

.front {
  transform: translateZ(110px);
  height: 20px;
}

.top {
  transform: rotateX(-90deg) translateY(-113px);
  transform-origin: top center;
  height: 200px;
}

#container {
  transform: translateZ(0px) translateY(-30px);
  text-align: center;
  width: 700px;
}

#container .item {
  display: inline-block;
  cursor: pointer;
}

#container.item i {
  width: 36px !important;
  height: auto !important;
  margin: 0 10px !important;
  transition: all 0.2s ease-in-out !important;
}

#container .item:hover i {
  transform: translateY(-15px) scale(1.3);
}

#container .item:hover::before {
  transform: scale(1.3);
  background: rgba(49, 48, 48, 0.5);
}

#container span .item::before {
  content: " ";
  width: 36px;
  height: 10px;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 45px;
  margin-left: 15px !important;
  border-radius: 100%;
  z-index: 0;
  transition: all 0.3s ease-in-out;
}
#mail,
#linkedin,
#codepen,
#github,
#youtube,
#whatsapp,
#facebook,
#instagram {
  font-size: 2em !important;
  background-color: #123456 !important;
  color: #fff !important;
  box-shadow: 2px 2px 2px #00000080, 10px 1px 12px #00000080,
    2px 2px 10px #00000080, 2px 2px 3px #00000080, inset 2px 2px 10px #00000080,
    inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080,
    inset 2px 2px 10px #00000080 !important;
  border-radius: 15px !important;
  padding: 5px 10px !important;
  animation: animate 3s linear infinite !important;
  text-shadow: 0 0 50px #00ffff, 0 0 100px #00ffff, 0 0 150px #00ffff,
    0 0 200px #00ffff !important;
}

@keyframes animate {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
</style>
