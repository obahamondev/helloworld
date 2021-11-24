<template>
  <div class="container-fluid">
    <div class="col"><ProfileCard /></div>
    <div class="col">
      <Carousel
        ><div :v-for="flipcard in flipcards">
          <Slide><FlipCard /></Slide>
        </div>
      </Carousel>
    </div>
  </div>
  <Footer />
</template>

<style>
.profilepic {
  width: 12rem;
}
.bio-title {
  text-align: center;
  font-size: 2em !important;
  background-color: #123456 !important;
  color: #fff !important;
  box-shadow: 2px 2px 2px #00000080, 10px 1px 12px #00000080,
    2px 2px 10px #00000080, 2px 2px 3px #00000080, inset 2px 2px 10px #00000080,
    inset 2px 2px 10px #00000080, inset 2px 2px 10px #00000080,
    inset 2px 2px 10px #00000080 !important;
  border-radius: 15px !important;
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
.bio-title:hover {
  animation: none !important;
}
.category {
  background-color: #ffffff !important;
}
</style>
<!--JS you're horrible================================--->
<script>
import Footer from "@/components/Footer.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import FlipCard from "@/components/FlipCard.vue";
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "About",
  components: {
    ProfileCard,
    FlipCard,
    Footer,
    Carousel,
    Slide
  },
};
</script>
