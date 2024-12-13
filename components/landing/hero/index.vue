<template>
  <div class="hero" :class="globalStore.language == 'en' ? 'en' : (globalStore.language == 'ar' ? 'ar' : '')">
    <div class="bg">
      <img src="/main/hero/bg.png" alt="">
    </div>
    <div class="container ">
      <LandingHeroText />
      <LandingHeroSearchForm />
    </div>
  </div>
</template>

<script setup>
const globalStore = useMyGlobalStore()

</script>

<style scoped lang="scss">
.hero {
  background: linear-gradient(to bottom, transparent 10%, $bg-color);
  width: 100%;
  min-height: calc(100dvh - $header-height);
  position: relative;
  overflow: hidden;
  display: flex;

  &.ar {
    direction: rtl;
  }



  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .container {
    padding-top: 100px;
    color: white;

    @media (max-width: 767px) {
      padding-top: 60px;
    }
  }
}
</style>
