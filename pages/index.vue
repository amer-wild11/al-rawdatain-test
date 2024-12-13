<template>
  <main class="landing-page">
    <LandingHero />
  </main>
</template>

<script lang="ts" setup>
const globalStore = useMyGlobalStore()
const title = ref('')
onMounted(() => {
  globalStore.detectLang()
  title.value = globalStore.language == 'ar' ? 'الصفحة الرئيسية' : 'Home'
  useHead({
    title: title.value
  })
})

</script>

<style scoped lang="scss"></style>