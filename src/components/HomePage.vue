<template>
  <div>
    <WelcomeLoader v-if="loader" />
    <div class="px-20" v-else>
      <NavBar />
      <HeroPage />
      <SocialAccount />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import WelcomeLoader from './loader/WelcomeLoader.vue'
import NavBar from './Navigations/NavBar.vue'
import SocialAccount from './Navigations/SocialAccount.vue'
import HeroPage from './HeroPage.vue'

const loader = ref(true)
onMounted(() => {
  setTimeout(() => {
    loader.value = false
  }, 5000)
})
</script>

<style scooped>
.content {
  padding-top: 100px;
}
</style>
