<template>
  <div class="profile-card">
    <img
      src="@/assets/profile-pic.jpg"
      class="profile-card__image"
      alt="profile image"
    />
    <div class="profile-card__info">
      <h3 class="profile-card__name">{{ name }}</h3>
      <p class="profile-card__bio">{{ bio }}</p>
    </div>
  </div>
</template>

<style scoped>
.profile-card {
  display: inline-block;
  width: 24rem;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  text-align: center;
  text-justify: space-around;
  border-radius: 17px;
  position: relative;
  box-shadow: 7px 7px 7px #777, -7px -7px 7px #777, -7px 7px 7px #777,
    7px -7px 7px #777;
}
.profile-card__image {
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  margin-top: 40px;
  position: relative;
}
</style>

<script>
export default {
  name: "ProfileCard",
  data: () => {
    return {
      name: "Oscar Bahamonde",
      bio: "I consider myself a long life learner that loves to see the big picture but also being versatile enough to take any position on a cross-functional team to cover the details. I'm currently working as Data/Backend Engineer and also doing freelance as Developer using modern stacks",
    };
  },
};
</script>
