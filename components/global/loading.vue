<template>
  <div class="loading flex items-center justify-center">
    <span>{{ percent }}%</span>
    <span class="progress">
      <span class="progressValue" :style="{ width: percent + '%' }"></span>
    </span>
  </div>
</template>

<script setup>
const percent = ref(0)

onMounted(() => {
  const int = setInterval(() => {
    if (percent.value < 100) {
      percent.value++
    } else {
      clearInterval(int)
      useGsap.to('.loading', {
        opacity: 0,
        duration: 0
      })
      setTimeout(() => {
        useGsap.to('.loading', {
          display: 'none'
        })
      }, 200);
    }
  }, 10);
})
</script>

<style scoped lang="scss">
.loading {
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 1;
  transition: 1;
  font-size: 60px;
  color: $main-color;
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  gap: 10px;
  flex-direction: column;

  .progress {
    width: 90%;
    max-width: 400px;
    border: 1px solid $main-color;
    height: 20px;
    border-radius: 100px;
    position: relative;

    .progressValue {
      position: absolute;
      height: 100%;
      top: 50%;
      left: 0%;
      transform: translate(-0%, -50%);
      border-radius: 100px;
      background-color: $light-main-color;
      display: inline-block;
    }
  }
}
</style>