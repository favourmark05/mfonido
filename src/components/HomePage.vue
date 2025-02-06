<template>
  <div class="overflow-x-hidden">
    <WelcomeLoader v-if="loader" />
    <div class="px-5 lg:px-20 md:px-15" v-else>
      <NavBar />
      <HeroPage />
      <AboutMe/>
      <MyTools/>
      <MyProjects/>
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
import AboutMe from './AboutMe.vue'
import MyTools from './MyTools.vue'
import MyProjects from './MyProjects.vue'

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
