<template>
  <button class="btn-btn" content="{{ buttonText }}"></button>
</template>

<script>
export default {
  name: "Button",
  data: () => {
    return {
      buttonText: this.buttonText,
    };
  },
};
</script>

<style>
.btn-btn {
  display: block;
  width: 6rem;
  height: 6rem;
  text-align: center;
  text-justify: space-around;
  border-radius: 17px;
  box-shadow: 7px 7px 7px #777, -7px -7px 7px #333, -7px 7px 7px #333,
    7px -7px 7px #777;
  transform: translate(-250px);
}
.btn:hover {
  transform: translate(-250px) scale(1.3);
  box-shadow: 7px 7px 7px #fff, -7px -7px 7px #fff, -7px 7px 7px #fff,
    7px -7px 7px #fff;
}
</style>
